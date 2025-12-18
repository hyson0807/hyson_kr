import Image from 'next/image';

interface App {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  status: string;
  platforms: string[];
  image: string;
}

export default function ProjectsPage() {
  const apps: App[] = [
    {
      title: 'IsoLog',
      description: '이소티논 복용자를 위한 스마트 복용 관리 앱',
      longDescription:
        '매일 복용 체크, 피부 상태 기록, 음주 예정일 경고까지. 이소티논 복용 중 필요한 모든 기능을 한 앱에 담았습니다. 복용 주기 설정, 캘린더 기록 조회, 복용 알림 등 편리한 기능으로 꾸준한 복용 습관을 만들어보세요.',
      tags: ['React Native', 'iOS', 'Android'],
      status: '출시',
      platforms: ['App Store', 'Google Play'],
      image: '/images/apps/isolog.png',
    },
  ];

  // 참여 프로젝트 (외부 협업)
  const collaborationApps: App[] = [
    {
      title: 'LinkJob',
      description: '외국인 구인구직 플랫폼',
      longDescription:
        '한국어 실력을 확인하고 구직자와 얘기해 보세요! 10초만에 공고를 등록할 수 있고, 외국인 구직자에게 맞는 공고를 찾아볼 수 있습니다. 구직자가 한국어 테스트를 보기 때문에 구인자는 외국인 구직자의 한국어 실력과 프로필을 확인하고 연락할 수 있습니다.',
      tags: ['React Native', 'iOS', 'Android'],
      status: '출시',
      platforms: ['App Store', 'Google Play'],
      image: '/images/apps/linkjob.png',
    },
  ];

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-blue-600 dark:text-blue-400">Our Apps</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Hyson Works에서 개발한 앱들입니다. 모든 앱은 사용자 경험을 최우선으로 생각하며 개발되었습니다.
          </p>
        </div>

        <div className="space-y-8">
          {apps.map((app, index) => (
            <div
              key={index}
              id={app.title.toLowerCase()}
              className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:shadow-xl transition-all scroll-mt-24"
            >
              <div className="grid md:grid-cols-2">
                {/* 앱 썸네일 */}
                <div className="relative h-64 md:h-80">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* 앱 정보 */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-3xl font-bold">{app.title}</h2>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium rounded-full">
                      {app.status}
                    </span>
                  </div>

                  <p className="text-xl text-gray-700 dark:text-gray-300 mb-4 font-medium">
                    {app.description}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {app.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {app.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="https://apps.apple.com/kr/app/%EC%9D%B4%EC%86%8C%ED%8B%B0%EB%85%BC-%EC%97%AC%EB%93%9C%EB%A6%84%EC%95%BD-%EB%B3%B5%EC%9A%A9%EA%B4%80%EB%A6%AC-isolog/id6756465278"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      App Store
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-300 dark:bg-zinc-700 text-gray-500 dark:text-gray-400 rounded-lg font-medium cursor-not-allowed"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      Coming Soon
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 참여 프로젝트 섹션 */}
        <div className="mt-24">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">참여 프로젝트</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Hyson Works 대표가 외부 프로젝트에 개발자로 참여하여 함께 만든 앱입니다.
            </p>
          </div>

          <div className="space-y-8">
            {collaborationApps.map((app, index) => (
              <div
                key={index}
                id={app.title.toLowerCase()}
                className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:shadow-xl transition-all scroll-mt-24"
              >
                <div className="grid md:grid-cols-2">
                  {/* 앱 썸네일 */}
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* 앱 정보 */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-3xl font-bold">{app.title}</h3>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium rounded-full">
                        {app.status}
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium rounded-full">
                        협업
                      </span>
                    </div>

                    <p className="text-xl text-gray-700 dark:text-gray-300 mb-4 font-medium">
                      {app.description}
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {app.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {app.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <a
                        href="https://apps.apple.com/kr/app/kgency-%EC%BC%80%EC%9D%B4%EC%A0%84%EC%8B%9C-%EC%99%B8%EA%B5%AD%EC%9D%B8-%EA%B5%AC%EC%9D%B8%EA%B5%AC%EC%A7%81-%EC%95%8C%EB%B0%94/id6749147143"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        App Store
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.welkit.kgency"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                        Google Play
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}