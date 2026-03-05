import { NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";

/**
 * Timing-safe admin authentication.
 * Prevents timing attacks by using constant-time string comparison.
 */
export function verifyAdminAuth(request: Request): NextResponse | null {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    console.error("ADMIN_PASSWORD 환경변수가 설정되지 않았습니다.");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  const authHeader = request.headers.get("Authorization") ?? "";
  const expected = `Bearer ${adminPassword}`;

  const a = Buffer.from(authHeader);
  const b = Buffer.from(expected);

  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return null;
}
