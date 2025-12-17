export default function AboutPage() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-blue-600 dark:text-blue-400">About Us</h1>

        <div className="space-y-12">
          {/* 회사 소개 */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">Hyson Works</h2>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Hyson Works는 사용자 중심의 모바일 앱을 개발하는 1인 앱 개발 스튜디오입니다.
                &quot;꾸준히, 더 나은 앱을 만듭니다&quot;라는 슬로건 아래, 일상에 도움이 되는 앱을 만들어가고 있습니다.
              </p>
              <p>
                복잡한 기능보다 직관적이고 심플한 사용자 경험을 추구합니다.
                사용자가 앱을 사용하면서 불편함을 느끼지 않도록, 세심한 부분까지 신경 쓰며 개발합니다.
              </p>
              <p>
                Flutter를 주력으로 하여 iOS와 Android 모두에서 일관된 경험을 제공하는 크로스플랫폼 앱을 개발합니다.
                작지만 완성도 높은 앱, 오래 사용하고 싶은 앱을 만들기 위해 꾸준히 노력하고 있습니다.
              </p>
            </div>
          </section>

          {/* 핵심 가치 */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">핵심 가치</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">심플함</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  불필요한 기능은 덜어내고, 핵심에 집중합니다. 누구나 쉽게 사용할 수 있는 직관적인 인터페이스를 추구합니다.
                </p>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">완성도</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  세부적인 디테일까지 신경 씁니다. 작은 부분에서도 사용자가 불편함을 느끼지 않도록 꼼꼼히 개발합니다.
                </p>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">꾸준함</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  출시 후에도 지속적으로 개선합니다. 사용자 피드백을 반영하여 더 나은 앱으로 발전시켜 나갑니다.
                </p>
              </div>
            </div>
          </section>

          {/* 기술 스택 */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">기술 스택</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-4 text-blue-600 dark:text-blue-400">Mobile</h3>
                <div className="space-y-3">
                  {['Flutter', 'Dart', 'React Native', 'Swift', 'Kotlin'].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4 text-blue-600 dark:text-blue-400">Backend</h3>
                <div className="space-y-3">
                  {['Firebase', 'Supabase', 'Node.js', 'REST API', 'GraphQL'].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4 text-blue-600 dark:text-blue-400">Tools</h3>
                <div className="space-y-3">
                  {['Git', 'Figma', 'VS Code', 'Xcode', 'Android Studio'].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 서비스 */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">서비스</h2>
            <div className="flex flex-wrap gap-3">
              {[
                '크로스플랫폼 앱 개발',
                'iOS 앱 개발',
                'Android 앱 개발',
                'UI/UX 디자인',
                '앱 유지보수',
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
          </section>
        </div>
      </div>
    </div>
  );
}