'use client';

import { useEffect, useState } from 'react';

export type SectionTone = 'dark' | 'light';

/**
 * 화면 y 지점 아래에 깔린 섹션의 톤을 돌려준다.
 * 섹션은 `data-tone="dark" | "light"` 로 자기 배경 톤을 표시한다.
 * y 가 음수면 화면 아래에서부터 잰다 (하단 플로팅 CTA 용).
 */
export function useSectionTone(y: number, fallback: SectionTone = 'light'): SectionTone {
  const [tone, setTone] = useState<SectionTone>(fallback);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const point = y >= 0 ? y : window.innerHeight + y;
      const sections = document.querySelectorAll<HTMLElement>('[data-tone]');
      let next: SectionTone = fallback;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= point && rect.bottom > point) {
          next = section.dataset.tone === 'dark' ? 'dark' : 'light';
        }
      });
      setTone(next);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [y, fallback]);

  return tone;
}
