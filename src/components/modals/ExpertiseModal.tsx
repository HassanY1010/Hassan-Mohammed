'use client';

import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ExpertiseItem } from '@/types';
import { X, CheckCircle2, Cpu, Code, Layers, Layout, Server, Search, ShieldCheck, Smartphone, Target } from 'lucide-react';

interface ExpertiseModalProps {
  item: ExpertiseItem | null;
  onClose: () => void;
}

export function ExpertiseModal({ item, onClose }: ExpertiseModalProps) {
  const { lang, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const renderIcon = (iconName: string) => {
    const props = { className: "w-8 h-8 text-cyan-400" };
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
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-expertise-title"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100"
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-6 mb-6 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-950/60 border border-blue-800/40 rounded-xl shadow-inner shadow-cyan-500/10">
              {renderIcon(item.icon)}
            </div>
            <div>
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
                {t('expertise.sectionTitle')}
              </span>
              <h2 id="modal-expertise-title" className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                {item.title[lang]}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors"
            aria-label={t('expertise.closeModal')}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Long Description */}
        <div className="mb-6">
          <p className="text-sm sm:text-base leading-relaxed text-slate-300">
            {item.longDesc[lang]}
          </p>
        </div>

        {/* Engineering Focus Pillar */}
        <div className="p-4 mb-6 rounded-xl bg-blue-950/30 border border-blue-900/50 flex items-start gap-3">
          <Target className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block mb-1">
              {t('expertise.focusPillar')}
            </span>
            <p className="text-sm text-slate-300">
              {item.focus[lang]}
            </p>
          </div>
        </div>

        {/* Core Capabilities Breakdown */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4">
            {t('expertise.coreCapabilities')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {item.capabilities.map((cap, idx) => (
              <div key={idx} className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800">
                <span className="text-xs font-semibold text-cyan-400 block mb-2.5">
                  {cap.category[lang]}
                </span>
                <ul className="space-y-1.5">
                  {cap.items.map((sub, sIdx) => (
                    <li key={sIdx} className="text-xs text-slate-300 flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies & Tools */}
        <div>
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3">
            {t('expertise.technologiesUsed')}
          </h3>
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 rounded-lg hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
          >
            {t('expertise.closeModal')}
          </button>
        </div>
      </div>
    </div>
  );
}

