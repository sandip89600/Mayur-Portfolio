import React from 'react';
import { motion } from 'framer-motion';
import TradingScene from '../3d/TradingScene';
import ChartBackground from '../ui/ChartBackground';
import FloatingTicker from '../ui/FloatingTicker';
import GoldButton from '../ui/GoldButton';
import TopNav from '../ui/TopNav';
import { ArrowUpRight, BarChart2, ShieldCheck, Cpu, Sparkles } from 'lucide-react';

export default function Hero({ onNavigate }) {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#000000] pt-16 pb-28 md:py-0"
    >
      {/* 1. Minimal Top-Right Navigation: ONLY HOME & CONTACT */}
      <TopNav onNavigate={onNavigate} />

      {/* 2. Realistic Animated Moving Candlestick Chart Background (Right -> Left) */}
      <ChartBackground />

      {/* 3. Subtle Colorful Three.js Market Dust (Gold, Cyan, Blue, Purple, Green) */}
      <TradingScene />

      {/* 4. Primary Hero Screen Content */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 my-auto pt-6 lg:pt-0">
        
        {/* Left Column: Personal Brand Typography & Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 max-w-2xl text-center lg:text-left z-20"
        >
          {/* Top Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] font-mono tracking-widest text-[#F5D76E] font-bold uppercase">
              WELCOME TO MY SPACE
            </span>
          </div>

          {/* Main Name: Large, bold, and personal */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] uppercase">
            <span>Hi, I'm </span>
            <span className="text-gold-gradient relative inline-block">
              Mayur
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Vispute
            </span>
          </h1>

          {/* Subtitle Identity */}
          <h2 className="mt-3 text-lg sm:text-2xl font-bold tracking-tight text-cyan-300">
            Stock Market / Trader / Market Analyst
          </h2>

          {/* Short Impactful Description */}
          <p className="mt-4 text-sm sm:text-base text-gray-300 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
            Market-focused trader specializing in technical analysis, disciplined execution and structured risk management.
          </p>

          {/* Action CTAs */}
          <div className="mt-7 sm:mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <GoldButton
              variant="gold-filled"
              size="lg"
              icon={ArrowUpRight}
              onClick={() => onNavigate('platforms')}
            >
              Explore Platforms
            </GoldButton>

            <GoldButton
              variant="gold-outline"
              size="lg"
              onClick={() => onNavigate('contact')}
            >
              Connect With Me
            </GoldButton>
          </div>

          {/* Focus Metrics Bar */}
          <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-center lg:justify-start gap-6 sm:gap-10 text-left">
            <div>
              <div className="text-[10px] font-mono tracking-wider text-gray-400 uppercase">Discipline</div>
              <div className="text-xs sm:text-sm font-semibold text-[#F5D76E] mt-0.5">Price Action & Risk Control</div>
            </div>
            <div className="h-7 w-[1px] bg-white/10" />
            <div>
              <div className="text-[10px] font-mono tracking-wider text-gray-400 uppercase">Focus Markets</div>
              <div className="text-xs sm:text-sm font-semibold text-cyan-300 mt-0.5">Bank Nifty • Nifty 50 • Gold</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Circular Colorful Portrait of Mayur (Visible on First Screen!) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-1 flex items-center justify-center max-w-md w-full my-4 lg:my-0 z-20"
        >
          {/* Multi-color Radiant Glow Behind Circle */}
          <div className="absolute w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] rounded-full bg-gradient-to-tr from-gold/25 via-cyan-500/20 to-purple-600/20 blur-3xl pointer-events-none" />

          {/* Outer Slow Animated Gold Orbital Ring */}
          <div
            className="absolute w-[290px] sm:w-[390px] h-[290px] sm:h-[390px] rounded-full border-2 border-gold/40 border-dashed animate-spin pointer-events-none"
            style={{ animationDuration: '40s' }}
          />

          {/* Secondary Concentric Electric Blue Thin Ring */}
          <div
            className="absolute w-[270px] sm:w-[365px] h-[270px] sm:h-[365px] rounded-full border border-cyan-400/30 animate-spin pointer-events-none"
            style={{ animationDuration: '55s', animationDirection: 'reverse' }}
          />

          {/* Main Circular Frame with Solid Clean Border (Cut-to-Cut with NO bottom fade) */}
          <div className="relative w-[250px] sm:w-[330px] md:w-[360px] h-[250px] sm:h-[330px] md:h-[360px] rounded-full p-2 bg-gradient-to-b from-[#D4AF37] via-[#221C0A] to-[#0A0A0A] shadow-[0_0_45px_rgba(212,175,55,0.35),0_0_25px_rgba(0,210,255,0.2)]">
            
            {/* Inner Dark Glass Circle with FULL COLOR Transparent Cutout */}
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[#141414] to-[#050505] relative flex items-center justify-center border-2 border-gold/60">
              
              {/* Subtle Radial Warm Light Behind Head */}
              <div className="absolute inset-0 bg-radial-gold opacity-50" />

              {/* Full Color Cut-to-Cut Mayur Vispute Portrait */}
              <img
                src="/mayur_cutout.png"
                alt="Mayur Vispute - Stock Market Trader"
                className="w-full h-full object-cover object-top z-10 filter contrast-105 brightness-105 transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.target.src = '/mayur_portrait.png';
                }}
              />
            </div>

            {/* Glowing Tech Node Status Badge */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#00D2FF] border-2 border-black z-30 animate-pulse" />
          </div>

          {/* Floating Data Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute -top-3 -left-3 sm:-left-6 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-black/85 backdrop-blur-md border border-cyan-500/30 shadow-lg"
          >
            <div className="p-1 rounded-md bg-cyan-500/10 text-cyan-300">
              <BarChart2 className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[9px] font-mono text-gray-400 uppercase">Analysis</div>
              <div className="text-xs font-semibold text-white">Price Action</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-3 -right-3 sm:-right-6 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-black/85 backdrop-blur-md border border-gold/30 shadow-lg"
          >
            <div className="p-1 rounded-md bg-gold/10 text-[#F5D76E]">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[9px] font-mono text-gray-400 uppercase">Risk Protocol</div>
              <div className="text-xs font-semibold text-white">Disciplined</div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* 5. Wide Floating Market Marquee Strip (Right -> Left, Market Names Only) */}
      <FloatingTicker />
    </section>
  );
}
