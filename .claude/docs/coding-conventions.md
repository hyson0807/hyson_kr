# 코딩 컨벤션

## TypeScript
```tsx
interface Props {
  title: string;
  onClick: () => void;
}
```

## 스타일링
```tsx
// Tailwind 클래스 순서: 레이아웃 → 크기 → 간격 → 색상 → 타이포그래피 → 기타
className="flex items-center w-full px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors"
```

## 인터랙션
```tsx
// 호버 효과 + 트랜지션 필수
className="hover:opacity-90 transition-opacity"
className="hover:bg-zinc-800 transition-colors"

// 호버 규칙:
// - 배경색 변경: transition-colors 사용
// - 투명도 변경: transition-opacity 사용
// - 복합 효과 (그림자 등): transition-all 사용
// - CTA 버튼에는 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 추가
```

## 스크롤 애니메이션 (AnimatedSection)
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