'use client';

import { useState } from 'react';

export default function ContactForm({ to }: { to: string }) {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${message}\n\n${name}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="field">
        <span>Il tuo nome</span>
        <input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
      </label>
      <label className="field">
        <span>Oggetto</span>
        <input required value={subject} onChange={(e) => setSubject(e.target.value)} />
      </label>
      <label className="field">
        <span>Messaggio</span>
        <textarea required rows={6} value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button type="submit" className="btn btn--solid form__submit">
        Prepara l’email
      </button>
      <p className="form__note">Si apre il tuo programma di posta con il messaggio già scritto: controllalo e invialo da lì.</p>
    </form>
  );
}
