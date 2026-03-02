import React from 'react';
import { Instagram, Linkedin, Twitter, ArrowUpRight, Github, Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';

interface FooterProps {
  // Props removed
}

export const Footer: React.FC<FooterProps> = () => {
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Insights', to: '/insights' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <footer className="relative pt-24 pb-12 px-6 border-t border-white/5 bg-[#030014] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan/5 rounded-[100%] blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 gap-x-8 mb-20">
          <div className="md:col-span-12 lg:col-span-5 space-y-6">
            <Link 
              to="/"
              className="flex items-center gap-3 cursor-pointer group w-fit" 
            >
              <div className="transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110 drop-shadow-[0_0_15px_rgba(0,210,255,0.2)]">
                <Logo size={40} />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase text-white group-hover:text-cyan transition-colors">
                NovaMetric
              </span>
            </Link>
            <p className="text-slate-400 text-[13px] leading-relaxed max-w-sm font-medium">
              Designing digital experiences that help brands grow and stand out online. We focus on results-driven marketing and professional brand development.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {[Instagram, Linkedin, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-full bg-white/[0.03] border border-white/10 hover:border-cyan hover:text-cyan transition-all text-slate-500 hover:bg-cyan/[0.05] hover:scale-110">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-3">
            <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white mb-6 flex items-center gap-3">
              <span className="w-4 h-[1px] bg-cyan"></span>
              Navigation
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link 
                    to={item.to}
                    className="text-[12px] text-slate-500 hover:text-cyan transition-colors flex items-center group gap-2 text-left font-bold"
                  >
                    {item.label} 
                    <ArrowUpRight size={10} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-cyan" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-6 lg:col-span-4">
            <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white mb-6 flex items-center gap-3">
              <span className="w-4 h-[1px] bg-cyan"></span>
              Connect
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3 group">
                <MapPin size={14} className="text-cyan mt-1 shrink-0" />
                <p className="text-[12px] text-slate-400 font-medium leading-relaxed group-hover:text-white transition-colors">
                  Gostivarska br.21 Tetovo 1200
                  Macedonia
                </p>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.location.href = 'mailto:novametricmk@gmail.com'}>
                <Mail size={14} className="text-cyan shrink-0" />
                <p className="text-[12px] text-white font-bold tracking-tight hover:text-cyan transition-colors">
                  novametricmk@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone size={14} className="text-cyan shrink-0" />
                <p className="text-[12px] text-white font-bold tracking-tight">
                  +389 (076) 276-005
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] text-slate-600 font-bold uppercase tracking-[0.2em]">
            © 2024 NOVAMETRIC DIGITAL. SYSTEMS OPTIMIZED.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[9px] text-slate-600 hover:text-white uppercase tracking-widest transition-colors font-bold">Privacy</a>
            <a href="#" className="text-[9px] text-slate-600 hover:text-white uppercase tracking-widest transition-colors font-bold">Terms</a>
            <a href="#" className="text-[9px] text-slate-600 hover:text-white uppercase tracking-widest transition-colors font-bold">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
