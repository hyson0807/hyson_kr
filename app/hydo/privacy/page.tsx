import { Metadata } from 'next';
import { AnimatedSection } from '../../components/AnimatedSection';

export const metadata: Metadata = {
  title: '개인정보처리방침 - hydo',
  description:
    'hydo 개인정보처리방침 - 수집하는 개인정보 항목, 이용 목적, 보유 기간, 국외 이전을 안내합니다.',
  alternates: { canonical: '/hydo/privacy' },
  openGraph: {
    title: '개인정보처리방침 - hydo | Hyson Works',
    description:
      'hydo 개인정보처리방침 - 수집하는 개인정보 항목, 이용 목적, 보유 기간, 국외 이전을 안내합니다.',
  },
};

const sections = [
  {
    title: '1. 수집하는 개인정보 항목',
    content:
      '회사는 서비스 제공에 필요한 최소한의 정보만 수집합니다. 이름, 주소, 전화번호, 생년월일, 결제 정보는 수집하지 않습니다.',
    list: [
      '계정 정보: Apple이 발급하는 사용자 식별자, 표시 이름',
      '이메일 주소: Apple 로그인 시 이용자가 공유를 선택한 경우에만 저장합니다. 가리기를 선택하면 Apple이 전달하는 익명 중계 주소가 저장됩니다.',
      '기기 식별자: 로그인 세션을 기기별로 구분하기 위해 앱이 생성한 임의의 값입니다. 광고 식별자(IDFA)가 아니며 다른 앱과 공유되지 않습니다.',
      '서비스 이용 정보: 일정의 제목·시각·시간대, 그룹의 이름·색상·초대 코드·멤버 목록',
    ],
  },
  {
    title: '2. 수집하지 않는 정보',
    content: '아래 정보는 수집하지 않으며, 관련 권한도 요구하지 않습니다.',
    list: [
      '위치 정보',
      '연락처, 통화 기록, 문자 메시지',
      '사진 라이브러리 열람 권한 — 배경화면에 쓸 사진은 iOS 시스템 사진 선택기로 고르며, 앱은 이용자가 선택한 한 장만 전달받습니다.',
      '광고 식별자 및 제3자 광고·분석 도구',
      '기기의 다른 캘린더 앱(iOS 기본 캘린더 등)의 일정',
    ],
  },
  {
    title: '3. 개인정보의 이용 목적',
    content: null,
    list: [
      '회원 식별 및 로그인 상태 유지',
      '일정과 그룹 데이터의 저장 및 기기 간 동기화',
      '그룹 멤버에게 일정 작성자를 표시하기 위한 이름 제공',
      '문의 대응 및 서비스 개선',
    ],
  },
  {
    title: '4. 그룹 내에서 공개되는 정보',
    content:
      '서비스는 캘린더 공유를 목적으로 하므로, 그룹에 참여하면 아래 정보가 같은 그룹의 다른 멤버에게 보입니다.',
    list: [
      '이용자가 정한 표시 이름',
      '이용자가 그 그룹에 등록한 일정의 제목과 시각',
      '그룹 참여 시각',
    ],
  },
  {
    title: '5. 사진과 배경화면 이미지의 처리',
    content: null,
    list: [
      '배경화면 배경으로 고른 사진은 기기 안에만 저장되며 서버로 전송되지 않습니다.',
      '생성된 달력 이미지는 이용자가 저장을 요청할 때 기기의 사진 앨범에 추가됩니다. 이때 필요한 권한은 "추가"뿐이며, 앨범을 읽는 권한은 요구하지 않습니다.',
      '회사는 이용자의 사진 앨범 내용을 조회하거나 수집하지 않습니다.',
    ],
  },
  {
    title: '6. 개인정보의 보유 및 파기',
    content: null,
    list: [
      '개인정보는 회원 탈퇴 시까지 보유하며, 탈퇴와 동시에 계정 정보와 본인이 작성한 일정을 삭제합니다.',
      '탈퇴는 앱의 설정 › 계정 삭제에서 즉시 진행할 수 있으며, 별도의 요청 절차가 필요하지 않습니다.',
      '이용자가 삭제한 일정은 동기화 처리를 위해 삭제 표시 상태로 잠시 남았다가 제거됩니다.',
      '법령에 따라 보존이 필요한 정보가 있는 경우 해당 기간 동안 분리 보관합니다.',
    ],
  },
  {
    title: '7. 개인정보의 제3자 제공 및 처리위탁',
    content:
      '회사는 이용자의 개인정보를 제3자에게 판매하거나 광고 목적으로 제공하지 않습니다. 서비스 운영을 위해 아래에 처리를 위탁합니다.',
    list: [
      'Apple Inc. — 로그인 인증 (Sign in with Apple)',
      'Amazon Web Services — 애플리케이션 서버 운영',
      'Neon Inc. — 데이터베이스 호스팅',
    ],
  },
  {
    title: '8. 개인정보의 국외 이전',
    content:
      '서비스의 데이터베이스는 싱가포르 리전에 위치합니다. 이에 따라 아래 정보가 국외로 이전됩니다.',
    list: [
      '이전되는 항목: 제1조에 기재된 계정 정보 및 서비스 이용 정보',
      '이전 국가: 싱가포르',
      '이전 목적: 데이터 저장 및 기기 간 동기화',
      '보유 기간: 회원 탈퇴 시까지',
      '이전을 원하지 않는 경우 서비스를 이용할 수 없습니다. 데이터 저장이 서비스의 핵심 기능이기 때문입니다.',
    ],
  },
  {
    title: '9. 이용자의 권리',
    content: null,
    list: [
      '이용자는 언제든지 앱 내에서 표시 이름을 변경할 수 있습니다.',
      '이용자는 언제든지 자신이 등록한 일정과 그룹을 조회, 수정, 삭제할 수 있습니다.',
      '이용자는 앱의 설정 › 계정 삭제로 언제든지 이용 계약을 해지하고 개인정보 삭제를 요청할 수 있습니다.',
      '그 밖의 열람·정정·처리정지 요구는 아래 연락처로 요청할 수 있으며, 회사는 지체 없이 조치합니다.',
    ],
  },
  {
    title: '10. 개인정보의 안전성 확보 조치',
    content: null,
    list: [
      '서버와의 모든 통신은 HTTPS로 암호화합니다.',
      '로그인 토큰은 기기의 Keychain에 저장하며, 다른 기기로 동기화되지 않도록 설정합니다.',
      '개인정보에 접근할 수 있는 인원을 최소한으로 제한합니다.',
    ],
  },
  {
    title: '11. 아동의 개인정보',
    content:
      '서비스는 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 개인정보를 의도적으로 수집하지 않습니다. 만 14세 미만 아동의 정보가 수집된 사실을 알게 된 경우 지체 없이 삭제합니다.',
  },
  {
    title: '12. 개인정보 보호책임자 및 문의',
    content:
      '개인정보 처리에 관한 문의, 불만 처리, 피해 구제는 아래로 연락해 주시기 바랍니다. 회사는 접수 후 영업일 기준 2~3일 안에 답변드립니다.',
    list: ['상호: Hyson Works', '이메일: contact@hyson.kr'],
  },
  {
    title: '13. 방침의 변경',
    content:
      '본 방침의 내용이 추가, 삭제, 수정될 경우 시행 7일 전부터 서비스 내 공지 또는 본 페이지를 통해 알립니다. 다만 이용자 권리에 중대한 변경이 발생하는 경우 최소 30일 전에 알립니다.',
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400">
            개인정보처리방침
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-500 mb-12">
            hydo · 시행일: 2026년 7월 26일
          </p>
        </AnimatedSection>

        <div className="space-y-10 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          <AnimatedSection animation="fadeIn">
            <p>
              Hyson Works(이하 &quot;회사&quot;)는 hydo 서비스(이하 &quot;서비스&quot;)를 제공함에 있어
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
