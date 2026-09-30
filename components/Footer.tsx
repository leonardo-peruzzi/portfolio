import Link from 'next/link';
import { profile, navItems } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <p className="footer__name">{profile.name}</p>
          <a className="footer__mail" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
        <nav aria-label="Piè di pagina">
          <ul className="footer__nav">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="footer__legal">© 2026 {profile.name}. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
}
