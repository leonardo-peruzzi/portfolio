import { skillGroups } from '@/data/profile';

function levelLabel(level: number) {
  if (level >= 90) return 'Esperto';
  if (level >= 80) return 'Avanzato';
  return 'Solido';
}

export default function Skills() {
  return (
    <div className="skills">
      {skillGroups.map((group) => (
        <div key={group.title} className="skills__group">
          <h3 className="skills__title">{group.title}</h3>
          <p className="skills__desc">{group.description}</p>
          <ul className="skills__list">
            {group.skills.map((s) => (
              <li key={s.name} className="skill">
                <div className="skill__top">
                  <span>{s.name}</span>
                  <span className="skill__level">{levelLabel(s.level)}</span>
                </div>
                <div
                  className="skill__bar"
                  role="meter"
                  aria-label={s.name}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={s.level}
                >
                  <i style={{ width: `${s.level}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
