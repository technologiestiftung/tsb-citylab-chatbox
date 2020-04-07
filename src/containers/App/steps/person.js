/*
  IDs follow the pattern: type(p=prompt, r=response)-field
*/

const personSteps = [
  {
    id: 'p-p1-first-name',
    message: 'Super! Verrätst Du mir zunächst Deinen Vornamen?',
    trigger: 'r-p1-first-name',
  },
  {
    id: 'r-p1-first-name',
    user: true,
    placeholder: 'Hier kannst Du auch mehrere Vornamen eintragen ...',
    trigger: 'p-p1-last-name',
  },
  {
    id: 'p-p1-last-name',
    message: 'Danke {previousValue}, und dein Nachname?',
    trigger: 'r-p1-last-name',
  },
  {
    id: 'r-p1-last-name',
    user: true,
    trigger: 'p-p1-doctor',
  },
  {
    id: 'p-p1-doctor',
    message: 'Besitzt Du einen Doktortitel?',
    trigger: 'r-p1-doctor',
  },
  {
    id: 'r-p1-doctor',
    options: [
      { value: 1, label: 'Ja', trigger: 'p-p1-other-names' },
      { value: 0, label: 'Nein', trigger: 'p-p1-other-names' },
    ],
  },
  {
    id: 'p-p1-other-names',
    message: 'Besitzt Du einen Ordens- oder Künstlernamen?',
    trigger: 'r-p1-other-names',
  },
  {
    id: 'r-p1-other-names',
    options: [
      { value: 1, label: 'Ja', trigger: 'p-p1-other-names-manual' },
      { value: 0, label: 'Nein', trigger: 'p-p1-birth-date' },
    ],
  },
  {
    id: 'p-p1-other-names-manual',
    message: 'Wie lautet Dein Ordens- oder Künstlername?',
    trigger: 'r-p1-other-names-manual',
  },
  {
    id: 'r-p1-other-names-manual',
    user: true,
    trigger: 'p-p1-birth-date',
  },
  {
    id: 'p-p1-birth-date',
    message: 'Wie lautet Dein Geburtsdatum?',
    trigger: 'r-p1-birth-date',
  },
  {
    id: 'r-p1-birth-date',
    user: true,
    trigger: 'p-p1-birth-place',
  },
  {
    id: 'p-p1-birth-place',
    message: 'In welchem Ort und Land wurdest Du geboren?',
    trigger: 'r-p1-birth-place',
  },
  {
    id: 'r-p1-birth-place',
    user: true,
    placeholder: 'Ort, Land ...',
    trigger: 'p-p1-birth-name',
  },
  {
    id: 'p-p1-birth-name',
    message: 'Hattest Du als Du geboren wurdest einen anderen Namen?',
    trigger: 'r-p1-birth-name',
  },
  {
    id: 'r-p1-birth-name',
    options: [
      { value: 1, label: 'Ja', trigger: 'p-p1-birth-name-manual' },
      { value: 0, label: 'Nein', trigger: 'p-p1-nationality' },
    ],
  },
  {
    id: 'p-p1-birth-name-manual',
    message: 'Wie lautete Dein voller Name damals?',
    trigger: 'r-p1-birth-name-manual',
  },
  {
    id: 'r-p1-birth-name-manual',
    user: true,
    trigger: 'p-p1-nationality',
  },
  {
    id: 'p-p1-nationality',
    message: 'Bitte nenne mir nun Deine Staatsangehörigkeit.',
    trigger: 'r-p1-nationality',
  },
  {
    id: 'r-p1-nationality',
    user: true,
    placeholder: 'Hier kannst Du auch mehrere nennen',
    trigger: 'p-p1-religion',
  },
  {
    id: 'p-p1-religion',
    message: 'Gehörst Du formell einer Religion an?',
    trigger: 'r-p1-religion',
  },
  {
    id: 'r-p1-religion',
    options: [
      { value: 1, label: 'Ja', trigger: 'p-p1-religion-manual' },
      { value: 0, label: 'Nein', trigger: 'p-p1-sex' },
    ],
  },
  {
    id: 'p-p1-religion-manual',
    message: 'Danke. Welcher Religion gehörst Du an?',
    trigger: 'r-p1-religion-manual',
  },
  {
    id: 'r-p1-religion-manual',
    user: true,
    trigger: 'p-p1-sex',
  },
  {
    id: 'p-p1-sex',
    message: 'Welches Geschlecht ist in Deinen Ausweisdokumenten vermerkt?',
    trigger: 'r-p1-sex',
  },
  {
    id: 'r-p1-sex',
    user: true,
    trigger: 'p-download',
  },
];

export { personSteps as default };