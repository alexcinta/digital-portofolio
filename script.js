/* ============================================================================
   ⚙️ PORTFOLIO SCRIPT
   Logică simplă, fără dependențe externe.
   ============================================================================ */

(function () {
  'use strict';

  const D = window.PORTFOLIO_DATA;
  if (!D) {
    console.error('PORTFOLIO_DATA nu este disponibil. Verifică data.js');
    return;
  }

  const ICONS = {
    network: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M20.49 3.51a12 12 0 0 1 0 16.97M3.51 20.49a12 12 0 0 1 0-16.97"/></svg>',
    cloud:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
    cpu:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
    code:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    sun:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
    moon:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    mail:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    linkedin:'<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',
    github:  '<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    twitter: '<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>',
    globe:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    image:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48" height="48"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>'
  };

  function renderProfile() {
    document.title = `${D.profile.name} · ${D.profile.title}`;
    document.getElementById('logo-mark').textContent = D.profile.initials;
    document.getElementById('logo-text').textContent = D.profile.name;
    document.getElementById('hero-name').textContent = D.profile.name;
    document.getElementById('hero-role').textContent = D.profile.title;
    document.getElementById('hero-tagline').textContent = D.profile.tagline;

    const avail = document.getElementById('hero-availability');
    if (D.profile.available) avail.textContent = 'Open to work';
    else document.getElementById('hero-badge').style.display = 'none';

    const cvBtn = document.getElementById('cv-button');
    if (D.profile.cv) {
      cvBtn.href = D.profile.cv;
      cvBtn.setAttribute('download', '');
    }

    document.getElementById('hero-stats').innerHTML = D.about.highlights.map(h => `
      <div class="stat" data-testid="hero-stat">
        <div class="stat-value">${h.value}</div>
        <div class="stat-label">${h.label}</div>
      </div>
    `).join('');

    document.getElementById('hero-terminal').innerHTML =
      `<span class="com">// whoami</span>\n` +
      `<span class="key">name</span>     : <span class="val">"${D.profile.name}"</span>\n` +
      `<span class="key">role</span>     : <span class="val">"${D.profile.title}"</span>\n` +
      `<span class="key">location</span> : <span class="val">"${D.profile.location}"</span>\n` +
      `<span class="key">stack</span>    : [<span class="val">"network"</span>, <span class="val">"cloud"</span>, <span class="val">"iot"</span>]\n` +
      `<span class="key">status</span>   : <span class="val">"${D.profile.available ? 'available' : 'busy'}"</span>`;
  }

  function renderAbout() {
    document.getElementById('about-heading').textContent = D.about.heading;
    document.getElementById('about-text').innerHTML = D.about.paragraphs.map(p => `<p>${p}</p>`).join('');

    document.getElementById('education-list').innerHTML = D.education.map(e => `
      <li data-testid="education-item">
        <div class="t-period">${e.period}</div>
        <div class="t-title">${e.degree}</div>
        <div class="t-sub">${e.school}</div>
        ${e.description ? `<div class="t-desc">${e.description}</div>` : ''}
      </li>
    `).join('');

    document.getElementById('experience-list').innerHTML = D.experience.map(x => `
      <li data-testid="experience-item">
        <div class="t-period">${x.period}</div>
        <div class="t-title">${x.role}</div>
        <div class="t-sub">${x.company}${x.location ? ` · ${x.location}` : ''}</div>
        ${x.bullets && x.bullets.length ? `<ul class="t-bullets">${x.bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}
      </li>
    `).join('');
  }

  function renderSkills() {
    document.getElementById('skills-grid').innerHTML = D.skills.map(group => `
      <div class="skill-card reveal" data-testid="skill-card">
        <div class="skill-card-head">
          <div class="skill-icon">${ICONS[group.icon] || ICONS.code}</div>
          <h3 class="skill-card-title">${group.group}</h3>
        </div>
        <div class="skill-items">
          ${group.items.map(s => `
            <div class="skill-item">
              <div class="skill-row">
                <span class="skill-name">${s.name}</span>
                <span class="skill-level">${s.level}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-fill" style="transform: translateX(${s.level - 100}%)"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  function renderProjects() {
    const list = document.getElementById('projects-list');
    list.innerHTML = D.projects.map(p => {
      const linksHtml = [];
      if (p.links && p.links.live)       linksHtml.push(`<a href="${p.links.live}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">${ICONS.globe} Live</a>`);
      if (p.links && p.links.github)     linksHtml.push(`<a href="${p.links.github}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">${ICONS.github} Code</a>`);
      if (p.links && p.links.case_study) linksHtml.push(`<a href="${p.links.case_study}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">Case study</a>`);

      const placeholderHtml = `<div class="project-images-placeholder">${ICONS.image}<div>Adaugă imagini în<br/><code>/assets/projects/</code></div></div>`;
      const imagesHtml = (p.images && p.images.length)
        ? `<img src="${p.images[0]}" alt="${p.name}" loading="lazy" data-fallback="1" />`
        : placeholderHtml;

      return `
        <article class="project-card reveal" data-testid="project-card-${p.id}">
          <div class="project-content">
            ${p.status ? `<span class="project-status">● ${p.status}</span>` : ''}
            <h3 class="project-name">${p.name}</h3>
            <div class="project-tagline">${p.tagline}</div>
            <p class="project-desc">${p.description}</p>
            ${p.features && p.features.length ? `<ul class="project-features">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>` : ''}
            ${p.technologies && p.technologies.length ? `<div class="project-tech">${p.technologies.map(t => `<span class="tech-pill">${t}</span>`).join('')}</div>` : ''}
            ${linksHtml.length ? `<div class="project-links">${linksHtml.join('')}</div>` : ''}
          </div>
          <div class="project-images">${imagesHtml}</div>
        </article>
      `;
    }).join('');

    list.querySelectorAll('img[data-fallback]').forEach(img => {
      img.addEventListener('error', () => {
        const wrap = img.parentElement;
        if (wrap) wrap.innerHTML = `<div class="project-images-placeholder">${ICONS.image}<div>Adaugă imagini în<br/><code>/assets/projects/</code></div></div>`;
      });
    });
  }

  function renderHomelab() {
    document.getElementById('homelab-intro').textContent = D.homelab.intro;

    document.getElementById('hardware-list').innerHTML = D.homelab.hardware.map(h => `
      <li>
        <div class="hw-name">${h.name}</div>
        <div class="hw-spec">${h.spec}</div>
        <div class="hw-role">${h.role}</div>
      </li>
    `).join('');

    document.getElementById('services-grid').innerHTML = D.homelab.services.map(s => `
      <div class="service-card">
        <span class="service-cat">${s.category}</span>
        <div class="service-name">${s.name}</div>
        <div class="service-desc">${s.description}</div>
      </div>
    `).join('');
  }

  function renderContact() {
    document.getElementById('contact-heading').textContent = D.contact.heading;
    document.getElementById('contact-intro').textContent = D.contact.intro;

    const links = [];
    if (D.contact.email)    links.push({ icon: 'mail',     label: 'Email',    value: D.contact.email,    href: 'mailto:' + D.contact.email });
    if (D.contact.linkedin) links.push({ icon: 'linkedin', label: 'LinkedIn', value: D.contact.linkedin.replace('https://', ''), href: D.contact.linkedin });
    if (D.contact.github)   links.push({ icon: 'github',   label: 'GitHub',   value: D.contact.github.replace('https://', ''),   href: D.contact.github });
    if (D.contact.twitter)  links.push({ icon: 'twitter',  label: 'Twitter',  value: D.contact.twitter.replace('https://', ''),  href: D.contact.twitter });
    if (D.contact.website)  links.push({ icon: 'globe',    label: 'Website',  value: D.contact.website.replace('https://', ''),  href: D.contact.website });

    document.getElementById('contact-links').innerHTML = links.map(l => `
      <li>
        <a href="${l.href}" target="_blank" rel="noopener">
          ${ICONS[l.icon] || ''}
          <span>
            <span class="c-label">${l.label}</span>
            <span class="c-value">${l.value}</span>
          </span>
        </a>
      </li>
    `).join('');

    document.getElementById('contact-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const name    = document.getElementById('form-name').value.trim();
      const email   = document.getElementById('form-email').value.trim();
      const message = document.getElementById('form-message').value.trim();
      if (!name || !email || !message) return;

      const subject = encodeURIComponent(`Contact de la ${name}`);
      const body    = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
      window.location.href = `mailto:${D.contact.email}?subject=${subject}&body=${body}`;
    });
  }

  function renderFooter() {
    document.getElementById('footer-year').textContent = D.meta.copyrightYear;
  }

  function setupTheme() {
    const root = document.documentElement;
    const btn  = document.getElementById('theme-toggle');

    function apply(theme) {
      if (theme === 'light') root.setAttribute('data-theme', 'light');
      else root.removeAttribute('data-theme');
      const currentIcon = document.getElementById('theme-icon');
      if (currentIcon) {
        const svg = (theme === 'light' ? ICONS.moon : ICONS.sun).replace('<svg', '<svg id="theme-icon"');
        currentIcon.outerHTML = svg;
      }
    }

    const saved = localStorage.getItem('portfolio-theme');
    apply(saved || 'dark');

    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      apply(next);
      localStorage.setItem('portfolio-theme', next);
    });
  }

  function setupReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          if (entry.target.classList.contains('skill-card')) {
            entry.target.querySelectorAll('.skill-fill').forEach(f => { f.style.transform = 'translateX(0)'; });
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  function setupActiveLink() {
    const sections = document.querySelectorAll('main section[id]');
    const links = document.querySelectorAll('.nav-links a');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => observer.observe(s));
  }

  function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  function setupMobileMenu() {
    const toggle = document.getElementById('mobile-toggle');
    const menu   = document.getElementById('mobile-menu');
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
  }

  function init() {
    renderProfile();
    renderAbout();
    renderSkills();
    renderProjects();
    renderHomelab();
    renderContact();
    renderFooter();
    setupTheme();
    setupReveal();
    setupActiveLink();
    setupNavbarScroll();
    setupMobileMenu();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();