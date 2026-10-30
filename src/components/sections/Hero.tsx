'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PROFILE } from '@/data/profile';
import { 
  ArrowRight, 
  ArrowDown, 
  FileText, 
  Send, 
  Terminal, 
  Sparkles, 
  Github, 
  Linkedin, 
  Phone, 
  Mail,
  Layers,
  Cpu,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  Code2
} from 'lucide-react';

interface HeroProps {
  onOpenCv: () => void;
}

export function Hero({ onOpenCv }: HeroProps) {
  const { lang, t } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PROFILE.titles[lang].length);
    }, 3200);
    return () => clearInterval(interval);
  }, [lang]);

  return (
    <section 
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden tech-grid"
    >
      {/* Background Tech Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 -right-20 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Main Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-300">
                {PROFILE.availability[lang]}
              </span>
              <span className="text-xs text-slate-600">•</span>
              <span className="text-xs font-mono text-cyan-400">
                {PROFILE.country[lang]}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <span className="text-sm sm:text-base font-semibold text-slate-400 block tracking-wider uppercase">
                {t('hero.greeting')}
              </span>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white">
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                  {PROFILE.fullName[lang]}
                </span>
              </h1>
              
              {/* Dynamic Role Switcher */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent transition-all duration-500">
                  {PROFILE.titles[lang][roleIndex]}
                </span>
              </div>
            </div>

            {/* Tagline Bio */}
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {PROFILE.tagline[lang]}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:opacity-95 rounded-xl shadow-xl shadow-blue-600/30 active:scale-95 transition-all"
              >
                <span>{t('hero.ctaProjects')}</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all active:scale-95"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>{t('hero.ctaContact')}</span>
              </a>

              <button
                onClick={onOpenCv}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-950 hover:bg-slate-900 border border-slate-800 rounded-xl transition-colors active:scale-95"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>{t('hero.ctaCv')}</span>
              </button>
            </div>

            {/* Quick Pillars Badges */}
            <div className="pt-4 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
              <div className="p-2.5 rounded-xl bg-slate-900/40 border border-slate-800/80 text-center">
                <span className="text-xs font-bold text-cyan-400 block font-mono">100%</span>
                <span className="text-[11px] text-slate-400">Full Stack & AI</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/40 border border-slate-800/80 text-center">
                <span className="text-xs font-bold text-blue-400 block font-mono">OWASP</span>
                <span className="text-[11px] text-slate-400">Security Ready</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/40 border border-slate-800/80 text-center">
                <span className="text-xs font-bold text-emerald-400 block font-mono">WCAG 2.2</span>
                <span className="text-[11px] text-slate-400">Accessible UI</span>
              </div>
            </div>

            {/* Social Coordinates */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
              <span className="text-xs text-slate-400 font-mono">Connect:</span>
              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PROFILE.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PROFILE.socials.email}`}
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Terminal & Digital Architecture Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-40 animate-pulse-slow pointer-events-none" />

              {/* Terminal Card */}
              <div className="relative rounded-2xl bg-slate-950/95 border border-slate-800 shadow-2xl p-5 sm:p-6 backdrop-blur-xl font-mono text-xs text-slate-300">
                
                {/* Window Chrome */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                    <span className="text-[11px] text-slate-400 font-mono ml-2">hassan@barafah-os: ~</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-cyan-400">
                    <Sparkles className="w-3 h-3" />
                    <span>v2.5.0-prod</span>
                  </div>
                </div>

                {/* Terminal Code Body */}
                <div className="space-y-3 font-mono">
                  <p className="text-slate-500 text-[11px]">
                    {t('hero.codeSnippetComment')}
                  </p>

                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 space-y-1">
                    <p className="text-cyan-400 font-semibold">
                      const <span className="text-white">engineer</span> = &#123;
                    </p>
                    <p className="pl-4 text-slate-300">
                      name: <span className="text-emerald-400">&apos;Hassan Barafah&apos;</span>,
                    </p>
                    <p className="pl-4 text-slate-300">
                      origin: <span className="text-emerald-400">&apos;Yemen&apos;</span>,
                    </p>
                    <p className="pl-4 text-slate-300">
                      focus: [<span className="text-blue-300">&apos;Next.js&apos;</span>, <span className="text-blue-300">&apos;AI Agents&apos;</span>, <span className="text-blue-300">&apos;Flutter&apos;</span>],
                    </p>
                    <p className="pl-4 text-slate-300">
                      mindset: <span className="text-amber-300">&apos;Architecture • Security • Velocity&apos;</span>,
                    </p>
                    <p className="pl-4 text-slate-300">
                      status: <span className="text-emerald-400">&apos;Open For High-Impact Ventures&apos;</span>
                    </p>
                    <p className="text-cyan-400 font-semibold">&#125;;</p>
                  </div>

                  {/* Operational Telemetry Matrix */}
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                        AI Agent Pipeline
                      </span>
                      <span className="text-emerald-400 font-bold">READY (Active)</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-blue-400" />
                        Full Stack Core
                      </span>
                      <span className="text-emerald-400 font-bold">OPTIMIZED</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Smartphone className="w-3.5 h-3.5 text-purple-400" />
                        Cross-Platform Flutter
                      </span>
                      <span className="text-emerald-400 font-bold">SYNCED</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                        OWASP Hardening
                      </span>
                      <span className="text-emerald-400 font-bold">COMPLIANT</span>
                    </div>
                  </div>

                  {/* Terminal Command Prompt */}
                  <div className="pt-2 flex items-center gap-2 text-cyan-400 text-[11px]">
                    <span>❯</span>
                    <span className="text-slate-200">readyToBuild(projectRequirements)</span>
                    <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-1" />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

