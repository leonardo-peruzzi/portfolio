/* ------------------------------------------------------------------
   Tutti i contenuti del portfolio vivono in questo file.
   Modifica testi, date e link: le pagine si aggiornano da sole.
   Per le foto: copia i file in /public/images e imposta `src`
   (es. src: '/images/cantiere-1.jpg'). Senza `src` viene mostrato
   un segnaposto elegante.
   Per i documenti: copia i file in /public/documenti e aggiorna `href`.
------------------------------------------------------------------- */

export type Photo = { src?: string; alt: string; caption: string };

export type DocCategory =
  | 'Certificazioni'
  | 'Progetti'
  | 'Pubblicazioni'
  | 'Referenze';

export type DocumentItem = {
  id: string;
  title: string;
  category: DocCategory;
  year: number;
  type: string; // PDF, XLSX, DOCX...
  size: string;
  href: string;
  experienceId?: string; // se presente, il documento compare anche nel dossier dell'esperienza
};

export type Experience = {
  id: string;
  period: string;
  role: string;
  company: string;
  place: string;
  summary: string;
  context: string;
  challenge: string;
  approach: string;
  metrics: { value: string; label: string }[];
  skills: string[];
  highlights: string[];
  photos: Photo[];
};

export const profile = {
  name: 'Leonardo Peruzzi',
  firstName: 'Leonardo',
  lastName: 'Peruzzi',
  initials: 'LP',
  headline: 'Digital & IT Manager',
  statement:
    'Aiuto le aziende a evolversi attraverso la tecnologia, semplificando processi, sviluppando soluzioni digitali e costruendo un’infrastruttura solida e affidabile orientata all’innovazione.',
  location: 'Terni, Italia',
  availability: 'Disponibile per incarichi selezionati da Ottobre 2026',
  email: 'leonardo.peruzzi.dev@gmail.com',
  phone: '+39 02 1234 5678',
  linkedin: 'https://linkedin.com/in/leonardo-peruzzi-43369123b',
  cv: '/documenti/cv-leonardo-peruzzi.pdf',
  portrait: {
    src: undefined,
    alt: 'Ritratto di Leonardo Peruzzi',
    caption: 'Leonardo Peruzzi',
  } as Photo,
};

export const specialties = [
  {
    title: 'Digital & IT Management',
    text: 'Gestisco infrastrutture, strumenti e processi per supportare la crescita e l’efficienza aziendale.',
  },
  {
    title: 'Automazione e innovazione',
    text: 'Digitalizzo attività operative attraverso Microsoft 365, Power Platform e soluzioni su misura.',
  },
  {
    title: 'Brand Experience',
    text: 'Curo identità visiva, comunicazione digitale e progetti di rebranding per valorizzare il brand.',
  },
];

export const about = {
  quote:
    'Trasformare la complessità in soluzioni semplici, efficaci e orientate ai risultati.',

  paragraphs: [
    'Il mio percorso professionale nasce dal software development e si è evoluto verso la digital transformation, permettendomi di acquisire una visione completa del rapporto tra tecnologia, processi e business.',

    'Progetto soluzioni digitali che aiutano aziende e persone a lavorare meglio: dall’automazione dei processi alla gestione dell’infrastruttura IT, fino allo sviluppo di applicazioni e strumenti su misura.',

    'Affianco alle competenze tecniche una forte attenzione alla comunicazione e all’esperienza utente, collaborando con marketing, stakeholder e clienti per creare prodotti digitali e identità di brand capaci di generare un impatto reale.'
  ],
  details: [
    { label: 'Sede', value: 'Terni' },
    { label: 'Ambiti', value: 'Energia rinnovabile, infrastrutture, logistica' },
    { label: 'Lingue', value: 'Italiano, inglese, Spagnolo, russo, ucraino' },
    { label: 'Disponibilità', value: 'In presenza, ibrida, a distanza' },
  ],
};

