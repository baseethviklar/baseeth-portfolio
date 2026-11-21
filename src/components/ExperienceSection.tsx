import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mode } from '../types';
import { EXPERIENCE_DATA } from '../data';
import { Briefcase, Calendar, MapPin, CheckCircle2, Bot, Sparkles } from 'lucide-react';

interface ExperienceSectionProps {
  mode: Mode;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ mode }) => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="font-pixel text-[11px] text-[#b6f000] tracking-wider">
            02 // PROFESSIONAL EXPERIENCE
          </span>
          <div className="h-[1px] flex-1 bg-white/10" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <span className="font-mono text-xs text-zinc-500">
            {mode === 'developer' ? '// PRODUCTION ARCHITECTURE & SERVICES' : '// IMPACT & ENTERPRISE DELIVERY'}
          </span>
        </div>

        {/* Experience Timeline Card */}
        <div className="space-y-8">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#121212]/90 border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 relative shadow-xl hover:border-white/20 transition-all duration-300"
            >
              {/* Corner Pixel Marker */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#b6f000]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#b6f000]" />

              {/* Role Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="font-pixel text-xs text-[#b6f000]">
                      {exp.role.toUpperCase()}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#b6f000]/10 text-[#b6f000] border border-[#b6f000]/20">
                      CURRENT
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#f5b800]" />
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {exp.company}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5 bg-[#181818] px-3 py-1.5 rounded-md border border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-[#f5b800]" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#181818] px-3 py-1.5 rounded-md border border-white/5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Bullet Points with Smooth Mode Transition */}
              <div className="py-6 min-h-[14rem]">
                <AnimatePresence mode="wait">
                  <motion.ul
                    key={mode}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3.5"
                  >
                    {(mode === 'developer' ? exp.devPoints : exp.creativePoints).map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300">
                        <CheckCircle2
                          className={`w-4 h-4 mt-1 flex-shrink-0 transition-colors ${
                            mode === 'developer' ? 'text-[#b6f000]' : 'text-[#f5b800]'
                          }`}
                        />
                        <span className="leading-relaxed font-sans">{point}</span>
                      </li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </div>

              {/* Agile & AI Workflows Note */}
              <div className="p-4 bg-[#181818]/80 border border-white/5 rounded-xl mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-[#00f0ff]" />
                  <span>
                    <strong className="text-zinc-200">AI-Augmented Velocity:</strong> Cursor, Claude Code, GitHub Copilot
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#f5b800]" />
                  <span>Agile / Jira (Sprint Planning, Stand-ups, Code Reviews)</span>
                </div>
              </div>

              {/* Stack Pills */}
              <div className="pt-4 border-t border-white/[0.08]">
                <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-2.5">
                  Core Technologies Employed
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded bg-[#181818] border border-white/10 font-mono text-xs text-zinc-300 hover:border-[#b6f000]/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
