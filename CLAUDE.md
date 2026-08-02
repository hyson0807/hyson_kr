# Hyson Works 회사 소개 페이지 개발 가이드

## 프로젝트 정보
- **회사명**: Hyson Works
- **슬로건**: 꾸준히, 더 나은 앱을 만듭니다
- **이메일**: contact@hyson.kr
- **GitHub**: github.com/hyson0807
- **서비스**: 크로스플랫폼 앱 개발 (React Native)

## 기술 스택
- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4
- shadcn/ui (Radix 베이스) — 컴포넌트는 `components/ui/`, 추가는 `npx shadcn@latest add <name>`

---

## 상세 문서

자세한 내용은 아래 문서를 참고하세요:

| 주제 | 문서 경로 |
|------|-----------|
| 디자인 시스템 (색상, 타이포그래피, 간격) | `.claude/docs/design-system.md` |
| 반응형 규칙 | `.claude/docs/responsive.md` |
| 코딩 컨벤션 (TypeScript, 스타일링, 애니메이션) | `.claude/docs/coding-conventions.md` |
| 폴더 구조 | `.claude/docs/project-structure.md` |
| 앱 데이터 구조 (App 인터페이스, 헬퍼 함수) | `.claude/docs/app-data.md` |
| 페이지별 구성 | `.claude/docs/pages.md` |
| IsoLog 관리자 페이지 (콘텐츠 Verify 시스템) | `.claude/docs/admin-page.md` |

---

## 출시 앱

### 내부 프로젝트
- **IsoLog**: 이소티논 복용자를 위한 스마트 복용 관리 앱 (React Native, iOS, Android)
  - **관리자 페이지**: `/admin2129` - 앱 콘텐츠 verify 페이지 (상세: `.claude/docs/admin-page.md`)
  - **앱 프로젝트 경로**: `../IsoLog/`
  - **콘텐츠 흐름**: 관리자 페이지에서 인증(verify)된 글만 앱의 정보탭에 표시됨
- **피부곰**: 피부 고민 커뮤니티 앱 (React Native, iOS, Android)
- **hydo**: 아이폰 잠금화면에 달력을 띄우는 일정 공유 앱 (SwiftUI, iOS) — 2026-07-28 출시
  - **앱 프로젝트 경로**: `../hydo/hydo-app/`
  - **지원 / 약관 페이지**: `/hydo`, `/hydo/terms`, `/hydo/privacy`
  - **공지사항 피드**: `/api/hydo/notices` — 원본은 `app/data/hydo-notices.ts`.
    항목을 추가하고 push 하면 앱 심사 없이 공지가 나간다 (`id`는 배포 후 변경 금지)

### 참여 프로젝트
- **꿈틀매쓰**: 초등 1~3학년 수학 게이미피케이션 앱 (React Native, iOS)
- **LinkJob**: 외국인 구인구직 플랫폼 (React Native, iOS, Android)
- **이루빛터**: 장애인 근로자와 기업을 매칭하는 웹 플랫폼 (Web)
- **Young Cosmed**: K-Beauty 의료미용 제품 B2B 플랫폼 (Web)
- **KLOW**: 외국인 대상 K-뷰티 이커머스 플랫폼 (Web)
- **KLOW Brand**: K-뷰티 브랜드 글로벌 입점 플랫폼 (Web)

---

## 체크리스트
- [ ] 모바일(375px) / 태블릿(768px) / 데스크톱(1024px+) 확인
- [ ] 호버 효과 + 트랜지션 적용
- [ ] 색상 팔레트 준수
- [ ] TypeScript 타입 정의
- [ ] 앱 스토어 링크 연결

---

**업데이트**: 2026-03-05