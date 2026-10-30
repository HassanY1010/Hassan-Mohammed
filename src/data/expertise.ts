import { ExpertiseItem } from '@/types';

export const EXPERTISE_LIST: ExpertiseItem[] = [
  {
    id: "fullstack",
    title: {
      ar: "تطوير الويب المتكامل (Full Stack)",
      en: "Full Stack Web Development",
    },
    shortDesc: {
      ar: "بناء الأنظمة الرقمية الشاملة من الصفر، من واجهات المستخدم والأنظمة الخلفية إلى قواعد البيانات وربط APIs بأعلى معايير الاستقرار.",
      en: "Engineering end-to-end web platforms from scratch—spanning reactive client interfaces, scalable server architectures, robust databases, and integrated APIs.",
    },
    longDesc: {
      ar: "أمتلك القدرة على بناء الأنظمة الرقمية من الصفر، بدءًا من تطوير الواجهات الأمامية (Frontend)، مرورًا بتطوير الأنظمة الخلفية (Backend)، وصولًا إلى تصميم وإدارة قواعد البيانات وربط واجهات برمجة التطبيقات (APIs). أركز على بناء حلول رقمية متكاملة تتميز بالأداء العالي والأمان وقابلية التوسع، مع كتابة أكواد منظمة وقابلة للصيانة، وتحويل الأفكار والمتطلبات إلى منتجات برمجية عملية.",
      en: "I design and build complete digital systems from ground zero. From crafting responsive frontend interfaces to engineering resilient backend microservices and databases, I ensure robust API orchestration. My focus remains on delivering high-velocity, secure, and easily maintainable products engineered to scale with growing user demand.",
    },
    icon: "Layers",
    gradient: "from-blue-600 to-cyan-500",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "REST APIs", "Tailwind CSS"],
    capabilities: [
      {
        category: { ar: "الهندسة المعمارية", en: "Architecture" },
        items: ["End-to-End Systems Design", "Monorepos & Microservices", "Decoupled Architectures", "Serverless & Edge Functions"]
      },
      {
        category: { ar: "التكامل والربط", en: "Integration & APIs" },
        items: ["RESTful API Engineering", "Third-Party Service Webhooks", "OAuth & SSO Integration", "Real-Time WebSockets"]
      },
      {
        category: { ar: "الجودة والموثوقية", en: "Quality & Reliability" },
        items: ["Clean Code Principles", "SOLID & DRY Standards", "Scalable Database Schemas", "Continuous Integration"]
      }
    ],
    focus: {
      ar: "بناء أنظمة برمجية متماسكة، سريعة الاستجابة، وقابلة للصيانة والنمو المستمر.",
      en: "Engineering cohesive, high-speed software designed for clean long-term maintenance and growth."
    }
  },
  {
    id: "uiux",
    title: {
      ar: "تصميم واجهات وتجربة المستخدم (UI/UX)",
      en: "UI/UX Product Design",
    },
    shortDesc: {
      ar: "ابتكار تجارب رقمية تجمع بين الجمال البصري والوظائف العملية وسهولة الاستخدام عبر منهجيات بحث وتصميم دقيقة.",
      en: "Crafting digital experiences that merge aesthetic elegance with intuitive usability, informed by user research and rigorous prototyping.",
    },
    longDesc: {
      ar: "متخصص في ابتكار تجارب رقمية تجمع بين الجمال والوظائف العملية وسهولة الاستخدام. تشمل خبرتي دراسة وتحديد متطلبات المستخدم وبناء هيكلية المعلومات والمسارات التفاعلية، وتصميم نظم تصميم موحدة تضمن التناسق والجاذبية وسرعة التحويل.",
      en: "Specializing in intuitive digital experiences that balance modern aesthetics with functional usability. My process spans deep user research, information architecture, wireframing, design systems, and high-fidelity interactive prototypes that convert visitors into engaged users.",
    },
    icon: "Layout",
    gradient: "from-purple-600 to-pink-500",
    technologies: ["Figma", "Design Systems", "Interactive Prototyping", "Wireframing", "User Flows", "Micro-interactions"],
    capabilities: [
      {
        category: { ar: "أبحاث واستراتيجية UX", en: "UX Research & Strategy" },
        items: ["User Research & Personas", "Information Architecture", "User Journey Mapping", "Usability Optimization"]
      },
      {
        category: { ar: "التصميم المرئي UI", en: "Visual Design & Systems" },
        items: ["Modern Design Systems", "Responsive Grid Layouts", "Dark/Light Mode Systems", "Typography & Color Theory"]
      },
      {
        category: { ar: "النماذج التفاعلية", en: "Prototyping & Testing" },
        items: ["Interactive Clickable Prototypes", "Micro-interaction Design", "Design-to-Code Handoff", "WCAG Contrast Validation"]
      }
    ],
    focus: {
      ar: "تصميم منتجات سهلة الاستخدام وجذابة ومتوافقة مع احتياجات المستخدمين الحقيقية.",
      en: "Designing accessible, visually striking products tuned strictly to real user needs."
    }
  },
  {
    id: "ai",
    title: {
      ar: "تطوير ودمج الذكاء الاصطناعي (AI)",
      en: "AI Development & Integration",
    },
    shortDesc: {
      ar: "بناء تطبيقات وأنظمة ذكية موظفة لنماذج اللغة الكبيرة (LLMs)، ووكلاء الذكاء الاصطناعي، وتقنيات RAG وأتمتة العمليات.",
      en: "Engineering intelligent applications powered by Large Language Models, autonomous AI Agents, RAG pipelines, and automated reasoning workflows.",
    },
    longDesc: {
      ar: "متخصص في بناء تطبيقات وأنظمة ذكية باستخدام نماذج الذكاء الاصطناعي وواجهات API وتقنيات معالجة البيانات. تشمل خبرتي دمج نماذج اللغة الكبيرة LLMs، وبناء روبوتات محادثة ذكية، وأنظمة RAG (Retrieval-Augmented Generation)، وهندسة الأوامر Prompt Engineering، وتوظيف وكلاء الذكاء الاصطناعي لأتمتة سير العمل الرقمي.",
      en: "Focused on developing AI-powered workflows and enterprise applications. I orchestrate LLM integrations, Retrieval-Augmented Generation (RAG) over private knowledge bases, autonomous AI agents, fine-tuned prompt engineering, and intelligent chatbots that elevate operational efficiency.",
    },
    icon: "Cpu",
    gradient: "from-cyan-500 to-blue-600",
    technologies: ["LLM APIs", "AI Agents", "RAG Systems", "Vector Embeddings", "Prompt Engineering", "OpenAI / Claude / Gemini APIs", "Workflow Automation"],
    capabilities: [
      {
        category: { ar: "نماذج اللغة والوكلاء", en: "LLMs & Agentic Systems" },
        items: ["Autonomous AI Agents", "Multi-step Reasoning Chains", "Prompt Engineering Optimization", "Intelligent Chatbots"]
      },
      {
        category: { ar: "استرجاع المعرفة RAG", en: "Knowledge & RAG" },
        items: ["Retrieval-Augmented Generation", "Semantic Search & Embeddings", "Document Parsing & Chunking", "Knowledge Base Syncing"]
      },
      {
        category: { ar: "الأتمتة والإنتاجية", en: "Automation & Integration" },
        items: ["Automated Workflow Pipelines", "AI API Connectors", "Context Window Optimization", "Fallback & Guardrail Engineering"]
      }
    ],
    focus: {
      ar: "دمج الذكاء الاصطناعي في صميم التطبيقات لزيادة الإنتاجية وتقديم حلول غير مسبوقة.",
      en: "Embedding AI into core applications to boost productivity and unlock unprecedented value."
    }
  },
  {
    id: "frontend",
    title: {
      ar: "تطوير الواجهات الأمامية (Frontend)",
      en: "Frontend Web Development",
    },
    shortDesc: {
      ar: "تحويل التصاميم إلى واجهات ويب فائقة السرعة، متجاوبة، وتفاعلية مع دعم كامل للـ RTL/LTR وإمكانية الوصول.",
      en: "Transforming design prototypes into blazing-fast, reactive, accessible web applications with zero layout shift and flawless responsiveness.",
    },
    longDesc: {
      ar: "متخصص في تحويل تصاميم UI/UX إلى واجهات ويب احترافية وتفاعلية وسريعة ومتجاوبة مع مختلف الأجهزة. أركز على بناء واجهات قابلة لإعادة الاستخدام، سهلة الصيانة، وعالية الأداء باستخدام Next.js و React و TypeScript و Tailwind CSS مع معايير وصول صارمة.",
      en: "Crafting pixel-perfect, accessible client experiences using modern Next.js (App Router), React, TypeScript, and Tailwind CSS. I prioritize component reusability, state management, lightweight client bundles, and smooth 60fps micro-animations.",
    },
    icon: "Code",
    gradient: "from-emerald-500 to-teal-600",
    technologies: ["Next.js (App Router)", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5 / CSS3", "State Management", "WCAG 2.2 AA"],
    capabilities: [
      {
        category: { ar: "بنية المكونات", en: "Component Architecture" },
        items: ["Component-Driven Development", "Atomic Design System", "Strict TypeScript Typings", "Micro-Frontends"]
      },
      {
        category: { ar: "الأداء والاستجابة", en: "Performance & Responsiveness" },
        items: ["Next.js Server Components (RSC)", "Dynamic Imports & Code Splitting", "Zero Layout Shifts (CLS)", "Adaptive Layouts (Mobile to 4K)"]
      },
      {
        category: { ar: "إمكانية الوصول واللغات", en: "Accessibility & i18n" },
        items: ["WCAG 2.2 AA Standards", "Full RTL / LTR Directionality", "Keyboard Navigation & Focus", "Screen Reader ARIA Compatibility"]
      }
    ],
    focus: {
      ar: "واجهات سريعة التحميل، بديهية في الاستخدام، وقابلة للتطوير المستمر دون تعقيد.",
      en: "Instant-loading interfaces that are delightfully intuitive and easy to maintain."
    }
  },
  {
    id: "backend",
    title: {
      ar: "تطوير الأنظمة الخلفية (Backend)",
      en: "Backend & Systems Development",
    },
    shortDesc: {
      ar: "بناء بنية برمجية قوية وآمنة وقابلة للتوسع، وتصميم وتطوير واجهات API وإدارة قواعد البيانات المتقدمة.",
      en: "Architecting resilient server infrastructure, high-throughput REST APIs, normalized relational databases, and enterprise access control.",
    },
    longDesc: {
      ar: "متخصص في بناء بنية برمجية قوية وآمنة وقابلة للتوسع، وتصميم وتطوير واجهات API وإدارة قواعد البيانات وتنفيذ منطق الأعمال. أركز على استقرار الأنظمة وسرعة الاستجابة وحماية البيانات وجودة البنية البرمجية باستخدام PostgreSQL و Supabase و Node.js والمزيد.",
      en: "Engineering robust backend systems and RESTful APIs with hardened security, role-based access control (RBAC), and efficient database queries. I focus on server response latency, scalable data modeling, seamless data integrity, and modular services.",
    },
    icon: "Server",
    gradient: "from-indigo-600 to-blue-700",
    technologies: ["Node.js", "PostgreSQL", "Supabase", "RESTful APIs", "Authentication / JWT", "RBAC", "Data Modeling", "Cloud Services"],
    capabilities: [
      {
        category: { ar: "تصميم واجهات البرمجة", en: "API Engineering" },
        items: ["RESTful API Architecture", "Rate Limiting & Throttling", "Input Sanitization & Validation", "API Documentation & Versioning"]
      },
      {
        category: { ar: "قواعد البيانات ونمذجة البيانات", en: "Database & Modeling" },
        items: ["PostgreSQL Schema Normalization", "Indexing & Query Optimization", "Supabase Backend Integration", "Transactions & ACID Compliance"]
      },
      {
        category: { ar: "الأمان والتحكم بالوصول", en: "Security & Access" },
        items: ["Role-Based Access Control (RBAC)", "JWT & Session Management", "Row-Level Security (RLS)", "Encrypted Payload Transmission"]
      }
    ],
    focus: {
      ar: "استقرار الأنظمة، سرعة استجابة الخوادم، وحماية البيانات وفق أفضل المعايير الهندسية.",
      en: "Ensuring maximum system uptime, minimal API latency, and bulletproof data security."
    }
  },
  {
    id: "seo",
    title: {
      ar: "تحسين محركات البحث (SEO)",
      en: "Search Engine Optimization (SEO)",
    },
    shortDesc: {
      ar: "تحسين ظهور المواقع في محركات البحث من خلال SEO التقني والمحتوى المنظم والـ Structured Data و Core Web Vitals.",
      en: "Maximizing organic search discoverability through deep Technical SEO, Core Web Vitals optimization, and rich Schema JSON-LD data.",
    },
    longDesc: {
      ar: "متخصص في تحسين ظهور المواقع الإلكترونية في نتائج محركات البحث وزيادة الزيارات العضوية. أطبق استراتيجية شاملة تشمل Technical SEO وهيكلة البيانات، وOn-Page SEO وتحسين المحتوى وعلامات الميتا، بالإضافة إلى استراتيجيات السيو الخارجي وبناء المرجعية.",
      en: "Specializing in organic visibility and search indexing. I implement comprehensive Technical SEO—including clean sitemaps, robots.txt, canonicalization, and Schema markup (Person, Organization, WebSite)—alongside optimized Core Web Vitals and targeted semantic on-page keywords.",
    },
    icon: "Search",
    gradient: "from-amber-500 to-orange-600",
    technologies: ["Technical SEO", "Schema Markup (JSON-LD)", "Core Web Vitals", "Dynamic Sitemap", "Robots.txt", "Open Graph", "Twitter Cards"],
    capabilities: [
      {
        category: { ar: "السيو التقني", en: "Technical SEO" },
        items: ["Crawlability & Indexing Audit", "Dynamic XML Sitemaps", "Robots.txt Optimization", "Canonical URLs & Hreflang Tags"]
      },
      {
        category: { ar: "البيانات المنظمة", en: "Structured Data" },
        items: ["JSON-LD Schema Implementation", "Rich Snippets Configuration", "Open Graph & Twitter Cards", "Heading Hierarchy (H1-H6)"]
      },
      {
        category: { ar: "الأداء والسرعة", en: "Performance & Vitals" },
        items: ["Core Web Vitals Compliance", "Image Alt & Optimization", "Internal Linking Architecture", "Mobile-First Optimization"]
      }
    ],
    focus: {
      ar: "بناء مواقع صديقة لمحركات البحث، وتحسين بنيتها التقنية والمحتوى وتجربة المستخدم.",
      en: "Engineering search-friendly web ecosystems that capture top organic search rankings."
    }
  },
  {
    id: "security",
    title: {
      ar: "أمن وحماية الويب (Cybersecurity)",
      en: "Web Security & Cybersecurity",
    },
    shortDesc: {
      ar: "تقييم أمان الأنظمة واكتشاف الثغرات وتطبيق ممارسات OWASP لحماية التطبيقات والبيانات ضد الهجمات السيبرانية.",
      en: "Assessing system vulnerabilities, hardening API boundaries, and enforcing modern OWASP standards against cyber attacks.",
    },
    longDesc: {
      ar: "متخصص في تقييم أمان الأنظمة واكتشاف نقاط الضعف وتحليل المخاطر وتطبيق الممارسات الأمنية الحديثة. تشمل خبرتي حماية تطبيقات الويب وواجهات APIs، ومنع هجمات OWASP Top 10 مثل XSS و SQL Injection و CSRF، وتأمين المصادقة والبيانات الحساسة.",
      en: "Dedicated to auditing systems and defending digital assets against vulnerabilities. I enforce OWASP Top 10 mitigation strategies (preventing XSS, CSRF, Injection, broken auth), implement strict Content Security Policies, harden REST endpoints, and ensure end-to-end data encryption.",
    },
    icon: "ShieldCheck",
    gradient: "from-red-600 to-rose-500",
    technologies: ["OWASP Top 10", "Input Sanitization", "API Rate Limiting", "CSP Headers", "Vulnerability Assessment", "Secure Authentication", "HTTPS/TLS"],
    capabilities: [
      {
        category: { ar: "حماية التطبيقات", en: "Application Hardening" },
        items: ["OWASP Top 10 Mitigation", "Cross-Site Scripting (XSS) Prevention", "SQL/NoSQL Injection Defenses", "CSRF Protection"]
      },
      {
        category: { ar: "تأمين الواجهات والبيانات", en: "API & Data Protection" },
        items: ["Strict Rate Limiting & Throttling", "Input Sanitization & Escaping", "Secure Headers (CSP, HSTS, X-Frame)", "Encrypted Storage & Transmission"]
      },
      {
        category: { ar: "تقييم المخاطر", en: "Vulnerability Auditing" },
        items: ["Ethical Vulnerability Assessment", "Authentication & Session Audits", "Secure Coding Standards", "Access Control Verification"]
      }
    ],
    focus: {
      ar: "بناء أنظمة موثوقة ومحمية وحفظ خصوصية بيانات المستخدمين دون أي مساومة.",
      en: "Building bulletproof, trustworthy platforms that safeguard data integrity."
    }
  },
  {
    id: "mobile",
    title: {
      ar: "تطوير تطبيقات الهواتف (Mobile Apps)",
      en: "Mobile App Development",
    },
    shortDesc: {
      ar: "تطوير تطبيقات الهواتف الذكية عالية الأداء لنظامي Android و iOS باستخدام إطار عمل Flutter ولغة Dart بتجربة مستخدم أصيلة.",
      en: "Building cross-platform mobile apps for Android and iOS using Flutter & Dart, delivering native responsiveness and high-fidelity UI.",
    },
    longDesc: {
      ar: "متخصص في بناء تطبيقات الهواتف الذكية متعددة المنصات باستخدام Flutter و Dart. تشمل خبرتي بناء واجهات هواتف متجاوبة، وإدارة الحالة باحترافية، وربط واجهات برمجة التطبيقات وقواعد البيانات السحابية (Firebase/Supabase)، وتجهيز التطبيقات للنشر في Google Play و Apple App Store.",
      en: "Specializing in multiplatform mobile app engineering using Flutter & Dart. I build smooth native-feel user experiences for iOS and Android, handling state management, cloud backends, offline-first data synchronization, REST API integration, and production app store deployments.",
    },
    icon: "Smartphone",
    gradient: "from-sky-500 to-blue-600",
    technologies: ["Flutter", "Dart", "Android", "iOS", "State Management (Provider/Bloc)", "REST APIs", "Firebase", "App Store Deployment"],
    capabilities: [
      {
        category: { ar: "تطوير متعدد المنصات", en: "Cross-Platform Mobile" },
        items: ["Single Codebase for Android & iOS", "Native-like 60fps Performance", "Platform-specific Adaptations", "Offline Caching & Sync"]
      },
      {
        category: { ar: "إدارة الحالة والبيانات", en: "State & Architecture" },
        items: ["State Management (Bloc/Provider)", "Clean Architecture Mobile", "REST & GraphQL Integration", "Firebase Authentication & Push Notifications"]
      },
      {
        category: { ar: "النشر والمتاجر", en: "Testing & Deployment" },
        items: ["Automated Unit & Widget Testing", "Google Play Store Deployment", "Apple App Store Packaging", "Performance Profiling"]
      }
    ],
    focus: {
      ar: "تطبيقات هواتف مستقرة، أنيقة، وسريعة الاستجابة تحقق رضا المستخدمين وتنافس عالمياً.",
      en: "Stable, elegant mobile applications that provide native fluidity on both iOS and Android."
    }
  }
];
