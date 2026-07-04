'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeConfig } from './types';

interface HeaderProps {
  theme: ThemeConfig;
}

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Apps', path: '/projects' },
  { name: 'Programs', path: '/programs' },
  { name: 'Contact', path: '/contact' },
];

export default function Header({ theme }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-zinc-950/70 backdrop-blur-md border-b ${theme.border}`}
    >
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-center px-4 md:px-8 lg:px-12">
        {/* 데스크톱 네비게이션 (가운데 정렬) */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${theme.hover} ${
                  isActive ? theme.accent : theme.textSecondary
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* 모바일 햄버거 */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={mobileMenuOpen}
          className={`md:hidden absolute right-4 p-2 rounded-lg ${theme.hover}`}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {mobileMenuOpen && (
        <nav className={`md:hidden bg-zinc-950/90 backdrop-blur-md border-t ${theme.border} py-2`}>
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full px-4 py-3 ${theme.hover} ${
                  isActive ? theme.accent + ' font-medium' : theme.textSecondary
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
