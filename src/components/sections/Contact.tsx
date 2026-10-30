'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PROFILE } from '@/data/profile';
import { SERVICES_LIST } from '@/data/services';
import { 
  Send, 
  Mail, 
  Phone, 
  Github, 
  MapPin, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface ContactProps {
  selectedService?: string;
}

export function Contact({ selectedService }: ContactProps) {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
    _honey: '', // Honeypot field for anti-bot spam
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', service: '', message: '', _honey: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || t('contact.formError'));
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(t('contact.formError'));
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-900">
      {/* Background Glow */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-cyan-400 text-xs font-semibold mb-3">
            <Send className="w-3.5 h-3.5" />
            <span>{t('contact.sectionTitle')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="mt-3 text-base text-slate-400">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/90 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>{t('contact.directContact')}</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'ar' 
                  ? 'يمكنك التواصل الفوري معي مباشرة عبر القنوات التالية لمناقشة المشاريع والعروض الهندسية:' 
                  : 'Reach out directly through any of the following channels for project inquiries, technical advisory, or partnerships:'}
              </p>

              {/* Direct Channels List */}
              <div className="space-y-3 pt-2">
                
                {/* Email */}
                <a
                  href={`mailto:${PROFILE.socials.email}`}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-blue-950/70 text-blue-400 group-hover:text-cyan-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-300 group-hover:text-cyan-300 block">
                      {t('contact.emailDirect')}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {PROFILE.socials.email}
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={PROFILE.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-emerald-950/70 text-emerald-400 group-hover:text-emerald-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-300 group-hover:text-emerald-300 block">
                      {t('contact.whatsappDirect')}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {PROFILE.socials.whatsappDisplay}
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-600 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-slate-900 text-slate-300 group-hover:text-white">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-300 group-hover:text-white block">
                      {t('contact.githubDirect')}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      github.com/HassanY1010
                    </span>
                  </div>
                </a>

              </div>
            </div>

            {/* SLA / Availability Badge */}
            <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-900/40 flex items-center gap-3 text-xs text-slate-300">
              <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>
                {lang === 'ar' 
                  ? 'متوسط وقت الرد: خلال أقل من 24 ساعة لجميع الاستفسارات التقنية والمشاريع.' 
                  : 'Response Time SLA: Under 24 hours for all architectural and engineering proposals.'}
              </span>
            </div>

          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/90 shadow-2xl relative">
              
              {/* Anti-spam security notice */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800 text-[11px] text-slate-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Sanitized & Encrypted Transmission
                </span>
                <span>TLS 1.3</span>
              </div>

              {/* Status Alerts */}
              {status === 'success' && (
                <div className="p-4 mb-6 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-200 text-xs sm:text-sm flex items-start gap-3 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">{t('contact.formSuccess')}</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 mb-6 rounded-xl bg-red-950/80 border border-red-800 text-red-200 text-xs sm:text-sm flex items-start gap-3 animate-fade-in">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Honeypot field (hidden from humans, catches automated bots) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="_honey">Do not fill this field</label>
                  <input
                    type="text"
                    id="_honey"
                    name="_honey"
                    value={formData._honey}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t('contact.nameLabel')} <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.namePlaceholder')}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t('contact.emailLabel')} <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.emailPlaceholder')}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Requested Service */}
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t('contact.serviceLabel')}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  >
                    <option value="">{t('contact.serviceSelectPlaceholder')}</option>
                    {SERVICES_LIST.map((srv) => (
                      <option key={srv.id} value={srv.title[lang]}>
                        {srv.title[lang]}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t('contact.messageLabel')} <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.messagePlaceholder')}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:opacity-95 rounded-xl shadow-xl shadow-blue-600/30 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {status === 'submitting' ? (
                    <span>{t('contact.sendingBtn')}</span>
                  ) : (
                    <>
                      <span>{t('contact.sendBtn')}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

