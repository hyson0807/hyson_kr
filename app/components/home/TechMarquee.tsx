import { Reveal } from '../site/Reveal';

const rows = [
  ['React Native', 'Expo', 'SwiftUI', 'WidgetKit', 'App Intents', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'RevenueCat'],
  ['NestJS', 'Prisma', 'PostgreSQL', 'Neon', 'Supabase', 'AWS', 'Cloudflare', 'Vercel', 'Docker', 'GitHub Actions', 'OpenAI'],
];

/** 레퍼런스의 고객사 로고 흐름 자리에 — 다루는 기술을 흘려 보여 준다 */
export function TechMarquee() {
  return (
    <section data-tone="light" className="overflow-hidden py-20 md:py-28">
      <Reveal className="px-6 text-center">
        <h2 className="text-3xl leading-[1.3] font-bold text-display text-neutral-900 md:text-[40px]">
          검증된 기술로,
          <br />
          끝까지 만듭니다.
        </h2>
      </Reveal>

      <div className="mt-14 flex flex-col gap-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex w-max gap-4 ${i % 2 ? 'animate-marquee-reverse' : 'animate-marquee'} hover:[animation-play-state:paused]`}
          >
            {[...row, ...row].map((tech, j) => (
              <span
                key={`${tech}-${j}`}
                aria-hidden={j >= row.length}
                className="rounded-full border border-neutral-200 bg-white px-6 py-3 text-base font-semibold whitespace-nowrap text-neutral-700"
              >
                {tech}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
