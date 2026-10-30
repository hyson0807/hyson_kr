'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import type { Project } from '@/app/data';
import { getProjectBySlug } from '@/app/data';
import { cn } from '@/lib/utils';

/** kv: 생성한 키 비주얼 / shot: 실제 화면을 프로젝트 컬러 위에 올린 타일 */
type Tile =
  | { type: 'kv'; slug: string; aspect: string }
  | { type: 'shot'; slug: string; src: string; device: 'phone' | 'browser' | 'plain'; aspect: string }
  | { type: 'video'; slug: string; src: string; poster: string; aspect: string };

const columns: Tile[][] = [
  [
    { type: 'kv', slug: 'hydo', aspect: 'aspect-[4/5]' },
    { type: 'shot', slug: 'isolog', src: '/images/projects/isolog/home.webp', device: 'phone', aspect: 'aspect-square' },
    { type: 'kv', slug: 'klow', aspect: 'aspect-[4/3]' },
    { type: 'shot', slug: 'withski', src: '/images/projects/withski/site.webp', device: 'browser', aspect: 'aspect-[4/5]' },
  ],
  [
    { type: 'kv', slug: 'isolog', aspect: 'aspect-[4/3]' },
    { type: 'shot', slug: 'prup', src: '/images/projects/prup/today.webp', device: 'phone', aspect: 'aspect-[4/5]' },
    { type: 'kv', slug: 'irubitteo', aspect: 'aspect-square' },
    { type: 'kv', slug: 'ggumteul-math', aspect: 'aspect-[4/3]' },
  ],
  [
    { type: 'kv', slug: 'prup', aspect: 'aspect-square' },
    {
      type: 'video',
      slug: 'hydo',
      src: '/images/projects/hydo/promo.mp4',
      poster: '/images/projects/hydo/promo-poster.webp',
      aspect: 'aspect-[4/5]',
    },
    { type: 'kv', slug: 'youngcosmed', aspect: 'aspect-[4/3]' },
    { type: 'shot', slug: 'klow', src: '/images/projects/klow/basedon-brand-phone.webp', device: 'plain', aspect: 'aspect-square' },
  ],
  [
    { type: 'kv', slug: 'withski', aspect: 'aspect-[4/3]' },
    { type: 'kv', slug: 'klow-brand', aspect: 'aspect-[4/5]' },
    { type: 'shot', slug: 'isolog', src: '/images/projects/isolog/community.webp', device: 'phone', aspect: 'aspect-square' },
    { type: 'kv', slug: 'pibugom', aspect: 'aspect-[4/3]' },
  ],
  [
    { type: 'shot', slug: 'irubitteo', src: '/images/projects/irubitteo/hero-mid.webp', device: 'browser', aspect: 'aspect-square' },
    { type: 'kv', slug: 'hymo', aspect: 'aspect-[4/3]' },
    { type: 'kv', slug: 'linkjob', aspect: 'aspect-[4/5]' },
    { type: 'shot', slug: 'ggumteul-math', src: '/images/projects/ggumteul-math/adventure.webp', device: 'plain', aspect: 'aspect-square' },
  ],
];

// 열마다 다른 속도로 흐르게 해 레퍼런스의 모자이크 패럴랙스를 만든다
const columnShift = [-80, -220, -40, -180, -120];

export function ProjectMosaic() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  return (
    <section data-tone="dark" ref={ref} className="relative h-[620px] overflow-hidden md:h-[820px]">
      <div className="grid grid-cols-3 gap-2 px-2 md:grid-cols-5 md:gap-3 md:px-3">
        {columns.map((column, i) => (
          <MosaicColumn
            key={i}
            tiles={column}
            progress={scrollYProgress}
            shift={columnShift[i]}
            className={cn(i >= 3 && 'hidden md:flex', i === 0 ? 'pt-16' : i % 2 ? 'pt-0' : 'pt-28')}
          />
        ))}
      </div>
      {/* 위·아래를 배경색으로 녹여 레퍼런스처럼 가장자리가 사라지게 한다 */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
    </section>
  );
}

function MosaicColumn({
  tiles,
  progress,
  shift,
  className,
}: {
  tiles: Tile[];
  progress: MotionValue<number>;
  shift: number;
  className?: string;
}) {
  const y = useTransform(progress, [0, 1], [0, shift]);

  return (
    <motion.div style={{ y }} className={cn('flex flex-col gap-2 md:gap-3', className)}>
      {tiles.map((tile, i) => {
        const project = getProjectBySlug(tile.slug);
        if (!project) return null;
        return <MosaicTile key={i} tile={tile} project={project} />;
      })}
    </motion.div>
  );
}

function MosaicTile({ tile, project }: { tile: Tile; project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`${project.title} 프로젝트 보기`}
      className={cn('group relative block overflow-hidden rounded-xl md:rounded-2xl', tile.aspect)}
      style={{ background: `linear-gradient(135deg, ${project.theme.from}, ${project.theme.to})` }}
    >
      {tile.type === 'video' ? (
        <video
          src={tile.src}
          poster={tile.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : tile.type === 'kv' ? (
        <Image
          src={project.thumbnail}
          alt=""
          fill
          sizes="(min-width: 768px) 20vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div
          className={cn(
            'absolute inset-0 flex items-end justify-center transition-transform duration-700 group-hover:scale-105',
            tile.device === 'phone' && 'px-[22%] pt-[12%]',
            tile.device === 'browser' && 'items-center p-[10%]',
            tile.device === 'plain' && 'items-center p-[8%]',
          )}
        >
          <div
            className={cn(
              'relative w-full overflow-hidden',
              tile.device === 'phone' && 'aspect-[1320/2868] translate-y-[35%] rounded-t-[1.6rem] border-[4px] border-b-0 border-neutral-900',
              tile.device === 'browser' && 'aspect-[16/11] rounded-lg shadow-2xl',
              tile.device === 'plain' && 'aspect-[4/5]',
            )}
          >
            <Image
              src={tile.src}
              alt=""
              fill
              sizes="(min-width: 768px) 20vw, 33vw"
              className={cn(tile.device === 'plain' ? 'object-contain' : 'object-cover object-top')}
            />
          </div>
        </div>
      )}
      <span className="absolute bottom-3 left-3 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
        {project.title}
      </span>
    </Link>
  );
}
