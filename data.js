/* ============================================================================
   PORTFOLIO CONTENT
   ----------------------------------------------------------------------------
   Main content source for the portfolio.

   Update portfolio content here instead of hardcoding information
   directly inside the HTML.
   ============================================================================ */

const PORTFOLIO_DATA = {

  // ==========================================================================
  // PROFILE
  // ==========================================================================

  profile: {
    name: "Alexandru Cinta",
    initials: "AC",

    title: "IoT 1st Line Service Support Engineer",

    tagline:
      "Technical Operations. Software Development. Infrastructure. Leadership.",

    description:
      "I work at the intersection of technical operations, software development and infrastructure, combining hands-on engineering with years of experience leading teams and solving customer-facing problems.",

    location: "Craiova, Romania",

    avatar: "assets/profile.jpg",
    cv: "assets/cv.pdf",

    available: false,

    focus: [
      "Technical Operations",
      "Software Development",
      "Networking & Infrastructure"
    ],

    currentlyLearning: [
      "CCNA",
      "Networking",
      "Infrastructure"
    ]
  },


  // ==========================================================================
  // WHAT I DO
  // ==========================================================================

  whatIDo: [
    {
      title: "Technical Operations",
      icon: "activity",

      description:
        "Supporting IoT connectivity services through incident troubleshooting, monitoring, service management and technical escalation.",

      technologies: [
        "IoT",
        "ServiceNow",
        "Grafana",
        "Linux"
      ]
    },

    {
      title: "Software Development",
      icon: "code",

      description:
        "Building practical applications and tools that address real operational and business problems.",

      technologies: [
        "Python",
        "FastAPI",
        "React",
        "PostgreSQL"
      ]
    },

    {
      title: "Infrastructure",
      icon: "server",

      description:
        "Building and operating a hands-on environment for networking, virtualization, DNS, firewalling and self-hosted services.",

      technologies: [
        "Proxmox",
        "OPNsense",
        "DNS",
        "Pi-hole"
      ]
    }
  ],


  // ==========================================================================
  // ABOUT
  // ==========================================================================

  about: {
    heading: "From leading teams to building systems.",

    paragraphs: [
      "My professional journey started in customer-facing roles, progressed into account management and team leadership, and eventually led me deeper into technology.",

      "Today I work in IoT service support, troubleshooting connectivity and service issues while collaborating with technical teams in an operational environment.",

      "Outside my day-to-day role, I learn by building. I developed Edifya, a multi-tenant school management platform built with React, FastAPI, PostgreSQL and React Native, while my HomeLab gives me a hands-on environment for networking, virtualization, DNS, firewalling and self-hosted services.",

      "My leadership background continues to shape how I approach technology: understand the problem, communicate clearly, take ownership and build practical solutions."
    ],

    highlights: [
      {
        value: "IoT",
        label: "Technical Operations"
      },
      {
        value: "Full Stack",
        label: "Web & Mobile"
      },
      {
        value: "HomeLab",
        label: "Infrastructure"
      }
    ]
  },


  // ==========================================================================
  // EDUCATION
  // ==========================================================================

  education: [
    {
      degree: "Economic Informatics",

      school:
        "Faculty of Economics and Business Administration",

      period: "September 2023 – Present",

      description:
        "Academic studies focused on the intersection of information technology, software systems and economics."
    },

    {
      degree: "Full Stack Developer",

      school:
        "Software Development Academy",

      period: "December 2022 – Present",

      description:
        "Full-stack development training covering Python, HTML, CSS, JavaScript and relational databases."
    }
  ],


  // ==========================================================================
  // EXPERIENCE
  // ==========================================================================

  experience: [
    {
      role: "IoT 1st Line Service Support Engineer",

      company: "Vodafone",

      period: "May 2025 – Present",

      location: "Craiova, Romania",

      bullets: [
        "Provide first-line technical support for IoT connectivity services, including SIM management, APN and roaming-related incidents.",

        "Perform ticket triage, incident analysis, log analysis and technical troubleshooting, escalating complex cases to L2/L3 technical teams.",

        "Monitor service alerts and operational indicators using Grafana and internal monitoring platforms.",

        "Manage incidents and service requests through ServiceNow while maintaining documentation, prioritization and SLA tracking.",

        "Collaborate with technical teams and communicate with users and customers throughout incident investigation and resolution.",

        "Support access management and contribute to technical procedures and knowledge documentation.",

        "Contribute to operational improvements through Power BI dashboards and Microsoft Power Apps solutions."
      ]
    },

    {
      role: "Team Leader, Customer Support & Projects",

      company: "Vodafone Romania",

      period: "July 2023 – May 2025",

      location: "Craiova, Romania",

      bullets: [
        "Led and supported a customer service and project team through coaching, mentoring, performance reviews and day-to-day operational guidance.",

        "Monitored team KPIs, service quality and operational performance to identify improvement opportunities.",

        "Coordinated customer-support and process-improvement initiatives with cross-functional teams and operational stakeholders.",

        "Acted as an escalation point for complex customer and operational issues, ensuring ownership, clear communication and timely resolution.",

        "Supported project planning and execution while maintaining focus on timelines, quality standards and customer experience."
      ]
    },

    {
      role: "Team Leader, Customer Service Support",

      company: "Vodafone Romania",

      period: "January 2022 – June 2023",

      location: "Craiova, Romania",

      bullets: [
        "Managed and developed a customer service team through regular coaching, feedback, mentoring and performance support.",

        "Monitored operational KPIs and supported improvements in service quality, productivity and customer outcomes.",

        "Supported onboarding and professional development while maintaining a collaborative and inclusive team environment.",

        "Identified and implemented operational improvements to strengthen team performance and working practices."
      ]
    },

    {
      role: "Account Manager, Business Corporate Accounts",

      company: "Vodafone Romania",

      period: "June 2021 – January 2022",

      location: "Craiova, Romania",

      bullets: [
        "Managed strategic relationships with corporate accounts, working with customers to understand business needs and provide appropriate solutions."
      ]
    }
  ],


  // ==========================================================================
  // LEADERSHIP
  // ==========================================================================

  leadership: {
    heading: "Technology backed by leadership.",

    intro:
      "My leadership experience shapes the way I approach technical work: understand the impact, communicate clearly, take ownership and solve the underlying problem.",

    areas: [
      {
        title: "People",

        items: [
          "Coaching",
          "Mentoring",
          "Development",
          "Feedback"
        ]
      },

      {
        title: "Operations",

        items: [
          "KPIs",
          "Service Quality",
          "Escalations",
          "Process Improvement"
        ]
      },

      {
        title: "Collaboration",

        items: [
          "Stakeholder Management",
          "Cross-team Communication",
          "Customer Focus",
          "Problem Solving"
        ]
      }
    ]
  },


  // ==========================================================================
  // SKILLS
  // ==========================================================================

  skills: [
    {
      group: "Development",

      icon: "code",

      items: [
        { name: "Python" },
        { name: "FastAPI" },
        { name: "JavaScript" },
        { name: "React" },
        { name: "React Native" },
        { name: "REST APIs" },
        { name: "SQL / PostgreSQL" },
        { name: "Supabase" },
        { name: "Git / GitHub" }
      ]
    },

    {
      group: "Networking & Infrastructure",

      icon: "network",

      items: [
        { name: "TCP/IP" },
        { name: "DNS" },
        { name: "DHCP" },
        { name: "OPNsense" },
        { name: "Proxmox VE" },
        { name: "Pi-hole" },
        { name: "Unbound" },
        { name: "Tailscale" },
        { name: "Network Troubleshooting" }
      ]
    },

    {
      group: "Technical Operations",

      icon: "cpu",

      items: [
        { name: "IoT Connectivity" },
        { name: "SIM Management" },
        { name: "APN" },
        { name: "Roaming" },
        { name: "ServiceNow" },
        { name: "Grafana" },
        { name: "Incident Management" },
        { name: "Service Requests" },
        { name: "Log Analysis" },
        { name: "SLA Tracking" }
      ]
    },

    {
      group: "Data & Low-Code",

      icon: "cloud",

      items: [
        { name: "Power BI" },
        { name: "Power Apps" },
        { name: "Microsoft Power Platform" },
        { name: "Microsoft 365" }
      ]
    }
  ],


  // ==========================================================================
  // PROJECTS
  // ==========================================================================

  projects: [
    {
      id: "edifya",

      name: "Edifya",

      tagline:
        "Multi-Tenant School Management SaaS",

      description:
        "A full-stack educational management platform connecting schools, administrators, teachers, students and parents through dedicated web and mobile applications.",

      images: [
        "assets/projects/edifya-1.jpg",
        "assets/projects/edifya-2.jpg"
      ],

      highlights: [
        "5 user roles",
        "Multi-tenant architecture",
        "Web + Mobile",
        "REST API"
      ],

      features: [
        "Role-based access for Power Users, Administrators, Teachers, Students and Parents",

        "Academic grade and attendance management",

        "Class, subject and teacher assignment management",

        "Student schedules and school announcements",

        "Bulk user provisioning",

        "Temporary password workflow",

        "Email notifications using Resend",

        "WhatsApp notifications using Twilio",

        "Responsive web interface",

        "Cross-platform mobile application"
      ],

      technologies: [
        "Python",
        "FastAPI",
        "React",
        "React Native",
        "Expo",
        "PostgreSQL",
        "Supabase",
        "REST API",
        "JWT",
        "Tailwind CSS",
        "Shadcn/UI",
        "Axios",
        "Resend",
        "Twilio"
      ],

      links: {
        live: "",

        github:
          "https://github.com/alexcinta/edifya-school-system",

        case_study: ""
      },

      status: "Active development"
    }
  ],


  // ==========================================================================
  // HOME LAB
  // ==========================================================================

  homelab: {
    heading:
      "Building my own infrastructure.",

    intro:
      "A continuously evolving environment where I design, deploy and troubleshoot networking, virtualization, DNS, firewalling, automation and secure remote access.",


    // ------------------------------------------------------------------------
    // NETWORK TOPOLOGY
    // ------------------------------------------------------------------------

    topology: {
      path: [
        "Internet",
        "DIGI Router",
        "OPNsense Firewall & Router",
        "TP-Link Managed Switch"
      ],

      branches: [
        "Proxmox Host",
        "Omada Access Point",
        "LAN Devices"
      ]
    },


    // ------------------------------------------------------------------------
    // HARDWARE
    // ------------------------------------------------------------------------

    hardware: [
      {
        name:
          "Lenovo ThinkCentre M920Q",

        spec:
          "Intel i5-8500T · 16GB RAM · 256GB SSD",

        role:
          "Proxmox Hypervisor"
      },

      {
        name:
          "Lenovo ThinkCentre M710Q",

        spec:
          "Intel i5-7500T · 8GB RAM",

        role:
          "OPNsense Firewall & Router"
      },

      {
        name:
          "TP-Link TL-SG108E",

        spec:
          "8-Port Gigabit Easy Smart Switch",

        role:
          "Managed Switch"
      },

      {
        name:
          "TP-Link Omada EAP225",

        spec:
          "2.4GHz / 5GHz Wireless Access Point",

        role:
          "HomeLab Wi-Fi"
      }
    ],


    // ------------------------------------------------------------------------
    // SELF-HOSTED SERVICES
    // ------------------------------------------------------------------------

    services: [
      {
        name:
          "Proxmox VE",

        category:
          "Virtualization",

        description:
          "Hypervisor hosting the HomeLab virtual machines and self-hosted services."
      },

      {
        name:
          "OPNsense",

        category:
          "Network",

        description:
          "Main HomeLab router and firewall with Unbound DNS resolver."
      },

      {
        name:
          "Pi-hole",

        category:
          "Network",

        status:
          "Validation",

        description:
          "Network-wide DNS filtering integrated with OPNsense and Unbound. Currently under validation before full LAN migration."
      },

      {
        name:
          "Unbound",

        category:
          "DNS",

        description:
          "DNS resolver running on OPNsense and used as the upstream resolver for Pi-hole."
      },

      {
        name:
          "Home Assistant",

        category:
          "Automation",

        description:
          "Self-hosted home automation platform for local smart-home integrations."
      },

      {
        name:
          "Tailscale",

        category:
          "Security",

        description:
          "Secure remote access to HomeLab resources."
      }
    ],


    // ------------------------------------------------------------------------
    // HOMELAB GOALS
    // ------------------------------------------------------------------------

    goals: [
      "Build hands-on networking knowledge",
      "Practice routing, firewalling and network troubleshooting",
      "Understand DNS and DHCP in real environments",
      "Develop virtualization and systems administration skills",
      "Experiment with self-hosted infrastructure",
      "Apply concepts learned during CCNA studies",
      "Document architectural decisions and troubleshooting lessons"
    ]
  },


  // ==========================================================================
  // CONTACT
  // ==========================================================================

  contact: {
    heading:
      "Let's connect.",

    intro:
      "Interested in my work or want to discuss technology, infrastructure or an opportunity? Feel free to reach out.",

    email:
      "alexandru.cinta@yahoo.com",

    linkedin:
      "https://www.linkedin.com/in/alexandru-cinta-347262223",

    github:
      "https://github.com/alexcinta",

    twitter:
      "",

    website:
      ""
  },


  // ==========================================================================
  // META
  // ==========================================================================

  meta: {
    copyrightYear:
      new Date().getFullYear(),

    builtWith:
      "HTML · CSS · JavaScript"
  }
};


// ============================================================================
// EXPORT
// ============================================================================

window.PORTFOLIO_DATA = PORTFOLIO_DATA;
