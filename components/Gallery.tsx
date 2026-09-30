'use client';

import { useState } from 'react';
import type { Photo } from '@/data/profile';
import Media from './Media';
import Lightbox from './Lightbox';

export default function Gallery({ photos, seed }: { photos: Photo[]; seed: number }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div className="gallery gallery--wide">
        {photos.map((p, k) => (
          <button
            key={p.caption}
            type="button"
            className="thumb"
            aria-label={`Ingrandisci: ${p.caption}`}
            onClick={() => setOpen(k)}
          >
            <Media photo={p} seed={seed + k} sizes="(min-width: 800px) 45vw, 90vw" />
            <span className="thumb__cap">{p.caption}</span>
          </button>
        ))}
      </div>
      {open !== null ? <Lightbox photos={photos} index={open} seed={seed} onClose={() => setOpen(null)} /> : null}
    </>
  );
}