export const experiences: Experience[] = [
  {
    id: 'tes',
    period: 'dic 2025 – oggi',
    role: 'Digital & IT Manager',
    company: 'Tecno Energia e Servizi S.r.l.',
    place: 'Terni',
    summary:
      'Guido la trasformazione digitale dell’azienda, ottimizzando processi, infrastrutture IT e strumenti operativi per migliorare efficienza, collaborazione e controllo delle attività.',
    context:
      'TES opera nel settore dell’efficienza energetica, delle energie rinnovabili e dei servizi energetici avanzati. Il mio ruolo integra tecnologia, organizzazione e comunicazione, supportando la crescita aziendale attraverso soluzioni digitali innovative.',
    challenge:
      'La rapida evoluzione delle attività aziendali richiedeva processi più strutturati, una gestione documentale centralizzata, una maggiore automazione delle attività operative e una presenza digitale più coerente e professionale.',
    approach:
      'Ho progettato e implementato soluzioni digitali basate sull’ecosistema Microsoft 365, sviluppando flussi automatizzati con Power Automate, strumenti di monitoraggio, procedure digitali e sistemi di gestione documentale. Parallelamente coordino le attività di comunicazione digitale, grafica, branding e rebranding, assicurando coerenza tra processi interni, strumenti tecnologici e identità aziendale.',
    metrics: [
      { value: '15+', label: 'workflow automatizzati' },
      { value: '1', label: 'rebranding completo' },
      { value: 'M365', label: 'piattaforma aziendale integrata' },
    ],
    skills: ['Digital Transformation','Microsoft 365 & Power Platform','Process Automation','IT Infrastructure Management','Branding & Rebranding','Digital Communication','Graphic Design','Workflow Optimization','Document Management Systems','Project Management','Team Collaboration','Problem Solving'],
    highlights: [
      'Progettazione e implementazione della strategia di digitalizzazione aziendale.',
      'Automazione dei processi interni tramite Microsoft 365, SharePoint e Power Automate.',
      'Creazione di sistemi documentali e procedure digitali per migliorare efficienza e tracciabilità.',
      'Gestione dell’infrastruttura IT e supporto all’evoluzione tecnologica dell’azienda.',
      'Guida del rebranding aziendale con redesign del logo, dell’identità visiva e del sito web.',
      'Sviluppo della presenza digitale dell’azienda attraverso strumenti, contenuti e linee guida coordinate.'
    ],
    photos: [
      { alt: 'Vista aerea del cantiere del parco solare', caption: 'Cantiere del parco solare di Monte Ombroso' },
      { alt: 'Verifica in campo con il team di ingegneria', caption: 'Verifica in campo con il team di ingegneria' },
      { alt: 'Cerimonia di messa in servizio dell’impianto', caption: 'Cerimonia di messa in servizio' },
    ],
  },
  {
    id: 'maestrale',
    period: 'feb 2023 – mar 2025',
    role: 'Web Developer',
    company: 'Gruppo Maestrale',
    place: 'Terni',

    summary:
      'Ho contribuito allo sviluppo di applicazioni web, piattaforme digitali e siti aziendali, collaborando con team multidisciplinari, clienti e reparto marketing per trasformare esigenze di business in soluzioni digitali efficaci, moderne e orientate all’esperienza utente.',

    context:
      'Entrato in Gruppo Maestrale attraverso un percorso formativo ITS, ho intrapreso un percorso di crescita professionale che mi ha portato a diventare Web Developer. In questi anni ho lavorato su progetti software e web per aziende di diversi settori, acquisendo competenze tecniche, organizzative e relazionali che mi hanno permesso di comprendere l’intero ciclo di vita di un prodotto digitale.',

    challenge:
      'Ogni progetto richiedeva il coordinamento di competenze diverse e la capacità di conciliare esigenze tecniche, aspettative del cliente e obiettivi di business. Era fondamentale collaborare con sviluppatori, designer, marketing e stakeholder per individuare soluzioni efficaci, garantendo qualità, usabilità, performance e rispetto delle tempistiche di consegna.',

    approach:
      'Ho partecipato attivamente all’intero processo di sviluppo software, dall’analisi dei requisiti alla pubblicazione delle soluzioni. Ho lavorato quotidianamente secondo metodologie Agile e framework Scrum, prendendo parte a daily meeting, sprint planning, review e momenti di collaborazione con tutte le figure coinvolte nel progetto. Questo approccio mi ha permesso di sviluppare una forte capacità di lavoro in team, confrontandomi costantemente con sviluppatori, designer, project manager e stakeholder per individuare le soluzioni più adatte sia dal punto di vista tecnico che funzionale. Parallelamente ho collaborato con il reparto marketing nella progettazione e realizzazione di siti WordPress per aziende, contribuendo alla definizione di strutture, contenuti e strategie digitali in linea con gli obiettivi dei clienti. Durante il mio percorso ho inoltre partecipato a un progetto sviluppato in collaborazione con TeamSystem, occupandomi dello sviluppo frontend in React e TypeScript e della realizzazione di interfacce pixel-perfect basate sui design forniti dal team UX/UI.',

    metrics: [
      { value: '2+', label: 'anni di esperienza' },
      { value: '15+', label: 'tecnologie e strumenti utilizzati' },
      { value: 'Agile', label: 'metodologia di lavoro' },
    ],

    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'WordPress',
      'Frontend Development',
      'Pixel-Perfect Development',
      'Object-Oriented Programming',
      'C#',
      'SQL',
      'Scrum',
      'Git',
      'GitLab',
      'Agile Development',
      'Team Collaboration',
      'Requirements Analysis',
      'Client Management',
      'Digital Communication',
      'UI Design',
      'User Experience',
      'Responsive Design',
      'Problem Solving'
    ],

    highlights: [
      'Crescita professionale da tirocinante ITS a Web Developer.',
      'Partecipazione allo sviluppo e alla manutenzione di applicazioni web, portali e siti aziendali.',
      'Lavoro quotidiano in team Agile utilizzando il framework Scrum.',
      'Partecipazione a daily scrum, sprint planning, review e attività collaborative orientate al miglioramento continuo.',
      'Collaborazione costante con sviluppatori, designer e stakeholder per individuare le migliori soluzioni tecniche e funzionali.',
      'Utilizzo quotidiano di GitLab per versionamento, code review, tracciamento delle attività e collaborazione all’interno di team Agile.',
      'Analisi delle esigenze dei clienti e traduzione dei requisiti di business in soluzioni digitali concrete.',
      'Confronto diretto con clienti e referenti aziendali durante la definizione di funzionalità, contenuti e obiettivi progettuali.',
      'Collaborazione con il reparto marketing nella progettazione e realizzazione di siti WordPress per aziende.',
      'Supporto alla definizione di contenuti e strutture web orientate all’esperienza utente e agli obiettivi di comunicazione del cliente.',
      'Sviluppo frontend in React e TypeScript nell’ambito di un progetto enterprise realizzato in collaborazione con TeamSystem.',
      'Implementazione di componenti e interfacce pixel-perfect garantendo la massima fedeltà ai design UX/UI.',
      'Realizzazione di interfacce responsive utilizzando JavaScript, HTML5, CSS3 e Bootstrap.',
      'Applicazione dei principi della programmazione orientata agli oggetti nello sviluppo software.',
      'Sviluppo di competenze trasversali in comunicazione, collaborazione interfunzionale e gestione delle relazioni con il cliente.',
      'Comprensione completa del ciclo di vita di un prodotto digitale, dall’analisi iniziale alla pubblicazione e manutenzione.'
    ],

    photos: [
      { alt: 'Vista aerea del cantiere del parco solare', caption: 'Cantiere del parco solare di Monte Ombroso' },
      { alt: 'Verifica in campo con il team di ingegneria', caption: 'Verifica in campo con il team di ingegneria' },
      { alt: 'Cerimonia di messa in servizio dell’impianto', caption: 'Cerimonia di messa in servizio' },
    ],
  },
  {
    id: 'csnine',
    period: 'gen 2023 – mar 2023',
    role: 'Web Developer & Web Designer Intern',
    company: 'CS Nine GmbH',
    place: 'Vienna, Austria',

    summary:
      'Ho partecipato a un’esperienza internazionale Erasmus+ presso una software house a Vienna, contribuendo allo sviluppo di siti web e interfacce digitali e approfondendo le competenze di web development e web design in un contesto professionale multiculturale.',

    context:
      'L’esperienza Erasmus+ mi ha offerto l’opportunità di confrontarmi con un ambiente lavorativo internazionale, collaborando con professionisti del settore digitale e applicando sul campo le competenze acquisite durante il mio percorso di studi.',

    challenge:
      'Inserirmi rapidamente in un team internazionale, adattandomi a nuove metodologie di lavoro e contribuendo alla realizzazione di progetti web capaci di coniugare qualità tecnica, usabilità e attenzione agli aspetti grafici e comunicativi.',

    approach:
      'Ho collaborato allo sviluppo e alla personalizzazione di siti web e interfacce digitali utilizzando HTML, CSS e JavaScript, partecipando sia alle attività di implementazione tecnica sia alla progettazione grafica. Attraverso Figma ho contribuito alla realizzazione e al perfezionamento di layout, componenti e mockup, acquisendo una maggiore sensibilità verso i principi di user experience, web design e progettazione centrata sull’utente. L’esperienza mi ha inoltre permesso di migliorare le capacità di collaborazione in contesti internazionali, problem solving e comunicazione professionale.',

    metrics: [
      { value: '3', label: 'mesi all’estero' },
      { value: '4', label: 'tecnologie e strumenti principali' },
      { value: 'Erasmus+', label: 'programma europeo' },
    ],

    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Figma',
      'Web Design',
      'Frontend Development',
      'UI Design',
      'User Experience',
      'Responsive Design',
      'Team Collaboration',
      'Problem Solving',
      'International Experience'
    ],

    highlights: [
      'Esperienza professionale internazionale nell’ambito del programma Erasmus+.',
      'Collaborazione con un team internazionale in un contesto aziendale orientato allo sviluppo digitale.',
      'Sviluppo e personalizzazione di siti web utilizzando HTML, CSS e JavaScript.',
      'Progettazione e ottimizzazione di layout e interfacce digitali attraverso Figma.',
      'Applicazione dei principi di responsive design e user experience.',
      'Partecipazione alle attività di progettazione grafica e definizione dell’identità visiva delle pagine web.',
      'Sviluppo di capacità di problem solving e lavoro in team in un ambiente multiculturale.',
      'Consolidamento delle competenze tecniche e progettuali che hanno costituito la base del successivo percorso professionale nel web development.'
    ],
    photos: [
      { alt: 'Cantiere residenziale in fase di getto', caption: 'Getto delle fondazioni, cantiere di Pisa' },
      { alt: 'Rilievi con la direzione lavori', caption: 'Rilievi con la direzione lavori' },
      { alt: 'Edificio commerciale completato', caption: 'Edificio commerciale a fine lavori' },
    ],
  },
];

