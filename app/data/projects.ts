import type { Project, ProjectCategory } from './types';

const IMG = '/images/projects';
const KV = '/images/generated';

export const projects: Project[] = [
  {
    slug: 'hydo',
    title: 'hydo',
    subtitle: '아이폰 잠금화면에 달력을 띄우는 일정 공유 앱',
    categories: ['app', 'mac', 'community'],
    platforms: ['ios', 'macos'],
    year: 2026,
    launch: '2026.07',
    status: 'live',
    featured: true,
    thumbnail: `${IMG}/hydo/universal.webp`,
    theme: { from: '#1e1b4b', to: '#4c1d95', dark: true },
    intro:
      '연인, 가족, 팀이 함께 쓰는 일정을 잠금화면에서 바로 확인하는 iOS 앱입니다. Hyson Works는 3줄짜리 잠금화면 위젯의 한계를 넘기 위해, 한 달 달력을 배경화면 이미지로 그려서 매일 자동으로 바꿔 주는 방식을 설계했습니다. 출시 후 macOS 앱과 프리미엄 구독까지 확장했습니다.',
    sections: [
      {
        title: '잠금화면 위젯의 한계를, 배경화면으로',
        body: '잠금화면 위젯은 160×72pt, 3줄 흑백이라 일주일치 일정도 담기 어렵습니다. Hyson Works는 달력 자체를 배경화면으로 만들었습니다. 화면에 보이는 달력과 배경화면 이미지를 같은 SwiftUI 뷰로 그려 두 결과가 픽셀 단위로 같게 맞췄고, 사진 위치·달력 크기·글자색을 사용자가 직접 편집할 수 있게 했습니다.',
        images: [
          { src: `${IMG}/hydo/wallpaper.webp`, alt: 'hydo 잠금화면 배경화면', kind: 'phone' },
          { src: `${IMG}/hydo/home.webp`, alt: 'hydo 홈 달력', kind: 'phone' },
          { src: `${IMG}/hydo/widgets.webp`, alt: 'hydo 위젯', kind: 'phone' },
        ],
      },
      {
        title: '앱을 열지 않아도, 매일 새로 그려지는 달력',
        body: '단축어 자동화가 앱을 닫을 때와 매일 정해진 시간에 App Intent를 실행해 그 자리에서 배경화면을 다시 만들어 적용합니다. 처음 쓰는 사람도 따라 할 수 있도록 9단계 설정 가이드를 만들고, 실시간 변경은 잠금화면 위젯이 보완하도록 역할을 나눴습니다.',
        images: [
          { src: `${IMG}/hydo/groups.webp`, alt: 'hydo 그룹 관리', kind: 'phone' },
          {
            src: `${IMG}/hydo/promo.mp4`,
            poster: `${IMG}/hydo/promo-poster.webp`,
            alt: 'hydo 홍보 영상 — 잠금화면 일정공유 캘린더',
            kind: 'video',
          },
          { src: `${IMG}/hydo/home.webp`, alt: 'hydo 일정 화면', kind: 'phone' },
        ],
      },
      {
        title: 'Mac에서도, 같은 달력을 더 큰 화면으로',
        body: '출시 후 macOS 앱으로 확장했습니다. 모든 그룹 일정을 큰 화면에서 보고, 메뉴 막대에서 바로 확인하고 추가할 수 있습니다. Mac에서 고친 일정은 아이폰 잠금화면 배경화면까지 이어지고, 라이트·다크 모드를 모두 지원합니다. 함께 도입한 hydo 프리미엄 구독은 StoreKit과 RevenueCat으로 두 플랫폼에서 같은 혜택을 제공합니다.',
        images: [
          { src: `${IMG}/hydo/mac-01.webp`, alt: 'hydo Mac 앱 메인 화면', kind: 'plain' },
          { src: `${IMG}/hydo/mac-02.webp`, alt: 'hydo Mac 메뉴 막대 패널', kind: 'plain' },
        ],
      },
      {
        title: '음력 반복부터 무중단 서버 이전까지',
        body: 'iOS 기본 음력은 한국 음력과 59개 연도에서 어긋나기 때문에, 1900–2050년 한국천문연구원 음력표를 앱에 내장해 생일·기일 같은 음력 반복 일정을 정확히 계산합니다. 사용자가 늘어난 뒤에는 서버와 DB를 싱가포르에서 서울로 31초 다운타임, 데이터 유실 없이 옮겼습니다.',
        images: [],
      },
    ],
    highlights: [
      '배경화면 렌더링 + 단축어 자동화로 잠금화면 한 달 달력 구현',
      '한국 음력표 내장, 그룹 초대 코드, 외부 캘린더 가져오기',
      'macOS 앱과 프리미엄 구독(RevenueCat)으로 확장',
    ],
    stack: ['SwiftUI', 'WidgetKit', 'App Intents', 'StoreKit', 'NestJS', 'Prisma', 'PostgreSQL', 'AWS Lightsail'],
    links: {
      appStore:
        'https://apps.apple.com/kr/app/hydo-%EC%9E%A0%EA%B8%88%ED%99%94%EB%A9%B4-%EC%BA%98%EB%A6%B0%EB%8D%94-%EA%B3%B5%EC%9C%A0-%EC%95%B1/id6794805038',
      website: '/hydo',
    },
  },
  {
    slug: 'isolog',
    title: 'IsoLog',
    subtitle: '이소티논 복용자를 위한 스마트 복용 관리 앱',
    categories: ['app', 'health', 'community'],
    platforms: ['ios', 'android', 'web'],
    year: 2025,
    launch: '2025.12',
    status: 'live',
    featured: true,
    thumbnail: `${IMG}/isolog/universal.webp`,
    theme: { from: '#fce7f3', to: '#ffedd5' },
    intro:
      '여드름 치료제 이소티논은 몇 달 동안 격일·주 단위처럼 불규칙하게 복용하고, 누적 복용량과 음주까지 관리해야 합니다. Hyson Works는 복용 체크, 피부 기록, 음주 경고, 커뮤니티를 하나로 묶은 글로벌 앱을 만들고 4개 언어로 출시해 운영하고 있습니다.',
    sections: [
      {
        title: '불규칙한 복용 주기를, 한 번의 체크로',
        body: '매일·격일·3일·주 단위 복용 주기와 5–50mg 용량 변경 이력, 하루 두 알을 서로 다른 용량으로 먹는 경우까지 모델링했습니다. 오늘 먹어야 하는지만 확인하고 체크하면 누적 복용량과 목표 대비 진행률이 자동으로 계산됩니다. 음주 예정일 앞뒤 4일은 경고로 알려 줍니다.',
        images: [
          { src: `${IMG}/isolog/home.webp`, alt: 'IsoLog 홈', kind: 'phone' },
          { src: `${IMG}/isolog/dosage.webp`, alt: 'IsoLog 누적 복용량', kind: 'phone' },
          { src: `${IMG}/isolog/calendar.webp`, alt: 'IsoLog 달력', kind: 'phone' },
        ],
      },
      {
        title: '피부 변화와 경험을, 기록하고 나누도록',
        body: '트러블·건조함을 기록하면 추이 그래프로 보여 주고, 지난 기록도 달력에서 고칠 수 있습니다. 커뮤니티에서는 사진 5장까지 올리고 댓글·좋아요·검색을 쓸 수 있으며, 게시글과 댓글을 4개 언어로 번역해 국가가 달라도 경험을 나눌 수 있게 했습니다.',
        images: [
          { src: `${IMG}/isolog/skin.webp`, alt: 'IsoLog 피부 기록', kind: 'phone' },
          { src: `${IMG}/isolog/community.webp`, alt: 'IsoLog 커뮤니티', kind: 'phone' },
        ],
      },
      {
        title: '위젯과 동기화까지, 오래 쓰는 앱의 기반',
        body: 'iOS 15.1부터 동작하는 홈 화면 위젯을 직접 만든 네이티브 모듈로 구현해, 앱을 열지 않아도 자정에 날짜가 넘어갑니다. 여러 기기에서 써도 기록이 꼬이지 않도록 변경분만 주고받는 동기화를 설계했고, 평생 이용권 결제와 관리자 페이지, 랜딩 페이지까지 함께 운영합니다.',
        images: [],
      },
    ],
    highlights: [
      '불규칙 복용 주기·용량 이력·음주 경고를 담은 복용 엔진',
      '4개 언어 UI와 커뮤니티 자동 번역',
      '홈 화면 위젯, 클라우드 동기화, 평생 이용권(RevenueCat)',
    ],
    stack: ['React Native', 'Expo', 'NativeWind', 'i18next', 'RevenueCat', 'NestJS', 'Prisma', 'Neon', 'Cloudflare R2'],
    links: {
      appStore:
        'https://apps.apple.com/kr/app/%EC%9D%B4%EC%86%8C%ED%8B%B0%EB%85%BC-%EC%97%AC%EB%93%9C%EB%A6%84%EC%95%BD-%EB%B3%B5%EC%9A%A9%EA%B4%80%EB%A6%AC-isolog/id6756465278',
      playStore: 'https://play.google.com/store/apps/details?id=com.hyson.isoLog',
      website: 'https://isolog.app',
    },
  },
  {
    slug: 'prup',
    title: 'PRUP',
    subtitle: '5대 운동 기록 경신을 돕는 근력 사이클 앱',
    categories: ['app', 'health'],
    platforms: ['ios', 'android'],
    year: 2026,
    launch: '2026.10',
    status: 'live',
    featured: true,
    thumbnail: `${IMG}/prup/universal.webp`,
    theme: { from: '#18181b', to: '#3f6212', dark: true },
    intro:
      '지금 드는 무게만 입력하면 사이클 목표를 세우고, 스쿼트·벤치·데드리프트·OHP·바벨 로우의 오늘 메인 세트를 알려 주는 앱입니다. Hyson Works는 점진적 과부하를 사람이 계산하지 않아도 되도록 진행 엔진을 설계하고, 영어·한국어로 Google Play에 출시했습니다.',
    sections: [
      {
        title: '무게는 유지하고 횟수를 올리는, 더블 프로그레션',
        body: '100kg×8회에서 9회, 10회로 횟수를 올린 뒤 사이클 마지막 세션에서 무게를 올립니다. 사이클은 날짜가 아니라 세션 수로 세기 때문에 하루를 쉬어도 프로그램이 깨지지 않습니다. 진행 계산은 서버의 테스트된 순수 함수로 두어 앱과 서버의 결과가 항상 같습니다.',
        images: [
          { src: `${IMG}/prup/today.webp`, alt: 'PRUP 오늘의 운동', kind: 'phone' },
          { src: `${IMG}/prup/plan.webp`, alt: 'PRUP 플랜', kind: 'phone' },
          { src: `${IMG}/prup/cycle.webp`, alt: 'PRUP 사이클 설정', kind: 'phone' },
        ],
      },
      {
        title: '빠진 날은 미루고, 기록은 한눈에',
        body: '운동 순서를 드래그로 정하고 데드리프트와 로우처럼 한 자리를 번갈아 쓸 수 있습니다. 웜업 세트 추천, 예상 1RM, kg/lb 전환, 새벽 운동을 전날로 셀 수 있는 하루 시작 시간까지 리프터의 실제 습관에 맞췄습니다. 게스트로 바로 시작하고 나중에 Apple·Google 계정을 연결합니다.',
        images: [
          { src: `${IMG}/prup/history.webp`, alt: 'PRUP 기록', kind: 'phone' },
          { src: `${IMG}/prup/paywall.webp`, alt: 'PRUP Pro', kind: 'phone' },
        ],
      },
    ],
    highlights: [
      '세션 기반 더블 프로그레션 엔진',
      '게스트 시작 → 계정 연결, 3일 무료 후 구독(RevenueCat)',
      '잠금화면 휴식 타이머(Live Activity) 개발 중',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'RevenueCat', 'NestJS', 'Prisma', 'PostgreSQL'],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=kr.hyson.prup',
      website: '/prup',
    },
  },
  {
    slug: 'klow',
    title: 'KLOW',
    subtitle: '해외 바이어를 위한 K-뷰티 크로스보더 커머스',
    categories: ['web', 'commerce', 'b2b'],
    platforms: ['web'],
    year: 2026,
    launch: '2026.06',
    status: 'live',
    featured: true,
    thumbnail: `${KV}/klow.webp`,
    theme: { from: '#ede9fe', to: '#fce7f3' },
    intro:
      '인디 K-뷰티 브랜드가 해외 소비자와 바이어에게 바로 판매할 수 있게 하는 커머스 플랫폼입니다. Hyson Works는 소비자 쇼핑몰, 도매 바이어 공간, 관리자 시스템과 백엔드를 설계하고 개발했습니다. 8개 언어, 국가별 가격, USD 결제와 국제 배송까지 한 흐름으로 연결했습니다.',
    sections: [
      {
        title: '브랜드마다 하나의 스토어, 8개 언어와 현지 가격으로',
        body: '브랜드별 스토어 페이지에서 국가별 가격과 현지 통화를 보여 주고, PayPal을 포함한 해외 결제를 사전 준비 → 검증 → 웹훅 보강 흐름으로 처리합니다. 영어를 단일 원본으로 두고 나머지 7개 언어를 자동 번역해 관리 비용을 줄였습니다.',
        images: [
          { src: `${IMG}/klow/basedon-brand-phone.webp`, alt: 'KLOW 브랜드 스토어', kind: 'plain' },
          { src: `${IMG}/klow/droasislab-product-phone.webp`, alt: 'KLOW 상품 상세', kind: 'plain' },
          { src: `${IMG}/klow/basedon-product-phone.webp`, alt: 'KLOW 상품 페이지', kind: 'plain' },
        ],
      },
      {
        title: '검증된 바이어를 위한 도매 공간',
        body: '바이어 계정과 서류 인증, MOQ 가격, 메이저·인디 브랜드 구분, 10개 샘플 박스, 추천 링크까지 B2B 거래에 필요한 기능을 같은 서비스 안에 만들었습니다. 다국어 SEO 페이지와 직접 번역한 용어집으로 해외 검색 유입을 준비했습니다.',
        images: [{ src: `${IMG}/klow/site.webp`, alt: 'KLOW 도매 사이트', kind: 'browser' }],
      },
      {
        title: '주문부터 정산까지, 운영이 가능한 관리자',
        body: '관리자는 2단계 인증과 초대 기반 계정, 모든 변경에 남는 감사 로그로 보호했습니다. 98개국 × 71개 무게 구간 배송비 표를 엑셀로 주고받고, 배송사 요율표는 AI가 구조만 파악한 뒤 숫자는 셀에서 그대로 읽어 잘못된 값이 들어가지 않게 했습니다.',
        images: [],
      },
    ],
    highlights: [
      '8개 언어, 국가별 가격 엔진, USD 해외 결제',
      'B2B 도매 바이어 공간과 샘플 박스',
      '2단계 인증·감사 로그를 갖춘 운영 관리자',
    ],
    stack: ['Next.js', 'TypeScript', 'NestJS', 'Prisma', 'Neon', 'Cloudflare R2', 'Vercel', 'OpenAI'],
    links: { website: 'https://www.klow.kr' },
  },
  {
    slug: 'irubitteo',
    title: '이루빛터',
    subtitle: '장애인 근로자와 기업을 잇는 근무 관리 플랫폼',
    categories: ['web', 'b2b'],
    platforms: ['web'],
    year: 2026,
    launch: '2026.08',
    status: 'live',
    featured: true,
    thumbnail: `${KV}/irubitteo.webp`,
    theme: { from: '#fff7ed', to: '#fed7aa' },
    intro:
      '장애인 근로자를 위한 맞춤 직무를 설계하고 기업과 연결하는 이루빛터의 웹 플랫폼입니다. Hyson Works는 공개 사이트부터 기업·근로자용 근무 관리, 운영자 백오피스까지 세 계층의 서비스를 설계하고 개발했습니다.',
    sections: [
      {
        title: '누구나 쉽게 쓰는 출퇴근',
        body: '근로자는 비밀번호 없이 8자리 코드로 로그인하고, 큰 글씨 화면에서 오늘 할 일을 확인하며 출근합니다. 퇴근할 때는 업무 요약과 사진을 남깁니다. 아이폰 사진(HEIC)도 그대로 올릴 수 있도록 처리해 사용 중 막히는 순간을 줄였습니다.',
        images: [
          { src: `${IMG}/irubitteo/hero-mid.webp`, alt: '이루빛터 메인', kind: 'browser' },
          { src: `${IMG}/irubitteo/mobile-centered-cal.webp`, alt: '이루빛터 기업 관리자 달력', kind: 'browser' },
        ],
      },
      {
        title: '기업과 운영자를 위한 자동화된 관리',
        body: '지각·조퇴는 자동으로 판단하고, 매일 밤 공휴일을 제외한 결근을 일괄 처리합니다. 기록을 수정하려면 사유를 남겨야 하고 모든 변경은 감사 로그로 남습니다. 운영자는 기업·근로자 관리, 근무 통계, 엑셀·PDF 보고서, 콘텐츠 관리를 한 곳에서 처리합니다.',
        images: [{ src: `${IMG}/irubitteo/admin.webp`, alt: '이루빛터 관리자 콘텐츠 관리', kind: 'browser' }],
      },
    ],
    highlights: [
      '8자리 코드 로그인과 큰 글씨의 접근성 중심 출퇴근',
      '지각·조퇴·결근 자동 처리와 감사 로그',
      '공개 사이트 CMS, 보고서 엑셀·PDF 내보내기',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'NestJS', 'Prisma', 'Supabase', 'Railway', 'Vercel'],
    links: { website: 'https://www.irubitteo.com' },
  },
  {
    slug: 'withski',
    title: '스키동행',
    subtitle: '스키장 가는 길을 함께하는 카풀 매칭 서비스',
    categories: ['web', 'community'],
    platforms: ['web'],
    year: 2026,
    launch: '2026.10',
    status: 'beta',
    featured: true,
    thumbnail: `${KV}/withski.webp`,
    theme: { from: '#e0f2fe', to: '#f8fafc' },
    intro:
      '운전자가 스키장 가는 차를 올리면 탑승자가 자리를 신청하고, 기름값과 통행료를 탄 사람끼리 나누는 웹 서비스입니다. Hyson Works는 규칙·상태·API 문서를 먼저 정리하는 방식으로 기획부터 배포까지 진행해 withski.com을 열었습니다.',
    sections: [
      {
        title: '로그인 없이 둘러보고, 조건으로 찾는 빈자리',
        body: '스키장·날짜·출발지·만나는 방식으로 필터링하고 출발 시간이나 거리순으로 정렬합니다. 차를 올리는 과정은 단계별 입력으로 나눴고, 1–2박 함께 놀기 일정은 숙소 정보와 1인 예상 비용까지 보여 줍니다. 스키장별 SEO 페이지와 빈자리 알림 대기열도 준비했습니다.',
        images: [
          { src: `${IMG}/withski/site.webp`, alt: '스키동행 메인', kind: 'browser' },
          { src: `${IMG}/withski/home.webp`, alt: '스키동행 빈자리 목록', kind: 'browser' },
        ],
      },
      {
        title: '역할마다 다른 상태, 안전한 연락처 공개',
        body: '운전자·탑승자·둘러보는 사람의 역할별로 출발 확정, 취소, 탑승자 제외, 노쇼 신고를 상태 머신으로 정의했습니다. 전화번호는 확정된 뒤에만 공개하고, 카카오 로그인과 문자 인증, 카카오톡 알림으로 연락 흐름을 이어 줍니다.',
        images: [],
      },
    ],
    highlights: [
      '문서 우선(규칙·상태 머신·API) 개발 방식',
      '역할 기반 상태 머신과 확정 후 연락처 공개',
      'Cloudflare Workers + Lightsail 서울 서버 배포',
    ],
    stack: ['Next.js', 'React', 'Cloudflare Workers', 'NestJS', 'Prisma', 'PostgreSQL', 'GitHub Actions'],
    links: { website: 'https://withski.com' },
  },
  {
    slug: 'klow-brand',
    title: 'KLOW Brand',
    subtitle: 'K-뷰티 브랜드의 해외 진출을 돕는 브랜드 스튜디오',
    categories: ['web', 'commerce', 'b2b'],
    platforms: ['web'],
    year: 2026,
    launch: '2026.07',
    status: 'live',
    thumbnail: `${KV}/klow-brand.webp`,
    theme: { from: '#e0e7ff', to: '#f5f3ff' },
    intro:
      '월 구독 하나로 해외 배송, 현지 통화 결제 스토어, 인플루언서 시딩, 해외 바이어 노출까지 제공하는 브랜드용 셀프 서비스입니다. Hyson Works는 브랜드가 혼자서도 해외 판매를 시작할 수 있도록 상품·배송·결제·마케팅 도구를 하나의 스튜디오로 만들었습니다.',
    sections: [
      {
        title: '가입부터 상품 등록, 스토어 디자인까지',
        body: '문자 인증이나 Google로 가입하고, 상품을 등록하면 다국어로 자동 번역되며 필요한 부분만 직접 고칠 수 있습니다. 스토어 디자인, 프로모션, 고객 관리, Instagram 댓글 → DM 자동화까지 브랜드가 직접 운영합니다.',
        images: [
          { src: `${IMG}/klow-brand/home-stats.webp`, alt: 'KLOW Brand 대시보드', kind: 'browser' },
          { src: `${IMG}/klow-brand/design-brand.webp`, alt: 'KLOW Brand 스토어 디자인', kind: 'browser' },
        ],
      },
      {
        title: '국제 배송과 정기 결제를, 자동으로',
        body: '엑셀 수령인 목록으로 국제 운송장을 한 번에 만들고, 브랜드마다 다른 엑셀 양식은 AI가 열을 알아봅니다. 카드 정기 결제는 등록·첫 결제·승인을 한 트랜잭션으로 묶고 0·1·3·7일 재시도까지 자동화했습니다. Cafe24 주문 연동과 3PL 재고 관리도 지원합니다.',
        images: [
          { src: `${IMG}/klow-brand/bulk-new.webp`, alt: 'KLOW Brand 대량 운송장', kind: 'browser' },
          { src: `${IMG}/klow-brand/inventory.webp`, alt: 'KLOW Brand 재고 관리', kind: 'browser' },
        ],
      },
    ],
    highlights: [
      '자동 번역 + 수동 보정 상품 관리',
      'AI 엑셀 열 인식 대량 국제 운송장',
      '카드 정기 결제와 자동 재시도, Cafe24 연동',
    ],
    stack: ['Next.js', 'TypeScript', 'NestJS', 'Prisma', 'Neon', 'Meta API', 'OpenAI', 'Vercel'],
    links: { website: 'https://brand.klow.kr' },
  },
  {
    slug: 'youngcosmed',
    title: 'Young Cosmed',
    subtitle: 'K-뷰티 의료미용 제품 B2B 플랫폼',
    categories: ['web', 'commerce', 'b2b'],
    platforms: ['web'],
    year: 2026,
    launch: '2026.07',
    status: 'live',
    thumbnail: `${KV}/youngcosmed.webp`,
    theme: { from: '#f0fdfa', to: '#f5f5f4' },
    intro:
      '한국 의료미용·화장품 브랜드를 해외 도매 바이어에게 소개하는 B2B 카탈로그와 문의 플랫폼입니다. Hyson Works는 브랜드·제품 카탈로그, 브랜드별 AI 영업 상담, 문의와 인보이스 관리까지 영업팀이 실제로 쓰는 흐름을 웹으로 옮겼습니다.',
    sections: [
      {
        title: '브랜드를 소개하고, AI가 먼저 상담합니다',
        body: '브랜드·제품을 인증과 카테고리, 후기와 함께 보여 주고, 브랜드마다 AI 영업 상담을 붙였습니다. 상담 프롬프트는 그 브랜드의 제품과 인증 정보로 만들어지고 가격은 말하지 않으며, 영업팀 연결이 필요하면 문의 폼을 바로 엽니다.',
        images: [
          { src: `${IMG}/youngcosmed/site.webp`, alt: 'Young Cosmed 메인', kind: 'browser' },
          { src: `${IMG}/youngcosmed/landing-3.webp`, alt: 'Young Cosmed 이미지', kind: 'plain' },
        ],
      },
      {
        title: '문의부터 인보이스까지, 영업 업무를 한 곳에서',
        body: 'WhatsApp·이메일 등 연락 수단과 국가 코드를 받는 문의를 상태별로 관리하고, 메시지 스레드로 이어 갑니다. 견적(PI)과 상업 송장(CI)은 회사 직인을 넣은 PDF와 엑셀로 만들고, 저장한 바이어 정보를 다시 쓸 수 있습니다.',
        images: [],
      },
    ],
    highlights: [
      '브랜드별 AI 영업 상담(가격 비공개, 문의 연결)',
      'PI/CI PDF·엑셀 자동 생성',
      '드래그 정렬이 가능한 브랜드 관리자',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'NestJS', 'Prisma', 'PostgreSQL', 'OpenAI'],
    links: { website: 'https://youngcosmed.com' },
  },
  {
    slug: 'ggumteul-math',
    title: '꿈틀매쓰',
    subtitle: 'AI가 약점을 찾아 주는 초등 수학 게이미피케이션 앱',
    categories: ['app', 'education'],
    platforms: ['ios', 'android'],
    year: 2026,
    launch: '2026.06',
    status: 'live',
    thumbnail: `${KV}/ggumteul-math.webp`,
    theme: { from: '#ecfccb', to: '#fef9c3' },
    intro:
      '초등 1–3학년을 위한 수학 앱입니다. 문제를 맞힐수록 꿈틀이가 한 칸씩 올라가 나비가 됩니다. Hyson Works는 학습 앱이 지루하고 게임 앱은 배울 게 적다는 문제를, 게임 요소와 AI 학습 진단을 함께 넣는 방식으로 풀었습니다.',
    sections: [
      {
        title: '한 문제씩, 꿈틀이가 나비가 될 때까지',
        body: '교육과정의 개념과 단계 순서로 학습을 이어 가고, 정답을 맞힐 때마다 꿈틀이가 올라가는 진행 메타포로 동기를 줍니다. 모은 코인으로 꿈틀이 옷과 방 가구를 꾸미고, 화면별 배경음과 햅틱으로 손맛을 더했습니다.',
        images: [
          { src: `${IMG}/ggumteul-math/adventure.webp`, alt: '꿈틀매쓰 모험', kind: 'plain' },
          { src: `${IMG}/ggumteul-math/reward.webp`, alt: '꿈틀매쓰 보상', kind: 'plain' },
          { src: `${IMG}/ggumteul-math/shop.webp`, alt: '꿈틀매쓰 상점', kind: 'plain' },
        ],
      },
      {
        title: 'AI가 아이의 지식 상태를 읽고, 다음 문제를 고릅니다',
        body: '진단 평가로 강점과 약점을 찾고, 딥 지식 추적(DKT) 모델이 매 세션 아이의 지식 상태를 추정해 추천 문제 5개를 고릅니다. 1,865개 지식 태그를 기술 단위로 묶어 모델 서버를 따로 운영합니다.',
        images: [
          { src: `${IMG}/ggumteul-math/visual-problem.webp`, alt: '꿈틀매쓰 그림 문제', kind: 'plain' },
          { src: `${IMG}/ggumteul-math/report.webp`, alt: '꿈틀매쓰 리포트', kind: 'plain' },
        ],
      },
    ],
    highlights: [
      '정답마다 성장하는 꿈틀이 진행 메타포',
      'DKT 모델 기반 맞춤 문제 추천',
      '코인 상점과 꾸미기 보상 시스템',
    ],
    stack: ['React Native', 'Expo', 'Zustand', 'TanStack Query', 'NestJS', 'Prisma', 'FastAPI', 'TensorFlow'],
    links: {
      appStore:
        'https://apps.apple.com/kr/app/%EA%BF%88%ED%8B%80%EB%A7%A4%EC%93%B0-%EC%B4%88%EB%93%B1-%EC%88%98%ED%95%99%ED%95%99%EC%8A%B5-%ED%94%8C%EB%9E%AB%ED%8F%BC/id6763516927',
      website: '/ggumteul-math',
    },
  },
  {
    slug: 'pibugom',
    title: '피부곰',
    subtitle: '피부 고민을 묻고 답하는 커뮤니티 앱',
    categories: ['app', 'community', 'health'],
    platforms: ['ios', 'android'],
    year: 2026,
    launch: '2026.04',
    status: 'live',
    thumbnail: `${KV}/pibugom.webp`,
    theme: { from: '#fef3c7', to: '#d1fae5' },
    intro:
      '피부 고민을 올리면 다른 사용자와 전문가가 답하고, 관심사가 같은 사람들과 실시간으로 이야기하는 커뮤니티 앱입니다. Hyson Works는 질문·답변과 실시간 채팅, 피부 습관 자가진단까지 기획부터 출시, 운영 관리자까지 만들었습니다.',
    sections: [
      {
        title: '묻고 답하고, 실시간으로 이야기하는 곳',
        body: '카테고리별 질문과 익명 답변, 인기 질문, 북마크, 검색을 제공합니다. Socket.io 기반 채팅방에서는 방장과 관리자가 방을 만들고 강퇴·차단을 관리하며, 읽음 상태를 클라이언트 캐시와 함께 맞춰 목록과 대화가 어긋나지 않게 했습니다.',
        images: [{ src: '/images/apps/pibugom.png', alt: '피부곰', kind: 'icon' }],
      },
      {
        title: '나의 피부를 알아가는 온보딩',
        body: '나이·성별·피부 고민·스킨케어 루틴을 묻는 온보딩과 피부 습관 자가진단으로 결과와 팁을 보여 줍니다. 도움을 많이 준 사용자는 랭킹과 전문가 배지로 드러나고, 신고·차단과 관리자 페이지로 커뮤니티를 안전하게 운영합니다.',
        images: [],
      },
    ],
    highlights: [
      '질문·익명 답변·인기 질문 커뮤니티',
      'Socket.io 실시간 채팅방과 권한 관리',
      '피부 습관 자가진단, 랭킹·전문가 배지',
    ],
    stack: ['React Native', 'Expo', 'Zustand', 'TanStack Query', 'NestJS', 'Prisma', 'Neon', 'Socket.io'],
    links: {
      appStore:
        'https://apps.apple.com/kr/app/%ED%94%BC%EB%B6%80%EA%B3%B0-%ED%94%BC%EB%B6%80-%EA%B3%A0%EB%AF%BC-%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0/id6760972457',
      website: '/pibugom',
    },
  },
  {
    slug: 'hymo',
    title: 'Hymo',
    subtitle: '메모·채팅·서버 모니터를 담은 macOS 개발자 도구',
    categories: ['mac'],
    platforms: ['macos'],
    year: 2026,
    launch: '2026.03',
    status: 'live',
    thumbnail: `${KV}/hymo.webp`,
    theme: { from: '#e0e7ff', to: '#ede9fe' },
    intro:
      '유리 질감의 macOS 앱으로, 메모 카드와 실시간 채팅방, 로컬에서 포트를 점유한 서버를 찾아 종료하는 모니터를 한 창에 담았습니다. Hyson Works가 매일 쓰는 도구를 직접 만들고, 서명·공증·자동 업데이트까지 갖춰 hyson.kr에서 배포합니다.',
    sections: [
      {
        title: '개발하면서 자주 여는 것들을, 한 창에',
        body: '크기를 조절할 수 있는 메모 카드, 코드로 들어가는 채팅방, 열려 있는 TCP 포트를 찾아 바로 종료하는 서버 탭을 제공합니다. 채팅은 Socket.io 클라이언트를 Swift로 직접 구현해 외부 의존성을 줄였습니다.',
        images: [{ src: '/images/apps/hymo.png', alt: 'Hymo', kind: 'icon' }],
      },
      {
        title: 'App Store 밖에서도, 안전하게 업데이트',
        body: 'Developer ID 서명과 공증, EdDSA 서명이 들어간 Sparkle 자동 업데이트를 적용했습니다. 릴리스 스크립트 하나로 zip·dmg·appcast를 만들고 사이트에 배포해, 새 버전이 나오면 앱이 알아서 업데이트합니다.',
        images: [],
      },
    ],
    highlights: [
      '메모·채팅·포트 모니터를 한 창에 담은 SwiftUI 앱',
      'Swift로 직접 구현한 Socket.io 클라이언트',
      '서명·공증과 Sparkle 자동 업데이트 배포',
    ],
    stack: ['SwiftUI', 'macOS', 'Sparkle', 'NestJS', 'Socket.io', 'Prisma'],
    links: { download: '/downloads/hymo_app.dmg' },
  },
  {
    slug: 'linkjob',
    title: 'LinkJob',
    subtitle: '외국인 구직자와 기업을 잇는 구인구직 앱',
    categories: ['app', 'b2b'],
    platforms: ['ios', 'android'],
    year: 2025,
    launch: '2025.08',
    status: 'ended',
    thumbnail: `${KV}/linkjob.webp`,
    theme: { from: '#e0f2fe', to: '#dbeafe' },
    intro:
      '한국에서 일자리를 찾는 외국인과 외국인 인재가 필요한 기업을 연결하는 앱입니다. Hyson Works는 14개 언어, 위치 기반 공고 추천, E-7 비자 조건 매칭, 음성 한국어 테스트까지 구직자와 기업 양쪽의 흐름을 설계하고 개발했습니다.',
    sections: [
      {
        title: '내 주변 공고를, 내 언어로',
        body: '구직자 위치와 회사 위치의 실제 거리를 서버에서 계산해 30km 이내 공고를 보여 주고, 5km 이내는 가까운 공고로 표시합니다. 거리·최신·급여·직무순 정렬과 14개 언어 UI로 한국어가 서툰 구직자도 쉽게 찾을 수 있게 했습니다.',
        images: [{ src: `${IMG}/linkjob/company1.webp`, alt: 'LinkJob 인재 목록', kind: 'plain' }],
      },
      {
        title: '비자 조건 매칭과 음성 한국어 테스트',
        body: '구직자의 E-7 직종 코드와 공고 직종이 겹치면 양쪽에 자동으로 알림을 보내는 양방향 매칭을 만들었습니다. 기업은 음성 녹음 기반 한국어 테스트로 실제 회화 능력을 확인하고, 구직자는 직무별 모의 테스트로 연습합니다.',
        images: [],
      },
    ],
    highlights: [
      '14개 언어와 GPS 기반 공고 추천',
      'E-7 직종 코드 양방향 자동 매칭',
      '음성 녹음 기반 한국어 테스트',
    ],
    stack: ['React Native', 'Expo', 'NativeWind', 'Zustand', 'Node.js', 'Express', 'Supabase', 'Naver Map'],
    links: {},
  },
];

export const categoryLabels: Record<ProjectCategory, string> = {
  app: 'Mobile App',
  web: 'Web',
  mac: 'macOS',
  commerce: 'Commerce',
  health: 'Health',
  education: 'Education',
  community: 'Community',
  b2b: 'B2B · SaaS',
};

export const categories = Object.keys(categoryLabels) as ProjectCategory[];

export const getProjects = (): Project[] => projects;

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);

export const getProjectsByCategory = (category: ProjectCategory | 'all'): Project[] =>
  category === 'all' ? projects : projects.filter((project) => project.categories.includes(category));

export const getFeaturedProjects = (): Project[] => projects.filter((project) => project.featured);

export const getAdjacentProject = (slug: string): Project => {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
};

/** 카드 메타 — "모바일 앱 · 2026" */
export const getProjectKind = (project: Project): string => {
  if (project.platforms.includes('ios') || project.platforms.includes('android')) return '모바일 앱';
  if (project.platforms.includes('macos')) return 'macOS 앱';
  return '웹 서비스';
};
