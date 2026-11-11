import React from 'react';

interface LetterSectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  signature?: string;
  postscript?: string;
  date?: string;
  className?: string;
}

export const LetterSection: React.FC<LetterSectionProps> = ({
  children,
  title,
  subtitle,
  signature,
  postscript,
  date,
  className = '',
}) => {
  return (
    <div className={`relative max-w-2xl mx-auto ${className}`}>
      {/* Outer ambient glow behind letter */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-b from-mutedRose/15 via-lavender/5 to-transparent blur-xl pointer-events-none" />

      {/* Main Letter Sheet */}
      <div className="relative rounded-2xl bg-[#F5EFE8] text-[#11182A] p-7 sm:p-12 md:p-14 shadow-2xl border border-warmIvory/60 transition-all duration-300">
        {/* Subtle Paper Header / Date */}
        {(date || subtitle) && (
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#11182A]/10 text-xs sm:text-sm font-mono text-[#11182A]/60">
            <span>{subtitle || 'Personal Note'}</span>
            <span>{date || 'A quiet evening'}</span>
          </div>
        )}

        {/* Letter Heading */}
        {title && (
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#11182A] font-semibold tracking-tight mb-8">
            {title}
          </h2>
        )}

        {/* Letter Content */}
        <div className="font-serif text-base sm:text-lg text-[#11182A]/85 leading-relaxed sm:leading-loose space-y-6">
          {children}
        </div>

        {/* Signature */}
        {signature && (
          <div className="mt-10 pt-6 border-t border-[#11182A]/10 flex flex-col items-end">
            <span className="font-handwriting text-3xl sm:text-4xl text-[#11182A] tracking-wider transform -rotate-2">
              {signature}
            </span>
          </div>
        )}

        {/* Postscript Footer */}
        {postscript && (
          <div className="mt-6 pt-4 border-t border-[#11182A]/10 text-xs sm:text-sm font-mono text-[#11182A]/65 italic">
            {postscript}
          </div>
        )}
      </div>
    </div>
  );
};
