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
  Code2
} from 'lucide-react';

export function Projects() {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterTabs = [
    { id: 'all', label: t('projects.filterAll') },
    { id: 'web', label: t('projects.filterWeb') },
    { id: 'mobile', label: t('projects.filterMobile') },
    { id: 'ai', label: t('projects.filterAi') },
    { id: 'uiux', label: t('projects.filterUiux') },
    { id: 'saas', label: t('projects.filterSaas') },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter(p => p.category === activeCategory);

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

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                activeCategory === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
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
                    <span>{t('projects.liveDemo')}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>{t('projects.githubRepo')}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Notice on customizable data */}
        <div className="mt-12 text-center text-xs text-slate-500">
          <p>{t('projects.customDataNotice')}</p>
        </div>

      </div>
    </section>
  );
}
