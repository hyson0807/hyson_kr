import { Metadata } from 'next';
import { AnimatedSection } from '../../components/AnimatedSection';

export const metadata: Metadata = {
  title: '서비스 이용약관 - 꿈틀매쓰',
  description: '꿈틀매쓰 서비스 이용약관입니다.',
  alternates: { canonical: '/ggumteul-math/terms' },
  openGraph: {
    title: '서비스 이용약관 - 꿈틀매쓰 | Hyson Works',
    description: '꿈틀매쓰 서비스 이용약관입니다.',
  },
};

const sections = [
  {
    title: '제1조 (목적)',
    content:
      '본 약관은 Hyson Works(이하 "회사")가 제공하는 꿈틀매쓰 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.',
  },
  {
    title: '제2조 (용어의 정의)',
    content: null,
    list: [
      '"서비스"란 회사가 제공하는 초등 저학년 대상 수학 학습 게이미피케이션 모바일 애플리케이션을 말합니다.',
      '"이용자"란 본 약관에 따라 서비스를 이용하는 자를 말하며, 만 14세 미만 아동의 경우 법정대리인의 동의를 받은 자를 포함합니다.',
      '"회원"이란 서비스에 가입하여 계정을 생성한 이용자를 말합니다.',
      '"게임 재화"란 서비스 내에서 제공되는 코인, 별 등 학습 보상으로 지급되는 가상의 자원을 말합니다.',
      '"학습 기록"이란 회원이 서비스에서 풀이한 문제의 정·오답, 풀이 시간, 진행 상태 등 학습 과정에서 자동 생성되는 데이터를 말합니다.',
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
    title: '제4조 (회원가입 및 보호자 동의)',
    content: null,
    list: [
      '회원가입은 이메일 가입 또는 Google·Apple 계정을 통한 소셜 로그인으로 이루어집니다.',
      '만 14세 미만 아동이 회원으로 가입하려는 경우 법정대리인(보호자)의 동의를 받아야 하며, 회사는 보호자의 동의 절차를 별도로 안내합니다.',
      '회원은 가입 시 정확한 정보를 제공해야 하며, 허위 정보로 인한 불이익에 대해 회사는 책임지지 않습니다.',
      '회원은 하나의 계정만 생성할 수 있으며, 타인에게 계정을 양도하거나 공유할 수 없습니다.',
    ],
  },
  {
    title: '제5조 (서비스의 제공)',
    content: '회사는 다음의 서비스를 제공합니다.',
    list: [
      '학년·학기별 수학 개념 및 문제 풀이 학습 콘텐츠',
      '문제 풀이 진행 상태 저장, 학습 진도 시각화',
      '게임 재화(코인·별) 적립 및 캐릭터(지렁이) 성장 시스템',
      '코인을 통한 가상 아이템 구매 및 캐릭터 꾸미기',
      '기타 회사가 정하는 부가 서비스',
    ],
  },
  {
    title: '제6조 (서비스의 변경 및 중단)',
    content: null,
    list: [
      '회사는 운영상 또는 기술상의 필요에 따라 서비스의 전부 또는 일부를 변경하거나 중단할 수 있습니다.',
      '서비스 변경 또는 중단 시 사전에 공지합니다. 다만, 불가피한 사유가 있는 경우 사후에 공지할 수 있습니다.',
      '학습 콘텐츠는 교육 과정 개정 또는 콘텐츠 개선을 위해 수시로 추가·수정될 수 있습니다.',
    ],
  },
  {
    title: '제7조 (게임 재화)',
    content: null,
    list: [
      '서비스 내에서 지급되는 코인, 별 등 게임 재화는 학습 보상으로 제공되며 현금으로 환금하거나 양도할 수 없습니다.',
      '게임 재화는 서비스 내에서만 사용 가능한 가상의 자원이며, 서비스 외부에서 어떠한 가치도 갖지 않습니다.',
      '회원 탈퇴 또는 이용 자격 상실 시 보유한 게임 재화는 모두 소멸됩니다.',
    ],
  },
  {
    title: '제8조 (이용자의 의무)',
    content: '이용자는 다음 행위를 해서는 안 됩니다.',
    list: [
      '타인의 계정을 도용하거나 부정한 방법으로 서비스를 이용하는 행위',
      '비정상적인 방법(자동화 도구, 해킹 등)으로 게임 재화를 획득하거나 학습 진도를 조작하는 행위',
      '서비스의 정상적인 운영을 방해하는 행위',
      '관련 법령 및 본 약관을 위반하는 행위',
    ],
  },
  {
    title: '제9조 (회원 탈퇴 및 자격 상실)',
    content: null,
    list: [
      '회원은 언제든지 앱 내 [프로필 → 설정 → 회원 탈퇴] 메뉴를 통해 탈퇴를 요청할 수 있습니다.',
      '탈퇴 시 개인정보 및 학습 기록, 게임 진행 상태는 즉시 파기됩니다.',
      '본 약관을 반복적으로 위반한 회원의 이용 자격은 제한될 수 있습니다.',
    ],
  },
  {
    title: '제10조 (면책 조항)',
    content: null,
    list: [
      '회사는 천재지변, 시스템 장애 등 불가항력으로 인한 서비스 중단에 대해 책임을 지지 않습니다.',
      '서비스에서 제공되는 학습 콘텐츠는 학교 교육 과정의 보조 자료로 제공되며, 정규 교육 과정을 대체하지 않습니다.',
      '회원의 단말 환경, 네트워크 상태 등 회사의 통제 범위를 벗어난 사유로 발생한 손해에 대해 회사는 책임을 지지 않습니다.',
    ],
  },
  {
    title: '제11조 (분쟁 해결)',
    content: null,
    list: [
      '본 약관과 관련한 분쟁은 대한민국 법률에 따라 해결합니다.',
      '서비스 이용과 관련한 분쟁에 대해 회사와 이용자 간 원만한 합의를 우선으로 합니다.',
    ],
  },
  {
    title: '부칙',
    content: '본 약관은 2026년 4월 24일부터 시행합니다.',
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
            꿈틀매쓰 · 시행일: 2026년 4월 24일
          </p>
        </AnimatedSection>

        <div className="space-y-10 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {sections.map((section, index) => (
            <AnimatedSection
              key={section.title}
              animation="fadeUp"
              delay={
                Math.min(index * 100, 500) as 0 | 100 | 200 | 300 | 400 | 500
              }
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                {section.title}
              </h2>
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
      </div>
    </div>
  );
}
