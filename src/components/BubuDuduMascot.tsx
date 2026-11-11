import React, { useState } from 'react';

const MASCOT_MESSAGES = [
  'Bubu says sorry. Dudu says he better mean it.',
  'Bubu wrote this. Dudu supervised.',
  'Dudu is still evaluating the apology.',
  'Bubu has officially run out of explanations.',
  'Even these two think communication is important.',
  'Dudu says take your time. Bubu agrees.',
  'Bubu spent days picking each vocabulary word himself. Dudu made sure he spelled them right.',
];

export const BubuDuduMascot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(MASCOT_MESSAGES[0]);

  const handleOpen = () => {
    // Pick a new random message different from current
    const available = MASCOT_MESSAGES.filter((m) => m !== currentMessage);
    const next = available[Math.floor(Math.random() * available.length)];
    setCurrentMessage(next);
    setIsOpen(true);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 select-none">
      {/* Popover Bubble */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Bubu and Dudu message"
          className="absolute bottom-16 left-0 w-72 sm:w-80 p-4 rounded-2xl bg-deepNavy/95 backdrop-blur-md border border-mutedRose/30 shadow-2xl text-warmIvory animate-in fade-in zoom-in-95 duration-200"
        >
          <div className="flex items-start justify-between gap-2 mb-2 pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-mutedRose animate-pulse" />
              <span className="font-mono text-xs tracking-wider uppercase text-lavender/90 font-medium">
                Bubu & Dudu Dispatch
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close message"
              className="text-softGrey hover:text-warmIvory text-xs p-1 rounded-md transition-colors"
            >
              ✕
            </button>
          </div>

          <p className="font-handwriting text-xl text-warmIvory leading-snug">
            "{currentMessage}"
          </p>

          <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-softGrey/80">
            <span>Tap bear again for another</span>
            <span className="text-mutedRose">— B & D</span>
          </div>

          {/* Pointer tail */}
          <div className="absolute -bottom-2 left-6 w-4 h-4 bg-deepNavy border-r border-b border-mutedRose/30 transform rotate-45" />
        </div>
      )}

      {/* Floating Mascot Button */}
      <button
        onClick={handleOpen}
        aria-label="Ask Bubu and Dudu for a thought"
        className="group relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-deepNavy/80 hover:bg-deepNavy/95 backdrop-blur-md border border-mutedRose/30 hover:border-mutedRose/60 shadow-lg shadow-black/40 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* Tiny Bubu & Dudu SVG avatar */}
        <div className="w-8 h-8 relative flex-shrink-0">
          <svg viewBox="0 0 70 50" className="w-full h-full" fill="none">
            {/* Bubu (Left) */}
            <circle cx="16" cy="12" r="5" fill="#FFFFFF" />
            <circle cx="30" cy="12" r="5" fill="#FFFFFF" />
            <ellipse cx="23" cy="24" rx="14" ry="12" fill="#FFFFFF" />
            <circle cx="19" cy="23" r="1.8" fill="#2B2D42" />
            <circle cx="27" cy="23" r="1.8" fill="#2B2D42" />
            <ellipse cx="23" cy="27" rx="1.5" ry="1" fill="#2B2D42" />
            <circle cx="15" cy="27" r="2.5" fill="#F8A5B8" opacity="0.8" />
            <circle cx="31" cy="27" r="2.5" fill="#F8A5B8" opacity="0.8" />

            {/* Dudu (Right) */}
            <circle cx="42" cy="12" r="5" fill="#C68B59" />
            <circle cx="56" cy="12" r="5" fill="#C68B59" />
            <ellipse cx="49" cy="24" rx="14" ry="12" fill="#C68B59" />
            <ellipse cx="49" cy="27" rx="6" ry="5" fill="#EAD0B3" />
            <circle cx="45" cy="23" r="1.8" fill="#2B2D42" />
            <circle cx="53" cy="23" r="1.8" fill="#2B2D42" />
            <ellipse cx="49" cy="26" rx="1.5" ry="1" fill="#2B2D42" />
          </svg>
        </div>

        <span className="text-xs font-mono text-warmIvory/90 font-medium group-hover:text-mutedRose transition-colors hidden sm:inline">
          Bubu & Dudu
        </span>
      </button>
    </div>
  );
};
