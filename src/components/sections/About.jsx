import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import { CAPABILITIES } from '../../data/marketData';
import { TrendingUp, Crosshair, ShieldCheck, Brain, CheckCircle2 } from 'lucide-react';

export default function About() {
  const capabilityIcons = {
    ta: TrendingUp,
    strategy: Crosshair,
    risk: ShieldCheck,
    psychology: Brain,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-24 sm:py-32 bg-[#050505] overflow-hidden flex items-center justify-center border-t border-gold/15"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-radial-gold opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-radial-gold opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 mb-4">
            <span className="text-[11px] font-mono tracking-widest text-[#F5D76E] uppercase font-semibold">
              01 • PHILOSOPHY & CAPABILITIES
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
            The Trader Behind <br />
            <span className="text-gold-gradient">The Strategy</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            Mayur Vispute is a market-focused trader with an approach centered around technical analysis, structured decision-making and disciplined risk management. Trading is not gambling—it is the systematic execution of statistical edges across liquid market structures.
          </p>
        </div>

        {/* 4 Core Capability Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {CAPABILITIES.map((cap) => {
            const Icon = capabilityIcons[cap.id] || TrendingUp;
            return (
              <motion.div key={cap.id} variants={itemVariants}>
                <GlassCard className="h-full group hover:border-gold/60 transition-all duration-500">
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 text-[#F5D76E] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono tracking-widest text-gold/60 uppercase">
                      CORE PILLAR
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-[#F5D76E] transition-colors duration-300">
                    {cap.title}
                  </h3>

                  <p className="text-xs font-mono text-gray-400 mt-1 mb-3">
                    {cap.subtitle}
                  </p>

                  <p className="text-sm text-gray-300 leading-relaxed font-light mb-6">
                    {cap.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                    {cap.metrics.map((m, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded bg-[#111111] text-gray-300 border border-white/10 group-hover:border-gold/30 group-hover:text-gold transition-colors duration-300"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#F5D76E]" />
                        {m}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trading Rule Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#0d0d0d] via-[#121212] to-[#0d0d0d] border border-gold/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-[#F5D76E] flex-shrink-0">
              <span className="font-mono font-bold text-lg">MV</span>
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-wider uppercase">Execution Creed</div>
              <div className="text-xs sm:text-sm text-gray-400 font-light mt-0.5">
                "Preserve capital during contraction. Expand aggressively during clear confluence."
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6 font-mono text-xs text-[#F5D76E]">
            <span>100% DISCIPLINE</span>
            <span>•</span>
            <span>0% EMOTION</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
