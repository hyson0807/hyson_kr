'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import type { ProjectCategory } from '@/app/data';
import { categories, categoryLabels, getProjectsByCategory } from '@/app/data';
import { ProjectCard } from '@/app/components/projects/ProjectCard';
import { cn } from '@/lib/utils';

type Filter = ProjectCategory | 'all';

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: '전체' },
  ...categories.map((value) => ({ value, label: categoryLabels[value] })),
];

const isFilter = (value: string | null): value is Filter =>
  value === 'all' || categories.includes(value as ProjectCategory);

export function ProjectsGrid() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const param = searchParams.get('category');
  const active: Filter = isFilter(param) ? param : 'all';
  const items = getProjectsByCategory(active);

  const select = (value: Filter) => {
    const query = value === 'all' ? '' : `?category=${value}`;
    router.replace(`/projects${query}`, { scroll: false });
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[180px_1fr] lg:gap-14">
      {/* 데스크톱: 왼쪽 고정 목록 / 모바일: 가로 스크롤 칩 */}
      <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
        <ul className="no-scrollbar -mx-6 flex gap-2 overflow-x-auto px-6 lg:mx-0 lg:flex-col lg:gap-1 lg:px-0">
          {filters.map((filter) => (
            <li key={filter.value} className="shrink-0">
              <button
                type="button"
                onClick={() => select(filter.value)}
                className={cn(
                  'w-full rounded-lg px-3.5 py-2 text-left text-[15px] whitespace-nowrap transition-colors',
                  active === filter.value
                    ? 'bg-neutral-100 font-semibold text-neutral-900'
                    : 'text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900',
                )}
              >
                {filter.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div className="min-w-0">
        <h1 className="text-4xl font-bold text-display text-neutral-900 md:text-5xl">Projects</h1>
        <p className="mt-3 text-neutral-500 keep-all">
          Hyson Works가 기획하고 만들어 운영해 온 {items.length}개의 프로젝트입니다.
        </p>

        <motion.div layout className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: Math.min(i, 8) * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} priority={i < 3} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
