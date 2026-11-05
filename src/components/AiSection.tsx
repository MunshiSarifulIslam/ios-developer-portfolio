import React, { useState } from 'react';
import {
  Brain,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Code2,
  Info
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AiSection: React.FC = () => {
  const { aiProjects } = PORTFOLIO_DATA;
  const { poleInspection, socialSentiment } = aiProjects;

  // PoleInspection interactive demonstration state
  const [activePoleCategory, setActivePoleCategory] = useState<number>(0);

  const poleDemoData = [
    {
      category: 'Normal Pole',
      demoTag: 'Demonstration Class: Sound Alignment',
      demoTagStyle: 'text-emerald-400 bg-emerald-950/70 border-emerald-800/60',
      simulatedConfidence: '98.4%',
      simulatedCondition: 'Demonstration visual features: vertical orientation intact, conductors clear, structural hardware secure.',
      pipelineTarget: 'Target Workflow: Vision request routes image through Core ML model; if classified as Normal, flags record for routine logging without urgent dispatch.',
      targetLatency: 'Target Goal: <50ms local inference via Vision VNCoreMLRequest',
    },
    {
      category: 'Broken Pole',
      demoTag: 'Demonstration Class: Structural Damage',
      demoTagStyle: 'text-rose-400 bg-rose-950/70 border-rose-800/60',
      simulatedConfidence: '95.1%',
      simulatedCondition: 'Demonstration visual features: structural fracture or broken crossarm geometry identified in sample frame.',
      pipelineTarget: 'Target Workflow: Flags priority work order in local offline Core Data queue for urgent field maintenance when connectivity resumes.',
      targetLatency: 'Target Goal: <50ms local inference via Vision VNCoreMLRequest',
    },
    {
      category: 'Leaning Pole',
      demoTag: 'Demonstration Class: Angular Deviation',
      demoTagStyle: 'text-amber-400 bg-amber-950/70 border-amber-800/60',
      simulatedConfidence: '92.5%',
      simulatedCondition: 'Demonstration visual features: angular tilt beyond standard vertical threshold detected in sample frame.',
      pipelineTarget: 'Target Workflow: Records estimated angle in offline inspection metadata to schedule stability reinforcement.',
      targetLatency: 'Target Goal: <50ms local inference via Vision VNCoreMLRequest',
    },
    {
      category: 'Tree Interruption',
      demoTag: 'Demonstration Class: Vegetation Encroachment',
      demoTagStyle: 'text-orange-400 bg-orange-950/70 border-orange-800/60',
      simulatedConfidence: '96.8%',
      simulatedCondition: 'Demonstration visual features: tree canopy branches adjacent to power lines within safety buffer.',
      pipelineTarget: 'Target Workflow: Automatically generates vegetation clearance entry with geo-coordinates in offline storage.',
      targetLatency: 'Target Goal: <50ms local inference via Vision VNCoreMLRequest',
    },
  ];

  // Social Sentiment demo state
  const sentimentPresets = [
    {
      input: "Flight AI-102 from Mumbai was delayed 4 hours with zero gate updates, but the cabin purser and crew handled dinner and child seating with absolute grace. Great crew, horrible baggage delay at carousel 4.",
      sentiment: "Mixed Sentiment (Simulated Sample)",
      sentimentScore: { positive: 35, negative: 45, neutral: 20 },
      topics: ["Gate Communication Delay", "Cabin Crew Excellence", "Baggage Carousel Wait"],
      ragSummary: "Simulated Synthesis: Ground operations latency (departure delay & carousel wait) contrast with cabin crew customer service praise. Demonstrates topic separation of operational vs. personnel feedback.",
      improvement: "Conceptual Recommendation: Trigger automated passenger status updates via mobile push notification during flight delays.",
    },
    {
      input: "The new digital voyage reporting interface made boarding reconciliation fast. Cabin safety check completed 10 minutes ahead of departure pushback.",
      sentiment: "Positive Sentiment (Simulated Sample)",
      sentimentScore: { positive: 92, negative: 2, neutral: 6 },
      topics: ["Digital Voyage App", "Boarding Speed", "Safety Check"],
      ragSummary: "Simulated Synthesis: Positive operational reception regarding paperless voyage reporting workflow. Highlights time savings during pre-flight checks.",
      improvement: "Conceptual Recommendation: Evaluate potential pre-caching workflows for additional turnaround routes.",
    },
    {
      input: "Power lines along highway sector 4 have overgrown branches touching conductor lines. High fire and outage risk during dry wind seasons.",
      sentiment: "Negative / Hazard Report (Simulated Sample)",
      sentimentScore: { positive: 0, negative: 88, neutral: 12 },
      topics: ["Conductor Proximity", "Vegetation Clearance", "Hazard Warning"],
      ragSummary: "Simulated Synthesis: Urgent field safety concern regarding vegetation encroachment near electrical infrastructure.",
      improvement: "Conceptual Recommendation: Route report directly into tree-trimming work queue with GPS validation.",
    },
  ];

  const [selectedSentimentPreset, setSelectedSentimentPreset] = useState<number>(0);

  return (
    <section id="ai-engineering" className="py-14 sm:py-16 border-t border-slate-800/80 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase">
            <Brain className="w-4 h-4 text-blue-400" />
            <span>Machine Learning & AI Explorations</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">On-Device & NLP Research</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1.5 tracking-tight">
            Exploring the Future of AI Engineering
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
            Exploring the integration of machine learning into native mobile systems: researching how on-device Core ML models can support offline field classification in zero-connectivity environments, and conceptualizing how LLMs and RAG architectures can structure customer feedback data.
          </p>
        </div>

        {/* Project 1: PoleInspection */}
        <div className="p-5 sm:p-7 rounded-3xl bg-slate-900/50 border border-slate-800 mb-10 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-5 border-b border-slate-800">
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {poleInspection.title}
                </h3>
                {/* Clearly labeled status */}
                <span className="text-xs font-medium text-amber-300 bg-amber-950/70 border border-amber-800/60 px-2.5 py-0.5 rounded-full">
                  {poleInspection.status}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">{poleInspection.subtitle}</p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {poleInspection.technologies.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono text-slate-300 bg-slate-800/80 px-2.5 py-0.5 rounded border border-slate-700/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Grid Layout: Visual & Interactive Simulation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 mt-5 items-start">
            {/* Left: Project Image & Development Objectives */}
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                <img
                  src={poleInspection.image}
                  alt="PoleInspection Computer Vision Interface"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Development Objective
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {poleInspection.overview}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/90 space-y-1 text-xs text-slate-400">
                <div className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Technical Pipeline Goals</span>
                </div>
                <ul className="space-y-1 text-[11px] text-slate-400 pt-1 pl-1">
                  {poleInspection.technicalGoals.map((g, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-blue-400">·</span>
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Interactive Core ML Category Simulator (Explicitly Labeled Demonstration) */}
            <div className="lg:col-span-6 bg-slate-950/80 rounded-2xl p-5 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                    <Cpu className="w-3.5 h-3.5 text-blue-400" />
                    <span>Classification Workflow Simulator</span>
                  </div>
                  <span className="text-[10px] font-mono text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-900/50">
                    DEMONSTRATION DATA
                  </span>
                </div>

                {/* Explicit Disclaimer as requested */}
                <div className="mb-3.5 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-2 text-[11px] text-slate-400">
                  <Info className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Demonstration Notice:</strong> All values, classification tags, and percentages below are simulated demonstration data illustrating the intended workflow. They do not represent live production benchmark figures.
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-3">
                  Select an inspection category to inspect the simulated on-device Vision workflow:
                </p>

                {/* 4 Category Filter Tabs */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {poleDemoData.map((item, idx) => (
                    <button
                      key={item.category}
                      onClick={() => setActivePoleCategory(idx)}
                      className={`px-3 py-2 rounded-xl text-left text-xs font-medium transition-all cursor-pointer border ${
                        activePoleCategory === idx
                          ? 'bg-blue-600/20 text-white border-blue-500 shadow-sm'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      <div className="font-semibold">{item.category}</div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                        Sample Class #{idx + 1}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Simulated Classification Card */}
                {(() => {
                  const current = poleDemoData[activePoleCategory];
                  return (
                    <div className="space-y-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-mono text-[11px]">Selected Category:</span>
                        <span className="font-bold text-white">{current.category}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-mono text-[11px]">Simulated State:</span>
                        <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded border ${current.demoTagStyle}`}>
                          {current.demoTag}
                        </span>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-slate-400">Simulated Softmax Output (Demo):</span>
                          <span className="font-mono text-blue-400 font-bold">{current.simulatedConfidence}</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full transition-all duration-300"
                            style={{ width: current.simulatedConfidence }}
                          />
                        </div>
                      </div>

                      <div className="text-slate-300 text-[11px] leading-relaxed">
                        <span className="text-slate-500 block mb-0.5">Simulated Visual Features:</span>
                        {current.simulatedCondition}
                      </div>

                      <div className="text-slate-300 text-[11px] pt-2 border-t border-slate-800/80 leading-relaxed">
                        <span className="text-blue-400 font-medium block mb-0.5">Target Offline Workflow:</span>
                        {current.pipelineTarget}
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-[10px] text-slate-500 font-mono">
                        <span>Offline Storage: Simulated Queue</span>
                        <span>{current.targetLatency}</span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: Social Media Sentiment Intelligence */}
        <div className="p-5 sm:p-7 rounded-3xl bg-slate-900/50 border border-slate-800 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-5 border-b border-slate-800">
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {socialSentiment.title}
                </h3>
                {/* Clearly labeled concept */}
                <span className="text-xs font-medium text-indigo-300 bg-indigo-950/70 border border-indigo-800/60 px-2.5 py-0.5 rounded-full">
                  {socialSentiment.status}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">{socialSentiment.subtitle}</p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {socialSentiment.technologies.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono text-slate-300 bg-slate-800/80 px-2.5 py-0.5 rounded border border-slate-700/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-4xl">
              {socialSentiment.overview}
            </p>

            {/* Explicit Concept Disclaimer */}
            <div className="mt-3.5 p-3 rounded-xl bg-indigo-950/25 border border-indigo-900/40 text-xs text-indigo-300/90 flex items-start gap-2">
              <Info className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-medium">Concept Disclaimer:</strong> {socialSentiment.conceptNote}
              </div>
            </div>

            {/* Core Concept Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-5">
              {socialSentiment.features.map((feat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/80">
                  <div className="text-xs font-semibold text-blue-400 mb-1">
                    0{idx + 1}. {feat.title}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Interactive Concept Simulator (Explicitly Labeled Simulated Output) */}
            <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>Simulated Sentiment & RAG Workflow Explorer</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  Simulated Outputs · Non-Production
                </span>
              </div>

              <div className="text-xs text-slate-400 mb-3">
                Select a simulated feedback post to preview how the proposed multi-stage pipeline is structured:
              </div>

              {/* Sample post selectors */}
              <div className="flex flex-wrap gap-2 mb-3.5">
                {sentimentPresets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedSentimentPreset(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
                      selectedSentimentPreset === idx
                        ? 'bg-blue-600 text-white border-blue-500'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    Simulated Scenario #{idx + 1}
                  </button>
                ))}
              </div>

              {/* Output Pipeline Inspector */}
              {(() => {
                const s = sentimentPresets[selectedSentimentPreset];
                return (
                  <div className="space-y-3">
                    {/* Raw Ingested Input */}
                    <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                      <span className="text-slate-500 block mb-1 font-mono text-[10px] uppercase">
                        Stage 1: Sample Customer Post (Simulated Ingestion)
                      </span>
                      &ldquo;{s.input}&rdquo;
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {/* Sentiment & Topics */}
                      <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1.5">
                        <span className="text-slate-500 block font-mono text-[10px] uppercase">
                          Stage 2: Sentiment Classification & Topic Clustering
                        </span>
                        <div className="text-xs font-semibold text-white">
                          Classification: <span className="text-blue-400">{s.sentiment}</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-0.5">
                          {s.topics.map((t, idx) => (
                            <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                              #{t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actionable RAG Insight */}
                      <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
                        <span className="text-slate-500 block font-mono text-[10px] uppercase">
                          Stage 3: Conceptual RAG Summary & Recommendation
                        </span>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {s.ragSummary}
                        </p>
                        <div className="pt-1.5 text-xs text-blue-300 font-medium">
                          {s.improvement}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
