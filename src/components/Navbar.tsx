import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'AI Engineering', href: '#ai-engineering' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070B14]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 sm:gap-8 h-16 sm:h-18">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#about"
            className="text-slate-100 font-semibold tracking-tight text-base sm:text-lg whitespace-nowrap shrink-0 group flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-sm bg-blue-500 inline-block shadow-sm shadow-blue-500/50 group-hover:scale-110 transition-transform"></span>
            <span>{PORTFOLIO_DATA.profile.name}</span>
            <span className="hidden lg:inline text-xs font-normal text-slate-400 pl-1 border-l border-slate-800">
              iOS Developer
            </span>
          </a>

          {/* Zone 2: 4-5 single-line clean nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-600/30 transition-all active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f1d] border-b border-slate-800 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-blue-400 text-sm font-medium py-2 px-3 rounded-md hover:bg-slate-800/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-medium text-white bg-blue-600 rounded-lg shadow-sm"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View & Download Resume</span>
              </button>
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1 text-xs text-slate-400 hover:text-white py-1.5"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
