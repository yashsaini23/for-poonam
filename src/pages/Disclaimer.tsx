import React from 'react';
import { useNavigate } from 'react-router-dom';
import { InteractiveCard } from '../components/InteractiveCard';
import { HandwrittenNote } from '../components/HandwrittenNote';
import { BubuDuduIllustration } from '../components/BubuDuduIllustration';
import { DISCLAIMER_CARDS } from '../data/story';
import { ArrowRight, ShieldCheck, ArrowLeft } from 'lucide-react';

interface DisclaimerProps {
  reducedMotion: boolean;
}

export const Disclaimer: React.FC<DisclaimerProps> = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto w-full space-y-10">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-mutedRose uppercase px-3 py-1 rounded-full bg-mutedRose/10 border border-mutedRose/20">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Chapter 02 — Mandatory Protocol</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-warmIvory font-medium tracking-tight">
          Before we proceed, a few terms and conditions.
        </h1>

        <p className="text-softGrey text-sm sm:text-base font-light max-w-xl mx-auto">
          Drafted under strict supervision. Non-binding, non-coercive, and 100% genuine.
        </p>

        {/* Bubu & Dudu Integration */}
        <BubuDuduIllustration
          scene="disclaimer"
          size="md"
          caption="Bubu wrote this. Dudu supervised."
        />
      </div>

      {/* Three Animated Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DISCLAIMER_CARDS.map((card) => (
          <InteractiveCard
            key={card.id}
            number={card.number}
            title={card.title}
            description={card.description}
            annotation={card.annotation}
          />
        ))}
      </div>

      {/* Yash Personal Note */}
      <div className="text-center pt-2">
        <HandwrittenNote rotation={1} className="text-xl">
          (Yes, I spent days handpicking every single vocabulary word myself. Dudu made sure of that.)
        </HandwrittenNote>
      </div>

      {/* Footer & Transition */}
      <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left space-y-1">
          <p className="font-serif text-lg sm:text-xl text-warmIvory">
            Okay, legal formalities over. Ab asli baat.
          </p>
          <p className="text-xs font-mono text-softGrey">
            Clause 4: No dramatic background scores were harmed.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-softGrey hover:text-warmIvory text-xs font-mono flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous</span>
          </button>

          <button
            onClick={() => navigate('/the-real-talk')}
            className="px-7 py-3 rounded-full bg-mutedRose hover:bg-mutedRose/90 text-midnight font-medium text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-mutedRose/20 hover:shadow-mutedRose/40 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
