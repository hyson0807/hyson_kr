# HYSON_KR

Hyson Works 공식 사이트(Next.js App Router)입니다.

## Routes

- `/` Home
- `/about` About
- `/projects` Apps
- `/programs` Programs 다운로드
- `/contact` Contact

## Programs 다운로드 관리

프로그램 목록은 `app/data/programs.ts`에서 관리합니다.

새 프로그램 추가 절차:

1. 설치 파일을 `public/downloads`에 추가합니다.
2. `app/data/programs.ts`에 새 항목을 추가합니다.
3. 필요하면 `app/data/types.ts`의 타입을 확장합니다.

`/programs` 페이지는 데이터 기반으로 렌더링되므로, `programs.ts`에 항목을 추가하면 자동으로 반영됩니다.

## Development

```bash
npm run dev
```

## Quality

```bash
npm run lint
npm run build
```
