import React from 'react';
import { Mode } from '../types';
import { sound } from '../sound';

interface HeaderProps {
  mode: Mode;
  setMode: (mode: Mode) => void;
  isSoundOn: boolean;
  onToggleSound: () => void;
}

export const Header: React.FC<HeaderProps> = ({ mode, setMode, isSoundOn, onToggleSound }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#0d0d0d]/80 border-b border-white/[0.06] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Status Indicator */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b6f000] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b6f000]"></span>
          </span>
          <span className="font-mono text-[11px] sm:text-xs tracking-wider text-zinc-400 uppercase hidden xs:inline-block">
            Status: <span className="text-zinc-200">Open to Work</span>
          </span>
        </div>

        {/* Center: Brand Logo in Pixel Font */}
        <div className="flex items-center">
          <a
            href="#hero"
            onClick={() => sound.playClick()}
            className="group flex items-center gap-2 focus:outline-none"
            aria-label="Baseeth Viklar Home"
          >
            <span className="font-pixel text-sm sm:text-base text-[#b6f000] tracking-widest drop-shadow-[0_0_10px_rgba(182,240,0,0.35)] transition-transform duration-200 group-hover:scale-105">
              BASEETH
            </span>
            <span className="font-mono text-xs text-zinc-500 hidden sm:inline">.dev</span>
          </a>
        </div>

        {/* Right: Quick Controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Quick Mode Toggle Pill */}
          <div className="hidden md:flex items-center bg-[#151515] border border-white/10 rounded-full p-0.5 text-xs font-mono">
            <button
              onClick={() => {
                sound.playClick();
                setMode('developer');
              }}
              className={`px-3 py-1 rounded-full transition-all duration-200 ${
                mode === 'developer'
                  ? 'bg-[#b6f000] text-black font-semibold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              DEV
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setMode('creative');
              }}
              className={`px-3 py-1 rounded-full transition-all duration-200 ${
                mode === 'creative'
                  ? 'bg-[#f5b800] text-black font-semibold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              CREATIVE
            </button>
          </div>

          {/* Sound Toggle (Header alternative) */}
          <button
            onClick={onToggleSound}
            aria-label={isSoundOn ? "Turn sound off" : "Turn sound on"}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded border border-white/10 bg-[#161616] text-zinc-300 hover:text-white hover:border-[#b6f000]/50 transition-all"
            title={isSoundOn ? "Mute 8-bit audio" : "Enable 8-bit sound"}
          >
            <span className={`inline-block w-1.5 h-1.5 rounded-full ${isSoundOn ? 'bg-[#b6f000] shadow-[0_0_6px_#b6f000]' : 'bg-zinc-600'}`}></span>
            <span className="hidden sm:inline">{isSoundOn ? 'AUDIO ON' : 'AUDIO OFF'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
