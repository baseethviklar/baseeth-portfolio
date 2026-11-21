import { ExperienceItem, Project, EducationItem } from './types';

export const PERSONAL_INFO = {
  name: "Baseeth Viklar",
  title: "Software Engineer",
  location: "Mumbai, India",
  email: "viklarbaseeth@gmail.com",
  linkedin: "https://www.linkedin.com/in/baseeth-viklar",
  github: "https://github.com",
  heroHeadline: "Turning Pixels into Memorable Digital Experiences.",
  heroSubtextDev: "Engineering scalable backend microservices, resilient multi-tenant architectures, and high-performance web & mobile systems.",
  heroSubtextCreative: "Crafting intuitive digital products, responsive interfaces, and seamless user journeys from web to mobile.",
};

export const ABOUT_DATA = {
  dev: {
    badge: "01 // SYSTEM OVERVIEW",
    title: "Engineering robust, scalable software.",
    paragraph1: "Software Engineer with approximately 1 year of professional experience building web, mobile, and backend systems. Specialized in multi-tenant SaaS architectures and enterprise-scale project management platforms.",
    paragraph2: "Focused on clean code, hexagonal architecture, resilient event-driven microservices, and tenant-isolated data isolation. Passionate about tackling complex system challenges and mastering emerging engineering tools.",
    highlights: [
      { label: "Experience", value: "~1 Year" },
      { label: "Core Focus", value: "Multi-tenant SaaS & Backend" },
      { label: "Methodology", value: "Agile / Hexagonal Architecture" },
      { label: "Location", value: "Mumbai, India" },
    ]
  },
  creative: {
    badge: "01 // ABOUT ME",
    title: "Bringing ideas to life through code and design.",
    paragraph1: "Software Engineer with about 1 year of hands-on experience creating engaging web, mobile, and digital products. I design and build solutions for enterprise project management and multi-tenant platforms.",
    paragraph2: "I love turning complex workflows into intuitive, effortless interfaces. Driven by curiosity, I enjoy solving real-world problems for people and exploring the latest creative tools.",
    highlights: [
      { label: "Experience", value: "~1 Year" },
      { label: "Design System", value: "RTL & Arabic/English i18n" },
      { label: "Approach", value: "Human-Centered UX" },
      { label: "Location", value: "Mumbai, India" },
    ]
  }
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "Intertec Systems",
    location: "Bangalore",
    role: "Software Engineer Trainee",
    period: "08/2025 — Present",
    skills: ["TypeScript", "Node.js", "React", "PostgreSQL", "RabbitMQ", "Fastify", "Next.js", "Flutter", "MongoDB", "Redis"],
    devPoints: [
      "Engineered backend microservices and shared internal SDKs using TypeScript, Node.js, and PostgreSQL for Echelons SaaS.",
      "Implemented Hexagonal Architecture, RabbitMQ event-driven messaging, and tenant-isolated data access layers.",
      "Built organizational project tracking and dynamic aggregation pipelines in Next.js for OPMS-RTA (RTA Dubai).",
      "Developed mobile application modules in Flutter utilizing MVVM pattern and clean reactive state management.",
      "Accelerated delivery in Agile/Jira sprints utilizing AI-assisted workflows (Cursor, Claude Code, GitHub Copilot) while upholding rigorous code quality standards."
    ],
    creativePoints: [
      "Crafted seamless user experiences across web and mobile platforms for international enterprise clients.",
      "Built multi-lingual interfaces supporting both English and Arabic with complete RTL layout fidelity.",
      "Designed dynamic role-based dashboards, interactive Kanban boards, and visual Gantt charts for project managers.",
      "Delivered smooth, responsive mobile UI components with clean animations for OWWS Oman.",
      "Collaborated closely in agile sprint cycles to translate complex client requirements into delightful digital interactions."
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "echelons",
    title: "ECHELONS",
    subtitle: "Multi-Tenant Enterprise SaaS Platform",
    period: "2025 — Present",
    badge: "Enterprise SaaS",
    tags: ["TypeScript", "Node.js", "React 19", "PostgreSQL", "RabbitMQ", "Fastify", "Zod", "Drizzle ORM", "Liquibase"],
    devDescription: {
      summary: "Distributed multi-tenant SaaS project management engine. Engineered cross-cutting services across identity, licensing, configuration, documents, notifications, and user-management.",
      architecture: [
        "Hexagonal microservices architecture with strict domain boundaries and dependency inversion.",
        "Transactional Outbox pattern coupled with idempotent RabbitMQ consumers to guarantee eventual consistency.",
        "Tenant-isolated schema and connection routing with Drizzle ORM and Liquibase migrations.",
        "Production telemetry via OpenTelemetry distributed tracing and Prometheus metric scraping."
      ],
      technicalHighlights: [
        "Fastify REST APIs with runtime schema validation using Zod.",
        "Security middleware stack: JWT validation, fine-grained RBAC, MFA enforcement, and license-tier quotas.",
        "React 19 frontend integration with shared internal design-system SDK, TanStack Query cache, and bidirectional i18n (English/Arabic RTL)."
      ]
    },
    creativeDescription: {
      summary: "A unified enterprise platform helping teams plan, track, and collaborate without friction across departments and borders.",
      impact: [
        "Designed for global teams: seamless one-click switching between English and Arabic with tailored Right-to-Left (RTL) typography.",
        "Modular UI system that provides every tenant with a consistent, branded, and accessible workspace.",
        "Real-time notifications and activity feeds keeping stakeholders aligned on critical milestones."
      ],
      userExperience: [
        "Custom design system components ensuring fast load times and responsive performance on any screen.",
        "Effortless user onboarding with clear permission roles, secure multi-factor login, and organized document management."
      ]
    }
  },
  {
    id: "opms-rta",
    title: "OPMS-RTA",
    subtitle: "Organizational Project Management System (RTA Dubai)",
    period: "2025",
    badge: "Government / Enterprise",
    tags: ["Next.js 15", "React", "Node.js", "MongoDB", "Redis", "NextAuth.js", "Camunda BPM"],
    devDescription: {
      summary: "Mission-critical project management and workflow governance system for RTA Dubai, handling complex approval hierarchies and high-volume project analytics.",
      architecture: [
        "Next.js 15 App Router architecture with server-side rendering, API route handlers, and Redis multi-level caching.",
        "Complex aggregation pipelines in MongoDB for dynamic filtering, pagination, and multi-metric financial rollups.",
        "Organization-scoped data access model and Camunda BPM engine integration for multi-tier approval routing."
      ],
      technicalHighlights: [
        "Secure authentication and session management via NextAuth.js.",
        "Automated background processing for PDF/Excel executive report generation and email notification pipelines.",
        "Robust file upload service with metadata indexing and organization-level access guards."
      ]
    },
    creativeDescription: {
      summary: "An intuitive governance portal giving enterprise leaders crystal-clear visibility into project roadmaps, budgets, and deliverables.",
      impact: [
        "Interactive Gantt charts and fluid Kanban boards that allow project managers to drag-and-drop milestones effortlessly.",
        "Role-based executive dashboards summarizing project health, risks, and upcoming deadlines at a glance.",
        "Automated one-click PDF & Excel report exports tailored for stakeholder presentations."
      ],
      userExperience: [
        "Smooth approval workflow UI making multi-step organizational sign-offs fast and transparent.",
        "Fast, instant-search capabilities powered by cached queries so teams never wait on data."
      ]
    }
  },
  {
    id: "owws-oman",
    title: "OWWS Oman",
    subtitle: "Enterprise Mobile Utility Application",
    period: "2025",
    badge: "Mobile App",
    tags: ["Flutter", "Dart", "MVVM", "Android Studio", "REST APIs", "State Management"],
    devDescription: {
      summary: "Cross-platform mobile application providing utility consumers and field operations in Oman with reliable service monitoring and request tracking.",
      architecture: [
        "MVVM (Model-View-ViewModel) architectural pattern separating UI presentation from domain and network logic.",
        "Clean reactive state management handling network connectivity transitions, caching, and background synchronizations."
      ],
      technicalHighlights: [
        "Modular reusable widget library with strict typing and unit test coverage in Dart.",
        "Optimized HTTP client layer with automated retry logic, token refresh, and JSON serialization."
      ]
    },
    creativeDescription: {
      summary: "A sleek, citizen-friendly mobile app built to make tracking utility services, submitting service requests, and managing accounts effortless.",
      impact: [
        "Clean, modern aesthetic with thumb-friendly navigation and clear visual hierarchy for daily utility tasks.",
        "Haptic feedback and smooth micro-interactions that make filing requests feel responsive and reliable.",
        "Instant visual status tracking giving users transparency into their service requests in real time."
      ],
      userExperience: [
        "Bilingual typography and localized styling tailored for Omani users.",
        "Optimized offline state notifications so users always know their current connection status."
      ]
    }
  }
];

