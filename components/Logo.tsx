import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 32 }) => {
  // Use the exact image provided by the user for perfect brand fidelity
  const logoUrl = "https://i.ibb.co/hRSgzXtM/Chat-GPT-Image-Dec-29-2025-01-30-19-AM.png";

  return (
    <div 
      className={`relative inline-block group ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Brand-colored glow effect on hover */}
      <div 
        className="absolute inset-0 bg-cyan/20 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
      />
      <img 
        src={logoUrl} 
        alt="NovaMetric Logo" 
        referrerPolicy="no-referrer"
        className="relative z-10 w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
};