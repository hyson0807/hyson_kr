import { Metadata } from 'next';
import { AnimatedSection } from '../../components/AnimatedSection';

export const metadata: Metadata = {
  title: '커뮤니티 가이드라인 - 피부곰',
  description: '피부곰 커뮤니티 가이드라인 - 건강한 피부 고민 나눔을 위한 운영 정책입니다.',
  alternates: { canonical: '/pibugom/community-guidelines' },
  openGraph: {
    title: '커뮤니티 가이드라인 - 피부곰 | Hyson Works',
    description: '피부곰 커뮤니티 가이드라인 - 건강한 피부 고민 나눔을 위한 운영 정책입니다.',
  },
};

export default function CommunityGuidelinesPage() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400">
            커뮤니티 가이드라인
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-500 mb-12">
            피부곰 · 시행일: 2026년 3월 22일
          </p>
        </AnimatedSection>

        <div className="space-y-10 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-2xl font-semibold text-white mb-4">피부곰을 소개합니다</h2>
            <p>
              피부곰은 피부 고민을 가진 사람들이 서로의 경험과 노하우를 나누는 커뮤니티입니다.
              여드름, 홍조, 모공, 색소침착 등 다양한 피부 고민에 대해 질문하고 답변하며
              함께 해결책을 찾아가는 공간입니다.
            </p>
            <p className="mt-3">
              건강하고 따뜻한 커뮤니티를 유지하기 위해 아래 가이드라인을 지켜주세요.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={100}>
            <h2 className="text-2xl font-semibold text-white mb-4">존중과 배려</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>다른 사용자를 존중하고 배려하는 언어를 사용해 주세요.</li>
              <li>비방, 욕설, 혐오 표현, 차별적 발언은 금지됩니다.</li>
              <li>피부 고민은 민감한 주제입니다. 상대방의 감정을 배려해 주세요.</li>
              <li>건설적인 조언과 응원으로 서로 도움을 주고받는 문화를 만들어 주세요.</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={200}>
            <h2 className="text-2xl font-semibold text-white mb-4">금지 행위</h2>
            <p className="mb-3">다음 행위는 피부곰에서 금지됩니다.</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-gray-300">광고 및 스팸</strong> — 상업적 광고, 홍보, 제품 판매 목적의
                게시물 작성
              </li>
              <li>
                <strong className="text-gray-300">허위 정보</strong> — 검증되지 않은 정보를 사실처럼 전달하거나,
                과장된 효과를 주장하는 행위
              </li>
              <li>
                <strong className="text-gray-300">개인정보 노출</strong> — 본인 또는 타인의 개인정보(실명, 연락처,
                주소 등)를 게시하는 행위
              </li>
              <li>
                <strong className="text-gray-300">의료행위 사칭</strong> — 의료 전문가가 아닌 사람이 진단이나
                처방을 하는 행위
              </li>
              <li>
                <strong className="text-gray-300">부적절한 콘텐츠</strong> — 음란물, 폭력적 콘텐츠, 불법 행위를
                조장하는 게시물
              </li>
              <li>
                <strong className="text-gray-300">도용 및 사칭</strong> — 타인의 콘텐츠를 무단으로 사용하거나,
                다른 사용자를 사칭하는 행위
              </li>
              <li>
                <strong className="text-gray-300">아동 성적 학대 및 착취(CSAE)</strong> — 아동을 성적으로 착취하거나
                학대하는 콘텐츠, 아동의 신체를 성적으로 묘사하는 콘텐츠, 아동과의 부적절한 접촉을
                조장하는 행위는 엄격히 금지됩니다. 해당 콘텐츠 발견 시 즉시 삭제 및 계정 영구 정지
                조치를 취하며, 관련 법률에 따라 수사기관에 신고합니다.
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={300}>
            <h2 className="text-2xl font-semibold text-white mb-4">의료 면책 조항</h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <p>
                피부곰에서 제공되는 모든 정보는 사용자 간의 경험 공유이며,{' '}
                <strong className="text-white">전문적인 의료 상담을 대체하지 않습니다.</strong>
              </p>
              <p className="mt-3">
                피부 질환이 의심되거나 증상이 지속되는 경우 반드시 피부과 전문의와 상담하시기 바랍니다.
                피부곰은 사용자가 게시한 정보의 의학적 정확성을 보증하지 않으며,
                해당 정보를 활용한 결과에 대해 책임을 지지 않습니다.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={400}>
            <h2 className="text-2xl font-semibold text-white mb-4">제재 기준</h2>
            <p className="mb-3">
              가이드라인 위반 시 아래 단계에 따라 조치가 이루어집니다.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="px-3 py-1 bg-yellow-900/30 text-yellow-400 text-sm font-medium rounded-full shrink-0">
                  1단계
                </span>
                <p>경고 — 위반 사항을 안내하고 시정을 요청합니다.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="px-3 py-1 bg-orange-900/30 text-orange-400 text-sm font-medium rounded-full shrink-0">
                  2단계
                </span>
                <p>게시물 삭제 — 가이드라인을 위반한 게시물이 삭제됩니다.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="px-3 py-1 bg-red-900/30 text-red-400 text-sm font-medium rounded-full shrink-0">
                  3단계
                </span>
                <p>이용 제한 — 반복적인 위반 시 서비스 이용이 일시적 또는 영구적으로 제한됩니다.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={500}>
            <h2 className="text-2xl font-semibold text-white mb-4">신고 방법</h2>
            <p>
              가이드라인을 위반하는 게시물이나 사용자를 발견하면 해당 게시물의 신고 기능을 이용하거나,{' '}
              <a href="mailto:contact@hyson.kr" className="text-blue-400 hover:underline">
                contact@hyson.kr
              </a>
              로 신고해 주세요. 접수된 신고는 검토 후 적절한 조치를 취합니다.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
