export type ThemeType = 'minimal' | 'dark' | 'neutral';

export interface ThemeConfig {
  bg: string;
  text: string;
  textSecondary: string;
  accent: string;
  accentBg: string;
  sidebar: string;
  hover: string;
  border: string;
}

export const themes: Record<ThemeType, ThemeConfig> = {
  minimal: {
    bg: 'bg-white',
    text: 'text-gray-900',
    textSecondary: 'text-gray-600',
    accent: 'text-blue-600',
    accentBg: 'bg-blue-600',
    sidebar: 'bg-gray-50',
    hover: 'hover:bg-gray-100',
    border: 'border-gray-200',
  },
  dark: {
    bg: 'bg-zinc-950',
    text: 'text-white',
    textSecondary: 'text-gray-400',
    accent: 'text-blue-400',
    accentBg: 'bg-blue-500',
    sidebar: 'bg-zinc-900',
    hover: 'hover:bg-zinc-800',
    border: 'border-zinc-800',
  },
  neutral: {
    bg: 'bg-stone-50',
    text: 'text-stone-900',
    textSecondary: 'text-stone-600',
    accent: 'text-stone-700',
    accentBg: 'bg-stone-700',
    sidebar: 'bg-stone-100',
    hover: 'hover:bg-stone-200',
    border: 'border-stone-300',
  },
};