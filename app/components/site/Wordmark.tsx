import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

const logoFont = Poppins({ subsets: ['latin'], weight: '600', display: 'swap' });

interface Props {
  className?: string;
}

/**
 * Hyson Works 로고 (C안) — 소문자 워드마크, hyson 의 o 는 진행 표시처럼 점이 도는 브랜드 컬러 링.
 * 글자색은 currentColor 를 따르므로 어두운·밝은 배경 모두에서 쓴다.
 */
export function Wordmark({ className }: Props) {
  return (
    <span
      aria-label="hyson works"
      className={cn(logoFont.className, 'inline-flex items-baseline text-[21px] leading-none tracking-[-0.03em]', className)}
    >
      <span aria-hidden>hys</span>
      <LogoRing className="mx-[0.015em] h-[0.84em] w-[0.7em] self-baseline" />
      <span aria-hidden>n</span>
      <span aria-hidden className="ml-[0.24em]">
        works
      </span>
    </span>
  );
}

/** 로고의 o — 심볼만 따로 써야 할 때(파비콘 등)도 같은 모양 */
export function LogoRing({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 22 26.5" className={cn('inline-block text-brand', className)}>
      <circle cx="10" cy="17.2" r="7.4" fill="none" stroke="currentColor" strokeWidth="3.9" />
      <circle cx="17.6" cy="5.3" r="3.1" fill="currentColor" />
    </svg>
  );
}
