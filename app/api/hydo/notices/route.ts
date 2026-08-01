import { NextResponse } from "next/server";
import { hydoNotices, type HydoNotice } from "@/app/data/hydo-notices";

/**
 * hydo 앱이 공지사항을 받아 가는 곳. 인증 없는 공개 콘텐츠다.
 *
 * 공지 본문은 `app/data/hydo-notices.ts` 에 있고 발행 절차도 그 파일 맨 위에 있다.
 *
 * ## 왜 hydo-api 가 아니라 여기인가
 *
 * hydo 의 서버(`api.hydo.hyson.kr`)는 Neon 무료 플랜을 쓰는데, 무료 플랜은 월
 * compute 시간 자체가 한도다. 앱을 열 때마다 공지를 조회하는 걸 거기 붙이면
 * 잠든 DB 를 깨우느라 콜드 스타트 비용을 공지 확인에 태우게 된다.
 * 여기는 Vercel 위의 정적 데이터라 DB 를 건드리지 않는다.
 *
 * ## 필터를 나눠 가진 이유
 *
 *   날짜  — **서버가** 한다. 기기 시계는 사용자가 바꿀 수 있다
 *   버전  — **앱이** 한다. `?v=` 를 받으면 CDN 캐시가 버전마다 쪼개지는데,
 *          앱에는 이미 `AppVersion.compare` 가 있다
 */

/**
 * ⚠️ 반드시 있어야 한다. 없으면 Next 가 빌드 시점에 프리렌더해서 아래 `now` 가
 * **배포 시각**으로 얼어붙고, 그 뒤로 `publishedAt`/`expiresAt` 이 영영 안 움직인다.
 */
export const dynamic = "force-dynamic";

/** 앱으로 나가는 형태. `expiresAt` 은 이미 여기서 걸렀으므로 싣지 않는다. */
type NoticePayload = {
  id: string;
  title: string;
  body: string;
  /** 항상 `2026-08-05T00:00:00.000Z` 형태. 앱의 디코더가 이 모양을 읽는다. */
  publishedAt: string;
  minVersion: string | null;
  maxVersion: string | null;
};

function parseDate(value: string | undefined): Date | null | undefined {
  if (value === undefined) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

export async function GET() {
  try {
    const now = Date.now();
    const problems: string[] = [];
    const seenIds = new Set<string>();
    const live: { notice: HydoNotice; publishedAt: Date }[] = [];

    for (const notice of hydoNotices) {
      const id = notice.id?.trim();

      if (!id || !notice.title?.trim() || !notice.body?.trim()) {
        problems.push(`빈 필드: ${JSON.stringify(notice.id ?? notice)}`);
        continue;
      }

      // id 가 겹치면 앱의 "이 공지를 봤다" 기록이 두 공지에 함께 걸린다.
      // 하나를 닫으면 다른 하나도 안 뜨므로 조용히 넘길 문제가 아니다.
      if (seenIds.has(id)) {
        problems.push(`id 중복: ${id}`);
        continue;
      }
      seenIds.add(id);

      const publishedAt = parseDate(notice.publishedAt);
      const expiresAt = parseDate(notice.expiresAt);

      if (!publishedAt) {
        problems.push(`publishedAt 을 읽을 수 없음: ${id} (${notice.publishedAt})`);
        continue;
      }
      if (expiresAt === null) {
        problems.push(`expiresAt 을 읽을 수 없음: ${id} (${notice.expiresAt})`);
        continue;
      }

      if (publishedAt.getTime() > now) continue;
      if (expiresAt && expiresAt.getTime() <= now) continue;

      live.push({ notice, publishedAt });
    }

    // 잘못된 항목은 버리되 요청 자체는 성공시킨다 — 공지 하나가 잘못됐다고
    // 앱이 나머지 공지를 못 받으면 안 된다. 대신 흔적은 남긴다.
    if (problems.length > 0) {
      console.error("hydo 공지 항목을 건너뜀:", problems);
    }

    const notices: NoticePayload[] = live
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
      .map(({ notice, publishedAt }) => ({
        id: notice.id.trim(),
        title: notice.title.trim(),
        body: notice.body,
        publishedAt: publishedAt.toISOString(),
        minVersion: notice.minVersion ?? null,
        maxVersion: notice.maxVersion ?? null,
      }));

    return NextResponse.json(
      { notices },
      {
        headers: {
          // 브라우저는 캐시하지 않고 CDN 만 5분 잡는다. 공지를 push 한 뒤
          // 반영까지 최대 5분이고, 그동안 원본이 죽어도 한 시간은 옛 값을 준다.
          "Cache-Control": "public, max-age=0, s-maxage=300, stale-while-revalidate=3600",
        },
      }
    );
  } catch (err) {
    console.error("hydo 공지 조회 실패:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
