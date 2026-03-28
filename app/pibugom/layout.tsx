import Image from 'next/image';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const APP_STORE_URL =
  'https://apps.apple.com/kr/app/%ED%94%BC%EB%B6%80%EA%B3%B0-%ED%94%BC%EB%B6%80-%EA%B3%A0%EB%AF%BC-%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0/id6760972457';

export default function PibugomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Hide main site sidebar/header, reset main padding */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .min-h-screen > aside,
            .min-h-screen > nav,
            .min-h-screen > header,
            .min-h-screen > div[class*="lg:block"] { display: none !important; }
            .min-h-screen > main { margin-left: 0 !important; padding-top: 0 !important; }
          `,
        }}
      />

      {/* Custom pibugom header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 h-14"
        style={{
          backgroundColor: 'rgba(10, 10, 10, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid #2A2A2A',
        }}
      >
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/apps/pibugom.png"
            alt="피부곰"
            width={28}
            height={28}
            className="rounded-lg"
          />
          <span
            className={`text-lg ${pacifico.className}`}
            style={{ color: '#E87461' }}
          >
            Pibugom
          </span>
        </div>

        {/* Right: Download button */}
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1.5 rounded-full text-white text-xs font-semibold transition-opacity hover:opacity-90"
          style={{
            background: 'linear-gradient(135deg, #FF9A8B, #FF6B6B)',
          }}
        >
          다운로드
        </a>
      </header>

      {/* Content with top padding for fixed header */}
      <div className="pt-14">{children}</div>
    </>
  );
}
