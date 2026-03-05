export type AppStatus = 'released' | 'coming_soon' | 'development';

export type ProjectType = 'internal' | 'collaboration';

export type Platform = 'ios' | 'android' | 'web';
export type ProgramStatus = 'available' | 'coming_soon';
export type ProgramPlatform = 'macos' | 'windows' | 'linux';

export interface StoreLinks {
  appStore?: string;
  playStore?: string;
  website?: string;
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

export interface Program {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  platform: ProgramPlatform;
  downloadPath?: string;
  status: ProgramStatus;
  tags: string[];
}
