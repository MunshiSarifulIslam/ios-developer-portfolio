import React, { useRef, useState, useEffect } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum tilt angle in degrees (default: 4.5)
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 4.5,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState<string>('');
  const [glarePosition, setGlarePosition] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    // Detect touch-only or reduced motion devices
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || prefersReducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const width = rect.width;
    const height = rect.height;

    // Calculate rotation between -maxTilt and +maxTilt
    const xPct = (x / width) - 0.5;
    const yPct = (y / height) - 0.5;

    const rotateY = xPct * (maxTilt * 2);
    const rotateX = -yPct * (maxTilt * 2);

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`);
    setGlarePosition({
      x: (x / width) * 100,
      y: (y / height) * 100,
      opacity: 0.25,
    });
  };

  const handleMouseLeave = () => {
    if (isTouchDevice || prefersReducedMotion) return;
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transform || undefined,
        transformStyle: 'preserve-3d',
        transition: 'transform 350ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 350ms ease',
      }}
      className={`relative group rounded-2xl transition-all duration-300 ${className}`}
    >
      {/* Animated Subtle Gradient Border Glow on Hover */}
      <div
        className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-600/0 via-blue-500/30 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 blur-[1px]"
        aria-hidden="true"
      />

      {/* Moving Glare Reflection across the card surface */}
      {!isTouchDevice && !prefersReducedMotion && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 z-20"
          style={{
            opacity: glarePosition.opacity,
            background: `radial-gradient(circle 320px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.08), transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}

      {children}
    </div>
  );
};
