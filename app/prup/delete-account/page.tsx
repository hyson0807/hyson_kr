import { Metadata } from 'next';
import { AnimatedSection } from '../../components/AnimatedSection';
import { PRUP_ACCENT, SUPPORT_EMAIL } from '../constants';

/// Google Play 데이터 보안의 "계정 삭제 URL" — 앱 이름, 삭제 절차, 지워지는 데이터와 남는 데이터를 한 페이지에.
/// 앱을 이미 지운 사람도 요청할 수 있도록 이메일 경로를 함께 둔다. 심사자가 영어로 읽으므로 영어를 같이 적는다.
export const metadata: Metadata = {
  title: '계정 삭제 - PRUP',
  description: 'PRUP 계정과 데이터를 삭제하는 방법 — 앱에서 바로, 또는 이메일로 요청합니다.',
  alternates: { canonical: '/prup/delete-account' },
  openGraph: {
    title: '계정 삭제 - PRUP | Hyson Works',
    description: 'PRUP 계정과 데이터를 삭제하는 방법 — 앱에서 바로, 또는 이메일로 요청합니다.',
  },
};

const ko = [
  {
    title: '1. 앱에서 바로 삭제',
    list: [
      'PRUP 앱을 열고 설정 › 계정 › 회원 탈퇴를 누릅니다.',
      '확인하면 즉시 삭제되며 되돌릴 수 없습니다. 별도의 요청 절차는 없습니다.',
    ],
  },
  {
    title: '2. 앱 없이 요청',
    list: [
      `앱을 이미 지웠다면 ${SUPPORT_EMAIL} 로 "PRUP 계정 삭제 요청"을 보내 주세요.`,
      'Apple·Google 계정을 연결했다면 그 계정의 이메일 주소를 적어 주세요. 확인 후 영업일 기준 7일 안에 삭제하고 회신합니다.',
      '로그인 없이 게스트로만 쓴 계정은 기기 안의 값으로만 식별됩니다. 같은 기기에 앱을 다시 설치한 뒤 위 1번으로 삭제해 주세요.',
    ],
  },
  {
    title: '3. 삭제되는 데이터',
    list: [
      '계정 정보: 기기 식별자, Apple·Google 사용자 식별자, 이메일 주소',
      '신체 정보: 성별, 출생 연도, 키, 체중',
      '운동 기록: 모든 세트, 사이클과 세션 목표, 순서와 설정',
      '로그인 토큰. Apple로 연결한 계정은 Apple 로그인 연결도 함께 해제합니다.',
    ],
  },
  {
    title: '4. 남는 데이터',
    list: [
      '구독은 탈퇴로 해지되지 않습니다. App Store 또는 Google Play 구독 설정에서 해지해 주세요.',
      '결제 기록은 Apple·Google과 구독 관리 위탁사(RevenueCat)가 관련 법령과 각 사의 정책에 따라 보관합니다.',
      '그 밖에 회사가 따로 보관하는 데이터는 없습니다.',
    ],
  },
];

const en = [
  {
    title: 'Delete in the app',
    list: [
      'Open PRUP and go to Settings › Account › Delete account.',
      'Deletion is immediate and cannot be undone. No separate request is needed.',
    ],
  },
  {
    title: 'Request without the app',
    list: [
      `Email ${SUPPORT_EMAIL} with the subject "PRUP account deletion".`,
      'If you linked Apple or Google, include that email address. We delete the account within 7 business days and reply.',
      'Guest-only accounts are identified only by a value stored on the device. Reinstall PRUP on the same device and delete it from Settings.',
    ],
  },
  {
    title: 'What is deleted',
    list: [
      'Account data (device identifier, Apple/Google user ID, email), body info (sex, birth year, height, weight), all workout logs, cycle and session targets, settings, and sign-in tokens. Sign in with Apple access is revoked.',
    ],
  },
  {
    title: 'What is kept',
    list: [
      'Deleting the account does not cancel a subscription — cancel it in App Store or Google Play settings. Purchase records are kept by Apple, Google and RevenueCat under their own policies. We keep no other data.',
    ],
  },
];

function Sections({ items }: { items: { title: string; list: string[] }[] }) {
  return (
    <>
      {items.map((section, index) => (
        <AnimatedSection
          key={section.title}
          animation="fadeUp"
          delay={Math.min(index * 100, 500) as 0 | 100 | 200 | 300 | 400 | 500}
        >
          <h2 className="text-2xl font-semibold text-white mb-4">{section.title}</h2>
          <ul className="list-disc list-inside space-y-2">
            {section.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </AnimatedSection>
      ))}
    </>
  );
}

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: PRUP_ACCENT }}>
            계정 삭제
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-500 mb-12">PRUP · Hyson Works</p>
        </AnimatedSection>

        <div className="space-y-10 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          <Sections items={ko} />

          <AnimatedSection animation="fadeIn">
            <h2 className="text-3xl font-bold pt-8" style={{ color: PRUP_ACCENT }}>
              Delete your PRUP account
            </h2>
          </AnimatedSection>
          <Sections items={en} />
        </div>
      </div>
    </div>
  );
}
