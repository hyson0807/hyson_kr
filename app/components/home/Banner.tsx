'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

/**
 * 작은 둥근 카드에서 화면 가득 펼쳐지는 이미지 배너.
 * clip-path 로 잘라 낸 영역을 스크롤에 맞춰 넓히고, 사진은 확대 상태에서 원래 크기로 줌아웃한다.
 */
export function Banner() {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 10%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.5 });

  // 시작할 때 잘려 있는 비율 — 데스크톱은 가로로 화면의 절반 남짓, 모바일은 좁은 화면이라 조금만
  const insetX = isDesktop ? 22 : 7;
  const insetY = isDesktop ? 14 : 10;
  const clipPath = useTransform(
    progress,
    [0, 1],
    [`inset(${insetY}% ${insetX}% ${insetY}% ${insetX}% round 40px)`, 'inset(0% 0% 0% 0% round 0px)'],
  );
  const scale = useTransform(progress, [0, 1], [1.3, 1]);
  const textOpacity = useTransform(progress, [0.45, 0.9], [0, 1]);
  const textY = useTransform(progress, [0.45, 0.9], [40, 0]);

  return (
    <section ref={ref} data-tone="dark" className="relative">
      <motion.div style={{ clipPath }} className="relative h-[480px] overflow-hidden md:h-[680px]">
        <motion.div style={{ scale }} className="absolute inset-0">
          <Image
            src="/images/generated/banner.webp"
            alt="카페 창가에서 스마트폰을 보며 웃는 사람"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/35" />
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-0 flex items-center justify-center px-6 text-center"
        >
          <p className="text-4xl leading-[1.3] font-bold text-white text-display drop-shadow-sm md:text-6xl">
            사용자의 하루에
            <br />
            더 가까운 앱을
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const query = window.matchMedia('(min-width: 768px)');
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return isDesktop;
}
