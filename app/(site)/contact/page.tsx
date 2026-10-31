import { Metadata } from 'next';
import { pageMetadata } from '@/app/lib/seo';
import { Reveal } from '../../components/site/Reveal';
import ContactForm from './ContactForm';

export const metadata: Metadata = pageMetadata({
  title: '문의하기',
  description:
    'Hyson Works에 앱 · 웹 개발 프로젝트 문의와 협업 제안을 보내 주세요. 아이디어 단계여도 괜찮습니다. 빠르게 답변드리겠습니다.',
  path: '/contact',
});

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
    <section data-tone="light" className="mx-auto max-w-6xl px-6 pt-32 pb-32 md:pt-40">
      <Reveal>
        <p className="text-sm font-semibold text-brand">Contact</p>
        <h1 className="mt-3 text-4xl leading-[1.25] font-bold text-display text-neutral-900 md:text-5xl">
          어떤 앱을 만들고 싶으신가요?
        </h1>
        <p className="mt-5 max-w-xl text-[15px] leading-7 text-neutral-500 keep-all">
          앱 개발 문의, 협업 제안, 궁금한 점 무엇이든 보내 주세요. 아이디어 단계여도 괜찮습니다. 빠르게 답변드리겠습니다.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <Reveal delay={0.08}>
          <h2 className="text-xl font-bold text-neutral-900">바로 연락하기</h2>
          <div className="mt-6 space-y-3">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl bg-neutral-50 p-5 transition-colors hover:bg-neutral-100"
              >
                <div className="rounded-xl bg-brand/10 p-3 text-brand transition-transform group-hover:scale-105">
                  {method.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">{method.title}</h3>
                  <p className="text-sm text-neutral-500">{method.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-neutral-200 p-6">
            <h3 className="font-bold text-neutral-900">Hyson Works</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-500 keep-all">
              iOS · Android · Web · Mac 앱을 기획부터 출시, 운영까지 함께 만드는 프로덕트 스튜디오입니다.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="rounded-3xl border border-neutral-200 p-6 sm:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
