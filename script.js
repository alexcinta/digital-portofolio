/* ============================================================================
   PORTFOLIO SCRIPT
   ----------------------------------------------------------------------------
   Renders the portfolio from PORTFOLIO_DATA.
   No external JavaScript dependencies are required.
   ============================================================================ */

(function () {
  "use strict";

  const D = window.PORTFOLIO_DATA;

  if (!D) {
    console.error(
      "PORTFOLIO_DATA is not available. Make sure data.js is loaded before script.js."
    );
    return;
  }


  // ==========================================================================
  // ICONS
  // ==========================================================================

  const ICONS = {
    network: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" width="20" height="20" aria-hidden="true">
        <circle cx="12" cy="12" r="2"/>
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49"/>
        <path d="M7.76 16.24a6 6 0 0 1 0-8.49"/>
        <path d="M20.49 3.51a12 12 0 0 1 0 16.97"/>
        <path d="M3.51 20.49a12 12 0 0 1 0-16.97"/>
      </svg>
    `,

    cloud: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" width="20" height="20" aria-hidden="true">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    `,

    cpu: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" width="20" height="20" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <rect x="9" y="9" width="6" height="6"/>
        <line x1="9" y1="1" x2="9" y2="4"/>
        <line x1="15" y1="1" x2="15" y2="4"/>
        <line x1="9" y1="20" x2="9" y2="23"/>
        <line x1="15" y1="20" x2="15" y2="23"/>
        <line x1="20" y1="9" x2="23" y2="9"/>
        <line x1="20" y1="14" x2="23" y2="14"/>
        <line x1="1" y1="9" x2="4" y2="9"/>
        <line x1="1" y1="14" x2="4" y2="14"/>
      </svg>
    `,

    code: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" width="20" height="20" aria-hidden="true">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    `,

    activity: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" width="20" height="20" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    `,

    server: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" width="20" height="20" aria-hidden="true">
        <rect x="2" y="2" width="20" height="8" rx="2"/>
        <rect x="2" y="14" width="20" height="8" rx="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/>
        <line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    `,

    database: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" width="20" height="20" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v7c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
        <path d="M3 12v7c0 1.66 4.03 3 9 3s9-1.34 9-3v-7"/>
      </svg>
    `,

    users: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" width="20" height="20" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    `,

    settings: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" width="20" height="20" aria-hidden="true">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06
          a2 2 0 1 1-2.83 2.83l-.06-.06
          a1.65 1.65 0 0 0-1.82-.33
          1.65 1.65 0 0 0-1 1.51V21
          a2 2 0 1 1-4 0v-.09
          a1.65 1.65 0 0 0-1.08-1.51
          1.65 1.65 0 0 0-1.82.33l-.06.06
          a2 2 0 1 1-2.83-2.83l.06-.06
          A1.65 1.65 0 0 0 4.6 15
          a1.65 1.65 0 0 0-1.51-1H3
          a2 2 0 1 1 0-4h.09
          A1.65 1.65 0 0 0 4.6 9
          a1.65 1.65 0 0 0-.33-1.82l-.06-.06
          a2 2 0 1 1 2.83-2.83l.06.06
          A1.65 1.65 0 0 0 9 4.6h.08
          A1.65 1.65 0 0 0 10 3.09V3
          a2 2 0 1 1 4 0v.09
          a1.65 1.65 0 0 0 1 1.51
          1.65 1.65 0 0 0 1.82-.33l.06-.06
          a2 2 0 1 1 2.83 2.83l-.06.06
          a1.65 1.65 0 0 0-.33 1.82V9
          a1.65 1.65 0 0 0 1.51 1H21
          a2 2 0 1 1 0 4h-.09
          A1.65 1.65 0 0 0 19.4 15z"/>
      </svg>
    `,

    external: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" width="16" height="16" aria-hidden="true">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8
          a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
    `,

    check: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" width="16" height="16" aria-hidden="true">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    `,

    arrow: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" width="16" height="16" aria-hidden="true">
        <line x1="5" y1="12" x2="19" y2="12"/>
        <polyline points="12 5 19 12 12 19"/>
      </svg>
    `,

    sun: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" width="18" height="18" aria-hidden="true">
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41
          M17.66 17.66l1.41 1.41M2 12h2M20 12h2
          M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
      </svg>
    `,

    moon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" width="18" height="18" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3
          7 7 0 0 0 21 12.79z"/>
      </svg>
    `,

    mail: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" width="18" height="18" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12
          c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6
          c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    `,

    linkedin: `
      <svg viewBox="0 0 24 24" fill="currentColor"
        width="18" height="18" aria-hidden="true">
        <path d="M19 0H5C2.239 0 0 2.239 0 5v14
          c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5
          c0-2.761-2.238-5-5-5zM8 19H5V8h3v11z
          M6.5 6.732c-.966 0-1.75-.79-1.75-1.764
          s.784-1.764 1.75-1.764 1.75.79 1.75 1.764
          -.783 1.764-1.75 1.764zM20 19h-3v-5.604
          c0-3.368-4-3.113-4 0V19h-3V8h3v1.765
          c1.396-2.586 7-2.777 7 2.476V19z"/>
      </svg>
    `,

    github: `
      <svg viewBox="0 0 24 24" fill="currentColor"
        width="18" height="18" aria-hidden="true">
        <path d="M12 .297C5.37.297 0 5.67 0 12.297
          c0 5.303 3.438 9.8 8.205 11.385
          .6.113.82-.258.82-.577
          0-.285-.01-1.04-.015-2.04
          -3.338.724-4.042-1.61-4.042-1.61
          -.546-1.385-1.335-1.755-1.335-1.755
          -1.087-.744.084-.729.084-.729
          1.205.084 1.838 1.236 1.838 1.236
          1.07 1.835 2.809 1.305 3.495.998
          .108-.776.417-1.305.76-1.605
          -2.665-.3-5.466-1.332-5.466-5.93
          0-1.31.465-2.38 1.235-3.22
          -.135-.303-.54-1.523.105-3.176
          0 0 1.005-.322 3.3 1.23
          .96-.267 1.98-.399 3-.405
          1.02.006 2.04.138 3 .405
          2.28-1.552 3.285-1.23 3.285-1.23
          .645 1.653.24 2.873.12 3.176
          .765.84 1.23 1.91 1.23 3.22
          0 4.61-2.805 5.625-5.475 5.92
          .42.36.81 1.096.81 2.22
          0 1.606-.015 2.896-.015 3.286
          0 .315.21.69.825.57
          C20.565 22.092 24 17.592 24 12.297
          24 5.67 18.627.297 12 .297z"/>
      </svg>
    `,

    twitter: `
      <svg viewBox="0 0 24 24" fill="currentColor"
        width="18" height="18" aria-hidden="true">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53
          4.48 4.48 0 0 0-7.86 3v1
          A10.66 10.66 0 0 1 3 4s-4 9 5 13
          a11.64 11.64 0 0 1-7 2
          c9 5 20 0 20-11.5
          a4.5 4.5 0 0 0-.08-.83
          A7.72 7.72 0 0 0 23 3z"/>
      </svg>
    `,

    globe: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" width="18" height="18" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10
          15.3 15.3 0 0 1-4 10
          15.3 15.3 0 0 1-4-10
          15.3 15.3 0 0 1 4-10z"/>
      </svg>
    `,

    image: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="1.5" width="48" height="48" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
    `
  };


  // ==========================================================================
  // HELPERS
  // ==========================================================================

  function getElement(id) {
    return document.getElementById(id);
  }

  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function formatVisibleUrl(url) {
    return String(url || "")
      .replace(/^https?:\/\//, "")
      .replace(/\/$/, "");
  }

  function getIcon(iconName, fallback = "code") {
    return ICONS[iconName] || ICONS[fallback] || "";
  }

  function createTags(items, className = "tech-pill") {
    if (!Array.isArray(items) || items.length === 0) {
      return "";
    }

    return items
      .map(
        (item) =>
          `<span class="${className}">${escapeHTML(item)}</span>`
      )
      .join("");
  }

  function updateCvLinks() {
    if (!D.profile?.cv) {
      return;
    }

    [
      "cv-button",
      "hero-cv-button",
      "contact-cv-button"
    ].forEach((id) => {
      const link = getElement(id);

      if (!link) {
        return;
      }

      link.href = D.profile.cv;
      link.setAttribute("download", "");
    });
  }


  // ==========================================================================
  // PROFILE AND HERO
  // ==========================================================================

  function renderProfile() {
    const profile = D.profile || {};

    document.title =
      `${profile.name || "Portfolio"} | ${profile.title || "Portfolio"}`;

    const logoMark = getElement("logo-mark");
    const logoText = getElement("logo-text");
    const heroName = getElement("hero-name");
    const heroRole = getElement("hero-role");
    const heroTagline = getElement("hero-tagline");
    const heroDescription = getElement("hero-description");

    if (logoMark) {
      logoMark.textContent = profile.initials || "";
    }

    if (logoText) {
      logoText.textContent = profile.name || "";
    }

    if (heroName) {
      heroName.textContent = profile.name || "";
    }

    if (heroRole) {
      heroRole.textContent = profile.title || "";
    }

    if (heroTagline) {
      heroTagline.textContent = profile.tagline || "";
    }

    if (heroDescription) {
      heroDescription.textContent = profile.description || "";
    }

    renderHeroFocus();
    renderTerminal();
    updateCvLinks();
  }

  function renderHeroFocus() {
    const container = getElement("hero-focus");

    if (!container) {
      return;
    }

    const focus = Array.isArray(D.profile?.focus)
      ? D.profile.focus
      : [];

    if (focus.length === 0) {
      container.style.display = "none";
      return;
    }

    container.innerHTML = focus
      .map(
        (item) =>
          `<span class="hero-focus-item">${escapeHTML(item)}</span>`
      )
      .join("");
  }

  function renderTerminal() {
    const terminal = getElement("hero-terminal");

    if (!terminal) {
      return;
    }

    const profile = D.profile || {};
    const focus = Array.isArray(profile.focus)
      ? profile.focus
      : [];

    const learning = Array.isArray(profile.currentlyLearning)
      ? profile.currentlyLearning
      : [];

    const focusLines = focus.length
      ? focus
          .map((item) => `<span class="val">"${escapeHTML(item)}"</span>`)
          .join(", ")
      : `<span class="val">"Technical Operations"</span>`;

    const learningLines = learning.length
      ? learning
          .map((item) => `<span class="val">"${escapeHTML(item)}"</span>`)
          .join(", ")
      : `<span class="val">"Continuous Learning"</span>`;

    terminal.innerHTML =
      `<span class="com">$ whoami</span>\n` +
      `<span class="key">name</span>     : ` +
      `<span class="val">"${escapeHTML(profile.name)}"</span>\n\n` +

      `<span class="com">$ role</span>\n` +
      `<span class="val">"${escapeHTML(profile.title)}"</span>\n\n` +

      `<span class="com">$ focus</span>\n` +
      `[${focusLines}]\n\n` +

      `<span class="com">$ currently_learning</span>\n` +
      `[${learningLines}]\n\n` +

      `<span class="com">$ location</span>\n` +
      `<span class="val">"${escapeHTML(profile.location)}"</span>`;
  }


  // ==========================================================================
  // WHAT I DO
  // ==========================================================================

  function renderWhatIDo() {
    const container = getElement("what-i-do-grid");

    if (!container) {
      return;
    }

    const items = Array.isArray(D.whatIDo)
      ? D.whatIDo
      : [];

    container.innerHTML = items
      .map(
        (item) => `
          <article class="what-i-do-card reveal">
            <div class="what-i-do-icon">
              ${getIcon(item.icon, "code")}
            </div>

            <h3 class="what-i-do-title">
              ${escapeHTML(item.title)}
            </h3>

            <p class="what-i-do-description">
              ${escapeHTML(item.description)}
            </p>

            <div class="what-i-do-tech">
              ${createTags(item.technologies)}
            </div>
          </article>
        `
      )
      .join("");
  }


  // ==========================================================================
  // ABOUT
  // ==========================================================================

  function renderAbout() {
    const heading = getElement("about-heading");
    const text = getElement("about-text");
    const highlights = getElement("about-highlights");
    const educationList = getElement("education-list");

    if (heading && D.about?.heading) {
      heading.textContent = D.about.heading;
    }

    if (text) {
      const paragraphs = Array.isArray(D.about?.paragraphs)
        ? D.about.paragraphs
        : [];

      text.innerHTML = paragraphs
        .map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`)
        .join("");
    }

    if (highlights) {
      const items = Array.isArray(D.about?.highlights)
        ? D.about.highlights
        : [];

      highlights.innerHTML = items
        .map(
          (item) => `
            <div class="about-highlight">
              <div class="highlight-value">
                ${escapeHTML(item.value)}
              </div>

              <div class="highlight-label">
                ${escapeHTML(item.label)}
              </div>
            </div>
          `
        )
        .join("");
    }

    if (educationList) {
      const education = Array.isArray(D.education)
        ? D.education
        : [];

      educationList.innerHTML = education
        .map(
          (item) => `
            <li data-testid="education-item">
              <div class="t-period">
                ${escapeHTML(item.period)}
              </div>

              <div class="t-title">
                ${escapeHTML(item.degree)}
              </div>

              <div class="t-sub">
                ${escapeHTML(item.school)}
              </div>

              ${
                item.description
                  ? `
                    <div class="t-desc">
                      ${escapeHTML(item.description)}
                    </div>
                  `
                  : ""
              }
            </li>
          `
        )
        .join("");
    }
  }


  // ==========================================================================
  // EXPERIENCE
  // ==========================================================================

  function renderExperience() {
    const container = getElement("experience-list");

    if (!container) {
      return;
    }

    const experience = Array.isArray(D.experience)
      ? D.experience
      : [];

    container.innerHTML = experience
      .map(
        (item, index) => `
          <article
            class="experience-card reveal"
            data-testid="experience-item-${index}"
          >
            <div class="experience-marker" aria-hidden="true"></div>

            <div class="experience-card-inner">
              <div class="experience-header">

                <div>
                  <h3 class="experience-role">
                    ${escapeHTML(item.role)}
                  </h3>

                  <div class="experience-company">
                    ${escapeHTML(item.company)}
                  </div>
                </div>

                <div class="experience-meta">
                  <span class="experience-period">
                    ${escapeHTML(item.period)}
                  </span>

                  ${
                    item.location
                      ? `
                        <span class="experience-location">
                          ${escapeHTML(item.location)}
                        </span>
                      `
                      : ""
                  }
                </div>

              </div>

              ${
                Array.isArray(item.bullets) && item.bullets.length
                  ? `
                    <ul class="experience-bullets">
                      ${item.bullets
                        .map(
                          (bullet) =>
                            `<li>${escapeHTML(bullet)}</li>`
                        )
                        .join("")}
                    </ul>
                  `
                  : ""
              }
            </div>
          </article>
        `
      )
      .join("");
  }


  // ==========================================================================
  // PROJECTS
  // ==========================================================================

  function createProjectPlaceholder() {
    return `
      <div class="project-images-placeholder">
        ${ICONS.image}

        <div>
          Add project screenshots to
          <br />
          <code>/assets/projects/</code>
        </div>
      </div>
    `;
  }

  function renderProjects() {
    const container = getElement("projects-list");

    if (!container) {
      return;
    }

    const projects = Array.isArray(D.projects)
      ? D.projects
      : [];

    container.innerHTML = projects
      .map((project) => {
        const links = [];

        if (project.links?.live) {
          links.push(`
            <a
              href="${escapeHTML(project.links.live)}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary btn-sm"
            >
              ${ICONS.globe}
              Live demo
            </a>
          `);
        }

        if (project.links?.github) {
          links.push(`
            <a
              href="${escapeHTML(project.links.github)}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline btn-sm"
            >
              ${ICONS.github}
              GitHub
            </a>
          `);
        }

        if (project.links?.case_study) {
          links.push(`
            <a
              href="${escapeHTML(project.links.case_study)}"
              class="btn btn-ghost btn-sm"
            >
              Case study
              ${ICONS.arrow}
            </a>
          `);
        }

        const images = Array.isArray(project.images)
          ? project.images
          : [];

        const imageHTML = images.length
          ? `
            <div class="project-image-main">
              <img
                src="${escapeHTML(images[0])}"
                alt="${escapeHTML(project.name)} project interface"
                loading="lazy"
                data-project-fallback="true"
              />
            </div>

            ${
              images.length > 1
                ? `
                  <div class="project-image-secondary">
                    <img
                      src="${escapeHTML(images[1])}"
                      alt="${escapeHTML(project.name)} additional interface"
                      loading="lazy"
                      data-project-fallback="true"
                    />
                  </div>
                `
                : ""
            }
          `
          : createProjectPlaceholder();

        return `
          <article
            class="project-card reveal"
            data-testid="project-card-${escapeHTML(project.id)}"
          >
            <div class="project-content">

              ${
                project.status
                  ? `
                    <span class="project-status">
                      <span class="status-dot"></span>
                      ${escapeHTML(project.status)}
                    </span>
                  `
                  : ""
              }

              <h3 class="project-name">
                ${escapeHTML(project.name)}
              </h3>

              <div class="project-tagline">
                ${escapeHTML(project.tagline)}
              </div>

              <p class="project-desc">
                ${escapeHTML(project.description)}
              </p>

              ${
                Array.isArray(project.highlights) &&
                project.highlights.length
                  ? `
                    <div class="project-highlights">
                      ${project.highlights
                        .map(
                          (highlight) => `
                            <div class="project-highlight">
                              ${ICONS.check}
                              <span>${escapeHTML(highlight)}</span>
                            </div>
                          `
                        )
                        .join("")}
                    </div>
                  `
                  : ""
              }

              ${
                Array.isArray(project.features) &&
                project.features.length
                  ? `
                    <details class="project-details">
                      <summary>
                        Explore key features
                      </summary>

                      <ul class="project-features">
                        ${project.features
                          .map(
                            (feature) =>
                              `<li>${escapeHTML(feature)}</li>`
                          )
                          .join("")}
                      </ul>
                    </details>
                  `
                  : ""
              }

              ${
                Array.isArray(project.technologies) &&
                project.technologies.length
                  ? `
                    <div class="project-tech">
                      ${createTags(project.technologies)}
                    </div>
                  `
                  : ""
              }

              ${
                links.length
                  ? `
                    <div class="project-links">
                      ${links.join("")}
                    </div>
                  `
                  : ""
              }

            </div>

            <div class="project-images">
              ${imageHTML}
            </div>
          </article>
        `;
      })
      .join("");

    container
      .querySelectorAll("img[data-project-fallback]")
      .forEach((image) => {
        image.addEventListener("error", () => {
          const imagesContainer = image.closest(".project-images");

          if (imagesContainer) {
            imagesContainer.innerHTML = createProjectPlaceholder();
          }
        });
      });
  }


  // ==========================================================================
  // HOMELAB
  // ==========================================================================

  function renderHomelab() {
    const heading = getElement("homelab-heading");
    const intro = getElement("homelab-intro");
    const topology = getElement("homelab-topology");
    const hardware = getElement("hardware-list");
    const services = getElement("services-grid");
    const goals = getElement("homelab-goals");

    if (heading && D.homelab?.heading) {
      heading.textContent = D.homelab.heading;
    }

    if (intro) {
      intro.textContent = D.homelab?.intro || "";
    }

    if (topology) {
      renderHomelabTopology(topology);
    }

    if (hardware) {
      const items = Array.isArray(D.homelab?.hardware)
        ? D.homelab.hardware
        : [];

      hardware.innerHTML = items
        .map(
          (item) => `
            <article class="hardware-card">
              <div class="hardware-icon">
                ${ICONS.server}
              </div>

              <div class="hw-role">
                ${escapeHTML(item.role)}
              </div>

              <h4 class="hw-name">
                ${escapeHTML(item.name)}
              </h4>

              ${
                item.spec
                  ? `
                    <p class="hw-spec">
                      ${escapeHTML(item.spec)}
                    </p>
                  `
                  : ""
              }
            </article>
          `
        )
        .join("");
    }

    if (services) {
      const items = Array.isArray(D.homelab?.services)
        ? D.homelab.services
        : [];

      services.innerHTML = items
        .map(
          (item) => `
            <article class="service-card">

              <div class="service-card-top">
                <span class="service-cat">
                  ${escapeHTML(item.category)}
                </span>

                ${
                  item.status
                    ? `
                      <span class="service-status">
                        ${escapeHTML(item.status)}
                      </span>
                    `
                    : ""
                }
              </div>

              <h4 class="service-name">
                ${escapeHTML(item.name)}
              </h4>

              <p class="service-desc">
                ${escapeHTML(item.description)}
              </p>

            </article>
          `
        )
        .join("");
    }

    if (goals) {
      const items = Array.isArray(D.homelab?.goals)
        ? D.homelab.goals
        : [];

      goals.innerHTML = items
        .map(
          (goal) => `
            <li>
              ${ICONS.check}
              <span>${escapeHTML(goal)}</span>
            </li>
          `
        )
        .join("");
    }
  }

  function renderHomelabTopology(container) {
    const topology = D.homelab?.topology || {};
    const path = Array.isArray(topology.path)
      ? topology.path
      : [];

    const branches = Array.isArray(topology.branches)
      ? topology.branches
      : [];

    if (path.length === 0 && branches.length === 0) {
      container.innerHTML = "";
      return;
    }

    const pathHTML = path
      .map(
        (node, index) => `
          <div class="topology-step">
            <div class="topology-node">
              <span class="topology-node-index">
                ${String(index + 1).padStart(2, "0")}
              </span>

              <span class="topology-node-label">
                ${escapeHTML(node)}
              </span>
            </div>

            ${
              index < path.length - 1
                ? `<div class="topology-connector" aria-hidden="true"></div>`
                : ""
            }
          </div>
        `
      )
      .join("");

    const branchesHTML = branches.length
      ? `
        <div class="topology-branch-connector" aria-hidden="true"></div>

        <div class="topology-branches">
          ${branches
            .map(
              (node) => `
                <div class="topology-branch">
                  <div class="topology-branch-line" aria-hidden="true"></div>

                  <div class="topology-node topology-node-branch">
                    ${ICONS.server}

                    <span class="topology-node-label">
                      ${escapeHTML(node)}
                    </span>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
      `
      : "";

    container.innerHTML = `
      <div class="topology-path">
        ${pathHTML}
      </div>

      ${branchesHTML}
    `;
  }


  // ==========================================================================
  // LEADERSHIP
  // ==========================================================================

  function renderLeadership() {
    const heading = getElement("leadership-heading");
    const intro = getElement("leadership-intro");
    const grid = getElement("leadership-grid");

    if (heading && D.leadership?.heading) {
      heading.textContent = D.leadership.heading;
    }

    if (intro) {
      intro.textContent = D.leadership?.intro || "";
    }

    if (!grid) {
      return;
    }

    const areas = Array.isArray(D.leadership?.areas)
      ? D.leadership.areas
      : [];

    const areaIcons = [
      ICONS.users,
      ICONS.settings,
      ICONS.network
    ];

    grid.innerHTML = areas
      .map(
        (area, index) => `
          <article class="leadership-card reveal">

            <div class="leadership-icon">
              ${areaIcons[index] || ICONS.users}
            </div>

            <h3 class="leadership-title">
              ${escapeHTML(area.title)}
            </h3>

            <div class="leadership-items">
              ${createTags(area.items, "leadership-pill")}
            </div>

          </article>
        `
      )
      .join("");
  }


  // ==========================================================================
  // SKILLS
  // ==========================================================================

  function renderSkills() {
    const container = getElement("skills-grid");

    if (!container) {
      return;
    }

    const groups = Array.isArray(D.skills)
      ? D.skills
      : [];

    container.innerHTML = groups
      .map(
        (group) => `
          <article
            class="skill-card reveal"
            data-testid="skill-card"
          >
            <div class="skill-card-head">

              <div class="skill-icon">
                ${getIcon(group.icon, "code")}
              </div>

              <h3 class="skill-card-title">
                ${escapeHTML(group.group)}
              </h3>

            </div>

            <div class="skill-items">
              ${
                Array.isArray(group.items)
                  ? group.items
                      .map(
                        (skill) => `
                          <span class="skill-tag">
                            ${escapeHTML(skill.name)}
                          </span>
                        `
                      )
                      .join("")
                  : ""
              }
            </div>
          </article>
        `
      )
      .join("");
  }


  // ==========================================================================
  // CONTACT
  // ==========================================================================

  function renderContact() {
    const heading = getElement("contact-heading");
    const intro = getElement("contact-intro");
    const container = getElement("contact-links");

    if (heading && D.contact?.heading) {
      heading.textContent = D.contact.heading;
    }

    if (intro) {
      intro.textContent = D.contact?.intro || "";
    }

    if (!container) {
      return;
    }

    const links = [];

    if (D.contact?.email) {
      links.push({
        icon: "mail",
        label: "Email me",
        value: D.contact.email,
        href: `mailto:${D.contact.email}`,
        external: false
      });
    }

    if (D.contact?.linkedin) {
      links.push({
        icon: "linkedin",
        label: "LinkedIn",
        value: formatVisibleUrl(D.contact.linkedin),
        href: D.contact.linkedin,
        external: true
      });
    }

    if (D.contact?.github) {
      links.push({
        icon: "github",
        label: "GitHub",
        value: formatVisibleUrl(D.contact.github),
        href: D.contact.github,
        external: true
      });
    }

    if (D.contact?.twitter) {
      links.push({
        icon: "twitter",
        label: "Twitter",
        value: formatVisibleUrl(D.contact.twitter),
        href: D.contact.twitter,
        external: true
      });
    }

    if (D.contact?.website) {
      links.push({
        icon: "globe",
        label: "Website",
        value: formatVisibleUrl(D.contact.website),
        href: D.contact.website,
        external: true
      });
    }

    container.innerHTML = links
      .map(
        (link) => `
          <a
            href="${escapeHTML(link.href)}"
            class="contact-link-card"
            ${
              link.external
                ? `target="_blank" rel="noopener noreferrer"`
                : ""
            }
          >
            <span class="contact-link-icon">
              ${getIcon(link.icon, "globe")}
            </span>

            <span class="contact-link-content">
              <span class="c-label">
                ${escapeHTML(link.label)}
              </span>

              <span class="c-value">
                ${escapeHTML(link.value)}
              </span>
            </span>

            <span class="contact-link-arrow">
              ${link.external ? ICONS.external : ICONS.arrow}
            </span>
          </a>
        `
      )
      .join("");
  }


  // ==========================================================================
  // FOOTER
  // ==========================================================================

  function renderFooter() {
    const year = getElement("footer-year");
    const builtWith = getElement("footer-built-with");

    if (year) {
      year.textContent =
        D.meta?.copyrightYear || new Date().getFullYear();
    }

    if (builtWith && D.meta?.builtWith) {
      builtWith.textContent = D.meta.builtWith;
    }
  }


  // ==========================================================================
  // THEME
  // ==========================================================================

  function setupTheme() {
    const root = document.documentElement;
    const button = getElement("theme-toggle");

    if (!button) {
      return;
    }

    function applyTheme(theme) {
      const isLight = theme === "light";

      if (isLight) {
        root.setAttribute("data-theme", "light");
      } else {
        root.removeAttribute("data-theme");
      }

      button.innerHTML = isLight
        ? ICONS.moon
        : ICONS.sun;

      button.setAttribute(
        "aria-label",
        isLight
          ? "Switch to dark theme"
          : "Switch to light theme"
      );

      button.setAttribute(
        "title",
        isLight
          ? "Switch to dark theme"
          : "Switch to light theme"
      );
    }

    let savedTheme = null;

    try {
      savedTheme = localStorage.getItem("portfolio-theme");
    } catch (error) {
      console.warn("Theme preference could not be read.", error);
    }

    const preferredTheme =
      savedTheme ||
      (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark"
      );

    applyTheme(preferredTheme);

    button.addEventListener("click", () => {
      const nextTheme =
        root.getAttribute("data-theme") === "light"
          ? "dark"
          : "light";

      applyTheme(nextTheme);

      try {
        localStorage.setItem("portfolio-theme", nextTheme);
      } catch (error) {
        console.warn("Theme preference could not be saved.", error);
      }
    });
  }


  // ==========================================================================
  // REVEAL ANIMATIONS
  // ==========================================================================

  function setupReveal() {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("in-view");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });
  }


  // ==========================================================================
  // ACTIVE NAVIGATION LINK
  // ==========================================================================

  function setupActiveLink() {
    const sections = document.querySelectorAll("main section[id]");
    const links = document.querySelectorAll(".nav-links a");

    if (
      !("IntersectionObserver" in window) ||
      links.length === 0
    ) {
      return;
    }

    const navigationTargets = new Set(
      Array.from(links).map((link) =>
        link.getAttribute("href")?.replace("#", "")
      )
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio
          );

        if (visibleEntries.length === 0) {
          return;
        }

        let activeId = visibleEntries[0].target.id;

        if (!navigationTargets.has(activeId)) {
          return;
        }

        links.forEach((link) => {
          const target =
            link.getAttribute("href") === `#${activeId}`;

          link.classList.toggle("active", target);
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: [0.05, 0.15, 0.3]
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }


  // ==========================================================================
  // NAVBAR
  // ==========================================================================

  function setupNavbarScroll() {
    const navbar = getElement("navbar");

    if (!navbar) {
      return;
    }

    function updateNavbar() {
      navbar.classList.toggle(
        "scrolled",
        window.scrollY > 20
      );
    }

    updateNavbar();

    window.addEventListener(
      "scroll",
      updateNavbar,
      { passive: true }
    );
  }


  // ==========================================================================
  // MOBILE MENU
  // ==========================================================================

  function setupMobileMenu() {
    const toggle = getElement("mobile-toggle");
    const menu = getElement("mobile-menu");

    if (!toggle || !menu) {
      return;
    }

    function closeMenu() {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");

      toggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    document.addEventListener("click", (event) => {
      if (
        !menu.classList.contains("open") ||
        menu.contains(event.target) ||
        toggle.contains(event.target)
      ) {
        return;
      }

      closeMenu();
    });
  }


  // ==========================================================================
  // SMOOTH INTERNAL NAVIGATION
  // ==========================================================================

  function setupSmoothScroll() {
    document
      .querySelectorAll('a[href^="#"]')
      .forEach((link) => {
        link.addEventListener("click", (event) => {
          const selector = link.getAttribute("href");

          if (!selector || selector === "#") {
            return;
          }

          const target = document.querySelector(selector);

          if (!target) {
            return;
          }

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        });
      });
  }


  // ==========================================================================
  // INITIALIZATION
  // ==========================================================================

  function init() {
    renderProfile();
    renderWhatIDo();
    renderAbout();
    renderExperience();
    renderProjects();
    renderHomelab();
    renderLeadership();
    renderSkills();
    renderContact();
    renderFooter();

    setupTheme();
    setupReveal();
    setupActiveLink();
    setupNavbarScroll();
    setupMobileMenu();
    setupSmoothScroll();
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      init
    );
  } else {
    init();
  }

})();
