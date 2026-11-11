import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Procedural Cinematic Ambient Sound Engine
 * Generates an ethereal, warm, low-frequency atmospheric soundscape using pure Web Audio API.
 * Guarantees 100% reliability with zero broken audio links, zero network dependency,
 * and zero unexpected autoplay.
 */
export function useAmbientAudio() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.25);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const activeIntervalRef = useRef<number | null>(null);

  // Soft pentatonic ambient frequencies (C#3, E3, F#3, G#3, B3, C#4)
  const chordNotes = [138.59, 164.81, 185.0, 207.65, 246.94, 277.18];

  const playTone = useCallback((freq: number, duration: number = 6) => {
    const ctx = audioCtxRef.current;
    const master = masterGainRef.current;
    if (!ctx || !master || ctx.state === 'suspended') return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Low pass filter for soft, warm, rounded sound without harsh highs
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, ctx.currentTime);

      const now = ctx.currentTime;
      gain.gain.setValueAtTime(0.0001, now);
      // Gentle attack
      gain.gain.exponentialRampToValueAtTime(0.08, now + 2);
      // Gentle decay
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(master);

      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {
      // Audio node cleanup safeguard
    }
  }, []);

  const triggerNextChord = useCallback(() => {
    // Pick 2 harmonious notes
    const note1 = chordNotes[Math.floor(Math.random() * chordNotes.length)];
    const note2 = chordNotes[Math.floor(Math.random() * chordNotes.length)];
    playTone(note1, 7);
    setTimeout(() => playTone(note2, 8), 1200);
  }, [playTone]);

  const startAudio = useCallback(async () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const master = ctx.createGain();
      master.gain.setValueAtTime(isMuted ? 0 : volume, ctx.currentTime);
      master.connect(ctx.destination);
      masterGainRef.current = master;
    }

    if (audioCtxRef.current.state === 'suspended') {
      await audioCtxRef.current.resume();
    }

    setIsPlaying(true);
    triggerNextChord();

    // Trigger next chord every 6.5 seconds
    if (activeIntervalRef.current) clearInterval(activeIntervalRef.current);
    activeIntervalRef.current = window.setInterval(() => {
      triggerNextChord();
    }, 6500);
  }, [isMuted, volume, triggerNextChord]);

  const stopAudio = useCallback(() => {
    if (activeIntervalRef.current) {
      clearInterval(activeIntervalRef.current);
      activeIntervalRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
    setIsPlaying(false);
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  const toggleMute = () => {
    if (!masterGainRef.current || !audioCtxRef.current) {
      setIsMuted((prev) => !prev);
      return;
    }
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    masterGainRef.current.gain.setValueAtTime(
      nextMuted ? 0 : volume,
      audioCtxRef.current.currentTime
    );
  };

  useEffect(() => {
    return () => {
      if (activeIntervalRef.current) clearInterval(activeIntervalRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return {
    isPlaying,
    isMuted,
    volume,
    setVolume,
    togglePlay,
    toggleMute,
  };
}
