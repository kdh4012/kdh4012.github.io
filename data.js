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

  experience: [
    {
      company: "(주)웅진",
      role: "Web Developer",
      period: "2020.09 – 현재",
      summary: "2020.09 인턴 입사 → 2020.12 정규직 전환",
      achievements: [],
      stack: ["Java", "Spring", "Oracle", "jQuery", "Kendo UI"],
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
