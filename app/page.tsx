import Link from 'next/link';

export default function Home() {
  const featuredProjects = [
    {
      title: '프로젝트 1',
      description: 'React와 TypeScript로 구현한 대시보드 애플리케이션',
      tags: ['React', 'TypeScript', 'Tailwind'],
    },
    {
      title: '프로젝트 2',
      description: 'Next.js 기반 블로그 플랫폼 개발',
      tags: ['Next.js', 'MDX', 'Vercel'],
    },
    {
      title: '프로젝트 3',
      description: '실시간 채팅 애플리케이션 구현',
      tags: ['Socket.io', 'Node.js', 'MongoDB'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-blue-600 dark:text-blue-400">
            안녕하세요,
            <br />
            홍길동입니다
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8">
            풀스택 개발자 · 디자이너
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
            사용자 경험을 중시하는 웹 애플리케이션을 만듭니다. 깔끔한 코드와 아름다운 디자인을 추구합니다.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/projects"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              프로젝트 보기
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-gray-200 dark:border-zinc-800 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            >
              연락하기
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-600 dark:text-blue-400">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            5년차 풀스택 개발자로, 사용자 중심의 웹 서비스를 개발하고 있습니다. React, Next.js를 주로 사용하며,
            반응형 UI/UX 디자인에 관심이 많습니다.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            새로운 기술을 배우고 적용하는 것을 즐기며, 팀원들과 협업하며 함께 성장하는 것을 중요하게 생각합니다.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            더 알아보기
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">Featured Projects</h2>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all hover:shadow-lg cursor-pointer"
              >
                <div className="w-full h-40 border border-gray-200 dark:border-zinc-800 rounded-lg mb-4 flex items-center justify-center text-gray-600 dark:text-gray-400">
                  프로젝트 썸네일
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-blue-600 dark:text-blue-400 text-xs font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              전체 프로젝트 보기
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-600 dark:text-blue-400">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으시다면
            <br />
            언제든 연락 주세요!
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="mailto:your@email.com"
              className="p-4 bg-gray-50 dark:bg-zinc-900 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-50 dark:bg-zinc-900 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-50 dark:bg-zinc-900 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            연락하기
          </Link>
        </div>
      </section>
    </div>
  );
}