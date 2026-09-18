import React from 'react';
import { motion } from 'framer-motion';
import { TRADING_PLATFORMS, PLATFORM_LINKS } from '../../data/platformData';
import { Layers } from 'lucide-react';

// Crisp SVGs / Logos matching the reference screenshot design
const PlatformLogos = {
  dhan: () => (
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#12162A] border border-cyan-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(0,210,255,0.25)]">
      {/* Dhan / Modern 'd' Monogram */}
      <svg viewBox="0 0 100 100" className="w-7 h-7 sm:w-8 sm:h-8" fill="none">
        <path d="M30 25H55C68 25 76 34 76 50C76 66 68 75 55 75H30V25Z" fill="url(#dhanGrad)" />
        <path d="M42 38H53C59 38 63 42 63 50C63 58 59 62 53 62H42V38Z" fill="#12162A" />
        <defs>
          <linearGradient id="dhanGrad" x1="30" y1="25" x2="76" y2="75">
            <stop offset="0%" stopColor="#00D2FF" />
            <stop offset="100%" stopColor="#3A7BD5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  ),
  'funding-pips': () => (
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#00A389] flex items-center justify-center p-2 shadow-md">
      {/* Green/Teal Connected Nodes Logo */}
      <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
        <circle cx="35" cy="30" r="10" fill="white" />
        <circle cx="35" cy="50" r="10" fill="white" />
        <circle cx="35" cy="70" r="10" fill="white" />
        <circle cx="65" cy="30" r="10" stroke="white" strokeWidth="4" />
        <circle cx="65" cy="50" r="10" stroke="white" strokeWidth="4" />
        <circle cx="65" cy="70" r="10" stroke="white" strokeWidth="4" />
      </svg>
    </div>
  ),
  'delta-exchange': () => (
    <div className="w-20 h-10 sm:w-24 sm:h-11 rounded-lg bg-white flex items-center justify-center px-2 py-1 shadow-md">
      {/* Delta Exchange official look */}
      <svg viewBox="0 0 120 40" className="w-full h-full" fill="none">
        <path d="M12 28L22 10L32 28H12Z" fill="#00D2FF" />
        <path d="M18 28L22 20L26 28H18Z" fill="#0284C7" />
        <text x="38" y="25" fill="#0F172A" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Delta</text>
      </svg>
    </div>
  ),
  tradingview: () => (
    <div className="w-20 h-10 sm:w-24 sm:h-11 rounded-lg bg-[#0F172A] border border-white/15 flex items-center justify-center px-2 py-1 shadow-md">
      {/* TradingView Logo */}
      <svg viewBox="0 0 120 40" className="w-full h-full" fill="none">
        <rect x="12" y="20" width="6" height="12" rx="1.5" fill="#38BDF8" />
        <rect x="22" y="12" width="6" height="20" rx="1.5" fill="#38BDF8" />
        <rect x="32" y="16" width="6" height="16" rx="1.5" fill="#38BDF8" />
        <text x="44" y="25" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Charts</text>
      </svg>
    </div>
  ),
  metatrader5: () => (
    <div className="w-20 h-10 sm:w-24 sm:h-11 rounded-lg bg-[#18181B] border border-amber-500/30 flex items-center justify-center px-2 py-1 shadow-md">
      {/* MetaTrader 5 / XM styled */}
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
        <span className="text-white font-mono font-bold text-xs sm:text-sm tracking-wider">MT5</span>
      </div>
    </div>
  ),
  exness: () => (
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#FBBF24] flex items-center justify-center shadow-md">
      {/* Exness Yellow Square with 'ex' */}
      <span className="text-black font-extrabold text-xl sm:text-2xl tracking-tighter font-sans">ex</span>
    </div>
  ),
};

export default function TradingPlatforms() {
  return (
    <section
      id="platforms"
      className="relative w-full py-20 sm:py-28 bg-[#040404] overflow-hidden border-t border-gold/15"
    >
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-radial-gold opacity-20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/25 mb-4">
            <Layers className="w-3.5 h-3.5 text-[#F5D76E]" />
            <span className="text-[11px] font-mono tracking-widest text-[#F5D76E] uppercase font-semibold">
              OFFICIAL BROKERS & PLATFORMS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
            Trading <span className="text-gold-gradient">Platforms</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-gray-400 font-light max-w-md mx-auto">
            Direct access to verified brokers, prop firm challenges, and institutional charting engines.
          </p>
        </div>

        {/* 2-Column Mobile Grid Matching Client Reference Screenshot */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-6 max-w-2xl sm:max-w-3xl mx-auto">
          {TRADING_PLATFORMS.map((platform, idx) => {
            const LogoComponent = PlatformLogos[platform.id] || PlatformLogos.dhan;
            const targetUrl = PLATFORM_LINKS[platform.linkKey] || "https://dhan.co/";
            const isFeatured = platform.isFeatured;

            return (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex flex-col"
              >
                <div
                  className={`
                    relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col items-center justify-between text-center h-full transition-all duration-300 group
                    ${
                      isFeatured
                        ? 'bg-gradient-to-b from-[#09152a] to-[#060b16] border border-cyan-400/50 shadow-[0_0_25px_rgba(0,210,255,0.25)] hover:border-cyan-400'
                        : 'bg-[#0e0e0e] border border-white/10 hover:border-gold/40 shadow-[0_8px_20px_rgba(0,0,0,0.8)]'
                    }
                  `}
                >
                  {/* Top Featured Badge if applicable */}
                  {isFeatured && (
                    <div className="w-full flex items-center justify-center gap-2 mb-2">
                      <span className="h-[1px] w-4 sm:w-6 bg-cyan-400/40" />
                      <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-cyan-300 font-bold uppercase">
                        {platform.badge}
                      </span>
                      <span className="h-[1px] w-4 sm:w-6 bg-cyan-400/40" />
                    </div>
                  )}

                  {/* Centered Logo Container */}
                  <div className={`my-auto py-2 flex items-center justify-center ${!isFeatured ? 'pt-2' : ''}`}>
                    <LogoComponent />
                  </div>

                  {/* Platform Title */}
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white tracking-wide my-3 group-hover:text-[#F5D76E] transition-colors">
                    {platform.name}
                  </h3>

                  {/* Bottom Rounded Solid Button: Blue for Featured, Amber/Gold for Others */}
                  <div className="w-full pt-1">
                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        w-full block py-2.5 sm:py-3 px-4 rounded-xl sm:rounded-2xl font-sans text-xs sm:text-sm font-bold tracking-wide text-center transition-all duration-300 cursor-pointer select-none shadow-md
                        ${
                          isFeatured
                            ? 'bg-[#0072FF] hover:bg-[#0088FF] text-white shadow-[0_0_15px_rgba(0,114,255,0.4)] hover:shadow-[0_0_20px_rgba(0,114,255,0.6)]'
                            : 'bg-[#FDB813] hover:bg-[#F59E0B] text-black shadow-[0_0_12px_rgba(253,184,19,0.3)] hover:shadow-[0_0_18px_rgba(253,184,19,0.5)]'
                        }
                      `}
                    >
                      {platform.buttonText || "Signup"}
                    </a>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
