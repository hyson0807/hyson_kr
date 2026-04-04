import { Metadata } from 'next';
import { AnimatedSection } from '../../components/AnimatedSection';

export const metadata: Metadata = {
  title: '계정 삭제 안내 - 피부곰',
  description: '피부곰 계정 및 데이터 삭제 방법을 안내합니다.',
  alternates: { canonical: '/pibugom/delete-account' },
  openGraph: {
    title: '계정 삭제 안내 - 피부곰 | Hyson Works',
    description: '피부곰 계정 및 데이터 삭제 방법을 안내합니다.',
  },
};

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400">
            계정 삭제 안내
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-500 mb-12">
            피부곰 계정 및 데이터 삭제 방법
          </p>
        </AnimatedSection>

        <div className="space-y-10 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-2xl font-semibold text-white mb-4">계정 삭제 방법</h2>
            <p className="mb-4">
              피부곰 앱 내에서 직접 계정을 삭제할 수 있습니다.
            </p>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <p className="font-semibold text-white mb-3">앱에서 삭제하기</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>피부곰 앱을 실행합니다.</li>
                <li><strong className="text-gray-300">설정</strong> 메뉴로 이동합니다.</li>
                <li>하단의 <strong className="text-gray-300">회원탈퇴</strong>를 탭합니다.</li>
                <li>안내 내용을 확인한 후 <strong className="text-gray-300">탈퇴하기</strong>를 탭하면 즉시 처리됩니다.</li>
              </ol>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={100}>
            <h2 className="text-2xl font-semibold text-white mb-4">앱에 로그인할 수 없는 경우</h2>
            <p>
              앱에 접근할 수 없는 경우,{' '}
              <a href="mailto:contact@hyson.kr" className="text-blue-400 hover:underline">
                contact@hyson.kr
              </a>
              로 가입 시 사용한 이메일 주소와 함께 계정 삭제를 요청해 주세요.
              확인 후 영업일 기준 3일 이내에 처리됩니다.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={200}>
            <h2 className="text-2xl font-semibold text-white mb-4">삭제되는 데이터</h2>
            <p className="mb-4">계정 삭제 시 다음 개인정보가 즉시 파기됩니다.</p>
            <ul className="list-disc list-inside space-y-2">
              <li>이메일 주소</li>
              <li>닉네임 및 프로필 이미지</li>
              <li>성별, 생년월 등 온보딩 정보</li>
              <li>사용 중인 스킨케어 제품 정보</li>
              <li>로그인 인증 정보 (Google/Apple 연동 해제)</li>
              <li>북마크 목록</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={300}>
            <h2 className="text-2xl font-semibold text-white mb-4">보존되는 데이터</h2>
            <p className="mb-4">
              커뮤니티 운영을 위해 다음 콘텐츠는 익명으로 보존됩니다.
              작성자 정보는 완전히 제거되어 누가 작성했는지 식별할 수 없습니다.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>작성한 게시물 및 답변 (익명 처리)</li>
              <li>채팅 메시지 (발신자 정보 삭제, 내용만 익명 보관)</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={400}>
            <h2 className="text-2xl font-semibold text-white mb-4">문의</h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <p>
                계정 삭제와 관련하여 궁금한 사항이 있으시면{' '}
                <a href="mailto:contact@hyson.kr" className="text-blue-400 hover:underline">
                  contact@hyson.kr
                </a>
                로 문의해 주세요.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
