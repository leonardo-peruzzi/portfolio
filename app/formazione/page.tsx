import type { Metadata } from 'next';
import Link from 'next/link';
import PageHead from '@/components/PageHead';
import Education from '@/components/Education';

export const metadata: Metadata = { title: 'Formazione' };

export default function FormazionePage() {
  return (
    <section className="section section--first">
      <PageHead
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Formazione' }]}
        title="Studio e aggiornamento continuo."
        lead="Il percorso accademico, le certificazioni professionali e le lingue di lavoro."
      />
      <Education />
{/*       <p className="more">
        <Link className="text-link" href="/documenti">
          Scarica attestati e certificati
        </Link>
      </p> */}
    </section>
  );
}
