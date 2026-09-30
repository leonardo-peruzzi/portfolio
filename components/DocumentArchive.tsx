'use client';

import { useMemo, useState } from 'react';
import type { DocumentItem } from '@/data/profile';
import DocRow from './DocRow';

export default function DocumentArchive({ documents }: { documents: DocumentItem[] }) {
  const categories = useMemo(() => Array.from(new Set(documents.map((d) => d.category))), [documents]);
  const [active, setActive] = useState<string>('Tutti');

  const visible = active === 'Tutti' ? documents : documents.filter((d) => d.category === active);
  const sorted = [...visible].sort((a, b) => b.year - a.year);

  return (
    <div>
      <div className="chips" role="group" aria-label="Filtra i documenti per categoria">
        {['Tutti', ...categories].map((c) => {
          const count = c === 'Tutti' ? documents.length : documents.filter((d) => d.category === c).length;
          return (
            <button key={c} type="button" className="chip" aria-pressed={active === c} onClick={() => setActive(c)}>
              {c} <span className="chip__count">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="doc-list doc-list--wide" aria-live="polite">
        {sorted.map((d) => (
          <DocRow key={d.id} doc={d} showCategory />
        ))}
      </div>
    </div>
  );
}
