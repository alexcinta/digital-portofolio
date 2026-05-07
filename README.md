1️⃣ portfolio/index.html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Portfolio personal — Network, Cloud & IoT Engineer" />
  <title>Portfolio</title>

  <!-- Favicon (opțional, înlocuiește cu propriul tău) -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%2322d3ee'/%3E%3Ctext x='50' y='62' font-family='Inter,sans-serif' font-size='44' font-weight='700' text-anchor='middle' fill='%230a0e1a'%3E%3C/text%3E%3C/svg%3E" />

  <!-- Google Fonts: Space Grotesk (titluri) + Inter (text) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="styles.css" />
</head>

<body>

  <!-- ========================================================================
       NAVBAR — sticky, link-uri spre secțiuni + dark mode + buton CV
       ======================================================================== -->
  <header class="navbar" id="navbar" data-testid="navbar">
    <div class="container nav-inner">
      <a href="#hero" class="nav-logo" data-testid="nav-logo">
        <span class="logo-mark" id="logo-mark">NT</span>
        <span class="logo-text" id="logo-text">Numele Tău</span>
      </a>

      <nav class="nav-links" aria-label="Primary">
        <a href="#about"    data-testid="nav-link-about">Despre</a>
        <a href="#skills"   data-testid="nav-link-skills">Skills</a>
        <a href="#projects" data-testid="nav-link-projects">Proiecte</a>
        <a href="#homelab"  data-testid="nav-link-homelab">Home Lab</a>
        <a href="#contact"  data-testid="nav-link-contact">Contact</a>
      </nav>

      <div class="nav-actions">
        <a href="#" id="cv-button" class="btn btn-ghost btn-sm" data-testid="download-cv-btn" download>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          <span>CV</span>
        </a>

        <button id="theme-toggle" class="btn btn-icon" aria-label="Toggle theme" data-testid="theme-toggle-btn">
          <svg id="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
        </button>

        <button id="mobile-toggle" class="btn btn-icon mobile-only" aria-label="Toggle menu" data-testid="mobile-menu-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>
    </div>

    <div class="mobile-menu" id="mobile-menu" data-testid="mobile-menu">
      <a href="#about"    data-testid="mobile-link-about">Despre</a>
      <a href="#skills"   data-testid="mobile-link-skills">Skills</a>
      <a href="#projects" data-testid="mobile-link-projects">Proiecte</a>
      <a href="#homelab"  data-testid="mobile-link-homelab">Home Lab</a>
      <a href="#contact"  data-testid="mobile-link-contact">Contact</a>
    </div>
  </header>

  <main>

    <!-- HERO -->
    <section id="hero" class="section hero" data-testid="hero-section">
      <div class="container hero-inner">
        <div class="hero-text reveal">
          <span class="badge" id="hero-badge" data-testid="hero-badge">
            <span class="dot"></span>
            <span id="hero-availability">Open to work</span>
          </span>
          <h1 class="hero-title">
            Salut, eu sunt <span class="accent" id="hero-name">Numele Tău</span>.
          </h1>
          <p class="hero-role" id="hero-role">Network & Cloud Engineer</p>
          <p class="hero-tagline" id="hero-tagline">Construiesc infrastructuri scalabile, sigure și automatizate.</p>

          <div class="hero-actions">
            <a href="#projects" class="btn btn-primary" data-testid="hero-cta-projects">
              Vezi proiectele
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="#contact" class="btn btn-outline" data-testid="hero-cta-contact">Contactează-mă</a>
          </div>

          <div class="hero-stats" id="hero-stats" data-testid="hero-stats"></div>
        </div>

        <div class="hero-visual reveal">
          <div class="hero-card">
            <div class="hero-card-header">
              <span class="dot-r"></span><span class="dot-y"></span><span class="dot-g"></span>
              <span class="hero-card-title">~/whoami</span>
            </div>
            <pre class="hero-card-body" id="hero-terminal"></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="section" data-testid="about-section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-num">01</span>
          <h2 class="section-title" id="about-heading">Despre mine</h2>
          <div class="section-line"></div>
        </div>

        <div class="about-grid">
          <div class="about-text reveal" id="about-text"></div>

          <div class="about-side reveal">
            <h3 class="side-title">Educație</h3>
            <ul class="timeline" id="education-list"></ul>

            <h3 class="side-title">Experiență</h3>
            <ul class="timeline" id="experience-list"></ul>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section id="skills" class="section" data-testid="skills-section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-num">02</span>
          <h2 class="section-title">Skills tehnice</h2>
          <div class="section-line"></div>
        </div>
        <div class="skills-grid" id="skills-grid"></div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="section" data-testid="projects-section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-num">03</span>
          <h2 class="section-title">Proiecte</h2>
          <div class="section-line"></div>
        </div>
        <div class="projects-list" id="projects-list"></div>
      </div>
    </section>

    <!-- HOME LAB -->
    <section id="homelab" class="section" data-testid="homelab-section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-num">04</span>
          <h2 class="section-title">Home Lab</h2>
          <div class="section-line"></div>
        </div>

        <p class="section-intro reveal" id="homelab-intro"></p>

        <div class="homelab-grid">
          <div class="homelab-block reveal">
            <h3 class="block-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
              Hardware
            </h3>
            <ul class="hardware-list" id="hardware-list"></ul>
          </div>

          <div class="homelab-block reveal">
            <h3 class="block-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              Servicii self-hosted
            </h3>
            <div class="services-grid" id="services-grid"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="section section-contact" data-testid="contact-section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-num">05</span>
          <h2 class="section-title" id="contact-heading">Hai să discutăm</h2>
          <div class="section-line"></div>
        </div>

        <div class="contact-grid">
          <div class="contact-info reveal">
            <p class="contact-intro" id="contact-intro"></p>
            <ul class="contact-links" id="contact-links"></ul>
          </div>

          <form id="contact-form" class="contact-form reveal" data-testid="contact-form" novalidate>
            <div class="form-row">
              <label for="form-name">Nume</label>
              <input type="text" id="form-name" name="name" required data-testid="contact-name-input" />
            </div>
            <div class="form-row">
              <label for="form-email">Email</label>
              <input type="email" id="form-email" name="email" required data-testid="contact-email-input" />
            </div>
            <div class="form-row">
              <label for="form-message">Mesaj</label>
              <textarea id="form-message" name="message" rows="5" required data-testid="contact-message-input"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" data-testid="contact-submit-btn">
              Trimite mesaj
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
            <p class="form-hint">Se va deschide clientul tău de email.</p>
          </form>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer" data-testid="footer">
    <div class="container footer-inner">
      <span id="footer-copy">© <span id="footer-year"></span> · Built with HTML · CSS · JS</span>
      <a href="#hero" class="footer-back" data-testid="back-to-top">↑ Sus</a>
    </div>
  </footer>

  <script src="data.js"></script>
  <script src="script.js"></script>
