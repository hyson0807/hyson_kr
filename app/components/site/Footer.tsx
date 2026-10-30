'use client';

import Link from 'next/link';
import { ArrowUp, Mail } from 'lucide-react';
import { getFeaturedProjects } from '@/app/data';
import { Wordmark } from './Wordmark';

const serviceLinks = [
  { label: '모바일 앱 개발', href: '/projects?category=app' },
  { label: '웹 서비스 개발', href: '/projects?category=web' },
  { label: 'macOS 앱 개발', href: '/projects?category=mac' },
  { label: '커머스 · B2B', href: '/projects?category=commerce' },
];

export function Footer() {
  const projects = getFeaturedProjects().slice(0, 4);

  return (
    <footer data-tone="light" className="bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-[1.2fr_repeat(3,1fr)]">
          <div>
            <Wordmark />
            <p className="mt-4 text-sm text-neutral-500 keep-all">꾸준히, 더 나은 앱을 만듭니다.</p>
          </div>

          <FooterColumn title="서비스">
            {serviceLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="프로젝트">
            {projects.map((project) => (
              <FooterLink key={project.slug} href={`/projects/${project.slug}`}>
                {project.title}
              </FooterLink>
            ))}
            <FooterLink href="/projects">전체 보기</FooterLink>
          </FooterColumn>

          <FooterColumn title="연락">
            <a
              href="mailto:contact@hyson.kr"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-900"
            >
              <Mail className="h-4 w-4" />
              contact@hyson.kr
            </a>
            <a
              href="https://github.com/hyson0807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-900"
            >
              <GithubIcon />
              github.com/hyson0807
            </a>
          </FooterColumn>
        </div>

        <div className="mt-16 flex items-end justify-between gap-6 border-t border-neutral-200 pt-8">
          <p className="text-xs text-neutral-400">© {new Date().getFullYear()} Hyson Works. All rights reserved.</p>
          <button
            type="button"
            aria-label="맨 위로"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200/70 text-neutral-700 transition-colors hover:bg-neutral-300"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-sm font-bold">{title}</p>
      <div className="mt-4 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-neutral-500 transition-colors hover:text-neutral-900">
      {children}
    </Link>
  );
}

function GithubIcon() {
  return (
    <svg aria-hidden className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}
