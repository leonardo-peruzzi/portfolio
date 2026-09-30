import type { DocumentItem } from '@/data/profile';

export default function DocRow({ doc, showCategory = false }: { doc: DocumentItem; showCategory?: boolean }) {
  return (
    <a className="doc" href={doc.href} download>
      <span className="doc__type" aria-hidden="true">
        {doc.type}
      </span>
      <span className="doc__body">
        <span className="doc__title">{doc.title}</span>
        {showCategory ? <span className="doc__cat">{doc.category}</span> : null}
      </span>
      <span className="doc__meta">
        <span>{doc.year}</span>
        <span>{doc.size}</span>
      </span>
    </a>
  );
}
