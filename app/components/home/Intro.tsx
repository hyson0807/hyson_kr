import { Code2, PenTool, Rocket } from 'lucide-react';
import { Reveal } from '../site/Reveal';

const services = [
  {
    icon: PenTool,
    title: '기획 · 디자인',
    body: '풀어야 할 문제와 사용자를 먼저 정의하고, 화면 구조와 흐름을 설계합니다.',
  },
  {
    icon: Code2,
    title: '개발',
    body: 'React Native · SwiftUI · Next.js · NestJS로 앱과 웹, 서버를 함께 만듭니다.',
  },
  {
    icon: Rocket,
    title: '출시 · 운영',
    body: '스토어 심사와 배포, OTA 업데이트, 서버 운영까지 출시 이후를 책임집니다.',
  },
];

export function Intro() {
  return (
    <section id="about" data-tone="dark" className="scroll-mt-16 px-6 py-24 text-white md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl leading-[1.3] font-bold text-display md:text-[40px]">
            아이디어를 앱으로,
            <br />
            출시 이후까지 함께 만드는
            <br />
            프로덕트 스튜디오
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <div className="flex h-full min-h-[220px] flex-col rounded-3xl bg-white/[0.06] p-8 transition-colors hover:bg-white/[0.09] md:min-h-[240px] md:p-9">
                <service.icon className="h-6 w-6 text-white/70" />
                <h3 className="mt-auto text-2xl font-bold">{service.title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-white/50 keep-all">{service.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
