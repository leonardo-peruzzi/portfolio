'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type Item = { href: string; label: string };

export default function SiteHeader({
  items,
  initials,
  name,
  cv,
}: {
  items: Item[];
  initials: string;
  name: string;
  cv: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <Link href="/" className="brand" aria-label={`${name}, pagina iniziale`}>
          <span className="brand__mark">{initials}</span>
          <span className="brand__name">{name}</span>
        </Link>

        <nav className="nav" aria-label="Principale">
          <ul className="nav__list">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav__link"
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__end">
          <a className="btn btn--sm header__cv" href={cv} download>
            Curriculum
          </a>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Chiudi' : '\u00A0Menu\u00A0'}
          </button>
        </div>
      </header>

      <div id="mobile-menu" className="menu" data-open={open} inert={!open}>
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="menu__link"
            aria-current={isActive(item.href) ? 'page' : undefined}
          >
            {item.label}
          </Link>
        ))}
{/*         <a href={cv} download className="menu__cv">
          Scarica il curriculum
        </a> */}
      </div>
    </>
  );
}
