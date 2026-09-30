import type { Metadata } from 'next';
import Link from 'next/link';
import PageHead from '@/components/PageHead';
import Skills from '@/components/Skills';
import { experiences } from '@/data/profile';

export const metadata: Metadata = { title: 'Competenze' };

export default function CompetenzePage() {
  return (
    <>
      <section className="section section--first">
        <PageHead
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Competenze' }]}
          title="Ciò che so fare, e a che livello."
          lead="Le barre indicano la padronanza attuale di ogni competenza, verificata sul campo."
        />
        <Skills />
      </section>

      <section className="section">
        <h2 className="sec-title sec-title--sm">Dove le ho messe in pratica.</h2>
        <ul className="applied">
          {experiences.map((xp) => (
            <li key={xp.id}>
              <Link href={`/esperienze/${xp.id}`} className="applied__row">
                <span className="applied__role">
                  {xp.role}
                  <small>{xp.company}</small>
                </span>
                <span className="applied__skills">{xp.skills.join(', ')}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
