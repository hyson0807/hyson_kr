# 앱 데이터 구조 (app/data/)

## App 인터페이스
```typescript
interface App {
  id: string;              // URL hash용 (isolog, linkjob)
  title: string;
  description: string;     // 짧은 설명
  longDescription?: string; // 상세 설명
  tags: string[];
  status: AppStatus;       // 'released' | 'coming_soon' | 'development'
  platforms: Platform[];   // 'ios' | 'android' | 'web'
  projectType: ProjectType; // 'internal' | 'collaboration'
  image: string;
  storeLinks: StoreLinks;
}
```

## 헬퍼 함수
- `getInternalApps()` - 내부 프로젝트만
- `getCollaborationApps()` - 협업 프로젝트만
- `getReleasedApps()` - 출시된 앱만
- `getAppById(id)` - ID로 앱 찾기