import { NextResponse } from "next/server";
import { verifyAdminAuth } from "@/app/lib/auth";
import { getDb } from "@/app/lib/neon";

export async function POST(request: Request) {
  const authError = verifyAdminAuth(request);
  if (authError) return authError;

  try {
    const { userId } = await request.json();
    if (!userId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    const sql = getDb();

    // 유저 익명화 및 비활성화 (user.service.ts의 deleteAccount 로직과 동일)
    const result = await sql`
      UPDATE "user" SET
        deleted_at = NOW(),
        nickname = NULL,
        profile_image = NULL,
        email = ${"blacklisted_" + userId + "@withdrawn.local"},
        google_id = NULL,
        apple_id = NULL,
        refresh_token = NULL,
        birth_month = NULL,
        birth_year = NULL,
        gender = NULL,
        skin_concerns = '{}',
        is_onboarded = false,
        updated_at = NOW()
      WHERE id = ${userId} AND deleted_at IS NULL
      RETURNING id
    `;

    if (result.length === 0) {
      return NextResponse.json({ error: "User not found or already blacklisted" }, { status: 404 });
    }

    // 해당 유저의 질문 전체 삭제 (CASCADE로 관련 답변/이미지/북마크/알림도 삭제)
    await sql`DELETE FROM question WHERE user_id = ${userId}`;

    // 해당 유저의 답변 소프트 딜리트 ("삭제된 댓글입니다"로 표시)
    await sql`UPDATE answer SET deleted_at = NOW() WHERE user_id = ${userId} AND deleted_at IS NULL`;

    // 북마크 삭제
    await sql`DELETE FROM bookmark WHERE user_id = ${userId}`;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("블랙리스트 처리 실패:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
