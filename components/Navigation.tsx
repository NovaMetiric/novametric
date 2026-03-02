import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Logo } from './Logo';
import { Link, NavLink } from 'react-router-dom';

interface NavigationProps {
  // Props removed
}

export const Navigation: React.FC<NavigationProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Insights', to: '/insights' },
    { name: 'Contact', to: '/contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-4 md:px-6 pt-6`}>
        <nav className={`mx-auto max-w-5xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] border border-white/10 rounded-full overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${
          scrolled
          ? 'bg-[#030014]/90 backdrop-blur-3xl border-white/15' 
          : 'bg-white/[0.03] backdrop-blur-md'
        }`}>
          <div className="px-6 md:px-8 py-3 flex justify-between items-center relative z-50">
            
            {/* Brand Logo */}
            <Link 
              to="/"
              className="flex items-center gap-3 cursor-pointer group focus:outline-none" 
              onClick={handleNavClick}
              aria-label="NovaMetric Home"
            >
              <div className="transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110 drop-shadow-[0_0_15px_rgba(0,210,255,0.3)]">
                <Logo size={32} />
              </div>
              <span className="text-sm font-black tracking-tighter uppercase text-white group-hover:text-cyan transition-colors hidden xs:block">
                NovaMetric
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.to}
                  onClick={handleNavClick}
                  className={({ isActive }) => `text-[9px] font-black tracking-[0.2em] transition-all uppercase relative py-2 group ${isActive ? 'text-white' : 'text-slate-500 hover:text-white'}`}
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan transition-all duration-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-40 group-hover:scale-100'}`}></span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="hidden md:block">
              <Link 
                to="/contact"
                onClick={handleNavClick}
                className="flex items-center gap-2 px-6 py-2 bg-white text-black rounded-full text-[9px] font-black tracking-widest hover:bg-cyan hover:text-white transition-all duration-300 uppercase shadow-lg shadow-white/5"
              >
                Start Project
                <ArrowRight size={10} />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden text-white w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-full transition-all focus:outline-none" 
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar Menu */}
      <div 
        className={`fixed inset-0 z-[110] transition-all duration-500 ${
          mobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        <div 
          className={`absolute top-4 bottom-4 right-4 w-[280px] bg-[#030014]/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-[120%]'
          }`}
        >
          <div className="p-8 flex items-center justify-between border-b border-white/5">
            <Link 
              to="/"
              className="focus:outline-none"
              onClick={handleNavClick}
              aria-label="NovaMetric Home"
            >
              <Logo size={28} />
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full text-slate-400 hover:text-white transition-all focus:outline-none"
              aria-label="Close navigation menu"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto px-8 py-10 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.4em] mb-2 border-b border-white/5 pb-2">Menu</p>
              {navLinks.map((link, i) => (
                <NavLink 
                  key={link.name} 
                  to={link.to}
                  onClick={handleNavClick}
                  className={({ isActive }) => `text-lg font-black tracking-[0.1em] transition-all uppercase text-left group flex items-center justify-between py-1 ${
                    mobileMenuOpen ? 'animate-zoom-in' : ''
                  } ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                  style={{ animationDelay: `${i * 50 + 100}ms` }}
                >
                  <span>
                    {link.name}
                  </span>
                </NavLink>
              ))}
            </div>

            <div className={`mt-auto space-y-8 ${mobileMenuOpen ? 'animate-zoom-in' : ''}`} style={{ animationDelay: '350ms' }}>
              <Link 
                to="/contact"
                onClick={handleNavClick}
                className="w-full flex items-center justify-between px-6 py-4 bg-white text-black font-black uppercase text-[10px] tracking-[0.3em] rounded-xl shadow-[0_15px_30px_rgba(255,255,255,0.05)] active:scale-[0.98] transition-transform"
              >
                Inquire
                <ArrowRight size={14} />
              </Link>
              
              <div className="flex justify-between items-center py-4 border-t border-white/5">
                <div className="flex gap-4">
                  <a href="#" className="text-slate-500 hover:text-cyan transition-colors" aria-label="Instagram"><Instagram size={16} /></a>
                  <a href="#" className="text-slate-500 hover:text-cyan transition-colors" aria-label="LinkedIn"><Linkedin size={16} /></a>
                  <a href="#" className="text-slate-500 hover:text-cyan transition-colors" aria-label="Twitter"><Twitter size={16} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
