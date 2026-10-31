export type Language = 'ar' | 'en';
export type Direction = 'rtl' | 'ltr';
export type Theme = 'dark' | 'light';

export interface SocialLinks {
  whatsapp: string;
  email: string;
}

export interface ExpertiseItem {
  id: string;
  title: { ar: string; en: string };
  shortDesc: { ar: string; en: string };
  longDesc: { ar: string; en: string };
  icon: string;
  gradient: string;
  technologies: string[];
  capabilities: {
    category: { ar: string; en: string };
    items: string[];
  }[];
  focus: { ar: string; en: string };
}

export interface SkillCategory {
  id: string;
  title: { ar: string; en: string };
  icon: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface ProjectItem {
  id: string;
  title: { ar: string; en: string };
  category: 'web' | 'mobile' | 'ai' | 'uiux' | 'saas' | 'seo' | 'bots';
  secondaryCategory?: 'web' | 'mobile' | 'ai' | 'uiux' | 'saas' | 'seo' | 'bots';
  imageUrl?: string;
  summary: { ar: string; en: string };
  problem: { ar: string; en: string };
  solution: { ar: string; en: string };
  myRole: { ar: string; en: string };
  technologies: string[];
  liveUrl?: string;
  featured: boolean;
  highlights: { ar: string[]; en: string[] };
}

export interface ServiceItem {
  id: number;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  features: { ar: string[]; en: string[] };
  clientBenefit: { ar: string; en: string };
  icon: string;
  tag: string;
}

export interface ProcessStep {
  step: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  deliverables: { ar: string[]; en: string[] };
  icon: string;
}

