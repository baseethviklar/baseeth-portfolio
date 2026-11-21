import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mode } from '../types';
import { PERSONAL_INFO } from '../data';
import { sound } from '../sound';
import { ArrowUpRight, Terminal, Sparkles, Code2, Layers } from 'lucide-react';

interface HeroProps {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

export const Hero: React.FC<HeroProps> = ({ mode, setMode }) => {
  // Typewriter effect for speech bubble
  const speechText = "I'm Baseeth";
  const [displayText, setDisplayText] = useState<string>('');
  const [isTypingDone, setIsTypingDone] = useState<boolean>(false);

  useEffect(() => {
    let index = 0;
    setDisplayText('');
    setIsTypingDone(false);

    const interval = setInterval(() => {
      index++;
      if (index <= speechText.length) {
        setDisplayText(speechText.slice(0, index));
      } else {
        setIsTypingDone(true);
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  const handleModeChange = (newMode: Mode) => {
    if (newMode === mode) return;
    sound.playToggle(newMode === 'developer');
    setMode(newMode);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-16 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle background ambient glow */}
      <div
        className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none transition-colors duration-700 opacity-20 ${
          mode === 'developer' ? 'bg-[#b6f000]' : 'bg-[#f5b800]'
        }`}
      />

      {/* Main hero frame matching style reference: subtle thin border with corner notches & generous empty space */}
      <div className="relative w-full max-w-6xl mx-auto border border-white/[0.08] bg-[#111111]/70 backdrop-blur-sm p-6 sm:p-10 lg:p-14 rounded-2xl shadow-2xl">
        {/* Pixel corner markers */}
        <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#b6f000]" />
        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#b6f000]" />
        <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#b6f000]" />
        <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#b6f000]" />

        {/* Top Status Bar inside hero frame */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.06] text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-3">
            <span className="text-[#b6f000] font-pixel text-[10px]">SYS://ACTIVE</span>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <span className="hidden sm:inline">LOC: MUMBAI, IN</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/5 text-[10px] text-zinc-400">
              {mode === 'developer' ? 'ENGINEERING_VIEW' : 'PRODUCT_VIEW'}
            </span>
          </div>
        </div>

        {/* Hero Content Grid: Left Character & Right Big Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: Pixel Art Character with Speech Bubble */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Speech Bubble */}
            <div className="relative mb-4 sm:mb-6 z-10">
              <div className="relative px-4 py-2.5 bg-[#161616] border-2 border-white/20 rounded-md shadow-lg flex items-center gap-2">
                <span className="font-pixel text-xs sm:text-sm text-[#b6f000] tracking-wider select-none">
                  {displayText}
                </span>
                <span
                  className={`inline-block w-2 h-4 bg-[#b6f000] ${
                    isTypingDone ? 'animate-pulse' : 'opacity-100'
                  }`}
                />
                {/* Pointer triangle */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[8px] border-t-[#161616]" />
                <div className="absolute -bottom-[12px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-t-[10px] border-t-white/20 -z-10" />
              </div>
            </div>

            {/* Avatar Container with subtle frame & glow */}
            <div className="relative group">
              {/* Subtle back illumination */}
              <div className="absolute -inset-2 bg-gradient-to-b from-[#b6f000]/10 via-[#f5b800]/5 to-transparent rounded-2xl blur-lg group-hover:from-[#b6f000]/20 transition-all duration-300 pointer-events-none" />

              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-xl overflow-hidden border-2 border-white/10 bg-[#0c0c0c] shadow-2xl flex items-center justify-center">
                <img
                  src="/avatar.png"
                  alt="Baseeth Viklar Pixel Avatar"
                  className="w-full h-full object-cover pixelated select-none pointer-events-none transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="eager"
                />

                {/* Scanline overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/[0.04] to-black/30 pointer-events-none" />
              </div>

              {/* Character pedestal / badge */}
              <div className="mt-3 flex items-center justify-center gap-2 text-[10px] font-mono text-zinc-400">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#b6f000]" />
                <span>BASEETH VIKLAR</span>
                <span className="text-zinc-600">//</span>
                <span className="text-[#f5b800]">SE TRAINEE</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Big Headline, Mode Switch, Subtext & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tagline / Category */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="font-mono text-xs text-[#b6f000] tracking-widest uppercase">
                {mode === 'developer' ? '// FULL-STACK & SYSTEMS' : '// UI & PRODUCT ENGINEERING'}
              </span>
            </div>

            {/* Big Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-6">
              Turning Pixels into{' '}
              <span
                className={`transition-colors duration-300 ${
                  mode === 'developer'
                    ? 'text-[#b6f000] drop-shadow-[0_0_20px_rgba(182,240,0,0.25)]'
                    : 'text-[#f5b800] drop-shadow-[0_0_20px_rgba(245,184,0,0.25)]'
                }`}
              >
                Memorable
              </span>{' '}
              Digital Experiences.
            </h1>

            {/* Mode Selector matching specification: Developer Mode / Creative Mode with arrow marker */}
            <div className="mb-6 p-1.5 sm:p-2 bg-[#161616] border border-white/10 rounded-xl inline-flex flex-wrap items-center gap-2 sm:gap-4 max-w-fit shadow-md">
              <button
                onClick={() => handleModeChange('developer')}
                onMouseEnter={() => sound.playHover()}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-mono transition-all duration-200 ${
                  mode === 'developer'
                    ? 'bg-[#b6f000]/15 text-[#b6f000] border border-[#b6f000]/30 shadow-[0_0_12px_rgba(182,240,0,0.2)] font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
                }`}
                aria-pressed={mode === 'developer'}
              >
                {/* Active arrow marker */}
                <span
                  className={`text-[#b6f000] font-pixel text-[10px] transition-opacity duration-150 ${
                    mode === 'developer' ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  ▶
                </span>
                <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Developer Mode</span>
              </button>

              <button
                onClick={() => handleModeChange('creative')}
                onMouseEnter={() => sound.playHover()}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-mono transition-all duration-200 ${
                  mode === 'creative'
                    ? 'bg-[#f5b800]/15 text-[#f5b800] border border-[#f5b800]/30 shadow-[0_0_12px_rgba(245,184,0,0.2)] font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
                }`}
                aria-pressed={mode === 'creative'}
              >
                {/* Active arrow marker */}
                <span
                  className={`text-[#f5b800] font-pixel text-[10px] transition-opacity duration-150 ${
                    mode === 'creative' ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  ▶
                </span>
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Creative Mode</span>
              </button>
            </div>

            {/* Smooth transition subtext */}
            <div className="min-h-[4rem] mb-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={mode}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl font-sans"
                >
                  {mode === 'developer'
                    ? PERSONAL_INFO.heroSubtextDev
                    : PERSONAL_INFO.heroSubtextCreative}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-mono font-semibold flex items-center gap-2 transition-all duration-200 ${
                  mode === 'developer'
                    ? 'bg-[#b6f000] text-black hover:bg-[#a5db00] shadow-[0_0_15px_rgba(182,240,0,0.3)]'
                    : 'bg-[#f5b800] text-black hover:bg-[#e0a700] shadow-[0_0_15px_rgba(245,184,0,0.3)]'
                }`}
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-mono text-zinc-300 hover:text-white bg-[#1a1a1a] border border-white/10 hover:border-white/20 transition-all duration-200"
              >
                Get in Touch
              </a>

              <a
                href="/resume.pdf"
                download="Baseeth_Viklar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-mono text-zinc-400 hover:text-zinc-200 flex items-center gap-1.5 transition-colors"
              >
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Quick Micro Tech Highlights Bar */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500">
              <div className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-[#b6f000]" />
                <span>TypeScript / Node.js</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#f5b800]" />
                <span>React / Next.js / Flutter</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#00f0ff] font-pixel text-[9px]">[SaaS]</span>
                <span>Multi-Tenant Architecture</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
