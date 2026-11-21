import React from 'react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data';
import { GraduationCap, Award, Calendar, ExternalLink } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="font-pixel text-[11px] text-[#b6f000] tracking-wider">
            05 // EDUCATION & CREDENTIALS
          </span>
          <div className="h-[1px] flex-1 bg-white/10" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Academic Background
          </h2>
          <span className="font-mono text-xs text-zinc-500">
            // POSTGRADUATE, UNDERGRADUATE & CLOUD CERTIFICATIONS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Degrees */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-mono text-xs text-zinc-400 uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#b6f000]" />
              <span>Degrees</span>
            </h3>

            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={idx}
                className="bg-[#121212]/90 border border-white/10 rounded-xl p-6 relative hover:border-white/20 transition-all duration-200"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#b6f000]/10 text-[#b6f000] border border-[#b6f000]/20">
                    {edu.badge}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-400">
                    <Calendar className="w-3.5 h-3.5 text-[#f5b800]" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <h4 className="font-display text-lg font-bold text-white mt-1">
                  {edu.degree}
                </h4>

                <p className="text-zinc-400 text-sm mt-1 font-medium">
                  {edu.institution}
                </p>

                <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-500">Graduation Score</span>
                  <span className="font-mono text-xs sm:text-sm text-[#b6f000] font-semibold">
                    {edu.score}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-mono text-xs text-zinc-400 uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4 text-[#f5b800]" />
              <span>Certifications</span>
            </h3>

            {CERTIFICATIONS_DATA.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="bg-[#121212]/90 border border-white/10 rounded-xl p-6 relative hover:border-white/20 transition-all duration-200 group"
              >
                {/* Accent badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#f5b800]/10 text-[#f5b800] border border-[#f5b800]/20">
                    {cert.badge}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                </div>

                <h4 className="font-display text-lg font-bold text-white">
                  {cert.title}
                </h4>

                <p className="font-mono text-xs text-[#f5b800] mt-1">
                  Issuer: {cert.issuer}
                </p>

                <p className="text-zinc-400 text-xs sm:text-sm mt-3 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}

            {/* Continuous Learning Box */}
            <div className="bg-[#161616]/70 border border-white/5 rounded-xl p-5 text-xs font-mono text-zinc-400 space-y-2">
              <p className="text-zinc-200 font-semibold">// Continuous Learning</p>
              <p>Actively building and studying distributed architectures, high-concurrency systems, and modern AI development tooling.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
