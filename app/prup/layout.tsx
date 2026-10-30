import Link from 'next/link';
import { PRUP_ACCENT } from './constants';

export default function PrupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* PRUP 헤더 — 앱처럼 블랙 + 2px 선, 둥근 모서리 없음 */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 h-14"
        style={{ backgroundColor: '#0A0A0A', borderBottom: '2px solid #222222' }}
      >
        <Link href="/prup" className="flex items-center gap-2.5">
          <span
            className="flex items-center justify-center size-7 text-[11px] font-black"
            style={{ backgroundColor: PRUP_ACCENT, color: '#0A0A0A' }}
          >
            PR
          </span>
          <span className="text-lg font-black tracking-tight" style={{ color: '#F2F2F2' }}>
            PRUP
          </span>
        </Link>

        <Link
          href="/prup#download"
          className="px-3 py-1 text-[11px] font-semibold tracking-wider"
          style={{ color: PRUP_ACCENT, border: `2px solid ${PRUP_ACCENT}` }}
        >
          다운로드
        </Link>
      </header>

      <div className="pt-14">{children}</div>
    </>
  );
}
