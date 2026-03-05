import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { ScrollReveal } from './ScrollReveal';
import { SEO } from './SEO';
import { ArrowRight, X, Clock, Calendar, Share2, Bookmark, Loader2, Check } from 'lucide-react';
import { Article } from '../types';
import { useLanguage } from '../src/translations/LanguageContext';
import { ARTICLES_EN, ARTICLES_MK, ARTICLES_SQ } from '../src/data/articles';

export const Insights: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [savedArticles, setSavedArticles] = useState<string[]>(() => {
    const saved = localStorage.getItem('nova_saved_articles');
    return saved ? JSON.parse(saved) : [];
  });

  const articles = language === 'mk' ? ARTICLES_MK : language === 'sq' ? ARTICLES_SQ : ARTICLES_EN;

  const toggleSave = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
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
         shareUrl = 'https://novametric.net'; 
      }
    } catch (e) {
      shareUrl = 'https://novametric.net';
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
      setSubscribeStatus('idle');
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <SEO 
        title="Strategic Insights & Digital Intel | NovaMetric Hub"
        description="Deep-dives into algorithmic performance, market shifts, and high-performance digital strategies. Stay ahead of the curve with NovaMetric's strategic research."
        url="https://novametric.net/insights"
      />
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-cyan mb-3">{t('insights.badge')}</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">{t('insights.title')}</h2>
            </div>
            <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest border-b border-white/10 pb-2">{t('insights.archived')}</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {articles.map((article, idx) => (
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
                      {t('insights.read_more')} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
                      {t('insights.updated')}
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
                      onClick={(e) => toggleSave(selectedArticle.id, e)}
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
                    <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">{t('insights.author_label')}</p>
                    <p className="text-sm font-bold text-white uppercase">{t('insights.author_name')}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedArticle(null)}
                    className="px-10 py-4 bg-white text-black font-black uppercase text-[10px] tracking-widest rounded-xl hover:bg-cyan hover:text-white transition-all shadow-xl"
                  >
                    {t('insights.back')}
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>
        )}

        <ScrollReveal>
          <GlassCard className="p-12 text-center border-cyan/10 bg-gradient-to-b from-cyan/[0.03] to-transparent max-w-4xl mx-auto">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-black uppercase mb-3">{t('insights.newsletter_title')}</h3>
              <p className="text-slate-400 text-xs mb-8 leading-relaxed">{t('insights.newsletter_subtext')}</p>
              
              {subscribeStatus === 'success' ? (
                <div className="flex items-center justify-center gap-3 text-cyan font-bold uppercase tracking-[0.2em] text-[10px] py-4 animate-zoom-in">
                  <Check size={16} /> {t('insights.newsletter_success')}
                </div>
              ) : (
                <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubscribe}>
                  <input 
                    name="email"
                    type="email" 
                    placeholder={t('insights.newsletter_placeholder').toUpperCase()}
                    required
                    className="flex-grow bg-white/[0.03] border border-white/10 rounded-lg px-5 py-4 text-[9px] font-bold tracking-widest text-white focus:outline-none focus:border-cyan transition-all"
                  />
                  <button 
                    disabled={subscribeStatus === 'submitting'}
                    className="px-10 py-4 bg-cyan text-[#030014] font-black uppercase text-[9px] tracking-widest rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2 min-w-[140px]"
                  >
                    {subscribeStatus === 'submitting' ? <Loader2 className="w-3 h-3 animate-spin" /> : t('insights.newsletter_button')}
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
