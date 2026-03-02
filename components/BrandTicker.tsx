import React from 'react';
import { Triangle, Globe, Cpu, Waves, Code, Aperture, Hexagon, Command } from 'lucide-react';

const BRANDS = [
  { name: "Apex Dynamics", icon: Triangle },
  { name: "Zenith Global", icon: Globe },
  { name: "OmniCore", icon: Cpu },
  { name: "Velvet Systems", icon: Waves },
  { name: "Cipher Labs", icon: Code },
  { name: "Aura Ventures", icon: Aperture },
  { name: "Nebula Tech", icon: Hexagon },
  { name: "Quantum Fin", icon: Command }
];

export const BrandTicker: React.FC = () => {
  return (
    <div className="w-full border-t border-white/5 bg-[#030014] py-16 overflow-hidden relative z-20">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030014] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030014] to-transparent z-10"></div>
      
      <div className="flex w-max animate-scroll gap-24 px-16">
        {[...BRANDS, ...BRANDS].map((brand, index) => (
          <div key={index} className="flex items-center gap-4 group cursor-default opacity-40 hover:opacity-100 transition-all duration-500">
            <brand.icon className="w-8 h-8 text-white" />
            <span className="text-2xl font-black text-white whitespace-nowrap uppercase tracking-widest font-serif">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </div>
  );
};