export const skillGroups = [
  {
    title: 'Business & Digital Strategy',
    description:
      'Trasformo esigenze operative in soluzioni digitali che migliorano efficienza, controllo e crescita aziendale.',
    skills: [
      { name: 'Digital Transformation', level: 92 },
      { name: 'Business Process Analysis', level: 90 },
      { name: 'Project Management', level: 86 },
      { name: 'Stakeholder Management', level: 85 },
    ],
  },
  {
    title: 'Development & Automation',
    description:
      'Esperienza nello sviluppo software e nell’automazione di processi attraverso tecnologie moderne e piattaforme collaborative.',
    skills: [
      { name: 'React & TypeScript', level: 94 },
      { name: 'JavaScript', level: 88 },
      { name: 'Microsoft Power Platform', level: 86 },
      { name: 'HTML, CSS & WordPress', level: 89 },
    ],
  },
  {
    title: 'Communication & Brand Experience',
    description:
      'Collaborazione con clienti, marketing e stakeholder per sviluppare prodotti digitali e identità di brand efficaci.',
    skills: [
      { name: 'Branding & Rebranding', level: 85 },
      { name: 'Digital Communication', level: 86 },
      { name: 'User Experience (UX)', level: 88 },
      { name: 'Client Relationship Management', level: 89 },
    ],
  },
];

