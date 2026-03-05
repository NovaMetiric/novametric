import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { Mail, ArrowRight, Loader2, CheckCircle, AlertCircle, Phone, MapPin } from 'lucide-react';
import { SEO } from './SEO';
import { useLanguage } from '../src/translations/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // REPLACE THIS with your Formspree Endpoint URL
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqdgqyj";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }
  };

  return (
    <div className="pt-40 pb-24 px-6 min-h-screen relative overflow-hidden bg-[#030014]">
      <SEO 
        title="Contact NovaMetric | Initiate Your Brand Metamorphosis"
        description="Ready to construct your digital dominance? Contact NovaMetric's strategists for precision-engineered scaling and high-performance growth."
        url="https://novametric.net/contact"
      />
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/5 mb-8">
               <span className="text-[10px] font-black tracking-[0.3em] uppercase text-cyan">{t('contact.badge')}</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9] uppercase text-white">
              {t('contact.title')}
            </h2>
            <p className="text-base md:text-lg text-slate-400 mb-12 max-w-md leading-relaxed font-medium">
              {t('contact.subtext')}
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-cyan transition-colors">
                  <Mail className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">{t('contact.email')}</p>
                  <span className="text-white font-bold tracking-tight">novametricmk@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-cyan transition-colors">
                  <Phone className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">{t('contact.phone')}</p>
                  <span className="text-white font-bold tracking-tight">+389 76 276 005</span>
                </div>
              </div>
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-cyan transition-colors">
                  <MapPin className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">{t('contact.location')}</p>
                  <span className="text-white font-bold tracking-tight">Tetovo, Macedonia</span>
                </div>
              </div>
            </div>
          </div>

          <GlassCard className="p-8 md:p-12 border-white/5 bg-white/[0.01]">
            {status === 'success' ? (
              <div className="text-center py-16 animate-zoom-in">
                <div className="w-20 h-20 rounded-full bg-cyan/10 border border-cyan/20 flex items-center justify-center mx-auto mb-8 animate-pulse-subtle">
                  <CheckCircle className="w-10 h-10 text-cyan" />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tight mb-3">{t('contact.success_title')}</h3>
                <p className="text-slate-400 text-sm tracking-wide">{t('contact.success_msg')}</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-10 text-[10px] font-black uppercase tracking-[0.3em] text-cyan hover:text-white transition-colors"
                >
                  {t('contact.send_another')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-xs font-bold uppercase tracking-wider mb-4 animate-zoom-in">
                    <AlertCircle size={14} />
                    {t('contact.form.error')}
                  </div>
                )}
                <div className="space-y-4">
                  <div className="group">
                    <label htmlFor="name" className="sr-only">{t('contact.form.name')}</label>
                    <input 
                      id="name"
                      name="name"
                      type="text" 
                      placeholder={t('contact.form.name').toUpperCase()} 
                      className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-6 py-5 text-[11px] font-black tracking-[0.2em] text-white focus:outline-none focus:border-cyan transition-all placeholder:text-slate-700 hover:border-white/10" 
                      required 
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="sr-only">{t('contact.form.email')}</label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      placeholder={t('contact.form.email').toUpperCase()} 
                      className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-6 py-5 text-[11px] font-black tracking-[0.2em] text-white focus:outline-none focus:border-cyan transition-all placeholder:text-slate-700 hover:border-white/10" 
                      required 
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="message" className="sr-only">{t('contact.form.message')}</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={4} 
                      placeholder={t('contact.form.message_placeholder').toUpperCase()} 
                      className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-6 py-5 text-[11px] font-black tracking-[0.2em] text-white focus:outline-none focus:border-cyan transition-all placeholder:text-slate-700 hover:border-white/10 resize-none" 
                      required
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'} 
                  className="group relative w-full py-5 bg-[#00D2FF] text-[#030014] font-black rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99] flex justify-center items-center gap-3 uppercase text-[11px] tracking-[0.25em] shadow-[0_10px_40px_rgba(0,210,255,0.2)] hover:shadow-[0_15px_50px_rgba(0,210,255,0.4)] overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10">
                    {status === 'submitting' ? t('contact.form.sending') : t('contact.form.send')}
                  </span>
                  {status === 'submitting' ? (
                    <Loader2 className="w-4 h-4 animate-spin relative z-10" />
                  ) : (
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </button>
                
                <p className="text-[9px] text-center text-slate-600 uppercase tracking-widest pt-2">
                  {t('contact.form.confidential')}
                </p>
              </form>
            )}
          </GlassCard>
        </div>
      </div>
    </div>
  );
};