import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ProjectImage } from './ProjectImage';

export const ProjectsSection: React.FC = () => {
  const { enterpriseProjects, personalProjects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-14 sm:py-16 border-t border-slate-800/80 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase">
              <span>Production Deployments</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">Air India & PG&E Systems</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1.5 tracking-tight">
              Featured Enterprise Projects
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1.5">
              Mission-critical iOS and iPad applications engineered for reliability, offline data continuity, and operational workflows.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono hidden md:block">
            <span>Air India & PG&E Enterprise Applications</span>
          </div>
        </div>

        {/* Enterprise Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {enterpriseProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl"
            >
              <div>
                {/* Visual Header */}
                <ProjectImage
                  src={project.image}
                  alt={project.title}
                  aspectRatio="video"
                  overlayTag={project.clientOrType}
                  overlayBadge="Enterprise iOS"
                />

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5 mb-3.5 line-clamp-1">{project.subtitle}</p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-4">
                    {project.keyHighlights.slice(0, 3).map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 pt-0 border-t border-slate-800/60 mt-auto">
                <div className="flex flex-wrap gap-1.5 pt-3.5 mb-3.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[11px] font-mono text-slate-500 py-0.5">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-slate-800/90 hover:bg-blue-600 rounded-lg transition-all cursor-pointer"
                >
                  <span>Architecture & Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Personal iOS Projects Subsection */}
        <div className="mt-12 sm:mt-14">
          <div className="max-w-2xl mb-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase">
              <span>Independent Craftsmanship</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">Personal Projects</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 tracking-tight">
              Personal iOS Projects
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Consumer utilities built with SwiftUI, Core Data persistence, and Apple Human Interface Guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {personalProjects.map((p) => (
              <div
                key={p.id}
                className="p-5 sm:p-6 rounded-2xl bg-slate-900/40 hover:bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <span className="text-xs font-mono text-blue-400">{p.clientOrType}</span>
                    <span className="text-xs text-slate-400">{p.role}</span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">{p.title}</h4>
                  <p className="text-xs text-slate-400 mt-0.5 mb-3">{p.subtitle}</p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {p.summary}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {p.keyHighlights.map((kh, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{kh}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3.5 border-t border-slate-800 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {p.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProject(p)}
                    className="text-xs font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer shrink-0"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
