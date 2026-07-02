/* ============================================================================
   📝 PORTFOLIO CONTENT — SINGURUL FIȘIER DE EDITAT
   ----------------------------------------------------------------------------
   Editezi DOAR aici. Nu atinge HTML/CSS/JS pentru a actualiza conținutul.
   ============================================================================ */

const PORTFOLIO_DATA = {

  // ── PROFILE ───────────────────────────────────────────────────────────
  profile: {
    name: "Alexandru Cinta",
    initials: "AC",
    title: "IoT 1st Line Service Support Engineer",
    tagline: "Building scalable, secure and automated infrastructures.",
    location: "Romania",
    avatar: "assets/profile.jpg",
    cv: "assets/cv.pdf",
    available: true
  },

  // ── ABOUT ─────────────────────────────────────────────────────────────
  about: {
    heading: "About me",
    paragraphs: [
      "I'm an engineer passionate about networks, cloud and distributed systems. I work at the intersection of infrastructure and software, building solutions that blend physical hardware with modern cloud services.",
      "I have experience in network design, DevOps automation, IoT and managing a personal home lab where I experiment with self-hosted microservices."
    ],
    highlights: [
      { value: "5+",  label: "Years of experience" },
      { value: "20+", label: "Projects delivered" },
      { value: "10+", label: "Self-hosted services" }
    ]
  },

  // ── EDUCATION ─────────────────────────────────────────────────────────
  education: [
    {
      degree: "Full Stack Developer",
      school: "Software Development Academy",
      period: "December 2020 – August 2023",
      description: "In this role, I am dedicated to enhancing my skills, building my professional network, and contributing to the success of a dynamic IT organization. I am a quick learner, a team player, and am committed to staying current with the latest technologies and trends in the industry."
    }

  ],

  // ── EXPERIENCE ────────────────────────────────────────────────────────
  experience: [
    {
      role: "Team Leader, Customer Service",
      company: "Vodafone Romania",
      period: "January 2022 – June 2023",
      location: "Craiova",
      bullets: [
        "As a team leader, I am passionate about developing and managing high-performing teams.",
        "My strong communication and collaboration skills enable me to build relationships with team members, stakeholders, and clients to achieve shared goals. I have a proven track record of driving success by motivating and guiding team members to exceed performance targets and develop their skills.",
        "With a focus on continuous improvement, I thrive on identifying and implementing innovative solutions to enhance team performance and optimize processes."
      ]
    },
    {
      role: "Team Leader, Customer Support & Projects",
      company: "Vodafone Romania",
      period: "July 2023 – April 2025",
      location: "Remote",
      bullets: [
        "Experienced Team Leader with a proven track record in managing customer support and project teams.",
        "Demonstrated expertise in delivering exceptional customer service and successfully driving project initiatives. ",
        "Committed to fostering a collaborative work environment, optimizing processes, and achieving outstanding results. Skilled in team management, problem-solving, and project execution."
      ]
    },
         {
      role: "IoT 1st Line Service Support Engineer",
      company: "VOIS",
      period: "May 2025 – Present",
      location: "Remote",
      // bullets: [
      //   "As a team leader, I am passionate about developing and managing high-performing teams.",
      //   "My strong communication and collaboration skills enable me to build relationships with team members, stakeholders, and clients to achieve shared goals. I have a proven track record of driving success by motivating and guiding team members to exceed performance targets and develop their skills.",
      //   "With a focus on continuous improvement, I thrive on identifying and implementing innovative solutions to enhance team performance and optimize processes."
      // ]
    }
  ],

  // ── SKILLS (icon: network | cloud | cpu | code) ──────────────────────
  skills: [
    {
      group: "Networking",
      icon: "network",
      items: [
        { name: "Cisco IOS / NX-OS",             level: 90 },
        { name: "BGP / OSPF",                    level: 85 },
        { name: "VLAN / VXLAN",                  level: 88 },
        { name: "Firewall (OPNSense)", level: 80 }
      ]
    },
    {
      group: "Leadership",
      icon: "cloud",
      items: [
        { name: "Building teams",        level: 85 },
        { name: "Operational skills",      level: 75 },
        { name: "Kubernetes", level: 80 },
        { name: "Terraform",  level: 88 },
        { name: "Docker",     level: 92 }
      ]
    },
    {
      group: "IoT & Embedded",
      icon: "cpu",
      items: [
        { name: "Raspberry Pi",    level: 90 },
        { name: "ESP32 / Arduino", level: 85 },
        { name: "MQTT",            level: 88 },
        { name: "LoRaWAN",         level: 70 }
      ]
    },
    {
      group: "Programming & Scripting",
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
      tagline: "Complete school management system — web & mobile",
      description: "SaaS platform for schools: student, teacher, attendance and grade management, plus parent communication. Cross-platform mobile app for parents + web dashboard for administration.",
      images: [
        "assets/projects/edifya-1.jpg",
        "assets/projects/edifya-2.jpg"
      ],
      features: [
        "Multi-role authentication (admin, teacher, parent, student)",
        "Electronic gradebook & real-time attendance reporting",
        "Push notifications to parents (grades, absences, events)",
        "Automated PDF report generation",
        "Online school fee payments",
        "Mobile app for iOS + Android"
      ],
      technologies: ["React", "React Native", "Node.js", "PostgreSQL", "Docker", "AWS"],
      links: {
        live: "",
        github: "",
        case_study: ""
      },
      status: "In production"
    },

    // 🔹 Pentru a adăuga un proiect nou, copiază blocul de mai sus.
    // {
    //   id: "another-project",
    //   name: "Project Name",
    //   tagline: "Short tagline here",
    //   description: "Full project description.",
    //   images: [],
    //   features: ["Feature 1", "Feature 2"],
    //   technologies: ["Tech 1", "Tech 2"],
    //   links: { live: "", github: "", case_study: "" },
    //   status: "In development"
    // }
  ],

  // ── HOME LAB ──────────────────────────────────────────────────────────
  homelab: {
    intro: "My home lab — where I test, learn and self-host.",

    hardware: [
      { name: "Lenovo TinyPC M920Q",     spec: "2× Xeon E5-2670, 128GB RAM, 8TB RAID-Z2", role: "Proxmox hypervisor" },
      { name: "Raspberry Pi 4 (×3)",  spec: "8GB RAM, NVMe USB SSD",                   role: "K3s cluster" },
      { name: "Synology DS920+",      spec: "4× 8TB WD Red, BTRFS",                    role: "NAS & backups" },
      { name: "UniFi Dream Machine",  spec: "Router + WiFi controller",                role: "Networking & VLAN" },
      { name: "UniFi Switch 24-port", spec: "Managed L2+, PoE",                        role: "Distribution" }
    ],

    services: [
      { name: "Home Assistant",       category: "Smart Home",   description: "Home automation (lights, sensors, cameras)" },
      { name: "Pi-hole",              category: "Network",      description: "DNS sinkhole — network-wide ad blocking" },
      { name: "Nextcloud",            category: "Productivity", description: "Personal cloud for files, calendar, contacts" },
      { name: "Jellyfin",             category: "Media",        description: "Media server for movies and music" },
      { name: "Gitea",                category: "DevOps",       description: "Self-hosted Git for personal projects" },
      { name: "Grafana + Prometheus", category: "Monitoring",   description: "Dashboards and metrics for the whole stack" },
      { name: "Vaultwarden",          category: "Security",     description: "Self-hosted password manager (Bitwarden-compatible)" },
      { name: "Traefik",              category: "Network",      description: "Reverse proxy with automatic HTTPS (Let's Encrypt)" }
    ]
  },

  // ── CONTACT ───────────────────────────────────────────────────────────
  contact: {
    heading: "Let's talk",
    intro: "I'm open to collaborations, opportunities and interesting projects.",

    email:    "alexandru.cinta@yahoo.com",
    linkedin: "www.linkedin.com/in/alexandru-cinta-347262223",
    github:   "https://github.com/alexcinta",

    twitter:  "",
    website:  ""
  },

  // ── META ──────────────────────────────────────────────────────────────
  meta: {
    copyrightYear: new Date().getFullYear(),
    builtWith: "HTML · CSS · JS"
  }
};

window.PORTFOLIO_DATA = PORTFOLIO_DATA;