export const SKILLS_DATA = [
  {
    category: "Languages",
    icon: "code",
    skills: ["Java", "TypeScript", "Dart", "Kotlin"]
  },
  {
    category: "Backend & Systems",
    icon: "server",
    skills: ["Node.js", "Fastify", "REST APIs", "RabbitMQ"]
  },
  {
    category: "Databases",
    icon: "database",
    skills: ["PostgreSQL", "MongoDB", "Redis"]
  },
  {
    category: "Frontend",
    icon: "layout",
    skills: ["React", "Next.js"]
  },
  {
    category: "Mobile",
    icon: "smartphone",
    skills: ["Flutter", "Android Studio"]
  },
  {
    category: "Tools & AI Workflows",
    icon: "cpu",
    skills: ["Docker", "Git/GitHub", "Jira", "Cursor", "Claude Code", "Copilot"]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "MCA (Master of Computer Applications)",
    institution: "Vellore Institute of Technology (VIT)",
    period: "2023 — 2025",
    score: "CGPA 8.3 / 10",
    badge: "Postgraduate"
  },
  {
    degree: "B.Sc. IT (Information Technology)",
    institution: "Vidyalankar School of Information Technology (VSIT)",
    period: "2020 — 2023",
    score: "CGPA 9.38 / 10",
    badge: "Undergraduate"
  }
];

export const CERTIFICATIONS_DATA = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    badge: "Cloud Architecture",
    description: "Foundational knowledge of AWS cloud services, security, architecture, pricing, and compliance."
  }
];

export const NAV_SECTIONS = [
  { id: "hero", label: "Hero", pixelTag: "00" },
  { id: "about", label: "About", pixelTag: "01" },
  { id: "experience", label: "Experience", pixelTag: "02" },
  { id: "projects", label: "Projects", pixelTag: "03" },
  { id: "skills", label: "Skills", pixelTag: "04" },
  { id: "education", label: "Education", pixelTag: "05" },
  { id: "contact", label: "Contact", pixelTag: "06" },
];