export const education = [
  {
    period: '2021 – 2023',
    title: 'Diploma 5 Livello Meccatronico con Specializzazione in Automazione e Sistemi IT',
    institution: 'ITS Umbria Academy',
    note: '100/100',
  },
  {
    period: '2014 – 2019',
    title: 'Diploma Liceo Scientifico, indirizzo Scienze Applicate',
    institution: 'Liceo Renato DOnatelli, Terni',
   /* note: '100/100', */
  },
];

export const certifications = [
  { year: '2023', title: 'USE AND PROGRAMMING for the C5G family of robots', issuer: 'COMAU ACADEMY' },  
];

export const languages = [
  { name: 'Italiano', level: 'Madrelingua' },
  { name: 'Inglese', level: 'C1' },
  { name: 'Spagnolo', level: 'B2' },
  { name: 'Russo', level: 'A2' },
  { name: 'Ucraino', level: 'A1' },
];

export const documents: DocumentItem[] = [
  { id: 'cert-pmp', title: 'Certificato PMP', category: 'Certificazioni', year: 2015, type: 'PDF', size: '1,2 MB', href: '/documenti/certificato-pmp.pdf' },
  { id: 'cert-iso', title: 'Attestato Lead Auditor ISO 45001', category: 'Certificazioni', year: 2019, type: 'PDF', size: '980 KB', href: '/documenti/attestato-iso-45001.pdf' },
  { id: 'cert-prince2', title: 'Certificato PRINCE2 Practitioner', category: 'Certificazioni', year: 2013, type: 'PDF', size: '860 KB', href: '/documenti/certificato-prince2.pdf' },
  { id: 'proj-ombroso', title: 'Relazione tecnica del parco solare di Monte Ombroso', category: 'Progetti', year: 2024, type: 'PDF', size: '8,4 MB', href: '/documenti/relazione-monte-ombroso.pdf', experienceId: 'meridiana' },
  { id: 'proj-acquisti', title: 'Strategia di acquisto per gruppi di fornitura', category: 'Progetti', year: 2023, type: 'XLSX', size: '640 KB', href: '/documenti/strategia-acquisti.xlsx', experienceId: 'meridiana' },
  { id: 'proj-cruscotto', title: 'Cruscotto di controllo commesse: guida metodologica', category: 'Progetti', year: 2019, type: 'PDF', size: '3,1 MB', href: '/documenti/guida-cruscotto.pdf', experienceId: 'solaris' },
  { id: 'proj-calenzano', title: 'Piano di qualità del centro logistico di Calenzano', category: 'Progetti', year: 2014, type: 'PDF', size: '2,7 MB', href: '/documenti/piano-qualita-calenzano.pdf', experienceId: 'tirreno' },
  { id: 'pub-costi', title: 'Il controllo dei costi nei progetti energetici', category: 'Pubblicazioni', year: 2022, type: 'PDF', size: '1,8 MB', href: '/documenti/articolo-controllo-costi.pdf' },
  { id: 'pub-atti', title: 'Atti del convegno Energia e Cantieri', category: 'Pubblicazioni', year: 2020, type: 'PDF', size: '4,6 MB', href: '/documenti/atti-convegno.pdf' },
  { id: 'ref-meridiana', title: 'Lettera di referenza, Meridiana Engineering', category: 'Referenze', year: 2024, type: 'PDF', size: '210 KB', href: '/documenti/referenza-meridiana.pdf', experienceId: 'meridiana' },
  { id: 'ref-solaris', title: 'Lettera di referenza, Solaris Group', category: 'Referenze', year: 2021, type: 'PDF', size: '190 KB', href: '/documenti/referenza-solaris.pdf', experienceId: 'solaris' },
];

export const principles = [
  {
    title: 'Governare la complessità',
    text: 'Coordino persone, processi e priorità per garantire decisioni rapide, attività allineate e risultati misurabili.',
  },
  {
    title: 'Efficienza come metodo',
    text: 'Analizzo processi, individuo i colli di bottiglia e introduco soluzioni che migliorano tempi, qualità e capacità di esecuzione.',
  },
  {
title: 'Guidare attraverso la collaborazione',
text: 'I migliori risultati nascono quando competenze diverse lavorano verso un obiettivo comune. Favorisco il confronto tra business, tecnologia e stakeholder per trasformare la complessità in soluzioni efficaci.',
  },
];

export const navItems = [
  { href: '/profilo', label: 'Profilo' },
  { href: '/esperienze', label: 'Esperienze' },
  { href: '/competenze', label: 'Competenze' },
  { href: '/formazione', label: 'Formazione' },
/*   { href: '/documenti', label: 'Documenti' }, */
  { href: '/contatti', label: 'Contatti' },
];
