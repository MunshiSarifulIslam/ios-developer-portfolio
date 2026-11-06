import React, { useState } from 'react';
import { Search, Sparkles, BookOpen, Layers, CheckCircle2, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...skillCategories.map((c) => c.category)];

  const filteredCategories = skillCategories
    .filter((cat) => (selectedCategory === 'All' ? true : cat.category === selectedCategory))
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (s.note && s.note.toLowerCase().includes(searchQuery.toLowerCase()))
      ),
    }))
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-14 sm:py-16 border-t border-slate-800/80 relative scroll-mt-24">
      {/* Ambient background accent */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span>Technical Domain Matrix</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">Professional Skills & Active Learning</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1.5 tracking-tight">
              Technical Skills & Competencies
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1.5">
              Organized into established production competencies and emerging AI/ML learning areas.
            </p>
          </div>

          {/* Quick Search Input with glowing focus */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Swift, Core Data)..."
              className="w-full pl-8 pr-12 py-1.5 text-xs text-white bg-slate-900/90 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 placeholder:text-slate-500 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[11px] font-mono text-slate-400 hover:text-white px-1 py-0.5 rounded transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Tabs (Interactive Segmented Control) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="space-y-6">
          {filteredCategories.length === 0 ? (
            <div className="p-8 text-center rounded-xl bg-slate-900/30 border border-slate-800 text-slate-400 text-xs">
              No skills found matching &ldquo;{searchQuery}&rdquo;.
            </div>
          ) : (
            filteredCategories.map((group) => {
              const isLearning = group.type === 'learning';
              return (
                <div
                  key={group.category}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${
                    isLearning
                      ? 'bg-gradient-to-br from-indigo-950/20 to-slate-900/40 border-indigo-900/50 hover:border-indigo-700/70 shadow-lg'
                      : 'bg-slate-900/30 hover:bg-slate-900/45 border-slate-800/80 hover:border-slate-700 shadow-md'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800/70">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-sm ${
                          isLearning ? 'bg-indigo-400 shadow-[0_0_6px_#818cf8]' : 'bg-blue-400 shadow-[0_0_6px_#60a5fa]'
                        }`}
                      />
                      <h3 className="text-sm font-bold text-white tracking-tight">
                        {group.category}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      {isLearning ? (
                        <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/80 border border-indigo-800/60 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-sm">
                          <BookOpen className="w-3 h-3 text-indigo-400" />
                          <span>Active Learning & Exploration</span>
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-blue-300 bg-blue-950/80 border border-blue-800/60 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-sm">
                          <CheckCircle2 className="w-3 h-3 text-blue-400" />
                          <span>Production Experience</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-4">{group.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`group/skill p-3 rounded-xl border transition-all duration-300 ${
                          isLearning
                            ? 'bg-slate-950/60 border-indigo-900/30 hover:border-indigo-500/60 hover:shadow-[0_0_15px_rgba(99,102,241,0.15)] hover:-translate-y-0.5'
                            : 'bg-slate-950/50 border-slate-800/80 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.12)] hover:-translate-y-0.5'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs sm:text-sm font-semibold text-slate-100 group-hover/skill:text-blue-300 transition-colors">
                            {skill.name}
                          </span>
                          {skill.isLearning && (
                            <span className="text-[9px] font-mono uppercase tracking-wider text-indigo-300 bg-indigo-950/90 px-1.5 py-0.5 rounded border border-indigo-900/60 shrink-0">
                              Learning
                            </span>
                          )}
                        </div>
                        {skill.note && (
                          <p className="text-[11px] text-slate-400 mt-1 leading-normal group-hover/skill:text-slate-300 transition-colors">
                            {skill.note}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
