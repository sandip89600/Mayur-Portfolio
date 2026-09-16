import React from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  onClick
}) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={`
        relative rounded-xl overflow-hidden transition-all duration-300
        bg-[#090909]/75 backdrop-blur-xl border border-gold/20
        ${glow ? 'shadow-[0_0_30px_rgba(212,175,55,0.12)] border-gold/40' : 'shadow-[0_10px_30px_rgba(0,0,0,0.8)]'}
        ${hoverEffect ? 'hover:border-gold/50 hover:shadow-[0_15px_35px_rgba(0,0,0,0.9),0_0_25px_rgba(212,175,55,0.18)]' : ''}
        ${className}
      `}
    >
      {/* Subtle top border highlight shine */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      
      {/* Card Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Subtle ambient corner gradient */}
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />
    </motion.div>
  );
}
