# Alexandru Cinta | Digital Portfolio

Personal portfolio showcasing my experience across **IoT technical operations, software development, networking, infrastructure and leadership**.

The portfolio is built as a lightweight static website using **HTML, CSS and vanilla JavaScript**, with no framework, build process or external JavaScript dependencies.

## Live Portfolio

[View the portfolio](https://alexcinta.github.io/digital-portofolio/)

---

## About

My professional background combines technical operations with several years of experience in customer operations and team leadership.

Today, I work as an **IoT 1st Line Service Support Engineer**, supporting IoT connectivity services while continuing to develop my technical skills through software projects, networking studies and a dedicated HomeLab environment.

This portfolio documents that journey through:

- IoT technical operations
- Software development
- Networking and infrastructure
- HomeLab experimentation
- Leadership and operational experience
- Continuous technical learning

---

## Featured Projects

### Edifya

**Multi-Tenant School Management SaaS**

A full-stack educational management platform designed to connect schools, administrators, teachers, students and parents through dedicated web and mobile applications.

### Architecture

```text
React Web
    │
    ├──────────────┐
    │              │
    ▼              ▼
FastAPI REST   React Native
    API           + Expo
    │
    ▼
Supabase
PostgreSQL
```

### Main capabilities

- Multi-tenant school architecture
- Five user roles
  - Power User
  - Administrator
  - Teacher
  - Student
  - Parent
- JWT authentication and role-based access control
- Grade and attendance management
- Classes, subjects and teacher assignments
- Timetables and announcements
- Bulk user provisioning
- Temporary password workflow
- Email notifications using Resend
- WhatsApp notifications using Twilio
- Responsive web application
- Cross-platform mobile application

### Technology stack

`Python` `FastAPI` `React` `React Native` `Expo` `PostgreSQL` `Supabase` `JWT` `REST API` `Tailwind CSS` `Shadcn/UI` `Axios`

### Repository

[Edifya School System](https://github.com/alexcinta/edifya-school-system)

**Status:** Active development

---

## HomeLab

My HomeLab is a continuously evolving infrastructure environment used for hands-on learning in:

- Networking
- Routing and firewalling
- DNS and DHCP
- Virtualization
- Linux
- Self-hosted services
- Automation
- Secure remote access
- Troubleshooting

### Current architecture

```text
Internet
   │
   ▼
DIGI Router
   │
   ▼
OPNsense
Firewall / Router
   │
   ▼
TP-Link TL-SG108E
Managed Switch
   │
   ├──────────────► Proxmox Host
   │
   ├──────────────► Omada EAP225
   │
   └──────────────► LAN Devices
```

### Hardware

| Device | Specifications | Role |
|---|---|---|
| Lenovo ThinkCentre M920Q | Intel i5-8500T, 16 GB RAM, 256 GB SSD | Proxmox Hypervisor |
| Lenovo ThinkCentre M710Q | Intel i5-7500T, 8 GB RAM | OPNsense Firewall & Router |
| TP-Link TL-SG108E | 8-Port Gigabit Easy Smart Switch | Managed Switch |
| TP-Link Omada EAP225 | 2.4 GHz / 5 GHz | Wireless Access Point |

### Services

| Service | Category | Purpose |
|---|---|---|
| Proxmox VE | Virtualization | Hosts virtual machines and HomeLab services |
| OPNsense | Network | Router, firewall and DNS infrastructure |
| Pi-hole | Network | Network-wide DNS filtering |
| Unbound | DNS | DNS resolver running on OPNsense |
| Home Assistant | Automation | Local home automation platform |
| Tailscale | Security | Secure remote access to HomeLab resources |

Pi-hole integration is currently being validated before full LAN migration.

### Learning goals

The HomeLab is primarily an engineering and learning environment used to:

- build hands-on networking knowledge;
- practice routing and firewall configuration;
- understand DNS and DHCP behaviour;
- develop virtualization and systems administration skills;
- experiment with self-hosted infrastructure;
- apply concepts from CCNA studies;
- document architecture decisions and troubleshooting lessons.

---

## Professional Focus

The portfolio is organized around four areas.

### Technical Operations

`IoT Connectivity` `SIM Management` `APN` `Roaming` `ServiceNow` `Grafana` `Incident Management` `Log Analysis`

### Software Development

`Python` `FastAPI` `JavaScript` `React` `React Native` `REST APIs` `PostgreSQL` `Supabase` `Git`

### Networking & Infrastructure

`TCP/IP` `DNS` `DHCP` `OPNsense` `Proxmox VE` `Pi-hole` `Unbound` `Tailscale`

### Data & Low-Code

`Power BI` `Power Apps` `Microsoft Power Platform` `Microsoft 365`

---

## Leadership

Before transitioning further into technical operations, I spent several years in team leadership roles.

That experience continues to influence the way I approach technical work.

### People

- Coaching
- Mentoring
- Feedback
- Professional development

### Operations

- KPI monitoring
- Service quality
- Escalation management
- Process improvement

### Collaboration

- Stakeholder management
- Cross-team communication
- Customer focus
- Problem solving

The principle behind that experience remains simple:

> Understand the problem. Communicate clearly. Take ownership. Build practical solutions.

---

## Portfolio Architecture

The website intentionally uses a simple architecture:

```text
digital-portofolio/
│
├── index.html
├── styles.css
├── script.js
├── data.js
│
├── assets/
│   ├── cv.pdf
│   ├── profile.jpg
│   │
│   └── projects/
│       ├── edifya-1.jpg
│       └── edifya-2.jpg
│
└── README.md
```

### File responsibilities

| File | Purpose |
|---|---|
| `index.html` | Semantic structure and page sections |
| `styles.css` | Design system, responsive layout, dark/light themes and animations |
| `script.js` | Rendering, interactions, navigation and theme handling |
| `data.js` | Portfolio content and project data |
| `assets/` | CV, images and project screenshots |

---

## Content Management

Most portfolio content is centralized inside `data.js`.

This keeps content separate from presentation and makes future updates easier.

### Main sections

```javascript
PORTFOLIO_DATA = {
  profile,
  whatIDo,
  about,
  education,
  experience,
  leadership,
  skills,
  projects,
  homelab,
  contact,
  meta
};
```

For normal content updates, `data.js` should be the primary file that needs modification.

HTML, CSS and JavaScript should only need changes when introducing new components, layouts or functionality.

---

## Design

The portfolio uses a custom responsive design with:

- Dark and light themes
- Cyan and green accent palette
- Responsive layouts
- Mobile navigation
- Scroll-based navigation state
- Reveal animations
- Reduced-motion accessibility support
- Semantic HTML
- Keyboard focus states
- Data-driven content rendering

### Typography

- **Space Grotesk** for headings
- **Inter** for body content
- **JetBrains Mono** for technical elements

---

## Running Locally

Because the website is completely static, no build process is required.

### Option 1: Python

From the project directory:

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

### Option 2: Node.js

If `serve` is available:

```bash
npx serve .
```

### Option 3: Direct file

`index.html` can also be opened directly in a browser, although using a local HTTP server is recommended.

---

## GitHub Pages Deployment

This repository is designed to be deployed directly through GitHub Pages.

Repository:

```text
alexcinta/digital-portofolio
```

Deployment branch:

```text
main
```

Deployment directory:

```text
/
```

GitHub Pages configuration:

```text
Repository
└── Settings
    └── Pages
        └── Build and deployment
            └── Deploy from a branch
                ├── Branch: main
                └── Folder: / (root)
```

The published portfolio is available at:

[https://alexcinta.github.io/digital-portofolio/](https://alexcinta.github.io/digital-portofolio/)

---

## Updating the Portfolio

A typical content update can follow this workflow:

```bash
git pull

# edit data.js, add project screenshots, update CV, etc.

git status
git add .
git commit -m "content: update portfolio"
git push
```

### Suggested commit convention

For larger updates:

```text
feat: add new project
content: update professional experience
content: update homelab services
style: improve mobile layout
fix: correct navigation behaviour
docs: update README
refactor: improve portfolio rendering
```

This keeps the repository history easier to understand.

---

## Adding a New Project

Add a new object to the `projects` array in `data.js`.

Example:

```javascript
{
  id: "project-name",

  name: "Project Name",

  tagline: "Short project description",

  description:
    "Longer explanation describing the problem and the solution.",

  images: [
    "assets/projects/project-1.jpg",
    "assets/projects/project-2.jpg"
  ],

  highlights: [
    "Highlight 1",
    "Highlight 2"
  ],

  features: [
    "Feature 1",
    "Feature 2"
  ],

  technologies: [
    "Python",
    "FastAPI"
  ],

  links: {
    live: "",
    github: "",
    case_study: ""
  },

  status: "Active development"
}
```

Place associated screenshots under:

```text
assets/projects/
```

---

## Updating the HomeLab

HomeLab data is divided into four sections inside `data.js`:

```javascript
homelab: {
  topology,
  hardware,
  services,
  goals
}
```

When the infrastructure changes, update the relevant section rather than rewriting the page.

Examples:

```text
New VM/service
→ homelab.services

New switch/server/AP
→ homelab.hardware

Architecture change
→ homelab.topology

New learning objective
→ homelab.goals
```

This lets the portfolio evolve alongside the actual HomeLab.

---

## CV

The public CV is stored at:

```text
assets/cv.pdf
```

When the CV changes, replace this file while keeping the same filename.

This prevents links in the navbar, hero section and contact section from breaking.

---

## Project Principles

This portfolio follows a few deliberate principles:

1. **Projects demonstrate skills better than percentage bars.**
2. **Only technologies I can discuss and demonstrate should be listed.**
3. **The HomeLab should reflect the actual environment, not a future roadmap.**
4. **Software projects should explain architecture and engineering decisions, not only features.**
5. **Leadership is part of the technical profile, not a separate career history.**
6. **Content should remain easy to update without introducing unnecessary dependencies.**

---

## Roadmap

Potential future improvements:

- Detailed Edifya case study
- Dedicated HomeLab project pages
- HomeLab architecture revisions as the network evolves
- Technical lab notes
- CCNA learning notes and labs
- Additional screenshots and diagrams
- Open Graph metadata
- Social preview image
- Project-specific URLs
- Improved accessibility testing
- Lighthouse performance optimization

A framework migration is intentionally **not** part of the current roadmap unless the portfolio develops requirements that justify it.

---

## Tech Stack

The portfolio itself uses:

```text
HTML5
CSS3
Vanilla JavaScript
GitHub Pages
Google Fonts
```

No framework.  
No bundler.  
No build step.

---

## Contact

**Alexandru Cinta**

- GitHub: [github.com/alexcinta](https://github.com/alexcinta)
- LinkedIn: [Alexandru Cinta](https://www.linkedin.com/in/alexandru-cinta-347262223)
- Email: [alexandru.cinta@yahoo.com](mailto:alexandru.cinta@yahoo.com)

---

## License

MIT License.

See `LICENSE` for details if a license file is included in the repository.
