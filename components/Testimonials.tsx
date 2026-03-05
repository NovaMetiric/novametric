import React from 'react';
import { GlassCard } from './GlassCard';
import { Testimonial } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { Quote } from 'lucide-react';
import { useLanguage } from '../src/translations/LanguageContext';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const TESTIMONIALS: Testimonial[] = [
    {
      id: '1',
      quote: t('testimonials.t1.quote'),
      author: t('testimonials.t1.author'),
      role: t('testimonials.t1.role'),
      company: t('testimonials.t1.company'),
      avatarUrl: "https://i.pravatar.cc/150?u=elena"
    },
    {
      id: '2',
      quote: t('testimonials.t2.quote'),
      author: t('testimonials.t2.author'),
      role: t('testimonials.t2.role'),
      company: t('testimonials.t2.company'),
      avatarUrl: "https://i.pravatar.cc/150?u=marcus"
    },
    {
      id: '3',
      quote: t('testimonials.t3.quote'),
      author: t('testimonials.t3.author'),
      role: t('testimonials.t3.role'),
      company: t('testimonials.t3.company'),
      avatarUrl: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      id: '4',
      quote: t('testimonials.t4.quote'),
      author: t('testimonials.t4.author'),
      role: t('testimonials.t4.role'),
      company: t('testimonials.t4.company'),
      avatarUrl: "https://i.pravatar.cc/150?u=david"
    },
    {
      id: '5',
      quote: t('testimonials.t5.quote'),
      author: t('testimonials.t5.author'),
      role: t('testimonials.t5.role'),
      company: t('testimonials.t5.company'),
      avatarUrl: "https://i.pravatar.cc/150?u=sophia"
    },
    {
      id: '6',
      quote: t('testimonials.t6.quote'),
      author: t('testimonials.t6.author'),
      role: t('testimonials.t6.role'),
      company: t('testimonials.t6.company'),
      avatarUrl: "https://i.pravatar.cc/150?u=julian"
    }
  ];

  return (
    <section id="testimonials" className="py-32 px-6 relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-20">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-cyan mb-4">{t('testimonials.badge')}</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">{t('testimonials.title')}</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              {t('testimonials.subtext')}
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Infinite Looping Testimonial Track */}
      <div className="relative w-full overflow-hidden pb-12">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030014] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030014] to-transparent z-10"></div>
        
        <div className="flex w-max gap-8 px-8 animate-loop-scroll">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
            <GlassCard key={`${t.id}-${idx}`} className="w-[380px] md:w-[450px] shrink-0 p-10 flex flex-col border-white/5 hover:border-cyan/20 group transition-all duration-500">
              <div className="mb-8">
                <Quote className="w-10 h-10 text-cyan/20 group-hover:text-cyan/40 transition-colors" />
              </div>
              <p className="text-slate-300 text-base italic leading-relaxed mb-10 flex-grow font-medium">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img src={t.avatarUrl} alt={t.author} referrerPolicy="no-referrer" className="w-14 h-14 rounded-full border-2 border-white/10 group-hover:border-cyan/40 relative z-10 transition-colors" />
                </div>
                <div>
                  <h4 className="font-black text-white uppercase tracking-wider text-sm">{t.author}</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">{t.role} — {t.company}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes loop-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-loop-scroll {
          animation: loop-scroll 45s linear infinite;
        }
        .animate-loop-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};