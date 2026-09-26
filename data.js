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
  ],

  about: [
    "(주)웅진에서 6년간 Java·Spring·Oracle 기반 백엔드와 jQuery·Kendo UI 기반 화면을 함께 개발해 왔습니다.",
  ],

  skills: [
    { category: "Language", items: ["Java", "JavaScript", "SQL"] },
    { category: "Backend", items: ["Spring"] },
    { category: "Frontend", items: ["jQuery", "Kendo UI"] },
    { category: "Database", items: ["Oracle"] },
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
        "BMW/MINI, 폭스바겐/아우디, 재규어·랜드로버 딜러사 대상 DMS(WDMS) 구축 및 운영",
        "KCP PG, 본인인증, 국세청 API, 회계 시스템(SBO·더존 아마란스), 정산 시스템(CSM) 연동 개발",
      ],
      stack: ["Java", "Spring", "MyBatis", "Oracle", "Tibero", "JSP", "jQuery", "Kendo UI"],

      projects: [
        {
          title: "WDMS 운영 · 폭스바겐/아우디",
          role: "유지보수 및 추가개발",
          period: "2025.01 – 현재",
          summary: "",
          achievements: [
            "KCP PG 연동: Buylink 카드결제 URL SMS 발송 및 Webhook 수신, 전체/부분 결제취소, 가상계좌 발급 및 다건 입금 Webhook 처리",
            "FI 회계 연동: 수납 확정 건을 익일 새벽 배치로 더존 아마란스 회계 시스템에 I/F",
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
          summary: "폭스바겐·아우디 브랜드별 5~7개 딜러사 대상 DMS 구축",
          achievements: [
            "고객 → 구매신청서 → 품의 작성/승인 → 매매계약서 → 매출확정 → 인도완료로 이어지는 Sales 프로세스 중 고객·계약/품의·수납·프로모션 메인 담당",
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
          summary: "",
          achievements: [
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
          summary: "BMW/MINI 공식 딜러 7개 그룹(코오롱, 한독, 도이치, 바바리안, 삼천리, 내셔널, 동성) 대상 DMS 구축 · 2022.10 오픈",
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

  certificates: [
    { title: "AWS Certified Solutions Architect – Associate", sub: "Amazon Web Services", period: "2025.01.11 – 2028.01.11" },
    { title: "SQLD", sub: "한국데이터산업진흥원", period: "2021.06.25" },
    { title: "Coding Specialist Professional 1급", sub: "YBM IT", period: "2020.08.23" },
    { title: "한국사능력검정시험 1급", sub: "국사편찬위원회", period: "2018.05.26" },
    { title: "정보처리기사", sub: "한국산업인력공단", period: "2018.05.25" },
    { title: "컴퓨터활용능력 1급", sub: "대한상공회의소", period: "2018.05.25" },
  ],
};