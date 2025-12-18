export type AppStatus = 'released' | 'coming_soon' | 'development';

export type ProjectType = 'internal' | 'collaboration';

export type Platform = 'ios' | 'android' | 'web';

export interface StoreLinks {
  appStore?: string;
  playStore?: string;
}

export interface App {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  status: AppStatus;
  platforms: Platform[];
  projectType: ProjectType;
  image: string;
  storeLinks: StoreLinks;
}
