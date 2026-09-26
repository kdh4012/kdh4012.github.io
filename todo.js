/**
 * 경력기술서 TODO 패널 — 로컬·GitHub Pages 모두 표시
 * - 제출 전: index.html의 todo.js <script> 줄과 이 파일 삭제
 * - 항목 추가/삭제: 아래 PORTFOLIO_TODO 배열만 수정
 * - 체크 상태는 브라우저(localStorage)에 저장됨
 */
const PORTFOLIO_TODO = [
  {
    group: "A. 정량 수치 (대략값도 OK) — 최우선",
    items: [
      "딜러사·지점 수 (BMW 7개 그룹 / VW·아우디 / JLR 각각)",
      "시스템 사용자 수 (SC·팀장·회계 담당 등)",
      "월 계약 건수, 월 수납(입금/지급) 건수",
      "배치 처리 건수 (아마란스 I/F 일 평균)",
      "카카오 알림톡 월 발송 건수, 알림톡 vs SMS Fallback 비율",
      "알림톡 전환 비용 절감 (SMS 단가 vs 알림톡 단가 × 월 건수)",
      "팀 인원 구성과 본인 담당 비중 (예: Sales 모듈 N개 중 M개)",
    ],
  },
  {
    group: "B. 기능별 성과",
    items: [
      "방문객 등록(BMW 2023): 등록 소요시간 변화, 월 등록 건수, 키오스크 도입 지점 수",
      "KCP: 월 카드결제·가상계좌 건수, 도입 전 결제 방식과 비교",
      "2023 BMW 운영기간 추가개발 (방문객 등록 외 2~3개)",
      "2025~ VW 운영기간 추가개발 (KCP·FI·알림톡 외 1~2개)",
    ],
  },
  {
    group: "C. 사실 확인",
    items: [
      "BMW 딜러 프로모션 — KR 프로모션과 차이",
      "롯데오토케어 — Tibero 전환 때 수정한 쿼리/함수 유형, 순회정비 기능 단위",
      "배치 기술 (Spring Batch / Quartz / @Scheduled / 기타)",
      "형상관리 (Git / SVN), 빌드·배포 도구 (Jenkins 등)",
      "알림톡 연동 방식 (직접 연동 / 비즈메시지 대행사명)",
    ],
  },
  {
    group: "D. 문제 해결 사례 (상황 → 원인 → 해결 → 결과)",
    items: [
      "KCP 가상계좌 다건 Webhook — 중복 수신/순서 역전 처리 (멱등성)",
      "동시성 이슈 — 대상 데이터, 원인, 해결 방식(락/버전 체크)",
      "배치 이슈 — 실패·재처리·회계 불일치",
      "개소세 변동 — 기존 계약 금액 반영 방법",
    ],
  },
];

