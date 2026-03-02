import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { ScrollReveal } from './ScrollReveal';
import { ArrowRight, X, Clock, Calendar, Share2, Bookmark, Loader2, Check } from 'lucide-react';
import { Article } from '../types';

export const ARTICLES: Article[] = [
  {
    id: 'seo-future-2025',
    category: "SEO",
    date: "Apr 05, 2024",
    readingTime: "10 min read",
    title: "Beyond Keywords: Architecting Search Authority in 2025",
    description: "How to transition from simple ranking to becoming a recognized brand entity in the age of AI-driven search engines.",
    fullContent: `The traditional 'keyword-first' approach to SEO is dying. In its place, Google is prioritizing 'Entities' and 'Brand Authority'. 

NovaMetric's 2025 SEO Framework focuses on E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) at a structural level. We don't just optimize pages; we optimize your brand's footprint across the entire web.

Key Pillars of the 2025 Strategy:
1. SGE Optimization: Crafting content that AI models (Search Generative Experience) can cite as a primary source.
2. Zero-Click Content: Providing instant value in search results to build brand recognition even when users don't click through.
3. Conversational Semantic Search: Aligning your content with the natural way humans ask complex questions.`,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 'design-roi-1',
    category: "Design",
    date: "Apr 18, 2024",
    readingTime: "7 min read",
    title: "Visual Syntax: The ROI of High-Performance Web Design",
    description: "Why premium aesthetics and fast-loading glassmorphism interfaces drive 40% higher conversion rates for luxury brands.",
    fullContent: `Design is not just how it looks; it is how it converts. A high-performance website serves as a digital silent salesman, working 24/7 to qualify leads.

At NovaMetric, we use 'Visual Syntax' to guide a user's eye toward your primary call-to-action. By leveraging depth, blur, and motion, we create a hierarchy of information that reduces friction in the buyer's journey.

Strategic Design Principles:
1. Cognitive Load Reduction: Simplifying complex data through intuitive UI.
2. Micro-Interactions: Using subtle animations to reward user engagement.
3. Speed as a Feature: Every millisecond of load time correlates to revenue. Our glass-effect builds are optimized for sub-second rendering.`,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 'ml-ads-1',
    category: "Growth",
    date: "Apr 28, 2024",
    readingTime: "9 min read",
    title: "Predictive Bidding: ML in High-Ticket Ad Systems",
    description: "Using machine learning models to forecast CPA and LTV before entering the ad auction.",
    fullContent: `Stop bidding on clicks; start bidding on outcomes. Our proprietary ARES framework integrates machine learning to analyze historical conversion signals, allowing us to identify high-value users with 92% accuracy before they ever click your ad.

This 'Predictive Bidding' shift moves your budget from speculative spend to strategic investment, ensuring every dollar is fighting for a user with a high probability of conversion.

Technical Integration:
1. Server-Side Tracking: Capturing 100% of conversion data bypassing browser limitations.
2. Custom Attribution Models: Understanding the true path to purchase in complex B2B cycles.
3. Dynamic Budget Allocation: Automatically shifting funds to high-intent clusters in real-time.`,
    image: "https://images.unsplash.com/photo-1518186239717-2e9b1367ae81?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 'social-arbitrage-1',
    category: "Social Media",
    date: "May 02, 2024",
    readingTime: "9 min read",
    title: "Attention Arbitrage: Mastering Social Algorithms for B2B",
    description: "A deep dive into why LinkedIn and Instagram are the new frontiers for high-ticket client acquisition.",
    fullContent: `B2B marketing is no longer about boring whitepapers. It is about 'Attention Arbitrage'—capturing high-value eyeballs in spaces traditionally reserved for B2C.

We treat social media as a high-frequency trading floor. We identify trending conversational themes and insert your brand's authority into the narrative before the algorithm saturates the topic.

The Protocol:
1. Thought Leadership at Scale: Transforming your C-suite into industry influencers.
2. Short-Form Insight Bursts: Delivering technical value in <60 seconds.
3. Community Moats: Building private spaces where your audience interacts with your brand directly.`,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 'branding-moat-1',
    category: "Branding",
    date: "May 15, 2024",
    readingTime: "12 min read",
    title: "The Brand Moat: Defensive Branding Strategy",
    description: "How a distinct visual and verbal identity acts as a protective barrier against market shifts.",
    fullContent: `In a saturated market, your brand is your only sustainable competitive advantage. Commodities compete on price; brands compete on value.

A 'Brand Moat' is built through consistent, high-end touchpoints that signal quality and reliability. When a customer chooses you over a cheaper alternative, they are buying into your brand narrative.

Architectural Elements:
1. Verbal Identity: Developing a unique vocabulary that only your brand uses.
2. Visual Sovereignty: A design system so distinct that it is recognizable even without a logo.
3. Emotional Resonance: Connecting with your audience's aspirations, not just their needs.`,
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 'vertical-video-1',
    category: "Social Media",
    date: "May 22, 2024",
    readingTime: "6 min read",
    title: "The Vertical Shift: Short-Form Psychology",
    description: "Why vertical video has a 3x higher retention rate and how to engineer virality for corporate brands.",
    fullContent: `The human brain processes vertical video as 'intimate' content. By utilizing the 9:16 aspect ratio with high-production value, we bypass the 'advertisement filter' in the user's mind.

At NovaMetric, we engineer 'Hook Intervals'—visual or auditory pattern interrupts every 3 seconds—to maintain peak dopamine levels and ensure your message reaches the final CTA.

Retention Tactics:
1. The 1-Second Hook: Capturing attention before the first blink.
2. Subtitles as Art: Using typography to drive home key technical points.
3. Looping Logic: Creating content that demands a second watch.`,
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 'regional-strategy-2',
    category: "Strategy",
    date: "Jun 01, 2024",
    readingTime: "11 min read",
    title: "The Balkan Digital Frontier: Market Sovereignty",
    description: "Specific strategies for brands looking to expand within Macedonia and the surrounding Balkan region.",
    fullContent: `Macedonia and its neighbors represent a high-growth 'Frontier Market'. However, standard Western strategies often fail here due to unique cultural behaviors.

NovaMetric's 'Balkan Blueprint' leverages local ISP data and behavioral insights to create campaigns that resonate with regional sensibilities while maintaining global standards.

Key Regional Tactics:
1. Multilingual Semantic Search: Mastering the transition between Cyrillic and Latin search habits.
2. Local Trust Signals: Integrating regional social proof and community-based verification.
3. Mobile-First Optimization: In a region where mobile penetration outpaces desktop, the mobile experience is the primary brand.`,
    image: "https://images.unsplash.com/photo-1558444479-c848259275a5?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 'cro-science-1',
    category: "Growth",
    date: "Jun 10, 2024",
    readingTime: "8 min read",
    title: "Conversion Architecture: The Science of 'Yes'",
    description: "Using heatmaps, A/B testing, and eye-tracking to increase your revenue without increasing your traffic.",
    fullContent: `Traffic is expensive. Conversions are efficient. Most brands leave millions on the table by ignoring the micro-frictions on their checkout and landing pages.

Our CRO (Conversion Rate Optimization) process involves a rigorous 14-day audit of your user journey, identifying 'Value Leaks' where users abandon ship. By fixing these structural flaws, we often double the ROI of existing ad spend without adding a penny to the media budget.`,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 'email-assets-1',
    category: "Marketing",
    date: "Jun 20, 2024",
    readingTime: "10 min read",
    title: "Owned Media: Retention as the New Growth",
    description: "Moving from rented social audiences to owned high-value email assets for long-term LTV.",
    fullContent: `If you don't own your audience's data, you don't own your business. We help brands migrate from algorithmic reliance to first-party data ownership. 

Through advanced segmentation and behavioral triggers, we build automated email ecosystems that nurture leads while you sleep, turning one-time buyers into brand evangelists.

Strategy Pillars:
1. High-Value Lead Magnets: Exchanging elite insights for direct access.
2. Behavior-Based Flow: Sending the right message at the exact moment of intent.
3. LTV Optimization: Maximizing the revenue potential of every existing customer.`,
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 'reputation-1',
    category: "Branding",
    date: "Jul 05, 2024",
    readingTime: "7 min read",
    title: "Reputation Sovereignty: Digital Crisis Control",
    description: "How to protect and rebuild brand authority in the high-velocity social media era.",
    fullContent: `A brand's reputation can be dismantled in 280 characters. 'Reputation Sovereignty' is the proactive practice of building a digital fortress around your name.

We monitor social sentiment in real-time to identify potential threats before they go viral, deploying narrative-shifting assets to maintain your brand's integrity.`,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 'ecommerce-future-1',
    category: "E-Commerce",
    date: "Jul 15, 2024",
    readingTime: "9 min read",
    title: "Headless Retail: The Performance Frontier",
    description: "Why the separation of frontend and backend is the only way to survive the next decade of digital commerce.",
    fullContent: `The 'All-in-One' store platforms are becoming bottlenecks. To achieve the speeds required for high-conversion e-commerce, brands are moving to 'Headless' architectures.

This allows for absolute design freedom without sacrificing the rock-solid security of enterprise backends. It is the gold standard for high-volume retailers.`,
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 'influencer-balkan-1',
    category: "Social Media",
    date: "Aug 01, 2024",
    readingTime: "8 min read",
    title: "Influencer ROI: The Balkan Micro-Strategy",
    description: "Why mid-size creators in Skopje and Bitola are outperforming international celebrities in engagement.",
    fullContent: `In the Macedonian market, trust is local. We have identified a 'Golden Tier' of regional creators who command a level of community trust that massive global influencers simply cannot match.

Our 'Local Pulse' strategy connects your brand with these key nodes of influence, driving high-intent traffic that converts at a 4x higher rate than standard display ads.`,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 'art-1',
    category: "Growth",
    date: "Oct 12, 2023",
    readingTime: "8 min read",
    title: "The Algorithmic Advantage: Scaling Logic",
    description: "How leading brands are leveraging AI to predict consumer behavior and outpace competitors.",
    fullContent: `Manual optimization is a relic. We are moving toward a 'Predictive Commerce' era where data doesn't just describe the past, it dictates the future. NovaMetric's proprietary 'ARES' engine allows us to map customer lifetime value before the first purchase is even made.`,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 'art-2',
    category: "Design",
    date: "Nov 05, 2023",
    readingTime: "6 min read",
    title: "Glassmorphism in Modern Luxury",
    description: "Depth, transparency, and the future of premium interface design for high-end consumers.",
    fullContent: `Transparency is the new currency of trust. Glassmorphism is a psychological signal of 'Open Architecture'. When a user interacts with a frosted glass interface, they perceive a layering of information that mirrors high-end physical environments.`,
    image: "https://images.unsplash.com/photo-1541462608141-ad4d4f65f7c1?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 'macedonia-seo-1',
    category: "Local SEO",
    date: "Jan 15, 2024",
    readingTime: "9 min read",
    title: "SEO Skopje: Dominating Local Search",
    description: "Strategic blueprint for capturing 80% of local search intent in Skopje through technical SEO.",
    fullContent: `The Macedonian digital market is at a tipping point. Businesses in Skopje are realizing that 'Standard SEO' isn't enough to beat the increasing regional competition. Dominating search in Macedonia requires a dual-track strategy: Technical Precision and Cultural Localization.`,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
  }
];

