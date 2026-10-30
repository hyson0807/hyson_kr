'use client';

import { useState } from 'react';
import { AnimatedSection } from '../../components/AnimatedSection';

export default function ContactForm() {
  const [result, setResult] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult('전송 중...');

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setResult('폼 설정 오류: 관리자에게 문의하세요.');
      return;
    }

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', accessKey);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setIsSubmitted(true);
    } else {
      setResult('전송에 실패했습니다. 다시 시도해주세요.');
    }
  };

  if (isSubmitted) {
    return (
      <AnimatedSection animation="scale">
        <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
          <div className="p-4 bg-green-100 text-green-600 rounded-full mb-6">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-display mb-4">메시지 전송 완료</h2>
          <p className="text-neutral-500 mb-2">
            문의해 주셔서 감사합니다.
          </p>
          <p className="text-neutral-500">
            빠른 시일 내에 답변드리겠습니다.
          </p>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-display mb-6">메시지 보내기</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Web3Forms 설정 */}
        <input type="hidden" name="subject" value="[Hyson Works] 새로운 문의가 도착했습니다" />
        <input type="hidden" name="from_name" value="Hyson Works Contact Form" />

        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            이름 / 회사명 *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/40"
            placeholder="홍길동 / ABC 컴퍼니"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            답변 받을 이메일 *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/40"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="inquiry_type" className="block text-sm font-medium mb-2">
            문의 유형 *
          </label>
          <input
            type="text"
            id="inquiry_type"
            name="inquiry_type"
            required
            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/40"
            placeholder="앱 개발 문의 / 협업 제안 / 기타"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            메시지 *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/40 resize-none"
            placeholder="문의 내용을 자세히 적어주세요..."
          />
        </div>

        <button
          type="submit"
          className="w-full px-8 py-4 bg-brand text-white rounded-xl font-semibold hover:bg-brand-hover transition-colors disabled:opacity-60"
        >
          메시지 보내기
        </button>

        {result && (
          <p className="text-center font-medium text-neutral-500">
            {result}
          </p>
        )}
      </form>
    </>
  );
}
