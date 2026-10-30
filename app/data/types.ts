export type ProjectCategory =
  | 'app'
  | 'web'
  | 'mac'
  | 'commerce'
  | 'health'
  | 'education'
  | 'community'
  | 'b2b';

export type ProjectPlatform = 'ios' | 'android' | 'web' | 'macos';

// live: 운영 중 / beta: 사전 오픈·출시 직후 / ended: 서비스 종료
export type ProjectStatus = 'live' | 'beta' | 'ended';

// phone: 폰 프레임에 넣는 앱 화면 / browser: 브라우저 프레임에 넣는 웹 화면
// plain: 이미 목업으로 만든 이미지 / icon: 스크린샷이 없어 앱 아이콘만 보여 줄 때
// video: 세로 홍보 영상 — 폰 프레임 안에서 자동 재생 (poster 필수)
export type ProjectImageKind = 'phone' | 'browser' | 'plain' | 'icon' | 'video';

export interface ProjectImage {
  src: string;
  alt: string;
  kind: ProjectImageKind;
  poster?: string;
}

export interface ProjectSection {
  title: string;
  body: string;
  images: ProjectImage[];
}

export interface ProjectLinks {
  appStore?: string;
  playStore?: string;
  website?: string;
  download?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  categories: ProjectCategory[];
  platforms: ProjectPlatform[];
  year: number;
  launch?: string;
  status: ProjectStatus;
  featured?: boolean;
  /** 대표 이미지 — 스토어용 키 비주얼이 있으면 그것을, 없으면 생성한 키 비주얼. 카드·모자이크·상세 상단에 사용 */
  thumbnail: string;
  /** 상세 이미지 패널 그라디언트 */
  theme: { from: string; to: string; dark?: boolean };
  intro: string;
  sections: ProjectSection[];
  highlights: string[];
  stack: string[];
  links: ProjectLinks;
}
