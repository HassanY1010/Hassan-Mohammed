'use client';

import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PROFILE } from '@/data/profile';
import { EXPERTISE_LIST } from '@/data/expertise';
import { SKILL_CATEGORIES } from '@/data/skills';
import { X, Printer, Mail, Phone, MapPin, Globe, Github, Linkedin, ExternalLink } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  const { lang, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-950 dark:bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-10 text-slate-100 print:max-h-none print:overflow-visible print:border-none print:shadow-none print:bg-white print:text-black print:p-0"
      >
        {/* Modal Controls (Hidden in Print) */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800 print:hidden">
          <div>
            <h2 id="cv-modal-title" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t('cvModal.title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {t('cvModal.subtitle')}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-lg shadow-blue-600/30 active:scale-95"
              title={t('cvModal.printPdf')}
            >
              <Printer className="w-4 h-4" />
              <span>{t('cvModal.printPdf')}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors"
              aria-label={t('cvModal.close')}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content */}
        <div className="space-y-8 print:space-y-6 text-slate-300 print:text-black">
          {/* Header */}
          <div className="border-b border-slate-800/80 pb-6 print:border-slate-300">
            <h1 className="text-3xl font-extrabold text-white print:text-black tracking-tight">
              {PROFILE.fullName[lang]}
            </h1>
            <p className="text-base sm:text-lg font-medium text-cyan-400 print:text-blue-700 mt-1">
              {PROFILE.primaryTitle}
            </p>
            <p className="text-sm text-slate-400 print:text-slate-600 mt-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-500 inline" />
              <span>{PROFILE.country[lang]} • {PROFILE.availability[lang]}</span>
            </p>

            {/* Contact Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4 text-xs text-slate-300 print:text-slate-800">
              <a href={`mailto:${PROFILE.socials.email}`} className="flex items-center gap-2 hover:text-cyan-400">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span className="truncate">{PROFILE.socials.email}</span>
              </a>
              <a href={PROFILE.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PROFILE.socials.whatsappDisplay}</span>
              </a>
              <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400">
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-slate-100">
                <Github className="w-3.5 h-3.5 text-slate-400" />
                <span>github.com/HassanY1010</span>
              </a>
            </div>
          </div>

          {/* Professional Bio */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-blue-700 mb-2">
              {lang === 'ar' ? 'الملخص المهني' : 'Executive Summary'}
            </h3>
            <p className="text-sm leading-relaxed text-slate-300 print:text-slate-800">
              {PROFILE.tagline[lang]}
            </p>
          </div>

          {/* Core Expertise Pillars */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-blue-700 mb-3">
              {lang === 'ar' ? 'التخصصات والركائز الهندسية' : 'Core Engineering Pillars'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {EXPERTISE_LIST.map((exp) => (
                <div key={exp.id} className="p-3 bg-slate-900/60 print:bg-slate-50 border border-slate-800 print:border-slate-200 rounded-lg">
                  <h4 className="text-sm font-semibold text-white print:text-black">
                    {exp.title[lang]}
                  </h4>
                  <p className="text-xs text-slate-400 print:text-slate-700 mt-1 line-clamp-2">
                    {exp.shortDesc[lang]}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {exp.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-blue-950/60 print:bg-slate-200 text-blue-300 print:text-blue-900 border border-blue-900/40">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Stack */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-blue-700 mb-3">
              {lang === 'ar' ? 'التقنيات والأدوات البرمجية' : 'Technical Proficiencies'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-3 bg-slate-900/40 print:bg-white border border-slate-800 print:border-slate-200 rounded-lg">
                  <span className="text-xs font-bold text-slate-200 print:text-slate-900 block mb-1.5">
                    {cat.title[lang]}
                  </span>
                  <p className="text-xs text-slate-400 print:text-slate-600 leading-relaxed">
                    {cat.skills.map(s => s.name).join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-4 border-t border-slate-800 print:border-slate-300 text-center text-xs text-slate-500 print:text-slate-600">
            <p>
              {lang === 'ar' 
                ? 'تم إنشاء هذه السيرة الذاتية رقمياً من الموقع الشخصي للمهندس حسن بارفعه — جاهزة للتحقق المباشر والتواصل الفوري.' 
                : 'Digitally verified curriculum vitae of Hassan Mohammed Barafah — available for immediate contact & contracts.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

