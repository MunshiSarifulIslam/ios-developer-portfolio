import React, { useState, useEffect } from 'react';
import {
  Scan,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Play,
  Pause,
  Maximize2
} from 'lucide-react';

interface PoleInspectionScannerProps {
  imageSrc: string;
  activeCategoryIndex: number;
  onSelectCategory: (index: number) => void;
}

export const PoleInspectionScanner: React.FC<PoleInspectionScannerProps> = ({
  imageSrc,
  activeCategoryIndex,
  onSelectCategory,
}) => {
  const [isScanningActive, setIsScanningActive] = useState<boolean>(true);
  const [currentPipelineStage, setCurrentPipelineStage] = useState<number>(2); // 0: Capture, 1: Analysis, 2: Classification, 3: Result
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
  }, []);

  // Pipeline stage progression cycle
  useEffect(() => {
    if (!isScanningActive || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentPipelineStage((prev) => (prev + 1) % 4);
    }, 2800);

    return () => clearInterval(interval);
  }, [isScanningActive, prefersReducedMotion]);

  const pipelineStages = [
    { name: '1. Image Capture', desc: 'Camera frame ingestion' },
    { name: '2. AI Analysis', desc: 'Apple Vision edge extraction' },
    { name: '3. Defect Classification', desc: 'Core ML tensor inference' },
    { name: '4. Inspection Result', desc: 'Local Core Data persistence' },
  ];

  // Bounding box overlay coordinate specs (relative percentages matching the image)
  const boundingBoxes = [
    {
      id: 'normal',
      categoryIndex: 0,
      name: 'Normal Pole',
      label: 'NORMAL POLE (Demo: 98.4%)',
      status: 'Sound Alignment',
      color: 'emerald',
      boxStyle: 'left-[60%] top-[28%] w-[12%] h-[55%]',
      textColor: 'text-emerald-400',
      bgColor: 'bg-emerald-950/80',
      borderColor: 'border-emerald-500',
      ringColor: 'rgba(16, 185, 129, 0.4)',
    },
    {
      id: 'broken',
      categoryIndex: 1,
      name: 'Broken Pole',
      label: 'BROKEN POLE (Demo: 95.1%)',
      status: 'Structural Fracture',
      color: 'rose',
      boxStyle: 'left-[46%] top-[30%] w-[9%] h-[55%]',
      textColor: 'text-rose-400',
      bgColor: 'bg-rose-950/80',
      borderColor: 'border-rose-500',
      ringColor: 'rgba(244, 63, 94, 0.4)',
    },
    {
      id: 'leaning',
      categoryIndex: 2,
      name: 'Leaning Pole',
      label: 'LEANING POLE (Demo: 92.5%)',
      status: 'Angular Deviation 12°',
      color: 'amber',
      boxStyle: 'left-[31%] top-[45%] w-[11%] h-[35%]',
      textColor: 'text-amber-400',
      bgColor: 'bg-amber-950/80',
      borderColor: 'border-amber-500',
      ringColor: 'rgba(245, 158, 11, 0.4)',
    },
    {
      id: 'tree',
      categoryIndex: 3,
      name: 'Tree Interruption',
      label: 'TREE INTERRUPTION (Demo: 96.8%)',
      status: 'Vegetation Proximity',
      color: 'yellow',
      boxStyle: 'left-[35%] top-[42%] w-[10%] h-[40%]',
      textColor: 'text-yellow-400',
      bgColor: 'bg-yellow-950/80',
      borderColor: 'border-yellow-500',
      ringColor: 'rgba(234, 179, 8, 0.4)',
    },
  ];

  return (
    <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl group">
      {/* HUD Header Strip */}
      <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="font-semibold text-slate-200">VISION_INSPECTOR_V2</span>
          <span className="text-slate-500 hidden sm:inline">| Apple Vision + Core ML</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] text-amber-300 bg-amber-950/70 border border-amber-900/60 px-2 py-0.5 rounded">
            DEMO SIMULATOR
          </span>
          <button
            onClick={() => setIsScanningActive((prev) => !prev)}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            title={isScanningActive ? 'Pause Scanning Beam' : 'Resume Scanning Beam'}
            aria-label={isScanningActive ? 'Pause Scanning' : 'Resume Scanning'}
          >
            {isScanningActive ? <Pause className="w-3.5 h-3.5 text-cyan-400" /> : <Play className="w-3.5 h-3.5 text-slate-400" />}
          </button>
        </div>
      </div>

      {/* Main Inspection Canvas Viewport */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950 select-none">
        {/* Base Image */}
        <img
          src={imageSrc}
          alt="PoleInspection Computer Vision Interface"
          className="w-full h-full object-cover object-center transition-transform duration-700"
        />

        {/* Ambient Darkened Edge Scrim for HUD clarity */}
        <div className="absolute inset-0 bg-slate-950/20 pointer-events-none" />

        {/* Horizontal Laser Scanning Beam */}
        {isScanningActive && !prefersReducedMotion && (
          <div
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] animate-scan-beam pointer-events-none z-10"
            style={{
              boxShadow: '0 0 16px rgba(6, 182, 212, 0.8), 0 0 30px rgba(59, 130, 246, 0.6)',
            }}
          />
        )}

        {/* Neural Network Nodes & Connection Lines Overlay */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-70" aria-hidden="true">
          <defs>
            <linearGradient id="cyber-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Subtle geometric connection vectors between detected poles */}
          <line x1="36%" y1="52%" x2="50%" y2="40%" stroke="url(#cyber-line-grad)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="50%" y1="40%" x2="66%" y2="35%" stroke="url(#cyber-line-grad)" strokeWidth="1" strokeDasharray="3 3" />
          {/* Node pulse dots */}
          <circle cx="36%" cy="52%" r="3" fill="#06b6d4" />
          <circle cx="50%" cy="40%" r="3" fill="#f43f5e" />
          <circle cx="66%" cy="35%" r="3" fill="#10b981" />
        </svg>

        {/* Interactive Bounding Boxes Overlay */}
        {boundingBoxes.map((box) => {
          const isSelected = activeCategoryIndex === box.categoryIndex;
          return (
            <div
              key={box.id}
              onClick={() => onSelectCategory(box.categoryIndex)}
              className={`absolute ${box.boxStyle} border-2 rounded-lg cursor-pointer transition-all duration-300 z-20 ${
                isSelected
                  ? `${box.borderColor} ring-2 ring-cyan-400/50 shadow-lg`
                  : 'border-white/30 hover:border-cyan-400/80'
              }`}
              style={{
                boxShadow: isSelected ? `0 0 20px ${box.ringColor}` : undefined,
              }}
              title={`Click to inspect ${box.name}`}
            >
              {/* Corner Reticle Brackets */}
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-white/90" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-white/90" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-white/90" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-white/90" />

              {/* Floating Detection Badge */}
              <div
                className={`absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-mono whitespace-nowrap shadow-md border pointer-events-none transition-all ${
                  isSelected
                    ? `${box.bgColor} ${box.textColor} ${box.borderColor} font-bold scale-105`
                    : 'bg-slate-900/90 text-slate-300 border-slate-700/80 scale-95 opacity-80 group-hover:opacity-100'
                }`}
              >
                <span>{box.name}</span>
                {isSelected && <span className="ml-1 opacity-80">(Active)</span>}
              </div>
            </div>
          );
        })}

        {/* Camera HUD Corner Guides */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400/60 pointer-events-none" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400/60 pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400/60 pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400/60 pointer-events-none" />

        {/* Live HUD telemetry bottom bar */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-slate-300 pointer-events-none">
          <div className="bg-slate-950/85 px-2 py-0.5 rounded border border-slate-800 backdrop-blur-sm">
            <span>FPS: 60 · OFFLINE_BUFFER: READY</span>
          </div>
          <div className="bg-slate-950/85 px-2 py-0.5 rounded border border-slate-800 text-cyan-400 backdrop-blur-sm">
            <span>DEMONSTRATION SIMULATION</span>
          </div>
        </div>
      </div>

      {/* 4-Stage Pipeline Indicator: Capture → Analysis → Classification → Result */}
      <div className="p-3 bg-slate-900/95 border-t border-slate-800">
        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span>Target Architecture Pipeline Workflow</span>
          <span className="text-cyan-400 font-semibold">Stage {currentPipelineStage + 1} of 4</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {pipelineStages.map((stage, idx) => {
            const isCurrent = currentPipelineStage === idx;
            return (
              <div
                key={idx}
                className={`p-2 rounded-lg border text-left transition-all ${
                  isCurrent
                    ? 'bg-blue-950/60 border-cyan-500/80 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400'
                }`}
              >
                <div className={`text-[11px] font-bold font-mono ${isCurrent ? 'text-cyan-300' : 'text-slate-300'}`}>
                  {stage.name}
                </div>
                <div className="text-[10px] text-slate-400 truncate mt-0.5">
                  {stage.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
