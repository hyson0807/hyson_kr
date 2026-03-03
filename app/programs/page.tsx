import { Metadata } from 'next';
import { getAvailablePrograms, Program } from '../data';
import { AnimatedSection } from '../components/AnimatedSection';

export const metadata: Metadata = {
  title: '프로그램 다운로드',
  description:
    'Hyson Works에서 제공하는 데스크톱 프로그램을 다운로드하세요. 현재 Hymo(macOS)를 제공합니다.',
  openGraph: {
    title: '프로그램 다운로드 | Hyson Works',
    description: 'Hyson Works에서 제공하는 데스크톱 프로그램 다운로드 페이지입니다.',
  },
};

const platformLabel: Record<Program['platform'], string> = {
  macos: 'macOS',
  windows: 'Windows',
  linux: 'Linux',
};

function DownloadButton({ program }: { program: Program }) {
  if (program.status !== 'available' || !program.downloadPath) {
    return (
      <span className="inline-flex items-center gap-2 px-6 py-3 bg-gray-300 dark:bg-zinc-700 text-gray-500 dark:text-gray-400 rounded-lg font-medium cursor-not-allowed">
        Coming Soon
      </span>
    );
  }

  return (
    <a
      href={program.downloadPath}
      download
      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
    >
      {platformLabel[program.platform]} 다운로드
    </a>
  );
}

function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg p-8 hover:shadow-xl transition-all">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <h2 className="text-3xl font-bold">{program.name}</h2>
        <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full">
          {platformLabel[program.platform]}
        </span>
        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium rounded-full">
          {program.status === 'available' ? '다운로드 가능' : '준비 중'}
        </span>
      </div>

      <p className="text-xl text-gray-700 dark:text-gray-300 mb-4 font-medium">{program.description}</p>
      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{program.longDescription}</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {program.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <DownloadButton program={program} />
    </article>
  );
}

export default function ProgramsPage() {
  const availablePrograms = getAvailablePrograms();

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fadeIn">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              Programs
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Hyson Works에서 제공하는 데스크톱 프로그램을 다운로드할 수 있습니다.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          {availablePrograms.map((program, index) => (
            <AnimatedSection key={program.id} animation="fadeUp" delay={(index % 2) * 100 as 0 | 100}>
              <ProgramCard program={program} />
            </AnimatedSection>
          ))}

          <AnimatedSection animation="fadeUp" delay={100}>
            <div className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 border-dashed rounded-lg overflow-hidden">
              <div className="flex items-center justify-center h-52 md:h-64">
                <div className="text-center px-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 dark:bg-zinc-800 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-400 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-400 dark:text-gray-500 mb-2">
                    새로운 프로그램 준비중
                  </h3>
                  <p className="text-gray-400 dark:text-gray-500">앞으로 더 많은 프로그램이 추가될 예정입니다.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
