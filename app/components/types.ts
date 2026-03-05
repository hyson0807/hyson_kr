// Dark 테마 전용 — 라이트모드는 Tailwind dark: prefix로 처리
export type ThemeType = 'dark';

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
};