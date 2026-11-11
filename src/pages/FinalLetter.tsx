import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HandwrittenNote } from '../components/HandwrittenNote';
import { BubuDuduIllustration } from '../components/BubuDuduIllustration';
import { RotateCcw, Check } from 'lucide-react';

export const FinalLetter: React.FC = () => {
  const navigate = useNavigate();
  const [stamped, setStamped] = useState(false);

  return (
    <div className="max-w-3xl mx-auto w-full space-y-8 animate-fadeIn">
      {/* Chapter header */}
      <div className="text-center space-y-2">
        <span className="inline-block px-3.5 py-1 rounded-full bg-cloudLavender text-purple-700 font-mono text-xs font-bold uppercase tracking-wider">
          📜 Chapter 08 — The Official Peace Accord
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-duduDark dark:text-cloudWarm">
          The Poonam-Yash Peace Treaty
        </h1>
        <p className="font-handwriting text-2xl text-duduBrown dark:text-cloudRose">
          (Drafted by Dudu. Bubu signed blindly without reading.)
        </p>
      </div>

      {/* Real Bubu Dudu Kiss / Love GIF */}
      <BubuDuduIllustration
        scene="finalLetter"
        size="md"
        caption="Bubu & Dudu: 'Peace offering submitted for final sign-off.'"
      />

      {/* THE OFFICIAL PEACE ACCORD CARD */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-deepNavy/90 border-4 border-double border-duduBrown/40 shadow-xl space-y-6">
        <div className="text-center pb-4 border-b border-duduBrown/20">
          <h2 className="font-serif text-2xl font-bold text-duduBrown">DECLARATION OF ZERO EXCUSES</h2>
          <p className="text-xs font-mono opacity-70">Effective immediately upon Poonam's approval</p>
        </div>

        <div className="space-y-4 text-sm sm:text-base leading-relaxed font-sans text-duduDark dark:text-cloudWarm">
          <p className="font-semibold text-duduBrown">TERMS OF SETTLEMENT:</p>
          <ul className="space-y-2 list-disc pl-5">
            <li><strong>Clause 1:</strong> Yash will never explain his intentions 10 times when a simple "I was wrong" works.</li>
            <li><strong>Clause 2:</strong> Poonam retains 100% unlimited teasing rights regarding this website for the next 5 years.</li>
            <li><strong>Clause 3:</strong> Yash owes Poonam 1 mandatory ice cream / momos treat with zero counter-arguments allowed.</li>
            <li><strong>Clause 4:</strong> Poonam agrees to continue being the wonderfully annoying person she is.</li>
          </ul>
        </div>

        {/* Interactive Stamp Prank */}
        <div className="py-6 border-t border-b border-duduBrown/20 flex flex-col items-center justify-center">
          {!stamped ? (
            <button
              onClick={() => setStamped(true)}
              className="px-8 py-3.5 rounded-full bg-bubuPink hover:bg-bubuPink/90 text-white font-bold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              💮 CLICK TO STAMP & APPROVE TREATY
            </button>
          ) : (
            <div className="p-4 rounded-2xl border-2 border-red-500 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 font-mono text-center rotate-[-2deg]">
              <span className="text-2xl font-bold">💮 APPROVED BY POONAM</span>
              <p className="text-xs mt-1">Penalty in effect: Yash must buy snacks.</p>
            </div>
          )}
        </div>

        {/* Signatures */}
        <div className="flex justify-between items-end pt-2 text-xs font-mono">
          <div>
            <p className="opacity-70">Approved by:</p>
            <p className="font-handwriting text-2xl text-duduBrown font-bold">Dudu (Judge)</p>
          </div>
          <div className="text-right">
            <p className="opacity-70">Drafted with care by:</p>
            <p className="font-handwriting text-3xl text-bubuPink font-bold">Yash (Overthinker)</p>
          </div>
        </div>
      </div>

      {/* Yash Personal Note */}
      <div className="text-center space-y-1">
        <HandwrittenNote rotation={-1} className="text-2xl">
          Yes, I actually made this entire website myself and found every single vocabulary word myself, which took most of my time! Take care of yourself, you idiot.
        </HandwrittenNote>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <button
          onClick={() => navigate('/')}
          className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-duduBrown hover:bg-duduBrown/90 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Back to Chapter 01</span>
        </button>
      </div>
    </div>
  );
};
