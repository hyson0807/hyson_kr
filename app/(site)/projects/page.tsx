import type { Metadata } from 'next';
import { Suspense } from 'react';
import { pageMetadata } from '@/app/lib/seo';
import { ProjectsGrid, ProjectsGridView } from './ProjectsGrid';

export const metadata: Metadata = pageMetadata({
  title: '프로젝트',
  description:
    'Hyson Works가 만든 프로젝트 — hydo, IsoLog, PRUP, KLOW, 이루빛터 등 모바일 앱 · 웹 서비스 · macOS 앱을 기획부터 출시, 운영까지 소개합니다.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <section data-tone="light" className="mx-auto max-w-6xl px-6 pt-32 pb-32">
      <Suspense fallback={<ProjectsGridView active="all" />}>
        <ProjectsGrid />
      </Suspense>
    </section>
  );
}
