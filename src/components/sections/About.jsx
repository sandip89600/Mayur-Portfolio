import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import { TrendingUp, Crosshair, ShieldCheck, Brain, CheckCircle2, UserCheck } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      title: "Technical Analysis",
      subtitle: "Price Action & Market Structure",
      desc: "Deep focus on multi-timeframe price structure, liquidity sweeps, demand/supply imbalances, and high-probability candlestick confirmations.",
      icon: TrendingUp,
      color: "#00D2FF",
    },
    {
      title: "Trading Strategy",
      subtitle: "Systematic Setup Execution",
      desc: "Rules-based execution targeting high-beta index momentum (Bank Nifty, Nifty 50), precious metals (Gold), and major crypto setups.",
      icon: Crosshair,
      color: "#F5D76E",
    },
    {
      title: "Risk Management",
      subtitle: "Capital Preservation First",
      desc: "Strict adherence to mathematical position sizing, fixed max risk per trade, and capital preservation during unfavorable market cycles.",
      icon: ShieldCheck,
      color: "#10B981",
    },
    {
      title: "Market Psychology",
      subtitle: "Discipline & Consistency",
      desc: "Emotional neutrality, trade journaling, patience during market consolidation, and consistency in long-term execution.",
      icon: Brain,
      color: "#9B51E0",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-24 sm:py-32 bg-[#050505] overflow-hidden border-t border-gold/15"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-radial-gold opacity-25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-radial-gold opacity-20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/25 mb-4">
            <UserCheck className="w-3.5 h-3.5 text-[#F5D76E]" />
            <span className="text-[11px] font-mono tracking-widest text-[#F5D76E] uppercase font-semibold">
              ABOUT MAYUR VISPUTE
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
            I'm Mayur <span className="text-gold-gradient">Vispute</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            Market analyst and disciplined trader specializing in technical price action, structured setups, and systematic risk management across Indian Indices, Forex, and Crypto markets.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <GlassCard key={idx} className="h-full p-7 group hover:border-gold/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="p-3 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundColor: `${pillar.color}15`,
                      borderColor: `${pillar.color}35`,
                      color: pillar.color,
                      boxShadow: `0 0 15px ${pillar.color}20`,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                    0{idx + 1} // PILLAR
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-[#F5D76E] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono text-gray-400 mt-1 mb-3">
                  {pillar.subtitle}
                </p>
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </GlassCard>
            );
          })}
        </div>

        {/* Personal Trader Creed Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0d0d0d] via-[#141414] to-[#0d0d0d] border border-gold/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-[#F5D76E] flex-shrink-0 font-mono font-bold text-lg">
              MV
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-wider uppercase">Trading Philosophy</div>
              <div className="text-xs sm:text-sm text-gray-300 font-light mt-0.5">
                "Trade with strategy. Protect your capital with discipline. Let probability do the rest."
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 font-mono text-xs text-[#F5D76E] flex-shrink-0">
            <span>STRATEGY</span>
            <span>•</span>
            <span>DISCIPLINE</span>
            <span>•</span>
            <span>EXECUTION</span>
          </div>
        </div>

      </div>
    </section>
  );
}
