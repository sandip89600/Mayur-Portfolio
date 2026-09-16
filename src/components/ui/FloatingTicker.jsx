import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingTicker() {
  const instruments = [
    "BANK NIFTY",
    "NIFTY 50",
    "XAUUSD",
    "BITCOIN",
  ];

  // Repeat sequence 4 times for a seamless, continuous infinite loop
  const tickerItems = [...instruments, ...instruments, ...instruments, ...instruments];

  return (
    <div className="absolute bottom-[30px] md:bottom-[45px] left-0 right-0 z-30 w-full px-4 sm:px-6 md:px-10 pointer-events-auto flex justify-center">
      {/* Premium Wide Financial Brand Strip */}
      <div className="relative w-full max-w-6xl rounded-xl overflow-hidden backdrop-blur-xl bg-black/75 border-y border-x border-gold/25 shadow-[0_10px_35px_rgba(0,0,0,0.9),0_0_20px_rgba(212,175,55,0.12)]">
        
        {/* Subtle Top & Bottom Glowing Golden Accent Lines */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        {/* Left & Right Edge Fades for Seamless Ingress/Egress */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        {/* Moving Ticker Track (Continuous RIGHT -> LEFT) */}
        <div className="py-3.5 md:py-4 flex overflow-hidden select-none">
          <motion.div
            className="flex items-center whitespace-nowrap w-max gap-8 md:gap-14"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 28,
                ease: 'linear',
              },
            }}
          >
            {tickerItems.map((item, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-8 md:gap-14"
              >
                <span className="text-xs sm:text-sm md:text-base font-mono font-bold tracking-[0.2em] text-gray-200 hover:text-[#F5D76E] transition-colors uppercase">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/60 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
