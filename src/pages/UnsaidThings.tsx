import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HandwrittenNote } from '../components/HandwrittenNote';
import { BubuDuduIllustration } from '../components/BubuDuduIllustration';
import { ArrowRight, ArrowLeft, BookOpen, Feather } from 'lucide-react';

export const UnsaidThings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto w-full space-y-10">
      {/* Chapter header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest text-mutedRose uppercase px-3 py-1 rounded-full bg-mutedRose/10 border border-mutedRose/20">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Chapter 06 — Self-Reflection</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-warmIvory font-medium tracking-tight">
          There's something about me you probably already know.
        </h1>

        <p className="text-softGrey text-sm sm:text-base font-light">
          An honest confession about my own internal wiring.
        </p>

        {/* Bubu Overthinking Scene */}
        <BubuDuduIllustration
          scene="unsaidThings"
          size="md"
          caption="Even Bubu needs a break."
        />
      </div>

      {/* Journal Entry Surface */}
      <div className="relative rounded-3xl p-8 sm:p-12 bg-deepNavy/80 border border-lavender/20 shadow-2xl backdrop-blur-md space-y-7 text-warmIvory/90 leading-relaxed font-serif text-lg sm:text-xl">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs text-softGrey">
          <span className="flex items-center gap-1.5">
            <Feather className="w-3.5 h-3.5 text-mutedRose" />
            <span>Journal entry</span>
          </span>
          <span>Late evening thoughts</span>
        </div>

        <p className="font-medium text-2xl text-mutedRose italic font-serif">
          I overthink.
        </p>

        <p className="text-warmIvory/85">
          Sometimes I feel something and spend so much time figuring out how to express it that I end up expressing it in the worst possible way.
        </p>

        <p className="text-warmIvory/85">
          Sometimes I care and accidentally make that care look like pressure.
        </p>

        <p className="text-warmIvory/85">
          And sometimes, instead of giving things the space they need, I try too hard to fix them immediately.
        </p>

        <p className="text-softGrey font-light">
          I'm not saying this to justify anything.
        </p>

        <p className="text-warmIvory">
          I'm saying it because I recognize that understanding my own emotions also means understanding how they affect someone else.
        </p>

        {/* Second Reveal Box */}
        <div className="p-6 rounded-2xl bg-midnight/60 border-l-4 border-lavender space-y-3 font-sans text-base sm:text-lg text-warmIvory/95 mt-6">
          <p className="font-medium text-lavender">
            I'm learning that caring about someone doesn't mean constantly needing reassurance.
          </p>
          <p className="text-softGrey">
            Sometimes it means being patient.
          </p>
          <p className="text-softGrey">
            Sometimes it means listening.
          </p>
          <p className="text-warmIvory font-medium">
            And sometimes it simply means allowing someone to breathe.
          </p>
        </div>

        <div className="pt-2 text-right">
          <HandwrittenNote rotation={-1} className="text-xl">
            — Y. (Working on it, genuinely).
          </HandwrittenNote>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="pt-6 border-t border-white/10 flex items-center justify-between">
        <button
          onClick={() => navigate('/little-things')}
          className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-softGrey hover:text-warmIvory text-xs font-mono flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back</span>
        </button>

        <button
          onClick={() => navigate('/unsaid')}
          className="px-7 py-3 rounded-full bg-mutedRose hover:bg-mutedRose/90 text-midnight font-medium text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-mutedRose/20 hover:shadow-mutedRose/40 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span>One last thought</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
