import React from 'react';
import { motion } from 'framer-motion';

export default function GoldButton({
  children,
  onClick,
  href,
  variant = 'gradient-pill', // 'gradient-pill' | 'outline-pill' | 'gold-filled' | 'gold-pill' | 'gold-outline' | 'primary' | 'secondary'
  className = '',
  icon: Icon,
  type = 'button',
  size = 'md'
}) {
  const sizeClasses = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-base font-semibold'
  }[size] || 'px-7 py-3.5 text-sm';

  const baseStyles = `
    relative inline-flex items-center justify-center gap-2.5 font-medium tracking-wide
    transition-all duration-300 rounded-full overflow-hidden group cursor-pointer select-none
    ${sizeClasses}
  `;

  const variantStylesMap = {
    'gradient-pill': `
      bg-gradient-to-r from-[#00D2FF] via-[#3A7BD5] to-[#7F00FF] text-white font-semibold
      shadow-[0_0_25px_rgba(0,210,255,0.4)] hover:shadow-[0_0_35px_rgba(0,210,255,0.6)]
      border border-cyan-400/30 hover:brightness-110
    `,
    'outline-pill': `
      bg-[#080d1a]/80 text-gray-200 border border-white/20 hover:border-cyan-400/60 hover:text-white
      backdrop-blur-md hover:bg-[#0c1428] hover:shadow-[0_0_20px_rgba(0,210,255,0.2)]
    `,
    'gold-filled': `
      bg-gradient-to-r from-[#F5D76E] via-[#D4AF37] to-[#C9A227] text-black font-semibold
      shadow-[0_0_25px_rgba(245,215,110,0.4)] hover:shadow-[0_0_35px_rgba(245,215,110,0.6)]
      border border-yellow-300/40 hover:brightness-110
    `,
    'gold-pill': `
      bg-gradient-to-r from-[#F5D76E] via-[#D4AF37] to-[#C9A227] text-black font-semibold
      shadow-[0_0_25px_rgba(245,215,110,0.4)] hover:shadow-[0_0_35px_rgba(245,215,110,0.6)]
      border border-yellow-300/40 hover:brightness-110
    `,
    'gold-outline': `
      bg-[#070707]/80 text-gray-200 border border-gold/40 hover:border-gold hover:text-[#F5D76E]
      backdrop-blur-md hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]
    `,
    primary: `
      bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-semibold
      shadow-[0_0_25px_rgba(0,198,255,0.4)] hover:shadow-[0_0_35px_rgba(0,198,255,0.6)]
      border border-cyan-400/30
    `,
    secondary: `
      bg-[#090d16]/80 text-gray-300 border border-white/20 hover:border-cyan-400/50 hover:text-white
      backdrop-blur-md hover:shadow-[0_0_15px_rgba(0,210,255,0.2)]
    `
  };

  const selectedVariantStyle = variantStylesMap[variant] || variantStylesMap['gradient-pill'];

  const content = (
    <>
      {/* Subtle shine sweep */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
      
      {/* Button text & icon */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`${baseStyles} ${selectedVariantStyle} ${className}`}
        onClick={onClick}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`${baseStyles} ${selectedVariantStyle} ${className}`}
    >
      {content}
    </motion.button>
  );
}
