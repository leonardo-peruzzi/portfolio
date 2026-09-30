import type { Metadata } from 'next';
import PageHead from '@/components/PageHead';
import ContactForm from '@/components/ContactForm';
import { profile } from '@/data/profile';

export const metadata: Metadata = { title: 'Contatti' };

export default function ContattiPage() {
  return (
    <section className="section section--first">
      <PageHead crumbs={[{ label: 'Home', href: '/' }, { label: 'Contatti' }]} title="Parliamo del prossimo progetto." />

      <a className="contact__mail" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <p className="contact__avail">{profile.availability}.</p>

      <div className="contact-grid">
        <dl className="contact__details contact__details--stack">
{/*           <div>
            <dt>Telefono</dt>
            <dd>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            </dd>
          </div> */}
          <div>
            <dt>Sede</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>LinkedIn</dt>
            <dd>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                Vedi il profilo
              </a>
            </dd>
          </div>
{/*           <div>
            <dt>Curriculum</dt>
            <dd>
              <a href={profile.cv} download>
                Scarica il PDF
              </a>
            </dd>
          </div> */}
        </dl>
        <ContactForm to={profile.email} />
      </div>
    </section>
  );
}
