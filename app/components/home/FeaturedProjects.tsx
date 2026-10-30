import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProjects } from '@/app/data';
import { ProjectCard } from '../projects/ProjectCard';
import { Reveal } from '../site/Reveal';

export function FeaturedProjects() {
  const featured = getFeaturedProjects().slice(0, 6);

  return (
    <section data-tone="light" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="text-3xl leading-[1.3] font-bold text-display text-neutral-900 md:text-[40px]">
            직접 만들고 운영해 온
            <br />
            프로젝트를 확인하세요.
          </h2>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-50"
          >
            포트폴리오 보기
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
