'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Props {
  dark: React.ReactNode;
  light: React.ReactNode;
}

/**
 * 레퍼런스처럼 어두운 첫 구간이 스크롤에 따라 흰 배경으로 바뀌게 한다.
 * light 구간 시작점이 화면 위에서 80% → 35% 지점을 지나는 동안 배경색을 보간한다.
 */
export function HomeCanvas({ dark, light }: Props) {
  const marker = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: marker, offset: ['start 0.8', 'start 0.35'] });
  const backgroundColor = useTransform(scrollYProgress, [0, 1], ['#0a0a0a', '#ffffff']);

  return (
    <motion.div style={{ backgroundColor }}>
      {dark}
      <div ref={marker}>{light}</div>
    </motion.div>
  );
}
