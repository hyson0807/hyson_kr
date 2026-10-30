import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

/** Hyson Works 워드마크 — 브랜드 컬러 사각 심볼 + 텍스트 */
export function Wordmark({ className }: Props) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <span
        aria-hidden
        className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-[13px] font-extrabold tracking-tight text-white"
      >
        H
      </span>
      <span className="text-[17px] font-extrabold tracking-[-0.02em]">Hyson Works</span>
    </span>
  );
}