</body>
</html>
2️⃣ portfolio/styles.css
/* ============================================================================
   🎨 PORTFOLIO STYLES
   Toate culorile sunt variabile CSS în :root și [data-theme="light"].
   Pentru a schimba paleta, modifică doar variabilele de mai jos.
   ============================================================================ */

:root {
  --bg:           #0a0e1a;
  --bg-elev:      #0f1524;
  --surface:      #131a2c;
  --surface-2:    #1a2238;
  --border:       #1f2a44;
  --border-hover: #2c3a5e;

  --text:         #e8edf7;
  --text-muted:   #8b95ad;
  --text-dim:     #5b667e;

  --accent:       #22d3ee;
  --accent-2:     #34d399;
  --accent-glow:  rgba(34, 211, 238, 0.18);

  --radius-sm: 8px;
  --radius:    14px;
  --radius-lg: 20px;

  --shadow:    0 10px 40px -15px rgba(0, 0, 0, 0.6);
  --shadow-lg: 0 25px 60px -20px rgba(0, 0, 0, 0.7);

  --container: 1180px;

  --font-sans:    'Inter', system-ui, -apple-system, sans-serif;
  --font-display: 'Space Grotesk', 'Inter', sans-serif;
  --font-mono:    'JetBrains Mono', ui-monospace, monospace;

  --t: 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

[data-theme="light"] {
  --bg:           #fafbfc;
  --bg-elev:      #ffffff;
  --surface:      #ffffff;
  --surface-2:    #f1f4f9;
  --border:       #e2e8f0;
  --border-hover: #cbd5e1;

  --text:         #0f172a;
  --text-muted:   #475569;
  --text-dim:     #94a3b8;

  --accent:       #0891b2;
  --accent-2:     #059669;
  --accent-glow:  rgba(8, 145, 178, 0.15);

  --shadow:    0 8px 30px -10px rgba(15, 23, 42, 0.12);
  --shadow-lg: 0 20px 50px -15px rgba(15, 23, 42, 0.18);
}

*, *::before, *::after { box-sizing: border-box; }
* { margin: 0; padding: 0; }

html { scroll-behavior: smooth; scroll-padding-top: 80px; }

body {
  font-family: var(--font-sans);
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  transition: background var(--t), color var(--t);
}

body::before {
  content: '';
  position: fixed; inset: 0;
  background:
    radial-gradient(800px circle at 15% -5%, var(--accent-glow), transparent 50%),
    radial-gradient(600px circle at 85% 100%, rgba(52, 211, 153, 0.08), transparent 50%);
  z-index: -1; pointer-events: none;
}

body::after {
  content: '';
  position: fixed; inset: 0;
  background-image:
    linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.08;
  z-index: -1; pointer-events: none;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
}

img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; transition: color var(--t); }
button { font-family: inherit; cursor: pointer; border: 0; background: none; color: inherit; }
::selection { background: var(--accent); color: var(--bg); }

