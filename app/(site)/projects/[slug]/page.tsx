import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, Download } from 'lucide-react';
import type { Project, ProjectPlatform } from '@/app/data';
import { getAdjacentProject, getProjectBySlug, projects } from '@/app/data';
import { ImagePanel } from '@/app/components/projects/DeviceFrames';
import { Reveal } from '@/app/components/site/Reveal';
import { SITE_URL, pageMetadata, toMetaDescription } from '@/app/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

const platformBadge: Record<ProjectPlatform, string> = {
  ios: 'iOS',
  android: 'ANDROID',
  web: 'WEB',
  macos: 'MAC',
};

const platformLabel: Record<ProjectPlatform, string> = {
  ios: 'iOS',
  android: 'Android',
  web: 'Web',
  macos: 'macOS',
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return pageMetadata({
    title: `${project.title} — ${project.subtitle}`,
    description: toMetaDescription(project.intro),
    path: `/projects/${project.slug}`,
    // 카카오톡 등 webp 미리보기를 못 띄우는 곳이 있어 공유 이미지는 1200×630 JPG 로 따로 둔다 (public/images/og)
    image: `/images/og/${project.slug}.jpg`,
    type: 'article',
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const next = getAdjacentProject(project.slug);
  const total = String(project.sections.length).padStart(2, '0');

  return (
    <article data-tone="light" className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd(project)) }}
      />
      {/* 상단 — 배지 · 제목 · 소개 / 메타 */}
      <header className="mx-auto max-w-6xl px-6 pt-32 pb-14 md:pt-40">
        <Reveal className="grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-20">
          <div>
            <div className="flex flex-wrap gap-2">
              {project.platforms.map((platform) => (
                <span
                  key={platform}
                  className="rounded-full border border-neutral-300 px-3 py-1 text-[11px] font-bold tracking-wide text-neutral-700"
                >
                  {platformBadge[platform]}
                </span>
              ))}
            </div>
            <h1 className="mt-5 text-5xl font-bold text-display text-neutral-900 md:text-6xl">{project.title}</h1>
            <p className="mt-3 text-lg font-semibold text-neutral-700 keep-all">{project.subtitle}</p>
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-neutral-500 keep-all">{project.intro}</p>
          </div>

          <dl className="grid grid-cols-[72px_1fr] content-start gap-x-6 gap-y-4 text-sm">
            {project.launch && <Meta label="Launch">{project.launch}</Meta>}
            <Meta label="Platform">{project.platforms.map((p) => platformLabel[p]).join(' · ')}</Meta>
            <Meta label="Studio">Hyson Works</Meta>
            <Meta label="Stack">{project.stack.slice(0, 5).join(', ')}</Meta>
            <ProjectLinks project={project} />
          </dl>
        </Reveal>
      </header>

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div
            className="relative aspect-[16/9] overflow-hidden rounded-3xl md:aspect-[21/9]"
            style={{ background: `linear-gradient(135deg, ${project.theme.from}, ${project.theme.to})` }}
          >
            <Image
              src={project.thumbnail}
              alt={`${project.title} 키 비주얼`}
              fill
              priority
              sizes="(min-width: 1152px) 1104px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-6xl border-t border-neutral-200 px-6" />

      {/* 본문 — 01 / 03 섹션 */}
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-24">
          {project.sections.map((section, i) => (
            <Reveal key={section.title}>
              <section className="grid gap-6 lg:grid-cols-[180px_1fr] lg:gap-10">
                <p className="pt-2 text-sm tracking-[0.2em] text-neutral-400">
                  {String(i + 1).padStart(2, '0')} / {total}
                </p>
                <div>
                  <h2 className="text-2xl font-bold text-display text-neutral-900 md:text-[28px]">{section.title}</h2>
                  <p className="mt-5 max-w-3xl text-[16px] leading-8 text-neutral-600 keep-all">{section.body}</p>
                  {section.images.length > 0 && (
                    <div className="mt-8">
                      <ImagePanel images={section.images} theme={project.theme} />
                    </div>
                  )}
                </div>
              </section>
            </Reveal>
          ))}

          {/* 핵심 포인트 */}
          <Reveal>
            <section className="grid gap-6 lg:grid-cols-[180px_1fr] lg:gap-10">
              <p className="pt-2 text-sm tracking-[0.2em] text-neutral-400">핵심 포인트</p>
              <div className="rounded-2xl bg-neutral-50 p-8 sm:p-10">
                <p className="font-bold text-neutral-900">📌 이 작업의 포인트</p>
                <ol className="mt-6 flex flex-col gap-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={highlight} className="flex gap-5 text-[15px] text-neutral-800 keep-all">
                      <span className="pt-0.5 text-xs text-neutral-400">{String(i + 1).padStart(2, '0')}</span>
                      {highlight}
                    </li>
                  ))}
                </ol>
                <div className="mt-8 flex flex-wrap gap-2 border-t border-neutral-200 pt-6">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-neutral-600 ring-1 ring-neutral-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>
        </div>
      </div>

      {/* 하단 — 목록 / 다음 사례 */}
      <div className="mx-auto max-w-6xl border-t border-neutral-200 px-6 py-12">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-50 px-4 py-2.5 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-100"
          >
            <ArrowLeft className="h-4 w-4" />
            목록으로
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="group inline-flex items-center gap-2 rounded-lg bg-neutral-50 px-4 py-2.5 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-100"
          >
            다음 사례 · {next.title}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <section data-cta-inline className="mx-auto max-w-6xl px-6 pb-28">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-neutral-950 p-10 text-white md:flex-row md:items-center md:p-14">
          <div>
            <p className="text-2xl font-bold text-display md:text-3xl">비슷한 앱을 만들고 싶으신가요?</p>
            <p className="mt-2 text-white/60 keep-all">아이디어 단계부터 출시 이후 운영까지 함께 고민하겠습니다.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-brand px-6 py-3.5 font-semibold text-white transition-colors hover:bg-brand-hover"
          >
            프로젝트 문의하기
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </article>
  );
}

