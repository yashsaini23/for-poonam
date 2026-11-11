import React from 'react';
import { HandwrittenNote } from './HandwrittenNote';

interface InteractiveCardProps {
  number: string;
  title: string;
  description: string;
  annotation?: string;
  className?: string;
  badge?: string;
  onClick?: () => void;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  number,
  title,
  description,
  annotation,
  className = '',
  badge,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`group relative rounded-2xl p-6 sm:p-8 bg-deepNavy/60 backdrop-blur-md border border-white/10 hover:border-mutedRose/40 transition-all duration-500 hover:shadow-xl hover:shadow-mutedRose/5 flex flex-col justify-between ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {/* Top ambient highlight */}
      <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-mutedRose/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs tracking-widest text-mutedRose/80 uppercase px-2.5 py-1 rounded-full bg-mutedRose/10 border border-mutedRose/20">
            {number}
          </span>
          {badge && (
            <span className="text-xs font-mono text-lavender/70">
              {badge}
            </span>
          )}
        </div>

        <h3 className="font-serif text-xl sm:text-2xl text-warmIvory font-medium tracking-tight mb-3 group-hover:text-mutedRose transition-colors duration-300">
          {title}
        </h3>

        <p className="text-softGrey text-sm sm:text-base leading-relaxed font-light">
          {description}
        </p>
      </div>

      {annotation && (
        <div className="mt-6 pt-4 border-t border-white/5">
          <HandwrittenNote rotation={-1} prefix="— " className="text-lg">
            {annotation}
          </HandwrittenNote>
        </div>
      )}
    </div>
  );
};
