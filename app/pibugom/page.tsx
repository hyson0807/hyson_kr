import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const APP_STORE_URL =
  'https://apps.apple.com/kr/app/%ED%94%BC%EB%B6%80%EA%B3%B0-%ED%94%BC%EB%B6%80-%EA%B3%A0%EB%AF%BC-%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0/id6760972457';

export const metadata: Metadata = {
  title: '피부곰 - 피부 고민 커뮤니티',
  description:
    '피부 트러블, 루틴, 제품 고민을 나누고 서로 도움을 주는 피부 고민 커뮤니티 앱',
  alternates: { canonical: '/pibugom' },
  openGraph: {
    title: '피부곰 - 피부 고민 커뮤니티',
    description:
      '피부 트러블, 루틴, 제품 고민을 나누고 서로 도움을 주는 피부 고민 커뮤니티 앱',
    url: 'https://hyson.kr/pibugom',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: '피부곰 - 피부 고민 커뮤니티',
    description:
      '피부 트러블, 루틴, 제품 고민을 나누고 서로 도움을 주는 피부 고민 커뮤니티 앱',
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

export default function PibugomPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      {/* Hero */}
      <div className="flex flex-col items-center text-center max-w-md">
        {/* App Icon */}
        <div className="mb-6 rounded-[28px] overflow-hidden shadow-2xl shadow-[#E87461]/20">
          <Image
            src="/images/apps/pibugom.png"
            alt="피부곰 앱 아이콘"
            width={120}
            height={120}
            priority
          />
        </div>

        {/* App Name */}
        <h1 className="text-3xl font-bold mb-2">피부곰</h1>
        <p
          className="text-lg font-medium mb-6"
          style={{ color: '#E87461' }}
        >
          피부 고민 커뮤니티
        </p>

        {/* Tagline */}
        <p className="text-xl leading-relaxed mb-4" style={{ color: '#F0F0F0' }}>
          피부 고민, 혼자 끙끙대지 마세요
        </p>
        <p className="text-sm leading-relaxed mb-10" style={{ color: '#8A8A8A' }}>
          트러블, 스킨케어 루틴, 제품 추천까지 —<br />
          같은 고민을 가진 사람들과 함께 나눠보세요.
        </p>

        {/* Download Button */}
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-white font-semibold text-base transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#E87461]/30"
          style={{
            background: 'linear-gradient(135deg, #FF9A8B, #FF6B6B)',
          }}
        >
          <AppleIcon />
          App Store에서 다운로드
        </a>

        {/* Google Play - coming soon */}
        <p className="mt-4 text-xs" style={{ color: '#555555' }}>
          Google Play 출시 준비 중
        </p>
      </div>

      {/* Features */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-lg sm:max-w-2xl w-full">
        {[
          {
            emoji: '💬',
            title: '익명 Q&A',
            desc: '부담 없이 피부 고민을 질문하고 답변을 받아보세요',
          },
          {
            emoji: '🏷️',
            title: '카테고리별 탐색',
            desc: '트러블, 건조함, 민감성 등 관심 주제를 골라보세요',
          },
          {
            emoji: '🤝',
            title: '서로 돕는 커뮤니티',
            desc: '경험을 나누고, 도움이 된 답변에 감사를 표현하세요',
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

      {/* Footer Links */}
      <div className="mt-16 flex flex-wrap justify-center gap-4 text-xs" style={{ color: '#555555' }}>
        <Link href="/pibugom/terms" className="hover:underline">
          이용약관
        </Link>
        <span>·</span>
        <Link href="/pibugom/privacy" className="hover:underline">
          개인정보처리방침
        </Link>
        <span>·</span>
        <Link href="/pibugom/community-guidelines" className="hover:underline">
          커뮤니티 가이드라인
        </Link>
      </div>

      <p className="mt-4 text-xs" style={{ color: '#3D3D3D' }}>
        &copy; Hyson Works
      </p>
    </div>
  );
}
