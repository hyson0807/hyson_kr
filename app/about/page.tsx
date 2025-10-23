export default function AboutPage() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-blue-600 dark:text-blue-400">About Me</h1>

        <div className="space-y-12">
          {/* 소개 */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">소개</h2>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                안녕하세요! 5년차 풀스택 개발자 홍길동입니다. 사용자 중심의 웹 서비스를 개발하는 것에 열정을 가지고
                있습니다.
              </p>
              <p>
                React, Next.js를 주로 사용하며, 반응형 UI/UX 디자인에 관심이 많습니다. 사용자가 편안하게 사용할 수 있는
                인터페이스를 만드는 것을 최우선으로 생각합니다.
              </p>
              <p>
                새로운 기술을 배우고 적용하는 것을 즐기며, 팀원들과 협업하며 함께 성장하는 것을 중요하게 생각합니다.
                코드 리뷰와 페어 프로그래밍을 통해 더 나은 코드를 작성하고자 노력합니다.
              </p>
            </div>
          </section>

          {/* 기술 스택 */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">기술 스택</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-4 text-blue-600 dark:text-blue-400">Frontend</h3>
                <div className="space-y-3">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'JavaScript (ES6+)'].map(
                    (skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                        <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4 text-blue-600 dark:text-blue-400">Backend</h3>
                <div className="space-y-3">
                  {['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB'].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4 text-blue-600 dark:text-blue-400">Tools & Others</h3>
                <div className="space-y-3">
                  {['Git', 'Docker', 'AWS', 'Figma', 'VS Code', 'Jira'].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 경력 */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">경력</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2">시니어 풀스택 개발자</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">테크 컴퍼니 · 2022 - 현재</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>사용자 대시보드 개발 및 유지보수</li>
                  <li>React 기반 프론트엔드 아키텍처 설계</li>
                  <li>팀 내 코드 리뷰 문화 정착</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2">웹 개발자</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">스타트업 · 2020 - 2022</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>e-커머스 플랫폼 개발</li>
                  <li>RESTful API 설계 및 구현</li>
                  <li>성능 최적화 및 SEO 개선</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2">주니어 개발자</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">IT 기업 · 2019 - 2020</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>웹 애플리케이션 유지보수</li>
                  <li>UI/UX 개선 작업</li>
                  <li>버그 수정 및 테스트 코드 작성</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 교육 */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">교육</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">컴퓨터공학 학사</h3>
                <p className="text-gray-600 dark:text-gray-400">한국대학교 · 2015 - 2019</p>
              </div>
            </div>
          </section>

          {/* 관심사 */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">관심사</h2>
            <div className="flex flex-wrap gap-3">
              {[
                '웹 접근성',
                '성능 최적화',
                '디자인 시스템',
                'AI/ML',
                '오픈소스',
                '기술 블로깅',
              ].map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-full text-gray-700 dark:text-gray-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}