import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { Check, Minus, ArrowRight, Layout, Search, Megaphone, ShieldCheck, X } from 'lucide-react';
import { Service } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { Pricing } from './Pricing';
import { Link } from 'react-router-dom';

const SERVICES: Service[] = [
  {
    id: '1',
    title: "Website Design",
    description: "Modern, fast, and responsive websites designed to convert visitors into clients. Built with clean UI, strong UX, and performance-focused development.",
    fullDescription: "We don't just design websites; we architect digital presence. Our team merges aesthetic brilliance with cognitive psychology to guide users effortlessly from curiosity to conversion.",
    benefits: ["Optimized load times", "Mobile-first architecture", "User-centric layout optimization"],
    deliverables: ["High-Fidelity UI/UX Prototype", "Modern Web Build", "Performance Audit"],
    icon: <Layout className="w-5 h-5 text-cyan" />
  },
  {
    id: '2',
    title: "SEO Optimization",
    description: "Search engine optimization that improves visibility, drives organic traffic, and helps your business rank higher on Google.",
    fullDescription: "Visibility is the foundation of digital growth. We deploy technical SEO structures and strategic keyword analysis that ensure your brand is found by the right audience.",
    benefits: ["Improved search rankings", "Local search optimization", "Technical health checks"],
    deliverables: ["Technical Audit", "Backlink Strategy", "On-page Optimization"],
    icon: <Search className="w-5 h-5 text-cyan" />
  },
  {
    id: '3',
    title: "Social Media Management",
    description: "Strategic content creation and account management that builds brand trust, engagement, and consistent online presence.",
    fullDescription: "Your brand needs a consistent voice to build lasting trust. We curate strategic content plans that resonate with your target audience and foster genuine engagement.",
    benefits: ["Brand trust building", "Consistent online presence", "Targeted audience growth"],
    deliverables: ["Content Strategy", "Social Media Management", "Engagement Reports"],
    icon: <Megaphone className="w-5 h-5 text-cyan" />
  },
  {
    id: '4',
    title: "Full Branding",
    description: "Complete brand identity systems including logo design, color palettes, typography, and visual direction for long-term brand consistency.",
    fullDescription: "A strong brand is a lasting impression. We forge identities that are impossible to ignore, blending visual semantics with strategic positioning to build market authority.",
    benefits: ["Consistent visual identity", "Professional market positioning", "Long-term brand equity"],
    deliverables: ["Identity System", "Brand Guidelines", "Visual Style Guide"],
    icon: <ShieldCheck className="w-5 h-5 text-cyan" />
  }
];

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div className="pt-32 pb-24">
      <section id="services" className="px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-cyan mb-2">What We Do</p>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight uppercase">Precision-Built Solutions</h2>
            </div>
          </ScrollReveal>

          {/* Increased gap-y-16 to ensure no overlapping between rows */}
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
                        View Specification <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                   </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-xl md:text-3xl font-black uppercase mb-4">Service Composition</h2>
              <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em]">Our systematic approach to category growth.</p>
            </div>
            <GlassCard className="overflow-x-auto p-0 border-white/5">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-white/5 bg-white/[0.02]">
                    <th className="p-6 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">Infrastructure</th>
                    <th className="p-6 text-[9px] font-bold uppercase tracking-[0.2em] text-cyan">Starter</th>
                    <th className="p-6 text-[9px] font-bold uppercase tracking-[0.2em] text-purple-400">Growth</th>
                    <th className="p-6 text-[9px] font-bold uppercase tracking-[0.2em] text-yellow-500">Dominance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-[11px] font-medium">
                  {[
                    ["Custom Website Design", true, true, true],
                    ["Social Media Management", "Limited", true, true],
                    ["SEO Optimization", false, "Standard", "Advanced"],
                    ["Brand Identity Design", false, false, true]
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-6 text-slate-300">{row[0]}</td>
                      <td className="p-6">{typeof row[1] === 'boolean' ? (row[1] ? <Check className="w-4 h-4 text-cyan" /> : <Minus className="w-4 h-4 text-slate-700" />) : row[1]}</td>
                      <td className="p-6">{typeof row[2] === 'boolean' ? (row[2] ? <Check className="w-4 h-4 text-purple-400" /> : <Minus className="w-4 h-4 text-slate-700" />) : row[2]}</td>
                      <td className="p-6">{typeof row[3] === 'boolean' ? (row[3] ? <Check className="w-4 h-4 text-yellow-500" /> : <Minus className="w-4 h-4 text-slate-700" />) : row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </GlassCard>
          </ScrollReveal>
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
                  <h4 className="text-cyan font-bold mb-4 uppercase text-[9px] tracking-widest">Core Benefits</h4>
                  <ul className="space-y-2.5">{selectedService.benefits?.map((b, i) => <li key={i} className="text-[11px] text-slate-400 flex items-center gap-2"><Check className="w-3 h-3 text-cyan" /> {b}</li>)}</ul>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                  <h4 className="text-purple-400 font-bold mb-4 uppercase text-[9px] tracking-widest">Deliverables</h4>
                  <ul className="space-y-2.5">{selectedService.deliverables?.map((d, i) => <li key={i} className="text-[11px] text-slate-400 flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full" /> {d}</li>)}</ul>
                </div>
              </div>
              <Link 
                to="/contact"
                onClick={() => setSelectedService(null)} 
                className="w-full py-4 bg-white text-[#030014] font-black uppercase text-[10px] tracking-widest rounded-lg hover:bg-cyan hover:text-white transition-all shadow-lg shadow-white/5 active:scale-95 flex items-center justify-center"
              >
                Initiate Engagement
              </Link>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
};
