import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import { CONNECT_CHANNELS } from '../../data/platformData';
import { Send, Instagram, MessageCircle, Mail, ArrowUpRight, Radio, Users } from 'lucide-react';

const ChannelIcons = {
  telegram: Send,
  instagram: Instagram,
  whatsapp: MessageCircle,
  gmail: Mail,
};

export default function Connect() {
  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 bg-[#020202] overflow-hidden border-t border-gold/15"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-radial-gold opacity-25 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-cyan-600/10 to-blue-600/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/25 mb-4">
            <Radio className="w-3.5 h-3.5 text-[#F5D76E] animate-pulse" />
            <span className="text-[11px] font-mono tracking-widest text-[#F5D76E] uppercase font-semibold">
              COMMUNITY & DIRECT ACCESS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
            Connect <span className="text-gold-gradient">With Us</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            Join the trading community, receive live market updates on Telegram, follow chart breakdowns on Instagram, or send a direct message for collaboration.
          </p>
        </div>

        {/* 2x2 Desktop Grid (1x1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CONNECT_CHANNELS.map((channel, idx) => {
            const IconComponent = ChannelIcons[channel.id] || Send;

            return (
              <motion.a
                key={channel.id}
                href={channel.url}
                target={channel.id === 'gmail' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="block group cursor-pointer focus:outline-none"
              >
                <GlassCard className="h-full p-8 relative overflow-hidden group-hover:border-gold transition-all duration-300">
                  
                  {/* Subtle Top Glowing Line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

                  <div className="flex items-start justify-between mb-6">
                    {/* Platform Icon */}
                    <div
                      className="p-3.5 rounded-2xl border border-white/10 group-hover:scale-110 transition-all duration-300"
                      style={{
                        backgroundColor: `${channel.color}15`,
                        borderColor: `${channel.color}40`,
                        color: channel.color,
                        boxShadow: `0 0 20px ${channel.color}20`,
                      }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Arrow CTA Icon */}
                    <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-gold group-hover:bg-gold/10 text-gray-400 group-hover:text-[#F5D76E] transition-all">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Channel Name & Handle */}
                  <div className="text-xs font-mono font-bold tracking-widest text-[#F5D76E] uppercase mb-1">
                    {channel.name}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide group-hover:text-[#F5D76E] transition-colors mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed mb-8">
                    {channel.description}
                  </p>

                  {/* Bottom Action Pill Button */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-400">
                      {channel.handle}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#111111] group-hover:bg-gradient-to-r group-hover:from-[#F5D76E] group-hover:to-[#D4AF37] group-hover:text-black text-gray-200 border border-white/10 group-hover:border-gold text-xs font-mono font-semibold transition-all shadow-sm">
                      {channel.buttonText}
                    </span>
                  </div>

                </GlassCard>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
