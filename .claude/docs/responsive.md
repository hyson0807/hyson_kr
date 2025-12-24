# 반응형 규칙

## Mobile-First 작성
```tsx
// 올바른 예
<div className="text-base md:text-lg lg:text-xl">

// 브레이크포인트: sm(640) md(768) lg(1024) xl(1280)
```

## 레이아웃 패턴
```tsx
// 그리드
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

// 사이드바 여백
<main className="lg:ml-20 pt-16 lg:pt-0">

// 숨김/표시
<div className="hidden lg:block"> // 데스크톱만
<div className="lg:hidden"> // 모바일만
```