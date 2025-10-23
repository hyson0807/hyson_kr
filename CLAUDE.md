# 개인 홈페이지 개발 가이드

## 기술 스택
- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4

---

## 디자인 시스템 (모던 다크 테마)

### 색상
```css
배경: bg-zinc-950, bg-zinc-900
텍스트: text-white, text-gray-400
포인트: text-blue-400, bg-blue-500
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

---

## 폴더 구조
```
app/
├── components/     # 공통 컴포넌트 (Sidebar, MobileHeader, types)
├── layout.tsx      # 전역 레이아웃
├── page.tsx        # 홈
├── about/page.tsx
├── projects/page.tsx
└── contact/page.tsx
```

---

## 체크리스트
- [ ] 모바일(375px) / 태블릿(768px) / 데스크톱(1024px+) 확인
- [ ] 호버 효과 + 트랜지션 적용
- [ ] 색상 팔레트 준수
- [ ] TypeScript 타입 정의

---

**업데이트**: 2025-10-24