import React from 'react';

interface HandwrittenNoteProps {
  children: React.ReactNode;
  rotation?: number; // degrees, e.g. -2, 3
  className?: string;
  prefix?: string;
}

export const HandwrittenNote: React.FC<HandwrittenNoteProps> = ({
  children,
  rotation = -2,
  className = '',
  prefix = '✎ ',
}) => {
  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`inline-block font-handwriting text-xl sm:text-2xl text-mutedRose/90 tracking-wide select-none transition-transform hover:scale-105 duration-300 ${className}`}
    >
      <span className="opacity-70 text-base">{prefix}</span>
      <span>{children}</span>
    </div>
  );
};
