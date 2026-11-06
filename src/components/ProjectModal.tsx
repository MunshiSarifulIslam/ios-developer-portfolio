import React, { useEffect } from 'react';
import { X, CheckCircle, Database, WifiOff, Cpu, Layers, BarChart2, Shield, ArrowUpRight } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { ProjectImage } from './ProjectImage';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0f1d] border border-slate-700/80 rounded-2xl shadow-2xl z-10 text-slate-100 p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-blue-400 font-mono mb-2">
              <span>{project.clientOrType}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">{project.role}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-slate-400 text-sm mt-1">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-8 pt-6">
          {/* Main Visual if present */}
          {project.image && (
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
              <ProjectImage
                src={project.image}
                alt={project.title}
                aspectRatio="video"
                className="border-b-0"
                overlayTag={project.clientOrType}
                overlayBadge="Architecture Blueprint"
              />
            </div>
          )}

          {/* Overview */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">
              System Overview
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Metrics Grid if present */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-blue-400">
                    {m.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Offline Architecture & Data Flow */}
          {project.offlineArchitecture && (
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-950/20 to-slate-900/40 border border-blue-900/40 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-300">
                <WifiOff className="w-4 h-4 text-blue-400" />
                <span>Offline-First Architecture & Synchronization Pipeline</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.offlineArchitecture}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-xs text-slate-400 font-mono">
                <div className="p-2 bg-slate-900/80 rounded border border-slate-800">
                  <span className="text-blue-400">1. Local Storage:</span> Core Data background context
                </div>
                <div className="p-2 bg-slate-900/80 rounded border border-slate-800">
                  <span className="text-blue-400">2. Queueing:</span> Idempotent sync jobs
                </div>
                <div className="p-2 bg-slate-900/80 rounded border border-slate-800">
                  <span className="text-blue-400">3. Resolution:</span> Server merge on gate Wi-Fi/LTE
                </div>
              </div>
            </div>
          )}

          {/* Key Engineering Highlights */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">
              Technical Implementation Highlights
            </h3>
            <div className="space-y-2.5">
              {project.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span className="leading-normal">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Statement */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Production Impact
            </span>
            <p className="text-sm text-slate-200 italic font-medium">
              &ldquo;{project.impactStatement}&rdquo;
            </p>
          </div>

          {/* Tech Stack */}
          <div className="pt-2">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded text-xs font-mono text-slate-300 bg-slate-800/80 border border-slate-700/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
