import { App, ProjectType } from './types';

export const apps: App[] = [
  // 내부 프로젝트
  {
    id: 'isolog',
    title: 'IsoLog',
    description: '이소티논 복용자를 위한 스마트 복용 관리 앱',
    longDescription:
      '매일 복용 체크, 피부 상태 기록, 음주 예정일 경고까지. 이소티논 복용 중 필요한 모든 기능을 한 앱에 담았습니다. 복용 주기 설정, 캘린더 기록 조회, 복용 알림 등 편리한 기능으로 꾸준한 복용 습관을 만들어보세요.',
    tags: ['React Native', 'iOS', 'Android'],
    status: 'released',
    platforms: ['ios', 'android'],
    projectType: 'internal',
    image: '/images/apps/isolog.png',
    storeLinks: {
      appStore:
        'https://apps.apple.com/kr/app/%EC%9D%B4%EC%86%8C%ED%8B%B0%EB%85%BC-%EC%97%AC%EB%93%9C%EB%A6%84%EC%95%BD-%EB%B3%B5%EC%9A%A9%EA%B4%80%EB%A6%AC-isolog/id6756465278',
      playStore: 'https://play.google.com/store/apps/details?id=com.hyson.isoLog'
    },
  },
  // 협업 프로젝트
  {
    id: 'linkjob',
    title: 'LinkJob',
    description: '외국인 구인구직 플랫폼',
    longDescription:
      '한국어 실력을 확인하고 구직자와 얘기해 보세요! 10초만에 공고를 등록할 수 있고, 외국인 구직자에게 맞는 공고를 찾아볼 수 있습니다. 구직자가 한국어 테스트를 보기 때문에 구인자는 외국인 구직자의 한국어 실력과 프로필을 확인하고 연락할 수 있습니다.',
    tags: ['React Native', 'iOS', 'Android'],
    status: 'released',
    platforms: ['ios', 'android'],
    projectType: 'collaboration',
    image: '/images/apps/linkjob.png',
    storeLinks: {
      appStore:
        'https://apps.apple.com/kr/app/kgency-%EC%BC%80%EC%9D%B4%EC%A0%84%EC%8B%9C-%EC%99%B8%EA%B5%AD%EC%9D%B8-%EA%B5%AC%EC%9D%B8%EA%B5%AC%EC%A7%81-%EC%95%8C%EB%B0%94/id6749147143',
      playStore: 'https://play.google.com/store/apps/details?id=com.welkit.kgency',
    },
  },
];

export const getAppsByType = (type: ProjectType): App[] => {
  return apps.filter((app) => app.projectType === type);
};

export const getInternalApps = (): App[] => getAppsByType('internal');

export const getCollaborationApps = (): App[] => getAppsByType('collaboration');

export const getAppById = (id: string): App | undefined => {
  return apps.find((app) => app.id === id);
};

export const getReleasedApps = (): App[] => {
  return apps.filter((app) => app.status === 'released');
};
