import React from 'react';
import { motion } from 'framer-motion';
import TradingScene from '../3d/TradingScene';
import ChartBackground from '../ui/ChartBackground';
import FloatingTicker from '../ui/FloatingTicker';
import GoldButton from '../ui/GoldButton';
import TopNav from '../ui/TopNav';
import { FLOATING_CARDS } from '../../data/marketData';
import { ArrowUpRight, BarChart2, ShieldCheck, Cpu } from 'lucide-react';

export default function Hero({ onNavigate }) {
  const iconMap = {
    "MARKET ANALYSIS": BarChart2,
    "RISK DISCIPLINE": ShieldCheck,
    "STRATEGY": Cpu,
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#000000] pt-20 pb-32 md:py-0"
    >
      {/* 1. Minimal Top-Right Navigation: ONLY HOME & CONTACT */}
      <TopNav onNavigate={onNavigate} />

      {/* 2. Realistic Animated Moving Candlestick Chart Background (Right -> Left) */}
      <ChartBackground />

      {/* 3. Subtle Three.js Gold Dust Atmosphere (No Large 3D Orb) */}
      <TradingScene />

      {/* 4. Hero Content Container */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 my-auto">
        
        {/* Left Column: Brand Typography & Strategy CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 max-w-2xl text-left"
        >
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5D76E] animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#F5D76E] font-bold uppercase">
              MAYUR VISPUTE • TRADER & MARKET ANALYST
            </span>
          </div>

          {/* Large Hero Editorial Typography */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] uppercase">
            <span>Trade With</span><br />
            <span className="text-white">Strategy.</span><br />
            <span className="text-white">Grow With </span>
            <span className="text-gold-gradient relative inline-block">
              Discipline.
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#F5D76E] via-[#D4AF37] to-transparent opacity-80" />
            </span>
          </h1>

          {/* Value Proposition Description */}
          <p className="mt-6 text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-lg">
            Market-focused trader specializing in technical analysis, disciplined execution and structured risk management.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <GoldButton
              variant="gold-filled"
              size="lg"
              icon={ArrowUpRight}
              onClick={() => onNavigate('performance')}
            >
              View Performance
            </GoldButton>

            <GoldButton
              variant="gold-outline"
              size="lg"
              onClick={() => onNavigate('contact')}
            >
              Contact Mayur
            </GoldButton>
          </div>

          {/* Quick Institutional Highlights Bar */}
          <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-6 sm:gap-10">
            <div>
              <div className="text-[11px] font-mono tracking-wider text-gray-400 uppercase">Core Discipline</div>
              <div className="text-sm sm:text-base font-semibold text-[#F5D76E] mt-0.5">Price Action & Risk Control</div>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <div>
              <div className="text-[11px] font-mono tracking-wider text-gray-400 uppercase">Focus Markets</div>
              <div className="text-sm sm:text-base font-semibold text-white mt-0.5">Indices • Gold • Crypto</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Circular Portrait Composition (Head to Chest Crop + Animated Gold Ring) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-1 flex items-center justify-center max-w-lg w-full"
        >
          {/* Ambient Warm Gold Glow Radial Backing */}
          <div className="absolute w-[340px] sm:w-[440px] h-[340px] sm:h-[440px] rounded-full bg-gradient-to-tr from-gold/20 via-gold/10 to-transparent blur-3xl pointer-events-none" />

          {/* Outer Slow Animated Gold Orbital Ring (45s cycle) */}
          <div
            className="absolute w-[320px] sm:w-[410px] md:w-[450px] h-[320px] sm:h-[410px] md:h-[450px] rounded-full border border-gold/30 border-dashed animate-spin pointer-events-none"
            style={{ animationDuration: '45s' }}
          />

          {/* Secondary Concentric Thin Ring */}
          <div
            className="absolute w-[300px] sm:w-[380px] md:w-[420px] h-[300px] sm:h-[380px] md:h-[420px] rounded-full border border-[#F5D76E]/20 animate-spin pointer-events-none"
            style={{ animationDuration: '60s', animationDirection: 'reverse' }}
          />

          {/* Main Circular Portrait Frame Container */}
          <div className="relative w-[270px] sm:w-[340px] md:w-[380px] h-[270px] sm:h-[340px] md:h-[380px] rounded-full p-2 bg-gradient-to-b from-[#1a170e] via-[#0a0a0a] to-[#050505] border border-gold/40 shadow-[0_0_50px_rgba(212,175,55,0.25)]">
            
            {/* Inner Dark Glass Circle with Transparent Cutout Mayur Portrait */}
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[#111111] to-[#040404] relative flex items-center justify-center">
              
              {/* Subtle Ambient Radial Spotlight behind Mayur */}
              <div className="absolute inset-0 bg-radial-gold opacity-40" />

              {/* Head-to-Chest Cutout Portrait of Mayur Vispute */}
              <img
                src="/mayur_cutout.png"
                alt="Mayur Vispute - Professional Trader"
                className="w-[92%] h-[92%] object-contain object-top filter brightness-105 contrast-105 z-10 transition-transform duration-700 ease-out hover:scale-105"
                onError={(e) => {
                  // Fallback to mayur_portrait.png if cutout is not loaded
                  e.target.src = '/mayur_portrait.png';
                }}
              />

              {/* Subtle Gold Rim Gradient at the Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20 pointer-events-none" />
            </div>

            {/* Glowing Tech Node / Status Indicator */}
            <div className="absolute top-4 right-4 w-3.5 h-3.5 rounded-full bg-[#F5D76E] shadow-[0_0_15px_#F5D76E] border-2 border-black z-30" />
          </div>

          {/* Floating Data Telemetry Badges */}
          {FLOATING_CARDS.map((card, idx) => {
            const CardIcon = iconMap[card.tag] || BarChart2;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: card.delay }}
                className={`absolute ${card.position} z-30 hidden sm:flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#0a0a0a]/90 backdrop-blur-xl border border-gold/30 shadow-[0_10px_25px_rgba(0,0,0,0.85),0_0_15px_rgba(212,175,55,0.15)] animate-float-slow`}
                style={{ animationDelay: `${idx * 1.5}s` }}
              >
                <div className="p-1.5 rounded-lg bg-gold/10 border border-gold/30 text-[#F5D76E]">
                  <CardIcon className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[9px] font-mono font-bold tracking-wider text-gray-400 uppercase">
                    {card.tag}
                  </div>
                  <div className="text-xs font-semibold text-white">
                    {card.sub}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* 5. Redesigned Wide Floating Financial Market Marquee Strip (Right -> Left, No Prices/Percentages) */}
      <FloatingTicker />
    </section>
  );
}
