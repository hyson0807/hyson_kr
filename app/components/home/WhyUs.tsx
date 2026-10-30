import Image from 'next/image';
import { Reveal } from '../site/Reveal';

const reasons = [
  {
    image: '/images/generated/why-1.webp',
    chip: 'Live on App Store · Google Play',
    title: '직접 앱을 출시하고\n운영하고 있기 때문에',
    body: 'hydo, IsoLog, PRUP처럼 Hyson Works가 직접 만든 앱이 지금도 스토어에서 실제 사용자를 만나고 있습니다. 심사, 배포, 업데이트, 사용자 대응까지 직접 겪어 본 과정을 그대로 함께합니다.',
  },
  {
    image: '/images/generated/why-2.webp',
    chip: 'Lock Screen · Widget · Live Activity',
    title: '플랫폼의 끝단까지\n구현해 봤기 때문에',
    body: '잠금화면 배경화면 자동 생성, 홈 화면 위젯, Live Activity, macOS 앱처럼 까다로운 네이티브 기능까지 구현했습니다. 크로스플랫폼과 네이티브 중 서비스에 맞는 방식을 고릅니다.',
  },
  {
    image: '/images/generated/why-3.webp',
    chip: 'NestJS · PostgreSQL · CI/CD',
    title: '서버와 인프라까지\n함께 책임지기 때문에',
    body: '앱만 넘기고 끝나지 않습니다. API 서버와 데이터베이스, 배포 파이프라인, 무중단 서버 이전까지 서비스가 계속 돌아가는 데 필요한 것을 함께 설계하고 운영합니다.',
  },
  {
    image: '/images/generated/why-4.webp',
    chip: '14 Languages · Global Payments',
    title: '해외 출시를\n경험해 봤기 때문에',
    body: '최대 14개 언어의 다국어 앱, 국가별 가격과 해외 결제, 글로벌 스토어 출시를 진행했습니다. 처음부터 해외 사용자를 고려한 구조로 만듭니다.',
  },
];

/** 왼쪽 제목은 고정되고, 카드가 하나씩 겹쳐 올라오는 레퍼런스 섹션 */
export function WhyUs() {
  return (
    <section data-tone="dark" className="bg-inherit px-6 pt-16 pb-32 text-white md:pt-24">
      <div className="mx-auto grid max-w-6xl gap-10 bg-inherit lg:grid-cols-[300px_1fr] lg:gap-6">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <h2 className="text-3xl leading-[1.3] font-bold text-display md:text-[40px]">
              앱 개발부터 운영까지,
              <br />
              Hyson Works가
              <br />
              필요한 이유
            </h2>
          </Reveal>
        </div>

        <div className="relative bg-inherit">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="sticky top-24 mb-[18vh] bg-inherit pt-8 last:mb-0 md:top-28"
              style={{ zIndex: i + 1 }}
            >
              <Reveal className="grid items-start gap-8 sm:grid-cols-[minmax(0,340px)_1fr] sm:gap-12">
                <div className="relative aspect-square overflow-hidden rounded-[28px]">
                  <Image src={reason.image} alt="" fill sizes="340px" className="object-cover" />
                  <span className="absolute right-5 bottom-5 left-5 rounded-full bg-white/90 px-4 py-2.5 text-center text-[13px] font-semibold text-neutral-900 shadow-lg backdrop-blur">
                    {reason.chip}
                  </span>
                </div>
                <div className="sm:pt-4">
                  <h3 className="text-2xl leading-[1.35] font-bold whitespace-pre-line text-display">{reason.title}</h3>
                  <p className="mt-5 max-w-sm text-sm leading-7 text-white/55 keep-all">{reason.body}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
