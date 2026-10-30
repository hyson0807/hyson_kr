import Link from 'next/link';
import { ArrowUpRight, LayoutGrid } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  tone: 'dark' | 'light';
  className?: string;
}

/** 레퍼런스의 "No.1 IT 파트너 / 궁금하다면?" 캡슐 — 플로팅 CTA 와 하단 CTA 가 함께 쓴다 */
export function CtaCapsule({ tone, className }: Props) {
  const onDark = tone === 'dark';

  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-2xl p-2.5 sm:pl-5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] sm:gap-6',
        onDark ? 'bg-white text-neutral-900' : 'bg-neutral-950 text-white',
        className,
      )}
    >
      <p className="hidden min-w-0 flex-1 text-sm leading-snug font-semibold sm:block">
        꾸준히, 더 나은 앱을 만듭니다
        <br />
        Hyson Works가 궁금하다면?
      </p>
      <div className="flex flex-1 items-center justify-end gap-1.5 sm:flex-none">
        <Link
          href="/projects"
          className={cn(
            'inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl px-3.5 sm:flex-none py-2.5 text-[13px] font-semibold transition-colors',
            onDark
              ? 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200'
              : 'bg-white/10 text-white hover:bg-white/20',
          )}
        >
          <LayoutGrid className="h-3.5 w-3.5" />
          프로젝트 보기
        </Link>
        <Link
          href="/contact"
          className="inline-flex flex-1 items-center justify-center gap-1 rounded-xl bg-brand sm:flex-none px-3.5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-brand-hover"
        >
          문의하기
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
