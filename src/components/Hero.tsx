import React from 'react';
import { Mail, Linkedin, Github, FileText, ChevronRight, Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="about" className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden scroll-mt-24">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 radial-glow pointer-events-none -z-10" />
      <div className="absolute top-1/4 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
            {/* Clean unboxed kicker with subtle separator */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
              <span className="text-blue-400 font-semibold">{profile.name}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">iOS Application Developer</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">{profile.currentCompany}, {profile.currentLocation}</span>
            </div>

            {/* Main Display Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Crafting high-impact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">native iOS</span> applications.
            </h1>

            {/* Professional Headline Quote */}
            <blockquote className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed border-l-2 border-blue-500/60 pl-4 py-1 italic bg-blue-950/15 rounded-r-lg">
              &ldquo;{profile.headline}&rdquo;
            </blockquote>

            {/* Bio Narrative from Verified Summary */}
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Results-driven iOS Developer with 4+ years of enterprise experience across <strong className="text-slate-200 font-medium">Tata Consultancy Services</strong> and <strong className="text-slate-200 font-medium">Accenture</strong>. Specialized in Swift, SwiftUI, UIKit, Combine, RESTful API integration, and resilient offline-first Core Data architectures deployed to 1,000+ operational airline crew and utility field personnel.
            </p>

            {/* CTAs & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-600/25 transition-all active:scale-95 cursor-pointer"
              >
                <span>View Enterprise Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all active:scale-95 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Resume PDF</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact</span>
              </a>

              {/* Social Icon Links */}
              <div className="flex items-center gap-2 pl-2 sm:border-l border-slate-800">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-800/80 transition-all"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-all"
                  aria-label="GitHub profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="p-2 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-800/80 transition-all"
                  aria-label="Send direct email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Actual Uploaded Professional Portrait Crop */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-xs sm:max-w-sm">
              {/* Subtle blue & violet backlight halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-sky-400/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              {/* Frame Container */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-700/70 shadow-2xl shadow-black/80">
                <div className="aspect-[4/4.6] w-full overflow-hidden bg-gradient-to-b from-slate-800/50 to-slate-950 flex items-center justify-center">
                  <img
                    src={profile.portraitImage}
                    alt="Munshi Sariful Islam - iOS Application Developer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                  />
                </div>

                {/* Subtle bottom gradient scrim for legible status bar */}
                <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500 shadow-sm shadow-blue-400"></span>
                      <span className="font-semibold text-white tracking-wide">{profile.name}</span>
                    </div>
                    <span className="text-slate-300 font-mono text-[11px] bg-slate-800/90 px-2 py-0.5 rounded border border-slate-700/60">
                      {profile.currentCompany} · {profile.currentLocation}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    iOS Application Developer · 4+ Years Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metrics Ribbon Below Split - Tightened spacing */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/40 border border-slate-800/70">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              4+ <span className="text-blue-400 text-base sm:text-lg font-sans font-medium">Years</span>
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Enterprise iOS Experience
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/40 border border-slate-800/70">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              1,000+ <span className="text-blue-400 text-base sm:text-lg font-sans font-medium">Users</span>
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Operational Fleet & Field Users
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/40 border border-slate-800/70">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              ~15% <span className="text-blue-400 text-base sm:text-lg font-sans font-medium">Gain</span>
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Network Payload Efficiency
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/40 border border-slate-800/70">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              Swift <span className="text-blue-400 text-base sm:text-lg font-sans font-medium">& UI</span>
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              SwiftUI & UIKit Production Core
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
