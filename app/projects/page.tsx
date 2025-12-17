import Link from 'next/link';

export default function ProjectsPage() {
  const apps = [
    {
      title: 'IsoLog',
      description: '일상의 순간을 기록하고 관리하는 라이프로그 앱',
      longDescription:
        '하루하루의 소중한 순간들을 간편하게 기록하고 관리할 수 있는 라이프로그 앱입니다. 직관적인 UI로 빠르게 기록하고, 타임라인 형식으로 지난 기록들을 돌아볼 수 있습니다. 사진, 텍스트, 위치 정보 등 다양한 형태로 일상을 남겨보세요.',
      tags: ['Flutter', 'iOS', 'Android', 'Firebase'],
      status: '출시',
      platforms: ['App Store', 'Google Play'],
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
              className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="grid md:grid-cols-2">
                {/* 앱 썸네일 */}
                <div className="h-64 md:h-auto flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-zinc-800 dark:to-zinc-900 p-8">
                  <div className="text-center">
                    <span className="text-6xl md:text-7xl font-bold text-blue-600 dark:text-blue-400">
                      {app.title}
                    </span>
                    <div className="mt-4 flex justify-center gap-2">
                      {app.platforms.map((platform) => (
                        <span
                          key={platform}
                          className="px-3 py-1 bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
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
                      href="#"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      App Store
                    </a>
                    <a
                      href="#"
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

        {/* Coming Soon */}
        <div className="mt-16 text-center p-12 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">More Apps Coming Soon</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            새로운 앱을 준비 중입니다. 곧 만나보실 수 있습니다!
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            새 앱 소식 받기
          </Link>
        </div>
      </div>
    </div>
  );
}