import { Metadata } from 'next';
import { AnimatedSection } from '../../components/AnimatedSection';

export const metadata: Metadata = {
  title: '개인정보처리방침 - 꿈틀매쓰',
  description:
    '꿈틀매쓰 개인정보처리방침 - 수집하는 개인정보 항목, 이용 목적, 보유 기간 등을 안내합니다.',
  alternates: { canonical: '/ggumteul-math/privacy' },
  openGraph: {
    title: '개인정보처리방침 - 꿈틀매쓰 | Hyson Works',
    description:
      '꿈틀매쓰 개인정보처리방침 - 수집하는 개인정보 항목, 이용 목적, 보유 기간 등을 안내합니다.',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400">
            개인정보처리방침
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-500 mb-12">
            꿈틀매쓰 · 시행일: 2026년 4월 24일
          </p>
        </AnimatedSection>

        <div className="space-y-10 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          <AnimatedSection animation="fadeUp">
            <p>
              Hyson Works(이하 &quot;회사&quot;)는 꿈틀매쓰 서비스(이하
              &quot;서비스&quot;)를 제공함에 있어 이용자의 개인정보를 중요시하며,
              개인정보 보호법 및 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등
              관련 법령을 준수합니다.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={100}>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. 수집하는 개인정보 항목
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-3 pr-4 text-white font-semibold">
                      구분
                    </th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">
                      항목
                    </th>
                    <th className="text-left py-3 text-white font-semibold">
                      수집 방법
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 pr-4">필수</td>
                    <td className="py-3 pr-4">이메일 주소</td>
                    <td className="py-3">회원가입(이메일 가입)</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 pr-4">필수</td>
                    <td className="py-3 pr-4">비밀번호 (해시 저장)</td>
                    <td className="py-3">회원가입(이메일 가입)</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 pr-4">필수</td>
                    <td className="py-3 pr-4">닉네임(자녀 이름)</td>
                    <td className="py-3">온보딩 시 입력</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 pr-4">필수</td>
                    <td className="py-3 pr-4">학년 (1~3학년)</td>
                    <td className="py-3">온보딩 시 선택</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 pr-4">선택</td>
                    <td className="py-3 pr-4">Google 계정 식별자, Apple 계정 식별자</td>
                    <td className="py-3">소셜 로그인</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 pr-4">자동수집</td>
                    <td className="py-3 pr-4">
                      학습 기록(풀이 문제, 정·오답, 소요 시간)
                    </td>
                    <td className="py-3">서비스 이용 시 자동 생성</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">자동수집</td>
                    <td className="py-3 pr-4">
                      게임 진행 상태(코인, 별, 지렁이 단계, 보유 아이템)
                    </td>
                    <td className="py-3">서비스 이용 시 자동 생성</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={200}>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. 개인정보 수집 및 이용 목적
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>회원 식별 및 가입 의사 확인</li>
              <li>학습 진도 관리 및 맞춤형 학습 콘텐츠 제공</li>
              <li>게임 재화(코인·별) 및 인벤토리 상태 저장</li>
              <li>서비스 개선 및 신규 기능 개발</li>
              <li>부정 이용 방지 및 서비스 운영</li>
              <li>이용자 문의 및 불만 처리</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={300}>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. 개인정보 보유 및 이용 기간
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-gray-300">원칙</strong> — 회원 탈퇴
                요청 시 개인정보 및 학습 기록은 즉시 파기됩니다.
              </li>
              <li>
                <strong className="text-gray-300">예외</strong> — 관련 법령에
                따라 보존이 필요한 경우 해당 기간 동안 보관합니다.
              </li>
            </ul>
            <div className="mt-4 bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-base">
              <p>· 서비스 이용 관련 분쟁 기록: 3년 (전자상거래법)</p>
              <p>· 부정 이용 기록: 1년</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={400}>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. 만 14세 미만 아동의 개인정보 처리
            </h2>
            <p className="mb-3">
              꿈틀매쓰는 초등 1~3학년을 주 대상으로 하므로, 만 14세 미만 아동의
              개인정보를 처리할 수 있습니다. 회사는 다음과 같이 아동의
              개인정보를 안전하게 처리합니다.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                만 14세 미만 아동이 회원가입을 하는 경우, 법정대리인(보호자)의
                동의를 받습니다.
              </li>
              <li>
                보호자는 언제든지 아동의 개인정보 열람·정정·삭제·처리정지를
                요구할 수 있습니다.
              </li>
              <li>
                보호자 동의 확인을 위해 보호자의 이메일 주소를 추가로 수집할 수
                있습니다.
              </li>
              <li>
                아동의 학습에 직접적으로 필요한 최소한의 정보만 수집하며,
                마케팅 목적으로는 사용하지 않습니다.
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={500}>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. 개인정보 처리 위탁
            </h2>
            <p className="mb-3">
              회사는 원활한 서비스 제공을 위해 다음과 같이 개인정보 처리 업무를
              위탁하고 있습니다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-3 pr-4 text-white font-semibold">
                      수탁업체
                    </th>
                    <th className="text-left py-3 text-white font-semibold">
                      위탁 업무
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 pr-4">Neon, Inc.</td>
                    <td className="py-3">데이터베이스 호스팅</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 pr-4">Railway Corp.</td>
                    <td className="py-3">애플리케이션 서버 호스팅</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 pr-4">Google LLC</td>
                    <td className="py-3">소셜 로그인 (Google Sign-In)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Apple Inc.</td>
                    <td className="py-3">소셜 로그인 (Sign in with Apple)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp">
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. 개인정보의 제3자 제공
            </h2>
            <p>
              회사는 이용자의 개인정보를 원칙적으로 제3자에게 제공하지 않습니다.
              다만, 다음의 경우에는 예외로 합니다.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>이용자(또는 법정대리인)가 사전에 동의한 경우</li>
              <li>법령에 의하여 요구되는 경우</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp">
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. 개인정보의 파기
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>회원 탈퇴 요청 시 개인정보는 즉시 파기됩니다.</li>
              <li>
                전자적 파일 형태의 정보는 복구 불가능한 방법으로 삭제합니다.
              </li>
              <li>
                학습 기록 및 게임 진행 상태도 회원 정보와 함께 즉시 삭제되며,
                통계 목적의 익명 가공 데이터는 별도로 보관되지 않습니다.
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp">
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. 이용자(법정대리인)의 권리
            </h2>
            <p className="mb-3">
              이용자 및 법정대리인은 언제든지 다음의 권리를 행사할 수 있습니다.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>개인정보 열람: 앱 내 프로필 화면</li>
              <li>닉네임·학년 등 정정: 앱 내 프로필 화면</li>
              <li>
                회원 탈퇴(개인정보 삭제): 앱 내 [프로필 → 설정 → 회원 탈퇴]
              </li>
              <li>
                기타 문의:{' '}
                <a
                  href="mailto:contact@hyson.kr"
                  className="text-blue-400 hover:underline"
                >
                  contact@hyson.kr
                </a>
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp">
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. 소셜 로그인 관련 고지
            </h2>
            <p>
              꿈틀매쓰는 Google OAuth 2.0 및 Sign in with Apple을 통한 로그인을
              제공합니다. 소셜 로그인 시 회사는 이메일 주소와 식별자만 수집하며,
              해당 계정의 비밀번호나 기타 민감한 정보에는 접근하지 않습니다.
            </p>
            <p className="mt-3">
              Google의 개인정보처리방침은{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                여기
              </a>
              , Apple의 개인정보처리방침은{' '}
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                여기
              </a>
              에서 확인할 수 있습니다.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp">
            <h2 className="text-2xl font-semibold text-white mb-4">
              10. 개인정보 보호 책임자
            </h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <p>
                이메일:{' '}
                <a
                  href="mailto:contact@hyson.kr"
                  className="text-blue-400 hover:underline"
                >
                  contact@hyson.kr
                </a>
              </p>
              <p className="mt-2">
                개인정보 관련 문의, 불만 처리, 피해 구제 등에 관한 사항은 위
                연락처로 문의해 주세요.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
