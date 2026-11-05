import React, { useState, useEffect } from 'react';
import { X, Printer, Download, Copy, Check, FileText, Mail, MapPin, Linkedin, Github, ExternalLink, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { profile, experiences, enterpriseProjects, skillCategories, education, achievements } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const md = `
# ${profile.name}
${profile.title} | ${profile.phone} | ${profile.email}
LinkedIn: ${profile.linkedin} | GitHub: ${profile.github}

## PROFESSIONAL SUMMARY
${profile.bio}

## PROFESSIONAL EXPERIENCE
${experiences
  .map(
    (e) => `
### ${e.role} | ${e.company}, ${e.location} | ${e.period}
${e.highlights.map((h) => `• ${h}`).join('\n')}
Technologies: ${e.technologies.join(', ')}
`
  )
  .join('\n')}

## KEY PROJECTS
${enterpriseProjects
  .map(
    (p) => `
### ${p.title}
${p.summary}
Key Highlights:
${p.keyHighlights.map((k) => `• ${k}`).join('\n')}
Technologies: ${p.technologies.join(', ')}
`
  )
  .join('\n')}

## EDUCATION
${education.degree} | ${education.institution} | ${education.timeline} | ${education.grade}

## ACHIEVEMENTS
${achievements.map((a) => `• ${a.title}: ${a.description}`).join('\n')}
`;
    navigator.clipboard.writeText(md.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0a0f1d] border border-slate-700 rounded-2xl shadow-2xl z-10 text-slate-100 flex flex-col">
        {/* Modal Top Bar */}
        <div className="sticky top-0 bg-[#0a0f1d]/95 backdrop-blur-md px-5 py-3.5 border-b border-slate-800 flex items-center justify-between gap-3 z-20">
          <div className="flex items-center gap-2 min-w-0">
            <FileText className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-white truncate">
              Munshi_Sariful_Islam_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Direct download of actual attached PDF */}
            <a
              href={profile.resumePdfUrl}
              download="Munshi_Sariful_Islam_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-600/30 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={handleCopyMarkdown}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Document Preview Surface */}
        <div className="p-6 sm:p-10 space-y-6 bg-slate-950/70 border-t border-slate-900 mx-4 sm:mx-6 my-4 rounded-xl print:bg-white print:text-black">
          {/* Document Header */}
          <div className="border-b border-slate-800 pb-5 text-center sm:text-left sm:flex sm:justify-between sm:items-start gap-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
                {profile.name}
              </h1>
              <p className="text-sm font-semibold text-blue-400 mt-0.5">
                {profile.title}
              </p>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                {profile.phone} · {profile.email}
              </p>
            </div>

            <div className="mt-3 sm:mt-0 space-y-1 text-xs text-slate-300 font-mono text-left sm:text-right shrink-0">
              <div>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                  LinkedIn Profile
                </a>
              </div>
              <div>
                <a href={profile.github} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                  GitHub Profile
                </a>
              </div>
              <div className="text-slate-400">
                {profile.currentLocation}
              </div>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div>
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest border-b border-slate-800/80 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Section: Technical Skills */}
          <div>
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest border-b border-slate-800/80 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs">
              <div>
                <span className="font-semibold text-slate-200">Languages & Frameworks: </span>
                <span className="text-slate-300">Swift, SwiftUI (primary), UIKit, Combine, Swift Concurrency (async/await)</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Architecture & Design Patterns: </span>
                <span className="text-slate-300">MVVM, MVC, Protocol-Oriented Programming, Dependency Injection, Delegation, Singleton</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">iOS Frameworks & Features: </span>
                <span className="text-slate-300">UserNotifications, Core Location, MapKit, Cocoa Touch</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Networking & APIs: </span>
                <span className="text-slate-300">URLSession, Alamofire, RESTful APIs, JSON Parsing, Firebase</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Persistence & Security: </span>
                <span className="text-slate-300">Core Data, UserDefaults, Keychain, Secure Coding Practices</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Testing & Performance: </span>
                <span className="text-slate-300">XCTest, XCUITest, Instruments, Debugging, Performance Profiling</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">CI/CD & Distribution: </span>
                <span className="text-slate-300">GitHub Actions, Bitrise, TestFlight, App Store Connect, Swift Package Manager</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Tools: </span>
                <span className="text-slate-300">Xcode, Git, GitHub, GitLab, Jira, Postman, Figma</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Practices: </span>
                <span className="text-slate-300">Agile/Scrum, Clean Code, Offline-First Architecture</span>
              </div>
            </div>
          </div>

          {/* Section: Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest border-b border-slate-800/80 pb-1">
              Professional Experience
            </h2>

            {experiences.map((exp) => (
              <div key={exp.company} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <span className="text-xs font-bold text-white uppercase">{exp.role}</span>
                    <span className="text-xs text-slate-400"> | {exp.company}, {exp.location}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                </div>

                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pl-1">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="leading-relaxed">{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Section: Key Projects */}
          <div className="space-y-3.5">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest border-b border-slate-800/80 pb-1">
              Key Projects
            </h2>

            {enterpriseProjects.map((p) => (
              <div key={p.id} className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-white">{p.title}</span>
                  <span className="text-[11px] font-mono text-slate-400">{p.clientOrType}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{p.summary}</p>
                <div className="text-[11px] text-slate-400 font-mono">
                  Technologies: {p.technologies.join(', ')}
                </div>
              </div>
            ))}
          </div>

          {/* Section: Education & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
            <div>
              <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest border-b border-slate-800/80 pb-1 mb-1.5">
                Education
              </h2>
              <div className="text-xs">
                <div className="font-bold text-white">{education.degree}</div>
                <div className="text-slate-400">{education.institution} | {education.timeline}</div>
                <div className="text-emerald-400 font-semibold mt-0.5">{education.grade}</div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest border-b border-slate-800/80 pb-1 mb-1.5">
                Achievements
              </h2>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                {achievements.map((a, idx) => (
                  <li key={idx} className="leading-relaxed">
                    <span className="font-medium text-white">{a.title}: </span>
                    {a.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 px-6 border-t border-slate-800 bg-[#0a0f1d] flex items-center justify-between text-xs text-slate-400">
          <span>Munshi Sariful Islam · iOS Developer</span>
          <div className="flex gap-2.5">
            <a
              href={profile.resumePdfUrl}
              download="Munshi_Sariful_Islam_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
