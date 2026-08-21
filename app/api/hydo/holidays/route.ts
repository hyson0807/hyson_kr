import { NextResponse } from "next/server";
import { hydoHolidayPatches } from "@/app/data/hydo-holidays";

/**
 * hydo 앱이 공휴일 패치를 받아 가는 곳. 인증 없는 공개 콘텐츠다.
 *
 * 왜 hydo-api 가 아니라 여기인가 — Neon 무료 플랜의 compute 시간 때문이다.
 * 공지 라우트(`../notices`)와 같은 이유이고 같은 모양이다.
 *
 * ## 공지 라우트와 다른 점 둘
 *
 *   1. `export const dynamic = "force-dynamic"` 이 **없다.** 공지는 요청 시각으로
 *      publishedAt/expiresAt 을 걸러야 해서 필요했지만, 여기는 시각에 의존하는 계산이
 *      하나도 없다 — 패치는 언제 받아도 같은 값이라 정적 렌더링이 되는 편이 낫다.
 *      ⚠️ 나중에 날짜 필터를 넣게 되면 그 줄을 **반드시 함께** 넣을 것.
 *      없으면 `now` 가 빌드 시각으로 얼어붙는다.
 *
 *   2. 버전 필터가 없다. 패치는 멱등이라 어느 버전이 받아도 결과가 같다.
 */

/** `YYYY-MM-DD`. 앱의 `HolidayTable.ymd(fromISODay:)` 와 같은 것을 받는다. */
const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/;

type DayPayload = {
  date: string;
  /** null 이면 "이날은 공휴일이 아니다". `note` 는 싣지 않는다. */
  name: string | null;
};

export async function GET() {
  try {
    const problems: string[] = [];

    // 날짜당 하나로 접는다. **뒤엣것이 이긴다** — 앱의 병합 규칙과 같아야 한다.
    // 여기서 안 접으면 같은 날짜가 둘 나가고, 순서가 흔들리면 결과도 흔들린다.
    const byDate = new Map<string, DayPayload>();

    for (const patch of hydoHolidayPatches) {
      const date = patch.date?.trim();

      if (!date || !ISO_DAY.test(date)) {
        problems.push(`날짜 형식: ${JSON.stringify(patch.date)}`);
        continue;
      }

      // 2026-02-31 같은 없는 날. 앱에서는 무해하지만(어떤 날과도 안 맞는다)
      // 여기서 잡으면 오타를 발행 전에 안다.
      const parsed = new Date(`${date}T00:00:00Z`);
      if (Number.isNaN(parsed.getTime()) || !parsed.toISOString().startsWith(date)) {
        problems.push(`존재하지 않는 날짜: ${date}`);
        continue;
      }

      const name = patch.name?.trim();
      byDate.set(date, { date, name: name ? name : null });
    }

    // 잘못된 항목은 버리되 요청 자체는 성공시킨다 — 하나가 잘못됐다고 나머지 패치를
    // 못 받으면 안 된다. (공지 라우트와 같은 태도)
    if (problems.length > 0) {
      console.error("hydo 공휴일 패치를 건너뜀:", problems);
    }

    const days = [...byDate.values()].sort((a, b) => a.date.localeCompare(b.date));

    return NextResponse.json(
      { days },
      {
        headers: {
          "Cache-Control": "public, max-age=0, s-maxage=300, stale-while-revalidate=3600",
        },
      }
    );
  } catch (error) {
    console.error("hydo 공휴일 조회 실패:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
