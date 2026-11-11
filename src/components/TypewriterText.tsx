import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  lines: string[];
  speed?: number; // ms per character
  delayBetweenLines?: number;
  initialDelay?: number;
  onComplete?: () => void;
  className?: string;
  lineClassName?: string;
  skipAnimation?: boolean;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  lines,
  speed = 28,
  delayBetweenLines = 600,
  initialDelay = 400,
  onComplete,
  className = '',
  lineClassName = '',
  skipAnimation = false,
}) => {
  const [revealedLines, setRevealedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    if (skipAnimation) {
      setRevealedLines(lines);
      setIsFinished(true);
      if (onComplete) onComplete();
      return;
    }

    let timeoutId: number;

    if (revealedLines.length === 0 && currentLineIndex === 0 && currentCharIndex === 0) {
      timeoutId = window.setTimeout(() => {
        setRevealedLines(['']);
      }, initialDelay);
      return () => clearTimeout(timeoutId);
    }

    if (currentLineIndex < lines.length) {
      const fullCurrentLine = lines[currentLineIndex];

      if (currentCharIndex < fullCurrentLine.length) {
        timeoutId = window.setTimeout(() => {
          setRevealedLines((prev) => {
            const copy = [...prev];
            copy[currentLineIndex] = fullCurrentLine.slice(0, currentCharIndex + 1);
            return copy;
          });
          setCurrentCharIndex((prev) => prev + 1);
        }, speed);
      } else {
        // Line finished, prepare for next line
        timeoutId = window.setTimeout(() => {
          if (currentLineIndex + 1 < lines.length) {
            setRevealedLines((prev) => [...prev, '']);
            setCurrentLineIndex((prev) => prev + 1);
            setCurrentCharIndex(0);
          } else {
            setIsFinished(true);
            if (onComplete) onComplete();
          }
        }, delayBetweenLines);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentLineIndex, currentCharIndex, lines, speed, delayBetweenLines, initialDelay, skipAnimation, onComplete, revealedLines.length]);

  return (
    <div className={`space-y-4 ${className}`}>
      {revealedLines.map((line, idx) => (
        <div key={idx} className={`relative leading-relaxed ${lineClassName}`}>
          <span>{line}</span>
          {!isFinished && idx === currentLineIndex && (
            <span className="inline-block w-[2px] h-[1em] ml-1 bg-mutedRose/80 align-middle animate-pulse" />
          )}
        </div>
      ))}
    </div>
  );
};
