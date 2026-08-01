# 앱 데이터 구조 (app/data/)

## App 인터페이스
```typescript
interface App {
  id: string;              // URL hash용 (isolog, linkjob, irubitteo)
  title: string;
  description: string;     // 짧은 설명
  longDescription?: string; // 상세 설명
  tags: string[];
  status: AppStatus;       // 'released' | 'coming_soon' | 'development'
  platforms: Platform[];   // 'ios' | 'android' | 'web'
  projectType: ProjectType; // 'internal' | 'collaboration'
  image: string;
  storeLinks: StoreLinks;  // appStore?, playStore?, website?
}
```

## 헬퍼 함수
- `getInternalApps()` - 내부 프로젝트만
- `getCollaborationApps()` - 협업 프로젝트만
- `getReleasedApps()` - 출시된 앱만
- `getAppById(id)` - ID로 앱 찾기

## hydo-notices.ts — hydo 앱 공지사항

이 사이트가 그리는 데이터가 아니다. **hydo iOS 앱이 읽어 가는 콘텐츠**다
(`/api/hydo/notices` 라우트가 이 배열을 필터링해서 내보낸다).

`index.ts` 로 **re-export 하지 않는다** — 하면 모든 페이지 번들에 딸려 간다.
라우트 핸들러만 직접 import 한다.

```typescript
type HydoNotice = {
  id: string;           // 앱이 "봤음"을 기록하는 키. 배포 후 절대 바꾸지 말 것
  title: string;
  body: string;         // 평문. 줄바꿈은 \n (마크다운·HTML 안 먹는다)
  publishedAt: string;  // 이 시각부터 노출. KST 오프셋 허용
  expiresAt?: string;   // 이 시각부터 숨김. 대부분 넣을 것
  minVersion?: string;  // 이 앱 버전 이상에만
  maxVersion?: string;  // 이 앱 버전 미만에만
};
```

공지 발행 = 배열에 항목 추가 + `main` push. 상세는 파일 맨 위 주석에 있다.