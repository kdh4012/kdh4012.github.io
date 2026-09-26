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

  const links = [
    p.email && { label: "Email", href: `mailto:${p.email}` },
    p.github && { label: "GitHub", href: p.github },
    p.instagram && { label: "Instagram", href: p.instagram },
    p.blog && { label: "Blog", href: p.blog },
    p.linkedin && { label: "LinkedIn", href: p.linkedin },
    p.resumePdf && { label: "Resume PDF", href: p.resumePdf, primary: true },
  ].filter(Boolean);
  $("hero-links").innerHTML = links
    .map((l) => `<a class="btn${l.primary ? " btn-primary" : ""}" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)}</a>`)
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
