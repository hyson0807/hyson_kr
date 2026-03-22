import { NextResponse } from "next/server";
import { verifyAdminAuth } from "@/app/lib/auth";
import { getDb } from "@/app/lib/neon";

export async function GET(request: Request) {
  const authError = verifyAdminAuth(request);
  if (authError) return authError;

  const { searchParams } = new URL(request.url);
  const targetType = searchParams.get("targetType");
  const targetId = searchParams.get("targetId");

  if (!targetType || !targetId) {
    return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
  }

  try {
    const sql = getDb();

    if (targetType === "question") {
      const rows = await sql`
        SELECT
          q.id, q.title, q.content, q.category,
          q.created_at AS "createdAt",
          u.id AS "authorId", u.nickname AS "authorNickname",
          u.email AS "authorEmail", u.profile_image AS "authorProfileImage"
        FROM question q
        JOIN "user" u ON u.id = q.user_id
        WHERE q.id = ${targetId}
      `;
      if (rows.length === 0) {
        return NextResponse.json({ error: "Question not found" }, { status: 404 });
      }
      return NextResponse.json({ content: rows[0] });
    }

    if (targetType === "answer") {
      const rows = await sql`
        SELECT
          a.id, a.content, a.created_at AS "createdAt",
          a.question_id AS "questionId", a.deleted_at AS "deletedAt",
          u.id AS "authorId", u.nickname AS "authorNickname",
          u.email AS "authorEmail", u.profile_image AS "authorProfileImage",
          q.title AS "questionTitle"
        FROM answer a
        JOIN "user" u ON u.id = a.user_id
        JOIN question q ON q.id = a.question_id
        WHERE a.id = ${targetId}
      `;
      if (rows.length === 0) {
        return NextResponse.json({ error: "Answer not found" }, { status: 404 });
      }
      return NextResponse.json({ content: rows[0] });
    }

    return NextResponse.json({ error: "Invalid targetType" }, { status: 400 });
  } catch (err) {
    console.error("신고 콘텐츠 조회 실패:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
