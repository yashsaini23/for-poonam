import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CHAPTERS } from '../data/story';

interface ProgressIndicatorProps {
  currentIndex: number;
  visitedPaths: string[];
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentIndex,
  visitedPaths,
}) => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-3 select-none">
      {/* Desktop Step Indicator */}
      <div className="hidden md:flex items-center justify-between gap-1">
        {CHAPTERS.map((chapter, idx) => {
          const isCurrent = idx === currentIndex;
          const isVisited = visitedPaths.includes(chapter.path);
          const isAccessible = isVisited || idx <= currentIndex;

          return (
            <button
              key={chapter.id}
              onClick={() => isAccessible && navigate(chapter.path)}
              disabled={!isAccessible}
              className={`group flex items-center gap-2 py-1.5 px-2.5 rounded-lg text-xs font-mono transition-all duration-300 ${
                isCurrent
                  ? 'text-mutedRose bg-mutedRose/15 border border-mutedRose/30 font-medium scale-105'
                  : isVisited
                  ? 'text-softGrey hover:text-warmIvory hover:bg-white/5 cursor-pointer'
                  : 'text-white/20 cursor-not-allowed'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full transition-all ${
                  isCurrent
                    ? 'bg-mutedRose shadow-[0_0_8px_#D9A4B3]'
                    : isVisited
                    ? 'bg-lavender/60'
                    : 'bg-white/10'
                }`}
              />
              <span className="opacity-70">{chapter.number}</span>
              <span className="hidden lg:inline">{chapter.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Mobile Compact Progress Bar */}
      <div className="md:hidden flex items-center justify-between bg-deepNavy/70 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-mutedRose animate-pulse" />
          <span className="text-mutedRose font-medium">
            {CHAPTERS[currentIndex]?.number || '01'}
          </span>
          <span className="text-softGrey">/ 08</span>
          <span className="text-warmIvory font-sans font-medium truncate max-w-[150px]">
            {CHAPTERS[currentIndex]?.shortLabel}
          </span>
        </div>

        {/* Mini progress dots */}
        <div className="flex items-center gap-1">
          {CHAPTERS.map((ch, i) => (
            <span
              key={ch.id}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === currentIndex
                  ? 'bg-mutedRose w-3'
                  : visitedPaths.includes(ch.path)
                  ? 'bg-lavender/50'
                  : 'bg-white/10'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
