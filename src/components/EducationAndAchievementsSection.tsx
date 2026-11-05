import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, Trophy } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationAndAchievementsSection: React.FC = () => {
  const { education, achievements } = PORTFOLIO_DATA;

  return (
    <section className="py-14 sm:py-16 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Education Block */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase">
                <GraduationCap className="w-4 h-4 text-blue-400" />
                <span>Academic Foundation</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1 tracking-tight">
                Education
              </h2>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {education.degree}
                  </h3>
                  <div className="text-xs sm:text-sm font-medium text-slate-300 mt-0.5">
                    {education.institution}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{education.location}</span>
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-slate-800/70 px-2.5 py-1 rounded border border-slate-700/60">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{education.timeline}</span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-800/60 px-2 py-0.5 rounded">
                    {education.grade}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  Key Computer Science Coursework
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-xs text-slate-300 bg-slate-800/60 px-2.5 py-0.5 rounded border border-slate-700/50"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Block */}
          <div className="lg:col-span-5">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase">
                <Trophy className="w-4 h-4 text-blue-400" />
                <span>Extracurricular Honors</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1 tracking-tight">
                Corporate Athletic Achievements
              </h2>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
              {achievements.map((ach, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-tight">
                      {ach.title}
                    </h3>
                    <div className="text-[11px] font-medium text-slate-400 mb-1">
                      {ach.organization}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </div>
              ))}

              <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Inter-company and corporate-level competitive cricket representation.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
