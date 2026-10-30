'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PROJECTS_LIST } from '@/data/projects';
import { ProjectItem } from '@/types';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Layers, 
  Cpu, 
  Smartphone, 
  Layout, 
  Cloud,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Code2,
  X,
  Play
} from 'lucide-react';

export function Projects() {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getCategoryCount = (catId: string) => {
    if (catId === 'all') return PROJECTS_LIST.length;
    return PROJECTS_LIST.filter(p => p.category === catId || p.secondaryCategory === catId).length;
  };

  const filterTabs = [
    { id: 'all', label: t('projects.filterAll') },
    { id: 'saas', label: t('projects.filterSaas') },
    { id: 'web', label: t('projects.filterWeb') },
    { id: 'mobile', label: t('projects.filterMobile') },
    { id: 'ai', label: t('projects.filterAi') },
    { id: 'uiux', label: t('projects.filterUiux') },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter(p => p.category === activeCategory || p.secondaryCategory === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return <Layers className="w-3.5 h-3.5 text-blue-400" />;
      case 'mobile': return <Smartphone className="w-3.5 h-3.5 text-cyan-400" />;
      case 'ai': return <Cpu className="w-3.5 h-3.5 text-purple-400" />;
      case 'uiux': return <Layout className="w-3.5 h-3.5 text-pink-400" />;
      case 'saas': return <Cloud className="w-3.5 h-3.5 text-emerald-400" />;
      default: return <FolderGit2 className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  const isPlayStoreUrl = (url?: string) => {
    return url && url.includes('play.google.com');
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-cyan-400 text-xs font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{t('projects.sectionTitle')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('projects.title')}
          </h2>
          <p className="mt-3 text-base text-slate-400">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Category Tabs with dynamic counts */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const count = getCategoryCount(tab.id);
            const isActive = activeCategory === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isActive ? 'bg-blue-800/80 text-blue-100' : 'bg-slate-800 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-cyan-500/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1.5"
            >
              <div>
                {/* Visual Header / Mockup Banner */}
                <div className="h-44 relative bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950/60 p-5 flex flex-col justify-between border-b border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-[11px] font-mono text-cyan-300">
                      {getCategoryIcon(project.category)}
                      <span className="capitalize">{project.category}</span>
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-600/30 border border-blue-500/50 text-[10px] font-semibold text-blue-300">
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Architecture Blueprint Mock Graphic */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
                      <span>PROJECT_ID:</span>
                      <span className="text-slate-400 font-semibold">{project.id}</span>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {project.title[lang]}
                    </h3>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {project.summary[lang]}
                  </p>

                  {/* Problem & Solution Accordion-like cards */}
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80">
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-0.5">
                        {t('projects.problemLabel')}
                      </span>
                      <p className="text-[11px] text-slate-400 line-clamp-2">
                        {project.problem[lang]}
                      </p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80">
                      <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block mb-0.5">
                        {t('projects.solutionLabel')}
                      </span>
                      <p className="text-[11px] text-slate-400 line-clamp-2">
                        {project.solution[lang]}
                      </p>
                    </div>
                  </div>

                  {/* Role */}
                  <div className="pt-1">
                    <span className="text-[10px] font-mono text-slate-500 block mb-0.5">
                      {t('projects.roleLabel')}:
                    </span>
                    <p className="text-xs font-semibold text-slate-200">
                      {project.myRole[lang]}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800/50 text-slate-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer / Action Links */}
              <div className="p-6 pt-0 border-t border-slate-800/60 flex items-center justify-between gap-3 mt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {isPlayStoreUrl(project.liveUrl) ? (
                      <>
                        <Play className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Google Play Store</span>
                      </>
                    ) : (
                      <>
                        <span>{t('projects.liveDemo')}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </a>
                )}
                
                {/* View Details Modal Trigger */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  {lang === 'ar' ? 'التفاصيل والمعمارية' : 'Details & Specs'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Notice on customizable data */}
        <div className="mt-12 text-center text-xs text-slate-500">
          <p>{t('projects.customDataNotice')}</p>
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100">
            <div className="flex items-start justify-between pb-4 mb-4 border-b border-slate-800">
              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                  {selectedProject.category.toUpperCase()} • {selectedProject.id}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {selectedProject.title[lang]}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div>
                <h4 className="font-bold text-slate-200 mb-1">الوصف العام:</h4>
                <p className="leading-relaxed text-slate-400">{selectedProject.summary[lang]}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-amber-400 font-bold block mb-1">التحدي والمشكلة:</span>
                  <p className="text-xs text-slate-400 leading-relaxed">{selectedProject.problem[lang]}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-cyan-400 font-bold block mb-1">الحل التقني:</span>
                  <p className="text-xs text-slate-400 leading-relaxed">{selectedProject.solution[lang]}</p>
                </div>
              </div>

              <div className="pt-2">
                <span className="font-bold text-slate-200 block mb-1">الدور الهندسي في المشروع:</span>
                <p className="text-xs text-slate-400">{selectedProject.myRole[lang]}</p>
              </div>

              <div className="pt-2">
                <span className="font-bold text-slate-200 block mb-2">أبرز مميزات البنية المعمارية:</span>
                <ul className="space-y-1.5">
                  {selectedProject.highlights[lang].map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <span className="font-bold text-slate-200 block mb-2">التقنيات المستخدمة:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/30"
                >
                  {isPlayStoreUrl(selectedProject.liveUrl) ? (
                    <>
                      <Play className="w-3.5 h-3.5 text-emerald-300" />
                      <span>عرض في Google Play</span>
                    </>
                  ) : (
                    <>
                      <span>زيارة ومعاينة المشروع الحي</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </a>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 rounded-xl border border-slate-800"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
