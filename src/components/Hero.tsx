import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, FileText, ChevronRight, Phone, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ParticleCanvas } from './ParticleCanvas';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { profile } = PORTFOLIO_DATA;
  const heroRef = useRef<HTMLElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number; opacity: number }>({
    x: 0,
    y: 0,
    opacity: 0,
  });
  const [isFinePointer, setIsFinePointer] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    // Only enable spotlight on desktop fine-pointer devices (mice)
    const pointerQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(pointerQuery.matches);

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!isFinePointer || prefersReducedMotion || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 0.12,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="about"
      className="relative pt-24 pb-14 lg:pt-32 lg:pb-18 overflow-hidden scroll-mt-24 select-none sm:select-auto"
    >
      {/* 1. Desktop Cursor-Following Spotlight */}
      {isFinePointer && !prefersReducedMotion && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-700 -z-10"
          style={{
            opacity: mousePos.opacity,
            background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.18), rgba(139, 92, 246, 0.08) 40%, transparent 75%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* 2. Floating Particle Canvas & Shooting Light Trails */}
      <ParticleCanvas />

      {/* 3. Layered Moving Aurora Gradients (16s Continuous Cycle) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] pointer-events-none -z-20 overflow-hidden">
        {/* Aurora Layer A: Electric Blue to Cyan */}
        <div className="absolute -top-24 left-1/4 w-[550px] h-[350px] rounded-full bg-gradient-to-tr from-blue-600/18 via-cyan-500/12 to-transparent blur-[90px] animate-aurora-primary" />
        {/* Aurora Layer B: Indigo to Violet */}
        <div className="absolute top-10 right-1/4 w-[500px] h-[320px] rounded-full bg-gradient-to-bl from-indigo-600/15 via-violet-600/12 to-transparent blur-[85px] animate-aurora-secondary" />
        {/* Deep navy vignette to maintain accessible text contrast */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#060911]/60 to-[#060911]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
            {/* Clean unboxed kicker with subtle separator and pulse */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
              <span className="inline-flex items-center gap-1.5 text-blue-400 font-semibold bg-blue-950/40 border border-blue-900/50 px-2.5 py-0.5 rounded-full shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                <span>{profile.name}</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300 font-medium">iOS Application Developer</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">{profile.currentCompany}, {profile.currentLocation}</span>
            </div>

            {/* Main Display Headline with animated gradient sheen */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Crafting high-impact{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
                native iOS
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 rounded-full opacity-60"></span>
              </span>{' '}
              applications.
            </h1>

            {/* Professional Headline Quote */}
            <blockquote className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed border-l-2 border-blue-500/80 pl-4 py-1.5 italic bg-blue-950/20 rounded-r-xl shadow-inner backdrop-blur-xs">
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
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all duration-300 active:scale-95 cursor-pointer overflow-hidden"
              >
                {/* Light shimmer sheen across primary button */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-20 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />
                <span>View Enterprise Projects</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-blue-500/50 hover:text-white rounded-lg transition-all duration-300 active:scale-95 cursor-pointer shadow-md hover:shadow-blue-950/30"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Resume PDF</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/70 border border-transparent hover:border-slate-700/60 rounded-lg transition-all"
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
                  className="p-2 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-800/80 transition-all duration-200"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-all duration-200"
                  aria-label="GitHub profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="p-2 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-800/80 transition-all duration-200"
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
              {/* Multi-Layer Ambient Glow Halo */}
              <div
                className="absolute -inset-2 bg-gradient-to-tr from-blue-600/35 via-cyan-500/25 to-indigo-600/35 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 -z-10 animate-aurora-primary"
                aria-hidden="true"
              />

              {/* Second pulse beacon glow */}
              <div
                className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-3xl blur-lg opacity-60 group-hover:opacity-90 transition-opacity duration-500 -z-10"
                aria-hidden="true"
              />

              {/* Frame Container */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-700/80 group-hover:border-blue-500/50 shadow-2xl shadow-black/90 transition-all duration-500">
                {/* Initial Light Sweep across portrait on load */}
                {!prefersReducedMotion && (
                  <div
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-20 animate-light-sweep-once"
                    aria-hidden="true"
                  />
                )}

                <div className="aspect-[4/4.6] w-full overflow-hidden bg-gradient-to-b from-slate-800/50 to-slate-950 flex items-center justify-center">
                  <img
                    src={profile.portraitImage}
                    alt="Munshi Sariful Islam - iOS Application Developer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-103"
                  />
                </div>

                {/* Subtle bottom gradient scrim for legible status bar */}
                <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent backdrop-blur-xs">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
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

        {/* Full-width Metrics Ribbon with Subtle Hover Elevation */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800/70 hover:border-slate-700 transition-all duration-300 group">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums group-hover:text-blue-400 transition-colors">
              4+ <span className="text-blue-400 text-base sm:text-lg font-sans font-medium">Years</span>
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Enterprise iOS Experience
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800/70 hover:border-slate-700 transition-all duration-300 group">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums group-hover:text-blue-400 transition-colors">
              1,000+ <span className="text-blue-400 text-base sm:text-lg font-sans font-medium">Users</span>
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Operational Fleet & Field Users
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800/70 hover:border-slate-700 transition-all duration-300 group">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums group-hover:text-blue-400 transition-colors">
              ~15% <span className="text-blue-400 text-base sm:text-lg font-sans font-medium">Gain</span>
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Network Payload Efficiency
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800/70 hover:border-slate-700 transition-all duration-300 group">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums group-hover:text-blue-400 transition-colors">
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
