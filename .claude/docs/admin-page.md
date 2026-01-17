# IsoLog 관리자 페이지

## 개요
- **경로**: `/admin2129`
- **목적**: IsoLog 앱 정보탭에 표시될 콘텐츠의 검증(verify) 및 관리
- **앱 프로젝트 경로**: `../IsoLog/`

---

## 콘텐츠 흐름

```
크롤링된 콘텐츠 → DynamoDB 저장 → 관리자 페이지에서 Verify → 앱 정보탭에 표시
```

- 관리자 페이지에서 **인증(verify)된 글만** 앱의 정보탭에 표시됨
- Ban된 콘텐츠는 앱에 표시되지 않음

---

## 인증 시스템

- **방식**: sessionStorage 기반 비밀번호 인증
- **저장 키**: `isolog_admin_auth`
- **API 인증**: Bearer 토큰 (비밀번호를 토큰으로 사용)
- **환경변수**: `ADMIN_PASSWORD`

---

## UI 구조

### 레이아웃 (Split-View)
- **좌측 패널 (50%)**: 콘텐츠 목록 + 인라인 액션 버튼
- **우측 패널 (50%)**: 선택된 콘텐츠 미리보기 + 상세 정보
- **테마**: 다크 (zinc-950 배경)

### 헤더
- 제목: "IsoLog 콘텐츠 관리"
- 통계: 전체 수 | 확인됨 수 | Ban됨 수
- 로그아웃 버튼

### 탭 필터
| 탭 | 설명 |
|------|------|
| 전체 | 모든 콘텐츠 |
| 미확인 | 미확인 + 비Ban 콘텐츠 (언어 필터 제공) |
| 확인됨 | 인증된 콘텐츠만 |
| Ban됨 | 차단된 콘텐츠만 |

### 언어 필터 (미확인 탭 전용)
- **전체**: 모든 언어
- **KO**: 한국어 콘텐츠 (파란색 버튼)
- **EN**: 영어 콘텐츠 (녹색 버튼)

---

## 콘텐츠 데이터 구조

```typescript
interface Content {
  urlHash: string;           // 고유 식별자 (Sort Key)
  url: string;               // 원본 URL
  title: string;             // 제목
  snippet: string;           // 요약/발췌
  source: string;            // 출처
  language: string;          // "ko" 또는 "en"
  contentType: string;       // 콘텐츠 유형
  thumbnailUrl?: string;     // 썸네일 이미지 (선택)
  isBanned?: boolean;        // Ban 상태
  isVerified?: boolean;      // 인증 상태
  createdAt: string;         // 생성 시간 (ISO)
}
```

---

## 액션 버튼

| 액션 | 설명 | API |
|------|------|-----|
| 열기 | 원본 URL을 새 탭에서 열기 | - |
| 확인 (Verify) | 인증 상태 토글 | `POST /api/isolog/verify` |
| Ban | Ban 상태 토글 | `POST /api/isolog/ban` |
| 삭제 | 콘텐츠 영구 삭제 (확인 다이얼로그) | `DELETE /api/isolog/delete` |

---

## API 엔드포인트

### `GET /api/isolog/contents`
- **목적**: 모든 콘텐츠 조회
- **인증**: Bearer 토큰
- **응답**: `{ contents: Content[] }` (createdAt 내림차순)

### `POST /api/isolog/verify`
- **목적**: 콘텐츠 인증 상태 토글
- **요청**: `{ urlHash: string, isVerified: boolean }`
- **동작**:
  - 인증 시: `isVerified=true`, GSI 필드 설정 (`verifiedLanguage`, `publishDate`)
  - 해제 시: `isVerified=false`, GSI 필드 제거

### `POST /api/isolog/ban`
- **목적**: Ban 상태 토글
- **요청**: `{ urlHash: string, isBanned: boolean }`

### `DELETE /api/isolog/delete`
- **목적**: 콘텐츠 영구 삭제
- **요청**: `{ urlHash: string }`

---

## 데이터베이스

- **서비스**: AWS DynamoDB
- **테이블명**: `isolog-curated-contents`
- **Partition Key (PK)**: `"CONTENT"`
- **Sort Key (SK)**: `urlHash`

### GSI 필드 (인증 시 설정)
- `verifiedLanguage`: `"VERIFIED#<language>"` (예: "VERIFIED#ko")
- `publishDate`: 게시일 (publishedAt 또는 createdAt)

### 환경변수
```
AWS_REGION (기본값: us-east-1)
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
ADMIN_PASSWORD
```

---

## 파일 구조

```
app/
├── admin2129/
│   └── page.tsx              # 관리자 페이지 메인 컴포넌트
├── api/isolog/
│   ├── contents/route.ts     # 콘텐츠 조회 API
│   ├── verify/route.ts       # 인증 토글 API
│   ├── delete/route.ts       # 삭제 API
│   └── ban/route.ts          # Ban 토글 API
└── lib/
    └── dynamodb.ts           # DynamoDB 클라이언트 설정
```
