import React from 'react';
import { GlassCard } from './GlassCard';
import { ScrollReveal } from './ScrollReveal';
import { TrendingUp, ArrowRight, Layout, Search, Megaphone, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EvolutionSectionProps {
  // Props removed
}

export const EvolutionSection: React.FC<EvolutionSectionProps> = () => {
  return (
    <section id="growth" className="py-24 px-6 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-cyan mb-4">Market Transformation</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tight">Your Evolution</h2>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">The NovaMetric effect visualized.</p>
          </div>
        </ScrollReveal>

        <div className="space-y-12 mb-24">
          <ScrollReveal direction="up">
            <GlassCard className="p-8 text-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 max-w-2xl mx-auto border-white/5">
              <p className="text-[9px] font-bold tracking-widest uppercase text-slate-500 mb-2">Yesterday</p>
              <h3 className="text-xl font-bold text-slate-400 mb-8 uppercase">Before NovaMetric</h3>
              
              <div className="space-y-3 max-w-sm mx-auto mb-8">
                <div className="h-1 w-full bg-slate-800 rounded-full"></div>
                <div className="h-1 w-3/4 bg-slate-800 rounded-full"></div>
                <div className="h-1 w-5/6 bg-slate-800 rounded-full"></div>
                <div className="h-1 w-1/2 bg-slate-800 rounded-full"></div>
              </div>
              
              <p className="text-[11px] italic text-slate-500 uppercase tracking-tighter">"Stagnant conversion rates and unpredictable ad spend."</p>
            </GlassCard>
          </ScrollReveal>

          <div className="flex flex-col items-center gap-2 text-slate-700">
             <div className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 rotate-90" />
             </div>
          </div>

          <ScrollReveal direction="up" delay={200}>
            <GlassCard className="p-8 text-center border-cyan/20 ring-1 ring-cyan/5 max-w-2xl mx-auto">
              <p className="text-[9px] font-bold tracking-widest uppercase text-cyan mb-2">Tomorrow</p>
              <h3 className="text-xl font-bold text-white mb-10 uppercase">With NovaMetric</h3>
              
              <div className="space-y-3 max-w-sm mx-auto mb-10">
                <div className="h-1 w-full bg-cyan/40 rounded-full"></div>
                <div className="h-1 w-full bg-cyan/60 rounded-full"></div>
                <div className="h-1 w-full bg-cyan/80 rounded-full shadow-[0_0_10px_rgba(0,210,255,0.3)]"></div>
                <div className="h-1 w-full bg-cyan rounded-full shadow-[0_0_15px_rgba(0,210,255,0.5)]"></div>
              </div>

              <div className="inline-block p-6 rounded-xl bg-cyan/[0.03] border border-cyan/10">
                <TrendingUp className="w-6 h-6 text-cyan mx-auto mb-2" />
                <div className="text-3xl font-black text-cyan tracking-tight mb-1">300% GROWTH</div>
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-cyan/70">Optimized Scaling Protocol</p>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>

        {/* Service Preview Section */}
        <ScrollReveal>
          <div className="pt-12 border-t border-white/5">
            <div className="text-center mb-10">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">Service Preview</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Layout, label: 'Design' },
                { icon: Search, label: 'SEO' },
                { icon: Megaphone, label: 'Ads' },
                { icon: ShieldCheck, label: 'Branding' }
              ].map((item, i) => (
                <Link 
                  key={i} 
                  to="/services"
                  className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/5 cursor-pointer hover:bg-cyan/[0.05] hover:border-cyan/20 transition-all group"
                >
                  <item.icon className="w-4 h-4 text-cyan/60 group-hover:text-cyan transition-colors" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