(function () {
  const STORE_KEY = "portfolio-todo-done";

  // 체크 상태 로드/저장 (file:// 환경에서 storage가 막혀도 동작하도록 try/catch)
  const load = () => {
    try { return new Set(JSON.parse(localStorage.getItem(STORE_KEY) || "[]")); } catch (e) { return new Set(); }
  };
  const save = (set) => {
    try { localStorage.setItem(STORE_KEY, JSON.stringify([...set])); } catch (e) {}
  };
  const done = load();

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // ---------- 스타일 (사이트 data-theme 에 맞춰 라이트/다크 대응) ----------
  const css = `
    .todo-fab, .todo-panel {
      --td-bg: #18181b; --td-fg: #f4f4f5; --td-muted: #a1a1aa; --td-line: rgba(255,255,255,.12); --td-accent: #60a5fa;
    }
    :root[data-theme="light"] .todo-fab, :root[data-theme="light"] .todo-panel {
      --td-bg: #ffffff; --td-fg: #18181b; --td-muted: #71717a; --td-line: rgba(0,0,0,.12); --td-accent: #2563eb;
    }
    @media (prefers-color-scheme: light) {
      :root:not([data-theme="dark"]) .todo-fab, :root:not([data-theme="dark"]) .todo-panel {
        --td-bg: #ffffff; --td-fg: #18181b; --td-muted: #71717a; --td-line: rgba(0,0,0,.12); --td-accent: #2563eb;
      }
    }
    .todo-fab {
      position: fixed; right: 20px; bottom: 20px; z-index: 1000;
      padding: 10px 16px; border-radius: 999px; border: 1px solid var(--td-line);
      background: var(--td-bg); color: var(--td-fg); font-size: 14px; font-weight: 600; line-height: 1; font-family: inherit;
      box-shadow: 0 6px 24px rgba(0,0,0,.25); cursor: pointer;
    }
    .todo-fab b { color: var(--td-accent); }
    .todo-panel {
      position: fixed; right: 20px; bottom: 72px; z-index: 1000;
      width: min(440px, calc(100vw - 32px)); max-height: 70vh; overflow-y: auto;
      padding: 18px 20px; border-radius: 16px; border: 1px solid var(--td-line);
      background: var(--td-bg); color: var(--td-fg); box-shadow: 0 12px 40px rgba(0,0,0,.35);
      font-size: 14px; line-height: 1.5;
    }
    .todo-panel[hidden] { display: none; }
    .todo-panel h4 { margin: 0 0 4px; font-size: 16px; }
    .todo-panel .todo-note { margin: 0 0 12px; color: var(--td-muted); font-size: 12px; }
    .todo-panel h5 { margin: 16px 0 6px; font-size: 13px; color: var(--td-accent); }
    .todo-panel label { display: flex; gap: 8px; padding: 4px 0; cursor: pointer; }
    .todo-panel input { margin-top: 3px; accent-color: var(--td-accent); flex-shrink: 0; }
    .todo-panel label.done span { color: var(--td-muted); text-decoration: line-through; }
    @media (max-width: 640px) { .todo-fab { right: 16px; bottom: 16px; } .todo-panel { right: 16px; } }
  `;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  // ---------- DOM ----------
  const fab = document.createElement("button");
  fab.className = "todo-fab";
  fab.type = "button";

  const panel = document.createElement("div");
  panel.className = "todo-panel";
  panel.hidden = true;

  const total = PORTFOLIO_TODO.reduce((n, g) => n + g.items.length, 0);

  // 진행률 버튼 텍스트 갱신 (삭제된 항목의 체크 기록은 집계에서 제외)
  const allItems = new Set(PORTFOLIO_TODO.flatMap((g) => g.items));
  const refreshFab = () => {
    const cnt = [...done].filter((t) => allItems.has(t)).length;
    fab.innerHTML = `TODO <b>${cnt}/${total}</b>`;
  };

  panel.innerHTML =
    `<h4>경력기술서 TODO</h4>
     <p class="todo-note">항목 수정은 todo.js · 제출 전 삭제</p>` +
    PORTFOLIO_TODO.map(
      (g) =>
        `<h5>${esc(g.group)}</h5>` +
        g.items
          .map((t) => {
            const on = done.has(t);
            return `<label class="${on ? "done" : ""}"><input type="checkbox" data-t="${esc(t)}"${on ? " checked" : ""}><span>${esc(t)}</span></label>`;
          })
          .join("")
    ).join("");

  // 체크 토글 → 저장 + 취소선 + 진행률 갱신
  panel.addEventListener("change", (e) => {
    const cb = e.target;
    if (!cb.matches("input[type=checkbox]")) return;
    const t = cb.dataset.t;
    cb.checked ? done.add(t) : done.delete(t);
    cb.closest("label").classList.toggle("done", cb.checked);
    save(done);
    refreshFab();
  });

  fab.addEventListener("click", () => { panel.hidden = !panel.hidden; });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") panel.hidden = true; });

  refreshFab();
  document.body.append(panel, fab);
})();