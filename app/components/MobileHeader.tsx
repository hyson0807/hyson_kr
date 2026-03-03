'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeConfig } from './types';

interface MobileHeaderProps {
  theme: ThemeConfig;
}

export default function MobileHeader({ theme }: MobileHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Apps', path: '/projects' },
    { name: 'Programs', path: '/programs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`lg:hidden fixed top-0 left-0 right-0 z-50 ${theme.sidebar} border-b ${theme.border} px-4 py-3`}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className={`text-xl font-bold ${theme.accent}`}>
          Hyson Works
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`p-2 rounded-lg ${theme.hover}`}
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
        <nav className={`absolute top-full left-0 right-0 ${theme.sidebar} border-b ${theme.border} py-4`}>
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 ${theme.hover} ${
                  isActive ? theme.accent + ' font-medium' : ''
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
