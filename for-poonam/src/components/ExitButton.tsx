import React, { useState } from 'react';
import { LogOut, HeartHandshake } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ExitButtonProps {
  label?: string;
  className?: string;
}

export const ExitButton: React.FC<ExitButtonProps> = ({
  label = 'Close this corner',
  className = '',
}) => {
  const [showExitModal, setShowExitModal] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => setShowExitModal(true)}
        aria-label="Graceful exit"
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-softGrey/80 hover:text-warmIvory hover:bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-200 ${className}`}
      >
        <LogOut className="w-3 h-3 opacity-60" />
        <span>{label}</span>
      </button>

      {showExitModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight/90 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-lg p-8 sm:p-10 rounded-3xl bg-deepNavy border border-mutedRose/30 shadow-2xl text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 mx-auto rounded-full bg-mutedRose/15 border border-mutedRose/30 flex items-center justify-center text-mutedRose">
              <HeartHandshake className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-warmIvory font-medium">
              Fair enough.
            </h3>

            <p className="text-softGrey font-light text-base sm:text-lg leading-relaxed">
              No complaints from my side. This little corner will be right here if you ever feel like visiting again. Take all the time and space you need, Poonam.
            </p>

            <div className="font-handwriting text-2xl text-mutedRose">
              — Yash
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setShowExitModal(false);
                  navigate('/');
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-warmIvory transition-colors"
              >
                Back to the beginning
              </button>
              <button
                onClick={() => setShowExitModal(false)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-mutedRose/20 hover:bg-mutedRose/30 text-xs font-mono text-mutedRose border border-mutedRose/40 transition-colors"
              >
                Keep exploring
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
