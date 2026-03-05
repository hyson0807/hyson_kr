import { Metadata } from 'next';
import { AnimatedSection } from '../components/AnimatedSection';
import { calcDelay } from '../components/animation-utils';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: '문의하기',
  description:
    '하이슨 워크에 앱 개발 문의, 협업 제안을 보내주세요. 빠른 시일 내에 답변드리겠습니다.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: '문의하기 | Hyson Works',
    description: '하이슨 워크에 앱 개발 문의, 협업 제안을 보내주세요.',
  },
};

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    title: 'Email',
    value: 'contact@hyson.kr',
    link: 'mailto:contact@hyson.kr',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    title: 'GitHub',
    value: 'github.com/hyson0807',
    link: 'https://github.com/hyson0807',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fadeIn">
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-blue-600 dark:text-blue-400">Contact</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              앱 개발 문의, 협업 제안, 또는 궁금한 점이 있으시다면 언제든 연락 주세요!
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          {/* 연락 방법 */}
          <AnimatedSection animation="fadeLeft">
            <h2 className="text-3xl font-bold mb-6">연락 방법</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              아래 연락처로 직접 연락하시거나, 옆의 폼을 통해 메시지를 보내주세요.
              빠른 시일 내에 답변드리겠습니다.
            </p>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <AnimatedSection key={index} animation="fadeUp" delay={calcDelay(index, 2)}>
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors group"
                  >
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{method.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{method.value}</p>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>

            {/* 회사 정보 */}
            <AnimatedSection animation="fadeUp" delay={200}>
              <div className="mt-8 p-6 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Hyson Works</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                  <p>1인 앱 개발 스튜디오</p>
                  <p>크로스플랫폼 앱 개발 (React Native)</p>
                </div>
              </div>
            </AnimatedSection>
          </AnimatedSection>

          {/* 연락 폼 */}
          <AnimatedSection animation="fadeRight">
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