::-webkit-scrollbar { width: 10px; height: 10px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--surface-2); border-radius: 10px; border: 2px solid var(--bg); }
::-webkit-scrollbar-thumb:hover { background: var(--border-hover); }

/* LAYOUT */
.container { max-width: var(--container); margin: 0 auto; padding: 0 24px; }
.section { padding: 100px 0; position: relative; }

.section-header { display: flex; align-items: center; gap: 16px; margin-bottom: 56px; }
.section-num { font-family: var(--font-mono); color: var(--accent); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; }
.section-title { font-family: var(--font-display); font-size: clamp(28px, 4vw, 40px); font-weight: 700; letter-spacing: -0.02em; }
.section-line { flex: 1; height: 1px; background: linear-gradient(90deg, var(--border), transparent); }
.section-intro { font-size: 18px; color: var(--text-muted); max-width: 700px; margin-bottom: 48px; }

/* BUTTONS */
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 22px; border-radius: 999px;
  font-weight: 500; font-size: 14px; letter-spacing: 0.01em;
  border: 1px solid transparent; transition: all var(--t);
  white-space: nowrap; cursor: pointer; font-family: var(--font-sans);
}
.btn-primary { background: var(--accent); color: #0a0e1a; font-weight: 600; }
.btn-primary:hover { background: var(--accent-2); transform: translateY(-1px); box-shadow: 0 10px 30px -10px var(--accent-glow); }
.btn-outline { border-color: var(--border-hover); color: var(--text); }
.btn-outline:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-glow); }
.btn-ghost { color: var(--text-muted); background: var(--surface); border-color: var(--border); }
.btn-ghost:hover { color: var(--text); border-color: var(--border-hover); }
.btn-icon { width: 38px; height: 38px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; background: var(--surface); border: 1px solid var(--border); color: var(--text-muted); }
.btn-icon:hover { color: var(--accent); border-color: var(--accent); }
.btn-sm { padding: 8px 14px; font-size: 13px; }

/* BADGE */
.badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; border-radius: 999px; background: var(--surface); border: 1px solid var(--border); font-size: 13px; color: var(--text-muted); font-family: var(--font-mono); }
.badge .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent-2); box-shadow: 0 0 0 4px rgba(52, 211, 153, 0.2); animation: pulse 2s infinite; }
@keyframes pulse { 0%,100% { box-shadow: 0 0 0 4px rgba(52, 211, 153, 0.2); } 50% { box-shadow: 0 0 0 8px rgba(52, 211, 153, 0); } }

