'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { EXPERTISE_LIST } from '@/data/expertise';
import { ExpertiseItem } from '@/types';
import { ExpertiseModal } from '@/components/modals/ExpertiseModal';
import { 
  Briefcase, 
  Layers, 
  Layout, 
  Cpu, 
  Code, 
  Server, 
  Search, 
  ShieldCheck, 
  Smartphone, 
  ArrowRight,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export function Expertise() {
  const { lang, t } = useLanguage();
  const [selectedExpertise, setSelectedExpertise] = useState<ExpertiseItem | null>(null);

  const renderIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" };
    switch (iconName) {
      case 'Layers': return <Layers {...props} />;
      case 'Layout': return <Layout {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Code': return <Code {...props} />;
      case 'Server': return <Server {...props} />;
      case 'Search': return <Search {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      default: return <Code {...props} />;
    }
  };

  return (
    <section id="expertise" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-cyan-400 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t('expertise.sectionTitle')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('expertise.title')}
          </h2>
          <p className="mt-3 text-base text-slate-400">
            {t('expertise.subtitle')}
          </p>
        </div>

        {/* 8 Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISE_LIST.map((item, idx) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-cyan-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1"
            >
              {/* Card Header & Icon */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-800/40 group-hover:border-cyan-500/40 transition-colors">
                    {renderIcon(item.icon)}
                  </div>
                  <span className="text-xs font-mono text-slate-600 group-hover:text-cyan-400 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {item.title[lang]}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                  {item.shortDesc[lang]}
                </p>

                {/* Tech Pills preview */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.technologies.slice(0, 3).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {item.technologies.length > 3 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800/40 text-slate-500 font-mono">
                      +{item.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* View Deep Details Button */}
              <button
                onClick={() => setSelectedExpertise(item)}
                className="w-full inline-flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-800 rounded-lg group-hover:border-cyan-500/40 transition-all"
              >
                <span>{t('expertise.viewDetails')}</span>
                <ChevronRight className={`w-3.5 h-3.5 text-cyan-400 transition-transform ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Expertise Deep Dive Modal */}
      <ExpertiseModal
        item={selectedExpertise}
        onClose={() => setSelectedExpertise(null)}
      />
    </section>
  );
}
