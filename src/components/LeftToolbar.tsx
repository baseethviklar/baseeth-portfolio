import React from 'react';
import { Volume2, VolumeX, Phone, Gamepad2, FolderDown } from 'lucide-react';
import { sound } from '../sound';

interface LeftToolbarProps {
  isSoundOn: boolean;
  onToggleSound: () => void;
  onOpenContact: () => void;
  onOpenGamepad: () => void;
}

export const LeftToolbar: React.FC<LeftToolbarProps> = ({
  isSoundOn,
  onToggleSound,
  onOpenContact,
  onOpenGamepad,
}) => {
  return (
    <aside
      aria-label="Quick actions"
      className="fixed bottom-6 left-3 sm:left-6 z-40 flex flex-col gap-2.5 bg-[#121212]/90 backdrop-blur-md p-1.5 rounded-lg border border-white/10 shadow-2xl"
    >
      {/* 1. Sound On/Off */}
      <button
        onClick={onToggleSound}
        onMouseEnter={() => sound.playHover()}
        aria-label={isSoundOn ? "Turn sound off" : "Turn sound on"}
        title={isSoundOn ? "Sound Effects: ON (Click to mute)" : "Sound Effects: OFF (Click to unmute)"}
        className={`group relative p-2.5 rounded transition-all duration-200 ${
          isSoundOn
            ? 'bg-[#b6f000]/15 text-[#b6f000] border border-[#b6f000]/30 shadow-[0_0_10px_rgba(182,240,0,0.2)]'
            : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/80 border border-transparent'
        }`}
      >
        {isSoundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        <span className="sr-only">Toggle 8-bit sound</span>
        {/* Tooltip */}
        <span className="absolute left-full ml-3 px-2 py-1 rounded bg-[#181818] border border-white/10 text-[10px] font-mono text-zinc-300 uppercase tracking-wider whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
          {isSoundOn ? "Audio: Active" : "Audio: Muted"}
        </span>
      </button>

      {/* 2. Contact Phone Icon */}
      <button
        onClick={() => {
          sound.playClick();
          onOpenContact();
        }}
        onMouseEnter={() => sound.playHover()}
        aria-label="Open contact info"
        title="Quick Contact"
        className="group relative p-2.5 rounded text-zinc-400 hover:text-[#f5b800] hover:bg-zinc-800/80 border border-transparent hover:border-[#f5b800]/30 transition-all duration-200"
      >
        <Phone className="w-4 h-4" />
        <span className="sr-only">Contact</span>
        {/* Tooltip */}
        <span className="absolute left-full ml-3 px-2 py-1 rounded bg-[#181818] border border-white/10 text-[10px] font-mono text-zinc-300 uppercase tracking-wider whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
          Get in Touch
        </span>
      </button>

      {/* 3. Gamepad Icon (Hidden Fun Interaction) */}
      <button
        onClick={() => {
          sound.playCoin();
          onOpenGamepad();
        }}
        onMouseEnter={() => sound.playHover()}
        aria-label="Launch secret arcade easter egg"
        title="Retro Arcade Easter Egg"
        className="group relative p-2.5 rounded text-zinc-400 hover:text-[#00f0ff] hover:bg-zinc-800/80 border border-transparent hover:border-[#00f0ff]/30 transition-all duration-200"
      >
        <Gamepad2 className="w-4 h-4 transition-transform group-hover:scale-110" />
        <span className="sr-only">Play Easter Egg</span>
        {/* Tooltip */}
        <span className="absolute left-full ml-3 px-2 py-1 rounded bg-[#181818] border border-white/10 text-[10px] font-mono text-zinc-300 uppercase tracking-wider whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
          Retro Arcade [Fun]
        </span>
      </button>

      {/* 4. Folder Icon (Download Resume) */}
      <a
        href="/resume.pdf"
        download="Baseeth_Viklar_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => sound.playClick()}
        onMouseEnter={() => sound.playHover()}
        aria-label="Download Resume PDF"
        title="Download Resume (/resume.pdf)"
        className="group relative p-2.5 rounded text-zinc-400 hover:text-[#b6f000] hover:bg-zinc-800/80 border border-transparent hover:border-[#b6f000]/30 transition-all duration-200"
      >
        <FolderDown className="w-4 h-4" />
        <span className="sr-only">Download Resume</span>
        {/* Tooltip */}
        <span className="absolute left-full ml-3 px-2 py-1 rounded bg-[#181818] border border-white/10 text-[10px] font-mono text-zinc-300 uppercase tracking-wider whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
          Resume (PDF)
        </span>
      </a>
    </aside>
  );
};
