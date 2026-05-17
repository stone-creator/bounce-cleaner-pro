# CLAUDE.dev.md (bounce-cleaner-pro)

민감하지 않은 프로젝트 활동·이력·결정 기록 (git 추적, 외부 공유 가능).

전역 `~/.claude/CLAUDE.md`의 기록 규칙을 따르되, 본 프로젝트 한정으로 *짧은 활동 기록은 본 파일 하단 "기록"에 누적*. 긴 콘텐츠는 `docs/` 폴더에 별도 파일로 저장.

## 기록

- 2026-05-06: 카피 톤 전환 — "차단 없이 발송"(USP) → "리스트 진단·정리·자산화"(USP). 차단 회피는 수단/결과로 강등. 정본은 `docs/kmong_service_description.md` (v2가 정본으로 승격, 이전 버전은 `kmong_service_description_v1_archive.md`로 보존). 크몽/다은 홈페이지/Lovable 랜딩은 이 문서 기준으로 동기화.
- 2026-05-06: 크몽 제목 변경 — `이메일 리스트 정리 + 차단 없는 발송 서버 임대` (27자). 이전 제안한 `대량 이메일 바운스 정리·리스트 관리 - 차단 없는 발송 서버 임대`(37자)는 크몽 제목 30자 한계 초과로 폐기. 원래 제목은 `대량 이메일 발송 서버 임대 - 계정 차단 없음`. 정본 문서 0번 섹션 참조.
- **크몽 제목 30자 한계** — 새 제목/카피 작성 시 반드시 준수.
- 2026-05-06: 정본(v2) 기준 동기화 완료 — `docs/daeun_homepage_tiddlywiki.tid` 전체 갱신, `src/components/`의 Hero/Bounce/Problem/Service/Pricing/FAQ/CTA 섹션 카피 갱신, `index.html`의 title·description·og 메타 갱신. 크몽 본문은 별도 수동 입력 필요.
- 2026-05-07: 웜업 섹션 신설 — 정본 5번에 "웜업이란?" 섹션 추가(기존 5~8번을 6~9번으로 밀기). 핵심 메시지: 인프라가 자동 처리하지만 첫 회차 발송량이 의도적으로 적다는 양해 요청. "월 약 200만건" 수치는 비현실적이라 웜업 섹션에서는 "안정적인 규모"로 톤다운(FAQ의 200만건은 그대로 유지). 동기화: `docs/daeun_homepage_tiddlywiki.tid`(서비스 소개와 패키지 사이), `src/components/WarmupSection.tsx` 신규 생성, `src/pages/Index.tsx`에 ServiceSection과 PricingSection 사이 삽입. 크몽 본문은 별도 수동 입력 필요.
- 2026-05-07: 작업 규칙 섹션 신설 — 커밋/푸시 자동 수행 권한 명시(`CLAUDE.md`의 "작업 규칙" 참조).
- 2026-05-07: 크몽 본문 plain text 사본 생성 — `docs/kmong_service_description.txt` (크몽 입력란이 md 미지원). 정본 md 변경 시 txt 동기화 규칙은 `CLAUDE.md`의 "작업 규칙" 참조.
- 2026-05-07: 크몽 페이스트 줄바꿈 문제 대응 — txt를 빈 줄 분리 형식으로 갱신, `kmong_service_description.html` 추가(리치 텍스트 페이스트용 fallback). 동기화 규칙 갱신은 `CLAUDE.md`의 "작업 규칙" 참조.
- 2026-05-07: 작업 규칙 추가 — dev 서버 시작 시 페이지 자동 오픈(`CLAUDE.md`의 "작업 규칙" 참조).
- 2026-05-07: 작업 규칙 추가 — 마무리 시 dev 서버 종료(`CLAUDE.md`의 "작업 규칙" 참조).
- 2026-05-18: docs/ 파일 이름 통일 — `kmong_service_description.{md,txt,html}` → `service-offering.md` + `kmong-service-listing.{txt,html}` (work-tree 컨벤션 정렬 — `~/work/services/*/docs/service-offering.md` canonical 패턴과 일치). `_v1_archive.md` → `service-offering-v1-archive.md`. 동기화 규칙 섹션 + src/pages/Index.tsx 상단 canonical 주석 추가.
- 2026-05-18: `docs/`를 git 추적으로 전환 — `.gitignore`에서 제거. 민감 정보 검출 0건(영업 카피·외부 공개 가격·archive만 존재). 사고 복구 가능성 + `~/work/services/_shared/` ADR-0001 lock-in 0 약속 정합성 확보. lovable은 `src/`만 sync하므로 docs/ git 추적이 lovable 동기화에 영향 없음.
- 2026-05-18: CLAUDE.{md,dev.md,local.md} 컨벤션 정렬 — 전역 `~/.claude/CLAUDE.md` 기록 규칙 따름. `CLAUDE.md`는 *규칙만* 담고 git 추적 (`.gitignore`에서 제거). 활동 이력은 본 파일(`CLAUDE.dev.md`, git 추적)로 분리. 민감 정보 발생 시 `CLAUDE.local.md`(`.gitignore`). 다른 work tree(email-bulk·server-ops)와 일관.
