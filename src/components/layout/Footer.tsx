'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PROFILE } from '@/data/profile';
import { EXPERTISE_LIST } from '@/data/expertise';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  Terminal,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export function Footer() {
  const { lang, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.expertise'), href: '#expertise' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.process'), href: '#process' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900/80 text-slate-400 overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-blue-600/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-900">
          
          {/* Col 1 & 2: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px] shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <span className="font-mono font-bold text-sm bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    HM
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white">
                  {PROFILE.displayName}
                </h3>
                <p className="text-xs text-cyan-400 font-mono">
                  {PROFILE.primaryTitle}
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              {t('footer.tagline')}
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{PROFILE.country[lang]} • {PROFILE.availability[lang]}</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PROFILE.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 transition-colors"
                aria-label="WhatsApp Chat"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PROFILE.socials.email}`}
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.slice(0, 5).map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-cyan-400 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: More Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              {t('footer.expertise')}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {EXPERTISE_LIST.slice(0, 5).map((exp) => (
                <li key={exp.id}>
                  <a href="#expertise" className="hover:text-cyan-400 transition-colors">
                    {exp.title[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Security & Verification */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              {t('footer.connect')}
            </h4>
            <div className="space-y-3 text-xs">
              <a 
                href={`mailto:${PROFILE.socials.email}`}
                className="block p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors"
              >
                <span className="text-[10px] text-slate-500 block mb-0.5">{t('contact.emailDirect')}</span>
                <span className="text-slate-200 font-mono truncate block text-[11px]">{PROFILE.socials.email}</span>
              </a>
              <a 
                href={PROFILE.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition-colors"
              >
                <span className="text-[10px] text-slate-500 block mb-0.5">{t('contact.whatsappDirect')}</span>
                <span className="text-slate-200 font-mono block text-[11px]">{PROFILE.socials.whatsappDisplay}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-start">
            © {currentYear} {PROFILE.displayName}. {t('footer.rights')}.
          </p>

          <p className="text-slate-500 text-center text-[11px]">
            {t('footer.craftedWith')}
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
            aria-label={t('footer.backToTop')}
          >
            <span>{t('footer.backToTop')}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

