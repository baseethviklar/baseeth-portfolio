import React from 'react';
import { SKILLS_DATA } from '../data';
import { Code2, Server, Database, Layout, Smartphone, Wrench } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Languages':
        return <Code2 className="w-4 h-4 text-[#b6f000]" />;
      case 'Backend & Systems':
        return <Server className="w-4 h-4 text-[#00f0ff]" />;
      case 'Databases':
        return <Database className="w-4 h-4 text-[#f5b800]" />;
      case 'Frontend':
        return <Layout className="w-4 h-4 text-[#b6f000]" />;
      case 'Mobile':
        return <Smartphone className="w-4 h-4 text-[#00f0ff]" />;
      case 'Tools & AI Workflows':
        return <Wrench className="w-4 h-4 text-[#f5b800]" />;
      default:
        return <Code2 className="w-4 h-4 text-zinc-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="font-pixel text-[11px] text-[#b6f000] tracking-wider">
            04 // TECHNICAL SKILLS
          </span>
          <div className="h-[1px] flex-1 bg-white/10" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Skills & Tooling
          </h2>
          <span className="font-mono text-xs text-zinc-500">
            // LANGUAGES, SYSTEMS, DATABASES & DEV TOOLS
          </span>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.map((group, gIdx) => (
            <div
              key={gIdx}
              className="bg-[#121212]/90 border border-white/10 rounded-xl p-6 relative hover:border-white/20 transition-all duration-200 group shadow-lg"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#b6f000]/30 group-hover:border-[#b6f000] transition-colors" />

              <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-white/[0.08]">
                <div className="p-2 rounded bg-[#181818] border border-white/10">
                  {getIcon(group.category)}
                </div>
                <h3 className="font-display font-semibold text-base text-white">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg bg-[#181818] border border-white/5 hover:border-[#b6f000]/40 font-mono text-xs text-zinc-300 hover:text-white transition-all duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
