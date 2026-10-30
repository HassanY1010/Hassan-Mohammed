import { ProjectItem } from '@/types';

export const PROJECTS_LIST: ProjectItem[] = [
  // 1. BusinessOS
  {
    id: "business-os",
    title: {
      ar: "BusinessOS — نظام إدارة أعمال الشركات والعمليات",
      en: "BusinessOS — All-in-One Enterprise Business Operations",
    },
    category: "saas",
    featured: true,
    summary: {
      ar: "نظام SaaS متكامل لإدارة عمليات الأعمال والشركات، يجمع بين إدارة علاقات العملاء (CRM)، الفواتير المحاسبية، الجدولة، وإدارة المخزون والمهام.",
      en: "Comprehensive business operations SaaS featuring CRM, deal tracking, invoicing, employee scheduling, inventory control, and multi-tier RBAC permissions.",
    },
    problem: {
      ar: "تشتت العمليات الإدارية في الشركات بين جداول بيانات وبرامج منفصلة، مما يسبب بطء الإنجاز وصعوبة متابعة الصفقات والتدفقات المالية والمخزون.",
      en: "Enterprises struggled with fragmented tools for invoicing, sales pipelines, and inventory, resulting in data siloing and administrative overhead.",
    },
    solution: {
      ar: "بناء منصة مركزية موحدة بـ Next.js و PostgreSQL تدعم صلاحيات متعددة المستويات (Admin, Manager, Employee) مع نظام فواتير آلي ومتابعة فورية للمهام والمخزون.",
      en: "Architected a unified Next.js + PostgreSQL platform with strict RBAC access tiers, automated invoice generation, live pipeline tracking, and synchronized inventory.",
    },
    myRole: {
      ar: "مهندس برمجيات Full Stack (تصميم وتطوير الواجهات، هيكلة قاعدة البيانات، وبناء نظام الصلاحيات).",
      en: "Lead Full Stack Software Engineer (Frontend architecture, PostgreSQL modeling, and RBAC security).",
    },
    technologies: ["Next.js", "React", "PostgreSQL", "TypeScript", "Tailwind CSS", "RBAC", "Financial Invoicing"],
    liveUrl: "https://business-os-manssouri.vercel.app/",
    githubUrl: "https://github.com/HassanY1010",
    highlights: {
      ar: [
        "إدارة متقدمة لـ CRM ومراحل الصفقات والعملاء",
        "نظام فواتير وحسابات مالية دقيق وتلقائي",
        "جدولة المواعيد وتوزيع مهام الموظفين بسلاسة",
        "نظام صلاحيات هرمي صارم (Admin, Manager, Employee)",
      ],
      en: [
        "Full-cycle CRM with real-time deal pipeline tracking",
        "Automated financial accounting and customizable invoicing",
        "Smart appointment scheduling and employee task assignments",
        "Granular Role-Based Access Control (Admin, Manager, Employee)",
      ],
    },
  },

  // 2. Tillqorin
  {
    id: "tillqorin-pos",
    title: {
      ar: "Tillqorin — نظام نقاط البيع وإدارة تجارة التجزئة (POS)",
      en: "Tillqorin — Cloud POS & Commerce OS for Retail",
    },
    category: "saas",
    featured: true,
    summary: {
      ar: "منصة ويب سحابية متكاملة لنقاط البيع (POS) وإدارة الفواتير والمخازن صُممت بالكامل؛ تشمل أوامر البيع والشراء، الحسابات، التحليلات، وطباعة الإيصالات الحرارية.",
      en: "End-to-end web POS, invoicing, and inventory management platform featuring sales/purchase orders, financial accounts, analytics, and thermal printing.",
    },
    problem: {
      ar: "تعقيد وبطء أجهزة الكاشير التقليدية وارتفاع تكلفة تراخيصها وصعوبة مزامنة فروع المبيعات مع المخزون المركزي في الوقت الفعلي.",
      en: "Traditional retail cash registers were clunky, closed-source, expensive to license, and failed to sync multi-store inventory with real-time accounting.",
    },
    solution: {
      ar: "تطوير منصة ويب متطورة فائقة السرعة بـ React و TypeScript مع Supabase، تدعم العمل السريع، ربط الطابعات الحرارية، وإدارة المخازن بدقة مع تحليلات مبيعات تفاعلية.",
      en: "Built a high-velocity full-stack cloud POS utilizing React, Vite, Express.js, and Supabase with direct thermal receipt printer communication and multi-warehouse sync.",
    },
    myRole: {
      ar: "قائد تطوير Full Stack (بناء النظام بالكامل، الربط مع الطابعات الحرارية، وإدارة قواعد البيانات السحابية).",
      en: "Lead Full-Stack Product Developer (End-to-end architecture, hardware thermal printer drivers, database design).",
    },
    technologies: ["React", "TypeScript", "Vite", "Supabase", "Express.js", "Thermal Printing", "POS Billing"],
    liveUrl: "https://pos.taylancetech.com/",
    githubUrl: "https://github.com/HassanY1010",
    highlights: {
      ar: [
        "معالجة فورية وسريعة لطلبات البيع والشراء",
        "دعم مباشر لطباعة الإيصالات الحرارية (Thermal Receipts)",
        "مزامنة لحظية للمخزون والحسابات المالية والضرائب",
        "لوحة مؤشرات وتحليلات بيانية تفاعلية للمبيعات",
      ],
      en: [
        "Sub-second checkout flow and order reconciliation",
        "Direct USB/Network thermal receipt printer integration",
        "Live multi-channel inventory deductions and ledger accounting",
        "Real-time visual sales telemetry and tax reporting",
      ],
    },
  },

  // 3. ShopKart
  {
    id: "shopkart-ecommerce",
    title: {
      ar: "ShopKart — متجر إلكتروني تجاري متكامل",
      en: "ShopKart — Modern Full-Stack E-Commerce Platform",
    },
    category: "web",
    featured: true,
    summary: {
      ar: "منصة تجارة إلكترونية سريعة ومتجاوبة مبنية بـ Next.js و Prisma مع لوحة تحكم إدارية وتحليلات مبيعات وتجربة تسوق عصرية.",
      en: "Full-featured online retail store built with Next.js, Prisma ORM, and PostgreSQL, boasting dynamic catalog discovery and administrative analytics.",
    },
    problem: {
      ar: "بطء المتاجر التقليدية وتراجع معدلات الشراء نتيجة لتعقيد خطوات إتمام الطلب وصعوبة إدارة كتالوج المنتجات الكبيرة.",
      en: "Sluggish storefront loading times, high cart drop-off rates, and convoluted admin workflows for managing multi-category product lines.",
    },
    solution: {
      ar: "تطوير متجر ويب عصري باستخدام Next.js و Prisma مع قاعدة بيانات PostgreSQL، سلة تسوق فورية، تسجيل مستخدمين آمن، ولوحة تحكم للإدارة والتحليلات.",
      en: "Engineered an edge-rendered Next.js application with Prisma ORM and PostgreSQL, reactive cart drawers, and an executive management dashboard.",
    },
    myRole: {
      ar: "مطور Full Stack Web (بناء واجهات المتجر، ربط البنية الخلفية، وتطوير لوحة إدارة المخزون).",
      en: "Full Stack Web Developer (Frontend UX, Prisma database layer, product administration dashboard).",
    },
    technologies: ["Next.js", "React", "Prisma ORM", "PostgreSQL", "Tailwind CSS", "User Auth"],
    liveUrl: "https://shopkartsite.vercel.app/",
    githubUrl: "https://github.com/HassanY1010",
    highlights: {
      ar: [
        "تصفح فوري للمنتجات والتصنيفات وفلاتر الأسعار",
        "سلة تسوق تفاعلية سريعة وتحديث لحظي للكميات",
        "نظام تسجيل مستخدمين ومصادقة آمنة للجلسات",
        "لوحة تحكم إدارية متقدمة لمتابعة الطلبات والمبيعات",
      ],
      en: [
        "Instant catalog search, categorization, and faceted price filtering",
        "Optimistic shopping cart state with zero reload overhead",
        "Encrypted customer authentication and session tracking",
        "Backoffice admin portal with inventory and order telemetry",
      ],
    },
  },

  // 4. Next Store
  {
    id: "next-store-stripe",
    title: {
      ar: "Next Store — متجر إلكتروني احترافي ببوابة دفع Stripe",
      en: "Next Store — High-Performance E-Commerce with Stripe",
    },
    category: "web",
    featured: false,
    summary: {
      ar: "متجر رقمي متطور يعرض المنتجات بتفاصيل عالية مع نظام مصادقة مستخدمين متين وبوابة دفع دولية متكاملة عبر Stripe.",
      en: "Production e-commerce storefront with server-side rendering, detailed product showcases, customer authentication, and hardened Stripe checkout.",
    },
    problem: {
      ar: "الحاجة لمنصة بيع رقمية آمنة توفر بوابات دفع دولية موثوقة مع سرعة تصفح تفوق المتاجر التقليدية وتضمن أمان بيانات البطاقات.",
      en: "Merchants required an ultra-fast modern storefront with PCI-compliant payment gateways, dynamic catalog controls, and rapid checkout.",
    },
    solution: {
      ar: "توظيف Next.js مع قاعدة بيانات PostgreSQL وتكامل مباشر ومؤمن مع واجهات Stripe للمعاملات المالية، مع لوحة إدارة منتجات سهلة.",
      en: "Deployed a Next.js + PostgreSQL architecture integrating webhook-verified Stripe API payment sessions, custom cart logic, and admin product curation.",
    },
    myRole: {
      ar: "مطور الواجهات الأمامية والأنظمة الخلفية (تكامل Stripe، إدارة الحالة، والمصادقة).",
      en: "Full Stack Engineer (Stripe API integration, state management, and auth flows).",
    },
    technologies: ["Next.js", "React", "PostgreSQL", "Stripe API", "Tailwind CSS", "REST APIs"],
    liveUrl: "https://store-next-beta.vercel.app",
    githubUrl: "https://github.com/HassanY1010",
    highlights: {
      ar: [
        "تكامل مباشر وآمن مع بوابة Stripe العالمية للدفع الإلكتروني",
        "عرض تفاعلي شامل للمنتجات والمواصفات والصور",
        "سلة مشتريات سلسة وحساب فوري لتكاليف الطلب",
        "لوحة إدارة متكاملة لإضافة وتعديل المنتجات",
      ],
      en: [
        "PCI-compliant Stripe checkout integration with automated webhook triggers",
        "Rich product showcases with dynamic image galleries and attributes",
        "Frictionless cart checkout designed for maximum conversion",
        "Full product CRUD administration portal",
      ],
    },
  },

  // 5. Spendly
  {
    id: "spendly-finance",
    title: {
      ar: "Spendly — منصة إدارة المصروفات والميزانية الشخصية",
      en: "Spendly — Personal Finance & Budget Intelligence",
    },
    category: "saas",
    featured: false,
    summary: {
      ar: "تطبيق سحابي لإدارة المصروفات المالية وتتبع الميزانيات الشهرية مع رسوم بيانية وتحليلات دقيقة وإمكانية استيراد وتصدير ملفات Excel/CSV.",
      en: "Personal finance and expenditure tracker featuring smart monthly budgeting, interactive trend charts, CSV/Excel import/export, and privacy encryption.",
    },
    problem: {
      ar: "صعوبة تتبع المصاريف اليومية وتجاوز الميزانيات الشهرية وعدم وجود وسيلة مرنة لاستيراد السجلات المالية البنكية وتحليل أوجه الصرف.",
      en: "Users struggled to keep tabs on daily cash outflow, manually balance monthly budgets, or import bank transactions without privacy concerns.",
    },
    solution: {
      ar: "تطوير منصة مرنة مبنية بـ React و Supabase مع قاعدة بيانات PostgreSQL تقدم رسوماً بيانية تفاعلية، معالجة فورية للملفات، وحماية كاملة لخصوصية المستخدمين.",
      en: "Created a privacy-first web application on React and Supabase (PostgreSQL) that parses CSV/Excel statements, tracks budget categories, and renders financial charts.",
    },
    myRole: {
      ar: "مطور ومصمم النظام (بناء الواجهات التفاعلية، تكامل Supabase، وهندسة استيراد البيانات).",
      en: "Full Stack Developer (Interactive UI charts, Supabase backend integration, data parsing pipeline).",
    },
    technologies: ["React", "Supabase", "PostgreSQL", "Tailwind CSS", "Data Visualization", "CSV/Excel Parser"],
    liveUrl: "https://pocket-wise-tracker-88.lovable.app",
    githubUrl: "https://github.com/HassanY1010",
    highlights: {
      ar: [
        "تسجيل وتصنيف ذكي وفوري للمصروفات اليومية",
        "تحديد ومتابعة الميزانيات الشهرية مع تنبيهات عند التجاوز",
        "رسوم بيانية وتحليلات مالية تفاعلية واضحة",
        "استيراد وتصدير ملفات CSV و Excel مع تشفير وحماية الخصوصية",
      ],
      en: [
        "Instant transaction logging with intelligent category tagging",
        "Monthly budget ceilings with adaptive threshold alerts",
        "Interactive expenditure trend graphs and breakdown analytics",
        "Two-way CSV and Excel data portability with client-side privacy protection",
      ],
    },
  },

  // 6. Sankalp Education Foundation
  {
    id: "sankalp-education",
    title: {
      ar: "Sankalp Education — تطبيق المنظومة التعليمية التفاعلية",
      en: "Sankalp Education — Interactive Learning Mobile Platform",
    },
    category: "mobile",
    featured: true,
    summary: {
      ar: "تطبيق هاتف ذكي تعليمي متقدم يقدم دروس فيديو عالية الجودة، اختبارات تفاعلية، متابعة دقيقة لمستوى وتقدم الطالب، وتحديات دراسية تحفيزية.",
      en: "Comprehensive mobile learning app delivering high-definition video courses, interactive quizzes, student progress analytics, and motivational challenges.",
    },
    problem: {
      ar: "ضعف تفاعل الطلاب مع أساليب التعلم عن بُعد التقليدية وصعوبة تتبع المعلمين والطلاب لمستوى التقدم الأكاديمي ونتائج الاختبارات أولاً بأول.",
      en: "Students suffered from disengagement in remote learning platforms that lacked gamification, interactive assessment tools, and transparent progress tracking.",
    },
    solution: {
      ar: "هندسة تطبيق محمول يتميز بتجربة استخدام ممتعة تضم نظام تشغيل فيديو مخصص، بنك أسئلة واختبارات تفاعلية فورية التصحيح، ولوحة متابعة تقدم الطالب.",
      en: "Engineered an engaging cross-platform mobile application with secure video streaming, automated interactive quizzes, adaptive learning modules, and progress dashboards.",
    },
    myRole: {
      ar: "مطور تطبيقات الهواتف وتجربة المستخدم (تطوير واجهات التطبيق، تتبع التقدم، وتكامل خدمات الفيديو).",
      en: "Mobile App Developer (Mobile UI architecture, video delivery pipeline, progress analytics).",
    },
    technologies: ["Flutter", "Android", "Mobile UX", "Video Streaming", "Interactive Quizzes", "Student Analytics"],
    liveUrl: "https://play.google.com/store/apps/details?id=co.robin.lxruy&pcampaignid=web_share",
    githubUrl: "https://github.com/HassanY1010",
    highlights: {
      ar: [
        "مشاهدة دروس الفيديو بجودة عالية وسلاسة على الهواتف",
        "اختبارات تفاعلية تقيس الفهم وتصحح النتائج فورياً",
        "نظام ذكي لمتابعة تقدم الطالب ورصد التحصيل الدراسي",
        "تحديات تحفيزية تعزز استمرارية التعلم والإنجاز",
      ],
      en: [
        "Adaptive-bitrate video course player built for low-latency mobile streaming",
        "Interactive real-time quiz assessment and instant score evaluations",
        "Granular student progress tracking and learning milestone charts",
        "Gamified study challenges driving daily user retention",
      ],
    },
  },

  // 7. Edventure+
  {
    id: "edventure-plus",
    title: {
      ar: "Edventure+ — منصة وتطبيق تعليمي ذكي بالذكاء الاصطناعي",
      en: "Edventure+ — AI-Powered Adaptive Learning & Grading",
    },
    category: "ai",
    featured: true,
    summary: {
      ar: "منصة وتطبيق تعليمي يوظف الذكاء الاصطناعي لتصحيح إجابات الطلاب آلياً وتقديم تدريبات مخصصة تتكيف تلقائياً مع مستوى وقدرات كل طالب.",
      en: "Intelligent edtech mobile platform using AI algorithms to automate answer grading and generate personalized adaptive exercises tailored to individual student mastery.",
    },
    problem: {
      ar: "استغراق المعلمين وقتاً طويلاً في التصحيح اليدوي، وعدم مراعاة الفروق الفردية للطلاب في سرعة الفهم وتحديد نقاط القوة والضعف.",
      en: "Educators struggled with slow manual grading, while learners lacked individualized instruction and real-time conceptual feedback.",
    },
    solution: {
      ar: "دمج نماذج الذكاء الاصطناعي لتحليل إجابات الطلاب وتقديم تغذية راجعة فورية، مع خوارزمية ذكية تعيد توجيه التدريبات بناءً على نقاط الضعف والقوة.",
      en: "Integrated LLM and natural language models to evaluate student answers, formulate constructive feedback, and calibrate exercise difficulty on the fly.",
    },
    myRole: {
      ar: "مهندس حلول الذكاء الاصطناعي وتطوير التطبيق (تطوير وتكامل نماذج التقييم الذكية، وبناء تجربة الاستخدام).",
      en: "AI Solutions & Mobile App Engineer (Prompt engineering, evaluation models integration, and reactive UI).",
    },
    technologies: ["AI Models", "LLM APIs", "Adaptive Learning", "Mobile App", "Automated Grading", "Python Backend"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.edventure.plus&pcampaignid=web_share",
    githubUrl: "https://github.com/HassanY1010",
    highlights: {
      ar: [
        "تصحيح آلي فوري للإجابات المكتوبة بالذكاء الاصطناعي",
        "مسارات تدريب متكيفة تتغير تلقائياً حسب مستوى الطالب",
        "تحليل دقيق لنقاط القوة والضعف في كل مادة دراسية",
        "تغذية راجعة تعليمية تشرح الأخطاء خطوة بخطوة",
      ],
      en: [
        "Automated AI grading engine providing contextual corrections",
        "Adaptive exercise generator matching individual student aptitude",
        "Granular strengths and weaknesses diagnostic reporting",
        "Step-by-step explanatory feedback empowering self-paced mastery",
      ],
    },
  },

  // 8. YKB – Yemen Transport
  {
    id: "ykb-yemen-transport",
    title: {
      ar: "YKB Yemen Transport — تطبيق تذاكر النقل والمواصلات العامة باليمن",
      en: "YKB Yemen Transport — Public Transit & E-Ticketing",
    },
    category: "mobile",
    featured: true,
    summary: {
      ar: "تطبيق رقمي للمواصلات العامة في اليمن يتيح للمسافرين والركاب شراء تذاكر الرحلات إلكترونياً واستخدامها مباشرة عبر الهاتف عند ركوب المركبة.",
      en: "Public transit ticketing application in Yemen empowering passengers to purchase digital bus tickets and validate them seamlessly upon boarding.",
    },
    problem: {
      ar: "الازدحام الشديد على مكاتب التذاكر التقليدية وصعوبة الحجز المسبق وضياع التذاكر الورقية في خطوط المواصلات العامة باليمن.",
      en: "Commuters faced long queues at booking stations, paper ticket loss, and no reliable mobile payment methods for public intercity routes in Yemen.",
    },
    solution: {
      ar: "بناء تطبيق هواتف متين وسهل الاستخدام يوفر محفظة تذاكر إلكترونية برمز QR مع إمكانية التحقق السريع، ودعم شبكات الاتصال والبيئة المحلية.",
      en: "Developed an intuitive Android transit app with QR-based digital ticketing, local payment methods, offline ticket caching, and quick boarding scans.",
    },
    myRole: {
      ar: "مطور تطبيقات الموبايل وتجربة المستخدم (هندسة التذاكر الإلكترونية، مسح QR، وتحسين الأداء للشبكات الضعيفة).",
      en: "Mobile App Developer (E-ticketing module, QR validation engine, network-resilient offline mode).",
    },
    technologies: ["Flutter", "Android", "QR Code Validation", "Mobile Payments", "Offline Sync", "Transit Tech"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.bpcbt.billet.clientv2.yemen&pcampaignid=web_share",
    githubUrl: "https://github.com/HassanY1010",
    highlights: {
      ar: [
        "شراء تذاكر المواصلات العامة إلكترونياً بخطوات بسيطة",
        "التحقق السريع من التذكرة برمز QR عند ركوب المركبة",
        "محفظة رقمية تحفظ جميع التذاكر الحالية والسابقة",
        "مصمم خصيصاً للعمل بكفاءة في ظل ظروف الاتصال المحلية",
      ],
      en: [
        "Instant electronic ticket purchase with localized payment options",
        "Rapid QR code scanning for effortless boarding verification",
        "Digital ticket wallet retaining booking history and receipts",
        "Engineered for high performance under low-bandwidth networks",
      ],
    },
  },

  // 9. سافر | Safer
  {
    id: "safer-rideshare",
    title: {
      ar: "سافر (Safer) — تطبيق مشاركة الرحلات والتنقل بين المحافظات",
      en: "Safer — Intercity Ridesharing & Travel Marketplace",
    },
    category: "mobile",
    featured: true,
    summary: {
      ar: "تطبيق يمني لمشاركة الرحلات بين المحافظات؛ يستطيع السائق نشر رحلته والمقاعد المتاحة، ويستطيع المسافر البحث والحجز والتواصل المباشر مع السائق.",
      en: "Yemeni intercity carpooling application where drivers list planned trips and available seats, allowing travelers to search, book, and chat directly.",
    },
    problem: {
      ar: "ارتفاع تكاليف السفر بين المحافظات اليمنية وصعوبة التنسيق بين المسافرين والسائقين المتجهين لنفس الوجهة بصورة موثوقة وآمنة.",
      en: "High intercity travel costs and lack of a structured, reliable platform to connect private drivers with empty car seats to matching passengers.",
    },
    solution: {
      ar: "تطوير منصة مشاركة رحلات آمنة تتيح جدولة الرحلات وتحديد نقاط الانطلاق والوصول، والتحقق من الحسابات، ونظام تواصل وحجز مقاعد لحظي.",
      en: "Engineered an intercity ridesharing app with real-time seat reservation, departure/arrival geocoding, verified driver profiles, and in-app communication.",
    },
    myRole: {
      ar: "مطور تطبيقات الموبايل وهندسة النظام (بناء واجهات الحجز والبحث الجغرافي، وإدارة تدفق الرحلات).",
      en: "Mobile App Engineer & UI Designer (Ride booking workflows, geolocation search, driver-passenger messaging).",
    },
    technologies: ["Flutter", "Android", "Geolocation", "Intercity Ridesharing", "In-App Chat", "Booking Engine"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.ahmed.safer&pcampaignid=web_share",
    githubUrl: "https://github.com/HassanY1010",
    highlights: {
      ar: [
        "نشر السائقين لرحلاتهم وتحديد المقاعد وسعر الركوب",
        "بحث وفلترة ذكية للمسافرين حسب المحافظة والوقت",
        "تواصل مباشر وسلس بين المسافر والسائق لتأكيد الحجز",
        "تخفيض تكاليف السفر وتوفير وسيلة نقل آمنة وسريعة",
      ],
      en: [
        "Drivers publish itineraries with seat counts and trip fares",
        "Smart intercity route filtering and departure schedule discovery",
        "Direct real-time driver-passenger communication for trip coordination",
        "Substantial cost savings and optimized travel accessibility across Yemen",
      ],
    },
  },

  // 10. We Plus Travel
  {
    id: "we-plus-travel",
    title: {
      ar: "We Plus Travel — تطبيق حجز سيارات الأجرة والتتبع المباشر",
      en: "We Plus Travel — On-Demand Taxi Booking & Live Tracking",
    },
    category: "mobile",
    featured: false,
    summary: {
      ar: "تطبيق ذكي لحجز سيارات الأجرة، يشتمل على مطابقة آلية للسائقين، تتبع مباشر للرحلة على الخريطة، وخيارات دفع مختلفة ومرنة.",
      en: "On-demand taxi hailing platform featuring intelligent driver dispatch, live GPS trip tracking on maps, and flexible payment gateway integrations.",
    },
    problem: {
      ar: "التأخر في العثور على سيارات أجرة آمنة وموثوقة، وغياب التتبع الشفاف لمسار الرحلة وتكاليفها المقدرة مسبقاً.",
      en: "Long wait times for street taxis, absence of transparent fare estimations, and lack of real-time passenger safety tracking.",
    },
    solution: {
      ar: "هندسة تطبيق رحلات فائق الاستجابة يعتمد على خدمات الموقع GPS، يربط الركاب بأقرب سائق متاح، ويحسب الأجرة تلقائياً مع تتبع لحظي لمسار الرحلة.",
      en: "Built a reactive mobile hailing application with real-time GPS coordinate broadcasting, automated driver matching, and upfront fare calculations.",
    },
    myRole: {
      ar: "مطور تطبيقات الهواتف والـ API (تكامل الخرائط والتتبع اللحظي، خوارزمية مطابقة السائقين، والدفع).",
      en: "Mobile & API Integration Engineer (GPS tracking engine, driver dispatch algorithms, checkout flow).",
    },
    technologies: ["Flutter", "Android", "GPS Tracking", "Maps APIs", "Driver Matching", "Payment Gateways"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.weplus.travel&pcampaignid=web_share",
    githubUrl: "https://github.com/HassanY1010",
    highlights: {
      ar: [
        "مطابقة ذكية وسريعة مع أقرب سائق سيارة أجرة متاح",
        "تتبع حي ولحظي لمسار الرحلة والسيارة عبر الخرائط",
        "حساب تقديري دقيق للأجرة والوقت المتوقع للوصول",
        "خيارات دفع متنوعة تناسب مختلف الركاب",
      ],
      en: [
        "Automated proximity-based dispatch matching nearest active drivers",
        "Live turn-by-turn map trajectory visualization for passenger safety",
        "Transparent upfront fare estimates based on distance and traffic",
        "Multi-channel payment options including digital wallets and cash",
      ],
    },
  },

  // 11. Andaplay
  {
    id: "andaplay-sports",
    title: {
      ar: "Andaplay — المنصة الرياضية لحجز الملاعب ومطابقة اللاعبين",
      en: "Andaplay — Sports Venue Booking & Player Community",
    },
    category: "mobile",
    featured: false,
    summary: {
      ar: "منصة وتطبيق رياضي يربط اللاعبين والأندية، مع حجز الملاعب، إنشاء المباريات والانضمام إليها، متابعة الإحصائيات، ومطابقة اللاعبين حسب مستواهم.",
      en: "Sports networking and venue booking app connecting players and clubs, enabling pitch reservations, match creation, stat tracking, and skill matching.",
    },
    problem: {
      ar: "صعوبة العثور على ملاعب شاغرة وحجزها في أوقات الذروة، ونقص اللاعبين لتكملة الفرق الرياضية وغياب سجلات الأداء والإحصائيات.",
      en: "Sports enthusiasts struggled to find available turf pitches, organize competitive amateur matches, and find players matching their skill bracket.",
    },
    solution: {
      ar: "بناء مجتمع رياضي رقمي يجمع بين جدول حجز الملاعب الفوري، ونظام ذكي يطابق اللاعبين وفق مستوى المهارة، مع توثيق إحصائيات المباريات.",
      en: "Delivered a full-featured sports mobile platform combining real-time turf booking, automated player matchmaking, and detailed personal performance analytics.",
    },
    myRole: {
      ar: "مطور تطبيقات الموبايل وتجربة المستخدم (بناء محرك الحجوزات، نظام الملف الرياضي والإحصائيات).",
      en: "Mobile App & UX Developer (Pitch booking workflows, matchmaking logic, and athletic profile analytics).",
    },
    technologies: ["Flutter", "Android", "Sports Tech", "Booking Engine", "Player Matchmaking", "Stats Tracking"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.andaplay&pcampaignid=web_share",
    githubUrl: "https://github.com/HassanY1010",
    highlights: {
      ar: [
        "حجز ملاعب كرة القدم والرياضات المختلفة بسهولة وفورية",
        "إنشاء مباريات عامة وخاصة ودعوة الأصدقاء أو لاعبين جدد",
        "خوارزمية ذكية لمطابقة اللاعبين حسب المستوى الرياضي",
        "سجل رياضي شامل للإحصائيات والأهداف ونتائج المباريات",
      ],
      en: [
        "Instant court and pitch reservations with real-time club availability",
        "Match host creation with public/private invites for open player slots",
        "Skill-calibrated matchmaking algorithms for balanced games",
        "Comprehensive athletic profile tracking scores, goals, and MVP ratings",
      ],
    },
  },

  // 12. Ziarah.ai
  {
    id: "ziarah-ai",
    title: {
      ar: "Ziarah.ai — مساعد السفر والجدولة السياحية الذكية بالـ AI",
      en: "Ziarah.ai — AI Travel Assistant & Smart Itinerary Planner",
    },
    category: "ai",
    featured: true,
    summary: {
      ar: "مساعد سفر يعتمد على الذكاء الاصطناعي، يساعد في اكتشاف الوجهات والأنشطة السياحية وإنشاء جدول سياحي مخصص بالكامل وتنظيم خطط الرحلة.",
      en: "AI-powered travel companion that discovers top destinations, curates personalized tourist itineraries, and streamlines trip logistics.",
    },
    problem: {
      ar: "قضاء المسافرين ساعات طويلة ومشتتة في البحث عن المعالم السياحية والتنسيق المعقد لمواعيد الزيارات والمطاعم والميزانيات.",
      en: "Travelers spent countless hours sifting through unverified travel blogs and struggled to build optimized daily schedules matching their budget.",
    },
    solution: {
      ar: "تطوير تطبيق ذكاء اصطناعي يقوم بتحليل تفضيلات المسافر لإنشاء برنامج سياحي يومي متكامل ودقيق بنقرة واحدة، مع توصيات جغرافية ذكية.",
      en: "Integrated generative AI models and location databases to synthesize custom day-by-day travel schedules tailored to travel style, party size, and budget.",
    },
    myRole: {
      ar: "مهندس حلول الذكاء الاصطناعي ومطور التطبيق (هندسة أوامر الذكاء الاصطناعي، محرك الجدولة، والواجهات).",
      en: "AI Solutions & Mobile Engineer (Prompt engineering, itinerary generation engine, interactive travel UI).",
    },
    technologies: ["Generative AI", "LLM APIs", "Smart Itinerary Engine", "Mobile App", "Travel Tech", "Location Services"],
    liveUrl: "https://play.google.com/store/apps/details?id=ai.ziarah.app&pcampaignid=web_share",
    githubUrl: "https://github.com/HassanY1010",
    highlights: {
      ar: [
        "توليد جداول سياحية يومية مخصصة وفورية بالذكاء الاصطناعي",
        "استكشاف أفضل الوجهات والأنشطة والمعالم بناءً على اهتماماتك",
        "تنظيم كامل لخط سير الرحلة والميزانية والمحطات اليومية",
        "توصيات ذكية للمطاعم والأماكن الترفيهية القريبة من جدولك",
      ],
      en: [
        "Instant generation of cohesive multi-day travel itineraries via AI",
        "Curated destination and attraction discovery tailored to user tastes",
        "Intelligent route optimization minimizing transit time between sights",
        "Smart dining and cultural activity recommendations based on location",
      ],
    },
  },

  // 13. Travara
  {
    id: "travara-travel",
    title: {
      ar: "Travara — منصة إدارة السفر وحجوزات الطيران والفنادق",
      en: "Travara — Centralized Travel, Flight & Hotel Booking Engine",
    },
    category: "web",
    featured: true,
    summary: {
      ar: "منصة متطورة لإدارة السفر والحجوزات، تجمع تذاكر الطيران، الإقامة الفندقية، خطط الرحلات، والعروض السياحية في نظام مركزي متقدم.",
      en: "Centralized travel management and reservation engine unifying airline ticketing, hotel accommodation, customized itineraries, and travel deals.",
    },
    problem: {
      ar: "تشتت حجوزات المسافرين بين شركات الطيران والفنادق ومواقع العروض، وبطء محركات البحث عن التذاكر عند ارتفاع عدد المستخدمين.",
      en: "Travelers experienced fragmented booking across separate airlines and hotel sites, while legacy portals suffered severe latency during peak search traffic.",
    },
    solution: {
      ar: "هندسة منصة متقدمة تجمع واجهة Next.js سريعة مع بنية خلفية بـ Laravel و Redis للتخزين المؤقت، وقاعدة بيانات PostgreSQL ببيئة Docker المعزولة.",
      en: "Architected a high-throughput platform combining Next.js frontend with Laravel API services, Redis caching for instant query results, and Docker containers.",
    },
    myRole: {
      ar: "مطور Full Stack (تطوير الواجهات، ربط محركات الحجوزات، وتحسين التخزين المؤقت مع Redis).",
      en: "Full Stack Engineer (Next.js client development, Laravel booking APIs, Redis cache layer optimization).",
    },
    technologies: ["Next.js", "Laravel", "PostgreSQL", "Redis", "Docker", "REST APIs", "Travel GDS"],
    liveUrl: "https://portfolio.thecodeman.cloud/",
    githubUrl: "https://github.com/HassanY1010",
    highlights: {
      ar: [
        "نظام بحث ومقارنة شامل لتذاكر الطيران وأسعار الفنادق",
        "تخزين مؤقت فائق السرعة لنتائج الحجوزات بواسطة Redis",
        "بنية سحابية معزولة وقابلة للتوسع باستخدام Docker",
        "تنسيق متكامل لخطط الرحلات والفواتير والعروض الترويجية",
      ],
      en: [
        "Comprehensive search aggregation across flight carriers and hotel inventories",
        "Lightning-speed search results backed by high-throughput Redis caching",
        "Containerized, cloud-deployable architecture leveraging Docker",
        "Unified trip itinerary management and automated booking vouchers",
      ],
    },
  },

  // 14. Helpora
  {
    id: "helpora-marketplace",
    title: {
      ar: "Helpora — سوق ومنصة حجز الخدمات المنزلية والمهنية المعتمدة",
      en: "Helpora — Full-Stack Multi-Category Service Marketplace",
    },
    category: "web",
    featured: true,
    summary: {
      ar: "منصة Marketplace متكاملة تربط العملاء بمزودي الخدمات المعتمدين (تنظيف، صيانة، تجميل، لياقة، تدريس) مع لوحة تحكم ودفع إلكتروني عبر Stripe.",
      en: "Full-stack service marketplace connecting users with verified providers across cleaning, beauty, repairs, tutoring, and fitness, with Stripe payments.",
    },
    problem: {
      ar: "صعوبة وصول العملاء إلى فنيين ومحترفين موثوقين ومؤهلين، وغياب نظام رقمي ينظم جدول أعمال مزودي الخدمات ومدفوعاتهم بشكل رسمي.",
      en: "Customers lacked a reliable way to vet and book local home and wellness services, while service professionals struggled to manage clients and invoicing.",
    },
    solution: {
      ar: "بناء منصة خدمية تدعم العملاء ومزودي الخدمة؛ واجهة حجز وإلغاء سلسة للعميل، ولوحة تحكم متقدمة للمزود لإدارة خدماته ومواعيده ودفع آمن بـ Stripe.",
      en: "Delivered a dual-sided marketplace with user-friendly booking workflows for customers, and a dedicated business-growth dashboard for service providers.",
    },
    myRole: {
      ar: "مطور Full Stack رئيسي (بناء واجهات المستخدم التفاعلية، لوحات التحكم، ونظام إدارة الحجوزات والمصادقة).",
      en: "Full Stack Developer (Responsive marketplace UI, role-based dashboards, Stripe checkout flows).",
    },
    technologies: ["Next.js", "React.js", "Tailwind CSS", "MongoDB", "Node.js", "Stripe", "Marketplace Engine"],
    liveUrl: "https://www.helpora.cz/en",
    githubUrl: "https://github.com/HassanY1010",
    highlights: {
      ar: [
        "سوق خدمات متعدد الفئات يربط العملاء بالمهنيين المعتمدين",
        "لوحة تحكم مخصصة لمزودي الخدمة لإدارة المواعيد والعملاء",
        "حجز فوري ومرن مع خيارات دفع آمنة عبر بوابة Stripe",
        "نظام تقييمات ومراجعات لضمان جودة وموثوقية الخدمات",
      ],
      en: [
        "Multi-category service catalog with verified professional credentials",
        "Dedicated provider portal for managing client bookings and business analytics",
        "Seamless customer reservation workflows with secure Stripe payments",
        "Transparent review and rating system ensuring high service standards",
      ],
    },
  },

  // 15. Qolaro
  {
    id: "qolaro-saas",
    title: {
      ar: "Qolaro — الموقع الرسمي لمنظومة إدارة عمليات الأعمال LERE (SaaS)",
      en: "Qolaro — Enterprise Operations Platform Website (SaaS)",
    },
    category: "saas",
    secondaryCategory: "uiux",
    featured: false,
    summary: {
      ar: "موقع شركة SaaS عصرية تم بناؤه للترويج لمنتجها الرائد LERE؛ يشتمل على صفحات تفاعلية للمنتج والأسعار والتكاملات، ونظام CMS لإدارة المحتوى بالكامل بدون كود.",
      en: "Modern SaaS product showcase website engineered to promote LERE operations platform, featuring dynamic pricing, integrations, and fully headless CMS control.",
    },
    problem: {
      ar: "حاجة شركات الـ SaaS لواجهات تسويقية سريعة وعالية التحويل مع تمكين فريق التسويق من تعديل المحتوى والمدونة والصفحات دون تدخل المبرمجين.",
      en: "Growing SaaS companies needed an ultra-fast conversion-driven website where non-technical marketing teams could dynamically update features and pricing.",
    },
    solution: {
      ar: "تطوير واجهة أمامية متقدمة بـ Next.js و Tailwind CSS مدعومة بنظام Headless CMS يمنح الفريق مرونة كاملة في تعديل الصفحات والميزات مع سرعة تحميل خيالية.",
      en: "Engineered a headless CMS-powered frontend on Next.js and Tailwind CSS with dynamic components, SEO-optimized landing pages, and interactive pricing tables.",
    },
    myRole: {
      ar: "مطور الواجهات الأمامية وهندسة المحتوى (تطوير المكونات القابلة لإعادة الاستخدام، تحسين التحويل والأداء، وربط الـ CMS).",
      en: "Frontend & Content Architecture Engineer (Reusable modular UI, conversion rate optimization, CMS integration).",
    },
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Headless CMS", "Conversion Optimization", "Interactive UI"],
    liveUrl: "https://www.qolaro.com/",
    githubUrl: "https://github.com/HassanY1010",
    highlights: {
      ar: [
        "إدارة محتوى ديناميكية 100% لكافة الصفحات والمدونة بدون كود",
        "صفحات تفاعلية لعرض مميزات منتج LERE وباقات الأسعار",
        "سرعة تحميل قياسية متوافقة تماماً مع معايير Core Web Vitals",
        "تصميم تجربة مستخدم UI/UX فاخر يعزز معدلات التحويل والمبيعات",
      ],
      en: [
        "100% dynamically CMS-driven pages, blogs, and feature showcases",
        "Interactive pricing matrix and enterprise software integration lists",
        "Flawless Core Web Vitals speed scores and responsive layout engineering",
        "Modern high-converting aesthetic built for enterprise tech credibility",
      ],
    },
  },

  // 16. Logopedie Dreumel
  {
    id: "logopedie-dreumel",
    title: {
      ar: "Logopedie Dreumel — المنصة الرقمية لعيادة علاج وتأهيل النطق",
      en: "Logopedie Dreumel — Healthcare & Speech Therapy Platform",
    },
    category: "web",
    secondaryCategory: "uiux",
    featured: false,
    summary: {
      ar: "موقع طبي متكامل تم تطويره لعيادة علاج وتأهيل النطق في هولندا، يتيح لإدارة العيادة تعديل كافة الأقسام والخدمات والشهادات والمقالات بسهولة عبر Sanity CMS.",
      en: "Modern healthcare practice website for a premier speech therapy clinic in the Netherlands, built with Next.js, Tailwind CSS, and Sanity CMS.",
    },
    problem: {
      ar: "افتقار العيادة لحضور رقمي احترافي يسهل على المرضى معرفة العلاجات المتاحة والشهادات المعتمدة، مع صعوبة التحديث المستمر للأخبار والخدمات طبياً.",
      en: "The clinical practice required an accessible, calming digital presence with effortless CMS management to update therapy offerings and certifications.",
    },
    solution: {
      ar: "بناء موقع ويب طبي سريع، متوافق مع معايير الوصول العالمية والـ SEO الطبي، مدعوم بنظام Sanity CMS لإدارة ونشر المحتوى الطبي والمراجعات والمعلومات الطبية بمرونة.",
      en: "Built a WCAG-accessible, SEO-optimized healthcare portal powered by Sanity CMS, providing administrators with visual content controls and zero-code publishing.",
    },
    myRole: {
      ar: "مطور الموقع والـ CMS (بناء الواجهات المتجاوبة، ربط Sanity CMS، وتحسين محركات البحث وسرعة التصفح).",
      en: "Full Stack Web & CMS Engineer (Responsive architecture, Sanity CMS schema design, technical accessibility audit).",
    },
    technologies: ["Next.js", "React.js", "Sanity CMS", "Tailwind CSS", "Healthcare SEO", "Accessibility WCAG"],
    liveUrl: "https://www.logopediedreumel.nl/",
    githubUrl: "https://github.com/HassanY1010",
    highlights: {
      ar: [
        "نظام إدارة محتوى Sanity CMS مرن للتحكم بالجلسات والمقالات",
        "توافق صارم مع معايير إمكانية الوصول وسهولة القراءة للمرضى",
        "تحسين SEO متقدم لتصدر نتائج البحث في المجال الطبي المحلي",
        "تصميم نظيف وهادئ ومريح للمستخدمين من كافة الفئات العمرية",
      ],
      en: [
        "Flexible Sanity Studio CMS backend for effortless page and article editing",
        "Strict WCAG accessibility compliance ensuring inclusive readability",
        "Localized technical healthcare SEO boosting regional patient discovery",
        "Calm, trustworthy, patient-centric visual design system",
      ],
    },
  },

  // 17. UI/UX: EduNova
  {
    id: "uiux-edunova",
    title: {
      ar: "EduNova (إيدونوفا) — تصميم واجهة وتجربة منصة تعليمية ذكية بالذكاء الاصطناعي",
      en: "EduNova — AI EdTech & Learning Management Platform UI/UX",
    },
    category: "uiux",
    secondaryCategory: "ai",
    featured: true,
    imageUrl: "/images/uiux-edunova.jpg",
    summary: {
      ar: "نظام وتجربة مستخدم متكاملة لمنصة تعليم ذكية تجمع بين مدرب الذكاء الاصطناعي التفاعلي، مسارات التعلم المخصصة، لوحة متابعة تقدم الطلاب، وتصميم زجاجي (Glassmorphism) يدعم اللغتين العربية والإنجليزية.",
      en: "Comprehensive UI/UX design for an AI-powered EdTech dashboard featuring conversational AI coaches, personalized learning paths, interactive progress analytics, and dual RTL/LTR support.",
    },
    problem: {
      ar: "تشتت الطلاب في المنصات التعليمية التقليدية نتيجة لغياب التخصيص الفردي للمسار الدراسي، وصعوبة متابعة المؤشرات الأكاديمية في واجهات مستخدم معقدة.",
      en: "Students struggled with rigid, unengaging LMS interfaces that lacked personalized AI mentoring and intuitive progress telemetry.",
    },
    solution: {
      ar: "ابتكار نظام تصميم متطور (Atomic Design System) بأسلوب Dark Mode فاخر مع تدرجات النيون والزجاج المصقول، يبرز مسار التعلم المدعوم بالذكاء الاصطناعي، ومؤشرات الأداء الأسبوعية مع دعم كامل للغتين.",
      en: "Created a refined dark-mode glassmorphic design system spotlighting an AI learning coach, dynamic milestone progression curves, and bi-directional bilingual ergonomics.",
    },
    myRole: {
      ar: "مصمم تجربة وواجهة المستخدم الرئيسي (User Research, Information Architecture, Wireframing, High-Fidelity UI Design System).",
      en: "Lead UI/UX & Product Designer (Design Tokens, Information Architecture, Prototyping).",
    },
    technologies: ["Figma", "Design Systems", "UI/UX Architecture", "Dark Mode Glassmorphism", "AI EdTech", "RTL/LTR Bi-directional"],
    highlights: {
      ar: [
        "واجهة تفاعلية لمدرب الذكاء الاصطناعي ومسارات التعلم التكيفية",
        "لوحة مؤشرات بيانية أسبوعية لقياس تقدم الطالب وإحصائياته",
        "بطاقات مقررات تفاعلية مع أوقات الجلسات ومؤشرات الإنجاز",
        "دعم أصيل وثنائي للغتين العربية والإنجليزية (RTL / LTR)",
      ],
      en: [
        "Conversational AI coach panel with prompt-driven learning milestones",
        "Dynamic weekly activity graphs and progress gauges",
        "Interactive course cards with session telemetry and completion status",
        "Seamless bi-directional RTL Arabic and LTR English layout system",
      ],
    },
  },

  // 18. UI/UX: SportConnect
  {
    id: "uiux-sportconnect",
    title: {
      ar: "SportConnect (سبورت كونكت) — تصميم واجهة وتجربة منصة حجز الملاعب والبطولات",
      en: "SportConnect — Sports Venue Booking & Matchmaking Platform UI/UX",
    },
    category: "uiux",
    secondaryCategory: "mobile",
    featured: true,
    imageUrl: "/images/uiux-sportconnect.jpg",
    summary: {
      ar: "تصميم شامل لمنظومة رياضية متكاملة تشمل تطبيق هاتف للاعبين يتيح حجز الملاعب بالخريطة والبحث عن لاعبين ومباريات، مع لوحة تحكم إدارية Hub لإحصائيات الإيرادات وإدارة البطولات وجدول الملاعب.",
      en: "End-to-end design system connecting a player mobile app for map-based pitch booking and matchmaking with an executive web dashboard for club revenue and tournament schedules.",
    },
    problem: {
      ar: "صعوبة التنسيق بين اللاعبين وأصحاب الملاعب الرياضية، وتداخل أوقات الحجوزات، وافتقار أندية الهواة لنظام إدارة رقمي ينظم البطولات والإيرادات.",
      en: "Amateur athletes faced chaotic match coordination and fragmented turf booking, while venue operators lacked an automated dashboard for schedules and tournaments.",
    },
    solution: {
      ar: "تصميم تجربة هاتف ذكية تربط الرادار الجغرافي للملاعب المتاحة مع نظام مطابقة اللاعبين، وتصميم لوحة تحكم إدارية مركزية للجدولة الزمنية والإيرادات وإدارة مباريات البطولات بنظام الأدوار.",
      en: "Designed an intuitive mobile discovery flow with interactive venue maps and player queues, paired with an admin hub featuring visual schedule timelines and bracket management.",
    },
    myRole: {
      ar: "مصمم منتج ورئيس تجربة الاستخدام (Mobile UI, Venue Scheduling UX, Design System, Prototyping).",
      en: "Lead Product & UI/UX Designer (Mobile ergonomics, admin dashboard architecture, interactive prototypes).",
    },
    technologies: ["Figma", "Mobile UI Design", "Web Dashboard Hub", "Design Tokens", "Sports Matchmaking UX", "Interactive Prototyping"],
    highlights: {
      ar: [
        "خريطة تفاعلية لاكتشاف الملاعب وحجز الأوقات المتاحة فورياً",
        "نظام ذكي لمطابقة اللاعبين المتاحين والانضمام للمباريات",
        "لوحة تحكم إدارية للملاعب (Pitch Schedules & Financials)",
        "نظام إدارة البطولات الرياضية (Tournament Brackets Management)",
      ],
      en: [
        "Interactive pitch map with real-time slot availability indicators",
        "Skill-based player matchmaking queue and squad invitation flows",
        "Visual timeline pitch scheduler preventing booking overlap",
        "Comprehensive tournament bracket tree and revenue analytics",
      ],
    },
  },

  // 19. UI/UX: TravelX
  {
    id: "uiux-travelx",
    title: {
      ar: "TravelX (ترافيل إكس) — تصميم منظومة السفر والسياحة والحجوزات المتكاملة",
      en: "TravelX — Integrated Smart Travel, Booking & Itinerary Platform UI/UX",
    },
    category: "uiux",
    secondaryCategory: "web",
    featured: true,
    imageUrl: "/images/uiux-travelx.jpg",
    summary: {
      ar: "تصميم لمنظومة سياحية شاملة تضم تطبيق مسافر بواجهة بحث متقدمة ومساعد سفر بالذكاء الاصطناعي وجدول رحلات تفاعلي، مع لوحة تحكم مركزية لإدارة الحجوزات والأسعار ومقدمي الخدمات والخرائط.",
      en: "Unified multi-platform UI/UX design encompassing a passenger mobile app with AI trip planning and geolocation discovery, and an enterprise admin console for reservations and dynamic pricing.",
    },
    problem: {
      ar: "تعقيد تجربة حجز البرامج السياحية وتشتت حجوزات الفنادق والرحلات، وصعوبة اعتماد وإدارة شركات السياحة من قِبل المشرفين.",
      en: "Travelers suffered from cumbersome multi-step booking flows and generic itineraries, while tourism operators lacked a centralized command center to vet providers.",
    },
    solution: {
      ar: "هندسة واجهة هاتف عصرية ترتكز على مساعد الذكاء الاصطناعي لتخطيط الرحلات بالخرائط، وتصميم لوحة تحكم إدارية حديثة لإدارة الإيرادات، اعتماد مقدمي الخدمات، وتتبع الأفواج السياحية.",
      en: "Architected a seamless mobile travel experience driven by an AI itinerary assistant and interactive neighborhood maps, complemented by an operator dashboard for verification and live tracking.",
    },
    myRole: {
      ar: "مصمم تجربة مستخدم أول (Lead UX/UI Designer — Multi-Platform Mobile & Web Systems).",
      en: "Lead UX/UI Designer (Cross-platform design system, mobile flows, operator console UI).",
    },
    technologies: ["Figma", "Travel UX", "Multi-Platform Design", "Admin Dashboard", "AI Trip Planner UI", "Design Tokens"],
    highlights: {
      ar: [
        "واجهة هاتف عصرية للمسافر مع مساعد ذكاء اصطناعي للجدولة",
        "استعراض الفنادق والمنتجعات مع فلاتر ذكية وخريطة تفاعلية",
        "لوحة تحكم إدارية للمنصة (إجمالي الإيرادات، الحجوزات النشطة)",
        "نظام اعتماد مقدمي الخدمات وإدارة الأسعار الديناميكية",
      ],
      en: [
        "Mobile travel portal with integrated conversational AI trip planner",
        "High-fidelity hotel discovery with faceted filters and proximity maps",
        "Executive analytics console tracking gross booking volumes and KPIs",
        "Supplier verification portal and dynamic hotel pricing management",
      ],
    },
  },

  // 20. UI/UX: Nexora
  {
    id: "uiux-nexora",
    title: {
      ar: "Nexora (نكسورا) — تصميم واجهة وتجربة منصة إدارة الأعمال السحابية الذكية",
      en: "Nexora — Enterprise Business Operations & AI SaaS Platform UI/UX",
    },
    category: "uiux",
    secondaryCategory: "saas",
    featured: true,
    imageUrl: "/images/uiux-nexora.jpg",
    summary: {
      ar: "تصميم نظام عمليات وساس (SaaS) متقدم لإدارة الشركات؛ يجمع بين لوحة تحكم تفاعلية للإيرادات MRR والمصروفات، إدارة المشاريع والمهام (Kanban)، مساعد مالي بالذكاء الاصطناعي، ومراحل الصفقات Deals Pipeline.",
      en: "Premium UI/UX design for a modern enterprise operations SaaS dashboard unifying MRR financials, Kanban task boards, AI business assistants, and deal pipelines.",
    },
    problem: {
      ar: "ازدحام لوحات التحكم الإدارية بالبيانات غير المرتبة، وصعوبة قراءة المؤشرات المالية السريعة وتتبع حالة المشاريع بين فرق العمل.",
      en: "Enterprise managers suffered from data visual clutter, complex financial reporting tools, and siloed project tracking boards.",
    },
    solution: {
      ar: "ابتكار لوحة تحكم فائقة الأناقة بأسلوب Dark Tech مع تنظيم بصري دقيق يضع المقاييس المالية (MRR, Expenses) في المقدمة، ويدمج بطاقات المهام التفاعلية ومساعد الذكاء الاصطناعي في شاشة موحدة.",
      en: "Crafted a clean dark-mode command center placing key revenue telemetry (MRR, cashflow) upfront, coupled with a responsive Kanban task engine and contextual AI report generator.",
    },
    myRole: {
      ar: "مصمم منتج رقمي رئيسي (SaaS Product Design, Information Architecture, Component Systems).",
      en: "Lead Product Designer (SaaS Information Architecture, Data Visualization UX, Design Tokens).",
    },
    technologies: ["Figma", "SaaS Dashboard UI", "Financial Analytics UX", "AI Assistant Interface", "Kanban Workflow", "Design System"],
    highlights: {
      ar: [
        "لوحة مؤشرات مالية حية للإيرادات الشهرية والمصروفات",
        "مساعد مالي ذكي Nexora AI يولد تقارير تحليلية تلقائية",
        "بطاقة تفاعلية لإدارة المشاريع والمهام مع مستويات الأولوية",
        "إدارة متطورة لمراحل المبيعات والعملاء Deals Pipeline",
      ],
      en: [
        "Live financial dashboard tracking recurring MRR and team expenditures",
        "Contextual AI business assistant generating instant audit summaries",
        "Integrated multi-stage Kanban project board with priority indicators",
        "End-to-end deal pipeline tracker with conversion percentage bars",
      ],
    },
  },

  // 21. UI/UX: MoveX
  {
    id: "uiux-movex",
    title: {
      ar: "MoveX (موف إكس) — تصميم تجربة مستخدم وتطبيق حجز وتوجيه سيارات الأجرة والأسطول",
      en: "MoveX — On-Demand Ride Hailing, Fleet Dispatch & Live Map UI/UX",
    },
    category: "uiux",
    secondaryCategory: "mobile",
    featured: true,
    imageUrl: "/images/uiux-movex.jpg",
    summary: {
      ar: "تصميم متكامل لمنظومة النقل الذكي يغطي تطبيق الراكب لاختيار الفئات والحجز السلس، تطبيق السائق للملاحة والأرباح، ولوحة تحكم مركزية Dispatcher لإدارة الأسطول المباشر وتتبع الخريطة الحرارية وأوقات الذروة.",
      en: "Cohesive multi-device transportation design system uniting a passenger hailing app, a rugged driver navigation interface, and an operations dispatch center with real-time heatmaps.",
    },
    problem: {
      ar: "تعقيد واجهات تطبيقات السائقين أثناء القيادة وتشتيت انتباههم، وافتقار مديري العمليات لرؤية مركزية لحركة الأسطول ومناطق الطلب المرتفع.",
      en: "Drivers faced cluttered, distracting mobile interfaces during navigation, while dispatch managers lacked live situational awareness of fleet distribution and surge demand.",
    },
    solution: {
      ar: "تصميم واجهة سائق عالية التباين ومبسطة تدعم السحب والإيماءات السريعة، مع واجهة راكب مريحة لحجز فئات السيارات، ولوحة إدارة أسطول تعرض الخريطة الحرارية المباشرة ومؤشرات الطلب.",
      en: "Designed high-contrast, gesture-driven driver interfaces for safe navigation, intuitive vehicle tier selector for riders, and a live geospatial fleet dashboard for dispatch operators.",
    },
    myRole: {
      ar: "مصمم واجهات وتجربة مستخدم (Mobility UX, Driver Safety Design, Dispatcher Dashboard).",
      en: "Lead Mobility UI/UX Designer (Ergonomic driver interface, passenger checkout, fleet dispatch UI).",
    },
    technologies: ["Figma", "Ride Hailing UX", "Driver & Passenger Apps", "Fleet Dispatch Dashboard", "Live GPS Map UI", "Design Tokens"],
    highlights: {
      ar: [
        "تطبيق راكب بتصميم أنيق لاختيار فئات السيارات (اقتصادي، مريح، فاخر)",
        "واجهة سائق مبسطة بمؤشرات ملاحية واضحة وأرباح اليوم وتمرير للبدء",
        "لوحة تحكم لإدارة الأسطول (الرحلات النشطة، السائقون المتاحون)",
        "خريطة حرارية حية توضح أوقات ومناطق الذروة لتوزيع السيارات",
      ],
      en: [
        "Passenger hailing experience with multi-tier vehicle selection (Eco, Comfort, VIP)",
        "Distraction-free driver app with swipe-to-start gestures and daily earnings",
        "Centralized fleet operations hub tracking hundreds of active vehicles",
        "Real-time geographic surge heatmap assisting proactive fleet repositioning",
      ],
    },
  },

  // 22. UI/UX: PeopleAI HR
  {
    id: "uiux-peopleai",
    title: {
      ar: "PeopleAI HR (بيبل إيه آي) — تصميم واجهة ومنظومة الموارد البشرية والتوظيف الذكي",
      en: "PeopleAI HR — AI-Powered HR & Recruitment Management System UI/UX",
    },
    category: "uiux",
    secondaryCategory: "saas",
    featured: true,
    imageUrl: "/images/uiux-peopleai.jpg",
    summary: {
      ar: "تصميم منظومة متطورة للموارد البشرية والتوظيف؛ تشتمل على تطبيق هاتف للموظف لتسجيل الحضور الذكي بالنطاق الجغرافي (Geofencing)، تطبيق لمدير الموارد البشرية لإجراء المقابلات بالصوت، ولوحة تحكم ويب مركزية مع محرك توظيف بالذكاء الاصطناعي لتقييم السير الذاتية.",
      en: "Holistic HR design system integrating an employee mobile app with geofenced clock-in, an HR manager app with speech-to-text interviews, and an executive web portal with AI resume matching.",
    },
    problem: {
      ar: "الجهد اليدوي المضني في فرز مئات السير الذاتية، ومشاكل التحقق من حضور الموظفين الميدانيين، وصعوبة أرشفة وتلخيص مقابلات العمل.",
      en: "HR teams spent excessive hours manually screening candidate resumes and lacked modern mobile tools for verified field employee attendance and structured interviews.",
    },
    solution: {
      ar: "ابتكار واجهة مركزية تعرض محرك تقييم السير الذاتية التلقائي بنسب المطابقة (AI Match Score)، مع تطبيق هاتف يتيح تسجيل الحضور الجغرافي بلمسة واحدة، ونظام تحويل الصوت لنص للمقابلات.",
      en: "Created an AI-driven recruitment dashboard with candidate matching percentages, paired with intuitive mobile attendance geofencing and structured voice-interview recording flows.",
    },
    myRole: {
      ar: "مصمم منتج وأنظمة تجربة مستخدم (Enterprise HR UX, AI Recruitment Interfaces, Mobile Ergonomics).",
      en: "Lead Product Designer (Enterprise HR Workflows, AI Scoring UX, Geofencing Mobile Interface).",
    },
    technologies: ["Figma", "HR Tech UX", "AI ATS & Matching UI", "Geofencing Mobile App", "Speech-to-Text Interview UX", "Enterprise Design System"],
    highlights: {
      ar: [
        "محرك توظيف ذكي يعرض نسب مطابقة السيرة الذاتية ونقاط القوة والضعف",
        "تطبيق موظف لتسجيل الحضور الذكي وفق النطاق الجغرافي (Geofencing)",
        "تطبيق مدير HR لإدارة الإجازات والمقابلات بالذكاء الاصطناعي",
        "رسوم بيانية تفاعلية لحضور الموظفين، معدل الإجازات، والتحليل المالي",
      ],
      en: [
        "Automated AI candidate scoring dashboard displaying strengths and skill fit",
        "Employee self-service mobile app with one-tap geofenced clock-in",
        "HR manager portal featuring AI speech-to-text interview summaries",
        "Interactive workforce telemetry detailing attendance and payroll distribution",
      ],
    },
  },
];
