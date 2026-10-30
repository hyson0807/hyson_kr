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