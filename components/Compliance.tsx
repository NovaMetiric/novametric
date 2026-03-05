import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { GlassCard } from './GlassCard';
import { Shield, CheckCircle, Lock, Globe } from 'lucide-react';
import { SEO } from './SEO';

export const Compliance: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-6 bg-[#030014]">
      <SEO 
        title="Compliance & Standards | NovaMetric Digital Excellence"
        description="Learn about NovaMetric's commitment to data protection, security, and accessibility standards including GDPR and WCAG."
        url="https://novametric.net/compliance"
      />
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight text-white uppercase">
            Compliance <span className="text-cyan">& Standards</span>
          </h1>
          <p className="text-slate-400 font-medium">Ensuring excellence in digital operations.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            { icon: Shield, title: "Data Protection", desc: "Full GDPR and CCPA alignment in all data processing activities." },
            { icon: Lock, title: "Security First", desc: "Industry-standard encryption and security protocols for all client data." },
            { icon: CheckCircle, title: "Quality Assurance", desc: "Rigorous testing and verification processes for every digital asset." },
            { icon: Globe, title: "Accessibility", desc: "Commitment to WCAG 2.1 standards for inclusive digital experiences." }
          ].map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <GlassCard className="p-8 h-full">
                <item.icon className="text-cyan mb-4" size={32} />
                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <GlassCard className="p-8 md:p-12 space-y-8 text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Our Commitment</h2>
              <p>
                At NovaMetric, we believe that compliance is not just a legal requirement but a cornerstone of trust. We continuously update our processes to meet and exceed global standards in data privacy, security, and accessibility.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Reporting & Transparency</h2>
              <p>
                We maintain transparent reporting for all our compliance activities. If you have any questions regarding our standards or wish to report a concern, please contact our compliance team at novametricmk@gmail.com.
              </p>
            </section>
          </GlassCard>
        </ScrollReveal>
      </div>
    </div>
  );
};
