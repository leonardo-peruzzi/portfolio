import Link from 'next/link';

type Crumb = { label: string; href?: string };

export default function PageHead({
  crumbs,
  title,
  lead,
  children,
}: {
  crumbs: Crumb[];
  title: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="page-head">
      <nav aria-label="Percorso">
        <ol className="crumbs">
          {crumbs.map((c) => (
            <li key={c.label}>{c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}</li>
          ))}
        </ol>
      </nav>
      <h1 className="page-title">{title}</h1>
      {lead ? <p className="sec-lead">{lead}</p> : null}
      {children}
    </header>
  );
}
