'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section data-tone="dark" className="relative px-6 pt-40 pb-20 text-center text-white md:pt-48 md:pb-24">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease }}
        className="mx-auto max-w-4xl text-[34px] leading-[1.25] font-bold text-display sm:text-5xl md:text-[64px]"
      >
        아이디어부터 출시,
        <br className="sm:hidden" /> 그 이후까지
        <br />
        꾸준히 더 나은
        <br className="sm:hidden" /> 앱을 만듭니다
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease }}
        className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-white/60 keep-all md:text-base"
      >
        iOS · Android · Web · Mac 앱의 기획 · 디자인 · 개발 · 운영까지
        <br className="hidden sm:block" /> Hyson Works가 처음부터 끝까지 함께 만듭니다.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.28, ease }}
        className="mt-9 flex justify-center gap-2.5"
      >
        <Link
          href="/contact"
          className="rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-brand/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
        >
          프로젝트 문의하기
        </Link>
        <Link
          href="/projects"
          className="rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
        >
          포트폴리오 보기
        </Link>
      </motion.div>
    </section>
  );
}
