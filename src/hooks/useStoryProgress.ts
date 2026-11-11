import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CHAPTERS } from '../data/story';

export function useStoryProgress() {
  const location = useLocation();

  const [visitedPaths, setVisitedPaths] = useState<string[]>(() => {
    if (typeof window === 'undefined') return ['/'];
    try {
      const stored = sessionStorage.getItem('ps_visited_chapters');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.includes('/')) return parsed;
      }
    } catch (e) {
      // fallback
    }
    return ['/'];
  });

  const [angerChoice, setAngerChoice] = useState<string | null>(() => {
    if (typeof window === 'undefined') return null;
    return sessionStorage.getItem('ps_anger_choice');
  });

  // Track current chapter index
  const currentIndex = CHAPTERS.findIndex((c) => c.path === location.pathname);
  const currentChapter = currentIndex >= 0 ? CHAPTERS[currentIndex] : CHAPTERS[0];

  useEffect(() => {
    if (location.pathname) {
      setVisitedPaths((prev) => {
        if (!prev.includes(location.pathname)) {
          const updated = [...prev, location.pathname];
          sessionStorage.setItem('ps_visited_chapters', JSON.stringify(updated));
          return updated;
        }
        return prev;
      });
    }
  }, [location.pathname]);

  const saveAngerChoice = (choice: 'A' | 'B' | 'C') => {
    setAngerChoice(choice);
    try {
      sessionStorage.setItem('ps_anger_choice', choice);
    } catch (e) {
      // silent
    }
  };

  const isVisited = (path: string) => visitedPaths.includes(path);

  const resetProgress = () => {
    try {
      sessionStorage.removeItem('ps_visited_chapters');
      sessionStorage.removeItem('ps_anger_choice');
    } catch (e) {
      // silent
    }
    setVisitedPaths(['/']);
    setAngerChoice(null);
  };

  return {
    currentIndex: currentIndex >= 0 ? currentIndex : 0,
    currentChapter,
    chapters: CHAPTERS,
    visitedPaths,
    isVisited,
    angerChoice,
    saveAngerChoice,
    resetProgress,
  };
}
