import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data';
import { sound } from '../sound';
import { Mail, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { LinkedInIcon } from './LinkedInIcon';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="font-pixel text-[11px] text-[#b6f000] tracking-wider">
            06 // GET IN TOUCH
          </span>
          <div className="h-[1px] flex-1 bg-white/10" />
        </div>

        {/* Contact Container with frame */}
        <div className="bg-[#121212]/90 border border-white/10 rounded-2xl p-6 sm:p-10 lg:p-12 relative shadow-2xl text-center">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#b6f000]" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#b6f000]" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#b6f000]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#b6f000]" />

          <span className="font-mono text-xs text-[#b6f000] uppercase tracking-widest block mb-3">
            Open for Engineering Opportunities
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Let&apos;s Build Something Memorable.
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8 font-sans">
            Whether you want to discuss multi-tenant SaaS architecture, high-performance web systems, or potential engineering roles, my inbox is always open.
          </p>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181818] border border-white/10 text-xs font-mono text-zinc-400 mb-8">
            <MapPin className="w-3.5 h-3.5 text-[#f5b800]" />
            <span>Based in Mumbai, India</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Primary Email Mailto */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="px-6 py-3 rounded-xl bg-[#b6f000] text-black font-mono font-semibold text-sm flex items-center gap-2.5 hover:bg-[#a6dc00] shadow-[0_0_20px_rgba(182,240,0,0.25)] transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* LinkedIn Profile */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="px-6 py-3 rounded-xl bg-[#1c1c1c] text-white font-mono font-semibold text-sm flex items-center gap-2.5 border border-white/10 hover:border-[#f5b800]/50 hover:text-[#f5b800] transition-all duration-200"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Copy Email Button */}
            <button
              onClick={copyEmail}
              onMouseEnter={() => sound.playHover()}
              className="px-5 py-3 rounded-xl bg-[#161616] text-zinc-300 hover:text-white font-mono text-xs flex items-center gap-2 border border-white/5 hover:border-white/20 transition-all duration-200"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#b6f000]" />
                  <span className="text-[#b6f000]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-8 text-xs font-mono text-zinc-500">
            <span>Direct Email: </span>
            <code className="text-zinc-300 select-all">{PERSONAL_INFO.email}</code>
          </div>

        </div>

      </div>
    </section>
  );
};
