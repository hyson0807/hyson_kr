import Image from 'next/image';
import Link from 'next/link';

export default function HydoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Hide main site sidebar/header, reset main padding (pibugom과 같은 방식) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .min-h-screen > aside,
            .min-h-screen > nav,
            .min-h-screen > header,
            .min-h-screen > div[class*="lg:block"] { display: none !important; }
            .min-h-screen > main { margin-left: 0 !important; padding-top: 0 !important; }
            .site-bg-grid { display: none !important; }
          `,
        }}
      />

      {/* hydo 헤더 — 앱과 같은 근검정 + 유리 표면 */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 h-14"
        style={{
          backgroundColor: 'rgba(8, 8, 11, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <Link href="/hydo" className="flex items-center gap-2.5">
          <Image
            src="/images/apps/hydo.png"
            alt="hydo"
            width={28}
            height={28}
            className="rounded-lg"
          />
          {/* 앱 이름은 항상 소문자다 */}
          <span
            className="text-lg font-semibold tracking-tight"
            style={{ color: '#F0F0F0' }}
          >
            hydo
          </span>
        </Link>

        <span
          className="px-3 py-1 rounded-full text-[11px] font-medium"
          style={{
            color: '#7C9CFF',
            backgroundColor: 'rgba(124, 156, 255, 0.12)',
            border: '1px solid rgba(124, 156, 255, 0.22)',
          }}
        >
          출시 준비 중
        </span>
      </header>

      <div className="pt-14">{children}</div>
    </>
  );
}
