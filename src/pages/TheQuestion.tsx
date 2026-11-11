import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HandwrittenNote } from '../components/HandwrittenNote';
import { BubuDuduIllustration } from '../components/BubuDuduIllustration';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export const TheQuestion: React.FC = () => {
  const navigate = useNavigate();
  const [runawayPos, setRunawayPos] = useState({ x: 0, y: 0 });
  const [attempts, setAttempts] = useState(0);
  const [quip, setQuip] = useState("Still very angry? Try clicking the red button 😈");
  const [scanned, setScanned] = useState(false);

  const handleDodging = () => {
    const nextAttempts = attempts + 1;
    setAttempts(nextAttempts);

    const quips = [
      "Button slipped away! 💨",
      "Anger level recalibrating... try again! 🐻",
      "Dudu blocked this button for your health! 🩺",
      "Error 404: Valid reason to stay mad not found! 🤷‍♂️",
      "You're smiling right now, admit it! ✨",
      "Fine! You caught it! But Bubu gets 1 free forgive pass! 🤍"
    ];

    setQuip(quips[Math.min(nextAttempts - 1, quips.length - 1)]);

    if (nextAttempts < 6) {
      const rx = (Math.random() - 0.5) * 200;
      const ry = (Math.random() - 0.5) * 100;
      setRunawayPos({ x: rx, y: ry });
    } else {
      setRunawayPos({ x: 0, y: 0 });
    }
  };

  return (
    <div className="max-w-3xl mx-auto w-full space-y-8 animate-fadeIn">
      {/* Chapter header */}
      <div className="text-center space-y-2">
        <span className="inline-block px-3 py-1 rounded-full bg-cloudRose text-bubuPink font-mono text-xs font-bold uppercase tracking-wider">
          🎪 Chapter 04 — Interactive Prank Zone
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-duduDark dark:text-cloudWarm">
          The Very Important Investigation
        </h1>
        <p className="font-handwriting text-2xl text-duduBrown dark:text-cloudRose">
          Current Poonam anger meter?
        </p>
      </div>

      {/* Real Bubu Dudu Thinking GIF */}
      <BubuDuduIllustration
        scene="question"
        size="md"
        caption="Dudu: 'Let's see if she can even click the angry button.'"
      />

      {/* PRANK 1: THE RUNAWAY BUTTON */}
      <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-deepNavy/80 border-2 border-cloudRose shadow-md text-center space-y-4">
        <h3 className="font-bold text-lg text-duduDark dark:text-cloudWarm">
          Prank 01: The Slippery Anger Button
        </h3>
        <p className="text-xs sm:text-sm opacity-80 max-w-md mx-auto">
          If you are still completely furious, click this button:
        </p>

        <div className="py-6 min-h-[140px] flex flex-col items-center justify-center relative">
          <button
            onMouseEnter={handleDodging}
            onClick={handleDodging}
            style={{
              transform: `translate(${runawayPos.x}px, ${runawayPos.y}px)`,
              transition: 'transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
            className="px-6 py-3 rounded-full bg-red-400 hover:bg-red-500 text-white font-bold text-sm shadow-md cursor-pointer select-none"
          >
            {attempts >= 6 ? "Fine, I Forgive A Little! 🤍" : "Still VERY Angry! 😡"}
          </button>
          
          <p className="mt-4 font-handwriting text-xl text-bubuPink font-semibold animate-pulse">
            {quip}
          </p>
          <span className="text-[11px] font-mono opacity-60">Dodges survived: {attempts}</span>
        </div>
      </div>

      {/* PRANK 2: YASH'S BRAIN SCANNER */}
      <div className="p-7 rounded-3xl bg-white dark:bg-deepNavy/80 border-2 border-cloudButter shadow-md text-center space-y-4">
        <h3 className="font-bold text-lg text-duduDark dark:text-cloudWarm">
          Prank 02: MRI Brain Scan of Yash
        </h3>
        
        {!scanned ? (
          <button
            onClick={() => setScanned(true)}
            className="px-6 py-2.5 rounded-full bg-cloudButter text-duduDark font-bold text-xs border border-duduBrown/30 hover:scale-105 transition-all"
          >
            ⚡ Scan Yash's Brain Activity
          </button>
        ) : (
          <div className="space-y-3 max-w-sm mx-auto text-left font-mono text-xs bg-cloudWarm dark:bg-midnight p-4 rounded-2xl border">
            <div className="flex justify-between"><span>🧠 Unnecessary Overthinking:</span><span className="font-bold text-red-500">89%</span></div>
            <div className="flex justify-between"><span>📖 Vocabulary Words Found:</span><span className="font-bold text-blue-500">99.8%</span></div>
            <div className="flex justify-between"><span>🙈 Common Sense in Arguments:</span><span className="font-bold text-amber-500">2%</span></div>
            <div className="flex justify-between"><span>🥺 Genuine Sincerity to Poonam:</span><span className="font-bold text-green-500">100%</span></div>
            <p className="pt-2 text-center text-xs font-handwriting text-lg text-duduBrown">Status: Diagnosed overthinker, but truly sorry.</p>
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      <div className="pt-6 border-t border-white/10 flex items-center justify-between">
        <button
          onClick={() => navigate('/the-real-talk')}
          className="px-5 py-2.5 rounded-full bg-white/50 dark:bg-white/5 text-xs font-mono text-duduDark dark:text-softGrey hover:scale-105 transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5 inline mr-1" />
          <span>Back</span>
        </button>

        <button
          onClick={() => navigate('/little-things')}
          className="px-7 py-3 rounded-full bg-duduBrown text-white font-medium text-sm flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all"
        >
          <span>The Little Things</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
