import React from 'react';
import { motion } from 'framer-motion';

export default function SectionIndicator({ activeSection, sections = [] }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      aria-label="Section Navigation" 
      className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-5 pointer-events-auto select-none"
    >
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center gap-3 py-1 cursor-pointer focus:outline-none"
            aria-label={`Scroll to ${section.label}`}
          >
            {/* Label revealed on hover or active */}
            <span
              className={`text-[10px] font-mono tracking-widest uppercase transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                isActive ? 'opacity-100 text-[#F5D76E]' : 'text-gray-400'
              }`}
            >
              {section.label}
            </span>

            {/* Indicator Dot / Bar */}
            <div className="relative flex items-center justify-center">
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -inset-1.5 rounded-full bg-gold/20 border border-gold/40"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-2.5 h-2.5 bg-gradient-to-tr from-[#D4AF37] to-[#F5D76E] shadow-[0_0_10px_rgba(245,215,110,0.8)]'
                    : 'w-1.5 h-1.5 bg-white/20 group-hover:bg-gold/60 group-hover:w-2 group-hover:h-2'
                }`}
              />
            </div>
          </button>
        );
      })}
    </nav>
  );
}
