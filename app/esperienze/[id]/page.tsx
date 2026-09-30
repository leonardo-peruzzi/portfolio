import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHead from '@/components/PageHead';
import Gallery from '@/components/Gallery';
import DocRow from '@/components/DocRow';
import { experiences, documents } from '@/data/profile';

type Params = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return experiences.map((e) => ({ id: e.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const xp = experiences.find((e) => e.id === id);
  return { title: xp ? `${xp.role}, ${xp.company}` : 'Esperienza' };
}

export default async function ExperiencePage({ params }: Params) {
  const { id } = await params;
  const index = experiences.findIndex((e) => e.id === id);
  if (index < 0) notFound();

  const xp = experiences[index];
  const prev = experiences[index + 1]; // più vecchia
  const next = experiences[index - 1]; // più recente
/*   const docs = documents.filter((d) => d.experienceId === xp.id); */

  return (
    <>
      <section className="section section--first">
        <PageHead
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Esperienze', href: '/esperienze' },
            { label: xp.company },
          ]}
          title={xp.role}
        >
          <p className="detail-meta">
            {xp.company}, {xp.place}. {xp.period}.
          </p>
        </PageHead>

        <dl className="metrics">
          {xp.metrics.map((m) => (
            <div key={m.label}>
              <dt className="metrics__label">{m.label}</dt>
              <dd className="metrics__value">{m.value}</dd>
            </div>
          ))}
        </dl>

        <div className="detail">
          <div className="detail__main">
            <div className="block">
              <h2 className="block__title">Il contesto</h2>
              <p>{xp.context}</p>
            </div>
            <div className="block">
              <h2 className="block__title">La sfida</h2>
              <p>{xp.challenge}</p>
            </div>
            <div className="block">
              <h2 className="block__title">Il mio approccio</h2>
              <p>{xp.approach}</p>
            </div>
            <div className="block">
              <h2 className="block__title">I risultati</h2>
              <ul className="xp__list">
                {xp.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="detail__aside">
            <div className="aside-block">
              <h2 className="xp__h">Competenze impiegate</h2>
              <ul className="aside-list">
                {xp.skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p className="aside-link">
                <Link className="text-link" href="/competenze">
                  Tutte le competenze
                </Link>
              </p>
            </div>

{/*             {docs.length > 0 ? (
              <div className="aside-block">
                <h2 className="xp__h">Documentazione</h2>
                <div className="doc-list">
                  {docs.map((d) => (
                    <DocRow key={d.id} doc={d} />
                  ))}
                </div>
              </div>
            ) : null} */}
          </aside>
        </div>
      </section>
{/* FOTO PROGETTI TODO */}
{/*       <section className="section">
        <h2 className="sec-title sec-title--sm">Fotografie dal progetto.</h2>
        <Gallery photos={xp.photos} seed={index * 10} />
      </section> */}

      <nav className="section pager" aria-label="Altre esperienze">
        {next ? (
          <Link href={`/esperienze/${next.id}`} className="pager__link">
            <span className="pager__dir">Più recente</span>
            <span className="pager__title">{next.role}</span>
            <span className="pager__org">{next.company}</span>
          </Link>
        ) : (
          <span />
        )}
        {prev ? (
          <Link href={`/esperienze/${prev.id}`} className="pager__link pager__link--next">
            <span className="pager__dir">Precedente</span>
            <span className="pager__title">{prev.role}</span>
            <span className="pager__org">{prev.company}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </>
  );
}
