import { profile, specialties } from '@/data/profile';
import Link from 'next/link';
import Media from './Media';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <div className="hero__text">
          <p className="hero__role">{profile.headline}</p>
          <h1 className="hero__name" aria-label={profile.name}>
            <span className="name-line" aria-hidden="true">
              <span>{profile.firstName}</span>
            </span>
            <span className="name-line name-line--2" aria-hidden="true">
              <span>{profile.lastName}</span>
            </span>
          </h1>
          <p className="hero__lead">{profile.statement}</p>
          <div className="hero__actions">
            <Link className="btn btn--solid" href="/esperienze">
              Esplora le esperienze
            </Link>
            <Link className="btn" href="/contatti">
              Contattami
            </Link>
          </div>
        </div>

        <figure className="hero__portrait">
          <div className="arch-wrap">
            <div className="arch">
              <Media
                photo={profile.portrait}
                seed={7}
                sizes="(min-width: 1024px) 420px, 80vw"
                priority
              />
            </div>
          </div>
          <figcaption>
            {profile.location}. {profile.availability}.
          </figcaption>
        </figure>

        <ul className="hero__facts">
          {specialties.map((s) => (
            <li key={s.title}>
              <h2 className="fact__title">{s.title}</h2>
              <p className="fact__text">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
