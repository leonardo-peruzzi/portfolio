import { useId } from 'react';

/* Segnaposto generato: sfondo profondo, alone champagne e cerchi concentrici.
   Ogni `seed` produce una composizione diversa. */
export default function Placeholder({ seed = 0, label }: { seed?: number; label?: string }) {
  const uid = useId().replace(/:/g, '');
  const rnd = (n: number) => {
    const x = Math.sin((seed + 3) * 127.1 + n * 311.7) * 43758.5453;
    return x - Math.floor(x);
  };
  const cx = 70 + rnd(1) * 260;
  const cy = 50 + rnd(2) * 200;
  const warm = rnd(3) > 0.5;
  const rings = [36, 74, 118, 168, 226];
  const rules = [60, 120, 180, 240];

  return (
    <svg
      className="ph"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={label ?? 'Immagine segnaposto'}
    >
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={warm ? '#22322B' : '#173029'} />
          <stop offset="1" stopColor="#0B1A16" />
        </linearGradient>
        <radialGradient id={`${uid}-glow`} cx={cx / 400} cy={cy / 300} r="0.65">
          <stop offset="0" stopColor="#CDB27C" stopOpacity="0.3" />
          <stop offset="1" stopColor="#CDB27C" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${uid}-bg)`} />
      <rect width="400" height="300" fill={`url(#${uid}-glow)`} />
      <g stroke="#ECE7DC" strokeOpacity="0.07">
        {rules.map((y) => (
          <line key={y} x1="0" x2="400" y1={y} y2={y} />
        ))}
      </g>
      <g fill="none" stroke="#CDB27C" strokeOpacity="0.24" strokeWidth="0.8">
        {rings.map((r) => (
          <circle key={r} cx={cx} cy={cy} r={r} />
        ))}
      </g>
    </svg>
  );
}
