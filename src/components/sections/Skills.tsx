'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { SKILL_CATEGORIES } from '@/data/skills';
import { 
  Wrench, 
  LayoutTemplate, 
  Server, 
  Database, 
  Smartphone, 
  Cpu, 
  PenTool, 
  Search, 
  ShieldCheck, 
  Terminal,
  Sparkles,
  Check
} from 'lucide-react';

export function Skills() {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const renderCategoryIcon = (iconName: string) => {
    const props = { className: "w-4 h-4 text-cyan-400" };
    switch (iconName) {
      case 'LayoutTemplate': return <LayoutTemplate {...props} />;
      case 'Server': return <Server {...props} />;
      case 'Database': return <Database {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'PenTool': return <PenTool {...props} />;
      case 'Search': return <Search {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Terminal': return <Terminal {...props} />;
      default: return <Wrench {...props} />;
    }
  };

  const filteredCategories = activeCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-cyan-400 text-xs font-semibold mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>{t('skills.sectionTitle')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('skills.title')}
          </h2>
          <p className="mt-3 text-base text-slate-400">
            {t('skills.subtitle')}
          </p>
          <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-500 font-mono">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>{t('skills.noFakeMetricsNotice')}</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            {t('skills.all')}
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {renderCategoryIcon(cat.icon)}
              <span>{cat.title[lang]}</span>
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/90 hover:border-slate-700 transition-all space-y-4"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-900/50">
                  {renderCategoryIcon(cat.icon)}
                </div>
                <h3 className="text-sm font-bold text-white tracking-wide">
                  {cat.title[lang]}
                </h3>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                      skill.highlight
                        ? 'bg-blue-950/70 border border-blue-600/50 text-cyan-300 font-semibold shadow-sm shadow-cyan-500/10'
                        : 'bg-slate-950/80 border border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {skill.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

