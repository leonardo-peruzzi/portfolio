import { education, certifications, languages } from '@/data/profile';

export default function Education() {
  return (
    <div className="edu-grid">
      <div>
        <h3 className="edu-h">Percorso accademico</h3>
        <ul className="edu-list">
          {education.map((e) => (
            <li key={e.title} className="edu">
              <p className="edu__period">{e.period}</p>
              <div>
                <h4 className="edu__title">{e.title}</h4>
                <p className="edu__inst">{e.institution}</p>
                <p className="edu__note">{e.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="edu-h">Certificazioni</h3>
        <ul className="edu-list">
          {certifications.map((c) => (
            <li key={c.title} className="edu">
              <p className="edu__period">{c.year}</p>
              <div>
                <h4 className="edu__title edu__title--sm">{c.title}</h4>
                <p className="edu__inst">{c.issuer}</p>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="edu-h edu-h--spaced">Lingue</h3>
        <ul className="edu-list">
          {languages.map((l) => (
            <li key={l.name} className="edu edu--lang">
              <p className="edu__title edu__title--sm">{l.name}</p>
              <p className="edu__inst">{l.level}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
