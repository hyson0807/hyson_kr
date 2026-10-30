import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/app/data';
import { getProjectKind } from '@/app/data';
import { cn } from '@/lib/utils';

interface Props {
  project: Project;
  tone?: 'light' | 'dark';
  priority?: boolean;
}

/** 레퍼런스 /work 카드 — 둥근 썸네일 + 굵은 제목 + 회색 메타 */
export function ProjectCard({ project, tone = 'light', priority }: Props) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
        <Image
          src={project.thumbnail}
          alt={`${project.title} 대표 이미지`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {project.status === 'ended' && (
          <span className="absolute top-3 left-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
            서비스 종료
          </span>
        )}
        {project.status === 'beta' && (
          <span className="absolute top-3 left-3 rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-semibold text-neutral-800 backdrop-blur">
            오픈 준비 중
          </span>
        )}
      </div>
      <h3
        className={cn(
          'mt-4 text-lg font-bold tracking-[-0.02em]',
          tone === 'dark' ? 'text-white' : 'text-neutral-900',
        )}
      >
        {project.title}
      </h3>
      <p className={cn('mt-1 text-sm', tone === 'dark' ? 'text-white/50' : 'text-neutral-400')}>
        {getProjectKind(project)} · {project.year}
      </p>
    </Link>
  );
}
