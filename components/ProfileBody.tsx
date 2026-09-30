import { about } from '@/data/profile';

export default function ProfileBody() {
  return (
    <div className="about">
      <blockquote className="about__quote">{about.quote}</blockquote>
      <div className="about__body">
        {about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <dl className="about__details">
          {about.details.map((d) => (
            <div key={d.label}>
              <dt>{d.label}</dt>
              <dd>{d.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
