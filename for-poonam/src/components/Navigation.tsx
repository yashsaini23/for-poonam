import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { ExitButton } from './ExitButton';
import { CHAPTERS } from '../data/story';

interface NavigationProps {
  reducedMotion: boolean;
  onToggleMotion: () => void;
  audioState: {
    isPlaying: boolean;
    isMuted: boolean;
    volume: number;
    togglePlay: () => void;
    toggleMute: () => void;
    setVolume: (vol: number) => void;
  };
}

export const Navigation: React.FC<NavigationProps> = ({
  audioState,
}) => {
  const location = useLocation();
  const currentChapter = CHAPTERS.find((c) => c.path === location.pathname) || CHAPTERS[0];
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-midnight/80 border-b border-[#F0E6DF] dark:border-white/10 px-4 sm:px-6 h-16 flex items-center justify-between gap-4 transition-colors duration-300">
      {/* Left Branding */}
      <Link to="/" className="flex items-center gap-2 group">
        <span className="text-2xl">☁️</span>
        <span className="font-serif font-bold text-lg text-duduBrown dark:text-cloudRose tracking-tight">P.S.</span>
        <span className="text-xs font-mono opacity-70 hidden sm:inline text-duduDark dark:text-cloudWarm border-l border-gray-300 dark:border-white/20 pl-2">
          For Poonam (Cloud Edition)
        </span>
      </Link>

      {/* Center Chapter indicator */}
      <div className="hidden md:flex items-center gap-2 font-mono text-xs opacity-75">
        <span className="font-bold text-duduBrown dark:text-cloudRose">{currentChapter.number}</span>
        <span>/</span>
        <span className="truncate max-w-[200px]">{currentChapter.title}</span>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Day / Night Theme Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-mono bg-cloudPeach/70 dark:bg-deepNavy border border-cloudRose/40 dark:border-white/10 shadow-sm hover:scale-105 transition-all text-duduDark dark:text-cloudWarm"
          title="Toggle Cloud Light / Night Theme"
        >
          {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-500" />}
          <span>{isDark ? 'Day' : 'Night'}</span>
        </button>

        {/* Music Chimes Controller */}
        <button
          onClick={audioState.togglePlay}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-cloudButter dark:bg-deepNavy border border-duduBrown/20 dark:border-white/10 text-duduDark dark:text-cloudWarm hover:scale-105 transition-all shadow-sm"
        >
          {audioState.isPlaying ? <Volume2 className="w-3.5 h-3.5 text-bubuPink animate-pulse" /> : <VolumeX className="w-3.5 h-3.5 opacity-60" />}
          <span className="hidden sm:inline">{audioState.isPlaying ? 'Chimes' : 'Sound'}</span>
        </button>

        {/* Exit Button */}
        <ExitButton />
      </div>
    </header>
  );
};
