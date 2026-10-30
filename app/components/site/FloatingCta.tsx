'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSectionTone } from '@/app/hooks/useSectionTone';
import { CtaCapsule } from './CtaCapsule';

/**
 * 첫 화면을 지나면 하단 중앙에 떠오르는 CTA 캡슐.
 * 같은 캡슐이 본문에 있는 구간(`data-cta-inline`)과 푸터에서는 숨긴다.
 */
export function FloatingCta() {
  const tone = useSectionTone(-48, 'light');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const pastHero = window.scrollY > window.innerHeight * 0.6;
      const blockers = document.querySelectorAll<HTMLElement>('[data-cta-inline], footer');
      let blocked = false;
      blockers.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) blocked = true;
      });
      setVisible(pastHero && !blocked);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-5 z-40 flex justify-center px-4"
        >
          <CtaCapsule tone={tone} className="w-full max-w-[600px]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
