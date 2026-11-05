import React from 'react';
import { ArrowUp, Mail, Linkedin, Github, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#05080f] py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          <div>
            <div className="text-base font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-blue-500 inline-block shadow-sm shadow-blue-500/50"></span>
              <span>{profile.name}</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              iOS Application Developer · Accenture, Pune · Ex-TCS
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">
              Enterprise Projects
            </a>
            <a href="#ai-engineering" className="hover:text-blue-400 transition-colors">
              AI Engineering
            </a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </a>
            <button
              onClick={onOpenResume}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Resume
            </button>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-slate-400">
            Engineered with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
