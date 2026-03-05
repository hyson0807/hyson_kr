import { Metadata } from 'next';
import { AnimatedSection } from '../components/AnimatedSection';

export const metadata: Metadata = {
  title: '회사 소개',
  description:
    '하이슨 워크는 사용자 중심의 앱과 웹 서비스를 개발하는 1인 스튜디오입니다. React Native와 Next.js 기반으로 제품을 구축합니다.',
  openGraph: {
    title: '회사 소개 | Hyson Works',
    description:
      '하이슨 워크는 사용자 중심의 앱과 웹 서비스를 개발하는 1인 스튜디오입니다.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold mb-12 text-blue-600 dark:text-blue-400">About Us</h1>
        </AnimatedSection>

        <div className="space-y-12">
          {/* 회사 소개 */}
          <AnimatedSection animation="fadeUp">
            <h2 className="text-3xl font-semibold mb-6">Hyson Works</h2>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Hyson Works는 &quot;쓰고 싶은 앱&quot;을 직접 만들기 위해 시작된 1인 스튜디오입니다.
              </p>
              <p>
                사용자로서 느꼈던 불편함을 개발자로서 해결합니다.
                화려한 기능보다는 매일 꺼내 쓰고 싶은 앱, 한 번 열면 바로 이해되는 서비스를 지향합니다.
              </p>
              <p>
                React Native와 Next.js를 기반으로 하나의 코드로 iOS, Android, 웹 모두에서 일관된 경험을 제공합니다.
                출시 이후에도 꾸준히 개선하며, 사용자와 함께 성장하는 제품을 만들어 갑니다.
              </p>
            </div>
          </AnimatedSection>

          {/* 핵심 가치 */}
          <section>
            <AnimatedSection animation="fadeUp">
              <h2 className="text-3xl font-semibold mb-6">핵심 가치</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-6">
              <AnimatedSection animation="fadeUp" delay={0}>
                <div className="p-6 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg h-full">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">심플함</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    덜어낼수록 좋아집니다. 기능을 추가하기 전에 &quot;정말 필요한가&quot;를 먼저 묻습니다. 사용자가 생각하지 않아도 되는 인터페이스가 최고의 인터페이스입니다.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={100}>
                <div className="p-6 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg h-full">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">완성도</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    1px의 차이가 경험을 바꿉니다. 버튼 하나, 애니메이션 하나에도 의도를 담습니다. 작은 디테일이 모여 믿음직한 제품이 됩니다.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={200}>
                <div className="p-6 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg h-full">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">꾸준함</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    출시는 시작입니다. 앱스토어에 올리는 것으로 끝이 아닙니다. 사용자 피드백을 듣고, 매 업데이트마다 조금씩 더 나은 버전을 만들어 갑니다.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* 기술 스택 */}
          <section>
            <AnimatedSection animation="fadeUp">
              <h2 className="text-3xl font-semibold mb-6">기술 스택</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection animation="fadeUp" delay={0}>
                <h3 className="text-xl font-medium mb-4 text-blue-600 dark:text-blue-400">Mobile</h3>
                <div className="space-y-3">
                  {['React Native', 'Next.js', 'Swift'].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={100}>
                <h3 className="text-xl font-medium mb-4 text-blue-600 dark:text-blue-400">Backend</h3>
                <div className="space-y-3">
                  {['Express', 'NestJS', 'PostgreSQL'].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={200}>
                <h3 className="text-xl font-medium mb-4 text-blue-600 dark:text-blue-400">Tools</h3>
                <div className="space-y-3">
                  {['Git'].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* 서비스 */}
          <AnimatedSection animation="fadeUp">
            <h2 className="text-3xl font-semibold mb-6">서비스</h2>
            <div className="flex flex-wrap gap-3">
              {[
                '크로스플랫폼 앱/웹 개발',
                'iOS/Android 앱 개발',
                '웹 서비스 개발',
                'UI/UX 디자인',
                '앱/웹 유지보수',
                '기술 컨설팅',
              ].map((service) => (
                <span
                  key={service}
                  className="px-4 py-2 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-full text-gray-700 dark:text-gray-300"
                >
                  {service}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
