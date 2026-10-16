/**
 * 포트폴리오 콘텐츠 — 이 파일만 수정하면 화면 전체가 갱신된다.
 * 값이 비어 있거나 배열이 비어 있으면 해당 항목/섹션은 자동으로 숨겨진다.
 */
const PORTFOLIO = {
  profile: {
    name: "김동현",
    nameEn: "Donghyun Kim",
    role: "Full-Stack Web Developer",
    tagline: "Java·Spring 백엔드부터 화면까지 직접 만드는 6년차 웹 개발자입니다.",
    avatar: "", // 예: "assets/profile.jpg" (비우면 이니셜 표시)
    location: "Seoul, Korea",
    email: "kim401233@gmail.com",
    github: "https://github.com/kdh4012",
    instagram: "https://www.instagram.com/donghyun4012",
    blog: "",
    linkedin: "",
    resumePdf: "", // 예: "assets/resume.pdf"
  },

  highlights: [
    { value: "6+", label: "Years of Experience" },
    { value: "6", label: "Certificates" },
    { value: "329", label: "Dealer Branches" },
    { value: "2,400+", label: "System Users" },
  ],

  about: [
    "(주)웅진에서 6년간 Java·Spring·Oracle 기반 백엔드와 jQuery·Kendo UI 기반 화면을 함께 개발해 왔습니다.",
  ],

  skills: [
    { category: "Language", items: ["Java", "JavaScript", "SQL"] },
    { category: "Backend", items: ["Spring"] },
    { category: "Frontend", items: ["jQuery", "Kendo UI"] },
    { category: "Database", items: ["Oracle"] },
    { category: "DevOps", items: ["Git", "Jenkins"] },
  ],

  /**
   * experience[].projects: 회사 안에서 수행한 프로젝트 (최신순)
   *  - title / role / period / summary / achievements / stack(키워드 태그)
   */
  experience: [
    {
      company: "(주)웅진",
      role: "Web Developer",
      period: "2020.09 – 현재",
      summary: "2020.09 인턴 입사 → 2020.12 정규직 전환 · 수입차 딜러 관리 시스템(DMS) 구축 및 운영",
      achievements: [
        "고객 등록부터 계약·수납·매출·인도까지 차량 판매(Sales) 전 과정의 백엔드와 화면 개발",
        "Sales팀 10명(설계 4 · 개발 6, 현재 기준) — 고객·계약·프로모션·수납·매입/매출/인도·재고·시승·견적(BMW 전용) 모듈 구성",
        "BMW/MINI, 폭스바겐/아우디, 재규어·랜드로버 딜러사 대상 DMS(WDMS) 구축 및 운영 (BMW/MINI·폭스바겐/아우디 기준 20개 딜러사 · 329개 지점 · 사용자 2,423명)",
        "KCP PG, 본인인증, 국세청 API, 회계 시스템(SBO·더존 아마란스), 정산 시스템(CSM) 연동 개발",
      ],
      stack: ["Java", "Spring", "MyBatis", "Oracle", "Tibero", "JSP", "jQuery", "Kendo UI"],

      projects: [
        {
          title: "WDMS 운영 · 폭스바겐/아우디",
          role: "유지보수 및 추가개발",
          period: "2025.01 – 현재",
          // 월별 처리량: 아우디+폭스바겐 합산 (브랜드별 상세는 첫 번째 bullet)
          summary: "월 고객 등록 6,500~9,500건 · 시승 5,500~7,700건 · 계약 2,300~3,000건 · 수납 3,000~4,500건 · 인도 1,300~2,100건 규모의 Sales 업무 운영 (아우디·폭스바겐 합산)",
          achievements: [
            "브랜드별 월 처리량 — 아우디: 고객 5,000~7,000 · 시승 4,000~6,000 · 계약 1,500~2,000 · 수납 1,500~2,500 · 인도 900~1,500건 / 폭스바겐: 고객 1,500~2,500 · 시승 1,500~1,700 · 계약 800~1,000 · 수납 1,500~2,000 · 인도 400~600건",
            "KCP PG 연동: 고정식 가상계좌 발급·다건 입금 통보, Buylink 카드결제 URL 생성(SMS 발송)·승인 통보, 전체/부분 결제취소 API",
            "결제 통보(Webhook) 수신 시 수납 등록·확정까지 자동 처리 (중복 통보 차단·후처리 실패 재처리 — Troubleshooting 참고)",
            "FI 회계 연동: 매입·매출·수납 데이터를 배치로 더존 아마란스 회계 시스템에 I/F — 매입 월 600건(월별 전송), 매출 일 평균 100건·수납 일 평균 150건(일일 전송, 수납 확정 건은 익일 새벽 배치)",
            "정산 후 카드 취소가 '상계 가능 정산금 부족'으로 거절되는 원인을 분석하고, KCP·딜러사 협의로 마이너스 상계 처리 기준 마련에 참여",
            "고객 안내 메시지를 SMS에서 카카오 알림톡으로 전면 전환하고, 카카오톡 미설치 고객에게는 SMS로 대체 발송(Fallback)하도록 구현",
            "알림톡 적용 범위: 비대면 고객 등록·수정, 가상계좌 발급 안내, (비대면) 사전매매계약·매매계약 및 계약서 전달, 비대면 하자고지·시정조치·인도서명, 판매기회 등록(영업시간 내/외, 즉시배정/미배정)",
            "고객·계약/품의·수납·프로모션 등 Sales 모듈 유지보수",
          ],
          stack: ["KCP PG", "Webhook", "Batch", "회계 I/F", "카카오 알림톡"],
        },
        {
          title: "WDMS 구축 · 재규어·랜드로버",
          role: "고객 모듈 담당",
          period: "2025.01 – 2025.03",
          summary: "폭스바겐/아우디 고객 모듈을 재사용해 재규어·랜드로버 딜러사에 적용",
          achievements: [
            "브랜드·딜러별 하드코딩 로직과 설정값을 재규어·랜드로버 기준으로 변경",
            "UbiReport 출력물 내용을 브랜드에 맞게 수정",
          ],
          stack: ["모듈 재사용", "UbiReport"],
        },
        {
          title: "WDMS 구축 · 폭스바겐/아우디",
          role: "Sales 핵심 모듈 메인 담당",
          period: "2024.01 – 2024.12",
          summary: "아우디 8개·폭스바겐 5개 딜러사 · 135개 지점(아우디 77, 폭스바겐 58) · 사용자 632명(SC 447 · 영업팀장 107 · 재고담당 78) 대상 DMS 구축 (지점·사용자 수는 현재 기준)",
          achievements: [
            "고객 → 구매신청서 → 품의 작성/승인 → 매매계약서 → 매출확정 → 인도완료로 이어지는 Sales 프로세스에서 7개 모듈 중 고객·계약/품의·수납·프로모션 4개 메인 담당",
            "매출확정·세금계산서·제작증 발행, 차량등록 및 하자고지·인수 서명(인도완료) 기능 개발",
            "고객: 개인/법인/개인사업자 유형을 딜러별로 독립 관리하고, 잠재→가망→AS→구매 상태 전이 설계 (마스터 + 주소 1:1, 동의서·SC·유형 1:N 모델링)",
            "본인인증: 드림시큐리티 간편인증(카카오·네이버·PASS·토스 등)·문자인증 연동",
            "수납: 입금(계약금·인도금·보조금 등)/지급(해약·초과입금·취등록세 등) 등록 및 확정 처리, 계약별 총입금·미납 금액 관리",
          ],
          stack: ["본인인증"],
        },
        {
          title: "WDMS 운영 · BMW/MINI",
          role: "유지보수 및 추가개발",
          period: "2023.01 – 2023.12",
          // 월별 처리량: BMW+MINI 합산 (브랜드별 상세는 첫 번째 bullet)
          summary: "월 고객 등록 49,000건 · 시승 20,000건 · 계약 11,000건 · 수납 50,000건 · 인도 6,700건 규모의 Sales 업무 운영 (BMW·MINI 합산, 현재 기준)",
          achievements: [
            "브랜드별 월 처리량(현재 기준) — BMW: 고객 45,000 · 시승 20,000 · 계약 10,000 · 수납 50,000 · 인도 6,000건 / MINI: 고객 4,000 · 시승 0 · 계약 1,000 · 수납 0 · 인도 700건",
            "방문객 등록 기능 개발: 전시장 키오스크(Genius 안내)·QR 비대면·태블릿에서 고객이 직접 방문객으로 등록",
            "본인인증·개인정보 활용 동의 서명이 필요한 기존 고객등록 대비, 고객명·휴대폰번호(이메일 선택)만으로 등록하도록 절차 간소화",
            "등록된 방문객을 Prospect 화면에서 영업팀장이 SC(영업사원)에게 분배하는 흐름 구현",
            "프로모션·수납 모듈 유지보수",
          ],
          stack: ["키오스크", "QR", "태블릿"],
        },
        {
          title: "WDMS 구축 · BMW/MINI",
          role: "프로모션·수납 담당",
          period: "2022.01 – 2022.10",
          summary: "BMW/MINI 공식 딜러 7개 그룹(코오롱, 한독, 도이치, 바바리안, 삼천리, 내셔널, 동성) · 194개 지점(BMW 163, MINI 31) · 사용자 1,791명(SC 1,422 · 영업팀장 264 · 재고담당 105) 대상 DMS 구축 · 2022.10 오픈 (지점·사용자 수는 현재 기준)",
          achievements: [
            "KR 프로모션: 법인판매(협약 법인 그룹별 차등 할인)·특별판매(재구매·가족 구매 이력 기반 할인) 등록 → 승인 워크플로우 개발",
            "최종 승인된 프로모션을 CSM 정산 시스템으로 I/F",
            "딜러 프로모션 개발", // TODO: KR 프로모션과의 차이 보강
            "수납: 딜러 시스템 I/F 수신 데이터와 엑셀 업로드·그리드 수기 등록 데이터를 SBO 회계 시스템으로 전송",
            "사업자 검증: 국세청 사업자등록정보 진위확인 API(공공데이터포털) 연동",
          ],
          stack: ["프로모션", "승인 워크플로우", "회계 I/F", "Excel Import", "공공데이터 API"],
        },
        {
          title: "롯데오토케어 순회정비 서비스",
          role: "개발",
          period: "2021.01 – 2021.12",
          summary: "",
          // TODO: Tibero 전환 시 수정한 내용, 순회정비 기능 단위 보강
          achievements: [
            "Oracle → Tibero DB 전환",
            "순회정비 서비스 개발",
          ],
          stack: ["Oracle", "Tibero"],
        },
      ],
    },
  ],

  /**
   * troubleshooting: 문제 해결 사례 (Problem → Cause → Solution → Result)
   *  - period: 시기 (선택) / solutionList: Solution 아래 bullet (선택) / insight: 배운 점 한 줄 (선택)
   */
  troubleshooting: [
    {
      title: "KCP 결제 Webhook 수납 자동화 (중복 차단·장애 복구)",
      period: "", // TODO: 개발 시기 (2025.01 이후 VW 운영 중 언제인지)
      context: "WDMS 운영 · 폭스바겐/아우디",
      role: "개발", // TODO: 설계까지 담당했다면 "설계·개발"로 변경
      tags: ["KCP PG", "Webhook", "멱등성(Idempotency)", "Oracle UNIQUE", "Spring", "MyBatis"],
      problem:
        "가상계좌 입금과 카드 승인을 KCP Webhook으로 받아 수납 등록·확정, 회계 I/F까지 자동으로 이어지는 구조였습니다. KCP는 응답이 실패하면 같은 통보를 최대 10회 재전송하고, 가상계좌는 한 주문번호로 여러 번 입금되기 때문에 통보를 잘못 처리하면 수납이 중복 등록돼 계약 잔액과 회계 데이터가 바로 틀어질 수 있었습니다. 또한 KCP 결제는 성공했는데 내부 후처리만 실패한 건을 놓치지 않아야 했습니다.",
      cause: "",
      solution:
        "통보 건 단위 고유값(가상계좌 noti_id + op_cd, 카드 KCP 거래번호)에 수신 로그 테이블 UNIQUE 제약을 걸어 중복 통보를 DB 레벨에서 차단했습니다. 가상계좌는 입금 취소(망 취소, op_cd=13)가 입금 때와 같은 noti_id로 오기 때문에 op_cd를 키에 포함해, 재전송은 막고 취소 통보는 정상 반영되도록 했습니다.",
      solutionList: [
        "KCP 발신 IP 화이트리스트와 주문번호·요청 금액 대조로 위조 통보 차단",
        "수신 전문을 먼저 로그에 적재한 뒤 성공 응답을 반환",
        "후처리 실패 시 처리 담당자에게 앱 푸시 → 화면 재처리 버튼으로 수신 로그 기준 복구",
      ],
      result:
        "계약금·인도금·분할입금과 재전송이 섞여도 수납이 한 번만 등록되고, 외부 결제 성공·내부 처리 실패 건도 유실 없이 복구할 수 있게 되었습니다.",
      insight: "",
    },
    {
      title: "가상계좌 중복 발급 방지",
      period: "", // TODO: 개발 시기 (BMW / VW 구축 중 언제인지)
      context: "WDMS",
      role: "설계·개발",
      tags: ["비관적 락", "SELECT FOR UPDATE", "Oracle", "Spring Transaction", "MyBatis"],
      problem:
        "계약 작성 시 딜러·은행별 가상계좌 풀에서 미사용 계좌를 선점하는데, 여러 영업사원이 동시에 발급을 요청하면 같은 계좌가 여러 계약에 중복 할당되어 입금이 다른 계약에 매칭될 위험이 있었습니다.",
      cause: "",
      solution:
        "SELECT FOR UPDATE 비관적 락으로 조회부터 선점까지를 하나의 트랜잭션에서 원자적으로 처리하고, 대기하던 요청은 커밋 후 조건을 다시 평가해 다음 계좌를 할당받도록 설계했습니다. 이후 다음 네 가지를 개선했습니다.",
      solutionList: [
        "FOR UPDATE OF로 락 범위를 가상계좌 테이블로 좁힘",
        "WAIT 3으로 락 대기 시간 상한 설정",
        "수동 커밋을 제거해 Spring 트랜잭션 경계 정리",
        "갱신 조건을 PK 기준으로 보완",
      ],
      result:
        "다중 WAS 환경에서도 DB 레벨에서 계좌 중복 할당을 차단했고, 불필요한 기관 마스터 잠금과 무한 대기 가능성을 제거했습니다. 락 타임아웃 시에는 사용자에게 재시도 안내를 제공합니다.",
      insight: "비관적 락은 먼저 잠그고 작업하고, 낙관적 락은 일단 작업한 뒤 갱신 시점에 충돌을 확인한다.",
    },
    {
      title: "품의 동시 수정 충돌 방지",
      period: "", // TODO: 개발 시기
      context: "WDMS",
      role: "설계·개발",
      tags: ["낙관적 락", "Lost Update", "버전 체크", "Oracle", "Spring", "MyBatis"],
      problem:
        "같은 계약의 품의 화면을 여러 사용자(또는 여러 브라우저)가 동시에 띄워 둔 상태에서, 먼저 저장된 변경을 모르는 화면이 이전 값 기준으로 저장해 다른 사용자의 작업을 덮어쓰거나 이미 진행된 단계를 다시 처리하는 갱신 손실(Lost Update) 문제가 있었습니다.",
      cause: "",
      solution:
        "사용자가 화면을 보는 동안에는 DB 락을 유지할 수 없어 낙관적 락 방식을 적용했습니다. 품의 저장 시 10개 이상의 테이블이 함께 변경되므로, 메인 테이블의 수정일시를 묶음 전체의 대표 버전으로 정하고 화면 조회 시점의 값과 저장 시점의 DB 값을 비교해 다르면 저장을 차단했습니다.",
      solutionList: [],
      // TODO: 조건부 UPDATE(0건 → 예외) 전환 / AOP 공통화 적용 후 Solution·Result 갱신
      result:
        "다른 사용자의 변경을 덮어쓰는 저장을 차단하고, 사용자에게 새로고침 후 재진행하도록 안내해 품의 데이터 정합성을 확보했습니다.",
      insight: "",
    },
    {
      title: "배치 중복 실행 원인 분석",
      context: "WDMS 구축 · BMW/MINI",
      role: "이슈 발견 및 원인 분석 (공통팀 협업, 설정 수정은 공통팀 적용)",
      tags: ["Quartz Cluster", "ABA 문제", "DB 행 락", "회계 I/F"],
      problem:
        "BMW 오픈 시 배치 서버 2대를 Quartz 클러스터로 운영했는데, 회계 시스템으로 데이터를 보내는 I/F 배치가 같은 시각에 두 번 실행되어 동일 데이터가 중복 전송되었습니다.",
      cause:
        "클러스터 모드였지만 트리거 획득이 락 없이 상태값(WAITING)만 확인하는 낙관적 방식이었습니다. A 서버가 트리거를 가져가 배치를 시작하면서 상태를 다시 WAITING으로 되돌린 직후 B 서버가 확인하면, 이미 처리된 것을 감지하지 못하고 통과하는 ABA 문제였습니다.",
      solution:
        "acquireTriggersWithinLock = true로 트리거 획득을 DB 행 락(QRTZ_LOCKS SELECT FOR UPDATE) 안에서 수행하도록 변경해, 서버 간 트리거 획득을 직렬화했습니다.",
      solutionList: [],
      result: "한 번에 한 서버만 트리거를 확인·획득하게 되어 배치 중복 실행과 회계 I/F 중복 전송이 해소되었습니다.",
      insight:
        "상태값 비교는 값이 원래대로 돌아오면 변화를 감지하지 못한다(ABA). 되돌아오지 않는 버전 번호로 비교하거나, 확인부터 변경까지 락으로 묶어야 한다.",
    },
  ],

  projects: [
    {
      title: "주식 자동매매 신호 서비스 (개인 프로젝트)",
      period: "2025.10 – 현재",
      org: "Side Project",
      role: "1인 개발",
      problem: "여러 증권사·거래소 자산을 한 화면에서 보기 어려움",
      solution: "업비트/한국투자증권 API 연동, RSI·거래량 급증 신호 감지",
      result: "통합 자산 조회 및 매매 신호 알림 자동화",
      stack: ["Java", "Spring Boot", "Gradle"],
      links: { github: "https://github.com/kdh4012/stock-service", demo: "", post: "" },
    },
  ],

  education: [
    { title: "상명대학교 컴퓨터과학과", sub: "학사 졸업", period: "2013.03 – 2020.02" },
  ],

  // file: 암호화된 자격증 PDF 경로 (tools/encrypt-certs.mjs 로 생성, 비우면 다운로드 버튼 숨김)
  certificates: [
    { title: "AWS Certified Solutions Architect – Associate", sub: "Amazon Web Services", period: "2025.01.11 – 2028.01.11" },
    { title: "SQLD", sub: "한국데이터산업진흥원", period: "2021.06.25", file: "assets/certificates/sqld.pdf.enc" },
    { title: "Coding Specialist Professional 1급", sub: "YBM IT", period: "2020.08.23", file: "assets/certificates/cos-pro-java-1.pdf.enc" },
    { title: "한국사능력검정시험 1급", sub: "국사편찬위원회", period: "2018.05.26", file: "assets/certificates/korean-history-1.pdf.enc" },
    { title: "정보처리기사", sub: "한국산업인력공단", period: "2018.05.25", file: "assets/certificates/engineer-information-processing.pdf.enc" },
    { title: "컴퓨터활용능력 1급", sub: "대한상공회의소", period: "2018.05.25", file: "assets/certificates/computer-specialist-1.pdf.enc" },
  ],
};