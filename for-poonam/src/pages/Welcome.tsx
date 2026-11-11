import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HandwrittenNote } from '../components/HandwrittenNote';
import { BubuDuduIllustration } from '../components/BubuDuduIllustration';
import { ArrowRight, Sparkles } from 'lucide-react';

interface WelcomeProps {
  reducedMotion: boolean;
}

export const Welcome: React.FC<WelcomeProps> = ({ reducedMotion }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(0);
  const [notInMood, setNotInMood] = useState<boolean>(false);

  useEffect(() => {
    if (reducedMotion) {
      setStep(4);
      return;
    }

    const t1 = setTimeout(() => setStep(1), 600); // Reveal "P.S."
    const t2 = setTimeout(() => setStep(2), 1600); // Reveal "Hey, Poonam."
    const t3 = setTimeout(() => setStep(3), 2800); // Reveal "Yes, you. Don't look around."
    const t4 = setTimeout(() => setStep(4), 4200); // Reveal main body & buttons

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [reducedMotion]);

  return (
    <div className="max-w-2xl mx-auto w-full text-center space-y-8 select-none">
      {/* Step 1: P.S. Monogram */}
      <div className={`transition-all duration-700 ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <span className="inline-block font-mono text-xs tracking-[0.3em] uppercase text-mutedRose/90 px-3.5 py-1.5 rounded-full bg-mutedRose/10 border border-mutedRose/20">
          P.S. — Chapter 01
        </span>
      </div>

      {/* Step 2 & 3: Salutation & Direct Address */}
      <div className="space-y-4">
        <h1
          className={`font-serif text-4xl sm:text-6xl md:text-7xl text-warmIvory font-medium tracking-tight transition-all duration-700 ${
            step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Hey, Poonam.
        </h1>

        <p
          className={`font-serif italic text-xl sm:text-2xl text-mutedRose/90 transition-all duration-700 delay-150 ${
            step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Yes, you. Don't look around.
        </p>
      </div>

      {/* Bubu & Dudu Welcome Scene: Bubu holding an apology letter while Dudu judges him */}
      <div
        className={`transition-all duration-700 delay-300 ${
          step >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <BubuDuduIllustration
          scene="welcome"
          size="md"
          caption="Bubu has something to say. Dudu is already judging him."
        />
      </div>

      {/* Step 4: The Pitch */}
      <div
        className={`space-y-6 transition-all duration-700 delay-200 ${
          step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="font-sans text-lg sm:text-xl text-softGrey leading-relaxed max-w-xl mx-auto font-light">
          Before you decide that I've officially lost it, give me a few minutes.
        </p>

        <p className="font-mono text-xs sm:text-sm text-softGrey/70 max-w-md mx-auto italic">
          Although, considering you know me, that probably isn't a very convincing introduction.
        </p>

        <div className="pt-2">
          <HandwrittenNote rotation={-2} className="text-xl">
            Don't judge the typography. (Yes, I actually made this whole site myself).
          </HandwrittenNote>
        </div>

        {/* Not in mood branch */}
        {notInMood ? (
          <div className="p-6 rounded-2xl bg-deepNavy/80 border border-mutedRose/20 text-warmIvory space-y-4 animate-in fade-in zoom-in-95 duration-300 max-w-lg mx-auto">
            <p className="font-serif text-lg sm:text-xl text-warmIvory/95">
              Fair enough. No complaints from my side.
            </p>
            <p className="text-sm text-softGrey leading-relaxed font-light">
              This little corner will be here whenever you feel like visiting. No rush, no pressure, no expiry date.
            </p>
            <div className="font-handwriting text-2xl text-mutedRose">
              — Yash
            </div>
            <div className="pt-2">
              <button
                onClick={() => setNotInMood(false)}
                className="text-xs font-mono text-mutedRose hover:text-warmIvory underline underline-offset-4"
              >
                Actually, maybe I am curious →
              </button>
            </div>
          </div>
        ) : (
          /* Choice Buttons */
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={() => navigate('/disclaimer')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-mutedRose hover:bg-mutedRose/90 text-midnight font-medium text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-mutedRose/20 hover:shadow-mutedRose/40 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Okay, I'm curious.</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setNotInMood(true)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-deepNavy/80 hover:bg-deepNavy text-softGrey hover:text-warmIvory border border-white/10 hover:border-white/20 font-mono text-xs sm:text-sm transition-all duration-200"
            >
              Not in the mood.
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
