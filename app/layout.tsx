'use client';

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
