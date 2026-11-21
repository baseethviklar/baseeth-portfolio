import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data';
import { sound } from '../sound';
import { X, Mail, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { LinkedInIcon } from './LinkedInIcon';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-md bg-[#121212] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-pixel text-xs text-[#f5b800]">CONTACT // DIRECT</span>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            aria-label="Close Contact"
            className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Info */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-[#b6f000] mb-3">
            <img src="/avatar.png" alt="Baseeth Viklar" className="w-full h-full object-cover pixelated" />
          </div>
          <h3 id="contact-modal-title" className="font-display text-xl font-bold text-white">
            Baseeth Viklar
          </h3>
          <p className="font-mono text-xs text-zinc-400 mt-1">Software Engineer</p>
          <div className="inline-flex items-center gap-1.5 text-xs text-zinc-500 font-mono mt-1">
            <MapPin className="w-3.5 h-3.5 text-[#f5b800]" />
            <span>Mumbai, India</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            onClick={() => sound.playClick()}
            className="w-full py-3 px-4 rounded-xl bg-[#b6f000] text-black font-mono font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#a6dc00] transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email ({PERSONAL_INFO.email})</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="w-full py-3 px-4 rounded-xl bg-[#1c1c1c] text-white font-mono font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 border border-white/10 hover:border-[#f5b800]/50 hover:text-[#f5b800] transition-colors"
          >
            <LinkedInIcon className="w-4 h-4" />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            onClick={copyEmail}
            className="w-full py-2.5 px-4 rounded-xl bg-[#161616] text-zinc-300 hover:text-white font-mono text-xs flex items-center justify-center gap-2 border border-white/5 hover:border-white/15 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#b6f000]" />
                <span className="text-[#b6f000]">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Email Address</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
