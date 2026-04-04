import { Metadata } from 'next';
import { AnimatedSection } from '../../components/AnimatedSection';

export const metadata: Metadata = {
  title: '개인정보처리방침 - 피부곰',
  description: '피부곰 개인정보처리방침 - 수집하는 개인정보 항목, 이용 목적, 보유 기간 등을 안내합니다.',
  alternates: { canonical: '/pibugom/privacy' },
  openGraph: {
    title: '개인정보처리방침 - 피부곰 | Hyson Works',
    description: '피부곰 개인정보처리방침 - 수집하는 개인정보 항목, 이용 목적, 보유 기간 등을 안내합니다.',
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
            피부곰 · 시행일: 2026년 4월 3일
          </p>
        </AnimatedSection>

        <div className="space-y-10 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          <AnimatedSection animation="fadeUp">
            <p>
              Hyson Works(이하 &quot;회사&quot;)는 피부곰 서비스(이하 &quot;서비스&quot;)를 제공함에 있어
              이용자의 개인정보를 중요시하며, 개인정보 보호법 등 관련 법령을 준수합니다.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={100}>
            <h2 className="text-2xl font-semibold text-white mb-4">1. 수집하는 개인정보 항목</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-3 pr-4 text-white font-semibold">구분</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">항목</th>
                    <th className="text-left py-3 text-white font-semibold">수집 방법</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 pr-4">필수</td>
                    <td className="py-3 pr-4">이메일 주소</td>
                    <td className="py-3">Google 로그인</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 pr-4">선택</td>
                    <td className="py-3 pr-4">닉네임, 프로필 이미지</td>
                    <td className="py-3">이용자 직접 입력</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 pr-4">선택</td>
                    <td className="py-3 pr-4">생년월, 성별</td>
                    <td className="py-3">온보딩 시 입력</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 pr-4">선택</td>
                    <td className="py-3 pr-4">피부 고민 카테고리</td>
                    <td className="py-3">온보딩 시 선택</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 pr-4">서비스 이용</td>
                    <td className="py-3 pr-4">채팅 메시지 내용, 채팅방 참여·퇴장 기록</td>
                    <td className="py-3">채팅 서비스 이용 시 자동 생성</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">서비스 이용</td>
                    <td className="py-3 pr-4">광고 노출·클릭 기록</td>
                    <td className="py-3">광고 배너 이용 시 자동 생성</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={200}>
            <h2 className="text-2xl font-semibold text-white mb-4">2. 개인정보 수집 및 이용 목적</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>회원 식별 및 가입 의사 확인</li>
              <li>서비스 제공 및 맞춤형 콘텐츠 추천</li>
              <li>서비스 개선 및 신규 기능 개발</li>
              <li>채팅 서비스 제공 및 부적절한 콘텐츠 방지</li>
              <li>광고 제공 및 광고 성과 측정</li>
              <li>부정 이용 방지 및 서비스 운영</li>
              <li>이용자 문의 및 불만 처리</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={300}>
            <h2 className="text-2xl font-semibold text-white mb-4">3. 개인정보 보유 및 이용 기간</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-gray-300">원칙</strong> — 회원 탈퇴 시 즉시 파기합니다.
              </li>
              <li>
                <strong className="text-gray-300">예외</strong> — 관련 법령에 따라 보존이 필요한 경우
                해당 기간 동안 보관합니다.
              </li>
            </ul>
            <div className="mt-4 bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-base">
              <p>· 전자상거래법에 따른 표시·광고에 관한 기록: 6개월</p>
              <p>· 서비스 이용 관련 분쟁 기록: 3년</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={400}>
            <h2 className="text-2xl font-semibold text-white mb-4">4. 개인정보의 제3자 제공</h2>
            <p>
              회사는 이용자의 개인정보를 원칙적으로 제3자에게 제공하지 않습니다.
              다만, 다음의 경우에는 예외로 합니다.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>이용자가 사전에 동의한 경우</li>
              <li>법령에 의하여 요구되는 경우</li>
            </ul>
            <p className="mt-4">
              서비스 내 광고 배너를 통해 외부 광고주의 콘텐츠가 노출될 수 있으며,
              광고 클릭 시 해당 광고주의 페이지로 이동합니다. 이 경우 광고주의
              개인정보처리방침이 적용되며, 회사는 광고주에게 이용자의 개인정보를
              직접 제공하지 않습니다.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={500}>
            <h2 className="text-2xl font-semibold text-white mb-4">5. 개인정보의 파기</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>회원 탈퇴 요청 시 개인정보는 즉시 파기됩니다.</li>
              <li>전자적 파일 형태의 정보는 복구 불가능한 방법으로 삭제합니다.</li>
              <li>탈퇴 후 작성한 게시물은 익명으로 유지되며, 개인정보와의 연결은 해제됩니다.</li>
              <li>채팅 메시지는 회원 탈퇴 시 발신자 정보가 삭제되며, 채팅방 운영을 위해 메시지 내용은 익명으로 보관될 수 있습니다.</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp">
            <h2 className="text-2xl font-semibold text-white mb-4">6. 이용자의 권리</h2>
            <p className="mb-3">이용자는 언제든지 다음의 권리를 행사할 수 있습니다.</p>
            <ul className="list-disc list-inside space-y-2">
              <li>개인정보 열람, 수정: 서비스 내 프로필 편집 기능 이용</li>
              <li>회원 탈퇴(개인정보 삭제): 서비스 내 설정 &gt; 회원탈퇴</li>
              <li>
                기타 문의:{' '}
                <a href="mailto:contact@hyson.kr" className="text-blue-400 hover:underline">
                  contact@hyson.kr
                </a>
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Google OAuth 관련 고지</h2>
            <p>
              피부곰은 Google OAuth 2.0을 통해 로그인을 제공합니다.
              Google 로그인 시 이메일 주소만 수집하며, Google 계정의 비밀번호나
              기타 민감한 정보에는 접근하지 않습니다.
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
              에서 확인할 수 있습니다.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp">
            <h2 className="text-2xl font-semibold text-white mb-4">8. 개인정보 보호 책임자</h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <p>이메일: <a href="mailto:contact@hyson.kr" className="text-blue-400 hover:underline">contact@hyson.kr</a></p>
              <p className="mt-2">
                개인정보 관련 문의, 불만 처리, 피해 구제 등에 관한 사항은 위 연락처로 문의해 주세요.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
