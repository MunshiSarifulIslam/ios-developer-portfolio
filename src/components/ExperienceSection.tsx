import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-14 sm:py-16 border-t border-slate-800/80 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase">
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

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                exp.current
                  ? 'bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-blue-950/20 border-blue-500/40 shadow-xl shadow-blue-950/20'
                  : 'bg-slate-900/40 hover:bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="text-xs font-medium text-blue-300 bg-blue-950/80 border border-blue-800/60 px-2.5 py-0.5 rounded-full">
                        Current Role
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

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-slate-800/60 px-3 py-1 rounded-lg border border-slate-700/60 shrink-0 self-start">
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
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
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
                    className="text-[11px] font-mono text-slate-300 bg-slate-800/60 px-2.5 py-0.5 rounded border border-slate-700/50"
                  >
                    {tech}
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
