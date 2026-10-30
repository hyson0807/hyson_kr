'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSectionTone } from '@/app/hooks/useSectionTone';
import { Wordmark } from './Wordmark';

const navItems = [
  { href: '/#about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const tone = useSectionTone(32);
  const [open, setOpen] = useState(false);
  const dark = tone === 'dark' && !open;

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) => href !== '/#about' && pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
          dark ? 'bg-[#0a0a0a]/80 text-white' : 'bg-white/85 text-neutral-900',
          'backdrop-blur-md',
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" aria-label="Hyson Works 홈" className="transition-opacity hover:opacity-70">
            <Wordmark />
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-[15px] font-medium transition-colors',
                  isActive(item.href)
                    ? dark
                      ? 'text-white'
                      : 'text-neutral-900'
                    : dark
                      ? 'text-white/60 hover:text-white'
                      : 'text-neutral-500 hover:text-neutral-900',
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-brand/50 focus:ring-offset-2 sm:inline-flex"
            >
              문의하기
            </Link>
            <button
              type="button"
              aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-black/5 md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-16 md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-3xl font-bold text-display text-neutral-900"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex justify-center rounded-xl bg-brand px-5 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-hover"
              >
                프로젝트 문의하기
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
