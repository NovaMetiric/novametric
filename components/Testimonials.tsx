import React from 'react';
import { GlassCard } from './GlassCard';
import { Testimonial } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { Quote } from 'lucide-react';

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "We spent 3 years trying to break into the APAC market. NovaMetric did it in 3 months. Their data modeling is essentially clairvoyance.",
    author: "Elena Rostova",
    role: "CMO",
    company: "Velvet Systems",
    avatarUrl: "https://i.pravatar.cc/150?u=elena"
  },
  {
    id: '2',
    quote: "I was skeptical about the 'exclusive' tag. I was wrong. The level of attention and the sheer depth of strategy is unlike anything I've seen in 15 years.",
    author: "Marcus Chen",
    role: "Founder",
    company: "Zenith Global",
    avatarUrl: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    id: '3',
    quote: "They don't just run ads; they rewrite the narrative of your industry. Our valuation doubled within a year of starting our partnership.",
    author: "Sarah Jenkins",
    role: "Director of Growth",
    company: "Aura Ventures",
    avatarUrl: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: '4',
    quote: "The ROI was evident within the first 45 days. Their technical SEO squad is in a league of their own. Pure engineering brilliance.",
    author: "David Vark",
    role: "VP Marketing",
    company: "Cipher Labs",
    avatarUrl: "https://i.pravatar.cc/150?u=david"
  },
  {
    id: '5',
    quote: "NovaMetric isn't for everyone. It's for those who want to win at any cost. Their strategy is aggressive, precise, and highly profitable.",
    author: "Sophia Knight",
    role: "CEO",
    company: "OmniCore",
    avatarUrl: "https://i.pravatar.cc/150?u=sophia"
  },
  {
    id: '6',
    quote: "The branding overhaul they executed for us redefined our category. We're no longer just players; we are the benchmark.",
    author: "Julian Thorne",
    role: "COO",
    company: "Nebula Tech",
    avatarUrl: "https://i.pravatar.cc/150?u=julian"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 px-6 relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-20">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-cyan mb-4">The Inner Circle</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Voice of Sovereignty</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              We partner with visionaries. Here is what happens when precision meets ambition.
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