import { Program } from './types';

export const programs: Program[] = [
  {
    id: 'hymo',
    name: 'Hymo',
    description: 'macOS에서 빠르게 메모를 작성하고 정리할 수 있는 경량 메모 앱',
    longDescription:
      '메모 생성/삭제, 고정(Pin), 접기(Collapse), 드래그 정렬, 카드 높이 조절, 로그인 시 자동 실행 설정을 지원합니다.',
    platform: 'macos',
    downloadPath: '/downloads/hymo_app.dmg',
    status: 'available',
    tags: ['macOS', 'SwiftUI', 'Memo'],
    image: '/images/apps/hymo.png',
  },
];

export const getAvailablePrograms = (): Program[] =>
  programs.filter((program) => program.status === 'available');
