import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { sound } from '../sound';
import { X, Sparkles, Trophy, RotateCcw } from 'lucide-react';

interface GamepadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GamepadModal: React.FC<GamepadModalProps> = ({ isOpen, onClose }) => {
  const [coins, setCoins] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [combo, setCombo] = useState(1);
  const [bounce, setBounce] = useState(false);

  if (!isOpen) return null;

  const handleCoinClick = () => {
    sound.playCoin();
    setBounce(true);
    setTimeout(() => setBounce(false), 150);

    const newCoins = coins + 1;
    setCoins(newCoins);
    if (newCoins > highScore) {
      setHighScore(newCoins);
    }

    if (newCoins % 5 === 0) {
      setCombo(prev => Math.min(prev + 1, 8));
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#b6f000', '#f5b800', '#00f0ff']
      });
    }
  };

  const resetScore = () => {
    sound.playClick();
    setCoins(0);
    setCombo(1);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="arcade-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-md bg-[#121212] border-2 border-[#00f0ff]/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(0,240,255,0.2)]">
        
        {/* Arcade Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-ping" />
            <h2 id="arcade-title" className="font-pixel text-xs text-[#00f0ff] tracking-wider">
              ARCADE ROOM // 8-BIT
            </h2>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            aria-label="Close Arcade"
            className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Arcade Cabinet Screen */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 text-center relative overflow-hidden mb-6">
          {/* Subtle CRT Scanlines */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />

          {/* Avatar Character */}
          <div className="relative inline-block mb-4">
            <div
              onClick={handleCoinClick}
              className={`w-28 h-28 mx-auto rounded-xl border-2 border-[#b6f000]/60 p-1 bg-[#141414] cursor-pointer select-none transition-transform duration-150 ${
                bounce ? 'scale-90 rotate-2' : 'hover:scale-105'
              }`}
            >
              <img
                src="/avatar.png"
                alt="Baseeth Pixel Avatar"
                className="w-full h-full object-cover rounded-lg pixelated"
              />
            </div>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-[#b6f000] text-black font-pixel text-[9px] whitespace-nowrap shadow-md">
              TAP ME!
            </span>
          </div>

          <p className="font-mono text-xs text-zinc-400 mb-4">
            Tap Baseeth to mine 8-bit energy!
          </p>

          {/* Scores */}
          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/[0.08]">
            <div className="bg-[#141414] p-2 rounded-lg border border-white/5">
              <span className="font-mono text-[9px] text-zinc-500 uppercase block">Coins</span>
              <span className="font-pixel text-sm text-[#f5b800]">{coins}</span>
            </div>
            <div className="bg-[#141414] p-2 rounded-lg border border-white/5">
              <span className="font-mono text-[9px] text-zinc-500 uppercase block">Combo</span>
              <span className="font-pixel text-sm text-[#00f0ff]">x{combo}</span>
            </div>
            <div className="bg-[#141414] p-2 rounded-lg border border-white/5">
              <span className="font-mono text-[9px] text-zinc-500 uppercase flex items-center justify-center gap-0.5">
                <Trophy className="w-2.5 h-2.5 text-[#b6f000]" />
                Best
              </span>
              <span className="font-pixel text-sm text-[#b6f000]">{highScore}</span>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between text-xs font-mono">
          <button
            onClick={resetScore}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Counter</span>
          </button>

          <button
            onClick={handleCoinClick}
            className="px-4 py-2 rounded-lg bg-[#00f0ff] text-black font-semibold flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:bg-[#20f5ff] transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Insert Coin</span>
          </button>
        </div>

      </div>
    </div>
  );
};
