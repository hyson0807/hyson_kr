'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/** 스크롤하면 여백이 줄며 화면 가득 펼쳐지는 이미지 배너 */
export function Banner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const inset = useTransform(scrollYProgress, [0, 1], ['6%', '0%']);
  const radius = useTransform(scrollYProgress, [0, 1], [28, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section ref={ref} data-tone="dark" className="relative">
      <motion.div style={{ marginInline: inset }} className="relative">
        <motion.div
          style={{ borderRadius: radius }}
          className="relative h-[420px] overflow-hidden md:h-[560px]"
        >
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
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <p className="text-4xl leading-[1.3] font-bold text-white text-display drop-shadow-sm md:text-6xl">
              사용자의 하루에
              <br />
              더 가까운 앱을
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
