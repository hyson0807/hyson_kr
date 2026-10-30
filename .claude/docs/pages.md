# 페이지별 구성

메인 사이트 페이지는 `app/(site)/` 라우트 그룹에 있고, `(site)/layout.tsx` 가 Header · Footer · FloatingCta 를 붙인다.
제품 지원 페이지(hydo, prup, pibugom, ggumteul-math)와 관리자(pibugom2129)는 그룹 밖이라 메인 헤더/푸터가 없다.

## 홈 (`(site)/page.tsx`, 컴포넌트는 `app/components/home/`)
1. Hero — 2줄 헤드라인 + CTA 2개
2. ProjectMosaic — 5열(모바일 3열) 프로젝트 타일, 열마다 다른 속도로 스크롤 패럴랙스, hydo 타일은 홍보 영상
3. Intro (`#about`) — 2단 소개 + 서비스 카드 3개
4. WhyUs — 왼쪽 제목 고정, 카드가 겹쳐 올라오는 4가지 이유
5. Stats — 카운트업 숫자 4개 (프로젝트 데이터에서 계산) — 여기서 배경이 흰색으로 전환
6. Banner — 스크롤하면 화면 가득 펼쳐지는 이미지
7. FeaturedProjects — `featured` 프로젝트 6개
8. TechMarquee — 기술 스택 마퀴
9. FinalCta — `data-cta-inline` (이 구간에선 플로팅 CTA 숨김)

## 프로젝트 목록 (`(site)/projects/`)
- 왼쪽 카테고리(모바일은 가로 칩) + 3열 카드 그리드, 선택값은 `?category=` 로 URL 동기화

## 프로젝트 상세 (`(site)/projects/[slug]/page.tsx`)
- 배지 · 제목 · 소개 / 오른쪽 메타(Launch, Platform, Studio, Stack, Links) → 대표 이미지
- 섹션 `01 / 0N` — 제목, 본문, 이미지 패널(`ImagePanel`: phone / video / browser / plain / icon)
- 핵심 포인트 박스 → 목록으로 / 다음 사례 → 문의 CTA
- `generateStaticParams` 로 정적 생성

## Contact (`(site)/contact/`)
- 바로 연락하기(이메일, GitHub) + ContactForm (Web3Forms)
