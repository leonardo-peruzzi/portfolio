export default function SectionHead({ title, lead }: { title: string; lead?: string }) {
  return (
    <header className="sec-head">
      <h2 className="sec-title">{title}</h2>
      {lead ? <p className="sec-lead">{lead}</p> : null}
    </header>
  );
}
