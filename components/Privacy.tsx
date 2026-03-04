import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { GlassCard } from './GlassCard';

export const Privacy: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-6 bg-[#030014]">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight text-white uppercase">
            Privacy <span className="text-cyan">Policy</span>
          </h1>
          <p className="text-slate-400 font-medium">Last Updated: March 2024</p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <GlassCard className="p-8 md:p-12 space-y-8 text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to monitor and analyze trends and usage.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">3. Sharing of Information</h2>
              <p>
                We do not share your personal information with third parties except as described in this policy or with your consent. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">4. Data Security</h2>
              <p>
                We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">5. Your Choices</h2>
              <p>
                You may opt out of receiving promotional communications from us by following the instructions in those communications. If you opt out, we may still send you non-promotional communications, such as those about our ongoing business relations.
              </p>
            </section>
          </GlassCard>
        </ScrollReveal>
      </div>
    </div>
  );
};
