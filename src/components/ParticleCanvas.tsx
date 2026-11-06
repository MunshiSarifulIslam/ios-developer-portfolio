import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  vx: number;
  vy: number;
  color: string;
  pulseSpeed: number;
  pulsePhase: number;
}

interface ShootingLight {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  active: boolean;
}

export const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return; // Do not run animation loop if reduced motion is requested
    }

    let animationFrameId: number;
    let isVisible = !document.hidden;

    const colors = [
      'rgba(59, 130, 246, ',   // Electric Blue
      'rgba(147, 197, 253, ',  // Sky
      'rgba(139, 92, 246, ',   // Violet
      'rgba(6, 182, 212, ',    // Cyan
    ];

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const isMobile = width < 768;
    const particleCount = isMobile ? 14 : 32;

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = 0.15 + Math.random() * 0.45;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.8 + Math.random() * 1.6,
        baseAlpha,
        alpha: baseAlpha,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -0.1 - Math.random() * 0.2, // Slow upward drift
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: 0.01 + Math.random() * 0.02,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Occasional subtle light trail
    let trail: ShootingLight = {
      x: 0,
      y: 0,
      length: 0,
      speed: 0,
      angle: 0,
      alpha: 0,
      active: false,
    };

    let lastTrailTime = Date.now();

    const spawnTrail = () => {
      trail = {
        x: Math.random() * width * 0.7,
        y: Math.random() * (height * 0.5),
        length: 40 + Math.random() * 50,
        speed: 3 + Math.random() * 3,
        angle: (Math.PI / 4) + (Math.random() - 0.5) * 0.2, // ~45 degrees diagonal
        alpha: 0.45,
        active: true,
      };
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        lastTrailTime = Date.now();
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Render floating particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.pulsePhase += p.pulseSpeed;
        p.alpha = p.baseAlpha + Math.sin(p.pulsePhase) * 0.15;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0, p.alpha)})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `${p.color}0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Occasional shooting light trail (every 7-12 seconds on desktop only)
      if (!isMobile) {
        const now = Date.now();
        if (!trail.active && now - lastTrailTime > 8000 + Math.random() * 5000) {
          spawnTrail();
          lastTrailTime = now;
        }

        if (trail.active) {
          const tailX = trail.x - Math.cos(trail.angle) * trail.length;
          const tailY = trail.y - Math.sin(trail.angle) * trail.length;

          const grad = ctx.createLinearGradient(trail.x, trail.y, tailX, tailY);
          grad.addColorStop(0, `rgba(147, 197, 253, ${trail.alpha})`);
          grad.addColorStop(0.4, `rgba(59, 130, 246, ${trail.alpha * 0.5})`);
          grad.addColorStop(1, 'rgba(59, 130, 246, 0)');

          ctx.beginPath();
          ctx.moveTo(trail.x, trail.y);
          ctx.lineTo(tailX, tailY);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.2;
          ctx.stroke();

          trail.x += Math.cos(trail.angle) * trail.speed;
          trail.y += Math.sin(trail.angle) * trail.speed;
          trail.alpha -= 0.008;

          if (trail.alpha <= 0 || trail.x > width || trail.y > height) {
            trail.active = false;
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full -z-10 opacity-75"
      aria-hidden="true"
    />
  );
};
