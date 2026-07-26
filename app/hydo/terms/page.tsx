import { Metadata } from 'next';
import { AnimatedSection } from '../../components/AnimatedSection';

export const metadata: Metadata = {
  title: '서비스 이용약관 - hydo',
  description: 'hydo 서비스 이용약관입니다.',
  alternates: { canonical: '/hydo/terms' },
  openGraph: {
    title: '서비스 이용약관 - hydo | Hyson Works',
    description: 'hydo 서비스 이용약관입니다.',
  },
};

const sections = [
  {
    title: '제1조 (목적)',
    content:
      '본 약관은 Hyson Works(이하 "회사")가 제공하는 hydo 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.',
  },
  {
    title: '제2조 (용어의 정의)',
    content: null,
    list: [
      '"서비스"란 회사가 제공하는 캘린더 공유 및 잠금화면 배경화면 생성 애플리케이션을 말합니다.',
      '"회원"이란 Apple 계정으로 로그인하여 서비스를 이용하는 자를 말합니다.',
      '"그룹"이란 여러 회원이 하나의 캘린더를 함께 사용하기 위해 만든 단위를 말합니다.',
      '"초대 코드"란 그룹에 참여하기 위해 회사가 발급하는 6자리 문자열을 말합니다.',
      '"일정"이란 회원이 서비스에 등록한 제목, 시각, 그룹 정보를 말합니다.',
    ],
  },
  {
    title: '제3조 (약관의 효력 및 변경)',
    content: null,
    list: [
      '본 약관은 서비스 내에 게시하거나 기타 적절한 방법으로 공지함으로써 효력이 발생합니다.',
      '회사는 관련 법령에 위배되지 않는 범위에서 약관을 변경할 수 있으며, 변경 시 시행일 7일 전에 공지합니다.',
      '변경된 약관에 동의하지 않는 회원은 서비스 탈퇴를 통해 이용 계약을 해지할 수 있습니다.',
    ],
  },
  {
    title: '제4조 (회원가입 및 계정)',
    content: null,
    list: [
      '회원가입은 Apple 로그인(Sign in with Apple)으로만 이루어집니다. 별도의 아이디와 비밀번호를 만들지 않습니다.',
      '서비스를 이용하려면 로그인이 필요합니다. 로그인하지 않은 상태로 일정을 저장하는 기능은 제공하지 않습니다.',
      '회원은 그룹 멤버에게 표시될 이름을 정할 수 있으며, 설정에서 언제든지 변경할 수 있습니다.',
      '회원은 타인에게 계정을 양도하거나 공유할 수 없습니다.',
    ],
  },
  {
    title: '제5조 (서비스의 제공)',
    content: '회사는 다음의 서비스를 제공합니다.',
    list: [
      '월간 캘린더 조회 및 일정 생성·수정·삭제',
      '그룹 생성, 초대 코드를 통한 참여, 그룹 단위 일정 공유',
      '월간 달력을 잠금화면 배경화면 이미지로 만들어 주는 기능',
      '오늘 남은 일정을 보여주는 잠금화면 위젯',
      '기타 회사가 정하는 서비스',
    ],
  },
  {
    title: '제6조 (그룹 공유의 특성)',
    content:
      '서비스의 그룹에는 방장·뷰어와 같은 권한 등급이 없습니다. 이용자는 아래 사항을 이해하고 그룹 기능을 사용해야 합니다.',
    list: [
      '그룹에 참여한 모든 멤버는 그 그룹의 일정을 열람, 수정, 삭제할 수 있습니다.',
      '초대 코드를 알고 있는 사람은 누구나 그룹에 참여할 수 있으므로, 코드는 신뢰할 수 있는 상대에게만 공유해야 합니다.',
      '민감한 정보를 일정 제목에 기록하지 않을 것을 권장합니다.',
      '그룹에서 나가더라도 본인이 작성한 일정은 그룹에 남습니다. 남은 멤버가 계속 열람하고 수정할 수 있습니다.',
      '그룹에 혼자만 남은 상태에서 나가면 그룹과 그 안의 일정이 함께 삭제됩니다.',
    ],
  },
  {
    title: '제7조 (잠금화면 배경화면 기능)',
    content:
      'iOS는 앱이 기기의 배경화면을 직접 변경하는 것을 허용하지 않습니다. 이에 따라 다음 사항이 적용됩니다.',
    list: [
      '서비스는 달력 이미지를 생성해 단축어에 넘겨줄 뿐이며, 잠금화면 적용은 이용자가 설정한 Apple 단축어 자동화가 수행합니다.',
      '단축어 자동화의 동작 여부와 실행 시점은 iOS가 결정하므로, 회사는 배경화면이 특정 시점에 갱신되는 것을 보장하지 않습니다.',
      '잠금화면이 "사진" 유형이 아닌 경우(천체, 날씨, 사진 셔플 등) 배경화면 변경이 동작하지 않을 수 있습니다.',
      '이용자가 단축어 자동화를 삭제하거나 권한을 회수하면 해당 기능은 중단됩니다.',
    ],
  },
  {
    title: '제8조 (서비스의 변경 및 중단)',
    content: null,
    list: [
      '회사는 운영상 또는 기술상의 필요에 따라 서비스의 전부 또는 일부를 변경하거나 중단할 수 있습니다.',
      '서비스 변경 또는 중단 시 사전에 공지합니다. 다만, 불가피한 사유가 있는 경우 사후에 공지할 수 있습니다.',
    ],
  },
  {
    title: '제9조 (이용자의 의무)',
    content: '이용자는 다음 행위를 해서는 안 됩니다.',
    list: [
      '타인의 개인정보를 부정하게 수집하거나 이용하는 행위',
      '동의 없이 취득한 초대 코드로 그룹에 참여하는 행위',
      '다른 멤버의 일정을 고의로 훼손하거나 삭제하는 행위',
      '서비스를 이용하여 상업적 광고, 스팸을 게시하는 행위',
      '서비스의 정상적인 운영을 방해하거나 비정상적인 방법으로 API에 접근하는 행위',
      '관련 법령 및 본 약관을 위반하는 행위',
    ],
  },
  {
    title: '제10조 (데이터의 보관과 동기화)',
    content: null,
    list: [
      '일정과 그룹 정보는 회사의 서버에 저장되며, 회원이 로그인한 기기와 동기화됩니다.',
      '기기가 오프라인일 때 만든 변경 사항은 연결이 복구된 뒤 서버에 반영됩니다.',
      '여러 멤버가 같은 일정을 동시에 수정한 경우 나중에 반영된 변경이 이전 변경을 대체할 수 있습니다.',
      '회사는 데이터 손실을 방지하기 위해 합리적인 노력을 기울이나, 이용자가 직접 삭제한 데이터의 복구는 보장하지 않습니다.',
    ],
  },
  {
    title: '제11조 (회원 탈퇴 및 자격 상실)',
    content: null,
    list: [
      '회원은 언제든지 앱의 설정 메뉴에서 계정 삭제를 요청할 수 있습니다.',
      '계정을 삭제하면 계정 정보와 본인이 작성한 일정이 삭제되며, 이 조치는 되돌릴 수 없습니다.',
      '본 약관을 반복적으로 위반한 회원의 이용 자격은 제한될 수 있습니다.',
    ],
  },
  {
    title: '제12조 (면책 조항)',
    content: null,
    list: [
      '회사는 그룹 멤버 간에 공유되는 일정 내용의 정확성이나 신뢰성을 보증하지 않습니다.',
      '회사는 이용자가 일정을 잘못 입력하거나 놓쳐서 발생한 손해에 대해 책임을 지지 않습니다. 서비스는 알림·리마인더 기능을 제공하지 않습니다.',
      'iOS 단축어 자동화의 미실행으로 배경화면이 갱신되지 않아 발생한 손해에 대해 회사는 책임을 지지 않습니다.',
      '천재지변, 시스템 장애 등 불가항력으로 인한 서비스 중단에 대해 회사는 책임을 지지 않습니다.',
    ],
  },
  {
    title: '제13조 (분쟁 해결)',
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400">
            서비스 이용약관
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-500 mb-12">
            hydo · 시행일: 2026년 7월 26일
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
