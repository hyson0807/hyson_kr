import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '45 920',
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Hyson Works - 하이슨 워크 | 꾸준히, 더 나은 앱을 만듭니다',
    template: '%s | Hyson Works',
  },
  description:
    'Hyson Works는 iOS · Android · Web · Mac 앱을 기획부터 출시, 운영까지 함께 만드는 프로덕트 스튜디오입니다. 꾸준히, 더 나은 앱을 만듭니다.',
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
    '앱 개발 스튜디오',
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
    title: 'Hyson Works - 하이슨 워크 | 꾸준히, 더 나은 앱을 만듭니다',
    description:
      'Hyson Works는 iOS · Android · Web · Mac 앱을 기획부터 출시, 운영까지 함께 만드는 프로덕트 스튜디오입니다. 꾸준히, 더 나은 앱을 만듭니다.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hyson Works - 하이슨 워크 | 꾸준히, 더 나은 앱을 만듭니다',
    description:
      'Hyson Works는 iOS · Android · Web · Mac 앱을 기획부터 출시, 운영까지 함께 만드는 프로덕트 스튜디오입니다. 꾸준히, 더 나은 앱을 만듭니다.',
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
  return (
    <html lang="ko" className="dark">
      <body className={`${pretendard.variable} ${geistMono.variable} antialiased`}>
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
                'Hyson Works는 iOS · Android · Web · Mac 앱을 기획부터 출시, 운영까지 함께 만드는 프로덕트 스튜디오입니다. 꾸준히, 더 나은 앱을 만듭니다.',
              email: 'contact@hyson.kr',
              sameAs: ['https://github.com/hyson0807'],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
