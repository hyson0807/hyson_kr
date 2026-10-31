# 앱 데이터 구조 (app/data/)

## projects.ts — 메인 사이트 프로젝트 (홈 · /projects · 상세 · 푸터 · sitemap)
```typescript
interface Project {
  slug: string;                 // /projects/[slug]
  title: string; subtitle: string;
  categories: ProjectCategory[]; // 'app'|'web'|'mac'|'commerce'|'health'|'education'|'community'|'b2b' — 사이드바 필터
  platforms: ('ios'|'android'|'web'|'macos')[];
  year: number; launch?: string; // '2026.07'
  status: 'live' | 'beta' | 'ended';
  featured?: boolean;           // 홈 노출 (배열 순서대로)
  thumbnail: string;            // 카드 · 모자이크 · 상세 대표 이미지
  theme: { from; to; dark? };   // 이미지 패널 그라디언트
  intro: string;
  sections: { title; body; images: ProjectImage[] }[]; // 2~4개
  highlights: string[];         // 핵심 포인트 3개
  stack: string[];
  links: { appStore?; playStore?; website?; download? };
}
// ProjectImage.kind: 'phone' | 'video'(poster 필수) | 'browser' | 'plain' | 'icon'
```
- 헬퍼: `getProjects`, `getProjectBySlug`, `getProjectsByCategory`, `getFeaturedProjects`, `getAdjacentProject`, `getProjectKind`
- 문구 원칙: 모든 프로젝트를 "Hyson Works가 진행한 프로젝트"로 쓴다 (내부/외부 구분 · 1인 표현 없음)

## 이미지
- `public/images/projects/<slug>/` — 실제 화면 (스토어 스크린샷, 사이트 캡처, hydo 홍보 영상) webp
- `public/images/generated/` — OpenAI 이미지 생성으로 만든 키 비주얼 · WhyUs 카드 · 배너 (실제 화면이 아닌 분위기용)
- `public/images/og/<slug>.jpg` — 상세 페이지 공유 이미지(1200×630 JPG, 카카오톡 등 webp 미지원 대비). `thumbnail` 을 바꾸면 같이 다시 만든다

## hydo-notices.ts — hydo 앱 공지사항

이 사이트가 그리는 데이터가 아니다. **hydo iOS 앱이 읽어 가는 콘텐츠**다
(`/api/hydo/notices` 라우트가 이 배열을 필터링해서 내보낸다).

`index.ts` 로 **re-export 하지 않는다** — 하면 모든 페이지 번들에 딸려 간다.
라우트 핸들러만 직접 import 한다.

```typescript
type HydoNotice = {
  id: string;           // 앱이 "봤음"을 기록하는 키. 배포 후 절대 바꾸지 말 것
  title: string;
  body: string;         // 평문. 줄바꿈은 \n (마크다운·HTML 안 먹는다)
  publishedAt: string;  // 이 시각부터 노출. KST 오프셋 허용
  expiresAt?: string;   // 이 시각부터 숨김. 대부분 넣을 것
  minVersion?: string;  // 이 앱 버전 이상에만
  maxVersion?: string;  // 이 앱 버전 미만에만
};
```

공지 발행 = 배열에 항목 추가 + `main` push. 상세는 파일 맨 위 주석에 있다.
## SEO
- 하위 페이지 메타데이터는 `app/lib/seo.ts` 의 `pageMetadata()` 로 만든다 — Next 는 openGraph · twitter 를 통째로 덮어써서,
  직접 쓰면 og:image · siteName · locale 이 빠진다. 긴 소개문은 `toMetaDescription()` 으로 150자 안쪽으로 줄인다
- 구조화 데이터: 루트 레이아웃에 Organization(+logo `public/logo.png`) · WebSite, 상세 페이지에 BreadcrumbList · CreativeWork
- `/projects` 목록은 `useSearchParams` 때문에 정적 렌더가 Suspense fallback 으로 대체된다 — fallback 에 `ProjectsGridView active="all"` 을
  넘겨 정적 HTML 에도 h1 · 카드 · 링크가 들어가게 했다. 이 fallback 을 지우면 목록이 검색엔진에 안 보인다
- 새 페이지를 만들면 `app/sitemap.ts` 에 추가한다
