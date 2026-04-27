import Image from 'next/image';

export default function GgumteulMathLayout({
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

      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 h-14"
        style={{
          backgroundColor: 'rgba(10, 10, 10, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid #2A2A2A',
        }}
      >
        <a href="/ggumteul-math" className="flex items-center gap-2.5">
          <Image
            src="/images/apps/ggumteul-math.png"
            alt="꿈틀매쓰"
            width={28}
            height={28}
            className="rounded-lg"
          />
          <span
            className="text-lg font-extrabold"
            style={{ color: '#C8956C' }}
          >
            꿈틀매쓰
          </span>
        </a>

        <a
          href="https://apps.apple.com/kr/app/%EA%BF%88%ED%8B%80%EB%A7%A4%EC%93%B0-%EC%B4%88%EB%93%B1-%EC%88%98%ED%95%99%ED%95%99%EC%8A%B5-%ED%94%8C%EB%9E%AB%ED%8F%BC/id6763516927"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1.5 rounded-full text-xs font-semibold transition-opacity hover:opacity-90"
          style={{
            background: 'linear-gradient(135deg, #C8956C, #A0522D)',
            color: '#FFFFFF',
          }}
        >
          App Store
        </a>
      </header>

      <div className="pt-14">{children}</div>
    </>
  );
}
