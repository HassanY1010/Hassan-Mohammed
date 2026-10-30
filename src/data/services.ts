import { ServiceItem } from '@/types';

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 1,
    tag: "Web Engineering",
    icon: "Globe",
    title: {
      ar: "تطوير مواقع الويب الاحترافية",
      en: "Custom Professional Web Development",
    },
    description: {
      ar: "بناء مواقع ويب عصرية وفائقة السرعة، متجاوبة مع كافة الشاشات، مصممة خصيصاً لتعزيز الحضور الرقمي وتحويل الزوار إلى عملاء.",
      en: "Crafting modern, ultra-fast web experiences tailored to maximize brand presence and drive higher visitor conversions.",
    },
    features: {
      ar: [
        "تصميم متجاوب بالكامل مع الهواتف والشاشات الكبيرة",
        "سرعة تحميل قياسية متوافقة مع Core Web Vitals",
        "بنية مهيأة لمحركات البحث وأمان عالي",
      ],
      en: [
        "100% responsive fluid mobile-first layouts",
        "Sub-second load times fulfilling Core Web Vitals",
        "Search-engine optimized structure and TLS encryption",
      ],
    },
    clientBenefit: {
      ar: "حضور رقمي استثنائي يعزز ثقة العملاء ويضاعف التفاعل والمبيعات.",
      en: "Elevated brand prestige that fosters instant customer credibility and leads.",
    },
  },
  {
    id: 2,
    tag: "Enterprise Platforms",
    icon: "Layers",
    title: {
      ar: "تطوير الأنظمة والمنصات المتكاملة",
      en: "Integrated Web Systems & Platforms",
    },
    description: {
      ar: "هندسة منصات ويب معقدة تدير تدفقات العمل، المعاملات، والمستخدمين بروابط متزامنة وقواعد بيانات موحدة.",
      en: "Architecting sophisticated full-scale platforms managing workflows, transactions, and multi-tenant user operations seamlessly.",
    },
    features: {
      ar: [
        "هندسة برمجية متماسكة مبنية على التوسع",
        "إدارة متطورة للصلاحيات وتدفق البيانات",
        "تكامل كامل بين واجهات المستخدم والخوادم",
      ],
      en: [
        "Scalable modular enterprise architecture",
        "Advanced role-based access & automated workflows",
        "Tight synchronization between client and server",
      ],
    },
    clientBenefit: {
      ar: "أتمتة العمليات الإدارية والتشغيلية وتقليل التكاليف التشغيلية بنسبة كبيرة.",
      en: "Streamlined operational efficiency and dramatically reduced manual overhead.",
    },
  },
  {
    id: 3,
    tag: "Product Design",
    icon: "Palette",
    title: {
      ar: "تصميم واجهات وتجربة المستخدم (UI/UX)",
      en: "UI/UX & Interactive Product Design",
    },
    description: {
      ar: "تصميم تجارب رقمية جذابة وسلسة تبدأ من أبحاث المستخدمين والـ Wireframes وصولاً إلى نماذج تفاعلية ونظام تصميم متكامل.",
      en: "Transforming complex workflows into delightful user journeys with research-backed wireframing and comprehensive design systems.",
    },
    features: {
      ar: [
        "دراسة سلوك المستخدم وبناء رحلة استخدام سلسة",
        "أنظمة تصميم Design Systems قابلة لإعادة الاستخدام",
        "نماذج تفاعلية عالية الدقة مع مراعاة WCAG",
      ],
      en: [
        "User journey research and friction elimination",
        "Reusable, scalable atomic design systems",
        "High-fidelity interactive clickable prototypes in Figma",
      ],
    },
    clientBenefit: {
      ar: "تجربة مستخدم ممتعة ترفع نسبة بقاء الزوار وتقلل معدل الارتداد.",
      en: "Frictionless UX that increases engagement and boosts user retention.",
    },
  },
  {
    id: 4,
    tag: "Modern Frontend",
    icon: "Code",
    title: {
      ar: "تطوير واجهات المستخدم Frontend",
      en: "Modern Frontend Web Engineering",
    },
    description: {
      ar: "تحويل التصاميم إلى كود برمجي نظيف فائق السرعة والتفاعل باستخدام Next.js و React و TypeScript و Tailwind CSS.",
      en: "Translating design visions into maintainable, component-driven client applications using Next.js, React, and strict TypeScript.",
    },
    features: {
      ar: [
        "كود نظيف خاضع لمعايير TypeScript الصارمة",
        "دعم متكامل ومثالي للغات RTL (العربية) و LTR",
        "حركات تفاعلية ناعمة وأداء خفيف",
      ],
      en: [
        "Clean, strictly typed component architecture",
        "Flawless native bi-directional RTL & LTR support",
        "Smooth micro-interactions and minimal bundle overhead",
      ],
    },
    clientBenefit: {
      ar: "تطبيق ويب تفاعلي سريع ومستقر يمنح المستخدمين تجربة تطبيق مكتبي حقيقي.",
      en: "Native desktop-like responsiveness that delights end users.",
    },
  },
  {
    id: 5,
    tag: "Server & API",
    icon: "Server",
    title: {
      ar: "تطوير الأنظمة الخلفية و APIs",
      en: "Backend & RESTful API Architecture",
    },
    description: {
      ar: "بناء خوادم وخدمات REST APIs آمنة وقابلة للتوسع للتعامل مع آلاف الطلبات المتزامنة مع منطق أعمال محكم.",
      en: "Engineering high-throughput backend services and secure REST APIs capable of handling demanding traffic reliably.",
    },
    features: {
      ar: [
        "واجهات RESTful سريعة ومحمية بمعدلات طلب مدروسة",
        "مصادقة آمنة JWT وتشفير عالي للبيانات",
        "توثيق واضح لواجهات البرمجة وسهولة الربط",
      ],
      en: [
        "High-performance endpoints with rate-limiting and caching",
        "Hardened JWT authentication and role-based permissions",
        "Well-documented APIs ready for seamless client integration",
      ],
    },
    clientBenefit: {
      ar: "بنية خوادم متينة تحمي منطق العمل وتضمن سرعة الاستجابة مهما زاد عدد المستخدمين.",
      en: "Rock-solid server infrastructure protecting business logic and scaling effortlessly.",
    },
  },
  {
    id: 6,
    tag: "Mobile Apps",
    icon: "Smartphone",
    title: {
      ar: "تطوير تطبيقات الهواتف الذكية (Android & iOS)",
      en: "Cross-Platform Mobile Apps (Flutter)",
    },
    description: {
      ar: "بناء وتطوير تطبيقات هواتف ذكية لنظامي أندرويد و iOS باستخدام Flutter و Dart بكود موحد وأداء يقارب التطبيقات الأصلية.",
      en: "Developing native-quality cross-platform mobile apps using Flutter and Dart from a unified, robust codebase.",
    },
    features: {
      ar: [
        "تطبيق واحد يعمل بكفاءة على Google Play و App Store",
        "ربط فوري بقواعد البيانات والخدمات السحابية وإشعارات الدفع",
        "واجهات تفاعلية سريعة بمعدل 60 إطار في الثانية",
      ],
      en: [
        "Single code base deployed to Google Play and Apple App Store",
        "Cloud backend sync, offline storage, and push notifications",
        "Fluid 60fps animations with native mobile feel",
      ],
    },
    clientBenefit: {
      ar: "تقليل تكاليف ووقت التطوير للنصف مع ضمان التواجد في كلا المتجرين بأعلى جودة.",
      en: "Halved development costs and time-to-market across both mobile stores.",
    },
  },
  {
    id: 7,
    tag: "AI & Innovation",
    icon: "Cpu",
    title: {
      ar: "تطوير ودمج حلول الذكاء الاصطناعي",
      en: "Applied AI Solutions & LLM Integration",
    },
    description: {
      ar: "دمج نماذج الذكاء الاصطناعي التوليدي، وتطوير وكلاء أذكياء، وأنظمة استرجاع المعلومات RAG لأتمتة المهام الذكية.",
      en: "Harnessing the power of LLMs, intelligent agents, and RAG architectures to automate decisions and augment digital workflows.",
    },
    features: {
      ar: [
        "روبوتات محادثة ذكية تفهم مستندات وبيانات شركتك (RAG)",
        "أتمتة سير العمل المعقد باستخدام وكلاء AI ذوي تفكير متعدد الخطوات",
        "هندسة أوامر دقيقة لتقليل الأخطاء وضمان دقة المخرجات",
      ],
      en: [
        "Domain-specific RAG chatbots grounded in enterprise documents",
        "Autonomous multi-step reasoning agents automating repetitive tasks",
        "Tuned prompt engineering delivering deterministic, accurate output",
      ],
    },
    clientBenefit: {
      ar: "إعطاء مشروعك ميزة تنافسية كبرى ومضاعفة إنتاجية فريق العمل عبر الذكاء الاصطناعي.",
      en: "Substantial competitive edge through intelligent process automation.",
    },
  },
  {
    id: 8,
    tag: "Organic Growth",
    icon: "Search",
    title: {
      ar: "تحسين محركات البحث الشامل (SEO)",
      en: "Comprehensive Search Engine Optimization",
    },
    description: {
      ar: "تحسين البنية التقنية للموقع، وهيكلة المحتوى، وإعداد المخططات (Schema JSON-LD) لتصدر نتائج البحث في Google.",
      en: "Elevating search visibility through technical audits, structured JSON-LD schema, Core Web Vitals optimization, and semantic tagging.",
    },
    features: {
      ar: [
        "إعداد ملفات sitemap و robots.txt والتحكم بالفهرسة",
        "بيانات منظمة Schema JSON-LD تدعم Rich Snippets",
        "تحسين سرعة الصفحات ومؤشرات تجربة المستخدم Core Web Vitals",
      ],
      en: [
        "Automated XML sitemaps, robots.txt, and indexation controls",
        "Rich Schema.org JSON-LD snippets for enhanced SERP visibility",
        "Core Web Vitals scoring to satisfy Google ranking factors",
      ],
    },
    clientBenefit: {
      ar: "زيارات عضوية مستمرة ومستهدفة من Google دون الحاجة للاعتماد الدائم على الإعلانات الممولة.",
      en: "Sustainable long-term organic traffic acquisition without ongoing ad spend.",
    },
  },
  {
    id: 9,
    tag: "Cyber Defense",
    icon: "ShieldAlert",
    title: {
      ar: "تأمين المواقع وتطبيقات الويب",
      en: "Web Application Hardening & Security",
    },
    description: {
      ar: "فحص الثغرات الأمنية، وتطبيق معايير OWASP، وتأمين واجهات البرمجة وقواعد البيانات ضد محاولات الاختراق والتسريب.",
      en: "Conducting vulnerability assessments and enforcing OWASP defenses to protect applications and customer data from breaches.",
    },
    features: {
      ar: [
        "حماية مشددة ضد ثغرات XSS و SQL Injection و CSRF",
        "تطبيق ترويسات الأمان الصارمة (Content Security Policy)",
        "تأمين بوابات المصادقة وإدارة الجلسات الحساسة",
      ],
      en: [
        "Comprehensive defenses against XSS, SQLi, and CSRF attacks",
        "Hardened HTTP response headers (CSP, HSTS, X-Frame-Options)",
        "Rigorous authentication flow validation and rate limiting",
      ],
    },
    clientBenefit: {
      ar: "حماية بيانات عملائك وسمعة علامتك التجارية وتفادي الخسائر الناتجة عن الاختراقات.",
      en: "Complete peace of mind knowing your data and reputation are safeguarded.",
    },
  },
  {
    id: 10,
    tag: "Cloud SaaS",
    icon: "Cloud",
    title: {
      ar: "تطوير منصات وأنظمة SaaS السحابية",
      en: "Cloud SaaS Architecture & Platforms",
    },
    description: {
      ar: "بناء برمجيات كخدمة (SaaS) متكاملة تدعم تعدد المستأجرين، وبوابات الدفع والاشتراكات الشهرية، ولوحات التحكم المتقدمة.",
      en: "Designing scalable Multi-Tenant SaaS systems complete with subscription management, user access tiers, and analytics.",
    },
    features: {
      ar: [
        "عمارة تدعم تعدد المستخدمين والشركات Multi-Tenant",
        "ربط بوابات الاشتراكات والفواتير التلقائية",
        "أمان عزل البيانات بين الحسابات المختلفة",
      ],
      en: [
        "Multi-tenant architecture isolating client workspaces",
        "Integrated payment gateways and recurring subscription billing",
        "Granular team permission models and audit logging",
      ],
    },
    clientBenefit: {
      ar: "تحويل فكرتك البرمجية إلى منتج سحابي يولد إيرادات اشتراك متكررة وقابلة للتوسع اللامحدود.",
      en: "Turn your software concept into a recurring-revenue digital powerhouse.",
    },
  },
  {
    id: 11,
    tag: "Data Insights",
    icon: "BarChart3",
    title: {
      ar: "تطوير لوحات التحكم والتحليلات (Dashboards)",
      en: "Interactive Admin & Analytics Dashboards",
    },
    description: {
      ar: "تصميم وبناء لوحات تحكم إدارية تفاعلية لعرض البيانات المعقدة والرسوم البيانية في الوقت الفعلي لاتخاذ قرارات مدروسة.",
      en: "Crafting intuitive executive dashboards displaying real-time business telemetry, KPIs, and data visualizations.",
    },
    features: {
      ar: [
        "رسوم بيانية تفاعلية وفلاتر متطورة للبيانات",
        "إدارة كاملة للمستخدمين، الصلاحيات، والعمليات",
        "أداء سريع وتحديث لحظي للبيانات الحيوية",
      ],
      en: [
        "Dynamic charts, interactive filters, and drill-down metrics",
        "Comprehensive user management and role assignment controls",
        "Real-time websocket telemetry and instant data filtering",
      ],
    },
    clientBenefit: {
      ar: "رؤية واضحة وشاملة لأرقام ومؤشرات عملك لاتخاذ قرارات استراتيجية دقيقة وسريعة.",
      en: "Crystal-clear operational visibility enabling rapid, data-driven decisions.",
    },
  },
  {
    id: 12,
    tag: "Data Engineering",
    icon: "Database",
    title: {
      ar: "تصميم وتطوير قواعد البيانات المتقدمة",
      en: "Relational Database Design & Tuning",
    },
    description: {
      ar: "تصميم مخططات قواعد البيانات العلائقية (PostgreSQL)، وتحسين استعلامات SQL، وبناء آليات النسخ الاحتياطي والأرشفة.",
      en: "Engineering normalized relational schemas, query index tuning, row-level policies, and data migration pipelines.",
    },
    features: {
      ar: [
        "تصميم جداول وعلاقات مدروسة تمنع تكرار البيانات (Normalization)",
        "فهرسة ذكية لتسريع الاستعلامات المعقدة تحت الضغط",
        "إعداد سياسات أمان البيانات Row-Level Security (RLS)",
      ],
      en: [
        "Normalized relational schemas eliminating data redundancy",
        "Strategic B-tree indexing for lightning query performance",
        "Granular Row-Level Security (RLS) policies",
      ],
    },
    clientBenefit: {
      ar: "قاعدة بيانات مستقرة وسريعة تحافظ على سلامة بياناتك وتمنع بطء التطبيق مع نمو الحجم.",
      en: "Bulletproof data integrity and high-speed retrieval even under massive load.",
    },
  },
];
