export default function ProjectsPage() {
  const projects = [
    {
      title: '프로젝트 1',
      description: 'React와 TypeScript로 구현한 대시보드 애플리케이션',
      longDescription:
        '사용자가 실시간으로 데이터를 모니터링하고 관리할 수 있는 대시보드를 구축했습니다. 차트 라이브러리를 활용하여 직관적인 데이터 시각화를 제공하며, 반응형 디자인으로 모바일 환경에서도 최적화된 경험을 제공합니다.',
      tags: ['React', 'TypeScript', 'Tailwind', 'Chart.js'],
      year: '2024',
      link: '#',
    },
    {
      title: '프로젝트 2',
      description: 'Next.js 기반 블로그 플랫폼 개발',
      longDescription:
        'MDX를 활용한 정적 블로그 플랫폼입니다. SSG를 통해 빠른 로딩 속도를 제공하며, SEO 최적화를 통해 검색 엔진 노출을 개선했습니다. Vercel을 통해 자동 배포 파이프라인을 구축했습니다.',
      tags: ['Next.js', 'MDX', 'Vercel', 'SEO'],
      year: '2024',
      link: '#',
    },
    {
      title: '프로젝트 3',
      description: '실시간 채팅 애플리케이션 구현',
      longDescription:
        'Socket.io를 활용한 실시간 채팅 애플리케이션입니다. 다중 채팅방 지원, 파일 전송, 읽음 표시 등의 기능을 구현했으며, MongoDB를 통해 채팅 내역을 저장합니다.',
      tags: ['Socket.io', 'Node.js', 'MongoDB', 'React'],
      year: '2023',
      link: '#',
    },
    {
      title: '프로젝트 4',
      description: 'e-커머스 웹사이트 풀스택 개발',
      longDescription:
        '상품 검색, 장바구니, 결제 시스템을 포함한 완전한 e-커머스 플랫폼입니다. Stripe API를 연동하여 안전한 결제를 지원하며, PostgreSQL을 통해 데이터를 관리합니다.',
      tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Prisma'],
      year: '2023',
      link: '#',
    },
    {
      title: '프로젝트 5',
      description: '날씨 정보 앱 with OpenWeather API',
      longDescription:
        'OpenWeather API를 활용한 날씨 정보 애플리케이션입니다. 현재 날씨, 시간별/주간 예보, 위치 기반 검색 기능을 제공합니다. PWA로 구현하여 오프라인에서도 사용 가능합니다.',
      tags: ['React', 'API', 'PWA', 'Service Worker'],
      year: '2023',
      link: '#',
    },
    {
      title: '프로젝트 6',
      description: '포트폴리오 관리 시스템',
      longDescription:
        'Vue.js와 Firebase를 활용한 포트폴리오 관리 시스템입니다. 실시간 데이터베이스를 통해 프로젝트를 추가/수정/삭제할 수 있으며, Vuetify를 통해 Material Design을 구현했습니다.',
      tags: ['Vue.js', 'Firebase', 'Vuetify', 'Material Design'],
      year: '2022',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-blue-600 dark:text-blue-400">Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            제가 작업한 프로젝트들입니다. 각 프로젝트는 사용자 경험과 코드 품질을 최우선으로 생각하며 개발했습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:shadow-xl transition-all"
            >
              {/* 프로젝트 썸네일 */}
              <div className="w-full h-56 border-b border-gray-200 dark:border-zinc-800 flex items-center justify-center text-gray-600 dark:text-gray-400 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-zinc-800 dark:to-zinc-900">
                <span className="text-4xl font-bold text-gray-300 dark:text-zinc-700">
                  {project.title}
                </span>
              </div>

              {/* 프로젝트 정보 */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-3 font-medium">{project.description}</p>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.longDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  프로젝트 보기
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center p-12 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">함께 프로젝트를 만들어보시겠어요?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            새로운 아이디어가 있으시다면 언제든 연락주세요!
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            연락하기
          </a>
        </div>
      </div>
    </div>
  );
}