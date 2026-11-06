import React, { useState } from 'react';
import { Layers, ImageOff } from 'lucide-react';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'video' | 'auto' | 'square';
  overlayTag?: string;
  overlayBadge?: string;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'video',
  overlayTag,
  overlayBadge,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const aspectClass =
    aspectRatio === 'video'
      ? 'aspect-video w-full'
      : aspectRatio === 'square'
      ? 'aspect-square w-full'
      : 'w-full h-auto';

  return (
    <div className={`relative ${aspectClass} overflow-hidden bg-slate-950 border-b border-slate-800 ${className}`}>
      {/* Loading Skeleton */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-slate-900/80 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-blue-500/30 border-t-blue-500 animate-spin" />
        </div>
      )}

      {/* Main Image */}
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          className={`w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105 ${
            isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        />
      ) : (
        /* Fallback Visual */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950/40 text-center select-none">
          <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-blue-400 mb-3 shadow-inner">
            <Layers className="w-6 h-6" />
          </div>
          <span className="text-xs font-semibold text-slate-200 line-clamp-1">{alt}</span>
          <span className="text-[10px] text-slate-400 mt-1 flex items-center gap-1 font-mono">
            <ImageOff className="w-3 h-3 text-slate-500" />
            <span>Interactive Architecture Spec</span>
          </span>
        </div>
      )}

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

      {/* Badges / Overlay Tags if provided */}
      {(overlayTag || overlayBadge) && (
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between gap-2 text-[11px] text-slate-300 font-mono pointer-events-none">
          {overlayTag && (
            <span className="bg-slate-950/90 px-2 py-0.5 rounded border border-slate-700/60 truncate max-w-[200px]">
              {overlayTag}
            </span>
          )}
          {overlayBadge && (
            <span className="text-blue-400 font-semibold text-[10px] bg-slate-950/80 px-2 py-0.5 rounded border border-blue-900/40 shrink-0">
              {overlayBadge}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
