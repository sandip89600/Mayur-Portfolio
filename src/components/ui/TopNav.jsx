import React from 'react';
import { motion } from 'framer-motion';

export default function TopNav({ onNavigate }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute top-6 sm:top-8 right-6 sm:right-12 z-50 pointer-events-auto"
    >
      <nav className="flex items-center gap-3 p-1.5 rounded-full bg-black/60 backdrop-blur-md border border-gold/30 shadow-[0_4px_20px_rgba(0,0,0,0.8),0_0_15px_rgba(212,175,55,0.1)]">
        <button
          onClick={() => onNavigate('hero')}
          className="px-4 sm:px-5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-gray-300 hover:text-black hover:bg-gradient-to-r hover:from-[#F5D76E] hover:to-[#D4AF37] transition-all duration-300 uppercase cursor-pointer"
        >
          HOME
        </button>
        <button
          onClick={() => onNavigate('contact')}
          className="px-4 sm:px-5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-gray-300 hover:text-black hover:bg-gradient-to-r hover:from-[#F5D76E] hover:to-[#D4AF37] transition-all duration-300 uppercase cursor-pointer"
        >
          CONTACT
        </button>
      </nav>
    </motion.header>
  );
}
