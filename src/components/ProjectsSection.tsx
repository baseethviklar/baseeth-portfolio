import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mode } from '../types';
import { PROJECTS_DATA } from '../data';
import { sound } from '../sound';
import { Terminal, Sparkles, Server, Check, ArrowRight, ShieldCheck, Layers, GitBranch } from 'lucide-react';

interface ProjectsSectionProps {
  mode: Mode;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ mode }) => {
  // Local card tab override if user wants to inspect individual project in the other view
  const [activeTabs, setActiveTabs] = useState<Record<string, 'developer' | 'creative'>>({});

  const getEffectiveTab = (projectId: string) => {
    return activeTabs[projectId] || mode;
  };

  const handleTabToggle = (projectId: string, tab: 'developer' | 'creative') => {
    sound.playClick();
    setActiveTabs(prev => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="font-pixel text-[11px] text-[#b6f000] tracking-wider">
            03 // FEATURED PROJECTS
          </span>
          <div className="h-[1px] flex-1 bg-white/10" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Enterprise & Client Systems
            </h2>
            <p className="text-zinc-400 text-sm mt-1">
              Toggle the global mode or use individual card switches to view architecture vs. user impact.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 bg-[#161616] px-3 py-1.5 rounded-lg border border-white/5">
            <span className="inline-block w-2 h-2 rounded-full bg-[#b6f000]" />
            <span>3 Major Enterprise Systems</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {PROJECTS_DATA.map((proj, pIdx) => {
            const currentTab = getEffectiveTab(proj.id);
            const isDev = currentTab === 'developer';

            return (
              <div
                key={proj.id}
                className="bg-[#121212]/90 border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden transition-all duration-300 hover:border-white/20 shadow-xl"
              >
                {/* Accent top line indicating mode */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 transition-colors duration-300 ${
                    isDev ? 'bg-[#b6f000]' : 'bg-[#f5b800]'
                  }`}
                />

                {/* Card Top: Title, Badge, and In-card Mode Switch */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-zinc-500">
                        {String(pIdx + 1).padStart(2, '0')}.
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {proj.title}
                      </h3>
                      {proj.badge && (
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-zinc-300">
                          {proj.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-zinc-400 text-sm sm:text-base font-medium">
                      {proj.subtitle}
                    </p>
                  </div>

                  {/* Card view switcher */}
                  <div className="flex items-center gap-1 bg-[#1a1a1a] p-1 rounded-lg border border-white/10 self-start lg:self-center">
                    <button
                      onClick={() => handleTabToggle(proj.id, 'developer')}
                      onMouseEnter={() => sound.playHover()}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                        isDev
                          ? 'bg-[#b6f000] text-black font-semibold shadow-sm'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                      aria-label="View developer architecture"
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Developer</span>
                    </button>
                    <button
                      onClick={() => handleTabToggle(proj.id, 'creative')}
                      onMouseEnter={() => sound.playHover()}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                        !isDev
                          ? 'bg-[#f5b800] text-black font-semibold shadow-sm'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                      aria-label="View creative and UI impact"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Creative</span>
                    </button>
                  </div>
                </div>

                {/* Card Body: Dynamic Content based on Developer vs Creative */}
                <div className="py-6">
                  <AnimatePresence mode="wait">
                    {isDev ? (
                      /* DEVELOPER VIEW */
                      <motion.div
                        key="dev"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6"
                      >
                        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
                          {proj.devDescription.summary}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Architecture Column */}
                          <div className="bg-[#161616]/70 border border-white/5 rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-3">
                              <Server className="w-4 h-4 text-[#b6f000]" />
                              <h4 className="font-mono text-xs text-zinc-300 uppercase tracking-wider font-semibold">
                                Architecture & Resilience
                              </h4>
                            </div>
                            <ul className="space-y-2.5">
                              {proj.devDescription.architecture.map((arch, aIdx) => (
                                <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                                  <ArrowRight className="w-3.5 h-3.5 text-[#b6f000] mt-0.5 flex-shrink-0" />
                                  <span>{arch}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technical Highlights Column */}
                          <div className="bg-[#161616]/70 border border-white/5 rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-3">
                              <ShieldCheck className="w-4 h-4 text-[#b6f000]" />
                              <h4 className="font-mono text-xs text-zinc-300 uppercase tracking-wider font-semibold">
                                Core Services & Protocols
                              </h4>
                            </div>
                            <ul className="space-y-2.5">
                              {proj.devDescription.technicalHighlights.map((tech, tIdx) => (
                                <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                                  <Check className="w-3.5 h-3.5 text-[#b6f000] mt-0.5 flex-shrink-0" />
                                  <span>{tech}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      /* CREATIVE VIEW */
                      <motion.div
                        key="creative"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6"
                      >
                        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
                          {proj.creativeDescription.summary}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* User Impact Column */}
                          <div className="bg-[#161616]/70 border border-white/5 rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-3">
                              <Sparkles className="w-4 h-4 text-[#f5b800]" />
                              <h4 className="font-mono text-xs text-zinc-300 uppercase tracking-wider font-semibold">
                                User Impact & Features
                              </h4>
                            </div>
                            <ul className="space-y-2.5">
                              {proj.creativeDescription.impact.map((imp, iIdx) => (
                                <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                                  <ArrowRight className="w-3.5 h-3.5 text-[#f5b800] mt-0.5 flex-shrink-0" />
                                  <span>{imp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Experience Design Column */}
                          <div className="bg-[#161616]/70 border border-white/5 rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-3">
                              <Layers className="w-4 h-4 text-[#f5b800]" />
                              <h4 className="font-mono text-xs text-zinc-300 uppercase tracking-wider font-semibold">
                                Interaction & UI Design
                              </h4>
                            </div>
                            <ul className="space-y-2.5">
                              {proj.creativeDescription.userExperience.map((ux, uIdx) => (
                                <li key={uIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                                  <Check className="w-3.5 h-3.5 text-[#f5b800] mt-0.5 flex-shrink-0" />
                                  <span>{ux}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Tech Tags Bottom Bar */}
                <div className="pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-[#181818] border border-white/10 font-mono text-xs text-zinc-300 hover:border-white/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>Production Architecture</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
