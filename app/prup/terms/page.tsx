import { Metadata } from 'next';
import { AnimatedSection } from '../../components/AnimatedSection';
import { PRUP_ACCENT } from '../constants';

export const metadata: Metadata = {
  title: '서비스 이용약관 - PRUP',
  description: 'PRUP 서비스 이용약관입니다. 무료 이용 범위와 PRUP Pro 구독 조건을 포함합니다.',
  alternates: { canonical: '/prup/terms' },
  openGraph: {
    title: '서비스 이용약관 - PRUP | Hyson Works',
    description: 'PRUP 서비스 이용약관입니다. 무료 이용 범위와 PRUP Pro 구독 조건을 포함합니다.',
  },
};

const sections = [
  {
    title: '제1조 (목적)',
    content:
      '본 약관은 Hyson Works(이하 "회사")가 제공하는 PRUP 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.',
  },
  {
    title: '제2조 (용어의 정의)',
    content: null,
    list: [
      '"서비스"란 회사가 제공하는 웨이트 트레이닝 기록 및 목표 제안 애플리케이션을 말합니다.',
      '"회원"이란 게스트로 시작했거나 Apple·Google 계정을 연결하여 서비스를 이용하는 자를 말합니다.',
      '"운동한 날"이란 회원이 메인 세트를 하나 이상 기록한 날(회원 기기의 날짜 기준)을 말합니다.',
      '"PRUP Pro"란 무료 이용 범위를 넘어 기록 기능을 계속 쓸 수 있게 하는 유료 구독 상품을 말합니다.',
      '"사이클"이란 정해진 세션 수 동안 목표 무게·횟수에 도전하는 단위를 말합니다.',
    ],
  },
  {
    title: '제3조 (약관의 효력 및 변경)',
    content: null,
    list: [
      '본 약관은 서비스 내에 게시하거나 기타 적절한 방법으로 공지함으로써 효력이 발생합니다.',
      '회사는 관련 법령에 위배되지 않는 범위에서 약관을 변경할 수 있으며, 변경 시 시행일 7일 전에 공지합니다. 회원에게 불리한 변경은 30일 전에 공지합니다.',
      '변경된 약관에 동의하지 않는 회원은 서비스 탈퇴를 통해 이용 계약을 해지할 수 있습니다.',
    ],
  },
  {
    title: '제4조 (회원가입 및 계정)',
    content: null,
    list: [
      '서비스는 처음 실행할 때 별도의 가입 절차 없이 게스트 계정을 만듭니다.',
      '회원은 설정에서 Apple 또는 Google 계정을 연결할 수 있으며, 연결한 계정으로 다른 기기에서 같은 기록을 이어 쓸 수 있습니다.',
      '계정을 연결하지 않은 게스트 계정은 앱을 설치한 기기에 묶여 있으므로, 기기를 분실하거나 초기화하면 기록을 복구하지 못할 수 있습니다.',
      '회원은 타인에게 계정을 양도하거나 공유할 수 없습니다.',
    ],
  },
  {
    title: '제5조 (서비스의 제공)',
    content: '회사는 다음의 서비스를 제공합니다.',
    list: [
      '스쿼트, 벤치프레스, 데드리프트, 오버헤드프레스, 바벨로우의 세트 기록',
      '현재 기록과 신체 정보를 바탕으로 한 세션 목표·사이클 목표 제안',
      '종목 순환, 웜업 세트 추천, 운동 히스토리',
      '기타 회사가 정하는 서비스',
    ],
  },
  {
    title: '제6조 (무료 이용 범위)',
    content: null,
    list: [
      '회원은 운동한 날 3일까지 서비스의 모든 기능을 무료로 이용할 수 있습니다.',
      '운동한 날 3일을 모두 쓴 뒤에는 새 세트를 기록하려면 PRUP Pro 구독이 필요합니다. 3일째 날에는 그날이 끝날 때까지 계속 기록할 수 있습니다.',
      '기록을 삭제하더라도 이미 쓴 운동한 날은 돌아오지 않습니다.',
      '구독하지 않아도 기존 기록의 조회, 플랜 확인, 설정 변경, 회원 탈퇴는 계속 이용할 수 있습니다.',
    ],
  },
  {
    title: '제7조 (PRUP Pro 구독)',
    content: null,
    list: [
      'PRUP Pro는 월간 또는 연간 단위의 자동 갱신 구독 상품이며, 가격은 결제 화면과 스토어에 표시된 금액을 따릅니다.',
      '결제는 Apple App Store 또는 Google Play 계정으로 이루어지며, 구매 확인 시 청구됩니다.',
      '구독은 현재 기간이 끝나기 최소 24시간 전에 해지하지 않으면 같은 기간·가격으로 자동 갱신되며, 기간 종료 전 24시간 이내에 다음 기간 요금이 청구됩니다.',
      '구독 관리와 해지는 iPhone 설정 › [이름] › 구독 또는 Google Play › 결제 및 구독에서 할 수 있습니다. 앱을 삭제하거나 회원 탈퇴를 하는 것만으로는 구독이 해지되지 않습니다.',
      '해지하더라도 이미 결제한 기간이 끝날 때까지는 PRUP Pro를 이용할 수 있으며, 구독이 끝나면 제6조의 무료 이용 범위가 적용됩니다. 기존 기록은 삭제되지 않습니다.',
      '구독 가격을 변경하는 경우 스토어 정책에 따라 사전에 알리며, 회원이 동의하지 않으면 다음 갱신 전에 해지할 수 있습니다.',
      '기기를 바꾸거나 앱을 다시 설치한 경우 결제 화면의 "구매 복원"으로 구독을 되살릴 수 있습니다.',
    ],
  },
  {
    title: '제8조 (청약철회 및 환불)',
    content: null,
    list: [
      '구독 결제의 청약철회와 환불은 결제를 처리한 Apple 또는 Google의 환불 정책과 절차를 따릅니다.',
      'App Store 결제는 reportaproblem.apple.com에서, Google Play 결제는 Google Play 고객센터에서 환불을 요청할 수 있습니다.',
      '회사는 스토어 결제 대금을 직접 받거나 돌려줄 수 없으나, 환불 절차에 필요한 안내는 문의 메일로 도와드립니다.',
    ],
  },
  {
    title: '제9조 (운동과 건강에 관한 고지)',
    content:
      '서비스가 제안하는 무게·횟수는 회원이 입력한 기록에 일정한 계산식을 적용한 참고값이며, 의학적·전문적 지도를 대신하지 않습니다.',
    list: [
      '회원은 자신의 몸 상태를 고려하여 제안된 목표를 따를지 스스로 판단해야 하며, 통증이나 이상이 느껴지면 즉시 운동을 중단해야 합니다.',
      '무거운 중량을 다룰 때는 세이프티 바, 보조자 등 안전 장치를 갖추고 운동할 것을 권장합니다.',
      '질환이 있거나 부상에서 회복 중인 경우 운동을 시작하기 전에 의사나 전문가와 상담하십시오.',
    ],
  },
  {
    title: '제10조 (서비스의 변경 및 중단)',
    content: null,
    list: [
      '회사는 운영상 또는 기술상의 필요에 따라 서비스의 전부 또는 일부를 변경하거나 중단할 수 있습니다.',
      '서비스 변경 또는 중단 시 사전에 공지합니다. 다만, 불가피한 사유가 있는 경우 사후에 공지할 수 있습니다.',
      '유료 구독 기간 중 서비스를 종료하는 경우, 남은 기간에 대한 처리는 관련 법령과 스토어 정책에 따릅니다.',
    ],
  },
  {
    title: '제11조 (이용자의 의무)',
    content: '이용자는 다음 행위를 해서는 안 됩니다.',
    list: [
      '서비스의 정상적인 운영을 방해하거나 비정상적인 방법으로 API에 접근하는 행위',
      '무료 이용 범위나 구독 확인을 우회하려는 행위',
      '타인의 계정을 무단으로 사용하는 행위',
      '관련 법령 및 본 약관을 위반하는 행위',
    ],
  },
  {
    title: '제12조 (회원 탈퇴 및 자격 상실)',
    content: null,
    list: [
      '회원은 언제든지 앱의 설정 › 계정 › 회원 탈퇴에서 이용 계약을 해지할 수 있습니다.',
      '탈퇴하면 계정 정보, 신체 정보, 운동 기록이 모두 삭제되며 되돌릴 수 없습니다.',
      '탈퇴는 스토어 구독을 해지하지 않습니다. 구독은 제7조의 방법으로 따로 해지해야 합니다.',
      '본 약관을 반복적으로 위반한 회원의 이용 자격은 제한될 수 있습니다.',
    ],
  },
  {
    title: '제13조 (면책 조항)',
    content: null,
    list: [
      '회사는 서비스가 제안한 목표를 따르거나 운동하는 과정에서 발생한 부상 및 손해에 대해 회사의 고의 또는 중대한 과실이 없는 한 책임을 지지 않습니다.',
      '회사는 회원이 기록을 잘못 입력하여 발생한 목표 계산 오류에 대해 책임을 지지 않습니다.',
      '천재지변, 시스템 장애 등 불가항력으로 인한 서비스 중단에 대해 회사는 책임을 지지 않습니다.',
    ],
  },
  {
    title: '제14조 (분쟁 해결)',
    content: null,
    list: [
      '본 약관과 관련한 분쟁은 대한민국 법률에 따라 해결합니다.',
      '서비스 이용과 관련한 분쟁에 대해 회사와 이용자 간 원만한 합의를 우선으로 합니다.',
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: PRUP_ACCENT }}>
            서비스 이용약관
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-500 mb-12">
            PRUP · 시행일: 2026년 10월 11일
          </p>
        </AnimatedSection>

        <div className="space-y-10 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {sections.map((section, index) => (
            <AnimatedSection
              key={section.title}
              animation="fadeUp"
              delay={Math.min(index * 100, 500) as 0 | 100 | 200 | 300 | 400 | 500}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">{section.title}</h2>
              {section.content && <p className="mb-3">{section.content}</p>}
              {section.list && (
                <ol className="list-decimal list-inside space-y-2">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              )}
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeIn">
          <p className="mt-16 text-sm text-gray-500 dark:text-gray-500">
            문의: contact@hyson.kr
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}
