import React, { useState } from 'react';

export type BubuDuduScene =
  | 'welcome'
  | 'disclaimer'
  | 'apology'
  | 'question'
  | 'littleThings'
  | 'unsaidThings'
  | 'confession'
  | 'finalLetter';

// Real Tenor / Google GIF URLs for Bubu & Dudu
export const BUBU_DUDU_GIFS: Record<BubuDuduScene, string> = {
  welcome: 'https://media.tenor.com/m/hlr3kptkdu4AAAAC/bubu-dudu.gif',
  disclaimer: 'https://media.tenor.com/m/jJ7G5w7eQZAAAAAC/bubu-dudu-dudu.gif',
  apology: 'https://media.tenor.com/m/bL322YhG3jIAAAAC/bubu-dudu-crying.gif',
  question: 'https://media.tenor.com/m/gU53pXwV24kAAAAC/bubu-dudu.gif',
  littleThings: 'https://media.tenor.com/m/qV6Rj4nK6jAAAAAC/bubu-dudu.gif',
  unsaidThings: 'https://media.tenor.com/m/pQ9k_3R_kSIAAAAC/bubu-dudu.gif',
  confession: 'https://media.tenor.com/m/G67JzG_hL2AAAAAC/bubu-dudu.gif',
  finalLetter: 'https://media.tenor.com/m/V1309f3uC5AAAAAC/bubu-dudu-panda.gif',
};

interface BubuDuduIllustrationProps {
  scene: BubuDuduScene;
  caption?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BubuDuduIllustration: React.FC<BubuDuduIllustrationProps> = ({
  scene,
  caption,
  className = '',
  size = 'md',
}) => {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: 'w-36 h-36 sm:w-44 sm:h-44',
    md: 'w-48 h-48 sm:w-56 sm:h-56',
    lg: 'w-60 h-60 sm:w-72 sm:h-72',
  };

  const gifUrl = BUBU_DUDU_GIFS[scene] || BUBU_DUDU_GIFS.welcome;

  return (
    <div className={`flex flex-col items-center justify-center my-4 select-none ${className}`}>
      <div
        className={`relative p-2.5 rounded-3xl bg-white/90 dark:bg-deepNavy/80 shadow-xl border-2 border-cloudRose dark:border-white/10 ${sizeClasses[size]} flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-105`}
      >
        {!imgError ? (
          <img
            src={gifUrl}
            alt="Bubu and Dudu"
            onError={() => setImgError(true)}
            className="w-full h-full object-contain rounded-2xl"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-2">
            <span className="text-5xl animate-bounce">🐻‍❄️🐻</span>
            <span className="text-xs font-mono text-duduBrown mt-2">Bubu & Dudu</span>
          </div>
        )}
      </div>

      {caption && (
        <p className="mt-2 text-xs sm:text-sm font-handwriting text-duduBrown dark:text-cloudRose font-medium tracking-wide text-center">
          {caption}
        </p>
      )}
    </div>
  );
};