/* NAVBAR */
.navbar { position: sticky; top: 0; z-index: 100; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); background: color-mix(in srgb, var(--bg) 75%, transparent); border-bottom: 1px solid transparent; transition: border-color var(--t), background var(--t); }
.navbar.scrolled { border-bottom-color: var(--border); }
.nav-inner { display: flex; align-items: center; justify-content: space-between; height: 70px; gap: 24px; }
.nav-logo { display: flex; align-items: center; gap: 10px; font-family: var(--font-display); font-weight: 700; }
.logo-mark { width: 36px; height: 36px; border-radius: 10px; background: var(--accent); color: #0a0e1a; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; letter-spacing: -0.02em; }
.logo-text { font-size: 16px; }
.nav-links { display: flex; gap: 4px; align-items: center; }
.nav-links a { padding: 8px 14px; border-radius: 8px; font-size: 14px; color: var(--text-muted); position: relative; }
.nav-links a:hover { color: var(--text); background: var(--surface); }
.nav-links a.active { color: var(--accent); }
.nav-links a.active::after { content: ''; position: absolute; left: 14px; right: 14px; bottom: 2px; height: 2px; background: var(--accent); border-radius: 2px; }
.nav-actions { display: flex; align-items: center; gap: 8px; }
.mobile-only { display: none; }
.mobile-menu { display: none; flex-direction: column; padding: 12px; border-top: 1px solid var(--border); background: var(--bg-elev); }
.mobile-menu.open { display: flex; }
.mobile-menu a { padding: 12px 16px; border-radius: 8px; color: var(--text-muted); font-size: 15px; }
.mobile-menu a:hover { background: var(--surface); color: var(--text); }

/* HERO */
.hero { padding-top: 80px; padding-bottom: 120px; min-height: calc(100vh - 70px); display: flex; align-items: center; }
.hero-inner { display: grid; grid-template-columns: 1.2fr 1fr; gap: 80px; align-items: center; }
.hero-text { max-width: 640px; }
.hero-title { font-family: var(--font-display); font-size: clamp(36px, 6vw, 64px); line-height: 1.05; letter-spacing: -0.03em; font-weight: 700; margin: 24px 0 16px; }
.accent { background: linear-gradient(135deg, var(--accent), var(--accent-2)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
.hero-role { font-family: var(--font-mono); color: var(--accent); font-size: 16px; margin-bottom: 16px; }
.hero-tagline { font-size: 19px; color: var(--text-muted); max-width: 540px; line-height: 1.6; }
.hero-actions { display: flex; gap: 12px; margin-top: 36px; flex-wrap: wrap; }
.hero-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 56px; padding-top: 32px; border-top: 1px solid var(--border); }
.stat-value { font-family: var(--font-display); font-size: 28px; font-weight: 700; color: var(--text); letter-spacing: -0.02em; }
.stat-label { font-size: 13px; color: var(--text-muted); margin-top: 2px; }

.hero-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg); transform: rotate(0.5deg); transition: transform var(--t); }
.hero-card:hover { transform: rotate(0); }
.hero-card-header { display: flex; align-items: center; gap: 6px; padding: 14px 18px; border-bottom: 1px solid var(--border); background: var(--surface-2); }
.dot-r, .dot-y, .dot-g { width: 12px; height: 12px; border-radius: 50%; }
.dot-r { background: #ff5f57; } .dot-y { background: #febc2e; } .dot-g { background: #28c840; }
.hero-card-title { margin-left: 12px; font-family: var(--font-mono); font-size: 12px; color: var(--text-muted); }
.hero-card-body { padding: 24px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.8; color: var(--text-muted); white-space: pre-wrap; word-break: break-word; }
.hero-card-body .key { color: var(--accent); }
.hero-card-body .val { color: var(--text); }
.hero-card-body .com { color: var(--text-dim); }

/* ABOUT */
.about-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 64px; }
.about-text p { font-size: 17px; color: var(--text-muted); line-height: 1.8; margin-bottom: 18px; }
.side-title { font-family: var(--font-display); font-size: 18px; font-weight: 600; margin-bottom: 20px; margin-top: 32px; color: var(--text); }
.side-title:first-child { margin-top: 0; }
.timeline { list-style: none; position: relative; padding-left: 24px; border-left: 1px solid var(--border); }
.timeline li { padding: 0 0 24px 8px; position: relative; }
.timeline li::before { content: ''; position: absolute; left: -29px; top: 6px; width: 10px; height: 10px; border-radius: 50%; background: var(--bg); border: 2px solid var(--accent); }
.timeline .t-period { font-family: var(--font-mono); font-size: 12px; color: var(--accent); margin-bottom: 4px; }
.timeline .t-title { font-weight: 600; font-size: 15px; color: var(--text); margin-bottom: 2px; }
.timeline .t-sub { color: var(--text-muted); font-size: 14px; margin-bottom: 6px; }
.timeline .t-desc { color: var(--text-dim); font-size: 13.5px; }
.timeline .t-bullets { margin-top: 8px; padding-left: 18px; color: var(--text-muted); font-size: 13.5px; }
.timeline .t-bullets li { padding: 2px 0; }
.timeline .t-bullets li::before { display: none; }

