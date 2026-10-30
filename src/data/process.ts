import { ProcessStep } from '@/types';

export const WORK_PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: {
      ar: "الاستكشاف والتحليل (Discovery)",
      en: "Discovery & Requirements",
    },
    description: {
      ar: "جلسات نقاش معمقة لفهم أهداف المشروع، الجمهور المستهدف، ونطاق العمل، وتحليل التحديات التقنية لتحديد خارطة طريق واضحة.",
      en: "Deep-dive stakeholder sessions to understand product goals, target audience, technical constraints, and define a clear roadmap.",
    },
    deliverables: {
      ar: ["وثيقة نطاق المشروع (Scope of Work)", "تحليل المتطلبات الوظيفية وغير الوظيفية", "تحديد معايير النجاح والجدول الزمني"],
      en: ["Scope of Work Document", "Functional & Technical Requirements", "Milestones & Delivery Schedule"],
    },
    icon: "Compass",
  },
  {
    step: "02",
    title: {
      ar: "التخطيط المعماري والتقني (Planning)",
      en: "Architecture & Planning",
    },
    description: {
      ar: "اختيار البنية التحتية، تصميم هيكلية البيانات (Data Modeling)، واختيار أحدث وأنسب التقنيات التي تضمن قابلية التوسع والأمان العالي.",
      en: "Architectural blueprinting, selecting modern tech stacks, modeling database schemas, and mapping out security and scalability strategies.",
    },
    deliverables: {
      ar: ["مخطط البنية المعمارية للنظام (System Architecture)", "تصميم مخطط قاعدة البيانات (Schema Diagram)", "مواصفات واجهات برمجة التطبيقات (API Specs)"],
      en: ["System Architecture Blueprint", "Relational Database Schema", "RESTful API Contracts"],
    },
    icon: "Boxes",
  },
  {
    step: "03",
    title: {
      ar: "تصميم واجهات وتجربة المستخدم (UI/UX)",
      en: "UI/UX & Interactive Design",
    },
    description: {
      ar: "بناء مسارات الاستخدام، والـ Wireframes، وتصميم نظام تصميم (Design System) متكامل وواجهات بصرية متناسقة واختبارها تفاعلياً.",
      en: "Designing user flows, wireframes, and building an atomic design system with clickable high-fidelity prototypes tested for intuitive ergonomics.",
    },
    deliverables: {
      ar: ["مخططات التدفق والـ Wireframes", "نظام تصميم موحد (Design Tokens & Components)", "نماذج تفاعلية قابلة للتجربة (Interactive Prototype)"],
      en: ["User Flow & Wireframes", "Design System & UI Component Library", "Interactive Clickable Prototype"],
    },
    icon: "PenTool",
  },
  {
    step: "04",
    title: {
      ar: "التطوير والبرمجة (Development)",
      en: "Full Stack Development",
    },
    description: {
      ar: "كتابة أكواد نظيفة ومنظمة وفق أعلى المعايير (Clean Code)، وتطوير الواجهات والأنظمة الخلفية وقواعد البيانات مع دعم كامل للـ RTL/LTR.",
      en: "Writing strictly typed, modular, maintainable code following Clean Architecture, integrating frontends, robust APIs, and cloud services.",
    },
    deliverables: {
      ar: ["واجهات أمامية متجاوبة وسريعة (Next.js/React)", "خدمات خلفية آمنة وموثقة (Node/REST APIs)", "قواعد بيانات مهيأة ومفهرسة (PostgreSQL/Supabase)"],
      en: ["Responsive Next.js Frontend", "Secure REST APIs & Services", "Optimized PostgreSQL Schema"],
    },
    icon: "Code2",
  },
  {
    step: "05",
    title: {
      ar: "اختبار الجودة والأمان (Testing & Security)",
      en: "Testing & Security Audit",
    },
    description: {
      ar: "اختبارات وظيفية دقيقة، وفحص التوافق عبر كافة المتصفحات والشاشات، ومراجعة أمان صارمة لمنع ثغرات OWASP واختبار ضغط الخوادم.",
      en: "End-to-end functionality testing, cross-browser compatibility, WCAG accessibility validation, and OWASP security audit.",
    },
    deliverables: {
      ar: ["فحص التجاوب عبر كافة الشاشات والأجهزة", "تدقيق أمني شامل ومعالجة الثغرات", "تقرير الأداء وسرعة التحميل (Core Web Vitals)"],
      en: ["Cross-Device Responsive Report", "OWASP Security Compliance Check", "Core Web Vitals Performance Audit"],
    },
    icon: "ShieldCheck",
  },
  {
    step: "06",
    title: {
      ar: "النشر والإطلاق (Deployment)",
      en: "Production Deployment",
    },
    description: {
      ar: "تهيئة بيئة الإنتاج السحابية (Vercel / Cloud)، وربط النطاقات المخصصة، وتفعيل شهادات SSL، وإعداد الـ SEO والـ Structured Data.",
      en: "Deploying to production cloud edge environments, SSL certification, domain wiring, CDN caching, and search console indexing.",
    },
    deliverables: {
      ar: ["إطلاق الموقع أو التطبيق على بيئة الإنتاج الحية", "تفعيل ملفات sitemap و robots و Schema JSON-LD", "ربط أدوات التحليل والمراقبة الفنية"],
      en: ["Live Production Deployment", "Sitemap & Google Search Console Setup", "DNS, SSL & Caching Configuration"],
    },
    icon: "Rocket",
  },
  {
    step: "07",
    title: {
      ar: "الدعم والتحسين المستمر (Maintenance)",
      en: "Support & Continuous Growth",
    },
    description: {
      ar: "متابعة أداء النظام واستقرار الخوادم، وتقديم الدعم الفني، وإجراء التحديثات الأمنية والتطويرات المستمرة بناءً على آراء المستخدمين.",
      en: "Proactive uptime monitoring, security patches, performance tuning, and rolling out continuous feature enhancements as your business expands.",
    },
    deliverables: {
      ar: ["دعم فني واستجابة سريعة للاستفسارات", "تحديثات دورية للمكتبات ومعايير الأمان", "اقتراح تحسينات مستمرة لتوسيع المشروع"],
      en: ["Technical Support & SLA Guarantee", "Security Updates & Dependency Patches", "Scalability Recommendations & Feature Iteration"],
    },
    icon: "HeartHandshake",
  },
];

