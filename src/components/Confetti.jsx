// Efek confetti pixel sederhana (kotak-kotak kecil jatuh + berputar),
// dipakai saat pemain LULUS quiz. Murni dekoratif, tanpa dependency tambahan.
const PIECES = Array.from({ length: 22 }).map((_, i) => ({
  left: `${(i * 37) % 100}%`,
  delay: `${(i % 8) * 0.09}s`,
  duration: `${1.1 + (i % 5) * 0.18}s`,
  size: 6 + (i % 3) * 3,
  rotate: (i * 53) % 360,
}));

export default function Confetti() {
  return (
    <div className="confetti-layer" aria-hidden="true">
      {PIECES.map((p, i) => (
        <span
          key={i}
          className="confetti-piece"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            background: i % 2 === 0 ? "var(--ink)" : "var(--ink-dim)",
            animationDelay: p.delay,
            animationDuration: p.duration,
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}
