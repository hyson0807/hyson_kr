'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Reveal } from '../site/Reveal';

const reasons = [
  {
    image: '/images/generated/why-1.webp',
    chip: 'Live on App Store · Google Play',
    title: '직접 앱을 출시하고\n운영하고 있기 때문에',
    body: 'hydo, IsoLog, PRUP처럼 Hyson Works가 직접 만든 앱이 지금도 스토어에서 실제 사용자를 만나고 있습니다. 심사, 배포, 업데이트, 사용자 대응까지 직접 겪어 본 과정을 그대로 함께합니다.',
  },
  {
    image: '/images/generated/why-2.webp',
    chip: 'Lock Screen · Widget · Live Activity',
    title: '플랫폼의 끝단까지\n구현해 봤기 때문에',
    body: '잠금화면 배경화면 자동 생성, 홈 화면 위젯, Live Activity, macOS 앱처럼 까다로운 네이티브 기능까지 구현했습니다. 크로스플랫폼과 네이티브 중 서비스에 맞는 방식을 고릅니다.',
  },
  {
    image: '/images/generated/why-3.webp',
    chip: 'NestJS · PostgreSQL · CI/CD',
    title: '서버와 인프라까지\n함께 책임지기 때문에',
    body: '앱만 넘기고 끝나지 않습니다. API 서버와 데이터베이스, 배포 파이프라인, 무중단 서버 이전까지 서비스가 계속 돌아가는 데 필요한 것을 함께 설계하고 운영합니다.',
  },
  {
    image: '/images/generated/why-payments.webp',
    chip: 'Domestic PG · Global PG · In-App',
    title: '국내 · 해외 결제를\n직접 연동해 봤기 때문에',
    body: '국내 PG 카드 정기 결제부터 해외 PG의 달러 결제와 PayPal, 앱스토어 인앱 구독까지 직접 연동했습니다. 결제 검증과 웹훅, 환불, 실패 시 재시도까지 돈이 오가는 흐름을 안전하게 설계합니다.',
  },
];

/**
 * 카드가 스크롤에 맞춰 왼쪽 → 오른쪽 → 왼쪽 … 번갈아 밀려 들어오는 섹션.
 * 이미지와 글의 위치도 카드마다 좌우가 바뀐다 (지그재그).
 * 아래 여백(40vh)은 마지막 카드가 다 들어와 자리 잡은 뒤에 배경 전환(HomeCanvas)이 시작되게 하는 공간.
 */
export function WhyUs() {
  return (
    <section data-tone="dark" className="overflow-hidden px-6 pt-16 pb-[40vh] text-white md:pt-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl leading-[1.3] font-bold text-display md:text-[40px]">
            앱 개발부터 운영까지,
            <br />
            Hyson Works가 필요한 이유
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-24 md:mt-20 md:gap-40">
          {reasons.map((reason, i) => (
            <ReasonRow key={reason.title} reason={reason} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonRow({ reason, index }: { reason: (typeof reasons)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const fromLeft = index % 2 === 0;
  // 들어오는 구간을 길게 잡고(화면 아래 → 위쪽 20%) 스프링으로 늦게 따라오게 해 휙 지나가지 않도록 한다
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 20%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.6 });
  const x = useTransform(progress, [0, 1], [fromLeft ? '-30%' : '30%', '0%']);
  const opacity = useTransform(progress, [0, 0.5, 1], [0, 0.75, 1]);

  return (
    <motion.div ref={ref} style={{ x, opacity }}>
      <div
        className={cn(
          'grid items-center gap-8 rounded-[32px] bg-white/[0.05] p-5 md:grid-cols-2 md:gap-14 md:p-8',
          !fromLeft && 'md:[&>*:first-child]:order-2',
        )}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image src={reason.image} alt="" fill sizes="(min-width: 768px) 520px, 90vw" className="object-cover" />
          <span className="absolute right-5 bottom-5 left-5 rounded-full bg-white/90 px-4 py-2.5 text-center text-[13px] font-semibold text-neutral-900 shadow-lg backdrop-blur">
            {reason.chip}
          </span>
        </div>
        <div className="px-1 pb-2 md:px-4 md:pb-0">
          <p className="font-mono text-sm text-brand">{String(index + 1).padStart(2, '0')}</p>
          <h3 className="mt-3 text-2xl leading-[1.35] font-bold whitespace-pre-line text-display md:text-[32px]">
            {reason.title}
          </h3>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-white/55 keep-all">{reason.body}</p>
        </div>
      </div>
    </motion.div>
  );
}
