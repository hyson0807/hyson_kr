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
          App Store 출시 준비 중
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

      <div
        className="mt-16 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs"
        style={{ color: '#555555' }}
      >
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
