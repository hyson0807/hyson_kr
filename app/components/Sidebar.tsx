'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeConfig } from './types';

interface SidebarProps {
  theme: ThemeConfig;
}

export default function Sidebar({ theme }: SidebarProps) {
  const pathname = usePathname();

  const navItems = [
    {
      name: 'Home',
      path: '/',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      ),
    },
    {
      name: 'About',
      path: '/about',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      ),
    },
    {
      name: 'Projects',
      path: '/projects',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      ),
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
    },
  ];

  return (
    <aside
      className={`hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-20 lg:flex-col ${theme.sidebar} border-r ${theme.border}`}
    >
      <nav className="flex flex-1 flex-col items-center justify-center gap-8">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`group flex flex-col items-center gap-1 transition-colors ${theme.hover} p-3 rounded-lg ${
                isActive ? 'bg-opacity-50' : ''
              }`}
            >
              <svg
                className={`w-6 h-6 ${isActive ? theme.accent : theme.textSecondary}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {item.icon}
              </svg>
              <span className={`text-xs ${isActive ? theme.accent : theme.textSecondary}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}