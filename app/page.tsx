import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionHead from '@/components/SectionHead';
import ExperienceIndex from '@/components/ExperienceIndex';
import { about, experiences, documents, certifications, skillGroups } from '@/data/profile';


const skillCount = skillGroups.reduce((n, g) => n + g.skills.length, 0);

const explore = [
  {
    href: '/competenze',
    title: 'Competenze',
    text: `${skillCount} competenze in tre aree, con i progetti in cui le ho messe in pratica.`,
  },
  {
    href: '/formazione',
    title: 'Formazione',
    text: `Percorso accademico, ${certifications.length} certificazione professionale e lingue parlate.`,
  },
/*   {
    href: '/documenti',
    title: 'Documenti',
    text: `${documents.length} documenti scaricabili: attestati, relazioni, pubblicazioni e referenze.`,
  }, */
  {
    href: '/contatti',
    title: 'Contatti',
    text: 'Scrivimi per un incarico, una collaborazione o una consulenza.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="about">
          <blockquote className="about__quote">{about.quote}</blockquote>
          <div className="about__body">
            <p>{about.paragraphs[0]}</p>
            <p>
              <Link className="text-link" href="/profilo">
                Leggi il profilo completo
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHead
          title="Le esperienze."
          lead="Ogni incarico ha una pagina dedicata con contesto, sfida, approccio e risultati."
        />
        <ExperienceIndex items={experiences} />
        <p className="more">
          <Link className="text-link" href="/esperienze">
            Vedi tutte le esperienze
          </Link>
        </p>
      </section>

      <section className="section">
        <SectionHead title="Approfondisci." />
        <ul className="explore">
          {explore.map((e) => (
            <li key={e.href}>
              <Link href={e.href} className="explore__row">
                <span className="explore__title">{e.title}</span>
                <span className="explore__text">{e.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
