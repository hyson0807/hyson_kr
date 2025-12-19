# Hyson Works 회사 소개 페이지 개발 가이드

## 프로젝트 정보
- **회사명**: Hyson Works
- **슬로건**: 꾸준히, 더 나은 앱을 만듭니다
- **이메일**: contact@hyson.kr
- **GitHub**: github.com/hyson0807
- **서비스**: 크로스플랫폼 앱 개발 (React Native)

## 기술 스택
- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4

---

## 디자인 시스템 (모던 다크 테마)

### 색상
```css
배경: bg-zinc-950, bg-zinc-900
텍스트: text-white, text-gray-400
포인트: text-blue-400, bg-blue-500, bg-blue-600
호버: hover:bg-zinc-800
보더: border-zinc-800
```

### 타이포그래피
```css
H1: text-5xl md:text-6xl font-bold
H2: text-4xl md:text-5xl font-bold
H3: text-3xl font-semibold
본문: text-base ~ text-xl
```

### 간격
```css
섹션: py-24
패딩: px-6 md:px-12 lg:px-24
최대너비: max-w-4xl (텍스트), max-w-6xl (그리드)
```

---

## 반응형 규칙

### Mobile-First 작성
```tsx
// ✅ 올바른 예
<div className="text-base md:text-lg lg:text-xl">

// 브레이크포인트: sm(640) md(768) lg(1024) xl(1280)
```

### 레이아웃 패턴
```tsx
// 그리드
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

// 사이드바 여백
<main className="lg:ml-20 pt-16 lg:pt-0">

// 숨김/표시
<div className="hidden lg:block"> // 데스크톱만
<div className="lg:hidden"> // 모바일만
```

---

## 코딩 컨벤션

### TypeScript
```tsx
interface Props {
  title: string;
  onClick: () => void;
}
```

### 스타일링
```tsx
// Tailwind 클래스 순서: 레이아웃 → 크기 → 간격 → 색상 → 타이포그래피 → 기타
className="flex items-center w-full px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors"
```

### 인터랙션
```tsx
// 호버 효과 + 트랜지션 필수
className="hover:opacity-90 transition-opacity"
className="hover:bg-zinc-800 transition-colors"
```

### 스크롤 애니메이션 (AnimatedSection)
```tsx
import { AnimatedSection } from './components/AnimatedSection';

// 기본 사용 (fadeUp)
<AnimatedSection>
  <div>콘텐츠</div>
</AnimatedSection>

// 애니메이션 타입: fadeUp | fadeIn | fadeLeft | fadeRight | scale
<AnimatedSection animation="fadeIn">

// 딜레이 (ms): 0 | 100 | 200 | 300 | 400 | 500
<AnimatedSection delay={200}>

// 지속시간 (ms): 300 | 500 | 700 | 1000
<AnimatedSection duration={500}>

// 조합 예시
<AnimatedSection animation="fadeUp" delay={100} duration={700}>
```

---

## 폴더 구조
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

---

## 앱 데이터 구조 (app/data/)

### App 인터페이스
```typescript
interface App {
  id: string;              // URL hash용 (isolog, linkjob)
  title: string;
  description: string;     // 짧은 설명
  longDescription?: string; // 상세 설명
  tags: string[];
  status: AppStatus;       // 'released' | 'coming_soon' | 'development'
  platforms: Platform[];   // 'ios' | 'android' | 'web'
  projectType: ProjectType; // 'internal' | 'collaboration'
  image: string;
  storeLinks: StoreLinks;
}
```

### 헬퍼 함수
- `getInternalApps()` - 내부 프로젝트만
- `getCollaborationApps()` - 협업 프로젝트만
- `getReleasedApps()` - 출시된 앱만
- `getAppById(id)` - ID로 앱 찾기

---

## 페이지별 구성

### 홈 (page.tsx)
- Hero Section: 회사명 + 슬로건
- About Preview: 간단한 회사 소개
- Our Apps: 출시 앱 카드 (내부 + 협업 프로젝트)
- Contact CTA: 연락 유도

### About (about/page.tsx)
- 회사 소개
- 핵심 가치 (심플함, 완성도, 꾸준함)
- 기술 스택 (Mobile, Backend, Tools)
- 서비스 태그

### Apps (projects/page.tsx)
- 내부 프로젝트: 직접 개발한 앱
- 참여 프로젝트: 외부 협업 앱
- Coming Soon 카드
- App Store / Google Play 링크

### Contact (contact/page.tsx)
- 연락 방법 (이메일, GitHub)
- 회사 정보 카드
- 문의 폼 (Web3Forms 연동)

---

## 출시 앱

### 내부 프로젝트
- **IsoLog**: 이소티논 복용자를 위한 스마트 복용 관리 앱 (React Native, iOS, Android)

### 참여 프로젝트
- **LinkJob**: 외국인 구인구직 플랫폼 (React Native, iOS, Android)

---

## 체크리스트
- [ ] 모바일(375px) / 태블릿(768px) / 데스크톱(1024px+) 확인
- [ ] 호버 효과 + 트랜지션 적용
- [ ] 색상 팔레트 준수
- [ ] TypeScript 타입 정의
- [ ] 앱 스토어 링크 연결

---

**업데이트**: 2025-12-18