import { useState, useEffect } from 'react';

export function useReducedMotion(): { prefersReducedMotion: boolean; toggleMotion: () => void } {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const stored = sessionStorage.getItem('ps_reduced_motion');
    if (stored !== null) return stored === 'true';
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    sessionStorage.setItem('ps_reduced_motion', String(prefersReducedMotion));
  }, [prefersReducedMotion]);

  const toggleMotion = () => setPrefersReducedMotion((prev) => !prev);

  return { prefersReducedMotion, toggleMotion };
}
