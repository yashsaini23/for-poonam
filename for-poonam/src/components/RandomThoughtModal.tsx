import React, { useState } from 'react';
import { Sparkles, X, RefreshCw } from 'lucide-react';
import { RANDOM_THOUGHTS } from '../data/responses';

export const RandomThoughtModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = () => {
    const nextIdx = Math.floor(Math.random() * RANDOM_THOUGHTS.length);
    setCurrentIndex(nextIdx);
    setIsOpen(true);
  };

  const handleNext = () => {
    let nextIdx = Math.floor(Math.random() * RANDOM_THOUGHTS.length);
    if (nextIdx === currentIndex) {
      nextIdx = (currentIndex + 1) % RANDOM_THOUGHTS.length;
    }
    setCurrentIndex(nextIdx);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      {/* Floating Pill Trigger */}
      <button
        onClick={handleOpen}
        aria-label="Open random thought"
        className="group flex items-center gap-2 px-4 py-2 rounded-full bg-deepNavy/85 hover:bg-deepNavy/95 backdrop-blur-md border border-mutedRose/30 hover:border-mutedRose/70 shadow-lg shadow-black/50 text-warmIvory text-xs font-mono transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <Sparkles className="w-3.5 h-3.5 text-mutedRose group-hover:rotate-12 transition-transform duration-300" />
        <span className="tracking-wide">One more random thought</span>
      </button>

      {/* Modal Dialog */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight/80 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div
            className="relative w-full max-w-md p-7 sm:p-9 rounded-3xl bg-deepNavy/95 border border-mutedRose/30 shadow-2xl text-warmIvory animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-mutedRose/50 to-transparent" />

            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <span className="font-mono text-xs uppercase tracking-widest text-mutedRose flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Random Dev Thought #{RANDOM_THOUGHTS[currentIndex]?.id || 1}
              </span>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close dialog"
                className="p-1 rounded-full text-softGrey hover:text-warmIvory hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="font-serif text-xl sm:text-2xl text-warmIvory leading-relaxed font-normal mb-8">
              "{RANDOM_THOUGHTS[currentIndex]?.text}"
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 text-xs font-mono text-mutedRose hover:text-lavender transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Another thought
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-warmIvory transition-colors"
              >
                Okay, understood
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
