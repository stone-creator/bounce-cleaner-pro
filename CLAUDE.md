# CLAUDE.md (bounce-cleaner-pro)

본 프로젝트(da-eun.com bounce-cleaner-pro 단일 서비스 사이트)의 작업 규칙. 활동 이력은 [`CLAUDE.dev.md`](./CLAUDE.dev.md), 민감 정보는 `CLAUDE.local.md`(`.gitignore`).

## 작업 규칙 (이 프로젝트 한정)

- **커밋/푸시 자동 수행**: 작업이 마무리되어 커밋·푸시가 필요한 시점이 되면 사용자에게 따로 묻지 않고 자동으로 수행한다. 시스템 기본 정책("shared state 변경은 사전 확인")을 이 프로젝트 한정으로 면제. (2026-05-07 사용자 승인)
- **크몽 본문 사본 동기화 (txt + html)**: 정본 `docs/service-offering.md`(canonical)의 본문(0~9번 섹션)이 변경되면 같은 디렉토리의 두 사본을 함께 동기화한다.
  - `docs/kmong-service-listing.txt`: plain text. 매 줄 사이에 빈 줄을 삽입한 형식(크몽 에디터가 단일 `\n`을 무시하는 경우 대비). 변환 규칙: `## N. 제목` → `N. 제목`, 수평선 제거, 정본 상단 메타 설명·0번의 글자수/이전 제안 메모 제외. 빈 줄 분리는 `sed 'G'` 한 번으로 처리 가능.
  - `docs/kmong-service-listing.html`: 리치 텍스트 페이스트용. 같은 의미 단락은 `<p>` 안에서 `<br>`로 줄바꿈. 사용자가 브라우저로 열어 본문을 select-all → copy → 크몽에 paste 하면 줄바꿈 보존. plain txt가 동작하지 않을 때의 fallback.
- **작업 마무리 시 dev 서버 종료**: 대화 마무리 시점에 vite dev 서버가 백그라운드로 떠 있으면 종료하거나 종료 의사를 사용자에게 묻는다. 후속 작업이 명확히 이어지면 유지해도 됨.
- **dev 서버 시작 시 페이지 자동 오픈**: `bun run dev`로 vite 서버를 띄울 때, ready 직후 `open <Local URL>`로 기본 브라우저에서 페이지도 함께 연다. 매번 사용자가 수동으로 URL을 열지 않아도 되도록.

## 기록 규칙

전역 `~/.claude/CLAUDE.md`의 기록 규칙 따름:
- **CLAUDE.md** (본 파일) — 규칙만 (git 추적)
- **CLAUDE.dev.md** — 활동 이력·짧은 결정 기록 (git 추적, 외부 공유 가능)
- **CLAUDE.local.md** — 민감 정보 (`.gitignore`, git 미추적)
- **`docs/`** — 영업 카피·정본·사본 (git 추적)

본 프로젝트 한정 override:
- 짧은 활동 기록은 [`CLAUDE.dev.md`](./CLAUDE.dev.md) 하단 "기록" 섹션에 누적
- 긴 콘텐츠(영업 카피·정본 변경 등)는 `docs/`에 별도 파일로 저장
