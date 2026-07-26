import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const DESCRIPTION =
  '아이폰 잠금화면에 이번 달 달력을 띄우고, 친구·가족·팀과 일정을 공유하는 캘린더 앱';

export const metadata: Metadata = {
  title: 'hydo - 잠금화면 캘린더',
  description: DESCRIPTION,
  alternates: { canonical: '/hydo' },
  openGraph: {
    title: 'hydo - 잠금화면 캘린더',
    description: DESCRIPTION,
    url: 'https://hyson.kr/hydo',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'hydo - 잠금화면 캘린더',
    description: DESCRIPTION,
  },
};

const features = [
  {
    emoji: '🔒',
    title: '잠금화면에 달력',
    desc: '이번 달 일정을 배경화면으로 구워 폰을 켜자마자 보이게 합니다',
  },
  {
    emoji: '👥',
    title: '그룹으로 공유',
    desc: '초대 코드 하나로 친구·가족·팀과 같은 달력을 씁니다',
  },
  {
    emoji: '🔄',
    title: '자동 갱신',
    desc: '일정이 바뀌면 단축어 자동화가 배경화면을 다시 그립니다',
  },
];

/// 지원 문의는 이메일 하나로 받는다. 앱에 문의 화면을 따로 두지 않는다.
const SUPPORT_EMAIL = 'contact@hyson.kr';

export default function HydoPage() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16">
      <div className="flex flex-col items-center text-center max-w-md">
        <div className="mb-6 rounded-[28px] overflow-hidden shadow-2xl shadow-[#7C9CFF]/20">
          <Image
            src="/images/apps/hydo.png"
            alt="hydo 앱 아이콘"
            width={120}
            height={120}
            priority
          />
        </div>

        <h1 className="text-3xl font-bold mb-2">hydo</h1>
        <p className="text-lg font-medium mb-6" style={{ color: '#7C9CFF' }}>
          잠금화면 캘린더
        </p>

        <p className="text-xl leading-relaxed mb-4" style={{ color: '#F0F0F0' }}>
          앱을 열지 않아도 이번 달이 보입니다
        </p>
        <p className="text-sm leading-relaxed mb-10" style={{ color: '#8A8A8A' }}>
          월간 달력을 잠금화면 배경으로 띄우고,
          <br />
          친구·가족·팀과 일정을 함께 관리하세요.
        </p>

        <div
          className="w-full rounded-2xl px-6 py-5"
          style={{ backgroundColor: '#131318', border: '1px solid #24242C' }}
        >
          <p className="text-sm font-semibold mb-1" style={{ color: '#F0F0F0' }}>
            App Store 출시를 준비하고 있습니다
          </p>
          <p className="text-xs leading-relaxed" style={{ color: '#8A8A8A' }}>
            출시되면 이 페이지에 다운로드 링크가 올라갑니다.
          </p>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-lg sm:max-w-2xl w-full">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl p-5 text-center"
            style={{ backgroundColor: '#131318', border: '1px solid #24242C' }}
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

      {/* 지원(Support) 섹션 — App Store Connect 의 지원 URL 이 이 페이지를 가리킨다 */}
      <div className="mt-16 max-w-lg sm:max-w-2xl w-full">
        <h2 className="text-lg font-semibold mb-4 text-center" style={{ color: '#F0F0F0' }}>
          문의하기
        </h2>
        <div
          className="rounded-2xl p-6 text-center"
          style={{ backgroundColor: '#131318', border: '1px solid #24242C' }}
        >
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#8A8A8A' }}>
            사용 중 문제가 생겼거나 제안할 것이 있으면 메일로 알려주세요.
            <br />
            영업일 기준 2~3일 안에 답장드립니다.
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('[hydo] 문의')}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'rgba(124, 156, 255, 0.14)', color: '#7C9CFF' }}
          >
            {SUPPORT_EMAIL}
          </a>
        </div>
      </div>

      {/* 자주 묻는 질문 — 배경화면이 앱 힘만으로 안 바뀐다는 점이 문의의 대부분이 될 자리다 */}
      <div className="mt-12 max-w-lg sm:max-w-2xl w-full space-y-4">
        <h2 className="text-lg font-semibold mb-4 text-center" style={{ color: '#F0F0F0' }}>
          자주 묻는 질문
        </h2>
        {[
          {
            q: '배경화면이 자동으로 안 바뀝니다',
            a: 'iOS는 앱이 배경화면을 직접 바꾸는 것을 허용하지 않습니다. 대신 단축어 자동화가 대신 바꿔주며, 앱 온보딩에서 한 번 설정합니다. 설정 › 단축어 자동화 설정에서 다시 안내를 볼 수 있습니다.',
          },
          {
            q: '잠금화면 위젯이 흑백으로 보입니다',
            a: 'iOS 잠금화면 위젯은 시스템이 단색(vibrant)으로 렌더링합니다. 색이 필요한 정보는 배경화면 달력 쪽에서 확인해 주세요.',
          },
          {
            q: '그룹에 들어온 사람은 무엇을 할 수 있나요',
            a: '그룹 멤버는 그 그룹의 모든 일정을 보고 수정하고 삭제할 수 있습니다. 방장·뷰어 같은 권한 구분이 없으므로, 초대 코드는 믿을 수 있는 사람에게만 알려주세요.',
          },
          {
            q: '계정을 삭제하고 싶습니다',
            a: '앱의 설정 › 계정 관리 › 계정 삭제에서 바로 지울 수 있습니다. 삭제하면 계정과 내가 만든 일정이 함께 사라지며 되돌릴 수 없습니다.',
          },
        ].map((item) => (
          <div
            key={item.q}
            className="rounded-2xl p-5"
            style={{ backgroundColor: '#131318', border: '1px solid #24242C' }}
          >
            <h3 className="font-semibold text-sm mb-2" style={{ color: '#F0F0F0' }}>
              {item.q}
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: '#8A8A8A' }}>
              {item.a}
            </p>
          </div>
        ))}
      </div>

      <div
        className="mt-16 flex flex-wrap justify-center gap-4 text-xs"
        style={{ color: '#555555' }}
      >
        <Link href="/hydo/terms" className="hover:underline">
          이용약관
        </Link>
        <span>·</span>
        <Link href="/hydo/privacy" className="hover:underline">
          개인정보처리방침
        </Link>
      </div>

      <p className="mt-4 text-xs" style={{ color: '#3D3D3D' }}>
        &copy; Hyson Works
      </p>
    </div>
  );
}
