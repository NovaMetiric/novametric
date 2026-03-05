import React from 'react';
import { Hero } from './Hero';
import { BrandTicker } from './BrandTicker';
import { EvolutionSection } from './EvolutionSection';
import { Testimonials } from './Testimonials';
import { ScrollReveal } from './ScrollReveal';
import { GlassCard } from './GlassCard';
import { SEO } from './SEO';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../src/translations/LanguageContext';

export const Home: React.FC = () => {
  const { t } = useLanguage();
  const [subscribeStatus, setSubscribeStatus] = React.useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribeStatus('submitting');
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/mykdqkyn";
    const formData = new FormData(e.currentTarget);
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      setSubscribeStatus('success');
    } catch (error) {
      console.error("Subscription error:", error);
      setSubscribeStatus('idle');
    }
  };

  return (
    <>
      <SEO 
        title="NovaMetric | High-Performance Digital Marketing & Branding Agency"
        description="NovaMetric is an elite digital marketing agency specializing in high-performance web design, strategic SEO, and data-driven branding. Transform your online presence with NovaMetric's precision-engineered growth strategies."
        keywords="NovaMetric, NovaMetric.net, digital marketing agency, premium web design, SEO experts, brand strategy, growth marketing, high-performance websites, digital branding, NovaMetric agency"
        url="https://novametric.net"
      />
      <Hero />
      <BrandTicker />
      <EvolutionSection />
      
      <section id="manifesto" className="py-32 px-6 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[150px] -z-10"></div>
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/5 mb-10">
               <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-500">{t('home.manifesto_badge')}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif italic mb-10 leading-tight text-white max-w-4xl mx-auto">
              {t('home.manifesto_title')}
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="max-w-2xl mx-auto">
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-12 font-medium">
                {t('home.manifesto_subtext')}
              </p>
              
              <Link 
                to="/about"
                className="group flex items-center gap-3 mx-auto text-[11px] font-black uppercase tracking-[0.3em] text-white hover:text-cyan transition-colors w-fit"
              >
                {t('home.manifesto_cta')} 
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-cyan transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Testimonials />

      <section id="newsletter" className="pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <GlassCard className="p-10 md:p-14 text-center border-cyan/10 bg-gradient-to-b from-cyan/[0.03] to-transparent">
              <div className="max-w-2xl mx-auto">
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-cyan mb-4">{t('home.newsletter_badge')}</p>
                <h3 className="text-2xl font-black uppercase mb-4">{t('home.newsletter_title')}</h3>
                <p className="text-slate-400 text-[13px] mb-8 leading-relaxed">
                  {t('home.newsletter_subtext')}
                </p>
                
                {subscribeStatus === 'success' ? (
                  <div className="flex items-center justify-center gap-3 text-cyan font-bold uppercase tracking-[0.2em] text-[10px] py-4 animate-zoom-in">
                    <Check size={16} /> {t('home.newsletter_success')}
                  </div>
                ) : (
                  <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubscribe}>
                    <input 
                      name="email"
                      type="email" 
                      placeholder={t('home.newsletter_placeholder')}
                      required
                      className="flex-grow bg-white/[0.03] border border-white/10 rounded-lg px-5 py-4 text-[10px] font-bold tracking-widest text-white focus:outline-none focus:border-cyan transition-all"
                    />
                    <button 
                      disabled={subscribeStatus === 'submitting'}
                      className="px-10 py-4 bg-cyan text-[#030014] font-black uppercase text-[10px] tracking-widest rounded-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 min-w-[160px]"
                    >
                      {subscribeStatus === 'submitting' ? <Loader2 className="w-3 h-3 animate-spin" /> : t('home.newsletter_button')}
                    </button>
                  </form>
                )}
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};
