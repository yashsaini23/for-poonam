import React, { useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react';

interface MusicControllerProps {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  onTogglePlay: () => void;
  onToggleMute: () => void;
  onVolumeChange: (vol: number) => void;
}

export const MusicController: React.FC<MusicControllerProps> = ({
  isPlaying,
  isMuted,
  volume,
  onTogglePlay,
  onToggleMute,
  onVolumeChange,
}) => {
  const [showSlider, setShowSlider] = useState(false);

  return (
    <div className="relative inline-flex items-center">
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-deepNavy/80 backdrop-blur-md border border-white/10 text-warmIvory text-xs font-mono shadow-md">
        {/* Play / Pause Toggle */}
        <button
          onClick={onTogglePlay}
          aria-label={isPlaying ? 'Pause background sound' : 'Play ambient background music'}
          className="flex items-center gap-1.5 px-2 py-1 rounded-full hover:bg-white/10 transition-colors text-mutedRose"
          title={isPlaying ? 'Pause ambient atmosphere' : 'Play gentle ambient atmosphere'}
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5" />
              {/* Equalizer animation */}
              <span className="flex items-end gap-0.5 h-3">
                <span className="w-0.5 h-2 bg-mutedRose animate-pulse" />
                <span className="w-0.5 h-3 bg-mutedRose animate-pulse delay-75" />
                <span className="w-0.5 h-1.5 bg-mutedRose animate-pulse delay-150" />
              </span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-softGrey">Ambient</span>
            </>
          )}
        </button>

        {/* Mute Toggle / Volume */}
        {isPlaying && (
          <div className="flex items-center border-l border-white/10 pl-1.5">
            <button
              onClick={onToggleMute}
              onMouseEnter={() => setShowSlider(true)}
              aria-label={isMuted ? 'Unmute music' : 'Mute music'}
              className="p-1 hover:text-mutedRose transition-colors text-softGrey"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>

            {/* Subtle volume slider on hover */}
            {showSlider && (
              <div
                onMouseLeave={() => setShowSlider(false)}
                className="absolute top-10 right-0 p-2 bg-deepNavy/95 border border-mutedRose/30 rounded-xl shadow-xl flex items-center gap-2 z-50 animate-in fade-in duration-150"
              >
                <Music className="w-3 h-3 text-mutedRose" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
                  aria-label="Audio volume"
                  className="w-20 h-1 accent-[#D9A4B3] bg-white/20 rounded-lg cursor-pointer"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
