import { NextResponse } from "next/server";
import { verifyAdminAuth } from "@/app/lib/auth";
import { getDb } from "@/app/lib/neon";

export async function GET(request: Request) {
  const authError = verifyAdminAuth(request);
  if (authError) return authError;

  try {
    const sql = getDb();
    const reports = await sql`
      SELECT
        r.id, r.user_id AS "userId", r.target_type AS "targetType",
        r.target_id AS "targetId", r.reason, r.detail, r.status,
        r.created_at AS "createdAt", r.updated_at AS "updatedAt",
        u.nickname AS "reporterNickname",
        u.email AS "reporterEmail"
      FROM report r
      JOIN "user" u ON u.id = r.user_id
      ORDER BY r.created_at DESC
    `;
    return NextResponse.json({ reports });
  } catch (err) {
    console.error("신고 목록 조회 실패:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  const authError = verifyAdminAuth(request);
  if (authError) return authError;

  try {
    const { id, status, targetType, targetId } = await request.json();
    if (!id || !["resolved", "dismissed"].includes(status)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const sql = getDb();

    // 처리 완료 시 콘텐츠 삭제
    if (status === "resolved" && targetType && targetId) {
      if (targetType === "question") {
        await sql`DELETE FROM question WHERE id = ${targetId}`;
      } else if (targetType === "answer") {
        await sql`UPDATE answer SET deleted_at = NOW() WHERE id = ${targetId} AND deleted_at IS NULL`;
      }
    }

    const result = await sql`
      UPDATE report SET status = ${status}, updated_at = NOW()
      WHERE id = ${id}
      RETURNING id, status
    `;

    if (result.length === 0) {
      return NextResponse.json({ error: "Report not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, report: result[0] });
  } catch (err) {
    console.error("신고 상태 변경 실패:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
