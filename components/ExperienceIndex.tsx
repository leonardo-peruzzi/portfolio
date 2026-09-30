import Link from 'next/link';
import type { Experience } from '@/data/profile';
import Media from './Media';

export default function ExperienceIndex({ items, full = false }: { items: Experience[]; full?: boolean }) {
  return (
    <ol className="xpi-list">
      {items.map((xp, i) => (
        <li key={xp.id}>
          <Link href={`/esperienze/${xp.id}`} className={full ? 'xpi xpi--full' : 'xpi'}>
            <p className="xpi__period">{xp.period}</p>
            <div className="xpi__main">
              <h3 className="xpi__role">{xp.role}</h3>
              <p className="xpi__org">
                {xp.company}, {xp.place}
              </p>
              {full ? <p className="xpi__sum">{xp.summary}</p> : null}
              <span className="xpi__go">Apri il dossier</span>
            </div>
            {full ? (
              <div className="xpi__thumb" aria-hidden="true">
                <Media photo={xp.photos[0]} seed={i * 10} sizes="220px" />
              </div>
            ) : null}
          </Link>
        </li>
      ))}
    </ol>
  );
}
