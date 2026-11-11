import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  reducedMotion?: boolean;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ reducedMotion = false }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Subtle star dust particles
    const particleCount = reducedMotion ? 25 : 65;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.3,
      alpha: Math.random() * 0.7 + 0.2,
      velocity: (Math.random() * 0.15 + 0.05) * (Math.random() > 0.5 ? 1 : -1),
      pulseSpeed: Math.random() * 0.02 + 0.005,
      pulseOffset: Math.random() * Math.PI * 2,
    }));

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        if (!reducedMotion) {
          p.y -= p.velocity;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        const currentAlpha =
          p.alpha * (0.6 + 0.4 * Math.sin(frame * p.pulseSpeed + p.pulseOffset));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        // Soft lavender & warm rose tint
        ctx.fillStyle = `rgba(217, 164, 179, ${currentAlpha})`;
        ctx.shadowBlur = p.radius * 3;
        ctx.shadowColor = 'rgba(184, 169, 217, 0.4)';
        ctx.fill();
      });

      if (!reducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-midnight">
      {/* Background Subtle Gradient Blobs */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full blur-[140px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #D9A4B3 0%, rgba(184, 169, 217, 0) 70%)',
        }}
      />
      <div
        className="absolute bottom-[-15%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[160px] opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #11182A 0%, rgba(184, 169, 217, 0.15) 50%, rgba(10, 13, 24, 0) 75%)',
        }}
      />
      <div
        className="absolute top-[40%] right-[15%] w-[35vw] h-[35vw] rounded-full blur-[120px] opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #B8A9D9 0%, rgba(217, 164, 179, 0) 70%)',
        }}
      />

      {/* Star Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />

      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      {/* Soft Vignette Overlay */}
      <div className="absolute inset-0 vignette-radial pointer-events-none opacity-80" />
    </div>
  );
};
