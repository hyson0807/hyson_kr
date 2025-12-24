# 폴더 구조

```
app/
├── components/        # 공통 컴포넌트
│   ├── Sidebar.tsx    # 데스크톱 네비게이션
│   ├── MobileHeader.tsx # 모바일 헤더
│   ├── AnimatedSection.tsx # 스크롤 애니메이션 래퍼
│   └── types.ts       # 테마 타입 정의
├── hooks/             # 커스텀 훅
│   └── useInView.ts   # Intersection Observer 기반 가시성 감지
├── data/              # 앱 데이터 중앙 관리
│   ├── types.ts       # App 인터페이스 및 타입 정의
│   ├── apps.ts        # 앱 데이터 + 헬퍼 함수
│   └── index.ts       # export 통합
├── layout.tsx         # 전역 레이아웃
├── page.tsx           # 홈 (Hero, About, Apps, Contact CTA)
├── about/page.tsx     # 회사 소개 (핵심 가치, 기술 스택, 서비스)
├── projects/page.tsx  # 앱 소개 (내부 프로젝트 + 참여 프로젝트)
└── contact/page.tsx   # 연락처 및 문의 폼
```