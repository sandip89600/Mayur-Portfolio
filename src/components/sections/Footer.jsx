import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020202] border-t border-gold/15 py-12 px-6 sm:px-8 lg:px-12 text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand Signoff */}
        <div className="text-center md:text-left">
          <div className="text-lg font-bold text-white tracking-widest uppercase">
            MAYUR VISPUTE
          </div>
          <div className="text-xs font-mono text-[#F5D76E] mt-0.5">
            Trader • Market Analyst
          </div>
          <p className="text-xs text-gray-500 mt-2">
            © 2026 Mayur Vispute. All rights reserved.
          </p>
        </div>

        {/* Legal Disclaimer */}
        <div className="max-w-md text-center md:text-right">
          <p className="text-[11px] text-gray-500 font-light leading-relaxed">
            <strong className="text-gray-400">Risk Disclosure:</strong> Trading and investing involve significant risk of capital loss. Information presented on this website is for informational and educational purposes only and does not constitute financial or investment advice.
          </p>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-[#0a0a0a] border border-gold/30 text-[#F5D76E] hover:bg-gold/10 hover:border-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all cursor-pointer"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
