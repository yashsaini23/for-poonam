import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Hooks
import { useStoryProgress } from './hooks/useStoryProgress';
import { useReducedMotion } from './hooks/useReducedMotion';
import { useAmbientAudio } from './hooks/useAmbientAudio';

// Components
import { AnimatedBackground } from './components/AnimatedBackground';

import { ProgressIndicator } from './components/ProgressIndicator';
import { TransitionWrapper } from './components/TransitionWrapper';
import { RandomThoughtModal } from './components/RandomThoughtModal';
import { BubuDuduMascot } from './components/BubuDuduMascot';

// Pages
import { Welcome } from './pages/Welcome';
import { Disclaimer } from './pages/Disclaimer';
import { TheRealTalk } from './pages/TheRealTalk';
import { TheQuestion } from './pages/TheQuestion';
import { LittleThings } from './pages/LittleThings';
import { UnsaidThings } from './pages/UnsaidThings';
import { AQuietConfession } from './pages/AQuietConfession';
import { FinalLetter } from './pages/FinalLetter';

export const App: React.FC = () => {
  const location = useLocation();
  const { prefersReducedMotion, toggleMotion } = useReducedMotion();
  const { currentIndex, visitedPaths, angerChoice, saveAngerChoice } = useStoryProgress();
  const audioState = useAmbientAudio();

  return (
    <div className="relative min-h-screen bg-midnight text-warmIvory flex flex-col font-sans selection:bg-mutedRose/30 selection:text-warmIvory">
      {/* Cinematic Animated Canvas Background */}
      <AnimatedBackground reducedMotion={prefersReducedMotion} />



      {/* Story Progress Indicator */}
      <div className="relative z-20">
        <ProgressIndicator
          currentIndex={currentIndex}
          visitedPaths={visitedPaths}
        />
      </div>

      {/* Main Content with Route Transitions */}
      <AnimatePresence mode="wait">
        <TransitionWrapper key={location.pathname} reducedMotion={prefersReducedMotion}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Welcome reducedMotion={prefersReducedMotion} />} />
            <Route path="/disclaimer" element={<Disclaimer reducedMotion={prefersReducedMotion} />} />
            <Route path="/the-real-talk" element={<TheRealTalk reducedMotion={prefersReducedMotion} />} />
            <Route
              path="/the-question"
              element={
                <TheQuestion
                  savedChoice={angerChoice}
                  onSaveChoice={saveAngerChoice}
                />
              }
            />
            <Route path="/little-things" element={<LittleThings />} />
            <Route path="/unsaid-things" element={<UnsaidThings />} />
            <Route path="/unsaid" element={<AQuietConfession reducedMotion={prefersReducedMotion} />} />
            <Route path="/final-letter" element={<FinalLetter />} />
            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </TransitionWrapper>
      </AnimatePresence>

      {/* Interactive Floating Mascot (Bottom Left) */}
      <BubuDuduMascot />

      {/* Interactive Floating Random Thought Pill (Bottom Right) */}
      <RandomThoughtModal />

      {/* Subtle Editorial Footer */}
      <footer className="relative z-20 py-6 text-center text-xs font-mono text-softGrey/50 border-t border-white/5 select-none">
        <p>P.S. — A little something, from Y. Built with genuine care & zero pretense.</p>
      </footer>
    </div>
  );
};

export default App;
