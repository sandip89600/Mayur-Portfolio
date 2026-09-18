// Configurable Platform Links
export const PLATFORM_LINKS = {
  dhan: "https://dhan.co/",
  fundingPips: "https://fundingpips.com/",
  deltaExchange: "https://www.delta.exchange/",
  tradingView: "https://www.tradingview.com/",
  metatrader5: "https://www.metatrader5.com/"
};

// Exactly 5 Trading Platforms in exact specified order
export const TRADING_PLATFORMS = [
  {
    id: "dhan",
    name: "DHAN",
    category: "Indian Equity & Futures",
    tagline: "Lightning-Fast Trading for Super Traders",
    linkKey: "dhan",
    action: "Open Platform",
    badge: "Recommended",
    accentColor: "#8B5CF6", // Dhan Violet/Purple
  },
  {
    id: "funding-pips",
    name: "FUNDING PIPS",
    category: "Proprietary Trading Firm",
    tagline: "Institutional Capital for Disciplined Traders",
    linkKey: "fundingPips",
    action: "Explore Prop Firm",
    badge: "Prop Funding",
    accentColor: "#3B82F6", // Funding Pips Blue
  },
  {
    id: "delta-exchange",
    name: "DELTA EXCHANGE",
    category: "Crypto Derivatives & Options",
    tagline: "Advanced Crypto Futures & Options Trading",
    linkKey: "deltaExchange",
    action: "Trade Crypto Options",
    badge: "Crypto Derivatives",
    accentColor: "#00D2FF", // Delta Cyan
  },
  {
    id: "tradingview",
    name: "TRADINGVIEW",
    category: "Charting & Market Analysis",
    tagline: "Where the World Charts, Chats and Trades",
    linkKey: "tradingView",
    action: "Open Charts",
    badge: "Essential Charts",
    accentColor: "#10B981", // TradingView Green / Blue
  },
  {
    id: "metatrader5",
    name: "METATRADER 5",
    category: "Multi-Asset Trading Terminal",
    tagline: "Institutional Forex, Indices & Commodity Engine",
    linkKey: "metatrader5",
    action: "Launch MT5",
    badge: "Terminal",
    accentColor: "#F59E0B", // MT5 Amber Gold
  },
];

// Exactly 4 Connect Channels in exact specified order & URLs
export const CONNECT_CHANNELS = [
  {
    id: "telegram",
    name: "TELEGRAM",
    handle: "@mayurtradesvip",
    title: "Join VIP Channel",
    description: "Daily market setups, live trade ideas, index analysis & real-time updates.",
    url: "https://t.me/mayurtradesvip",
    buttonText: "Join Telegram VIP",
    color: "#229ED9",
  },
  {
    id: "instagram",
    name: "INSTAGRAM",
    handle: "@mayurmv0",
    title: "Follow On Instagram",
    description: "Market psychology reels, chart breakdowns, and trading lifestyle insights.",
    url: "https://www.instagram.com/mayurmv0?stkn=MXYybXEyZDJ6MzNxdA==",
    buttonText: "Follow Instagram",
    color: "#E1306C",
  },
  {
    id: "whatsapp",
    name: "WHATSAPP",
    handle: "+91 8983896269",
    title: "Chat With Me",
    description: "Direct 1-on-1 inquiries, mentorship queries, and strategy collaborations.",
    url: "https://wa.me/918983896269",
    buttonText: "Chat on WhatsApp",
    color: "#25D366",
  },
  {
    id: "gmail",
    name: "GMAIL",
    handle: "stockmarketwithmayur11@gmail.com",
    title: "Email Me",
    description: "Business partnerships, proprietary inquiries, and formal proposals.",
    url: "mailto:stockmarketwithmayur11@gmail.com",
    buttonText: "Send Email",
    color: "#EA4335",
  },
];

export const TICKER_ITEMS = [
  "BANK NIFTY",
  "NIFTY 50",
  "XAUUSD",
  "BITCOIN",
];
