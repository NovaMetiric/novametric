import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { Check, Minus, ArrowRight, Layout, Search, Megaphone, ShieldCheck, X } from 'lucide-react';
import { Service } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { Pricing } from './Pricing';
import { SEO } from './SEO';
import { Link } from 'react-router-dom';
import { useLanguage } from '../src/translations/LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const SERVICES: Service[] = [
    {
      id: '1',
      title: t('services.web.title'),
      description: t('services.web.desc'),
      fullDescription: t('services.web.full_desc'),
      benefits: [t('services.web.f1'), t('services.web.f2'), t('services.web.f3')],
      deliverables: [t('services.web.d1'), t('services.web.d2'), t('services.web.d3')],
      icon: <Layout className="w-5 h-5 text-cyan" />
    },
    {
      id: '2',
      title: t('services.seo.title'),
      description: t('services.seo.desc'),
      fullDescription: t('services.seo.full_desc'),
      benefits: [t('services.seo.f1'), t('services.seo.f2'), t('services.seo.f3')],
      deliverables: [t('services.seo.d1'), t('services.seo.d2'), t('services.seo.d3')],
      icon: <Search className="w-5 h-5 text-cyan" />
    },
    {
      id: '3',
      title: t('services.social.title'),
      description: t('services.social.desc'),
      fullDescription: t('services.social.full_desc'),
      benefits: [t('services.social.f1'), t('services.social.f2'), t('services.social.f3')],
      deliverables: [t('services.social.d1'), t('services.social.d2'), t('services.social.d3')],
      icon: <Megaphone className="w-5 h-5 text-cyan" />
    },
    {
      id: '4',
      title: t('services.branding.title'),
      description: t('services.branding.desc'),
      fullDescription: t('services.branding.full_desc'),
      benefits: [t('services.branding.f1'), t('services.branding.f2'), t('services.branding.f3')],
      deliverables: [t('services.branding.d1'), t('services.branding.d2'), t('services.branding.d3')],
      icon: <ShieldCheck className="w-5 h-5 text-cyan" />
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <SEO 
        title="Digital Marketing Services | Web Design, SEO & Branding"
        description="Explore NovaMetric's precision-built digital solutions. We offer premium website design, strategic SEO optimization, social media management, and full brand identity systems."
        url="https://novametric.net/services"
      />
      <section id="services" className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-cyan mb-2">{t('services.badge')}</p>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight uppercase">{t('services.title')}</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 items-stretch">
            {SERVICES.map((service, idx) => (
              <ScrollReveal key={service.id} delay={idx * 100} className="h-full flex flex-col">
                <GlassCard hoverEffect={true} className="group p-7 md:p-9 border-white/5 hover:border-cyan/20 h-full">
                   <div className="flex flex-col h-full">
                      <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-cyan/10 group-hover:border-cyan/20">
                         {service.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-3 uppercase tracking-tight">{service.title}</h3>
                      <p className="text-[12px] text-slate-400 leading-relaxed font-medium mb-10">{service.description}</p>
                      <button 
                        onClick={() => setSelectedService(service)} 
                        className="mt-auto inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-cyan group-hover:translate-x-1 transition-transform"
                      >
                        {t('services.view_spec')} <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                   </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Pricing />

      {selectedService && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-[#030014]/90 backdrop-blur-xl">
          <div className="absolute inset-0" onClick={() => setSelectedService(null)}></div>
          <GlassCard className="w-full max-w-2xl relative border-cyan/20">
            <button onClick={() => setSelectedService(null)} className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"><X /></button>
            <div className="space-y-8 p-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan/10 rounded-xl border border-cyan/20">{selectedService.icon}</div>
                <h3 className="text-2xl font-black uppercase tracking-tight">{selectedService.title}</h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-[13px]">{selectedService.fullDescription}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
                <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                  <h4 className="text-cyan font-bold mb-4 uppercase text-[9px] tracking-widest">{t('services.benefits')}</h4>
                  <ul className="space-y-2.5">{selectedService.benefits?.map((b, i) => <li key={i} className="text-[11px] text-slate-400 flex items-center gap-2"><Check className="w-3 h-3 text-cyan" /> {b}</li>)}</ul>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                  <h4 className="text-purple-400 font-bold mb-4 uppercase text-[9px] tracking-widest">{t('services.deliverables')}</h4>
                  <ul className="space-y-2.5">{selectedService.deliverables?.map((d, i) => <li key={i} className="text-[11px] text-slate-400 flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full" /> {d}</li>)}</ul>
                </div>
              </div>
              <Link 
                to="/contact"
                onClick={() => setSelectedService(null)} 
                className="w-full py-4 bg-white text-[#030014] font-black uppercase text-[10px] tracking-widest rounded-lg hover:bg-cyan hover:text-white transition-all shadow-lg shadow-white/5 active:scale-95 flex items-center justify-center"
              >
                {t('services.initiate')}
              </Link>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
};
