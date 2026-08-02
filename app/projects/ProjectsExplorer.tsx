'use client';

import { memo, useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { App, Program, ProjectType, getAppCategory } from '../data';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type Category = 'app' | 'website' | 'program';
type StoreFilter = 'appStore' | 'playStore';

type UnifiedItem = {
  id: string;
  category: Category;
  searchText: string;
} & ({ kind: 'app'; app: App } | { kind: 'program'; program: Program });

// ---------- 카드 컴포넌트 ----------

const STORE_ICONS = {
  appStore: (
    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  ),
  playStore: (
    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
    </svg>
  ),
  website: (
    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  ),
} as const;

// 출시만 초록, 나머지는 아직 받을 수 없다는 뜻이라 색을 따로 준다
const STATUS_BADGE: Record<App['status'], { label: string; className: string }> = {
  released: {
    label: '출시',
    className: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
  },
  coming_soon: {
    label: '출시 예정',
    className: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
  },
  development: {
    label: '개발 중',
    className: 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400',
  },
};

const STORE_LABELS = {
  appStore: 'App Store',
  playStore: 'Google Play',
  website: 'Website',
} as const;

function StoreButton({
  type,
  url,
}: {
  type: 'appStore' | 'playStore' | 'website';
  url?: string;
}) {
  if (!url) {
    return (
      <Button
        disabled
        className="h-auto gap-2 rounded-lg px-6 py-3 text-base font-medium bg-gray-300 dark:bg-zinc-700 text-gray-500 dark:text-gray-400 disabled:opacity-100"
      >
        {STORE_ICONS[type]}
        Coming Soon
      </Button>
    );
  }

  return (
    <Button
      asChild
      className="h-auto gap-2 rounded-lg px-6 py-3 text-base font-medium bg-black text-white hover:bg-black hover:opacity-90"
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        {STORE_ICONS[type]}
        {STORE_LABELS[type]}
      </a>
    </Button>
  );
}

function ProgramDownloadButton({ program }: { program: Program }) {
  if (program.status !== 'available' || !program.downloadPath) {
    return (
      <Button
        disabled
        className="h-auto self-start gap-2 rounded-lg px-6 py-3 text-base font-medium bg-gray-300 dark:bg-zinc-700 text-gray-500 dark:text-gray-400 disabled:opacity-100"
      >
        Coming Soon
      </Button>
    );
  }

  return (
    <Button
      asChild
      className="h-auto self-start gap-2 rounded-lg px-6 py-3 text-base font-medium bg-black text-white hover:bg-black hover:opacity-90"
    >
      <a href={program.downloadPath} download>
        다운로드
      </a>
    </Button>
  );
}

const AppCard = memo(function AppCard({
  app,
  showCollabBadge = false,
}: {
  app: App;
  showCollabBadge?: boolean;
}) {
  return (
    <Card
      id={app.id}
      className="rounded-lg py-0 gap-0 text-base text-inherit ring-0 border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 hover:shadow-xl transition-all scroll-mt-24"
    >
      <div className="grid md:grid-cols-2">
        {/* 앱 썸네일 */}
        <div className="relative aspect-[4/3] md:aspect-auto md:h-80">
          {app.storeLinks.website ? (
            <a
              href={app.storeLinks.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${app.title} 웹사이트 열기`}
              className="block w-full h-full transition-opacity hover:opacity-90"
            >
              <Image src={app.image} alt={app.title} fill className="object-contain" />
            </a>
          ) : (
            <Image src={app.image} alt={app.title} fill className="object-contain" />
          )}
        </div>

        {/* 앱 정보 */}
        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-3xl font-bold">{app.title}</h2>
            <Badge className={`h-auto rounded-full px-3 py-1 text-sm ${STATUS_BADGE[app.status].className}`}>
              {STATUS_BADGE[app.status].label}
            </Badge>
            {showCollabBadge && (
              <Badge className="h-auto rounded-full px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                협업
              </Badge>
            )}
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-4 font-medium">
            {app.description}
          </p>

          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            {app.longDescription}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {app.tags.map((tag) => (
              <Badge
                key={tag}
                className="h-auto rounded-full px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {app.storeLinks.appStore !== undefined && (
              <StoreButton type="appStore" url={app.storeLinks.appStore} />
            )}
            {app.storeLinks.playStore !== undefined && (
              <StoreButton type="playStore" url={app.storeLinks.playStore} />
            )}
            {app.storeLinks.website && (
              <StoreButton type="website" url={app.storeLinks.website} />
            )}
          </div>
        </div>
      </div>
    </Card>
  );
});

const ProgramCard = memo(function ProgramCard({ program }: { program: Program }) {
  return (
    <Card
      id={program.id}
      className="rounded-lg p-8 gap-0 text-base text-inherit ring-0 border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 hover:shadow-xl transition-all scroll-mt-24"
    >
      <div className="flex items-center gap-3 mb-4">
        {program.image && (
          <Image src={program.image} alt={program.name} width={48} height={48} className="rounded-lg" />
        )}
        <h2 className="text-3xl font-bold">{program.name}</h2>
        <Badge className="h-auto rounded-full px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
          데스크톱 프로그램
        </Badge>
        <Badge className="h-auto rounded-full px-3 py-1 text-sm bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
          {program.status === 'available' ? '다운로드 가능' : '준비 중'}
        </Badge>
      </div>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-4 font-medium">{program.description}</p>
      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{program.longDescription}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {program.tags.map((tag) => (
          <Badge
            key={tag}
            className="h-auto rounded-full px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
          >
            {tag}
          </Badge>
        ))}
      </div>
      <ProgramDownloadButton program={program} />
    </Card>
  );
});

// ---------- 필터 드롭다운 ----------

const CATEGORY_OPTIONS: { label: string; value: Category | 'all' }[] = [
  { label: '모든 종류', value: 'all' },
  { label: '앱', value: 'app' },
  { label: '웹사이트', value: 'website' },
  { label: '프로그램', value: 'program' },
];

const OWNERSHIP_OPTIONS: { label: string; value: ProjectType | 'all' }[] = [
  { label: '모든 구분', value: 'all' },
  { label: '개인', value: 'internal' },
  { label: '협업', value: 'collaboration' },
];

const STORE_OPTIONS: { label: string; value: StoreFilter | 'all' }[] = [
  { label: '모든 스토어', value: 'all' },
  { label: 'App Store', value: 'appStore' },
  { label: 'Play Store', value: 'playStore' },
];

function FilterSelect<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { label: string; value: T | 'all' }[];
  value: T | 'all';
  onChange: (v: T | 'all') => void;
}) {
  return (
    <Select value={value} onValueChange={(v) => onChange(v as T | 'all')}>
      <SelectTrigger
        aria-label={label}
        className="h-auto cursor-pointer rounded-lg border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 py-2.5 pl-4 pr-3 text-sm font-medium text-gray-700 dark:text-gray-300 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:border-gray-200 dark:focus-visible:border-zinc-800"
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent position="popper">
        {options.map((opt) => (
          <SelectItem key={opt.value} value={opt.value} className="cursor-pointer py-2 pl-3">
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

// ---------- 메인 ----------

export default function ProjectsExplorer({
  apps,
  programs,
}: {
  apps: App[];
  programs: Program[];
}) {
  const items = useMemo<UnifiedItem[]>(() => {
    const appItems = apps.map((app): UnifiedItem => ({
      id: app.id,
      kind: 'app',
      app,
      category: getAppCategory(app),
      searchText: [app.title, app.description, app.longDescription ?? '', ...app.tags]
        .join(' ')
        .toLowerCase(),
    }));

    const programItems = programs.map((program): UnifiedItem => ({
      id: program.id,
      kind: 'program',
      program,
      category: 'program',
      searchText: [program.name, program.description, program.longDescription, ...program.tags]
        .join(' ')
        .toLowerCase(),
    }));

    return [...appItems, ...programItems];
  }, [apps, programs]);

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category | 'all'>('all');
  const [ownership, setOwnership] = useState<ProjectType | 'all'>('all');
  const [store, setStore] = useState<StoreFilter | 'all'>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      if (q && !item.searchText.includes(q)) return false;
      if (category !== 'all' && item.category !== category) return false;
      if (ownership !== 'all') {
        const own: ProjectType = item.kind === 'app' ? item.app.projectType : 'internal';
        if (own !== ownership) return false;
      }
      if (store !== 'all') {
        const links = item.kind === 'app' ? item.app.storeLinks : undefined;
        if (store === 'appStore' ? !links?.appStore : !links?.playStore) return false;
      }
      return true;
    });
  }, [items, query, category, ownership, store]);

  return (
    <div>
      {/* 검색 + 필터 (2줄) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className="mb-12 space-y-3"
      >
        {/* 1줄: 검색 (가로 전체) */}
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="프로젝트 검색 (이름, 설명, 태그)"
            aria-label="프로젝트 검색"
            className="w-full rounded-lg border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 py-3 pl-11 pr-4 text-base placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* 2줄: 필터 드롭다운 한 줄 */}
        <div className="flex flex-wrap items-center gap-3">
          <FilterSelect<Category> label="종류" value={category} onChange={setCategory} options={CATEGORY_OPTIONS} />
          <FilterSelect<ProjectType> label="구분" value={ownership} onChange={setOwnership} options={OWNERSHIP_OPTIONS} />
          <FilterSelect<StoreFilter> label="스토어" value={store} onChange={setStore} options={STORE_OPTIONS} />
          <span className="ml-auto text-sm text-gray-500 dark:text-gray-500">
            {filtered.length}개 프로젝트
          </span>
        </div>
      </motion.div>

      {/* 리스트 */}
      {filtered.length > 0 ? (
        <motion.div layout className="flex flex-col gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.3) }}
              >
                {item.kind === 'app' ? (
                  <AppCard app={item.app} showCollabBadge={item.app.projectType === 'collaboration'} />
                ) : (
                  <ProgramCard program={item.program} />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 border-dashed rounded-lg"
        >
          <div className="flex items-center justify-center h-48">
            <div className="text-center px-8">
              <p className="text-lg font-semibold text-gray-500 dark:text-gray-400 mb-1">
                조건에 맞는 프로젝트가 없습니다
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                검색어나 필터를 조정해 보세요
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
