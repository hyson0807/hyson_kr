# 디자인 시스템 (toktokhan.dev 레퍼런스)

메인 사이트(`app/(site)/`)에만 적용된다. 제품 지원 페이지(/hydo, /prup, /pibugom, /ggumteul-math)는 각자 디자인을 유지한다.

## 톤
- 홈은 어두운 첫 구간(`#0a0a0a`) → 스크롤하면 흰 배경으로 전환 (`HomeCanvas`)
- /projects, 상세, /contact 는 흰 배경
- 섹션은 `data-tone="dark" | "light"` 를 단다 — 헤더와 플로팅 CTA 가 이 값을 보고 색을 바꾼다 (`useSectionTone`)

## 로고
- C안: 소문자 워드마크 "hyson works" (Poppins 600), hyson 의 o 는 점이 도는 브랜드 컬러 링
- 코드로 그린다 — `app/components/site/Wordmark.tsx` (`Wordmark`, 심볼만은 `LogoRing`), 파비콘 `app/icon.svg`
- 글자는 currentColor, 링은 항상 `text-brand`

## 색상
```css
브랜드: bg-brand (#1074f8 — 로고 C안 링 색), hover:bg-brand-hover (#0b5fd6)
다크 배경: bg-[#0a0a0a], 카드 bg-white/[0.06]
라이트 텍스트: text-neutral-900 / 본문 text-neutral-500~600 / 메타 text-neutral-400
라이트 면: bg-neutral-50 · bg-neutral-100, 보더 border-neutral-200
```
`<html>` 에 `dark` 클래스가 남아 있으므로(제품 페이지용) 메인 사이트 컴포넌트에는 `dark:` variant 를 쓰지 않는다.

## 타이포그래피 (Pretendard Variable, `app/fonts/`)
```css
히어로: text-[34px] sm:text-5xl md:text-[64px] font-bold text-display
섹션 제목: text-3xl md:text-[40px] leading-[1.3] font-bold text-display
상세 제목: text-5xl md:text-6xl / 섹션 text-2xl md:text-[28px]
본문: text-[15px]~16px leading-7~8 keep-all
```
`text-display` = 자간 -0.03em + 단어 단위 줄바꿈, `keep-all` = 단어 단위 줄바꿈.

## 모션 (framer-motion)
- 등장: `Reveal` (아래에서 28px 떠오름, 0.7s, ease [0.22,1,0.36,1], 한 번만)
- 스크롤 연동: 모자이크 열 패럴랙스, 배너 확장, 배경 다크→화이트
- 카드 hover: 이미지 `scale-105` `duration-500`
- 마퀴: `animate-marquee` / `animate-marquee-reverse` (globals.css)

## 간격
```css
컨테이너: mx-auto max-w-6xl px-6 (텍스트 위주 섹션은 max-w-5xl)
섹션: py-24 ~ py-36, 헤더 아래 첫 섹션은 pt-32 md:pt-40
```
