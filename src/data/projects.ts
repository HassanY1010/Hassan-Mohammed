import { ProjectItem } from '@/types';

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: "ai-enterprise-rag",
    title: {
      ar: "منصة ذكاء اصطناعي لاسترجاع المعرفة المؤسسية (Enterprise RAG)",
      en: "Enterprise AI Knowledge Hub (RAG & Agents)",
    },
    category: "ai",
    featured: true,
    summary: {
      ar: "نظام متقدم يربط مستندات الشركات بنماذج لغوية كبرى (LLMs) للإجابة الدقيقة وأتمتة القرارات دون هلوسة برمجية.",
      en: "Production-ready enterprise platform orchestrating LLMs with internal document knowledge bases using vector embeddings and multi-step agents.",
    },
    problem: {
      ar: "صعوبة وصول فرق العمل للمعلومات المتناثرة في آلاف المستندات والملفات، واستغراق وقت طويل في البحث اليدوي وأتمتة الردود.",
      en: "Corporate teams wasted hours manually searching disparate PDF/DOCX manuals and knowledge bases with no single authoritative conversational interface.",
    },
    solution: {
      ar: "بناء بنية RAG متكاملة مع تقسيم ذكي للنصوص (Chunking) وقواعد بيانات متجهة (Vector Store)، مع واجهة محادثة تفاعلية سريعة.",
      en: "Architected a high-recall RAG pipeline utilizing semantic vector search, strict hallucination guardrails, and responsive Next.js frontend.",
    },
    myRole: {
      ar: "مهندس حلول الذكاء الاصطناعي وتطوير Full Stack (التصميم المعماري، هندسة RAG، والواجهات).",
      en: "Lead AI Engineer & Full Stack Architect (Architecture, RAG Pipeline, UI Engineering).",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Python / FastAPI", "OpenAI / LLM API", "Vector Embeddings", "Supabase PostgreSQL"],
    githubUrl: "https://github.com/HassanY1010",
    liveUrl: "https://github.com/HassanY1010",
    highlights: {
      ar: [
        "بحث دلالي فوري بدقة استرجاع عالية مع إسناد المصادر",
        "واجهة مستخدم تفاعلية مع دعم المحادثات المتزامنة واللغتين",
        "حماية مشددة لبيانات المستندات وصلاحيات وصول المستخدمين",
      ],
      en: [
        "Sub-second semantic search with precise source citations",
        "Bi-directional RTL/LTR conversational interface",
        "Role-based document access control and data isolation",
      ],
    },
  },
  {
    id: "smart-health-flutter",
    title: {
      ar: "تطبيق صحي متكامل للهواتف الذكية (Smart Care Mobile App)",
      en: "Smart Healthcare Cross-Platform Mobile App",
    },
    category: "mobile",
    featured: true,
    summary: {
      ar: "تطبيق هواتف ذكية لنظامي Android و iOS يتيح حجز المواعيد والاستشارات الطبية والمزامنة الفورية للسجلات الصحية.",
      en: "Cross-platform iOS & Android mobile application enabling appointment scheduling, medical history tracking, and doctor consultations.",
    },
    problem: {
      ar: "تعقيد تجربة حجز المواعيد الطبية وتأخر وصول المرضى للسجلات والتقارير الطبية بصورة رقمية آمنة.",
      en: "Patients faced fragmented booking experiences and lacked secure immediate mobile access to diagnostic reports and prescription schedules.",
    },
    solution: {
      ar: "تطوير تطبيق متكامل باستخدام Flutter و Dart مع معمارية Bloc لإدارة الحالة، ومزامنة فورية للبيانات عبر السحابة وتنبيهات مخصصة.",
      en: "Engineered a native-speed Flutter app featuring reactive Bloc state management, offline-first SQLite caching, and encrypted Firebase/REST sync.",
    },
    myRole: {
      ar: "مطور تطبيقات الهواتف وتجربة الاستخدام (Mobile Developer & UI/UX Designer).",
      en: "Mobile App Developer & UI/UX Designer (Flutter, Architecture, API integration).",
    },
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "Bloc Pattern", "Figma", "Google Play / App Store"],
    githubUrl: "https://github.com/HassanY1010",
    liveUrl: "https://github.com/HassanY1010",
    highlights: {
      ar: [
        "واجهة مستخدم مريحة وسريعة الاستجابة تعمل بمعدل 60 إطار/ثانية",
        "نظام إشعارات دفع وتذكيرات ذكية بمواعيد الأدوية",
        "تشفير كامل للبيانات الطبية وفق معايير الخصوصية",
      ],
      en: [
        "Fluid 60fps native feel across both iOS and Android",
        "Push notification alerts for appointments and medications",
        "Encrypted local storage adhering to healthcare data standards",
      ],
    },
  },
  {
    id: "saas-multitenant-platform",
    title: {
      ar: "منصة إدارة العمليات السحابية المتعددة المستأجرين (SaaS Ops)",
      en: "Multi-Tenant Cloud Operations SaaS Platform",
    },
    category: "saas",
    featured: true,
    summary: {
      ar: "نظام SaaS متكامل لإدارة الأعمال والمشاريع والفرق مع دعم الاشتراكات المتعددة وعزل بيانات الشركات.",
      en: "Comprehensive multi-tenant SaaS application providing workflow management, role-based controls, analytics, and subscription billing.",
    },
    problem: {
      ar: "حاجة الشركات الناشئة لمنصة مركزية تدير المهام والتقارير المالية دون الحاجة للاشتراك في عدة أنظمة منفصلة.",
      en: "Startups needed a unified workspace combining project tracking, team quotas, and invoice monitoring without expensive disparate tools.",
    },
    solution: {
      ar: "تصميم وبناء بنية معمارية تدعم Multi-Tenancy في قاعدة بيانات PostgreSQL مع Next.js و Supabase ولوحات تحكم تفاعلية.",
      en: "Built a scalable multi-tenant architecture with PostgreSQL Row-Level Security (RLS), JWT authentication, and interactive analytics.",
    },
    myRole: {
      ar: "مهندس برمجيات ونظم Full Stack (بناء قاعدة البيانات، الواجهات والـ APIs).",
      en: "Full Stack Systems Engineer (Database Design, Backend APIs, Frontend Dashboard).",
    },
    technologies: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "PostgreSQL", "Supabase", "Row Level Security", "REST APIs"],
    githubUrl: "https://github.com/HassanY1010",
    liveUrl: "https://github.com/HassanY1010",
    highlights: {
      ar: [
        "عزل تام وآمن لبيانات كل مستأجر عبر PostgreSQL RLS",
        "لوحة تحكم إدارية تفاعلية مع رسوم بيانية لحظية",
        "تحميل سريع جداً للصفحات باستخدام Next.js Server Components",
      ],
      en: [
        "Strict database isolation per tenant using PostgreSQL RLS",
        "High-performance telemetry and dynamic KPI charting",
        "Zero-CLS rendering with Next.js React Server Components",
      ],
    },
  },
  {
    id: "ecommerce-fintech-web",
    title: {
      ar: "منصة تجارة إلكترونية وبوابة دفع متطورة",
      en: "Modern High-Performance E-Commerce Platform",
    },
    category: "web",
    featured: false,
    summary: {
      ar: "متجر رقمي سريع مصمم لتحقيق أعلى معدلات التحويل وتجربة دفع سلسة وآمنة مع إدارة متقدمة للمخزون.",
      en: "High-conversion modern e-commerce storefront engineered for sub-second page transitions, dynamic inventory, and secure checkout.",
    },
    problem: {
      ar: "بطء المتاجر التقليدية وتراجع معدلات الشراء نتيجة لتعقيد خطوات إتمام الطلب على الهواتف المحمولة.",
      en: "Traditional storefronts suffered from sluggish navigation, cart abandonment, and clumsy mobile checkout experiences.",
    },
    solution: {
      ar: "بناء واجهة أمامية فائقة السرعة بـ Next.js وتحديث فوري للمنتجات والسلة، مع تكامل محكم مع بوابات الدفع الإلكتروني.",
      en: "Engineered an edge-rendered storefront with optimistic UI updates, responsive cart drawers, and strict checkout validation.",
    },
    myRole: {
      ar: "مطور الواجهات الأمامية والـ APIs (Frontend & API Integration).",
      en: "Frontend & API Integration Engineer (Next.js, State, Checkout Flows).",
    },
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs", "Payment Gateways"],
    githubUrl: "https://github.com/HassanY1010",
    liveUrl: "https://github.com/HassanY1010",
    highlights: {
      ar: [
        "نتيجة 95+ في مؤشرات أداء Google Lighthouse",
        "سلة تسوق فورية وسلسة دون إعادة تحميل الصفحة",
        "تصميم متوافق مع كافة أحجام الهواتف والشاشات اللمسية",
      ],
      en: [
        "95+ Google Lighthouse performance rating across mobile & desktop",
        "Optimistic cart state with instantaneous client updates",
        "Mobile-first responsive design engineered for rapid conversion",
      ],
    },
  },
  {
    id: "fintech-uiux-design-system",
    title: {
      ar: "نظام تصميم وتجربة مستخدم لمنظومة مالية (FinTech UI/UX)",
      en: "Enterprise FinTech Design System & UI/UX",
    },
    category: "uiux",
    featured: false,
    summary: {
      ar: "نظام تصميم شامل وموحد لتطبيق مصرفي يغطي أكثر من 80 شاشة تفاعلية وعناصر Design Tokens قابلة لإعادة الاستخدام.",
      en: "Comprehensive atomic design system and accessible visual UX created in Figma for a modern digital banking and transfer app.",
    },
    problem: {
      ar: "تشتت الهوية البصرية بين عدة تطبيقات وعدم وجود معايير تصميمية موحدة تضمن سرعة تطوير الميزات الجديدة.",
      en: "Fragmented design patterns across platforms caused inconsistent user experiences and prolonged developer implementation time.",
    },
    solution: {
      ar: "بناء نظام تصميم متكامل (Atomic Design System) في Figma متوافق مع معايير إمكانية الوصول WCAG 2.2 AA.",
      en: "Built a unified design system with semantic color tokens, typography scales, responsive components, and interactive prototypes.",
    },
    myRole: {
      ar: "مصمم منتج وتجربة مستخدم رئيسي (Lead UI/UX & Design System Architect).",
      en: "Lead Product & UI/UX Designer (Design Tokens, Components, Usability Testing).",
    },
    technologies: ["Figma", "Design Tokens", "Interactive Prototyping", "WCAG 2.2 AA", "User Journey Mapping"],
    githubUrl: "https://github.com/HassanY1010",
    liveUrl: "https://github.com/HassanY1010",
    highlights: {
      ar: [
        "مكتبة مكونات قابلة لإعادة الاستخدام بنسبة 100% لتسريع التطوير",
        "تباين ألوان وتدرجات متوافقة مع معايير الوصول العالمية",
        "توثيق شامل لتسهيل تسليم التصاميم للمطورين (Design Handoff)",
      ],
      en: [
        "100% reusable atomic UI component tokens for fast engineering handoff",
        "High-contrast palettes audited for WCAG 2.2 AA standards",
        "Interactive micro-interaction animations documented for developers",
      ],
    },
  },
];
