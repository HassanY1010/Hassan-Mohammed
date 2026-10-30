'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { WORK_PROCESS_STEPS } from '@/data/process';
import { 
  GitCommit, 
  Compass, 
  Boxes, 
  PenTool, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';

export function Process() {
  const { lang, t } = useLanguage();

  const renderIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-cyan-400" };
    switch (iconName) {
      case 'Compass': return <Compass {...props} />;
      case 'Boxes': return <Boxes {...props} />;
      case 'PenTool': return <PenTool {...props} />;
      case 'Code2': return <Code2 {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Rocket': return <Rocket {...props} />;
      case 'HeartHandshake': return <HeartHandshake {...props} />;
      default: return <GitCommit {...props} />;
    }
  };

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-cyan-400 text-xs font-semibold mb-3">
            <GitCommit className="w-3.5 h-3.5" />
            <span>{t('process.sectionTitle')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('process.title')}
          </h2>
          <p className="mt-3 text-base text-slate-400">
            {t('process.subtitle')}
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          
          {/* Central Line for Large Screens */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-600 via-cyan-500 to-emerald-500 -translate-x-1/2 opacity-30" />

          <div className="space-y-8 lg:space-y-12">
            {WORK_PROCESS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={step.step}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-6 lg:gap-12`}
                >
                  {/* Step Content Card */}
                  <div className="w-full lg:w-1/2">
                    <div className="group p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-cyan-500/50 shadow-xl transition-all duration-300 hover:shadow-cyan-500/10 hover:-translate-y-1">
                      
                      {/* Step Number & Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-blue-950/70 border border-blue-900/50">
                            {renderIcon(step.icon)}
                          </div>
                          <span className="font-mono text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            {step.step}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-slate-400">
                          PHASE_{step.step}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                        {step.title[lang]}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {step.description[lang]}
                      </p>

                      {/* Deliverables */}
                      <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                          {t('process.deliverablesLabel')}:
                        </span>
                        {step.deliverables[lang].map((del, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Center Dot Indicator */}
                  <div className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-slate-950 border-2 border-cyan-500/80 shadow-lg shadow-cyan-500/30 z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Empty placeholder for opposite column to keep symmetry */}
                  <div className="hidden lg:block w-1/2" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

