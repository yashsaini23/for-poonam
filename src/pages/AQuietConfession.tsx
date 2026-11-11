import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HandwrittenNote } from '../components/HandwrittenNote';
import { BubuDuduIllustration } from '../components/BubuDuduIllustration';
import { ArrowRight, ArrowLeft, Moon, FastForward } from 'lucide-react';

interface AQuietConfessionProps {
  reducedMotion: boolean;
}

export const AQuietConfession: React.FC<AQuietConfessionProps> = ({ reducedMotion }) => {
  const navigate = useNavigate();
  const [fastForward, setFastForward] = useState<boolean>(reducedMotion);

  return (
    <div className="max-w-3xl mx-auto w-full space-y-12 py-6 select-none">
      {/* Chapter header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest text-mutedRose uppercase px-3 py-1 rounded-full bg-mutedRose/10 border border-mutedRose/20">
          <Moon className="w-3.5 h-3.5" />
          <span>Chapter 07 — The Quiet Reflection</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-warmIvory font-medium tracking-tight">
          One last thing. And no, this isn't another disclaimer.
        </h1>

        {/* Skip / Fast forward toggle */}
        {!fastForward && (
          <button
            onClick={() => setFastForward(true)}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-softGrey/70 hover:text-mutedRose transition-colors pt-1"
          >
            <FastForward className="w-3 h-3" />
            <span>Read all lines at once</span>
          </button>
        )}
      </div>

      {/* Bubu & Dudu Sitting beneath a quiet night sky */}
      <BubuDuduIllustration
        scene="confession"
        size="md"
        caption="Somewhere between a thousand thoughts..."
      />

      {/* Main Poetic Body */}
      <div className="relative p-8 sm:p-14 rounded-3xl bg-midnight/80 border border-mutedRose/20 shadow-2xl backdrop-blur-xl space-y-8 text-warmIvory/90 font-serif text-lg sm:text-2xl leading-relaxed sm:leading-loose">
        {/* Soft subtle glow accent */}
        <div className="absolute top-0 left-1/3 right-1/3 h-[1px] bg-gradient-to-r from-transparent via-mutedRose/40 to-transparent" />

        <p className="text-warmIvory font-light">
          I sometimes wonder how certain people manage to become a familiar part of our thoughts without ever announcing that they're doing so.
        </p>

        <div className="space-y-3 font-light text-softGrey text-base sm:text-xl pl-4 border-l-2 border-mutedRose/40">
          <p>No grand entrance.</p>
          <p>No particular moment that explains everything.</p>
          <p>Just a collection of little things.</p>
        </div>

        <div className="space-y-2 text-warmIvory/90">
          <p>A conversation here.</p>
          <p>A laugh there.</p>
          <p>An ordinary day that somehow feels a little different because they were a part of it.</p>
        </div>

        <p className="text-mutedRose font-medium">
          And before you know it, their name starts appearing in thoughts where it wasn't even invited.
        </p>

        <div className="w-12 h-[1px] bg-white/20 my-6" />

        <div className="space-y-4 text-warmIvory/85 font-light">
          <p>I don't really know what to call that.</p>
          <p>Maybe some feelings don't need an immediate definition.</p>
          <p>Maybe some people simply become important in ways that are difficult to explain.</p>
        </div>

        {/* Final understated confession */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <p className="text-xl sm:text-2xl text-warmIvory font-normal leading-relaxed">
            And if I've ever made you feel that my inability to express myself means your presence doesn't matter...
          </p>
          <p className="text-xl sm:text-2xl text-mutedRose font-semibold italic">
            I hope this makes that a little clearer.
          </p>
        </div>

        {/* Signature */}
        <div className="pt-10 border-t border-white/10 flex flex-col items-end space-y-2">
          <p className="font-serif italic text-base sm:text-lg text-softGrey text-right max-w-md">
            "Somewhere between a thousand thoughts,<br />
            you became one I never quite learned to silence."
          </p>
          <span className="font-handwriting text-3xl sm:text-4xl text-mutedRose">
            — Y.
          </span>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="pt-6 border-t border-white/10 flex items-center justify-between">
        <button
          onClick={() => navigate('/unsaid-things')}
          className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-softGrey hover:text-warmIvory text-xs font-mono flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back</span>
        </button>

        <button
          onClick={() => navigate('/final-letter')}
          className="px-7 py-3 rounded-full bg-mutedRose hover:bg-mutedRose/90 text-midnight font-medium text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-mutedRose/20 hover:shadow-mutedRose/40 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span>The final letter</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
