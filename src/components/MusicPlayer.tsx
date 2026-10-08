'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Floating background-music player.
 * - autoStart: when true (user just clicked the entrance-gate button — a real
 *   user gesture, so the browser allows audio playback), start the song.
 * - Floating toggle lets the visitor pause/resume anytime.
 */
export default function MusicPlayer({
  autoStart,
  src,
  volume,
}: {
  autoStart: boolean;
  src: string;
  volume: number;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const triedAutoRef = useRef(false);

  useEffect(() => {
    if (!autoStart || triedAutoRef.current) return;
    triedAutoRef.current = true;
    const a = audioRef.current;
    if (!a) return;
    a.volume = volume;
    a.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false)); // blocked? visitor can tap the button
  }, [autoStart, volume]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.volume = volume;
      a.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[100]">
      <audio ref={audioRef} src={src} loop preload="auto" />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? 'Pause music' : 'Play music'}
        className="w-12 h-12 rounded-full flex items-center justify-center text-xl bg-[#FFD700]/15 border border-[#FFD700]/50 text-[#FFD700] backdrop-blur-md shadow-[0_0_20px_rgba(255,215,0,0.35)] hover:shadow-[0_0_30px_rgba(255,215,0,0.55)] active:scale-95 transition-all cursor-pointer"
      >
        {playing ? '🔊' : '🔇'}
      </button>
    </div>
  );
}