/* SKILLS */
.skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
.skill-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 28px; transition: all var(--t); }
.skill-card:hover { border-color: var(--border-hover); transform: translateY(-3px); box-shadow: var(--shadow); }
.skill-card-head { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
.skill-icon { width: 38px; height: 38px; border-radius: 10px; background: var(--accent-glow); color: var(--accent); display: flex; align-items: center; justify-content: center; }
.skill-card-title { font-family: var(--font-display); font-size: 17px; font-weight: 600; }
.skill-item { margin-bottom: 14px; }
.skill-item:last-child { margin-bottom: 0; }
.skill-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; font-size: 13.5px; }
.skill-name { color: var(--text); font-weight: 500; }
.skill-level { color: var(--text-dim); font-family: var(--font-mono); font-size: 12px; }
.skill-bar { height: 5px; background: var(--surface-2); border-radius: 99px; overflow: hidden; }
.skill-fill { height: 100%; background: linear-gradient(90deg, var(--accent), var(--accent-2)); border-radius: 99px; transform: translateX(-100%); transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1); }
.skill-card.in-view .skill-fill { transform: translateX(0); }

/* PROJECTS */
.projects-list { display: grid; gap: 32px; }
.project-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; transition: all var(--t); display: grid; grid-template-columns: 1fr 1fr; }
.project-card:nth-child(even) { grid-template-columns: 1fr 1fr; }
.project-card:nth-child(even) .project-images { order: 2; }
.project-card:hover { border-color: var(--border-hover); box-shadow: var(--shadow-lg); }
.project-content { padding: 36px; display: flex; flex-direction: column; justify-content: center; }
.project-status { display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px; border-radius: 999px; background: var(--accent-glow); color: var(--accent); font-size: 12px; font-family: var(--font-mono); align-self: flex-start; margin-bottom: 16px; }
.project-name { font-family: var(--font-display); font-size: 28px; font-weight: 700; margin-bottom: 6px; letter-spacing: -0.02em; }
.project-tagline { color: var(--accent); font-size: 14px; margin-bottom: 18px; font-family: var(--font-mono); }
.project-desc { color: var(--text-muted); font-size: 15px; line-height: 1.7; margin-bottom: 22px; }
.project-features { list-style: none; margin-bottom: 22px; }
.project-features li { padding: 4px 0 4px 22px; color: var(--text-muted); font-size: 14px; position: relative; }
.project-features li::before { content: '▸'; position: absolute; left: 4px; color: var(--accent); }
.project-tech { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 22px; }
.tech-pill { padding: 4px 10px; border-radius: 6px; background: var(--surface-2); color: var(--text-muted); font-size: 12px; font-family: var(--font-mono); border: 1px solid var(--border); }
.project-links { display: flex; gap: 10px; flex-wrap: wrap; }
.project-images { position: relative; background: var(--surface-2); min-height: 320px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.project-images img { width: 100%; height: 100%; object-fit: cover; }
.project-images-placeholder { text-align: center; color: var(--text-dim); padding: 40px; }
.project-images-placeholder svg { margin-bottom: 12px; opacity: 0.5; }

/* HOME LAB */
.homelab-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 32px; align-items: start; }
.homelab-block { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 28px; }
.block-title { display: flex; align-items: center; gap: 10px; font-family: var(--font-display); font-size: 17px; font-weight: 600; margin-bottom: 24px; color: var(--text); }
.block-title svg { color: var(--accent); }
.hardware-list { list-style: none; }
.hardware-list li { padding: 14px 0; border-bottom: 1px solid var(--border); }
.hardware-list li:last-child { border-bottom: 0; }
.hw-name { font-weight: 600; font-size: 14px; color: var(--text); margin-bottom: 2px; }
.hw-spec { font-family: var(--font-mono); font-size: 12px; color: var(--text-dim); margin-bottom: 4px; }
.hw-role { font-size: 12px; color: var(--accent); }
.services-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 12px; }
.service-card { padding: 16px; border-radius: var(--radius-sm); background: var(--surface-2); border: 1px solid var(--border); transition: all var(--t); }
.service-card:hover { border-color: var(--accent); transform: translateY(-2px); }
.service-name { font-weight: 600; font-size: 14px; margin-bottom: 4px; }
.service-cat { display: inline-block; font-family: var(--font-mono); font-size: 10px; color: var(--accent); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px; }
.service-desc { font-size: 12.5px; color: var(--text-muted); line-height: 1.5; }

/* CONTACT */
.section-contact { border-top: 1px solid var(--border); background: var(--bg-elev); }
.contact-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 64px; align-items: start; }
.contact-intro { font-size: 18px; color: var(--text-muted); line-height: 1.7; margin-bottom: 32px; }
.contact-links { list-style: none; display: flex; flex-direction: column; gap: 4px; }
.contact-links a { display: flex; align-items: center; gap: 14px; padding: 14px 18px; border-radius: var(--radius); background: var(--surface); border: 1px solid var(--border); transition: all var(--t); }
.contact-links a:hover { border-color: var(--accent); transform: translateX(4px); }
.contact-links svg { color: var(--accent); flex-shrink: 0; }
.contact-links .c-label { font-size: 12px; color: var(--text-dim); font-family: var(--font-mono); display: block; }
.contact-links .c-value { font-size: 14px; color: var(--text); font-weight: 500; }

