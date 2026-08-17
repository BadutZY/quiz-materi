import { useEffect, useRef, useState } from "react";

const TIPS = [
  "Menyiapkan soal-soal seru...",
  "Mengasah pixel demi pixel...",
  "5 mata pelajaran siap diuji...",
  "Menyusun tingkat kesulitan...",
  "Hampir siap, semangat belajar!",
];

// Loading screen bertema pixel yang muncul setiap kali aplikasi pertama kali
// dimuat / halaman di-refresh. Progress berjalan halus (bukan acak abal-abal)
// lalu fade-out sebelum konten utama muncul.
export default function LoadingScreen({ onDone, minDuration = 1300 }) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [tipIndex, setTipIndex] = useState(0);
  const startRef = useRef(null);

  useEffect(() => {
    let raf;
    let tipTimer;

    function tick(now) {
      if (startRef.current === null) startRef.current = now;
      const elapsed = now - startRef.current;
      // easing supaya di akhir progress "berlomba" menyentuh 100%, terasa lebih hidup
      const linear = Math.min(1, elapsed / minDuration);
      const eased = 1 - Math.pow(1 - linear, 2);
      const pct = Math.round(eased * 100);
      setProgress(pct);

      if (linear < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setTimeout(() => setLeaving(true), 220);
        setTimeout(() => onDone && onDone(), 700);
      }
    }

    raf = requestAnimationFrame(tick);
    tipTimer = setInterval(() => {
      setTipIndex((i) => (i + 1) % TIPS.length);
    }, 900);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(tipTimer);
    };
  }, [minDuration, onDone]);

  return (
    <div className={`loading-screen ${leaving ? "loading-screen-leave" : ""}`} role="status" aria-live="polite">
      <div className="loading-content">
        <div className="loading-blocks pixel-corners" aria-hidden="true">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.09}s` }} />
          ))}
        </div>

        <h1 className="pixel-logo loading-title">
          QUIZ<span className="loading-cursor">_</span>
        </h1>

        <div className="pixel-progress loading-progress">
          <i style={{ width: `${progress}%` }} />
        </div>

        <p className="loading-pct text-faint">{progress}%</p>
        <p className="loading-tip text-faint">{TIPS[tipIndex]}</p>
      </div>
    </div>
  );
}
