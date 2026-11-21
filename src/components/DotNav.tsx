import React, { useEffect, useState } from 'react';
import { NAV_SECTIONS } from '../data';
import { sound } from '../sound';

export const DotNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (const sec of NAV_SECTIONS) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    sound.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-3.5"
    >
      {NAV_SECTIONS.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => scrollTo(sec.id)}
            onMouseEnter={() => sound.playHover()}
            className="group flex items-center gap-2 py-1 focus:outline-none"
            aria-label={`Jump to ${sec.label}`}
          >
            {/* Label tooltip on hover */}
            <span
              className={`font-mono text-[11px] px-2 py-0.5 rounded tracking-wider uppercase transition-all duration-200 pointer-events-none opacity-0 group-hover:opacity-100 ${
                isActive
                  ? 'bg-[#f5b800] text-black font-semibold'
                  : 'bg-[#181818] text-zinc-300 border border-white/10'
              }`}
            >
              {sec.pixelTag} {sec.label}
            </span>

            {/* Dot indicator */}
            <div
              className={`relative flex items-center justify-center transition-all duration-300 ${
                isActive ? 'w-4 h-4' : 'w-3 h-3 group-hover:scale-125'
              }`}
            >
              {isActive && (
                <span className="absolute inset-0 rounded-full bg-[#f5b800]/30 animate-ping" />
              )}
              <span
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-2.5 h-2.5 bg-[#f5b800] shadow-[0_0_10px_#f5b800]'
                    : 'w-1.5 h-1.5 bg-zinc-600 group-hover:bg-zinc-300'
                }`}
              />
            </div>
          </button>
        );
      })}
    </nav>
  );
};
