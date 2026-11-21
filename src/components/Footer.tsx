import React from 'react';
import { sound } from '../sound';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#090909] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-zinc-500">
        
        {/* Left: Pixel Logo & Copyright */}
        <div className="flex items-center gap-3">
          <span className="font-pixel text-xs text-[#b6f000]">BASEETH</span>
          <span>© {new Date().getFullYear()} Baseeth Viklar. All rights reserved.</span>
        </div>

        {/* Center: Tech note */}
        <div className="text-center sm:text-left text-zinc-500">
          Crafted with React, TypeScript & Tailwind CSS
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => sound.playHover()}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/10 hover:border-[#b6f000]/40 text-zinc-400 hover:text-white transition-all duration-200"
          aria-label="Scroll to top"
        >
          <span>TOP</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#b6f000]" />
        </button>

      </div>
    </footer>
  );
};
