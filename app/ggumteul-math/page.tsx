import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '꿈틀매쓰 - 초등 저학년 수학 게이미피케이션',
  description:
    '문제를 풀어 코인을 모으고, 지렁이를 키우고, 마을을 꾸미는 초등 1~3학년 수학 학습 앱.',
  alternates: { canonical: '/ggumteul-math' },
  openGraph: {
    title: '꿈틀매쓰 - 초등 저학년 수학 게이미피케이션',
    description:
      '문제를 풀어 코인을 모으고, 지렁이를 키우고, 마을을 꾸미는 초등 1~3학년 수학 학습 앱.',
    url: 'https://hyson.kr/ggumteul-math',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: '꿈틀매쓰 - 초등 저학년 수학 게이미피케이션',
    description:
      '문제를 풀어 코인을 모으고, 지렁이를 키우고, 마을을 꾸미는 초등 1~3학년 수학 학습 앱.',
  },
};

function AppleIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" />
    </svg>
  );
}

export default function GgumteulMathPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="flex flex-col items-center text-center max-w-md">
        <div className="mb-6 rounded-[28px] overflow-hidden shadow-2xl shadow-[#A0522D]/30">
          <Image
            src="/images/apps/ggumteul-math.png"
            alt="꿈틀매쓰 앱 아이콘"
            width={120}
            height={120}
            priority
          />
        </div>

        <h1 className="text-3xl font-bold mb-2">꿈틀매쓰</h1>
        <p
          className="text-lg font-medium mb-6"
          style={{ color: '#C8956C' }}
        >
          초등 1~3학년 수학 게이미피케이션
        </p>

        <p className="text-xl leading-relaxed mb-4" style={{ color: '#F0F0F0' }}>
          혼자 공부하는 수학, 이제 재미있게
        </p>
        <p className="text-sm leading-relaxed mb-10" style={{ color: '#8A8A8A' }}>
          문제 풀고 코인 모아 지렁이를 키우고,<br />
          나만의 마을을 꾸며보세요.
        </p>

        <span
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-base cursor-not-allowed"
          style={{
            background: 'linear-gradient(135deg, #C8956C, #A0522D)',
            color: '#FFFFFF',
            opacity: 0.55,
          }}
          aria-disabled="true"
        >
          <AppleIcon />
          App Store 곧 출시 예정
        </span>

        <p className="mt-4 text-xs" style={{ color: '#555555' }}>
          곧 만나요!
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-lg sm:max-w-2xl w-full">
        {[
          {
            emoji: '🐛',
            title: '지렁이 키우기',
            desc: '문제를 맞히면 지렁이가 자라나요. 1단계부터 6단계까지 함께 성장!',
          },
          {
            emoji: '🏘️',
            title: '마을 꾸미기',
            desc: '모은 코인으로 모자, 옷, 액세서리를 사서 나만의 지렁이를 꾸며요.',
          },
          {
            emoji: '📚',
            title: '학년별 커리큘럼',
            desc: '1학년 1학기부터 3학년 2학기까지, 6단계 학기 진도로 빠짐없이.',
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl p-5 text-center"
            style={{ backgroundColor: '#1A1A1A', border: '1px solid #2A2A2A' }}
          >
            <div className="text-2xl mb-2">{feature.emoji}</div>
            <h3 className="font-semibold text-sm mb-1" style={{ color: '#F0F0F0' }}>
              {feature.title}
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: '#8A8A8A' }}>
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

      <section
        id="support"
        className="mt-20 w-full max-w-2xl"
        aria-labelledby="support-heading"
      >
        <div
          className="rounded-2xl p-8"
          style={{ backgroundColor: '#1A1A1A', border: '1px solid #2A2A2A' }}
        >
          <h2
            id="support-heading"
            className="text-2xl font-bold mb-2 text-center"
            style={{ color: '#F0F0F0' }}
          >
            고객 지원
          </h2>
          <p
            className="text-sm text-center mb-6"
            style={{ color: '#8A8A8A' }}
          >
            앱 사용 중 궁금한 점이나 문제가 있으시면 언제든 연락 주세요.
          </p>

          <div
            className="rounded-xl p-5 mb-4"
            style={{ backgroundColor: '#0F0F0F', border: '1px solid #2A2A2A' }}
          >
            <p className="text-xs mb-1" style={{ color: '#8A8A8A' }}>
              이메일 문의
            </p>
            <a
              href="mailto:contact@hyson.kr?subject=%5B%EA%BF%88%ED%8B%80%EB%A7%A4%EC%93%B0%5D%20%EB%AC%B8%EC%9D%98"
              className="text-lg font-semibold hover:underline"
              style={{ color: '#C8956C' }}
            >
              contact@hyson.kr
            </a>
            <p className="mt-2 text-xs" style={{ color: '#8A8A8A' }}>
              영업일 기준 1~2일 이내에 답변드립니다 (한국 시간 기준).
            </p>
          </div>

          <p
            className="text-xs text-center"
            style={{ color: '#555555' }}
          >
            계정 삭제는{' '}
            <Link
              href="/ggumteul-math/delete-account"
              className="hover:underline"
              style={{ color: '#8A8A8A' }}
            >
              계정 삭제 안내
            </Link>{' '}
            페이지에서 직접 진행하실 수 있습니다.
          </p>
        </div>
      </section>

      <section
        className="mt-12 w-full max-w-2xl"
        aria-labelledby="faq-heading"
      >
        <h2
          id="faq-heading"
          className="text-2xl font-bold mb-6 text-center"
          style={{ color: '#F0F0F0' }}
        >
          자주 묻는 질문
        </h2>

        <div className="space-y-3">
          {[
            {
              q: '코인은 어떻게 모으나요?',
              a: '수학 문제를 맞히면 코인을 받을 수 있습니다. 정답 1개당 기본 10코인이 지급되며, 문제 난이도와 풀이 속도에 따라 추가 보너스 코인이 더해집니다. 별도의 결제나 충전은 없습니다.',
            },
            {
              q: '코인은 어디에 사용하나요?',
              a: '상점에서 지렁이 캐릭터를 꾸미는 모자, 옷, 액세서리 같은 꾸미기 아이템을 구매할 때 사용합니다. 코인은 게임 내 보상이며, 현금으로 환전하거나 다른 용도로 사용할 수 없습니다.',
            },
            {
              q: '학습 진도는 어떻게 구성되어 있나요?',
              a: '초등학교 1학년 1학기부터 3학년 2학기까지 총 6단계 학기 진도로 구성되어 있습니다. 각 단계의 모든 노드를 클리어하면 다음 학기로 진급합니다.',
            },
            {
              q: '계정을 삭제하고 싶어요.',
              a: '앱 내 [프로필 → 설정 → 계정 삭제] 메뉴에서 직접 삭제할 수 있으며, 위의 “계정 삭제 안내” 페이지에서도 절차를 확인할 수 있습니다. 삭제 시 모든 학습 기록과 코인이 영구적으로 삭제됩니다.',
            },
            {
              q: '비밀번호를 잊어버렸어요. / 로그인이 안 돼요.',
              a: 'contact@hyson.kr 으로 가입하신 이메일 주소와 함께 문의 주시면 도와드리겠습니다.',
            },
          ].map((item) => (
            <details
              key={item.q}
              className="group rounded-xl p-4"
              style={{ backgroundColor: '#1A1A1A', border: '1px solid #2A2A2A' }}
            >
              <summary
                className="cursor-pointer font-semibold text-sm flex justify-between items-center list-none"
                style={{ color: '#F0F0F0' }}
              >
                <span>{item.q}</span>
                <span
                  className="ml-3 transition-transform group-open:rotate-45 text-lg"
                  style={{ color: '#C8956C' }}
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: '#8A8A8A' }}
              >
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <div
        className="mt-16 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs"
        style={{ color: '#555555' }}
      >
        <a href="#support" className="hover:underline">
          고객 지원
        </a>
        <span>·</span>
        <Link href="/ggumteul-math/terms" className="hover:underline">
          이용약관
        </Link>
        <span>·</span>
        <Link href="/ggumteul-math/privacy" className="hover:underline">
          개인정보처리방침
        </Link>
        <span>·</span>
        <Link href="/ggumteul-math/delete-account" className="hover:underline">
          계정 삭제 안내
        </Link>
        <span>·</span>
        <Link href="/ggumteul-math/licenses" className="hover:underline">
          오픈소스 라이선스
        </Link>
      </div>

      <p className="mt-4 text-xs" style={{ color: '#3D3D3D' }}>
        &copy; Hyson Works
      </p>
    </div>
  );
}
