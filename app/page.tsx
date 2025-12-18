'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getReleasedApps } from './data';
import { AnimatedSection } from './components/AnimatedSection';

export default function Home() {
  const apps = getReleasedApps();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-start px-6 pt-16 md:px-12 md:pt-30 lg:px-24 lg:pt-52">
        <div className="w-full max-w-6xl mx-auto">
          <AnimatedSection animation="fadeIn" duration={700}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-blue-600 dark:text-blue-400">
              Hyson Works
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={100}>
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8">
              꾸준히, 더 나은 앱을 만듭니다
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={200}>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
              사용자 경험을 최우선으로 생각하는 1인 앱 개발 스튜디오입니다.
              React Native를 활용하여 iOS와 Android 모두에서 동작하는 크로스플랫폼 앱을 개발합니다.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={300}>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/projects"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                앱 둘러보기
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-gray-200 dark:border-zinc-800 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              >
                문의하기
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-600 dark:text-blue-400">About Us</h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={100}>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Hyson Works는 사용자 중심의 모바일 앱을 개발하는 1인 앱 개발 스튜디오입니다.
              복잡한 기능보다 직관적이고 심플한 사용자 경험을 추구합니다.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={200}>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              React Native를 활용하여 하나의 코드베이스로 iOS와 Android 모두에 최적화된 앱을 제공합니다.
              작지만 완성도 높은 앱을 만들기 위해 꾸준히 노력하고 있습니다.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={300}>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              더 알아보기
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fadeUp">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">Our Apps</h2>
              <Link
                href="/projects"
                className="hidden md:inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                전체 보기
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app, index) => (
              <AnimatedSection key={app.id} animation="fadeUp" delay={(index % 3) * 100 as 0 | 100 | 200}>
                <Link
                  href={`/projects#${app.id}`}
                  className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all hover:shadow-lg cursor-pointer block h-full"
                >
                  <div className="relative w-full aspect-[4/3] rounded-lg mb-4 overflow-hidden">
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{app.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {app.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-blue-600 dark:text-blue-400 text-xs font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection animation="fadeUp" delay={300}>
            <div className="mt-8 text-center md:hidden">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                전체 앱 보기
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-600 dark:text-blue-400">
              Get In Touch
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={100}>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
              앱 개발 문의, 협업 제안, 또는 궁금한 점이 있으시다면
              <br />
              언제든 연락 주세요!
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={200}>
            <div className="flex justify-center gap-6 mb-12">
              <a
                href="mailto:contact@hyson.kr"
                className="p-4 bg-gray-50 dark:bg-zinc-900 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
              <a
                href="https://github.com/hyson0807"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-50 dark:bg-zinc-900 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="scale" delay={300}>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              문의하기
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}