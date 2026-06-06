import { useEffect, useState } from 'react';

export default function AmbientSound() {
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const a = new Audio('/audio/ambient.mp3');
    a.loop = true;
    a.volume = 0.2;
    setAudio(a);
    return () => {
      a.pause();
    };
  }, []);

  const toggle = () => {
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  return (
    <button
      onClick={toggle}
      className="mt-4 text-[0.7rem] uppercase tracking-widest text-[var(--gold)] border border-[var(--gold)] px-4 py-2 hover:bg-[var(--gold)] hover:text-[var(--dark)] transition-colors"
    >
      {playing ? '🔊 Ortam Sesi: Kapalı' : '🔊 Ortam Sesi: Açık'}
    </button>
  );
}
