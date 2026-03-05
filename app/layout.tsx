import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Sidebar from './components/Sidebar';
import MobileHeader from './components/MobileHeader';
import { themes } from './components/types';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Hyson Works - 하이슨 워크 | 앱 · 웹 · 소프트웨어 개발',
    template: '%s | Hyson Works',
  },
  description:
    '하이슨 워크는 앱, 웹, 데스크톱 소프트웨어를 개발하는 1인 스튜디오입니다. iOS, Android, 웹을 아우르는 제품을 꾸준히, 더 나은 방향으로 만듭니다.',
  keywords: [
    '하이슨 워크',
    '하이슨',
    '하이슨 워크스',
    'hyson',
    'hyson works',
    'Hyson Works',
    '앱 개발',
    '웹 개발',
    '소프트웨어 개발',
    'React Native',
    'Next.js',
    '크로스플랫폼',
    'iOS',
    'Android',
    '1인 개발 스튜디오',
  ],
  authors: [{ name: 'Hyson Works', url: 'https://hyson.kr' }],
  creator: 'Hyson Works',
  publisher: 'Hyson Works',
  metadataBase: new URL('https://hyson.kr'),
  verification: {
    other: { 'naver-site-verification': '58279195c51aaf1e6c1bc1fa40d6c565280ae88e' },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://hyson.kr',
    siteName: 'Hyson Works - 하이슨 워크',
    title: 'Hyson Works - 하이슨 워크 | 앱 · 웹 · 소프트웨어 개발',
    description:
      '하이슨 워크는 앱, 웹, 데스크톱 소프트웨어를 개발하는 1인 스튜디오입니다. 꾸준히, 더 나은 제품을 만듭니다.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hyson Works - 하이슨 워크 | 앱 · 웹 · 소프트웨어 개발',
    description:
      '하이슨 워크는 앱, 웹, 데스크톱 소프트웨어를 개발하는 1인 스튜디오입니다. 꾸준히, 더 나은 제품을 만듭니다.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 모던 다크 테마로 고정
  const currentTheme = themes.dark;

  return (
    <html lang="ko" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Hyson Works',
              alternateName: '하이슨 워크',
              url: 'https://hyson.kr',
              description:
                '하이슨 워크는 앱, 웹, 데스크톱 소프트웨어를 개발하는 1인 스튜디오입니다. 꾸준히, 더 나은 제품을 만듭니다.',
              email: 'contact@hyson.kr',
              sameAs: ['https://github.com/hyson0807'],
            }),
          }}
        />
        <div className={`min-h-screen ${currentTheme.bg} ${currentTheme.text}`}>
          {/* 사이드바 (데스크톱) */}
          <Sidebar theme={currentTheme} />

          {/* 모바일 헤더 */}
          <MobileHeader theme={currentTheme} />

          {/* 메인 콘텐츠 */}
          <main className="lg:ml-20 pt-16 lg:pt-0">{children}</main>
        </div>
      </body>
    </html>
  );
}
