/* ============================================================================
   📝 PORTFOLIO CONTENT — SINGURUL FIȘIER DE EDITAT
   ----------------------------------------------------------------------------
   Editezi DOAR aici. Nu atinge HTML/CSS/JS pentru a actualiza conținutul.
   ============================================================================ */

const PORTFOLIO_DATA = {

  // ── PROFILE ───────────────────────────────────────────────────────────
  profile: {
    name: "Alexandru Cinta",                  // TODO
    initials: "AC",                        // TODO: 2 litere pentru logo
    title: "IoT 1st Line Service Support Engineer",     // TODO
    tagline: "Construiesc infrastructuri scalabile, sigure și automatizate.",
    location: "România",        // TODO
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
    // {
    //   degree: "Master în Securitatea Rețelelor",
    //   school: "Universitatea Politehnica București",
    //   period: "2022 – 2024",
    //   description: "Specializare în arhitecturi cloud-native și securitate cibernetică."
    // },
    {
      degree: "Licență Facultatea de Informatica",
      school: "Universitatea din Craiova",
      period: "2023 – 2026",
      description: "Lucrare de licență despre dezvoltarea unei aplicatii web & mobile pentru sistemul de invatamant."
    }
  ],

  // ── EXPERIENCE ────────────────────────────────────────────────────────
  experience: [
    {
      role: "IoT 1st Line Service Support Engineer",
      company: "Vodafone Intelligence Solutions - VOIS",
      period: "2025 – prezent",
      location: "București",
      bullets: [
        "Proiectare și implementare infrastructură multi-cloud (AWS + Azure).",
        "Automatizare provisioning cu Terraform și Ansible.",
        "Migrare a 30+ workload-uri către Kubernetes."
      ]
    },
    {
      role: "Team Leader, Customer Support & Projects",
      company: "Vodafone Romania",
      period: "January 2022 - May 2025",
      location: "Remote",
      bullets: [
        "Led the customer support team and managed operational projects, ensuring high-quality service delivery. Monitored performance, optimized processes, and collaborated cross-functionally to improve overall customer experience."
      ]
    }
  ],

  // ── SKILLS (icon: network | cloud | cpu | code) ──────────────────────
  skills: [
    {
      group: "Power Bi",
      icon: "network",
      items: [
        { name: "Operational Dashboards", level: 90 },
        { name: "KPI Dashboards",        level: 85 },
        // { name: "VLAN / VXLAN",      level: 88 },
        // { name: "Firewall (pfSense, FortiGate)", level: 80 }
      ]
    },
    {
      group: "Leadership & Management",
      icon: "cloud",
      items: [
        { name: "Team Leadership", level: 95 },
        { name: "People Management", level: 90 },
        { name: "Stakeholder Management", level: 85 },
        { name: "Project Management", level: 85 },
        { name: "Process Improvement",     level: 85 }
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
      technologies: ["React", "React Native", "Node.js", "PostgreSQL"],
      links: { live: "", github: "", case_study: "" },
      status: "În producție"
    },

    // // Pentru a adăuga un proiect nou, copiază blocul de mai sus și modifică-l.
    // {
    //   id: "another-project",
    //   name: "Numele Proiectului",
    //   tagline: "Tagline scurt aici",
    //   description: "Descriere completă a proiectului.",
    //   images: [],
    //   features: ["Funcționalitate 1", "Funcționalitate 2"],
    //   technologies: ["Tech 1", "Tech 2"],
    //   links: { live: "", github: "", case_study: "" },
    //   status: "În dezvoltare"
    // }
  ],

  // ── HOME LAB ──────────────────────────────────────────────────────────
  homelab: {
    intro: "Laboratorul meu de acasă — locul unde testez, învăț și self-host.",

    hardware: [
      { name: "Lenovo Tiny M920Q",     spec: "Intel Core i5, 32GB RAM, SSD NVMe", role: "Proxmox Hypervisor (VMs)" },
      { name: "Lenovo ThinkCentre M710q",  spec: "Intel Core i5, 16GB RAM, SSD", role: "Router (OPNsense)" },
      // { name: "Synology DS920+",      spec: "4× 8TB WD Red, BTRFS", role: "NAS & backups" },
      { name: "TP-Link EAP225",  spec: "Dual-Band WiFi Access Point", role: "Wireless Networking" },
      { name: "Switch TP-Link TL-SG108E ", spec: "Managed L2+ Gigabit Switch", role: "Network Distribution" }
    ],

    services: [
      { name: "Home Assistant",       category: "Smart Home",   description: "Automatizare casă (lumini, senzori, cameră)" },
      { name: "Pi-hole",              category: "Network",      description: "DNS sinkhole — blocare reclame la nivel de rețea" },
      // { name: "Nextcloud",            category: "Productivity", description: "Cloud personal pentru fișiere, calendar, contacte" },
      { name: "Jellyfin",             category: "Media",        description: "Server media pentru filme și muzică" },
      { name: "Gitea",                category: "DevOps",       description: "Git self-hosted pentru proiectele personale" },
      { name: "Grafana + Prometheus", category: "Monitoring",   description: "Dashboards și metrici pentru toată infrastructura" },
      // { name: "Vaultwarden",          category: "Security",     description: "Manager de parole self-hosted (Bitwarden compatible)" },
      // { name: "Traefik",              category: "Network",      description: "Reverse proxy cu HTTPS automat (Let's Encrypt)" }
    ]
  },

  // ── CONTACT ───────────────────────────────────────────────────────────
  contact: {
    heading: "Hai să discutăm",
    intro: "Sunt deschis pentru colaborări, oportunități și proiecte interesante.",
    email:    "alexandru.cinta@yahoo.com",                       // TODO
    linkedin: "https://linkedin.com/in/username",        // TODO
    github:   "https://github.com/alexcinta",             // TODO
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
=======
/* ============================================================================
   📝 PORTFOLIO CONTENT — SINGURUL FIȘIER DE EDITAT
   ----------------------------------------------------------------------------
   Editezi DOAR aici. Nu atinge HTML/CSS/JS pentru a actualiza conținutul.
   ============================================================================ */

const PORTFOLIO_DATA = {

  // ── PROFILE ───────────────────────────────────────────────────────────
  profile: {
    name: "Alexandru Cinta",                  // TODO
    initials: "AC",                        // TODO: 2 litere pentru logo
    title: "IoT 1st Line Service Support Engineer",     // TODO
    tagline: "Construiesc infrastructuri scalabile, sigure și automatizate.",
    location: "România",        // TODO
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
    // {
    //   degree: "Master în Securitatea Rețelelor",
    //   school: "Universitatea Politehnica București",
    //   period: "2022 – 2024",
    //   description: "Specializare în arhitecturi cloud-native și securitate cibernetică."
    // },
    {
      degree: "Licență Facultatea de Informatica",
      school: "Universitatea din Craiova",
      period: "2023 – 2026",
      description: "Lucrare de licență despre dezvoltarea unei aplicatii web & mobile pentru sistemul de invatamant."
    }
  ],

  // ── EXPERIENCE ────────────────────────────────────────────────────────
  experience: [
    {
      role: "IoT 1st Line Service Support Engineer",
      company: "Vodafone Intelligence Solutions - VOIS",
      period: "2025 – prezent",
      location: "București",
      bullets: [
        "Proiectare și implementare infrastructură multi-cloud (AWS + Azure).",
        "Automatizare provisioning cu Terraform și Ansible.",
        "Migrare a 30+ workload-uri către Kubernetes."
      ]
    },
    {
      role: "Team Leader, Customer Support & Projects",
      company: "Vodafone Romania",
      period: "January 2022 - May 2025",
      location: "Remote",
      bullets: [
        "Led the customer support team and managed operational projects, ensuring high-quality service delivery. Monitored performance, optimized processes, and collaborated cross-functionally to improve overall customer experience."
      ]
    }
  ],

  // ── SKILLS (icon: network | cloud | cpu | code) ──────────────────────
  skills: [
    {
      group: "Power Bi",
      icon: "network",
      items: [
        { name: "Operational Dashboards", level: 90 },
        { name: "KPI Dashboards",        level: 85 },
        // { name: "VLAN / VXLAN",      level: 88 },
        // { name: "Firewall (pfSense, FortiGate)", level: 80 }
      ]
    },
    {
      group: "Leadership & Management",
      icon: "cloud",
      items: [
        { name: "Team Leadership", level: 95 },
        { name: "People Management", level: 90 },
        { name: "Stakeholder Management", level: 85 },
        { name: "Project Management", level: 85 },
        { name: "Process Improvement",     level: 85 }
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
      technologies: ["React", "React Native", "Node.js", "PostgreSQL"],
      links: { live: "", github: "", case_study: "" },
      status: "În producție"
    },

    // // Pentru a adăuga un proiect nou, copiază blocul de mai sus și modifică-l.
    // {
    //   id: "another-project",
    //   name: "Numele Proiectului",
    //   tagline: "Tagline scurt aici",
    //   description: "Descriere completă a proiectului.",
    //   images: [],
    //   features: ["Funcționalitate 1", "Funcționalitate 2"],
    //   technologies: ["Tech 1", "Tech 2"],
    //   links: { live: "", github: "", case_study: "" },
    //   status: "În dezvoltare"
    // }
  ],

  // ── HOME LAB ──────────────────────────────────────────────────────────
  homelab: {
    intro: "Laboratorul meu de acasă — locul unde testez, învăț și self-host.",

    hardware: [
      { name: "Lenovo Tiny M920Q",     spec: "Intel Core i5, 32GB RAM, SSD NVMe", role: "Proxmox Hypervisor (VMs)" },
      { name: "Lenovo ThinkCentre M710q",  spec: "Intel Core i5, 16GB RAM, SSD", role: "Router (OPNsense)" },
      // { name: "Synology DS920+",      spec: "4× 8TB WD Red, BTRFS", role: "NAS & backups" },
      { name: "TP-Link EAP225",  spec: "Dual-Band WiFi Access Point", role: "Wireless Networking" },
      { name: "Switch TP-Link TL-SG108E ", spec: "Managed L2+ Gigabit Switch", role: "Network Distribution" }
    ],

    services: [
      { name: "Home Assistant",       category: "Smart Home",   description: "Automatizare casă (lumini, senzori, cameră)" },
      { name: "Pi-hole",              category: "Network",      description: "DNS sinkhole — blocare reclame la nivel de rețea" },
      // { name: "Nextcloud",            category: "Productivity", description: "Cloud personal pentru fișiere, calendar, contacte" },
      { name: "Jellyfin",             category: "Media",        description: "Server media pentru filme și muzică" },
      { name: "Gitea",                category: "DevOps",       description: "Git self-hosted pentru proiectele personale" },
      { name: "Grafana + Prometheus", category: "Monitoring",   description: "Dashboards și metrici pentru toată infrastructura" },
      // { name: "Vaultwarden",          category: "Security",     description: "Manager de parole self-hosted (Bitwarden compatible)" },
      // { name: "Traefik",              category: "Network",      description: "Reverse proxy cu HTTPS automat (Let's Encrypt)" }
    ]
  },

  // ── CONTACT ───────────────────────────────────────────────────────────
  contact: {
    heading: "Hai să discutăm",
    intro: "Sunt deschis pentru colaborări, oportunități și proiecte interesante.",
    email:    "alexandru.cinta@yahoo.com",                       // TODO
    linkedin: "https://linkedin.com/in/username",        // TODO
    github:   "https://github.com/alexcinta",             // TODO
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
>>>>>>> bb5bac6a49fa49c516a1eeabdc974823274bfa3e
