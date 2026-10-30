import Image from 'next/image';
import type { ProjectImage } from '@/app/data';
import { cn } from '@/lib/utils';

/** 앱 화면 — 아이폰 비율 프레임 */
export function PhoneFrame({ image, className }: { image: ProjectImage; className?: string }) {
  return (
    <div
      className={cn(
        'relative aspect-[1320/2868] overflow-hidden rounded-[2rem] border-[5px] border-neutral-900 bg-neutral-900 shadow-[0_24px_60px_rgba(0,0,0,0.25)]',
        className,
      )}
    >
      <Image src={image.src} alt={image.alt} fill sizes="260px" className="object-cover object-top" />
    </div>
  );
}

/** 세로 홍보 영상 — 폰 프레임 안에서 소리 없이 반복 재생 */
export function VideoPhoneFrame({ image, className }: { image: ProjectImage; className?: string }) {
  return (
    <div
      className={cn(
        'relative aspect-[9/16] overflow-hidden rounded-[2rem] border-[5px] border-neutral-900 bg-neutral-900 shadow-[0_24px_60px_rgba(0,0,0,0.25)]',
        className,
      )}
    >
      <video
        src={image.src}
        poster={image.poster}
        aria-label={image.alt}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}

/** 웹 화면 — 브라우저 크롬 프레임 */
export function BrowserFrame({ image, className }: { image: ProjectImage; className?: string }) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl bg-white shadow-[0_24px_60px_rgba(0,0,0,0.18)] ring-1 ring-black/5',
        className,
      )}
    >
      <div className="flex h-7 items-center gap-1.5 border-b border-neutral-100 bg-neutral-50 px-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="relative aspect-[16/10] bg-white">
        <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 760px, 100vw" className="object-cover object-top" />
      </div>
    </div>
  );
}

/** 상세 섹션 이미지 패널 — 레퍼런스의 둥근 그라디언트 박스 */
export function ImagePanel({
  images,
  theme,
}: {
  images: ProjectImage[];
  theme: { from: string; to: string };
}) {
  const phones = images.filter((image) => image.kind === 'phone' || image.kind === 'video');
  const browsers = images.filter((image) => image.kind === 'browser');
  const plains = images.filter((image) => image.kind === 'plain');
  const icons = images.filter((image) => image.kind === 'icon');

  return (
    <div
      className="overflow-hidden rounded-3xl px-6 py-10 sm:px-12 sm:py-14"
      style={{ background: `linear-gradient(135deg, ${theme.from}, ${theme.to})` }}
    >
      {phones.length > 0 && (
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          {phones.map((image, i) => {
            const className = cn('w-[30%] max-w-[220px]', i === 1 && phones.length === 3 && 'sm:-translate-y-6');
            return image.kind === 'video' ? (
              <VideoPhoneFrame key={image.src} image={image} className={className} />
            ) : (
              <PhoneFrame key={image.src + i} image={image} className={className} />
            );
          })}
        </div>
      )}

      {browsers.length > 0 && (
        <div className={cn('grid gap-6', browsers.length > 1 && 'md:grid-cols-2')}>
          {browsers.map((image) => (
            <BrowserFrame key={image.src} image={image} />
          ))}
        </div>
      )}

      {plains.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {plains.map((image) => (
            <div
              key={image.src}
              className={cn(
                'relative overflow-hidden rounded-2xl',
                plains.length >= 3 ? 'w-[30%] max-w-[240px]' : plains.length === 2 ? 'w-[45%]' : 'w-full max-w-[520px]',
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={1200}
                sizes="(min-width: 1024px) 320px, 45vw"
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>
      )}

      {icons.length > 0 && (
        <div className="flex justify-center py-6">
          {icons.map((image) => (
            <div key={image.src} className="relative h-36 w-36 overflow-hidden rounded-[2rem] shadow-[0_24px_60px_rgba(0,0,0,0.2)] sm:h-44 sm:w-44">
              <Image src={image.src} alt={image.alt} fill sizes="176px" className="object-cover" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
