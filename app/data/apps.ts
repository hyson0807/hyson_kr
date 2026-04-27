import { App, ProjectType } from './types';

export const apps: App[] = [
  // 내부 프로젝트
  {
    id: 'isolog',
    title: 'IsoLog',
    description: '이소티논 복용자를 위한 스마트 복용 관리 앱',
    longDescription:
      '매일 복용 체크, 피부 상태 기록, 음주 예정일 경고까지. 이소티논 복용 중 필요한 모든 기능을 한 앱에 담았습니다. 복용 주기 설정, 캘린더 기록 조회, 복용 알림 등 편리한 기능으로 꾸준한 복용 습관을 만들어보세요.',
    tags: ['React Native'],
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
  {
    id: 'pibugom',
    title: '피부곰',
    description: '피부 고민 커뮤니티',
    longDescription:
      '피부 고민을 익명으로 나누고, 서로 답변해주는 커뮤니티 앱입니다. 나이, 성별, 피부 고민별로 맞춤 질문을 찾아보고, 경험을 공유할 수 있습니다.',
    tags: ['React Native', 'NestJS'],
    status: 'released',
    platforms: ['ios', 'android'],
    projectType: 'internal',
    image: '/images/apps/pibugom.png',
    storeLinks: {
      appStore:
        'https://apps.apple.com/kr/app/%ED%94%BC%EB%B6%80%EA%B3%B0-%ED%94%BC%EB%B6%80-%EA%B3%A0%EB%AF%BC-%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0/id6760972457',
    },
  },
  {
    id: 'ggumteul-math',
    title: '꿈틀매쓰',
    description: '초등 1~3학년 수학 게이미피케이션',
    longDescription:
      '문제를 풀어 코인과 별을 모으고, 지렁이를 키우고, 마을을 꾸미는 초등 저학년 수학 학습 앱입니다. 학년·학기별 커리큘럼에 맞춰 단계별로 진도를 나가고, 자율 학습 동기를 높입니다.',
    tags: ['React Native', 'NestJS'],
    status: 'released',
    platforms: ['ios'],
    projectType: 'internal',
    image: '/images/apps/ggumteul-math.png',
    storeLinks: {
      appStore:
        'https://apps.apple.com/kr/app/%EA%BF%88%ED%8B%80%EB%A7%A4%EC%93%B0-%EC%B4%88%EB%93%B1-%EC%88%98%ED%95%99%ED%95%99%EC%8A%B5-%ED%94%8C%EB%9E%AB%ED%8F%BC/id6763516927',
    },
  },
  // 협업 프로젝트
  {
    id: 'linkjob',
    title: 'LinkJob',
    description: '외국인 구인구직 플랫폼',
    longDescription:
      '한국어 실력을 확인하고 구직자와 얘기해 보세요! 10초만에 공고를 등록할 수 있고, 외국인 구직자에게 맞는 공고를 찾아볼 수 있습니다. 구직자가 한국어 테스트를 보기 때문에 구인자는 외국인 구직자의 한국어 실력과 프로필을 확인하고 연락할 수 있습니다.',
    tags: ['React Native', 'Express', 'PostgresSQL'],
    status: 'released',
    platforms: ['ios', 'android', 'web'],
    projectType: 'collaboration',
    image: '/images/apps/linkjob.png',
    storeLinks: {
      appStore:
        'https://apps.apple.com/kr/app/kgency-%EC%BC%80%EC%9D%B4%EC%A0%84%EC%8B%9C-%EC%99%B8%EA%B5%AD%EC%9D%B8-%EA%B5%AC%EC%9D%B8%EA%B5%AC%EC%A7%81-%EC%95%8C%EB%B0%94/id6749147143',
      playStore: 'https://play.google.com/store/apps/details?id=com.welkit.kgency',
      website: 'https://linkjob.kr',
    },
  },
  {
    id: 'irubitteo',
    title: '이루빛터',
    description: '장애인 근로자와 기업을 매칭하는 웹 플랫폼',
    longDescription:
      '장애인 근로자와 기업을 연결하는 매칭 플랫폼입니다. 기업은 적합한 인재를 찾고, 장애인 근로자는 자신에게 맞는 일자리를 쉽게 탐색할 수 있습니다. 모두가 함께 성장하는 포용적 채용 환경을 만들어갑니다.',
    tags: ['NextJs', 'NestJs', 'Postgres'],
    status: 'released',
    platforms: ['web'],
    projectType: 'collaboration',
    image: '/images/apps/irubitteo.png',
    storeLinks: {
      website: 'https://www.irubitteo.com',
    },
  },
  {
    id: 'youngcosmed',
    title: 'Young Cosmed',
    description: 'K-Beauty 의료미용 제품 B2B 플랫폼',
    longDescription:
      '한국 의료미용 제품을 글로벌 시장에 연결하는 B2B 플랫폼입니다. 필러, 스킨부스터 등 검증된 한국 제조사의 제품을 소개하고, 해외 바이어와의 직접 소통을 지원합니다.',
    tags: ['NextJs', 'NestJs', 'Postgres'],
    status: 'released',
    platforms: ['web'],
    projectType: 'collaboration',
    image: '/images/apps/youngcosmed.png',
    storeLinks: {
      website: 'https://youngcosmed.com',
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
