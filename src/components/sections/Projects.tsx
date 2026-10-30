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
  Play, 
  Eye, 
  ZoomIn,
  Palette,
  TrendingUp,
  Search
} from 'lucide-react';

export function Projects() {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string } | null>(null);

  const getCategoryCount = (catId: string) => {
    if (catId === 'all') return PROJECTS_LIST.length;
    return PROJECTS_LIST.filter(p => p.category === catId || p.secondaryCategory === catId).length;
  };

  const filterTabs = [
    { id: 'all', label: t('projects.filterAll') },
    { id: 'seo', label: t('projects.filterSeo') },
    { id: 'uiux', label: t('projects.filterUiux') },
    { id: 'saas', label: t('projects.filterSaas') },
    { id: 'web', label: t('projects.filterWeb') },
    { id: 'mobile', label: t('projects.filterMobile') },
    { id: 'ai', label: t('projects.filterAi') },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter(p => p.category === activeCategory || p.secondaryCategory === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'seo': return <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />;
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
                {project.imageUrl ? (
                  <div 
                    className="h-52 relative overflow-hidden group/img cursor-pointer bg-slate-950 border-b border-slate-800/80"
                    onClick={() => setLightboxImage({ url: project.imageUrl!, title: project.title[lang] })}
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title[lang]}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-black/30 group-hover/img:opacity-70 transition-opacity" />
                    
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/85 border border-slate-700/80 text-[11px] font-mono text-cyan-300 backdrop-blur-md">
                        {getCategoryIcon(project.category)}
                        <span className="capitalize">{project.category}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-950/85 border border-blue-600/60 text-[10px] font-semibold text-cyan-300 backdrop-blur-md group-hover/img:bg-blue-600 group-hover/img:text-white transition-colors">
                        <ZoomIn className="w-3 h-3" />
                        <span>{lang === 'ar' ? 'معاينة التصميم' : 'Zoom UI'}</span>
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 z-10">
                      <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1 drop-shadow-lg">
                        {project.title[lang]}
                      </h3>
                    </div>
                  </div>
                ) : (
                  <div className="h-44 relative bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950/60 p-5 flex flex-col justify-between border-b border-slate-800/80">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-[11px] font-mono text-cyan-300">
                        {getCategoryIcon(project.category)}
                        <span className="capitalize">{project.category}</span>
                      </span>
                      {project.category === 'seo' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-semibold text-emerald-300">
                          <TrendingUp className="w-3 h-3 text-emerald-400" />
                          {lang === 'ar' ? 'تصدر نتائج Google #1' : '#1 Google SEO'}
                        </span>
                      ) : project.featured ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-600/30 border border-blue-500/50 text-[10px] font-semibold text-blue-300">
                          <Sparkles className="w-3 h-3 text-cyan-400" />
                          Featured
                        </span>
                      ) : null}
                    </div>

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
                )}

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
                {project.imageUrl ? (
                  <button
                    onClick={() => setLightboxImage({ url: project.imageUrl!, title: project.title[lang] })}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'معاينة التصميم' : 'View Design'}</span>
                  </button>
                ) : project.liveUrl ? (
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
                ) : (
                  <span className="text-xs text-slate-500 font-mono">UI/UX Prototype</span>
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 mb-4 border-b border-slate-800">
              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                  {selectedProject.category.toUpperCase()} • {selectedProject.id}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {selectedProject.title[lang]}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Design Mockup Image preview if exists */}
            {selectedProject.imageUrl && (
              <div 
                className="relative mb-6 rounded-xl overflow-hidden border border-slate-800 group/zoom cursor-pointer shadow-xl"
                onClick={() => setLightboxImage({ url: selectedProject.imageUrl!, title: selectedProject.title[lang] })}
              >
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title[lang]}
                  className="w-full h-auto max-h-72 object-cover object-top transition-transform duration-500 group-hover/zoom:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/zoom:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-xs backdrop-blur-[2px]">
                  <ZoomIn className="w-4 h-4 text-cyan-400" />
                  <span>{lang === 'ar' ? 'انقر لتكبير التصميم بالحجم الكامل' : 'Click to zoom high-res mockup'}</span>
                </div>
              </div>
            )}

            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div>
                <h4 className="font-bold text-slate-200 mb-1">{lang === 'ar' ? 'الوصف العام:' : 'Executive Summary:'}</h4>
                <p className="leading-relaxed text-slate-400">{selectedProject.summary[lang]}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-amber-400 font-bold block mb-1">{lang === 'ar' ? 'التحدي والمشكلة:' : 'Problem Statement:'}</span>
                  <p className="text-xs text-slate-400 leading-relaxed">{selectedProject.problem[lang]}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-cyan-400 font-bold block mb-1">{lang === 'ar' ? 'الحل التقني والتصميمي:' : 'Design & Technical Solution:'}</span>
                  <p className="text-xs text-slate-400 leading-relaxed">{selectedProject.solution[lang]}</p>
                </div>
              </div>

              <div className="pt-2">
                <span className="font-bold text-slate-200 block mb-1">{lang === 'ar' ? 'الدور الهندسي والتصميمي:' : 'Engineering Role:'}</span>
                <p className="text-xs text-slate-400">{selectedProject.myRole[lang]}</p>
              </div>

              <div className="pt-2">
                <span className="font-bold text-slate-200 block mb-2">{lang === 'ar' ? 'أبرز مميزات البنية ونظام التصميم:' : 'Key Architectural Highlights:'}</span>
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
                <span className="font-bold text-slate-200 block mb-2">{lang === 'ar' ? 'الأدوات والتقنيات:' : 'Tools & Technologies:'}</span>
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
              {selectedProject.imageUrl ? (
                <button
                  onClick={() => setLightboxImage({ url: selectedProject.imageUrl!, title: selectedProject.title[lang] })}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/30"
                >
                  <ZoomIn className="w-3.5 h-3.5 text-cyan-300" />
                  <span>{lang === 'ar' ? 'تكبير التصميم عالي الدقة' : 'View Full Resolution Mockup'}</span>
                </button>
              ) : selectedProject.liveUrl ? (
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
              ) : null}

              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 rounded-xl border border-slate-800 transition-colors"
              >
                {lang === 'ar' ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* High-Resolution Design Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fade-in"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="relative max-w-5xl max-h-[95vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Controls */}
            <div className="w-full flex items-center justify-between pb-3 mb-2 text-slate-300 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-cyan-400" />
                <span className="text-xs sm:text-sm font-bold text-white">{lightboxImage.title}</span>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mockup Full-Size Display */}
            <div className="w-full overflow-auto rounded-xl border border-slate-800 shadow-2xl bg-slate-950 max-h-[82vh]">
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
