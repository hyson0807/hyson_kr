import { Metadata } from 'next';
import { AnimatedSection } from '../../components/AnimatedSection';
import { PRUP_ACCENT } from '../constants';

export const metadata: Metadata = {
  title: '개인정보처리방침 - PRUP',
  description:
    'PRUP 개인정보처리방침 - 수집하는 개인정보 항목, 이용 목적, 보유 기간, 처리위탁과 국외 이전을 안내합니다.',
  alternates: { canonical: '/prup/privacy' },
  openGraph: {
    title: '개인정보처리방침 - PRUP | Hyson Works',
    description:
      'PRUP 개인정보처리방침 - 수집하는 개인정보 항목, 이용 목적, 보유 기간, 처리위탁과 국외 이전을 안내합니다.',
  },
};

const sections = [
  {
    title: '1. 수집하는 개인정보 항목',
    content:
      '회사는 서비스 제공에 필요한 최소한의 정보만 수집합니다. 이름, 주소, 전화번호, 결제 수단 정보는 수집하지 않습니다.',
    list: [
      '기기 식별자: 로그인 없이 게스트로 시작할 때 계정을 만들기 위해 앱이 생성한 임의의 값입니다. 광고 식별자(IDFA·광고 ID)가 아니며 다른 앱과 공유되지 않습니다.',
      '계정 정보: Apple 또는 Google 계정을 연결한 경우 해당 서비스가 발급하는 사용자 식별자와, 이용자가 공유를 선택한 경우의 이메일 주소',
      '신체 정보: 성별, 출생 연도, 키, 체중 — 운동 수준 표시와 증량 단위 계산에 씁니다.',
      '운동 기록: 종목, 무게, 횟수, 세트를 기록한 날짜와 시각, 사이클 목표와 세션 목표',
      '앱 설정: 무게 단위(kg·lb), 원판 단위, 하루 시작 시각, 언어',
      '구독 정보: PRUP Pro 구독 여부와 만료 시각, 스토어가 발급하는 구매 기록 식별자. 카드 번호 등 결제 정보는 Apple·Google이 처리하며 회사는 받지 않습니다.',
    ],
  },
  {
    title: '2. 수집하지 않는 정보',
    content: '아래 정보는 수집하지 않으며, 관련 권한도 요구하지 않습니다.',
    list: [
      '위치 정보',
      '연락처, 사진, 카메라, 마이크',
      'Apple 건강(HealthKit), Google Health Connect 등 기기의 건강 데이터',
      '광고 식별자 및 제3자 광고·분석 도구',
    ],
  },
  {
    title: '3. 개인정보의 이용 목적',
    content: null,
    list: [
      '회원 식별 및 로그인 상태 유지, 기기 변경 시 기록 복구',
      '운동 기록 저장과 다음 세션·사이클 목표 계산',
      '무료 이용 범위 확인과 구독 상태 확인',
      '문의 대응 및 서비스 개선',
    ],
  },
  {
    title: '4. 개인정보의 보유 및 파기',
    content: null,
    list: [
      '개인정보는 회원 탈퇴 시까지 보유하며, 탈퇴와 동시에 계정 정보, 신체 정보, 운동 기록을 모두 삭제합니다.',
      '탈퇴는 앱의 설정 › 계정 › 회원 탈퇴에서 즉시 진행할 수 있으며, 별도의 요청 절차가 필요하지 않습니다.',
      '구독을 해지하거나 구독이 만료되어도 기록은 삭제하지 않습니다. 다시 구독하면 이어서 쓸 수 있습니다.',
      '스토어 결제 기록은 Apple·Google과 구독 관리 위탁사(RevenueCat)가 관련 법령과 각 사의 정책에 따라 보관합니다.',
      '법령에 따라 보존이 필요한 정보가 있는 경우 해당 기간 동안 분리 보관합니다.',
    ],
  },
  {
    title: '5. 개인정보의 제3자 제공 및 처리위탁',
    content:
      '회사는 이용자의 개인정보를 제3자에게 판매하거나 광고 목적으로 제공하지 않습니다. 서비스 운영을 위해 아래에 처리를 위탁합니다.',
    list: [
      'Apple Inc. — 로그인 인증(Sign in with Apple), 앱 내 구독 결제',
      'Google LLC — 로그인 인증(Google 로그인), 앱 내 구독 결제',
      'RevenueCat, Inc. — 구독 상태 관리',
      'Amazon Web Services — 애플리케이션 서버 및 데이터베이스 운영 (서울 리전)',
      '650 Industries, Inc. (Expo) — 앱 업데이트 배포',
    ],
  },
  {
    title: '6. 개인정보의 국외 이전',
    content:
      '서비스의 서버와 데이터베이스는 대한민국(서울 리전)에 있습니다. 다만 구독 관리와 앱 업데이트를 위해 아래와 같이 국외로 이전합니다. 이용자는 국외 이전을 원하지 않으면 구독을 이용하지 않을 수 있으나, 이 경우 무료 이용 범위를 넘는 기능을 쓸 수 없습니다.',
    list: [
      'RevenueCat, Inc. (미국, privacy@revenuecat.com) — 앱이 생성한 계정 식별자(임의 값), 구독 구매 기록 / 구독 상태 확인 목적 / 앱에서 구매·복원할 때 네트워크로 전송 / 회원 탈퇴 또는 위탁 계약 종료 시까지',
      '650 Industries, Inc. (미국) — 앱 버전, 기기 플랫폼, 접속 IP / 앱 업데이트 전달 목적 / 앱이 업데이트를 확인할 때 네트워크로 전송 / 업데이트 전달 후 각 사의 정책에 따른 기간',
    ],
  },
  {
    title: '7. 이용자의 권리',
    content: null,
    list: [
      '이용자는 언제든지 앱 안에서 신체 정보와 설정을 조회·수정할 수 있습니다.',
      '이용자는 언제든지 자신의 운동 기록을 조회하고 삭제할 수 있습니다.',
      '이용자는 앱의 설정 › 계정 › 회원 탈퇴로 언제든지 이용 계약을 해지하고 개인정보 삭제를 요청할 수 있습니다.',
      '그 밖의 열람·정정·처리정지 요구는 아래 연락처로 요청할 수 있으며, 회사는 지체 없이 조치합니다.',
    ],
  },
  {
    title: '8. 개인정보의 안전성 확보 조치',
    content: null,
    list: [
      '서버와의 모든 통신은 HTTPS로 암호화합니다.',
      '로그인 토큰과 기기 식별자는 기기의 보안 저장소(iOS Keychain, Android Keystore)에 저장합니다.',
      '개인정보에 접근할 수 있는 인원을 최소한으로 제한합니다.',
    ],
  },
  {
    title: '9. 아동의 개인정보',
    content:
      '서비스는 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 개인정보를 의도적으로 수집하지 않습니다. 만 14세 미만 아동의 정보가 수집된 사실을 알게 된 경우 지체 없이 삭제합니다.',
  },
  {
    title: '10. 개인정보 보호책임자 및 문의',
    content:
      '개인정보 처리에 관한 문의, 불만 처리, 피해 구제는 아래로 연락해 주시기 바랍니다. 회사는 접수 후 영업일 기준 2~3일 안에 답변드립니다.',
    list: ['상호: Hyson Works', '이메일: contact@hyson.kr'],
  },
  {
    title: '11. 방침의 변경',
    content:
      '본 방침의 내용이 추가, 삭제, 수정될 경우 시행 7일 전부터 서비스 내 공지 또는 본 페이지를 통해 알립니다. 다만 이용자 권리에 중대한 변경이 발생하는 경우 최소 30일 전에 알립니다.',
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: PRUP_ACCENT }}>
            개인정보처리방침
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-500 mb-12">
            PRUP · 시행일: 2026년 10월 11일
          </p>
        </AnimatedSection>

        <div className="space-y-10 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          <AnimatedSection animation="fadeIn">
            <p>
              Hyson Works(이하 &quot;회사&quot;)는 PRUP 서비스(이하 &quot;서비스&quot;)를 제공함에 있어
              이용자의 개인정보를 중요하게 생각하며, 「개인정보 보호법」 등 관련 법령을 준수합니다.
            </p>
          </AnimatedSection>

          {sections.map((section, index) => (
            <AnimatedSection
              key={section.title}
              animation="fadeUp"
              delay={Math.min(index * 100, 500) as 0 | 100 | 200 | 300 | 400 | 500}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">{section.title}</h2>
              {section.content && <p className="mb-3">{section.content}</p>}
              {section.list && (
                <ul className="list-disc list-inside space-y-2">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
