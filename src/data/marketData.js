export const TICKER_ITEMS = [
  { id: 1, name: "BANK NIFTY", symbol: "BANKNIFTY", price: "51,240.50", change: "+1.35%", isUp: true },
  { id: 2, name: "NIFTY 50", symbol: "NIFTY", price: "24,850.80", change: "+0.85%", isUp: true },
  { id: 3, name: "XAUUSD", symbol: "GOLD", price: "2,514.20", change: "+1.12%", isUp: true },
  { id: 4, name: "BITCOIN", symbol: "BTC/USD", price: "64,320.00", change: "+3.40%", isUp: true },
];

export const PERFORMANCE_DATA = {
  stats: [
    { label: "TRADING ACTIVITY", value: "124+ Trades", detail: "Systematic setups executed" },
    { label: "WIN RATE", value: "72%", detail: "High probability confluence" },
    { label: "PROFIT FACTOR", value: "2.42", detail: "Gross profit / gross loss" },
    { label: "AVG RISK : REWARD", value: "1 : 2.8", detail: "Asymmetric payoff profile" },
  ],
  markets: [
    { name: "Bank Nifty", percentage: "45%", type: "Index Futures & Options" },
    { name: "Nifty 50", percentage: "30%", type: "Index Swing & Intraday" },
    { name: "Gold (XAUUSD)", percentage: "15%", type: "Macro Commodity" },
    { name: "Bitcoin", percentage: "10%", type: "Momentum Breakouts" },
  ],
  timeframeData: {
    "1M": [
      { date: "Day 1", pnl: 100000, benchmark: 100000, trade: "+$1,200", win: true },
      { date: "Day 5", pnl: 104200, benchmark: 100800, trade: "+$3,000", win: true },
      { date: "Day 10", pnl: 103100, benchmark: 101200, trade: "-$1,100", win: false },
      { date: "Day 15", pnl: 108400, benchmark: 101900, trade: "+$5,300", win: true },
      { date: "Day 20", pnl: 111200, benchmark: 102100, trade: "+$2,800", win: true },
      { date: "Day 25", pnl: 109800, benchmark: 102600, trade: "-$1,400", win: false },
      { date: "Day 30", pnl: 116500, benchmark: 103400, trade: "+$6,700", win: true },
    ],
    "3M": [
      { date: "Week 1", pnl: 100000, benchmark: 100000 },
      { date: "Week 3", pnl: 106500, benchmark: 101500 },
      { date: "Week 6", pnl: 114200, benchmark: 103200 },
      { date: "Week 9", pnl: 122800, benchmark: 104800 },
      { date: "Week 12", pnl: 135400, benchmark: 106500 },
    ],
    "6M": [
      { date: "Month 1", pnl: 100000, benchmark: 100000 },
      { date: "Month 2", pnl: 112400, benchmark: 102200 },
      { date: "Month 3", pnl: 124800, benchmark: 104500 },
      { date: "Month 4", pnl: 136200, benchmark: 107100 },
      { date: "Month 5", pnl: 148900, benchmark: 109400 },
      { date: "Month 6", pnl: 168500, benchmark: 112000 },
    ],
    "1Y": [
      { date: "Q1", pnl: 100000, benchmark: 100000 },
      { date: "Q2", pnl: 128000, benchmark: 105000 },
      { date: "Q3", pnl: 162000, benchmark: 111000 },
      { date: "Q4", pnl: 214000, benchmark: 118000 },
    ]
  }
};

export const CAPABILITIES = [
  {
    id: "ta",
    title: "Technical Analysis",
    subtitle: "Price Action & Structural Flow",
    description: "Advanced multi-timeframe market structure mapping, institutional liquidity pools, key supply/demand zones, and momentum shift detection.",
    metrics: ["Market Structure", "Liquidity Profiling", "Orderflow Analysis"]
  },
  {
    id: "strategy",
    title: "Trading Strategy",
    subtitle: "Asymmetric Setup Execution",
    description: "Rules-based systematic trade identification focusing on high-probability trend continuation, range expansion triggers, and volatility squeeze setups.",
    metrics: ["Breakout Compression", "Trend Pullbacks", "Macro Alignment"]
  },
  {
    id: "risk",
    title: "Risk Management",
    subtitle: "Capital Preservation First",
    description: "Strict mathematical position sizing, defined max drawdown tolerance per session, dynamic trailing stops, and non-negotiable capital protection protocols.",
    metrics: ["1-2% Max Risk/Trade", "Dynamic R:R Targeting", "Portfolio Hedging"]
  },
  {
    id: "psychology",
    title: "Market Psychology",
    subtitle: "Emotional Neutrality & Patience",
    description: "Unwavering execution discipline, eliminating emotional bias, maintaining patience during low-probability conditions, and process-oriented execution.",
    metrics: ["Execution Consistency", "Trade Journaling", "Patience Protocol"]
  }
];

export const MARKET_AREAS = [
  {
    id: "bank-nifty",
    name: "BANK NIFTY",
    category: "Index Trading",
    badge: "Primary Focus",
    description: "Heavy focus on high-beta banking sector movement, intraday momentum bursts, and opening range breakouts.",
    sparkline: [48000, 48600, 49200, 48900, 49800, 50600, 51240],
    volatility: "High Volatility",
    sentiment: "Bullish Structure",
    timeframes: "1m • 5m • 15m"
  },
  {
    id: "nifty-50",
    name: "NIFTY 50",
    category: "Equity Markets",
    badge: "Core Index",
    description: "Broad-market structural trend following, sector rotation analysis, and institutional option chain sentiment tracking.",
    sparkline: [23800, 24100, 24000, 24350, 24600, 24720, 24850],
    volatility: "Moderate",
    sentiment: "Trending Up",
    timeframes: "15m • 1H • Daily"
  },
  {
    id: "xauusd",
    name: "XAUUSD",
    category: "Gold / Forex",
    badge: "Safe Haven Macro",
    description: "Trading geopolitical and monetary policy cycles, liquidity sweeps around NY/London sessions, and technical inflection levels.",
    sparkline: [2360, 2390, 2420, 2410, 2460, 2490, 2514],
    volatility: "Controlled",
    sentiment: "Macro Expansion",
    timeframes: "30m • 4H • Daily"
  },
  {
    id: "bitcoin",
    name: "BITCOIN",
    category: "Digital Assets",
    badge: "Asymmetric Growth",
    description: "Exploiting high-volatility 24/7 liquidity cycles, perpetual funding dynamics, and structural market cycle breakouts.",
    sparkline: [56000, 58200, 57400, 61000, 59800, 62900, 64320],
    volatility: "Ultra Dynamic",
    sentiment: "Momentum Breakout",
    timeframes: "1H • 4H • Weekly"
  }
];

export const FLOATING_CARDS = [
  {
    tag: "MARKET ANALYSIS",
    sub: "Technical Analysis",
    position: "top-[15%] -left-8 sm:-left-12",
    delay: 0.2
  },
  {
    tag: "RISK DISCIPLINE",
    sub: "Strict Capital Control",
    position: "bottom-[28%] -left-4 sm:-left-8",
    delay: 0.4
  },
  {
    tag: "STRATEGY",
    sub: "Data Driven Precision",
    position: "top-[30%] -right-6 sm:-right-10",
    delay: 0.6
  }
];
