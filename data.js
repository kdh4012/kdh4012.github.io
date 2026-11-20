/**
 * 포트폴리오 콘텐츠 — 이 파일만 수정하면 화면 전체가 갱신된다.
 * 값이 비어 있거나 배열이 비어 있으면 해당 항목/섹션은 자동으로 숨겨진다.
 */
const PORTFOLIO = {
  profile: {
    name: "김동현",
    nameEn: "Donghyun Kim",
    role: "Web Developer",
    tagline: "고객 관리부터 계약, 수납, 회계 연동까지 판매 업무 전 과정을 개발해 온 6년차 Java·Spring 웹 개발자입니다.",
    avatar: "", // 예: "assets/profile.jpg" (비우면 이니셜 표시)
    location: "Seoul, Korea",
    email: "kim401233@gmail.com",
    github: "https://github.com/kdh4012",
    instagram: "",
    blog: "",
    linkedin: "",
    resumePdf: "", // 예: "assets/resume.pdf"
  },

  highlights: [
    { value: "6년", label: "WDMS 구축 3회 · 운영 2회" },
    { value: "20개", label: "딜러사 (BMW/MINI · 폭스바겐/아우디)" },
    { value: "329개", label: "전시장 · 지점" },
    { value: "2,400+", label: "영업 사용자 (현재 기준)" },
  ],

  about: [
    "(주)웅진에서 수입차 브랜드(BMW/MINI, 폭스바겐/아우디, 재규어·랜드로버)의 딜러 판매 관리 시스템(WDMS)을 구축하고 운영해 왔습니다.",
    "고객 등록부터 계약, 수납, 프로모션, 매출, 인도까지 판매 전 과정을 개발했고, 회계(ERP)·PG·프로모션 정산·외부 CRM·본인인증 등 외부 시스템 연동을 주로 맡았습니다.",
  ],

  skills: [
    { category: "Language", items: ["Java", "SQL", "JavaScript"] },
    { category: "Backend", items: ["Spring Framework", "MyBatis"] },
    { category: "Frontend", items: ["JSP", "jQuery", "Kendo UI"] },
    { category: "Database", items: ["Oracle", "Tibero", "Redis"] },
    { category: "Etc", items: ["WebSocket(STOMP)", "Git", "IntelliJ", "Scouter"] },
  ],

  /**
   * salesFlow: 고객 등록 → 인도까지 담당한 Sales 업무 흐름
   *  - steps[].module: 해당 단계를 처리하는 모듈 (태그로 표시)
   *  - related: 품의 단계에서 함께 처리하는 업무 (번호 없이 표시, 선택)
   *  - purchaseTypes: 구매유형 비교표 (rows 를 비우면 숨김)
   */
  salesFlow: {
    intro: "고객 등록부터 차량 인도까지 수입차 판매의 전 과정을 개발했습니다.",
    steps: [
      { title: "고객 등록", module: "고객", desc: "고객 정보 입력, 본인인증, 시승·고지·마케팅 동의서 수령" },
      { title: "판매기회 등록", module: "고객", desc: "계약·시승·견적의 선행 절차로 유입경로 등 영업 정보 등록" },
      { title: "계약 등록", module: "계약", desc: "고객·차량 정보로 계약서 작성 (대금 지급, 인도, 해지 조항)" },
      { title: "품의 등록·승인", module: "계약", desc: "명의자, 차량 배정, 구매유형(현금·할부·렌트·리스), 수납, 프로모션 등록 후 승인" },
      { title: "매매계약서 서명", module: "계약", desc: "확정된 품의 내용으로 고객 서명" },
      { title: "매출 확정", module: "매출", desc: "매출 확정 후 회계 시스템으로 전송" },
      { title: "세금계산서 발행", module: "매출", desc: "고객 교부 및 매출세액·법인세 신고 증빙" },
      { title: "제작증 발행", module: "인도", desc: "차대번호·제원 정보를 국토부 전산에 등록" },
      { title: "차량등록증 등록", module: "인도", desc: "지자체에서 발급받은 등록증·번호판 정보 등록" },
      { title: "하자고지 서명", module: "인도", desc: "자동차관리법에 따른 인도 전 하자 고지 및 확인 서명" },
      { title: "인수 서명", module: "인도", desc: "차량·키·등록증 확인 후 인수증 서명, 인도 완료" },
    ],
    related: {
      title: "품의 단계에서 함께 처리",
      items: [
        { title: "수납", module: "수납", desc: "입금·지급을 직접 등록하거나 PG(KCP) 결제 통보로 자동 등록, 확정 건은 회계 시스템으로 전송" },
        { title: "프로모션", module: "프로모션", desc: "KR·딜러 프로모션 등록·승인, 승인 건은 브랜드 시스템(폭스바겐/아우디 SLS, BMW/MINI CSM)으로 전송" },
      ],
    },
    purchaseTypes: { title: "", head: [], rows: [] },
  },

  /**
   * experience[].projects: 회사 안에서 수행한 프로젝트 (최신순)
   *  - title / role / period / summary / achievements / stack(키워드 태그)
   */
  experience: [
    {
      company: "(주)웅진",
      role: "모빌리티사업본부 Sales Expert팀 · 대리",
      period: "2020.12 – 현재", // 정규직 기준 (2020.09~12 인턴 기간은 경력에서 제외)
      summary: "수입차 딜러 판매 관리 시스템(WDMS) 구축 및 운영",
      achievements: [
        "Sales팀(설계 4명, 개발 6명) 소속으로 고객·계약·수납·프로모션 모듈 개발",
        "BMW/MINI·폭스바겐/아우디 기준 20개 딜러사, 329개 지점, 영업 사용자 2,400여 명 규모 (현재 기준)",
        "회계(더존 아마란스·SBO), PG(KCP), 프로모션·정산(SLS·CSM), 외부 CRM(OneX), 본인인증, 국세청 API 연동",
      ],
      stack: ["Java", "Spring Framework", "MyBatis", "Oracle", "JSP", "jQuery", "Kendo UI"],

      projects: [
        {
          title: "WDMS 운영 · 폭스바겐/아우디",
          role: "유지보수 및 추가개발",
          period: "2025.01 – 현재",
          summary: "월 고객 등록 6,500~9,500건, 계약 2,300~3,000건, 수납 3,000~4,500건 규모 운영",
          achievements: [
            "KCP PG 연동: 고정식 가상계좌 발급·입금 통보, 카드결제(Buylink)·전체/부분 취소 API, 결제 통보 수신 시 수납 자동 등록·확정",
            "회계 연동(더존 아마란스): 거래처·매입·매출·입금·지급 배치 전송, 거래처 선전송 등 전송 순서 관리, 실패 건 재전송 구조 설계",
            "개인정보 보호: 휴대폰번호·고객명·이메일·주소·계좌번호·차대번호 마스킹, 마스킹 해제·엑셀 추출·고객 상세 조회 이력 적재(월별 관리), 주민등록번호·계좌번호 암호화",
            "고객 정보 파기: 화면 강제 삭제·OneX 삭제 요청·동의 만료 시 삭제 대상 테이블에 적재 후 고객·판매기회·계약·시승·수납·프로모션·세금계산서 정보 삭제 (진행 중 계약, RO, 연결 차량, 부품판매 이력이 있으면 제외), 첨부파일은 사용 여부 변경 후 배치로 물리 파일 삭제",
            "추가개발: 재판매 의심고객 관리(차대번호 기준 구매 고객 등록 및 단계별 알림), EV 스마트케어(LG에너지솔루션) 동의 및 차량 정보 연동",
            "고객 안내 SMS를 카카오 알림톡으로 전환 (미설치 고객은 SMS 대체 발송)",
            "운영 대응: 태블릿 본인인증 무응답(다중 Pod), 운영 SQL 오류(ORA-01427) 원인 분석 및 해결, 주소검색 API 장애 시 직접 입력으로 긴급 전환",
            "외부 CRM(OneX) 고객 동기화 I/F: 고객 정보 수정 시 고객명·휴대폰번호가 같은 고객을 함께 갱신, 가망고객 동의 만료일 동기화, I/F 대상 테이블 적재 후 배치 전송 및 OneX 통합고객번호 수신",
            "CI 분리보관 의무에 대비해 현업과 협의, OneX 고객통합 기준을 고객명·휴대폰번호로 정리",
          ],
          stack: ["KCP PG", "회계 I/F", "개인정보 보호", "WebSocket", "Redis"],
        },
        {
          title: "WDMS 구축 · 재규어·랜드로버",
          role: "고객 모듈",
          period: "2025.01 – 2025.03",
          summary: "폭스바겐/아우디 고객 모듈을 재사용해 3개월 만에 적용",
          achievements: [
            "브랜드·딜러별 설정값 변경, UbiReport 출력물 수정",
          ],
          stack: ["UbiReport"],
        },
        {
          title: "WDMS 구축 · 폭스바겐/아우디",
          role: "판매 전 과정 개발 (수납·KCP 연동은 설계 참여)",
          period: "2024.01 – 2024.12",
          summary: "아우디 8개·폭스바겐 5개 딜러사(135개 지점) 대상 구축 · Sales 파트 8명(설계 3, 개발 5)",
          achievements: [
            "고객: 개인·법인·개인사업자 딜러별 관리, 브랜드 통합고객 동기화, 고객 상태(잠재·가망·AS·구매)와 만료일 관리",
            "본인인증: 드림시큐리티 간편인증·문자 인증 연동 (웹·모바일 팝업, 태블릿 WebSocket), 외국인 고객명 표기 정규화",
            "계약: 계약서 작성, 명의자·차량 배정·구매유형·수납·프로모션을 포함한 품의 등록·승인",
            "수납: 입금·지급 등록 및 확정, 계약별 총입금·미납 관리",
            "프로모션: KR·딜러 프로모션 등록·승인, KR 프로모션 SLS 연동",
            "매출·인도: 매출 확정, 세금계산서·제작증 발행, 차량등록·하자고지·인수 서명",
          ],
          stack: ["본인인증", "통합고객", "품의", "수납"],
        },
        {
          title: "WDMS 운영 · BMW/MINI",
          role: "유지보수 및 추가개발",
          period: "2022.11 – 2023.12",
          summary: "월 고객 등록 49,000건, 수납 50,000건 규모 운영 (현재 기준)",
          achievements: [
            "방문객 등록: 전시장 키오스크·QR·태블릿에서 고객이 고객명·휴대폰번호만으로 직접 등록",
            "등록된 방문객을 영업팀장이 영업사원(SC)에게 배정하는 기능 개발",
            "프로모션·수납 모듈 유지보수",
          ],
          stack: ["키오스크", "QR", "태블릿"],
        },
        {
          title: "WDMS 구축 · BMW/MINI",
          role: "프로모션·수납·고객이관",
          period: "2022.01 – 2022.10",
          summary: "BMW/MINI 공식 딜러 7개 그룹(194개 지점) 대상 구축 · 2022.10 오픈",
          achievements: [
            "프로모션: KR 프로모션(법인·특별판매) 등록·승인 워크플로우, 승인 건 딜러 시스템·CSM 정산 시스템 연동, 딜러 프로모션 개발",
            "수납: 딜러 시스템 수신 수납과 직접 등록(엑셀·그리드) 수납 통합 관리, SBO 회계 연동",
            "고객이관: 담당 SC 변경 시 고객·판매기회·계약 일괄 이관, 판매기회 종결·계약 취소·매출 확정·인도 완료·회계 연동 완료 건은 제외",
            "판매기회 분배, 국세청 사업자등록정보 진위확인 API 연동",
          ],
          stack: ["프로모션", "승인 워크플로우", "고객이관", "회계 I/F"],
        },
        {
          title: "롯데오토케어 순회정비 서비스",
          role: "개발",
          period: "2021.01 – 2021.12",
          summary: "",
          // TODO: Tibero 전환 시 수정한 내용, 순회정비 기능 단위 보강
          achievements: [
            "Oracle → Tibero DB 전환, 순회정비 서비스 개발",
          ],
          stack: ["Oracle", "Tibero"],
        },
      ],
    },
  ],

  /**
   * troubleshooting: 문제 해결 사례 (Problem → Cause → Solution → Result)
   *  - period: 시기 (선택) / solutionList: Solution 아래 bullet (선택) / insight: 한 줄 정리 (선택)
   */
  troubleshooting: [
    {
      title: "태블릿 본인인증 무응답",
      context: "WDMS 운영 · 폭스바겐/아우디",
      role: "원인 분석 및 개발",
      tags: ["WebSocket(STOMP)", "Redis Pub/Sub", "다중 Pod"],
      problem:
        "운영 환경의 태블릿에서 본인인증을 마쳐도 응답이 없었습니다. 개발 환경에서는 정상 동작했습니다. 태블릿은 팝업이 불가한 WebView라 웹·모바일과 달리 WebSocket으로 인증 결과를 받는 구조였습니다.",
      cause:
        "개발 환경은 Pod이 1개라 문제가 없었지만, 운영은 Pod이 여러 개라 인증기관의 웹훅을 받은 Pod과 WebSocket 연결을 가진 Pod이 다를 수 있었습니다.",
      solution: "웹훅을 받은 Pod이 결과를 Redis에 publish하고, 모든 Pod이 이를 받아 자기에게 연결된 단말이면 WebSocket으로 전달하도록 했습니다.",
      solutionList: [
        "WebSocket(STOMP·SockJS) 연결 시 sessionId 기반 topicId를 발급하고, 인증 요청의 결과 URL에 포함",
        "웹·모바일은 기존 팝업 + JS 콜백 방식 유지",
      ],
      result: "다중 Pod 환경에서도 인증 결과가 해당 단말로 전달되어 무응답 문제가 해소되었습니다.",
      insight: "",
    },
    {
      title: "KCP 결제 통보 중복 처리 방지",
      context: "WDMS 운영 · 폭스바겐/아우디",
      role: "설계·개발",
      tags: ["KCP PG", "Webhook", "UNIQUE 제약"],
      problem:
        "가상계좌 입금과 카드 승인 통보를 받아 수납을 자동 등록하는데, KCP는 응답 실패 시 같은 통보를 최대 10회 재전송하고 가상계좌는 한 계약에 여러 번 입금됩니다. 통보를 잘못 처리하면 수납이 중복 등록될 수 있었습니다.",
      cause: "",
      solution: "통보 고유값(가상계좌 noti_id + op_cd, 카드 거래번호)에 수신 로그 UNIQUE 제약을 걸어 중복 통보를 DB에서 차단했습니다.",
      solutionList: [
        "발신 IP 화이트리스트와 주문번호·금액 대조로 위조 통보 차단",
        "수신 전문을 먼저 저장한 뒤 응답하고, 후처리 실패 건은 담당자 알림과 재처리 기능으로 복구",
      ],
      result: "재전송과 분할입금이 섞여도 수납이 한 번만 등록되고, 후처리 실패 건도 누락 없이 복구할 수 있게 되었습니다.",
      insight: "",
    },
    {
      title: "운영 환경 SQL 오류(ORA-01427) 추적",
      context: "WDMS · 프로모션", // TODO: 브랜드
      role: "원인 분석 및 수정",
      tags: ["Oracle", "Scouter", "MyBatis"],
      problem: "운영 환경에서 특정 프로모션 조회 시 ORA-01427이 발생했고, 개발 환경에는 해당 데이터가 없어 재현되지 않았습니다.",
      cause: "설정 스펙 변경으로 유형명을 유일하게 찾는 조건이 추가됐는데, 일부 조회 쿼리의 스칼라 서브쿼리에 반영되지 않아 다건이 반환됐습니다.",
      solution: "운영 SQL은 파일에 남지 않아, 로그와 APM으로 실제 실행 쿼리를 확보했습니다.",
      solutionList: [
        "web_error.log에서 발생 시각과 Mapper ID 확인",
        "Scouter XLog에서 해당 트랜잭션의 실행 SQL과 바인딩 파라미터 확보, 서브쿼리 단독 실행으로 다건 반환 확인",
      ],
      result: "누락 조건을 보완하고, 같은 설정 테이블을 참조하는 Mapper 쿼리를 전수 검색해 함께 수정했습니다.",
      insight: "",
    },
    {
      title: "회계 연동 실패 건 재전송",
      context: "WDMS · 더존 아마란스 회계 연동",
      role: "설계·개발",
      tags: ["회계 I/F", "Batch", "재처리"],
      problem: "마지막 전송 시각 이후 건만 보내는 증분 방식이라, 한 번 실패한 문서는 다음 전송에서 다시 조회되지 않아 회계 데이터가 누락될 수 있었습니다.",
      cause: "",
      solution: "전송 이력을 실행 단위(마스터)와 문서 단위(디테일)로 나눠 기록하고, 재전송 대상은 디테일의 실패 문서로 판단했습니다.",
      solutionList: [
        "실패 문서만 원래 실행 단위로 묶어 재조회·재전송",
        "인터페이스 종류와 관계없이 같은 로그 테이블 구조로 관리",
      ],
      result: "문서 하나의 오류가 나머지 전송에 영향을 주지 않고, 실패 원인 확인과 재전송·제외를 실행 단위로 처리할 수 있게 되었습니다.",
      insight: "",
    },
    {
      title: "가상계좌 중복 할당 방지",
      context: "WDMS",
      role: "개발",
      tags: ["SELECT FOR UPDATE", "Oracle", "Spring Transaction"],
      problem: "계약 시 가상계좌 풀에서 미사용 계좌를 선점하는데, 동시에 요청하면 같은 계좌가 여러 계약에 할당될 수 있었습니다.",
      cause: "",
      solution: "SELECT FOR UPDATE로 조회부터 선점까지를 한 트랜잭션에서 처리했고, 이후 다음을 개선했습니다.",
      solutionList: [
        "FOR UPDATE OF로 잠금 범위를 가상계좌 테이블로 한정, WAIT 3으로 대기 시간 상한 설정",
        "수동 커밋 제거로 트랜잭션 경계 정리, 갱신 조건 PK 기준 보완",
      ],
      result: "다중 WAS 환경에서도 계좌 중복 할당을 막았고, 대기 시간 초과 시 사용자에게 재시도를 안내합니다.",
      insight: "",
    },
    {
      title: "품의 동시 수정 충돌 방지",
      context: "WDMS 구축 · 폭스바겐/아우디",
      role: "개발",
      tags: ["낙관적 락", "Lost Update"],
      problem: "같은 품의를 여러 화면에서 열어 둔 상태에서, 이전 값을 가진 화면이 저장하면 다른 사용자의 변경을 덮어쓸 수 있었습니다.",
      cause: "",
      solution: "10개 이상 테이블을 함께 저장하는 구조라, 메인 테이블의 수정일시를 대표 버전으로 삼아 조회 시점과 저장 시점 값이 다르면 저장을 막았습니다.",
      // TODO: 조건부 UPDATE(0건 → 예외) 전환 / AOP 공통화 적용 후 갱신
      solutionList: [],
      result: "다른 사용자의 변경을 덮어쓰는 저장을 차단하고, 새로고침 후 다시 진행하도록 안내했습니다.",
      insight: "",
    },
    {
      title: "배치 중복 실행 원인 분석",
      context: "WDMS 구축 · BMW/MINI",
      role: "원인 분석 (설정 변경은 공통팀 적용)",
      tags: ["Quartz Cluster", "회계 I/F"],
      problem: "오픈 후 배치 서버 2대로 운영하던 중 회계 연동 배치가 같은 시각에 두 번 실행되어 데이터가 중복 전송되었습니다.",
      cause: "Quartz 클러스터의 트리거 획득이 락 없이 상태값만 확인하는 방식이라, 두 서버가 같은 트리거를 동시에 가져갈 수 있었습니다.",
      solution: "acquireTriggersWithinLock 설정으로 트리거 획득을 DB 행 락 안에서 수행하도록 변경했습니다.",
      solutionList: [],
      result: "한 번에 한 서버만 트리거를 가져가게 되어 중복 실행이 해소되었습니다.",
      insight: "",
    },
  ],

  projects: [
    {
      title: "주식 자동매매 신호 서비스 (개인 프로젝트)",
      period: "2025.10 – 현재",
      org: "Side Project",
      role: "1인 개발",
      problem: "여러 증권사·거래소 자산을 한 화면에서 보기 어려움",
      solution: "업비트·한국투자증권 API 연동, RSI·거래량 급증 신호 감지",
      result: "통합 자산 조회 및 매매 신호 알림",
      stack: ["Java", "Spring Boot", "Gradle"],
      links: { github: "https://github.com/kdh4012/stock-service", demo: "", post: "" },
    },
  ],

  education: [
    { title: "상명대학교 컴퓨터과학과", sub: "학사 졸업", period: "2013.03 – 2020.02" },
  ],

  // file: 암호화된 자격증 PDF 경로 (tools/encrypt-certs.mjs 로 생성, 비우면 다운로드 버튼 숨김)
  certificates: [
    { title: "AWS Certified Solutions Architect – Associate", sub: "Amazon Web Services", period: "2025.01.11 – 2028.01.11", file: "assets/certificates/aws-saa.pdf.enc" },
    { title: "SQLD", sub: "한국데이터산업진흥원", period: "2021.06.25", file: "assets/certificates/sqld.pdf.enc" },
    { title: "Coding Specialist Professional 1급", sub: "YBM IT", period: "2020.08.23", file: "assets/certificates/cos-pro-java-1.pdf.enc" },
    { title: "한국사능력검정시험 1급", sub: "국사편찬위원회", period: "2018.06.08", file: "assets/certificates/korean-history-1.pdf.enc" },
    { title: "정보처리기사", sub: "한국산업인력공단", period: "2018.05.25", file: "assets/certificates/engineer-information-processing.pdf.enc" },
    { title: "컴퓨터활용능력 1급", sub: "대한상공회의소", period: "2018.05.25", file: "assets/certificates/computer-specialist-1.pdf.enc" },
  ],
};