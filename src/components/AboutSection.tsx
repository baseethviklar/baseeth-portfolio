import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mode } from '../types';
import { ABOUT_DATA } from '../data';
import { UserCheck, ShieldCheck, Cpu, MapPin } from 'lucide-react';

interface AboutSectionProps {
  mode: Mode;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ mode }) => {
  const currentData = mode === 'developer' ? ABOUT_DATA.dev : ABOUT_DATA.creative;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="font-pixel text-[11px] text-[#b6f000] tracking-wider">
            {currentData.badge}
          </span>
          <div className="h-[1px] flex-1 bg-white/10" />
        </div>

        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 tracking-tight">
          {currentData.title}
        </h2>

        {/* Content Box with subtle retro frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main narrative */}
          <div className="lg:col-span-7 bg-[#121212]/80 border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#b6f000]/40" />

            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-4 text-zinc-300 font-sans leading-relaxed text-sm sm:text-base"
              >
                <p>{currentData.paragraph1}</p>
                <p>{currentData.paragraph2}</p>
              </motion.div>
            </AnimatePresence>

            {/* Quick status line */}
            <div className="mt-6 pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#f5b800]" />
                <span>Based in Mumbai, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-[#b6f000]" />
                <span>Intertec Systems (Trainee)</span>
              </div>
            </div>
          </div>

          {/* Stats / Highlights Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {currentData.highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#141414] border border-white/[0.08] hover:border-white/20 rounded-xl p-4 sm:p-5 transition-all duration-200"
              >
                <span className="font-mono text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider block mb-1">
                  {item.label}
                </span>
                <span className="font-display font-semibold text-sm sm:text-base text-white">
                  {item.value}
                </span>
              </div>
            ))}

            {/* Quick Philosophy Badge */}
            <div className="col-span-2 bg-gradient-to-r from-[#161616] to-[#121212] border border-white/10 rounded-xl p-4 sm:p-5 flex items-center gap-3">
              <div className="p-2 rounded bg-black/50 border border-white/10 text-[#b6f000]">
                {mode === 'developer' ? <Cpu className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5 text-[#f5b800]" />}
              </div>
              <div>
                <p className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                  {mode === 'developer' ? 'Architectural Philosophy' : 'Product Mindset'}
                </p>
                <p className="text-xs sm:text-sm text-zinc-200 font-medium mt-0.5">
                  {mode === 'developer'
                    ? 'Tenant-isolated, resilient, and event-driven.'
                    : 'Intuitive, accessible, and delighting every user.'}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