.contact-form { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 32px; }
.form-row { margin-bottom: 18px; }
.form-row label { display: block; font-size: 13px; font-weight: 500; margin-bottom: 6px; color: var(--text-muted); }
.form-row input, .form-row textarea { width: 100%; padding: 12px 14px; background: var(--bg); border: 1px solid var(--border); border-radius: 10px; color: var(--text); font-family: inherit; font-size: 14px; transition: all var(--t); resize: vertical; }
.form-row input:focus, .form-row textarea:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-glow); }
.form-hint { margin-top: 12px; font-size: 12px; color: var(--text-dim); text-align: center; }

/* FOOTER */
.footer { border-top: 1px solid var(--border); padding: 28px 0; font-size: 13px; color: var(--text-dim); }
.footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
.footer-back { color: var(--text-muted); font-family: var(--font-mono); }
.footer-back:hover { color: var(--accent); }

/* ANIMATIONS */
.reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
.reveal.in-view { opacity: 1; transform: translateY(0); }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
  .reveal { opacity: 1; transform: none; }
}

/* RESPONSIVE */
@media (max-width: 960px) {
  .section { padding: 70px 0; }
  .hero { padding-top: 40px; padding-bottom: 80px; min-height: auto; }
  .hero-inner { grid-template-columns: 1fr; gap: 48px; }
  .about-grid { grid-template-columns: 1fr; gap: 40px; }
  .project-card, .project-card:nth-child(even) { grid-template-columns: 1fr; }
  .project-card:nth-child(even) .project-images { order: 0; }
  .homelab-grid { grid-template-columns: 1fr; }
  .contact-grid { grid-template-columns: 1fr; gap: 32px; }
}

@media (max-width: 720px) {
  .nav-links { display: none; }
  .mobile-only { display: inline-flex; }
  .logo-text { display: none; }
  .section-header { gap: 12px; margin-bottom: 36px; }
  .section { padding: 60px 0; }
  .hero-stats { grid-template-columns: 1fr; gap: 16px; }
  .stat-value { font-size: 24px; }
  .container { padding: 0 18px; }
  .project-content { padding: 24px; }
  .contact-form { padding: 24px; }
  .nav-actions { gap: 6px; }
  .btn-sm span { display: none; }
  .nav-actions .btn-sm { padding: 8px; }
}
3️⃣ portfolio/script.js
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
4️⃣ portfolio/data.js — ⭐ FIȘIERUL UNIC PENTRU EDITARE
/* ============================================================================
   📝 PORTFOLIO CONTENT — SINGURUL FIȘIER DE EDITAT
   ----------------------------------------------------------------------------
   Editezi DOAR aici. Nu atinge HTML/CSS/JS pentru a actualiza conținutul.
   ============================================================================ */

