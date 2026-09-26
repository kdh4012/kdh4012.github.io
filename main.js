(function () {
  const d = PORTFOLIO;
  const $ = (id) => document.getElementById(id);
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const tags = (arr) => (arr || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("");
  const hideSection = (id) => { const s = $(id); if (s) s.hidden = true; };

  // ---------- Profile / Hero ----------
  const p = d.profile;
  document.title = `${p.name} | ${p.role}`;
  $("nav-logo").textContent = p.nameEn || p.name;
  $("hero-role").textContent = p.role;
  $("hero-name").innerHTML = `${esc(p.name)}${p.nameEn ? ` <span>${esc(p.nameEn)}</span>` : ""}`;
  $("hero-tagline").textContent = p.tagline;
  $("hero-avatar").innerHTML = p.avatar
    ? `<img src="${esc(p.avatar)}" alt="${esc(p.name)}" />`
    : `<span>${esc((p.nameEn || p.name).charAt(0))}</span>`;

  // Lucide 아이콘 (MIT) — 인라인 SVG라 외부 요청 없이 테마 색(currentColor)을 따른다.
  const ICONS = {
    email: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
    instagram: '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
    blog: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
    resume: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 13H8"/><path d="M16 17H8"/><path d="M16 13h-2"/>',
  };
  const icon = (name) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

  const links = [
    p.email && { icon: "email", label: p.email, href: `mailto:${p.email}` },
    p.github && { icon: "github", label: "GitHub", href: p.github },
    p.instagram && { icon: "instagram", label: "Instagram", href: p.instagram },
    p.blog && { icon: "blog", label: "Blog", href: p.blog },
    p.linkedin && { icon: "linkedin", label: "LinkedIn", href: p.linkedin },
    p.resumePdf && { icon: "resume", label: "Resume PDF", href: p.resumePdf },
  ].filter(Boolean);
  // mailto 는 새 탭을 열면 빈 탭만 남으므로 외부 웹 링크에만 target 적용
  $("hero-links").innerHTML = links
    .map((l) => {
      const external = /^https?:/.test(l.href) ? ' target="_blank" rel="noopener"' : "";
      return `<a class="icon-btn" href="${esc(l.href)}"${external} title="${esc(l.label)}" aria-label="${esc(l.label)}">${icon(l.icon)}</a>`;
    })
    .join("");

  // ---------- Highlights ----------
  if (d.highlights?.length) {
    $("highlights").innerHTML = d.highlights
      .map((h) => `<div class="hl"><strong>${esc(h.value)}</strong><span>${esc(h.label)}</span></div>`)
      .join("");
  } else hideSection("highlights");

  // ---------- About ----------
  if (d.about?.length) $("about-body").innerHTML = d.about.map((t) => `<p>${esc(t)}</p>`).join("");
  else hideSection("about");

  // ---------- Skills ----------
  if (d.skills?.length) {
    $("skills-body").innerHTML = d.skills
      .map((s) => `<div class="skill"><h3>${esc(s.category)}</h3><div class="tags">${tags(s.items)}</div></div>`)
      .join("");
  } else hideSection("skills");

  // ---------- Experience ----------
  if (d.experience?.length) {
    $("experience-body").innerHTML = d.experience
      .map(
        (e) => `
      <li class="tl-item">
        <div class="tl-head">
          <h3>${esc(e.company)} <span class="muted">· ${esc(e.role)}</span></h3>
          <span class="period">${esc(e.period)}</span>
        </div>
        ${e.summary ? `<p class="tl-summary">${esc(e.summary)}</p>` : ""}
        ${e.achievements?.length ? `<ul class="bullets">${e.achievements.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>` : ""}
        <div class="tags">${tags(e.stack)}</div>
      </li>`
      )
      .join("");
  } else hideSection("experience");

  // ---------- Projects ----------
  const projRow = (label, v) => (v ? `<div class="pr-row"><dt>${label}</dt><dd>${esc(v)}</dd></div>` : "");
  const projLinks = (l = {}) =>
    [
      l.github && ["GitHub", l.github],
      l.demo && ["Demo", l.demo],
      l.post && ["회고", l.post],
    ]
      .filter(Boolean)
      .map(([n, h]) => `<a href="${esc(h)}" target="_blank" rel="noopener">${n} ↗</a>`)
      .join("");

  if (d.projects?.length) {
    $("projects-body").innerHTML = d.projects
      .map(
        (pr) => `
      <article class="card">
        <div class="card-head">
          <h3>${esc(pr.title)}</h3>
          <span class="period">${esc(pr.period)}</span>
        </div>
        <p class="muted card-meta">${[pr.org, pr.role].filter(Boolean).map(esc).join(" · ")}</p>
        <dl class="pr">
          ${projRow("Problem", pr.problem)}
          ${projRow("Solution", pr.solution)}
          ${projRow("Result", pr.result)}
        </dl>
        <div class="tags">${tags(pr.stack)}</div>
        <div class="card-links">${projLinks(pr.links)}</div>
      </article>`
      )
      .join("");
  } else hideSection("projects");

  // ---------- Education / Certificates ----------
  const simpleList = (arr) =>
    arr
      .map((i) => `<li><div><strong>${esc(i.title)}</strong><span class="muted">${esc(i.sub)}</span></div><span class="period">${esc(i.period)}</span></li>`)
      .join("");
  const edu = d.education || [], cert = d.certificates || [];
  if (edu.length || cert.length) {
    $("education-body").innerHTML = simpleList(edu);
    $("certificates-body").innerHTML = simpleList(cert);
    if (!edu.length) $("education-body").parentElement.hidden = true;
    if (!cert.length) $("certificates-body").parentElement.hidden = true;
  } else hideSection("education");

  // ---------- Footer ----------
  $("footer").textContent = `© ${new Date().getFullYear()} ${p.nameEn || p.name}`;

  // 숨겨진 섹션은 내비게이션에서도 제거
  document.querySelectorAll("#nav-links a").forEach((a) => {
    const sec = document.querySelector(a.getAttribute("href"));
    if (!sec || sec.hidden) a.remove();
  });

  // ---------- Theme toggle ----------
  $("theme-btn").addEventListener("click", () => {
    const root = document.documentElement;
    const cur = root.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // ---------- Active nav on scroll ----------
  const navLinks = [...document.querySelectorAll("#nav-links a")];
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${en.target.id}`));
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  document.querySelectorAll("section.section:not([hidden])").forEach((s) => io.observe(s));
})();
