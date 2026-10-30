import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ProjectsGrid } from './ProjectsGrid';

export const metadata: Metadata = {
  title: '프로젝트',
  description:
    'Hyson Works가 만든 프로젝트 — hydo, IsoLog, PRUP, KLOW, 이루빛터 등 모바일 앱 · 웹 서비스 · macOS 앱의 기획부터 운영까지.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: '프로젝트 | Hyson Works',
    description: 'Hyson Works가 기획하고 만들어 운영해 온 프로젝트를 소개합니다.',
  },
};

export default function ProjectsPage() {
  return (
    <section data-tone="light" className="mx-auto max-w-6xl px-6 pt-32 pb-32">
      <Suspense>
        <ProjectsGrid />
      </Suspense>
    </section>
  );
}
