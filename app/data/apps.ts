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
    status: 'operating',
    platforms: ['ios', 'android'],
    projectType: 'internal',
    image: '/images/apps/isolog.png',
    storeLinks: {
      appStore:
        'https://apps.apple.com/kr/app/%EC%9D%B4%EC%86%8C%ED%8B%B0%EB%85%BC-%EC%97%AC%EB%93%9C%EB%A6%84%EC%95%BD-%EB%B3%B5%EC%9A%A9%EA%B4%80%EB%A6%AC-isolog/id6756465278',
      playStore: 'https://play.google.com/store/apps/details?id=com.hyson.isoLog',
      website: 'https://isolog.app'
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
    id: 'hydo',
    title: 'hydo',
    description: '아이폰 잠금화면에 달력을 띄우는 일정 공유 앱',
    longDescription:
      '월간 달력을 배경화면으로 구워 폰을 켜자마자 이번 달 일정이 보이게 합니다. 초대 코드 하나로 친구·가족·팀과 같은 달력을 쓰고, 일정이 바뀌면 단축어 자동화가 배경화면을 다시 그립니다. 잠금화면·홈 화면 위젯으로 오늘 일정도 함께 확인할 수 있습니다.',
    tags: ['SwiftUI', 'NestJS', 'Postgres'],
    status: 'operating',
    platforms: ['ios'],
    projectType: 'internal',
    image: '/images/apps/hydo.png',
    storeLinks: {
      appStore:
        'https://apps.apple.com/kr/app/hydo-%EC%9E%A0%EA%B8%88%ED%99%94%EB%A9%B4-%EC%BA%98%EB%A6%B0%EB%8D%94-%EA%B3%B5%EC%9C%A0-%EC%95%B1/id6794805038',
      website: 'https://hyson.kr/hydo',
    },
  },
  // 협업 프로젝트
  {
    id: 'ggumteul-math',
    title: '꿈틀매쓰',
    description: '초등 1~3학년 수학 게이미피케이션',
    longDescription:
      '문제를 풀어 코인과 별을 모으고, 지렁이를 키우고, 마을을 꾸미는 초등 저학년 수학 학습 앱입니다. 학년·학기별 커리큘럼에 맞춰 단계별로 진도를 나가고, 자율 학습 동기를 높입니다.',
    tags: ['React Native', 'NestJS'],
    status: 'released',
    platforms: ['ios'],
    projectType: 'collaboration',
    image: '/images/apps/ggumteul-math.png',
    storeLinks: {
      appStore:
        'https://apps.apple.com/kr/app/%EA%BF%88%ED%8B%80%EB%A7%A4%EC%93%B0-%EC%B4%88%EB%93%B1-%EC%88%98%ED%95%99%ED%95%99%EC%8A%B5-%ED%94%8C%EB%9E%AB%ED%8F%BC/id6763516927',
    },
  },
  {
    id: 'linkjob',
    title: 'LinkJob',
    description: '외국인 구인구직 플랫폼',
    longDescription:
      '한국어 실력을 확인하고 구직자와 얘기해 보세요! 10초만에 공고를 등록할 수 있고, 외국인 구직자에게 맞는 공고를 찾아볼 수 있습니다. 구직자가 한국어 테스트를 보기 때문에 구인자는 외국인 구직자의 한국어 실력과 프로필을 확인하고 연락할 수 있습니다.',
    tags: ['React Native', 'Express', 'PostgresSQL'],
    status: 'discontinued',
    platforms: ['ios', 'android', 'web'],
    projectType: 'collaboration',
    image: '/images/apps/linkjob.png',
    storeLinks: {},
  },
  {
    id: 'irubitteo',
    title: '이루빛터',
    description: '장애인 근로자와 기업을 매칭하는 웹 플랫폼',
    longDescription:
      '장애인 근로자와 기업을 연결하는 매칭 플랫폼입니다. 기업은 적합한 인재를 찾고, 장애인 근로자는 자신에게 맞는 일자리를 쉽게 탐색할 수 있습니다. 모두가 함께 성장하는 포용적 채용 환경을 만들어갑니다.',
    tags: ['NextJs', 'NestJs', 'Postgres'],
    status: 'operating',
    platforms: ['web'],
    projectType: 'collaboration',
    image: '/images/apps/irubitteo.png',
    storeLinks: {
      website: 'https://www.irubitteo.com',
    },
  },
  {
    id: 'klow',
    title: 'KLOW',
    description: '브랜드의 해외 판매를 한 번에 해결하는 올인원 솔루션',
    longDescription:
      '해외 결제, 국제 배송, 판매 채널 개설까지 — 브랜드가 해외에 제품을 팔 때 거쳐야 하는 복잡한 과정을 하나로 묶었습니다. 애플페이·페이팔·알리페이 등 해외 고객에게 익숙한 결제 수단과 저렴한 물류를 연결하고, 역직구 개별배송 방식으로 통관·인증 부담을 덜어 국가마다 따로 준비할 필요 없이 바로 해외 고객에게 판매할 수 있습니다.',
    tags: ['NextJs', 'NestJs', 'Postgres'],
    status: 'operating',
    platforms: ['web'],
    projectType: 'collaboration',
    image: '/images/apps/klow.png',
    storeLinks: {
      website: 'https://www.klow.kr',
    },
  },
  {
    id: 'klow-brand',
    title: 'KLOW Brand',
    description: 'K-뷰티 브랜드 글로벌 입점 플랫폼',
    longDescription:
      'K-뷰티 브랜드의 글로벌 진출 파트너. 3분 만에 80개국 B2C 판매 채널을 개설할 수 있는 브랜드 셀프 온보딩 포털입니다. 상품 등록 스튜디오, 캠페인·크리에이터 시딩, 구독 결제까지 브랜드 운영에 필요한 기능을 제공합니다.',
    tags: ['NextJs', 'NestJs', 'Postgres'],
    status: 'operating',
    platforms: ['web'],
    projectType: 'collaboration',
    image: '/images/apps/klow-brand.png',
    storeLinks: {
      website: 'https://brand.klow.kr',
    },
  },
  {
    id: 'youngcosmed',
    title: 'Young Cosmed',
    description: 'K-Beauty 의료미용 제품 B2B 플랫폼',
    longDescription:
      '한국 의료미용 제품을 글로벌 시장에 연결하는 B2B 플랫폼입니다. 필러, 스킨부스터 등 검증된 한국 제조사의 제품을 소개하고, 해외 바이어와의 직접 소통을 지원합니다.',
    tags: ['NextJs', 'NestJs', 'Postgres'],
    status: 'operating',
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

// 홈에 노출할 프로젝트 — 중단된 것만 뺀다
export const getLiveApps = (): App[] => {
  return apps.filter((app) => app.status !== 'discontinued');
};

export type AppCategory = 'app' | 'website';

// 모바일(ios/android) 플랫폼이 있으면 '앱', web 전용이면 '웹사이트'
export const getAppCategory = (app: App): AppCategory =>
  app.platforms.some((p) => p === 'ios' || p === 'android') ? 'app' : 'website';
