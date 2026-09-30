import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section section--first">
      <h1 className="page-title">Questa pagina non esiste.</h1>
      <p className="sec-lead" style={{ margin: '1.5rem 0 2rem' }}>
        Il link potrebbe essere errato oppure la pagina è stata spostata.
      </p>
      <Link className="btn btn--solid" href="/">
        Torna alla pagina iniziale
      </Link>
    </section>
  );
}
