'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';
import { projects } from '@/app/data';
import { Reveal } from '../site/Reveal';

const platformCount = new Set(projects.flatMap((project) => project.platforms)).size;
const liveCount = projects.filter((project) => project.status === 'live').length;

const stats = [
  { value: projects.length, suffix: '개', title: '함께 만든 프로젝트', body: '모바일 앱부터 웹 서비스,\nmacOS 앱까지 만들었어요.' },
  { value: platformCount, suffix: '개', title: '다루는 플랫폼', body: 'iOS · Android · Web · macOS를\n한 팀에서 만들어요.' },
  { value: liveCount, suffix: '개', title: '운영 중인 서비스', body: '출시 후에도 업데이트하며\n계속 운영하고 있어요.' },
  { value: 14, suffix: '개', title: '지원해 본 언어', body: '다국어 UI와 해외 결제로\n글로벌 사용자를 만나요.' },
];

export function Stats() {
  return (
    <section data-tone="light" className="px-6 pt-16 pb-24 text-neutral-900 md:pt-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl leading-[1.3] font-bold text-display md:text-[40px]">
            직접 만들고,
            <br />
            직접 운영해 온 스튜디오
          </h2>
          <p className="mt-5 text-[15px] leading-7 text-neutral-500 keep-all">
            직접 만들어 본 것만 제안합니다. Hyson Works의 서비스로 먼저 검증한 방식으로 함께합니다.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.title} delay={i * 0.08}>
              <p className="text-4xl font-bold text-display md:text-5xl">
                <CountUp to={stat.value} />
                <span className="ml-0.5 text-3xl md:text-4xl">{stat.suffix}</span>
              </p>
              <p className="mt-3 font-bold">{stat.title}</p>
              <p className="mt-2 text-sm leading-6 whitespace-pre-line text-neutral-500">{stat.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref}>{value}</span>;
}
