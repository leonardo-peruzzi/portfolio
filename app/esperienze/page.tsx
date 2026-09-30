import type { Metadata } from 'next';
import PageHead from '@/components/PageHead';
import ExperienceIndex from '@/components/ExperienceIndex';
import { experiences } from '@/data/profile';

export const metadata: Metadata = { title: 'Esperienze' };

export default function EsperienzePage() {
  return (
    <section className="section section--first">
      <PageHead
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Esperienze' }]}
        title="Dallo sviluppo web alla trasformazione digitale delle aziende."
        lead="Scegli un incarico per leggere il contesto, la sfida, l’approccio e i risultati, sfogliare le fotografie e scaricare i documenti."
      />
      <ExperienceIndex items={experiences} full />
    </section>
  );
}