const PORTFOLIO_DATA = {

  // ── PROFILE ───────────────────────────────────────────────────────────
  profile: {
    name: "[NUMELE TĂU]",                  // TODO
    initials: "NT",                        // TODO: 2 litere pentru logo
    title: "Network & Cloud Engineer",     // TODO
    tagline: "Construiesc infrastructuri scalabile, sigure și automatizate.",
    location: "București, România",        // TODO
    avatar: "assets/profile.jpg",
    cv: "assets/cv.pdf",
    available: true                        // true = afișează "Open to work"
  },

  // ── ABOUT ─────────────────────────────────────────────────────────────
  about: {
    heading: "Despre mine",
    paragraphs: [
      "Sunt un inginer pasionat de rețele, cloud și sisteme distribuite. Lucrez la intersecția dintre infrastructură și software, construind soluții care îmbină hardware-ul fizic cu serviciile moderne din cloud.",
      "Am experiență în proiectarea rețelelor, automatizare DevOps, IoT și administrarea unui home lab personal unde experimentez cu microservicii self-hosted."
    ],
    highlights: [
      { value: "5+",  label: "Ani experiență" },
      { value: "20+", label: "Proiecte livrate" },
      { value: "10+", label: "Servicii self-hosted" }
    ]
  },

  // ── EDUCATION ─────────────────────────────────────────────────────────
  education: [
    {
      degree: "Master în Securitatea Rețelelor",
      school: "Universitatea Politehnica București",
      period: "2022 – 2024",
      description: "Specializare în arhitecturi cloud-native și securitate cibernetică."
    },
    {
      degree: "Licență Inginerie Electronică & Telecomunicații",
      school: "Universitatea Politehnica București",
      period: "2018 – 2022",
      description: "Lucrare de licență despre sisteme IoT bazate pe LoRaWAN."
    }
  ],

  // ── EXPERIENCE ────────────────────────────────────────────────────────
  experience: [
    {
      role: "Network & Cloud Engineer",
      company: "Compania ABC",
      period: "2024 – prezent",
      location: "București",
      bullets: [
        "Proiectare și implementare infrastructură multi-cloud (AWS + Azure).",
        "Automatizare provisioning cu Terraform și Ansible.",
        "Migrare a 30+ workload-uri către Kubernetes."
      ]
    },
    {
      role: "Junior DevOps",
      company: "Compania XYZ",
      period: "2022 – 2024",
      location: "Remote",
      bullets: [
        "Construire pipeline-uri CI/CD cu GitLab.",
        "Monitorizare cu Prometheus + Grafana.",
        "Mentenanță cluster Kubernetes pe bare-metal."
      ]
    }
  ],

  // ── SKILLS (icon: network | cloud | cpu | code) ──────────────────────
  skills: [
    {
      group: "Networking",
      icon: "network",
      items: [
        { name: "Cisco IOS / NX-OS", level: 90 },
        { name: "BGP / OSPF",        level: 85 },
        { name: "VLAN / VXLAN",      level: 88 },
        { name: "Firewall (pfSense, FortiGate)", level: 80 }
      ]
    },
    {
      group: "Cloud & DevOps",
      icon: "cloud",
      items: [
        { name: "AWS",        level: 85 },
        { name: "Azure",      level: 75 },
        { name: "Kubernetes", level: 80 },
        { name: "Terraform",  level: 88 },
        { name: "Docker",     level: 92 }
      ]
    },
    {
      group: "IoT & Embedded",
      icon: "cpu",
      items: [
        { name: "Raspberry Pi", level: 90 },
        { name: "ESP32 / Arduino", level: 85 },
        { name: "MQTT",          level: 88 },
        { name: "LoRaWAN",       level: 70 }
      ]
    },
    {
      group: "Programare & Scripting",
      icon: "code",
      items: [
        { name: "Python",     level: 88 },
        { name: "Bash",       level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "Go",         level: 60 }
      ]
    }
  ],

  // ── PROJECTS ──────────────────────────────────────────────────────────
  projects: [
    {
      id: "edifya",
      name: "Edifya",
      tagline: "Sistem complet de management școlar — web & mobile",
      description: "Platformă SaaS pentru școli: gestiune elevi, profesori, prezență, note, comunicare părinți. Aplicație mobile cross-platform pentru părinți + dashboard web pentru administrație.",
      images: [
        "assets/projects/edifya-1.jpg",
        "assets/projects/edifya-2.jpg"
      ],
      features: [
        "Autentificare multi-rol (admin, profesor, părinte, elev)",
        "Catalog electronic & raportare prezență în timp real",
        "Notificări push către părinți (note, absențe, evenimente)",
        "Generare automată de rapoarte PDF",
        "Plată online a taxelor școlare",
        "Aplicație mobilă iOS + Android"
      ],
      technologies: ["React", "React Native", "Node.js", "PostgreSQL", "Docker", "AWS"],
      links: { live: "", github: "", case_study: "" },
      status: "În producție"
    },

    // Pentru a adăuga un proiect nou, copiază blocul de mai sus și modifică-l.
    {
      id: "another-project",
      name: "Numele Proiectului",
      tagline: "Tagline scurt aici",
      description: "Descriere completă a proiectului.",
      images: [],
      features: ["Funcționalitate 1", "Funcționalitate 2"],
      technologies: ["Tech 1", "Tech 2"],
      links: { live: "", github: "", case_study: "" },
      status: "În dezvoltare"
    }
  ],

  // ── HOME LAB ──────────────────────────────────────────────────────────
  homelab: {
    intro: "Laboratorul meu de acasă — locul unde testez, învăț și self-host.",

    hardware: [
      { name: "Server Dell R720",     spec: "2× Xeon E5-2670, 128GB RAM, 8TB RAID-Z2", role: "Hypervisor Proxmox" },
      { name: "Raspberry Pi 4 (×3)",  spec: "8GB RAM, SSD NVMe USB",                   role: "K3s cluster" },
      { name: "Synology DS920+",      spec: "4× 8TB WD Red, BTRFS",                    role: "NAS & backups" },
      { name: "UniFi Dream Machine",  spec: "Router + controller WiFi",                role: "Networking & VLAN" },
      { name: "Switch UniFi 24-port", spec: "Managed L2+, PoE",                        role: "Distribution" }
    ],

    services: [
      { name: "Home Assistant",       category: "Smart Home",   description: "Automatizare casă (lumini, senzori, cameră)" },
      { name: "Pi-hole",              category: "Network",      description: "DNS sinkhole — blocare reclame la nivel de rețea" },
      { name: "Nextcloud",            category: "Productivity", description: "Cloud personal pentru fișiere, calendar, contacte" },
      { name: "Jellyfin",             category: "Media",        description: "Server media pentru filme și muzică" },
      { name: "Gitea",                category: "DevOps",       description: "Git self-hosted pentru proiectele personale" },
      { name: "Grafana + Prometheus", category: "Monitoring",   description: "Dashboards și metrici pentru toată infrastructura" },
      { name: "Vaultwarden",          category: "Security",     description: "Manager de parole self-hosted (Bitwarden compatible)" },
      { name: "Traefik",              category: "Network",      description: "Reverse proxy cu HTTPS automat (Let's Encrypt)" }
    ]
  },

  // ── CONTACT ───────────────────────────────────────────────────────────
  contact: {
    heading: "Hai să discutăm",
    intro: "Sunt deschis pentru colaborări, oportunități și proiecte interesante.",
    email:    "email@example.com",                       // TODO
    linkedin: "https://linkedin.com/in/username",        // TODO
    github:   "https://github.com/username",             // TODO
    twitter:  "",                                        // lasă "" gol pentru a ascunde
    website:  ""
  },

  // ── META ──────────────────────────────────────────────────────────────
  meta: {
    copyrightYear: new Date().getFullYear(),
    builtWith: "HTML · CSS · JS"
  }
};

