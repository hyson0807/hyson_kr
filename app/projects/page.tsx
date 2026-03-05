import { Metadata } from 'next';
import Image from 'next/image';
import { getInternalApps, getCollaborationApps, App } from '../data';
import { AnimatedSection } from '../components/AnimatedSection';

export const metadata: Metadata = {
  title: '앱 소개',
  description:
    'Hyson Works에서 개발한 앱들을 소개합니다. IsoLog, LinkJob 등 사용자 경험을 최우선으로 생각하는 크로스플랫폼 앱.',
  openGraph: {
    title: '앱 소개 | Hyson Works',
    description: 'Hyson Works에서 개발한 앱들을 소개합니다.',
  },
};

// 스토어 버튼 컴포넌트
function StoreButton({
  type,
  url,
}: {
  type: 'appStore' | 'playStore' | 'website';
  url?: string;
}) {
  const icons = {
    appStore: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
    playStore: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
      </svg>
    ),
    website: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  };

  const labels = {
    appStore: 'App Store',
    playStore: 'Google Play',
    website: '웹사이트',
  };

  if (!url) {
    return (
      <span className="inline-flex items-center gap-2 px-6 py-3 bg-gray-300 dark:bg-zinc-700 text-gray-500 dark:text-gray-400 rounded-lg font-medium cursor-not-allowed">
        {icons[type]}
        Coming Soon
      </span>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
    >
      {icons[type]}
      {labels[type]}
    </a>
  );
}

// 앱 카드 컴포넌트
function AppCard({ app, showCollabBadge = false }: { app: App; showCollabBadge?: boolean }) {
  return (
    <div
      id={app.id}
      className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:shadow-xl transition-all scroll-mt-24"
    >
      <div className="grid md:grid-cols-2">
        {/* 앱 썸네일 */}
        <div className="relative aspect-[4/3] md:aspect-auto md:h-80">
          <Image src={app.image} alt={app.title} fill className="object-contain" />
        </div>

        {/* 앱 정보 */}
        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-3xl font-bold">{app.title}</h2>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium rounded-full">
              {app.status === 'released' ? '출시' : app.status === 'coming_soon' ? '출시 예정' : '개발 중'}
            </span>
            {showCollabBadge && (
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium rounded-full">
                협업
              </span>
            )}
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
            {app.storeLinks.appStore !== undefined && (
              <StoreButton type="appStore" url={app.storeLinks.appStore} />
            )}
            {app.storeLinks.playStore !== undefined && (
              <StoreButton type="playStore" url={app.storeLinks.playStore} />
            )}
            {app.storeLinks.website && (
              <StoreButton type="website" url={app.storeLinks.website} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const internalApps = getInternalApps();
  const collaborationApps = getCollaborationApps();

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fadeIn">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              Our Apps
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Hyson Works에서 개발한 앱들입니다. 모든 앱은 사용자 경험을 최우선으로 생각하며
              개발되었습니다.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          {internalApps.map((app, index) => (
            <AnimatedSection key={app.id} animation="fadeUp" delay={(index % 2) * 100 as 0 | 100}>
              <AppCard app={app} />
            </AnimatedSection>
          ))}

          {/* Coming Soon 카드 */}
          <AnimatedSection animation="fadeUp" delay={100}>
            <div className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 border-dashed rounded-lg overflow-hidden">
              <div className="flex items-center justify-center h-64 md:h-80">
                <div className="text-center px-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 dark:bg-zinc-800 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-400 dark:text-gray-500 mb-2">새로운 앱 준비중</h3>
                  <p className="text-gray-400 dark:text-gray-500">곧 새로운 앱으로 찾아뵙겠습니다</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* 참여 프로젝트 섹션 */}
        <div className="mt-24">
          <AnimatedSection animation="fadeUp">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">참여 프로젝트</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Hyson Works 대표가 외부 프로젝트에 개발자로 참여하여 함께 만든 앱입니다.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {collaborationApps.map((app, index) => (
              <AnimatedSection key={app.id} animation="fadeUp" delay={(index % 2) * 100 as 0 | 100}>
                <AppCard app={app} showCollabBadge />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}