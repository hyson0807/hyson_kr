'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeConfig } from './types';

interface HeaderProps {
  theme: ThemeConfig;
}

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Header({ theme }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-zinc-950/70 backdrop-blur-md border-b ${theme.border}`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-center px-4 md:px-8 lg:px-12">
        {/* 네비게이션 (모든 화면에서 가운데 정렬로 표시) */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`px-3 py-2 sm:px-4 rounded-lg text-sm font-medium transition-colors ${theme.hover} ${
                  isActive ? theme.accent : theme.textSecondary
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
