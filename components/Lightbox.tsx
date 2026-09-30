'use client';

import { useEffect, useRef, useState } from 'react';
import type { Photo } from '@/data/profile';
import Media from './Media';

export default function Lightbox({
  photos,
  index,
  seed,
  onClose,
}: {
  photos: Photo[];
  index: number;
  seed: number;
  onClose: () => void;
}) {
  const [i, setI] = useState(index);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setI((v) => (v - 1 + photos.length) % photos.length);
      if (e.key === 'ArrowRight') setI((v) => (v + 1) % photos.length);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      opener?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const photo = photos[i];

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label="Galleria fotografica">
      <div className="lb__bar">
        <p className="lb__count">
          {i + 1} di {photos.length}
        </p>
        <button ref={closeRef} type="button" className="lb__btn" onClick={onClose}>
          Chiudi
        </button>
      </div>

      <div className="lb__main">
        <button
          type="button"
          className="lb__nav"
          aria-label="Foto precedente"
          onClick={() => setI((v) => (v - 1 + photos.length) % photos.length)}
        >
          ‹
        </button>
        <div className="lb__stage" key={i}>
          <Media photo={photo} seed={seed + i} sizes="(min-width: 1100px) 1100px, 92vw" />
        </div>
        <button
          type="button"
          className="lb__nav"
          aria-label="Foto successiva"
          onClick={() => setI((v) => (v + 1) % photos.length)}
        >
          ›
        </button>
      </div>

      <p className="lb__caption">{photo.caption}</p>
    </div>
  );
}
