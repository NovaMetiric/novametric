import React from 'react';
import { GlassCard } from './GlassCard';
import { ScrollReveal } from './ScrollReveal';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const PLANS = [
  {
    name: "Starter",
    price: "From $499",
    tagline: "Foundation for digital authority.",
    features: [
      "One-page or small business website",
      "Basic SEO setup",
      "Brand color & typography system",
      "Social media starter strategy"
    ],
    cta: "Start Project"
  },
  {
    name: "Growth",
    price: "From $999",
    tagline: "Strategic market expansion.",
    features: [
      "Multi-page website",
      "Advanced SEO optimization",
      "Social media management setup",
      "Content & growth strategy",
      "Performance optimization"
    ],
    cta: "Grow Your Brand",
    highlight: true
  },
  {
    name: "Dominance",
    price: "Custom Pricing",
    tagline: "Complete category ownership.",
    features: [
      "Full website & branding system",
      "SEO strategy & execution",
      "Ongoing social media management",
      "Full brand identity development",
      "Long-term growth strategy"
    ],
    cta: "Book a Call"
  }
];

interface PricingProps {
  // Props removed
}

export const Pricing: React.FC<PricingProps> = () => {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-cyan mb-4">Our Packages</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Strategic Models</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan, idx) => (
            <ScrollReveal key={idx} delay={idx * 150} direction="up" className="h-full flex flex-col">
              <GlassCard 
                className={`relative flex flex-col p-10 h-full border-white/5 hover:border-cyan/30 transition-all ${plan.highlight ? 'ring-1 ring-cyan/20 bg-white/[0.03]' : ''}`}
                spotlight={plan.highlight}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-black uppercase mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                  </div>
                  <p className="text-slate-400 text-xs mt-3 font-medium">{plan.tagline}</p>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact"
                  className={`w-full py-4 rounded-lg font-black uppercase text-[10px] tracking-widest transition-all mt-auto flex items-center justify-center ${
                  plan.highlight 
                  ? 'bg-cyan text-[#030014] shadow-[0_0_30px_rgba(0,210,255,0.2)]' 
                  : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                }`}>
                  {plan.cta}
                </Link>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
