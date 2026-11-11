import React from 'react';
import { useNavigate } from 'react-router-dom';
import { InteractiveCard } from '../components/InteractiveCard';
import { HandwrittenNote } from '../components/HandwrittenNote';
import { BubuDuduIllustration } from '../components/BubuDuduIllustration';
import { LITTLE_THINGS_CONFIG } from '../data/story';
import { ArrowRight, ArrowLeft, Coffee } from 'lucide-react';

export const LittleThings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto w-full space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest text-mutedRose uppercase px-3 py-1 rounded-full bg-mutedRose/10 border border-mutedRose/20">
          <Coffee className="w-3.5 h-3.5" />
          <span>Chapter 05 — The Familiar Everyday</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-warmIvory font-medium tracking-tight">
          Funny how some people become part of your everyday.
        </h1>

        <p className="text-softGrey text-sm sm:text-base font-light max-w-lg mx-auto">
          Without calendars, agreements, or anyone officially scheduling it.
        </p>

        {/* Bubu & Dudu Sharing an everyday moment */}
        <BubuDuduIllustration
          scene="littleThings"
          size="md"
          caption="Bubu tried. Dudu listened."
        />
      </div>

      {/* Grid of Little Things Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {LITTLE_THINGS_CONFIG.map((card) => (
          <InteractiveCard
            key={card.id}
            number={card.number}
            title={card.number === '04' ? 'The Special Category' : 'Observation'}
            description={card.text}
            annotation={card.annotation}
          />
        ))}
      </div>

      {/* Playful Reveal */}
      <div className="p-8 rounded-3xl bg-deepNavy/80 border border-mutedRose/20 text-center space-y-4 max-w-2xl mx-auto">
        <p className="font-serif text-xl sm:text-2xl text-warmIvory/90 italic">
          "I won't name names."
        </p>
        <p className="font-serif text-2xl sm:text-3xl text-mutedRose font-medium">
          "Okay, fine. It's you."
        </p>
        <div className="pt-2">
          <HandwrittenNote rotation={1} className="text-xl">
            (And no, you don't get to deny this one.)
          </HandwrittenNote>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="pt-6 border-t border-white/10 flex items-center justify-between">
        <button
          onClick={() => navigate('/the-question')}
          className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-softGrey hover:text-warmIvory text-xs font-mono flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back</span>
        </button>

        <button
          onClick={() => navigate('/unsaid-things')}
          className="px-7 py-3 rounded-full bg-mutedRose hover:bg-mutedRose/90 text-midnight font-medium text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-mutedRose/20 hover:shadow-mutedRose/40 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span>Something deeper</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
