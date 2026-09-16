import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import GlassCard from '../ui/GlassCard';
import { PERFORMANCE_DATA, MARKET_AREAS } from '../../data/marketData';
import { TrendingUp, ShieldAlert, Award, ArrowUpRight, BarChart3, Layers, Target, Activity } from 'lucide-react';

export default function Performance() {
  const [timeframe, setTimeframe] = useState('6M');
  const [activeMarket, setActiveMarket] = useState(null);

  const chartData = PERFORMANCE_DATA.timeframeData[timeframe] || PERFORMANCE_DATA.timeframeData['6M'];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="p-3 rounded-lg bg-[#080808]/95 backdrop-blur-md border border-gold/40 shadow-[0_10px_25px_rgba(0,0,0,0.9),0_0_15px_rgba(212,175,55,0.2)]">
          <p className="text-xs font-mono text-gray-400 mb-1">{label}</p>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-300">Equity:</span>
            <span className="text-sm font-mono font-bold text-[#F5D76E]">
              ${payload[0].value.toLocaleString()}
            </span>
          </div>
          {data.benchmark && (
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-[11px] text-gray-500">Benchmark:</span>
              <span className="text-xs font-mono text-gray-400">
                ${data.benchmark.toLocaleString()}
              </span>
            </div>
          )}
          {data.trade && (
            <div className="mt-1.5 pt-1.5 border-t border-white/10 text-[10px] font-mono flex items-center justify-between">
              <span className="text-gray-400">Trade Result:</span>
              <span className={data.win ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'}>
                {data.trade}
              </span>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <section
      id="performance"
      className="relative w-full min-h-screen py-24 sm:py-32 bg-[#000000] overflow-hidden border-t border-gold/15"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-radial-gold opacity-20 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        {/* Section Header with Demo Compliance Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 mb-4">
              <span className="text-[11px] font-mono tracking-widest text-[#F5D76E] uppercase font-semibold">
                02 • ANALYTICS & METRICS
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
              Market <span className="text-gold-gradient">Performance</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-400 font-light max-w-xl">
              Systematic trade metrics, asymmetric risk profiles, and historical cumulative growth.
            </p>
          </div>

          {/* DEMO DATA Compliance Notice Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#111111]/80 backdrop-blur-md border border-amber-500/30 text-amber-300">
            <ShieldAlert className="w-4 h-4 text-[#F5D76E]" />
            <div className="text-left">
              <span className="text-[11px] font-mono font-bold tracking-wider block uppercase">
                DEMO DATA
              </span>
              <span className="text-[10px] text-gray-400 block">
                Illustrative Performance Model
              </span>
            </div>
          </div>
        </div>

        {/* Top 4 Performance Summary Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {PERFORMANCE_DATA.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="p-5 relative group hover:border-gold/50">
                <div className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase">
                  {stat.label}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white mt-1 group-hover:text-[#F5D76E] transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-[11px] text-gray-400 mt-1 font-light">
                  {stat.detail}
                </div>
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gold/40 group-hover:bg-[#F5D76E] transition-colors duration-300" />
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Main Interactive Recharts Equity Curve Dashboard */}
        <GlassCard className="p-6 sm:p-8 mb-16 border-gold/30 bg-[#080808]/85">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide uppercase">
                  Cumulative Equity Growth Curve
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gold/10 text-[#F5D76E] border border-gold/30">
                  SIMULATED
                </span>
              </div>
              <p className="text-xs font-mono text-gray-400 mt-1">
                Risk-adjusted capital trajectory vs. passive index baseline
              </p>
            </div>

            {/* Timeframe Filter Buttons */}
            <div className="flex items-center p-1 rounded-lg bg-[#141414] border border-white/10 self-start sm:self-auto">
              {['1M', '3M', '6M', '1Y'].map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-3 py-1.5 rounded text-xs font-mono font-semibold transition-all duration-200 ${
                    timeframe === tf
                      ? 'bg-[#F5D76E] text-black shadow-[0_0_12px_rgba(245,215,110,0.5)]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>

          {/* Chart Canvas Area */}
          <div className="w-full h-[280px] sm:h-[360px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  {/* Luxury Gold Area Gradient */}
                  <linearGradient id="goldArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F5D76E" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="benchmarkArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#888888" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#888888" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(212, 175, 55, 0.08)" vertical={false} />
                <XAxis
                  dataKey="date"
                  stroke="#555555"
                  tick={{ fill: '#888888', fontSize: 11, fontFamily: 'JetBrains Mono' }}
                  tickLine={{ stroke: '#333333' }}
                />
                <YAxis
                  stroke="#555555"
                  domain={['auto', 'auto']}
                  tick={{ fill: '#888888', fontSize: 11, fontFamily: 'JetBrains Mono' }}
                  tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`}
                  tickLine={{ stroke: '#333333' }}
                />
                <Tooltip content={<CustomTooltip />} />
                
                {/* Passive Benchmark Line */}
                <Area
                  type="monotone"
                  dataKey="benchmark"
                  stroke="#666666"
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                  fillOpacity={1}
                  fill="url(#benchmarkArea)"
                  name="Benchmark"
                />

                {/* Primary Strategy Gold Line */}
                <Area
                  type="monotone"
                  dataKey="pnl"
                  stroke="#F5D76E"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#goldArea)"
                  name="Strategy Equity"
                  activeDot={{
                    r: 6,
                    fill: '#FFFFFF',
                    stroke: '#D4AF37',
                    strokeWidth: 3,
                    className: 'shadow-[0_0_15px_#F5D76E]'
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Chart Footer Legend */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs font-mono text-gray-400 gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-1 bg-[#F5D76E] rounded-full" />
                <span className="text-gray-300">Strategy PnL Growth</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-0.5 border-t border-dashed border-gray-400" />
                <span>Market Benchmark</span>
              </div>
            </div>
            <div className="text-[11px] text-gray-400">
              *Demo / Illustrative Backtest Model
            </div>
          </div>
        </GlassCard>

        {/* Section 16: FEATURED MARKET AREAS */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-4 h-4 text-[#F5D76E]" />
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide uppercase">
              Featured Market Areas
            </h3>
          </div>
          <p className="text-sm text-gray-400 font-light">
            Core instruments actively traded using structured price action algorithms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MARKET_AREAS.map((market) => (
            <GlassCard
              key={market.id}
              className="p-5 group hover:border-gold transition-all duration-300 cursor-pointer"
              onClick={() => setActiveMarket(market.id === activeMarket ? null : market.id)}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gold/10 text-[#F5D76E] border border-gold/30 uppercase">
                  {market.badge}
                </span>
                <span className="text-[10px] font-mono text-gray-400">
                  {market.timeframes}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white tracking-wider group-hover:text-[#F5D76E] transition-colors duration-300">
                {market.name}
              </h4>
              
              <div className="text-xs font-mono text-gray-400 mb-3">
                {market.category}
              </div>

              <p className="text-xs text-gray-300 font-light leading-relaxed mb-5">
                {market.description}
              </p>

              {/* Mini Sparkline Visualization */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-gray-400">STRUCTURE</div>
                  <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {market.sentiment}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-mono text-gray-400">VOLATILITY</div>
                  <div className="text-xs font-mono text-[#F5D76E]">
                    {market.volatility}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
}
