'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { SERVICES_LIST } from '@/data/services';
import { 
  Sparkles, 
  Globe, 
  Layers, 
  Palette, 
  Code, 
  Server, 
  Smartphone, 
  Cpu, 
  Search, 
  ShieldAlert, 
  Cloud, 
  BarChart3, 
  Database,
  CheckCircle2,
  ArrowRight,
  Send
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  const { lang, t } = useLanguage();

  const renderServiceIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" };
    switch (iconName) {
      case 'Globe': return <Globe {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Code': return <Code {...props} />;
      case 'Server': return <Server {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Search': return <Search {...props} />;
      case 'ShieldAlert': return <ShieldAlert {...props} />;
      case 'Cloud': return <Cloud {...props} />;
      case 'BarChart3': return <BarChart3 {...props} />;
      case 'Database': return <Database {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  const handleServiceClick = (serviceTitle: string) => {
    onSelectService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('services.sectionTitle')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('services.title')}
          </h2>
          <p className="mt-3 text-base text-slate-400">
            {t('services.subtitle')}
          </p>
        </div>

        {/* 12 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-900/50 group-hover:border-cyan-500/40 transition-colors">
                    {renderServiceIcon(service.icon)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800/80 text-cyan-400 border border-slate-700/60">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                  {service.title[lang]}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {service.description[lang]}
                </p>

                {/* Features list */}
                <div className="mb-4 space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    {t('services.featuresLabel')}
                  </span>
                  {service.features[lang].map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-[11px]">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Client Benefit */}
                <div className="p-3 rounded-xl bg-blue-950/20 border border-blue-900/30 mb-5">
                  <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-wider block mb-0.5">
                    {t('services.benefitLabel')}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {service.clientBenefit[lang]}
                  </p>
                </div>
              </div>

              {/* Order Service CTA Button */}
              <button
                onClick={() => handleServiceClick(service.title[lang])}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-slate-900 group-hover:bg-blue-600 border border-slate-800 group-hover:border-blue-500 rounded-xl transition-all shadow-sm"
              >
                <span>{t('services.orderService')}</span>
                <Send className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white transition-colors" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

