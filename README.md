# Portfolio digitale (Next.js)

Portfolio professionale in Next.js 15 (App Router) e TypeScript, senza librerie UI esterne.

## Avvio

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build di produzione
```

## Personalizzazione

Tutti i contenuti sono in **`data/profile.ts`**: nome, profilo, esperienze, competenze,
formazione, certificazioni, documenti e contatti.

- **Foto**: copia i file in `public/images/` e imposta `src: '/images/nome-file.jpg'`
  sulla foto corrispondente (ritratto o galleria di un'esperienza). Senza `src` compare un segnaposto.
- **Documenti**: copia i file in `public/documenti/` e aggiorna `href`. Con `experienceId`
  un documento compare anche nel dossier dell'esperienza collegata.
- **Curriculum**: salva il PDF in `public/documenti/cv-elena-marchetti.pdf` (o cambia `profile.cv`).
- **Colori**: variabili CSS all'inizio di `app/globals.css`.
- **Font**: Bodoni Moda (titoli) e Hanken Grotesk (testo), caricati con `next/font/google`.


## Pagine

| Percorso | Contenuto |
|---|---|
| `/` | Home: hero, profilo in breve, esperienze, indice delle sezioni |
| `/profilo` | Profilo completo e principi di lavoro |
| `/esperienze` | Indice degli incarichi |
| `/esperienze/[id]` | Dossier di ogni incarico: contesto, sfida, approccio, risultati, competenze, documenti, galleria |
| `/competenze` | Competenze per area e incarichi in cui sono state applicate |
| `/formazione` | Studi, certificazioni e lingue |
| `/documenti` | Archivio con filtro per categoria |
| `/contatti` | Contatti e modulo che prepara l'email |

Per aggiungere un'esperienza basta inserirne una nuova in `experiences` (`data/profile.ts`):
la pagina di dettaglio viene generata in automatico.

## Struttura

```
app/            layout e una cartella per ogni pagina
components/     SiteHeader, Footer, PageHead, Hero, ExperienceIndex, Gallery,
                Lightbox, Skills, Education, DocumentArchive, ContactForm...
data/profile.ts contenuti del portfolio
public/         images/ e documenti/
```
