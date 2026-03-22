import { Metadata } from 'next';
import { AnimatedSection } from '../../components/AnimatedSection';

export const metadata: Metadata = {
  title: '서비스 이용약관 - 피부곰',
  description: '피부곰 서비스 이용약관입니다.',
  alternates: { canonical: '/pibugom/terms' },
  openGraph: {
    title: '서비스 이용약관 - 피부곰 | Hyson Works',
    description: '피부곰 서비스 이용약관입니다.',
  },
};

const sections = [
  {
    title: '제1조 (목적)',
    content:
      '본 약관은 Hyson Works(이하 "회사")가 제공하는 피부곰 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.',
  },
  {
    title: '제2조 (용어의 정의)',
    content: null,
    list: [
      '"서비스"란 회사가 제공하는 피부 관련 커뮤니티 Q&A 플랫폼을 말합니다.',
      '"이용자"란 본 약관에 따라 서비스를 이용하는 자를 말합니다.',
      '"회원"이란 서비스에 가입하여 계정을 생성한 이용자를 말합니다.',
      '"게시물"이란 회원이 서비스에 등록한 질문, 답변, 이미지 등 모든 콘텐츠를 말합니다.',
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
      '회원가입은 Google 계정을 통한 소셜 로그인으로 이루어집니다.',
      '회원은 가입 시 정확한 정보를 제공해야 하며, 허위 정보로 인한 불이익에 대해 회사는 책임지지 않습니다.',
      '회원은 하나의 계정만 생성할 수 있으며, 타인에게 계정을 양도하거나 공유할 수 없습니다.',
    ],
  },
  {
    title: '제5조 (서비스의 제공)',
    content: '회사는 다음의 서비스를 제공합니다.',
    list: [
      '피부 고민 관련 질문 작성 및 답변 서비스',
      '질문 및 답변 북마크 기능',
      '프로필 관리 기능',
      '기타 회사가 정하는 서비스',
    ],
  },
  {
    title: '제6조 (서비스의 변경 및 중단)',
    content: null,
    list: [
      '회사는 운영상 또는 기술상의 필요에 따라 서비스의 전부 또는 일부를 변경하거나 중단할 수 있습니다.',
      '서비스 변경 또는 중단 시 사전에 공지합니다. 다만, 불가피한 사유가 있는 경우 사후에 공지할 수 있습니다.',
    ],
  },
  {
    title: '제7조 (이용자의 의무)',
    content: '이용자는 다음 행위를 해서는 안 됩니다.',
    list: [
      '타인의 개인정보를 부정하게 수집하거나 이용하는 행위',
      '서비스를 이용하여 상업적 광고, 스팸을 게시하는 행위',
      '허위 정보를 유포하거나 의료행위를 사칭하는 행위',
      '다른 이용자에 대한 비방, 욕설, 차별적 발언',
      '서비스의 정상적인 운영을 방해하는 행위',
      '관련 법령 및 본 약관, 커뮤니티 가이드라인을 위반하는 행위',
    ],
  },
  {
    title: '제8조 (게시물의 관리)',
    content: null,
    list: [
      '회원이 작성한 게시물에 대한 권리와 책임은 해당 회원에게 있습니다.',
      '회사는 커뮤니티 가이드라인 또는 관련 법령에 위반되는 게시물을 사전 통지 없이 삭제하거나 비공개 처리할 수 있습니다.',
      '회원 탈퇴 시 작성한 게시물은 익명으로 유지됩니다.',
    ],
  },
  {
    title: '제9조 (회원 탈퇴 및 자격 상실)',
    content: null,
    list: [
      '회원은 언제든지 서비스 내 설정 메뉴를 통해 탈퇴를 요청할 수 있습니다.',
      '탈퇴 시 개인정보는 즉시 삭제되며, 작성한 게시물은 익명으로 유지됩니다.',
      '가이드라인을 반복적으로 위반한 회원의 이용 자격은 제한될 수 있습니다.',
    ],
  },
  {
    title: '제10조 (면책 조항)',
    content: null,
    list: [
      '회사는 이용자 간에 공유되는 정보의 정확성, 신뢰성을 보증하지 않습니다.',
      '서비스에서 제공되는 정보는 의료 상담을 대체하지 않으며, 이를 근거로 한 행위에 대해 회사는 책임을 지지 않습니다.',
      '천재지변, 시스템 장애 등 불가항력으로 인한 서비스 중단에 대해 회사는 책임을 지지 않습니다.',
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
            피부곰 · 시행일: 2026년 3월 22일
          </p>
        </AnimatedSection>

        <div className="space-y-10 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {sections.map((section, index) => (
            <AnimatedSection key={section.title} animation="fadeUp" delay={Math.min(index * 100, 500) as 0 | 100 | 200 | 300 | 400 | 500}>
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
      </div>
    </div>
  );
}
