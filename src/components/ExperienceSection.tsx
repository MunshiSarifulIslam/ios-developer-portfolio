import React from 'react';
import { Calendar, MapPin, CheckCircle2, Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-14 sm:py-16 border-t border-slate-800/80 relative scroll-mt-24">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase">
            <Briefcase className="w-3.5 h-3.5 text-blue-400" />
            <span>Career Timeline</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">4+ Years Professional Experience</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1.5 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1.5">
            Documented engineering contributions across enterprise mobile systems at Accenture and Tata Consultancy Services.
          </p>
        </div>

        {/* Animated Vertical Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Spine Line (Desktop/Tablet) with animated gradient flow */}
          <div
            className="hidden md:block absolute left-4 sm:left-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500/60 to-slate-800"
            aria-hidden="true"
          />

          {/* Experience Cards */}
          <div className="space-y-8 md:space-y-10">
            {experiences.map((exp, idx) => (
              <div key={exp.company} className="relative md:pl-16">
                {/* Glowing Beacon Timeline Node Marker */}
                <div
                  className="hidden md:flex absolute left-4 sm:left-6 top-6 -translate-x-1/2 items-center justify-center z-10"
                  aria-hidden="true"
                >
                  {exp.current ? (
                    <div className="relative flex items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-blue-400 opacity-60"></span>
                      <span className="relative flex h-4 w-4 rounded-full bg-blue-500 border-2 border-white shadow-[0_0_12px_#3b82f6]"></span>
                    </div>
                  ) : (
                    <div className="relative flex items-center justify-center">
                      <span className="relative flex h-3.5 w-3.5 rounded-full bg-slate-700 border-2 border-blue-400/80 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                    </div>
                  )}
                </div>

                {/* Experience Card */}
                <div
                  className={`group p-6 sm:p-7 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                    exp.current
                      ? 'bg-gradient-to-br from-slate-900/95 via-slate-900/70 to-blue-950/25 border-blue-500/50 shadow-xl shadow-blue-950/30 hover:border-blue-400/80'
                      : 'bg-slate-900/40 hover:bg-slate-900/70 border-slate-800 hover:border-slate-700 shadow-lg'
                  }`}
                >
                  {/* Subtle top border illumination sheen on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-400/50 transition-all duration-500 pointer-events-none" />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-300 bg-blue-950/80 border border-blue-800/70 px-2.5 py-0.5 rounded-full shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
                            <span>Current Role</span>
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mt-1.5">
                        <span className="font-semibold text-slate-200">{exp.company}</span>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <div className="flex items-center gap-1 text-slate-400">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-slate-800/80 group-hover:bg-slate-800 px-3 py-1 rounded-lg border border-slate-700/60 shrink-0 self-start shadow-sm transition-colors">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Responsibilities & Achievements */}
                  <div className="space-y-2 mb-5">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      Verified Responsibilities & Achievements
                    </div>
                    <div className={`grid grid-cols-1 ${exp.highlights.length > 2 ? 'md:grid-cols-2' : ''} gap-2.5`}>
                      {exp.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5 group-hover:text-cyan-400 transition-colors" />
                          <span className="leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies strip */}
                  <div className="pt-3.5 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-medium text-slate-500 mr-1.5">Technologies:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-slate-300 bg-slate-800/60 hover:bg-slate-800 hover:text-white px-2.5 py-0.5 rounded border border-slate-700/50 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
