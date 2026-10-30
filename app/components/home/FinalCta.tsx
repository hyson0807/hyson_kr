import { CtaCapsule } from '../site/CtaCapsule';
import { Reveal } from '../site/Reveal';

export function FinalCta() {
  return (
    <section data-tone="light" data-cta-inline className="px-6 pt-16 pb-28 text-center md:pb-36">
      <Reveal>
        <h2 className="text-3xl leading-[1.3] font-bold text-display text-neutral-900 md:text-[40px]">
          꾸준히, 더 나은 앱을
          <br />
          함께 만들어요.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-7 text-neutral-500 keep-all">
          아이디어 단계여도 괜찮습니다. 무엇을 만들고 싶은지 들려주시면 방법을 함께 찾겠습니다.
        </p>
        <CtaCapsule tone="light" className="mx-auto mt-10 max-w-[600px] text-left" />
      </Reveal>
    </section>
  );
}
