'use client';

import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
}

// 홈 히어로와 비슷한 느낌의 페이지 상단 타이틀 (중앙 정렬 + framer-motion 마운트 애니메이션)
export function PageHero({ title, subtitle, className = '' }: PageHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`mb-16 text-center ${className}`}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-4 text-5xl md:text-7xl font-bold text-white"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mx-auto max-w-2xl text-lg md:text-xl text-gray-400"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
