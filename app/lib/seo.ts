import type { Metadata } from 'next';

export const SITE_URL = 'https://hyson.kr';
export const SITE_NAME = 'Hyson Works - 하이슨 워크';
export const SITE_DESCRIPTION =
  'Hyson Works는 iOS · Android · Web · Mac 앱을 기획부터 출시, 운영까지 함께 만드는 프로덕트 스튜디오입니다. 꾸준히, 더 나은 앱을 만듭니다.';
/** app/opengraph-image.tsx 가 만드는 기본 공유 이미지 */
export const DEFAULT_OG_IMAGE = '/opengraph-image';

interface PageMetadataInput {
  /** 제목 — 루트의 '%s | Hyson Works' 템플릿이 붙는다 */
  title: string;
  description: string;
  /** '/projects' 처럼 사이트 기준 경로 — canonical · og:url 에 쓴다 */
  path: string;
  image?: string;
  type?: 'website' | 'article';
}

/**
 * 하위 페이지 메타데이터.
 * Next 는 openGraph · twitter 를 키 단위로 통째로 덮어써서, 페이지가 openGraph 를 쓰면 루트의 이미지 · siteName · locale 이
 * 사라진다. 그래서 페이지마다 이 함수로 전부 채운다.
 */
export function pageMetadata({ title, description, path, image = DEFAULT_OG_IMAGE, type = 'website' }: PageMetadataInput): Metadata {
  const fullTitle = `${title} | Hyson Works`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: 'ko_KR',
      url: path,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

/** 메타 설명용 — 검색 결과에서 잘리지 않도록 문장 경계 기준으로 줄인다 */
export function toMetaDescription(text: string, max = 150): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const sentenceEnd = cut.lastIndexOf('. ');
  return sentenceEnd > max * 0.5 ? cut.slice(0, sentenceEnd + 1) : `${cut.trimEnd()}…`;
}
