import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import GoldButton from '../ui/GoldButton';
import { TRADING_PLATFORMS, PLATFORM_LINKS } from '../../data/platformData';
import { ExternalLink, Layers, Sparkles, TrendingUp, ShieldCheck, CandlestickChart } from 'lucide-react';

// Custom Crisp SVGs / Logos for the 5 platforms
const PlatformIcons = {
  dhan: () => (
    <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
      <rect width="100" height="100" rx="22" fill="#1C1438" />
      <circle cx="50" cy="50" r="32" stroke="#8B5CF6" strokeWidth="4" strokeDasharray="6 4" />
      {/* Dhan Stylized 'D' / Indian Rupee Bolt */}
      <path d="M35 30H55C66 30 72 38 72 50C72 62 66 70 55 70H35V30Z" fill="url(#dhanGrad)" />
      <path d="M46 42H54C58 42 61 45 61 50C61 55 58 58 54 58H46V42Z" fill="#1C1438" />
      <defs>
        <linearGradient id="dhanGrad" x1="35" y1="30" x2="72" y2="70">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
    </svg>
  ),
  'funding-pips': () => (
    <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
      <rect width="100" height="100" rx="22" fill="#0E1A38" />
      {/* Funding Pips Crown / Vault Icon */}
      <path d="M30 68L25 38L42 48L50 30L58 48L75 38L70 68H30Z" fill="url(#fpGrad)" stroke="#60A5FA" strokeWidth="2" />
      <circle cx="50" cy="30" r="4" fill="#F5D76E" />
      <circle cx="25" cy="38" r="3" fill="#60A5FA" />
      <circle cx="75" cy="38" r="3" fill="#60A5FA" />
      <defs>
        <linearGradient id="fpGrad" x1="25" y1="30" x2="75" y2="68">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
    </svg>
  ),
  'delta-exchange': () => (
    <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
      <rect width="100" height="100" rx="22" fill="#082230" />
      {/* Delta Triangle Prism */}
      <path d="M50 22L80 74H20L50 22Z" stroke="url(#deltaGrad)" strokeWidth="5" fill="rgba(0,210,255,0.15)" strokeLinejoin="round" />
      <path d="M50 38L68 70H32L50 38Z" fill="url(#deltaGrad)" opacity="0.8" />
      <defs>
        <linearGradient id="deltaGrad" x1="20" y1="22" x2="80" y2="74">
          <stop offset="0%" stopColor="#00D2FF" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
      </defs>
    </svg>
  ),
  tradingview: () => (
    <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
      <rect width="100" height="100" rx="22" fill="#0F241E" />
      {/* TradingView Clouds / Chart Bars */}
      <rect x="26" y="48" width="10" height="26" rx="3" fill="#34D399" />
      <rect x="44" y="32" width="10" height="42" rx="3" fill="#10B981" />
      <rect x="62" y="42" width="10" height="32" rx="3" fill="#059669" />
      <path d="M22 42L44 26L64 36L78 22" stroke="#6EE7B7" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  metatrader5: () => (
    <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
      <rect width="100" height="100" rx="22" fill="#2A1B07" />
      {/* MT5 Emblem */}
      <circle cx="50" cy="50" r="30" stroke="#F59E0B" strokeWidth="3" />
      <text x="50" y="58" textAnchor="middle" fill="#FBBF24" fontSize="26" fontWeight="bold" fontFamily="monospace">MT5</text>
    </svg>
  ),
};

export default function TradingPlatforms() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="platforms"
      className="relative w-full py-24 sm:py-32 bg-[#040404] overflow-hidden border-t border-gold/15"
    >
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-radial-gold opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tr from-cyan-600/10 via-purple-600/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/25 mb-4">
            <Layers className="w-3.5 h-3.5 text-[#F5D76E]" />
            <span className="text-[11px] font-mono tracking-widest text-[#F5D76E] uppercase font-semibold">
              TRUSTED BROKERS & ECOSYSTEM
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
            My Trading <span className="text-gold-gradient">Platforms</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            The official platforms, brokers, and charting engines I rely on daily for disciplined market execution, high-leverage prop trading, and institutional analytics.
          </p>
        </div>

        {/* 5 Platforms Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {TRADING_PLATFORMS.map((platform, idx) => {
            const IconComponent = PlatformIcons[platform.id] || PlatformIcons.dhan;
            const targetUrl = PLATFORM_LINKS[platform.linkKey] || "https://dhan.co/";

            return (
              <motion.div key={platform.id} variants={itemVariants}>
                <GlassCard className="h-full flex flex-col justify-between p-7 group hover:border-gold/60 transition-all duration-300">
                  <div>
                    {/* Top Header Row with Icon & Badge */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-1 rounded-2xl bg-black/50 border border-white/10 group-hover:border-gold/40 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all duration-300">
                        <IconComponent />
                      </div>
                      
                      <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-gold/10 text-[#F5D76E] border border-gold/30 uppercase font-semibold">
                        {platform.badge}
                      </span>
                    </div>

                    {/* Platform Title & Category */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide group-hover:text-[#F5D76E] transition-colors">
                      {platform.name}
                    </h3>
                    <p className="text-xs font-mono text-gray-400 mt-1 mb-4">
                      {platform.category}
                    </p>

                    {/* Tagline / Brief Description */}
                    <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                      {platform.tagline}
                    </p>
                  </div>

                  {/* Visit / Open Button */}
                  <div className="pt-5 border-t border-white/10 mt-auto">
                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#111111] hover:bg-gradient-to-r hover:from-[#F5D76E] hover:to-[#D4AF37] hover:text-black text-gray-200 border border-white/10 hover:border-gold font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                    >
                      <span>{platform.action}</span>
                      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Security & Risk Transparency Disclaimer */}
        <div className="mt-14 p-5 rounded-xl bg-black/60 border border-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#F5D76E] flex-shrink-0" />
            <span>Always verify platform credentials, regulations, and risk disclosures prior to trading.</span>
          </div>
          <div className="text-[#F5D76E] font-semibold">
            100% INDEPENDENT SETUPS
          </div>
        </div>

      </div>
    </section>
  );
}
