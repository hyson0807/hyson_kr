import { Metadata } from 'next';
import { AnimatedSection } from '../../components/AnimatedSection';

export const metadata: Metadata = {
  title: '계정 삭제 안내 - 꿈틀매쓰',
  description: '꿈틀매쓰 계정 및 데이터 삭제 방법을 안내합니다.',
  alternates: { canonical: '/ggumteul-math/delete-account' },
  openGraph: {
    title: '계정 삭제 안내 - 꿈틀매쓰 | Hyson Works',
    description: '꿈틀매쓰 계정 및 데이터 삭제 방법을 안내합니다.',
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
            꿈틀매쓰 계정 및 데이터 삭제 방법
          </p>
        </AnimatedSection>

        <div className="space-y-10 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-2xl font-semibold text-white mb-4">
              계정 삭제 방법
            </h2>
            <p className="mb-4">
              꿈틀매쓰 앱 내에서 직접 계정을 삭제할 수 있습니다.
            </p>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <p className="font-semibold text-white mb-3">앱에서 삭제하기</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>꿈틀매쓰 앱을 실행하고 로그인합니다.</li>
                <li>
                  하단의{' '}
                  <strong className="text-gray-300">프로필 탭</strong>을
                  탭합니다.
                </li>
                <li>
                  우측 상단의{' '}
                  <strong className="text-gray-300">톱니바퀴(설정)</strong>{' '}
                  아이콘을 탭합니다.
                </li>
                <li>
                  계정 섹션에서{' '}
                  <strong className="text-gray-300">회원 탈퇴</strong>를
                  탭합니다.
                </li>
                <li>
                  안내 내용을 확인한 후{' '}
                  <strong className="text-gray-300">탈퇴하기</strong>를 탭하면
                  즉시 처리됩니다.
                </li>
              </ol>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={100}>
            <h2 className="text-2xl font-semibold text-white mb-4">
              앱에 로그인할 수 없는 경우
            </h2>
            <p>
              앱에 접근할 수 없는 경우,{' '}
              <a
                href="mailto:contact@hyson.kr"
                className="text-blue-400 hover:underline"
              >
                contact@hyson.kr
              </a>
              로 가입 시 사용한 이메일 주소와 함께 계정 삭제를 요청해 주세요.
              본인 확인 후 영업일 기준 3일 이내에 처리됩니다.
            </p>
            <p className="mt-3">
              만 14세 미만 아동의 경우 법정대리인(보호자)이 직접 위 이메일로
              자녀의 계정 삭제를 요청할 수 있습니다.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={200}>
            <h2 className="text-2xl font-semibold text-white mb-4">
              삭제되는 데이터
            </h2>
            <p className="mb-4">계정 삭제 시 다음 정보가 즉시 파기됩니다.</p>
            <ul className="list-disc list-inside space-y-2">
              <li>이메일 주소 및 비밀번호</li>
              <li>닉네임(자녀 이름) 및 학년 정보</li>
              <li>학습 기록 (풀이 문제, 정·오답, 소요 시간)</li>
              <li>
                게임 진행 상태 (코인, 별, 지렁이 단계, 보유 아이템 등 인벤토리)
              </li>
              <li>로그인 인증 정보 (Google·Apple 소셜 로그인 연동 해제)</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={300}>
            <h2 className="text-2xl font-semibold text-white mb-4">
              보존되는 데이터
            </h2>
            <p className="mb-4">
              꿈틀매쓰는 회원 탈퇴 시 모든 개인 학습자 식별 데이터를 즉시
              파기합니다. 별도로 보존하는 개인정보는 없습니다.
            </p>
            <p>
              다만, 관련 법령(전자상거래법 등)에 따라 보관이 의무화된 항목이
              있는 경우 해당 기간 동안 분리 보관 후 파기됩니다 (자세한 내용은
              개인정보처리방침의 보유 기간 항목을 참고하세요).
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={400}>
            <h2 className="text-2xl font-semibold text-white mb-4">문의</h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <p>
                계정 삭제와 관련하여 궁금한 사항이 있으시면{' '}
                <a
                  href="mailto:contact@hyson.kr"
                  className="text-blue-400 hover:underline"
                >
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