export const Insights: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [savedArticles, setSavedArticles] = useState<string[]>(() => {
    const saved = localStorage.getItem('nova_saved_articles');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleSave = (id: string) => {
    const newSaved = savedArticles.includes(id) 
      ? savedArticles.filter(aid => aid !== id)
      : [...savedArticles, id];
    setSavedArticles(newSaved);
    localStorage.setItem('nova_saved_articles', JSON.stringify(newSaved));
  };

  const handleShare = async (article: Article) => {
    let shareUrl = window.location.href;
    try {
      const urlObj = new URL(shareUrl);
      if (urlObj.protocol === 'about:' || urlObj.protocol === 'blob:') {
         shareUrl = 'https://novametric.agency'; 
      }
    } catch (e) {
      shareUrl = 'https://novametric.agency';
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: `NovaMetric | ${article.title}`,
          text: article.description,
          url: shareUrl,
        });
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          copyToClipboard(shareUrl);
        }
      }
    } else {
      copyToClipboard(shareUrl);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Clipboard copy failed", err);
    }
  };

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribeStatus('submitting');
    
    // REPLACE THIS with your Formspree Endpoint URL
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/mykdqkyn";
    
    const formData = new FormData(e.currentTarget);
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      setSubscribeStatus('success');
    } catch (error) {
      console.error("Subscription error:", error);
      setSubscribeStatus('idle'); // Fallback on error
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-cyan mb-3">Intel Hub</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Strategic Insights</h2>
            </div>
            <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest border-b border-white/10 pb-2">Archived Research Available for Partners</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {ARTICLES.map((article, idx) => (
            <ScrollReveal key={article.id} delay={idx * 50} direction="up">
              <GlassCard 
                className="group p-0 overflow-hidden h-full flex flex-col border-white/5 hover:border-cyan/20 cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute top-3 left-3 z-20 px-2 py-1 bg-cyan/10 backdrop-blur-md border border-cyan/20 rounded-sm">
                    <span className="text-[7px] font-black uppercase tracking-[0.2em] text-cyan">{article.category}</span>
                  </div>
                  <img 
                    src={article.image} 
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-7 flex flex-col flex-grow">
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-slate-800"></span> {article.date}
                  </p>
                  <h3 className="text-base font-bold mb-4 group-hover:text-cyan transition-colors leading-tight uppercase">{article.title}</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed mb-8 flex-grow line-clamp-3">{article.description}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <button className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-white group-hover:text-cyan transition-colors">
                      Read Analysis <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <span className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">{article.readingTime}</span>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {selectedArticle && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-[#030014]/95 backdrop-blur-2xl animate-fade-in">
            <div className="absolute inset-0" onClick={() => setSelectedArticle(null)}></div>
            <GlassCard className="w-full max-w-4xl max-h-[90vh] overflow-y-auto relative border-white/10 p-0 shadow-2xl">
              <button 
                onClick={() => setSelectedArticle(null)} 
                className="absolute top-6 right-6 z-50 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white"
              >
                <X size={20} />
              </button>

              <div className="relative h-64 md:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/40 to-transparent z-10"></div>
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="flex gap-4 mb-4">
                     <span className="px-3 py-1 bg-cyan/20 border border-cyan/30 rounded text-[9px] font-black text-cyan uppercase tracking-widest">
                       {selectedArticle.category}
                     </span>
                     <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-black text-slate-300 uppercase tracking-widest">
                       {selectedArticle.readingTime}
                     </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight max-w-2xl">
                    {selectedArticle.title}
                  </h3>
                </div>
              </div>

              <div className="p-8 md:p-12 space-y-10">
                <div className="flex items-center justify-between border-b border-white/5 pb-6">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                      <Calendar size={12} className="text-cyan" />
                      {selectedArticle.date}
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                      <Clock size={12} className="text-cyan" />
                      UPDATED LIVE
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 bg-white/[0.03] border border-white/5 rounded-xl p-1 shadow-inner">
                    <button 
                      onClick={() => handleShare(selectedArticle)}
                      className="p-2.5 hover:bg-white/5 rounded-lg transition-all text-slate-400 hover:text-cyan active:scale-90"
                    >
                      <Share2 size={16} />
                    </button>
                    <button 
                      onClick={() => toggleSave(selectedArticle.id)}
                      className={`p-2.5 hover:bg-white/5 rounded-lg transition-all active:scale-90 ${savedArticles.includes(selectedArticle.id) ? 'text-cyan' : 'text-slate-400'}`}
                    >
                      <Bookmark size={16} fill={savedArticles.includes(selectedArticle.id) ? "currentColor" : "none"} />
                    </button>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <div className="relative pl-6 py-2 mb-8">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan rounded-full shadow-[0_0_10px_rgba(0,210,255,0.5)]"></div>
                    <p className="text-slate-300 text-lg leading-relaxed italic font-medium">
                      {selectedArticle.description}
                    </p>
                  </div>
                  <div className="text-slate-400 text-base leading-loose whitespace-pre-line">
                    {selectedArticle.fullContent}
                  </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row gap-6 items-center justify-between">
                  <div className="text-center md:text-left">
                    <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Author / Strategic Analyst</p>
                    <p className="text-sm font-bold text-white uppercase">V. Sterling, Chief Growth Architect</p>
                  </div>
                  <button 
                    onClick={() => setSelectedArticle(null)}
                    className="px-10 py-4 bg-white text-black font-black uppercase text-[10px] tracking-widest rounded-xl hover:bg-cyan hover:text-white transition-all shadow-xl"
                  >
                    Return to Library
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>
        )}

        <ScrollReveal>
          <GlassCard className="p-12 text-center border-cyan/10 bg-gradient-to-b from-cyan/[0.03] to-transparent max-w-4xl mx-auto">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-black uppercase mb-3">Join The Intel List</h3>
              <p className="text-slate-400 text-xs mb-8 leading-relaxed">Weekly deep-dives into algorithmic performance and market shifts. No fluff. Just alpha for the digital elite.</p>
              
              {subscribeStatus === 'success' ? (
                <div className="flex items-center justify-center gap-3 text-cyan font-bold uppercase tracking-[0.2em] text-[10px] py-4 animate-zoom-in">
                  <Check size={16} /> Welcome to the Inner Circle
                </div>
              ) : (
                <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubscribe}>
                  <input 
                    name="email"
                    type="email" 
                    placeholder="YOUR SECURE EMAIL"
                    required
                    className="flex-grow bg-white/[0.03] border border-white/10 rounded-lg px-5 py-4 text-[9px] font-bold tracking-widest text-white focus:outline-none focus:border-cyan transition-all"
                  />
                  <button 
                    disabled={subscribeStatus === 'submitting'}
                    className="px-10 py-4 bg-cyan text-[#030014] font-black uppercase text-[9px] tracking-widest rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2 min-w-[140px]"
                  >
                    {subscribeStatus === 'submitting' ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Join Circle'}
                  </button>
                </form>
              )}
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </div>
  );
};