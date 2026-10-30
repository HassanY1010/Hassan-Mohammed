'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PROFILE } from '@/data/profile';
import { 
  UserCheck, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Layers, 
  Sparkles, 
  MapPin, 
  Code,
  Terminal,
  CheckCircle2
} from 'lucide-react';

export function About() {
  const { lang, t } = useLanguage();

  const philosophyPillars = [
    {
      icon: Layers,
      title: t('about.pillars.0.title'),
      desc: t('about.pillars.0.desc'),
      tag: "SOLID & DRY",
    },
    {
      icon: Zap,
      title: t('about.pillars.1.title'),
      desc: t('about.pillars.1.desc'),
      tag: "WCAG 2.2 AA",
    },
    {
      icon: ShieldCheck,
      title: t('about.pillars.2.title'),
      desc: t('about.pillars.2.desc'),
      tag: "OWASP Top 10",
    },
    {
      icon: Cpu,
      title: t('about.pillars.3.title'),
      desc: t('about.pillars.3.desc'),
      tag: "LLM & RAG",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-slate-900">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-cyan-400 text-xs font-semibold mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>{t('about.sectionTitle')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('about.title')}
          </h2>
          <p className="mt-3 text-base text-slate-400">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-2xl border border-slate-800/80 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 pb-4 border-b border-slate-800">
                <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-md shadow-cyan-500/20 shrink-0">
                  <img
                    src={PROFILE.avatar}
                    alt={PROFILE.fullName[lang]}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
                    Engineering Profile • {PROFILE.fullName[lang]}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {PROFILE.primaryTitle}
                  </span>
                </div>
              </div>

              {PROFILE.aboutParagraphs[lang].map((para, idx) => (
                <p 
                  key={idx} 
                  className="text-sm sm:text-base text-slate-300 dark:text-slate-300 leading-relaxed font-normal"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Quick Profile Meta */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/60">
                <span className="text-slate-500 block mb-1">Origin / Location</span>
                <span className="text-slate-200 font-semibold">{PROFILE.country[lang]}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/60">
                <span className="text-slate-500 block mb-1">Core Specialty</span>
                <span className="text-cyan-400 font-semibold">Full Stack & AI</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/60 col-span-2 sm:col-span-1">
                <span className="text-slate-500 block mb-1">Collaboration</span>
                <span className="text-emerald-400 font-semibold">Remote Worldwide</span>
              </div>
            </div>
          </div>

          {/* Philosophy & Architecture Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>{t('about.approachTitle')}</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t('about.approachDesc')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
              {philosophyPillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-blue-950/80 border border-blue-900/50 text-cyan-400 group-hover:text-cyan-300 shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-xs font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                            {pillar.title}
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
                            {pillar.tag}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

