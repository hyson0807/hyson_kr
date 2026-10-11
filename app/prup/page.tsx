import { Metadata } from 'next';
import Link from 'next/link';
import { PRUP_ACCENT, SUPPORT_EMAIL } from './constants';

const DESCRIPTION =
  '스쿼트·벤치·데드리프트·오버헤드프레스·바벨로우, 5대 운동의 기록 경신만 다루는 앱';

export const metadata: Metadata = {
  title: 'PRUP - 5대 운동 기록 경신',
  description: DESCRIPTION,
  alternates: { canonical: '/prup' },
  openGraph: {
    title: 'PRUP - 5대 운동 기록 경신',
    description: DESCRIPTION,
    url: 'https://hyson.kr/prup',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PRUP - 5대 운동 기록 경신',
    description: DESCRIPTION,
  },
};

const features = [
  {
    label: 'TODAY',
    title: '오늘의 메인 세트',
    desc: '지금 드는 무게 × 횟수를 넣으면 오늘 도전할 세트를 알려줍니다',
  },
  {
    label: 'CYCLE',
    title: '사이클 목표',
    desc: '같은 무게로 횟수를 쌓고, 사이클 마지막 세션에 무게를 올립니다',
  },
  {
    label: 'ROTATION',
    title: '종목 순환',
    desc: '빠진 날은 실패가 아니라 그냥 미뤄집니다. 다시 세팅할 필요가 없어요',
  },
];

const faqs = [
  {
    q: '무료로 얼마나 쓸 수 있나요',
    a: '운동한 날(메인 세트를 기록한 날) 3일까지 모든 기능을 무료로 씁니다. 그 뒤로 새 기록을 남기려면 PRUP Pro 구독이 필요합니다. 구독하지 않아도 지금까지의 기록·플랜·히스토리는 계속 볼 수 있습니다.',
  },
  {
    q: '구독은 어떻게 해지하나요',
    a: 'iPhone 설정 › [이름] › 구독(Android는 Google Play › 결제 및 구독)에서 해지합니다. 해지해도 이미 결제한 기간이 끝날 때까지는 계속 쓸 수 있습니다. 앱을 삭제하는 것만으로는 구독이 해지되지 않습니다.',
  },
  {
    q: '휴대폰을 바꾸면 기록이 사라지나요',
    a: '처음에는 로그인 없이 게스트로 시작합니다. 기기를 바꾸기 전에 앱의 설정 › 계정에서 Apple 또는 Google 계정을 연결해 두면, 새 기기에서 같은 계정으로 로그인해 기록을 그대로 이어갈 수 있습니다. 구독은 설정 › PRUP Pro › 구매 복원으로 되살립니다.',
  },
  {
    q: '계정을 삭제하고 싶습니다',
    a: '앱의 설정 › 계정 › 회원 탈퇴에서 바로 지울 수 있습니다. 모든 기록이 함께 삭제되며 되돌릴 수 없습니다. 구독은 탈퇴와 별개로 스토어에서 해지해야 합니다.',
  },
];

export default function PrupPage() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="flex flex-col items-center text-center max-w-md">
        <div
          className="mb-6 flex items-center justify-center size-[120px] text-4xl font-black"
          style={{ backgroundColor: PRUP_ACCENT, color: '#0A0A0A' }}
        >
          PR↑
        </div>

        <h1 className="text-3xl font-black mb-2 tracking-tight" style={{ color: '#F2F2F2' }}>
          PRUP
        </h1>
        <p className="text-sm font-bold tracking-[0.2em] mb-6" style={{ color: PRUP_ACCENT }}>
          PERSONAL RECORD + UP
        </p>

        <p className="text-xl leading-relaxed mb-4" style={{ color: '#F2F2F2' }}>
          기록을 깨는 것만 다룹니다
        </p>
        <p className="text-sm leading-relaxed mb-10" style={{ color: '#8A8A8A' }}>
          스쿼트 · 벤치 · 데드리프트 · 오버헤드프레스 · 바벨로우.
          <br />
          지금 드는 무게를 넣으면 다음 운동에 도전할 무게를 알려줍니다.
        </p>

        <div
          className="w-full px-6 py-4 text-base font-bold"
          style={{ border: '2px solid #333333', color: '#8A8A8A' }}
        >
          App Store · Google Play 출시 예정
        </div>
        <p className="mt-3 text-xs" style={{ color: '#555555' }}>
          운동한 날 3일 무료 · 이후 PRUP Pro 구독
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg sm:max-w-2xl w-full">
        {features.map((feature) => (
          <div key={feature.title} className="p-5" style={{ backgroundColor: '#111111', border: '2px solid #222222' }}>
            <div className="text-[11px] font-bold tracking-[0.15em] mb-2" style={{ color: PRUP_ACCENT }}>
              {feature.label}
            </div>
            <h3 className="font-bold text-sm mb-1" style={{ color: '#F2F2F2' }}>
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
        <h2 className="text-lg font-bold mb-4 text-center" style={{ color: '#F2F2F2' }}>
          문의하기
        </h2>
        <div className="p-6 text-center" style={{ backgroundColor: '#111111', border: '2px solid #222222' }}>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#8A8A8A' }}>
            사용 중 문제가 생겼거나 제안할 것이 있으면 메일로 알려주세요.
            <br />
            영업일 기준 2~3일 안에 답장드립니다.
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('[PRUP] 문의')}`}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold transition-opacity hover:opacity-90"
            style={{ backgroundColor: PRUP_ACCENT, color: '#0A0A0A' }}
          >
            {SUPPORT_EMAIL}
          </a>
        </div>
      </div>

      <div className="mt-12 max-w-lg sm:max-w-2xl w-full space-y-3">
        <h2 className="text-lg font-bold mb-4 text-center" style={{ color: '#F2F2F2' }}>
          자주 묻는 질문
        </h2>
        {faqs.map((item) => (
          <div key={item.q} className="p-5" style={{ backgroundColor: '#111111', border: '2px solid #222222' }}>
            <h3 className="font-bold text-sm mb-2" style={{ color: '#F2F2F2' }}>
              {item.q}
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: '#8A8A8A' }}>
              {item.a}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-4 text-xs" style={{ color: '#555555' }}>
        <Link href="/prup/terms" className="hover:underline">
          이용약관
        </Link>
        <span>·</span>
        <Link href="/prup/privacy" className="hover:underline">
          개인정보처리방침
        </Link>
      </div>

      <p className="mt-4 text-xs" style={{ color: '#3D3D3D' }}>
        &copy; Hyson Works
      </p>
    </div>
  );
}
