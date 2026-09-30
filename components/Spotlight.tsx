'use client';

import { useEffect, useRef } from 'react';

/* Una luce champagne segue il cursore e rivela, solo nel suo raggio,
   una fine trama a punti. Disattivata su touch. */
export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    let tx = window.innerWidth * 0.72;
    let ty = window.innerHeight * 0.28;
    let x = tx;
    let y = ty;

    const tick = () => {
      raf = 0;
      if (reduce) {
        x = tx;
        y = ty;
      } else {
        x += (tx - x) * 0.14;
        y += (ty - y) * 0.14;
      }
      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y}px`);
      if (!reduce && (Math.abs(tx - x) > 0.5 || Math.abs(ty - y) > 0.5)) {
        raf = requestAnimationFrame(tick);
      }
    };

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    tick();
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="spot" aria-hidden="true" />;
}
