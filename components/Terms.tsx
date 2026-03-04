import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { GlassCard } from './GlassCard';

export const Terms: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-6 bg-[#030014]">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight text-white uppercase">
            Terms of <span className="text-cyan">Service</span>
          </h1>
          <p className="text-slate-400 font-medium">Last Updated: March 2024</p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <GlassCard className="p-8 md:p-12 space-y-8 text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the NovaMetric website and services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">2. Use of Services</h2>
              <p>
                You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of any account information and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">3. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the property of NovaMetric or its content suppliers and is protected by international copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">4. Limitation of Liability</h2>
              <p>
                NovaMetric shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">5. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Macedonia, without regard to its conflict of law provisions.
              </p>
            </section>
          </GlassCard>
        </ScrollReveal>
      </div>
    </div>
  );
};