function Meta({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <>
      <dt className="font-semibold text-neutral-900">{label}</dt>
      <dd className="text-neutral-500 keep-all">{children}</dd>
    </>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  const { appStore, playStore, website, download } = project.links;
  const links = [
    appStore && { href: appStore, label: 'App Store' },
    playStore && { href: playStore, label: 'Google Play' },
    website && { href: website, label: website.startsWith('/') ? '지원 페이지' : '웹사이트' },
  ].filter(Boolean) as { href: string; label: string }[];

  if (links.length === 0 && !download) return null;

  return (
    <>
      <dt className="font-semibold text-neutral-900">Links</dt>
      <dd className="flex flex-wrap gap-2">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.href.startsWith('/') ? undefined : '_blank'}
            rel={link.href.startsWith('/') ? undefined : 'noopener noreferrer'}
            className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-800 transition-colors hover:bg-neutral-200"
          >
            {link.label}
            <ArrowUpRight className="h-3 w-3" />
          </a>
        ))}
        {download && (
          <a
            href={download}
            download
            className="inline-flex items-center gap-1 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white transition-colors hover:bg-brand-hover"
          >
            <Download className="h-3 w-3" />
            macOS 다운로드
          </a>
        )}
      </dd>
    </>
  );
}

/** 검색엔진용 구조화 데이터 — 이동 경로(홈 › 프로젝트 › 상세)와 프로젝트 정보 */
function projectJsonLd(project: Project) {
  const url = `${SITE_URL}/projects/${project.slug}`;
  const sameAs = [project.links.appStore, project.links.playStore, project.links.website]
    .filter((link): link is string => Boolean(link))
    .map((link) => (link.startsWith('/') ? `${SITE_URL}${link}` : link));

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '홈', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: '프로젝트', item: `${SITE_URL}/projects` },
          { '@type': 'ListItem', position: 3, name: project.title, item: url },
        ],
      },
      {
        '@type': 'CreativeWork',
        '@id': `${url}#project`,
        name: project.title,
        headline: `${project.title} — ${project.subtitle}`,
        description: project.intro,
        url,
        image: `${SITE_URL}${project.thumbnail}`,
        dateCreated: String(project.year),
        inLanguage: 'ko-KR',
        keywords: project.stack.join(', '),
        creator: { '@id': `${SITE_URL}/#organization` },
        ...(sameAs.length > 0 && { sameAs }),
      },
    ],
  };
}
