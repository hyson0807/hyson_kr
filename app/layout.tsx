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
    default: 'Hyson Works - 하이슨 워크 | 크로스플랫폼 앱 개발',
    template: '%s | Hyson Works',
  },
  description:
    '하이슨 워크는 React Native 기반 크로스플랫폼 앱을 개발합니다. 꾸준히, 더 나은 앱을 만듭니다. iOS, Android 앱 개발 전문.',
  keywords: [
    '하이슨 워크',
    '하이슨',
    '하이슨 워크스',
    'hyson',
    'hyson works',
    'Hyson Works',
    '앱 개발',
    'React Native',
    '크로스플랫폼',
    'iOS 앱 개발',
    'Android 앱 개발',
    '모바일 앱 개발',
  ],
  authors: [{ name: 'Hyson Works', url: 'https://hyson.kr' }],
  creator: 'Hyson Works',
  publisher: 'Hyson Works',
  metadataBase: new URL('https://hyson.kr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://hyson.kr',
    siteName: 'Hyson Works - 하이슨 워크',
    title: 'Hyson Works - 하이슨 워크 | 크로스플랫폼 앱 개발',
    description:
      '하이슨 워크는 React Native 기반 크로스플랫폼 앱을 개발합니다. 꾸준히, 더 나은 앱을 만듭니다.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hyson Works - 하이슨 워크',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hyson Works - 하이슨 워크 | 크로스플랫폼 앱 개발',
    description:
      '하이슨 워크는 React Native 기반 크로스플랫폼 앱을 개발합니다. 꾸준히, 더 나은 앱을 만듭니다.',
    images: ['/og-image.png'],
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
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
