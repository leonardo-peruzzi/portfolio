import type { Metadata } from 'next';
import Link from 'next/link';
import PageHead from '@/components/PageHead';
import ProfileBody from '@/components/ProfileBody';
import { principles, profile } from '@/data/profile';

export const metadata: Metadata = { title: 'Profilo' };

export default function ProfiloPage() {
  return (
    <>
      <section className="section section--first">
        <PageHead crumbs={[{ label: 'Home', href: '/' }, { label: 'Profilo' }]} title="Rigore nei numeri, cura nei dettagli." />
        <ProfileBody />
      </section>

      <section className="section">
        <h2 className="sec-title sec-title--sm">Come lavoro.</h2>
        <ul className="principles">
          {principles.map((p) => (
            <li key={p.title}>
              <h3 className="principle__title">{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
        <div className="actions">
          <Link className="btn btn--solid" href="/esperienze">
            Vedi le esperienze
          </Link>
{/*           <a className="btn" href={profile.cv} download>
            Scarica il curriculum
          </a> */}
        </div>
      </section>
    </>
  );
}
