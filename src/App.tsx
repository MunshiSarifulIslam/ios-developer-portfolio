/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AiSection } from './components/AiSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationAndAchievementsSection } from './components/EducationAndAchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060911] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Professional Experience Section */}
        <ExperienceSection />

        {/* Featured Enterprise & Personal Projects */}
        <ProjectsSection />

        {/* Dedicated AI & Machine Learning Section */}
        <AiSection />

        {/* Technical Skills Matrix */}
        <SkillsSection />

        {/* Education & Corporate Cricket Achievement */}
        <EducationAndAchievementsSection />

        {/* Direct Contact & Social Dispatcher */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Comprehensive Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
