import React from 'react';
import { GlassCard } from './GlassCard';
import { ScrollReveal } from './ScrollReveal';

export const About: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-6 bg-[#030014]">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <ScrollReveal className="text-center max-w-5xl mx-auto mb-24">
          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tight text-white uppercase">
            Not Just An Agency.<br />
            <span className="bg-gradient-to-r from-[#4f46e5] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              A Force Multiplier.
            </span>
          </h1>
          <p className="text-sm md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium mb-12 px-4">
            NovaMetric was created to help businesses stand out in an overcrowded digital space. We focus on clean design, clear communication, and strategies that deliver real, measurable results.
          </p>
        </ScrollReveal>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-32">
          {[
            { label: "PROJECTS DELIVERED", value: "MULTIPLE INDUSTRIES" },
            { label: "CLIENT REACH", value: "LOCAL & INTERNATIONAL" },
            { label: "PARTNERSHIPS", value: "LONG-TERM" },
            { label: "CLIENT SATISFACTION", value: "HIGH" }
          ].map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <GlassCard className="text-center py-12 bg-white/[0.01] border-white/[0.03]">
                <div className="text-xl md:text-2xl font-black text-white mb-3 tracking-tighter uppercase">{stat.value}</div>
                <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">{stat.label}</div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <ScrollReveal direction="left" className="flex">
            <GlassCard className="p-12 md:p-16 bg-white/[0.01] border-white/[0.03] flex flex-col justify-center w-full">
              <h3 className="text-3xl md:text-4xl font-semibold mb-8 font-serif italic text-white leading-tight">
                Our Strategic Vision
              </h3>
              <div className="space-y-6">
                <p className="text-slate-400 text-sm leading-loose">
                  We believe that digital presence is more than just visuals—it's about building a foundation for growth. We help brands find their unique voice and express it through high-performance digital tools.
                </p>
                <p className="text-slate-400 text-sm leading-loose">
                  Our approach combines creative execution with data-driven strategy. We don't just follow trends; we identify what works for your specific market to ensure sustainable success.
                </p>
              </div>
            </GlassCard>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200} className="flex">
            <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/60 to-transparent z-10 transition-opacity group-hover:opacity-40"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Strategy board" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};