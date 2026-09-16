import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import GoldButton from '../ui/GoldButton';
import { Mail, Send, Linkedin, Instagram, ArrowUpRight, CheckCircle2, MessageSquare, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#F5D76E', '#D4AF37', '#C9A227', '#FFFFFF'],
      });
    }, 900);
  };

  const socials = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      label: "Professional Profile",
      handle: "in/mayur-vispute",
      href: "https://linkedin.com",
    },
    {
      name: "Instagram",
      icon: Instagram,
      label: "Market Updates & Analysis",
      handle: "@mayurvispute.trader",
      href: "https://instagram.com",
    },
    {
      name: "Direct Email",
      icon: Mail,
      label: "Trading Inquiries",
      handle: "contact@mayurvispute.com",
      href: "mailto:contact@mayurvispute.com",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-24 sm:py-32 bg-[#050505] overflow-hidden flex items-center justify-center border-t border-gold/15"
    >
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-radial-gold opacity-20 blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 mb-4">
            <span className="text-[11px] font-mono tracking-widest text-[#F5D76E] uppercase font-semibold">
              03 • DIRECT CHANNEL
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
            Let's Talk <span className="text-gold-gradient">Markets.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            Have a trading-related project, collaboration or professional enquiry? Send a direct transmission below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-6 sm:p-10 border-gold/30 bg-[#080808]/90">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold flex items-center justify-center text-[#F5D76E] mb-6 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
                    Transmission Received
                  </h3>
                  <p className="text-sm text-gray-400 mt-2 max-w-md">
                    Thank you for reaching out. Mayur Vispute will review your inquiry and respond shortly.
                  </p>
                  <div className="mt-8">
                    <GoldButton
                      variant="secondary"
                      onClick={() => {
                        setFormState({ name: '', email: '', message: '' });
                        setStatus('idle');
                      }}
                    >
                      Send Another Message
                    </GoldButton>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono tracking-wider text-gray-300 uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3.5 rounded-lg bg-[#111111] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/60 transition-all font-sans text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-wider text-gray-300 uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3.5 rounded-lg bg-[#111111] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/60 transition-all font-sans text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-wider text-gray-300 uppercase mb-2">
                      Message / Proposal *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your inquiry, strategy consulting need or collaboration proposal..."
                      className="w-full px-4 py-3.5 rounded-lg bg-[#111111] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/60 transition-all font-sans text-sm resize-none"
                    />
                  </div>

                  <GoldButton
                    type="submit"
                    variant="gold-filled"
                    size="lg"
                    icon={Send}
                    className="w-full"
                  >
                    {status === 'submitting' ? 'Transmitting...' : 'Send Message'}
                  </GoldButton>
                </form>
              )}
            </GlassCard>
          </div>

          {/* Right Column: Social Links & Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-[#090909] border border-gold/20 mb-6">
              <div className="flex items-center gap-3 mb-2 text-[#F5D76E]">
                <Terminal className="w-5 h-5" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase">
                  DIRECT ACCESS
                </span>
              </div>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Connect directly for market consulting, proprietary algorithmic setups, or technical keynote inquiries.
              </p>
            </div>

            {socials.map((s, idx) => {
              const Icon = s.icon;
              return (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <GlassCard className="p-5 flex items-center justify-between group-hover:border-gold transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-gold/10 border border-gold/30 text-[#F5D76E] group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-[#F5D76E] transition-colors">
                          {s.name}
                        </div>
                        <div className="text-xs font-mono text-gray-400">
                          {s.handle}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-[#F5D76E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </GlassCard>
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