window.PORTFOLIO_DATA = PORTFOLIO_DATA;
5️⃣ portfolio/README.md
# 🎨 Portfolio personal

Site static modern (HTML + CSS + JS pur) — 100% responsive, dark/light mode, fără build step, fără framework.

## 📁 Structura

```
portfolio/
├── index.html
├── styles.css
├── script.js
├── data.js          ← ⭐ TOT CONȚINUTUL EDITABIL
├── assets/
│   ├── profile.jpg
│   ├── cv.pdf
│   └── projects/
└── README.md
```

## ✏️ Cum editezi conținutul

**Tot conținutul este în `data.js`.** Nu trebuie să atingi HTML/CSS/JS.

- **Profil** → `profile`
- **Despre + statistici** → `about`
- **Educație** → `education`
- **Experiență** → `experience`
- **Skills** (Networking/Cloud/IoT/Programare) → `skills`
- **Proiecte** → `projects` (copiază un obiect ca să adaugi unul nou)
- **Home Lab** → `homelab.hardware` și `homelab.services`
- **Contact** → `contact`

## 🎨 Cum schimbi paleta

În `styles.css`, blocul `:root` (dark) și `[data-theme="light"]`:

```css
:root {
  --bg:       #0a0e1a;
  --accent:   #22d3ee;
  --accent-2: #34d399;
}
```

## 🚀 Cum rulezi local

```bash
# Opțiunea 1: deschide direct fișierul
open index.html

# Opțiunea 2: server local (recomandat pentru CV PDF & imagini)
python3 -m http.server 8080
# sau
npx serve .
```

## 🌐 Deploy pe GitHub Pages

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

Apoi: **Settings → Pages → Source: `main` / `(root)` → Save**.

Site-ul va fi online la `https://USERNAME.github.io/REPO/` în ~1 minut.

### Domeniu personalizat
Adaugă un fișier `CNAME` cu domeniul tău (ex: `portfolio.example.com`) și configurează un CNAME record în DNS spre `USERNAME.github.io`.

## 💡 Idei de extindere

- Multi-limbă (RO/EN) cu `data.ro.js` / `data.en.js`
- Galerie carousel pentru imagini de proiect
- Secțiune Blog (markdown + fetch)
- Meta tags Open Graph pentru shareability
- Plausible/Umami analytics (privacy-friendly)
- Print stylesheet pentru tipărire CV

## 📄 Licență
MIT