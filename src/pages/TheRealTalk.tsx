import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HandwrittenNote } from '../components/HandwrittenNote';
import { BubuDuduIllustration } from '../components/BubuDuduIllustration';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export const TheRealTalk: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto w-full space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="text-center space-y-2">
        <span className="inline-block font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full bg-cloudPeach text-duduBrown font-bold">
          ☁️ Cloud Point Edition — No Long Letters
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-duduDark dark:text-cloudWarm">
          Jokes Apart, Just The Truth
        </h1>
        <p className="font-handwriting text-2xl text-duduBrown dark:text-cloudRose">
          (Short, sincere points in soft clouds)
        </p>
      </div>

      {/* Real Bubu Crying / Apology GIF */}
      <BubuDuduIllustration
        scene="apology"
        size="md"
        caption="Bubu: 'No excuses. Just genuine accountability.'"
      />

      {/* Fluffy Cloud Points Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-6 rounded-3xl bg-white dark:bg-deepNavy/80 border-2 border-cloudPeach shadow-md space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">☁️</span>
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-cloudButter text-duduDark">Truth 01</span>
          </div>
          <h3 className="font-bold text-lg text-duduDark dark:text-cloudWarm">Zero excuses.</h3>
          <p className="text-sm opacity-80 leading-relaxed font-light">
            I won't defend myself or give 100 explanations. When I react poorly or overcomplicate things, I acknowledge how that affected you.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-deepNavy/80 border-2 border-cloudRose shadow-md space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧠</span>
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-cloudRose text-duduDark">Truth 02</span>
          </div>
          <h3 className="font-bold text-lg text-duduDark dark:text-cloudWarm">Overthinking glitch.</h3>
          <p className="text-sm opacity-80 leading-relaxed font-light">
            I spend hours planning what to say and then say it awkwardly. Learning that space and patience matter much more than rushing to fix things.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-deepNavy/80 border-2 border-cloudLavender shadow-md space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✨</span>
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-cloudLavender text-duduDark">Truth 03</span>
          </div>
          <h3 className="font-bold text-lg text-duduDark dark:text-cloudWarm">Your feelings matter.</h3>
          <p className="text-sm opacity-80 leading-relaxed font-light">
            Your emotions and comfort deserve consideration, always. I should have recognized that sooner instead of getting trapped in my head.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-deepNavy/80 border-2 border-cloudButter shadow-md space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🤍</span>
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-cloudButter text-duduDark">Truth 04</span>
          </div>
          <h3 className="font-bold text-lg text-duduDark dark:text-cloudWarm">No pressure, ever.</h3>
          <p className="text-sm opacity-80 leading-relaxed font-light">
            I don't expect things to magically reset overnight. Just wanted to acknowledge my part without hiding behind words.
          </p>
        </div>
      </div>

      {/* DUDU'S SPECIAL STOLEN NOTE (DUDU WROTE THIS, NO BUBU) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] dark:bg-deepNavy/90 border-2 border-dashed border-duduBrown/40 shadow-lg space-y-4">
        <div className="flex items-center justify-between border-b border-duduBrown/20 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐻</span>
            <span className="font-mono text-xs font-bold text-duduBrown uppercase">DUDU'S UNOFFICIAL VERDICT (No Bubu)</span>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cloudButter text-duduDark font-bold">100% Honest</span>
        </div>

        <p className="font-sans text-base leading-relaxed text-duduDark dark:text-cloudWarm">
          "Hi Poonam, Dudu here. Bubu wanted to write an 8-page emotional novel, but I deleted it. The real translation: he felt genuinely awful about messing up, he handpicked all these words himself, and he just really misses talking to you. Penalty stands: he owes you dessert."
        </p>

        <div className="flex justify-between items-center pt-2 text-xs font-mono opacity-80">
          <span>Supervised by Dudu</span>
          <span className="font-handwriting text-2xl font-bold text-duduBrown">— Dudu 🐾</span>
        </div>
      </div>

      {/* Yash personal note */}
      <div className="text-center">
        <HandwrittenNote rotation={-1} className="text-2xl">
          (Yes, I spent days handpicking each vocabulary word myself!)
        </HandwrittenNote>
      </div>

      {/* Navigation Controls */}
      <div className="pt-6 border-t border-white/10 flex items-center justify-between">
        <button
          onClick={() => navigate('/disclaimer')}
          className="px-5 py-2.5 rounded-full bg-white/50 dark:bg-white/5 text-xs font-mono text-duduDark dark:text-softGrey hover:scale-105 transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5 inline mr-1" />
          <span>Back</span>
        </button>

        <button
          onClick={() => navigate('/the-question')}
          className="px-7 py-3 rounded-full bg-duduBrown text-white font-medium text-sm flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all"
        >
          <span>The Prank Anger Test</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
