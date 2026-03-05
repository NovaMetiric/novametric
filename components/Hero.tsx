import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../src/translations/LanguageContext';

interface HeroProps {
  // Props removed
}

export const Hero: React.FC<HeroProps> = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 pt-40 pb-20 overflow-hidden bg-[#030014]">
      {/* Background visual subtly matching the screenshot's dark clean look */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-cyan/5 to-black/0 pointer-events-none"></div>
      
      {/* Animated accent orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="max-w-4xl mx-auto z-10 flex flex-col items-center">
        {/* Badge Pill */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-10 transition-colors hover:border-cyan/30 cursor-default group">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] group-hover:scale-125 transition-transform"></div>
          <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#00D2FF]">
            {t('hero.badge')}
          </span>
        </div>
        
        {/* Hero Title - Adjusted sizing for extra small screens to prevent overflow */}
        <h1 className="text-4xl xs:text-5xl md:text-[6.8rem] font-black tracking-tighter leading-[0.85] mb-8 select-none">
          <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">{t('hero.title_nova')}</span><span className="text-[#00D2FF] drop-shadow-[0_0_20px_rgba(0,210,255,0.2)]">{t('hero.title_metric')}</span>
        </h1>
        
        {/* Subtext */}
        <p className="text-sm md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium mb-14 px-4">
          {t('hero.subtext')}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg items-center justify-center">
          <Link 
            to="/contact"
            className="group relative w-full sm:w-auto px-10 py-5 bg-[#00D2FF] text-[#030014] font-black rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 uppercase text-[11px] tracking-[0.2em] shadow-[0_10px_40px_rgba(0,210,255,0.3)] hover:shadow-[0_15px_50px_rgba(0,210,255,0.5)] overflow-hidden"
          >
            <span className="relative z-10">{t('hero.cta_primary')}</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>
          
          <a 
            href="#growth"
            className="w-full sm:w-auto px-10 py-5 rounded-xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all text-white font-bold flex items-center justify-center gap-4 uppercase text-[11px] tracking-[0.2em] active:scale-[0.98] group"
          >
            <div className="w-8 h-8 rounded-full bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
              <Play className="w-3 h-3 fill-[#00D2FF] text-[#00D2FF]" />
            </div>
            {t('hero.cta_secondary')}
          </a>
        </div>
      </div>
    </section>
  );
};
