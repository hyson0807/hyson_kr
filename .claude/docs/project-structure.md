# 폴더 구조

```
components/ui/         # shadcn/ui 컴포넌트 (select, card, badge, button)
lib/utils.ts           # cn() 클래스 병합 유틸 (shadcn)
app/
├── (site)/            # 메인 사이트 — layout.tsx 가 Header · Footer · FloatingCta 를 붙인다
│   ├── page.tsx       # 홈
│   ├── projects/      # 목록(ProjectsGrid) + [slug] 상세
│   └── contact/       # 문의 (ContactForm)
├── components/
│   ├── site/          # Header, Footer, FloatingCta, CtaCapsule, Wordmark, Reveal
│   ├── home/          # 홈 섹션 (Hero, ProjectMosaic, Intro, WhyUs, HomeCanvas, Stats, Banner, ...)
│   ├── projects/      # ProjectCard, DeviceFrames(PhoneFrame, VideoPhoneFrame, BrowserFrame, ImagePanel)
│   ├── AnimatedSection.tsx # 제품 지원 페이지에서 쓰는 스크롤 애니메이션 래퍼
│   └── ErrorBoundary.tsx
├── hooks/             # useSectionTone(헤더/CTA 톤), useInView
├── data/              # projects.ts, types.ts, hydo-notices.ts, hydo-holidays.ts, index.ts
├── fonts/             # PretendardVariable.woff2
├── lib/               # auth.ts, neon.ts
├── api/hydo/          # hydo 앱이 읽는 공개 API (notices, holidays)
├── api/pibugom/       # 피부곰 신고 관리 API
├── hydo/ prup/ pibugom/ ggumteul-math/  # 제품 지원 · 약관 페이지 (각자 헤더)
├── pibugom2129/       # 피부곰 관리자
└── layout.tsx         # 루트 — 폰트 · 메타데이터만
```
