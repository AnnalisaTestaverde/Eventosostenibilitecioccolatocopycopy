// Definizioni delle 6 personalità NOCA
const PERSONALITIES = {
  'custode-verde': {
    id: 'custode-verde',
    title: "Il Custode Verde",
    description: "Vegli su ciò che ami. Per te, ogni scelta è un atto di cura.",
    emoji: "🌱",
    colors: {
      primary: '#2D6A4F',
      secondary: '#52B788',
      accent: '#74C69D',
      background: '#F1FAEE',
      text: '#1B4332',
      glow: '#95D5B2',
      border: 'rgba(45, 106, 79, 0.4)'
    },
    characteristics: [
      'Cura e attenzione',
      'Protezione del valore',
      'Scelte consapevoli',
      'Amore per la natura'
    ],
    quote: "Ogni gesto di cura è un seme per il futuro",
    illustration: '🌿',
    shape: 'rounded-[3rem_2rem_3rem_2rem]',
    decorationIcon: '🍃'
  },
  
  'architetto-futuro': {
    id: 'architetto-futuro',
    title: "L'Architetto del Futuro",
    description: "Sogni mondi nuovi. Ti ispira ciò che unisce tecnologia e natura.",
    emoji: "🏗️",
    colors: {
      primary: '#0077FF',
      secondary: '#00D4FF',
      accent: '#B24BF3',
      background: '#F0F9FF',
      text: '#003366',
      glow: '#00F0FF',
      border: 'rgba(0, 119, 255, 0.5)'
    },
    characteristics: [
      'Visione innovativa',
      'Armonia tech-natura',
      'Design del domani',
      'Pensiero sistemico'
    ],
    quote: "Il futuro si costruisce oggi, foglia dopo foglia, bit dopo bit",
    illustration: '🔬',
    shape: 'rounded-[1rem]',
    decorationIcon: '⚡'
  },
  
  'giardiniere-sensoriale': {
    id: 'giardiniere-sensoriale',
    title: "Il Giardiniere Sensoriale",
    description: "Coltivi il piacere con pazienza. Il cibo è memoria, condivisione, radici.",
    emoji: "🌾",
    colors: {
      primary: '#D97706',
      secondary: '#F59E0B',
      accent: '#FBBF24',
      background: '#FFFBEB',
      text: '#92400E',
      glow: '#FCD34D',
      border: 'rgba(217, 119, 6, 0.4)'
    },
    characteristics: [
      'Pazienza e cura',
      'Memoria gustativa',
      'Condivisione rituale',
      'Radici profonde'
    ],
    quote: "Coltivo sapori come si coltivano ricordi: con tempo e dedizione",
    illustration: '☕',
    shape: 'rounded-[4rem_2rem_4rem_2rem]',
    decorationIcon: '🌾'
  },
  
  'navigatore-etico': {
    id: 'navigatore-etico',
    title: "Il Navigatore Etico",
    description: "Cammini con una bussola interiore. Coerenza, onestà, lungimiranza.",
    emoji: "🧭",
    colors: {
      primary: '#0C4A6E',
      secondary: '#0284C7',
      accent: '#38BDF8',
      background: '#F0F9FF',
      text: '#082F49',
      glow: '#7DD3FC',
      border: 'rgba(12, 74, 110, 0.4)'
    },
    characteristics: [
      "Coerenza d'azione",
      'Onestà radicale',
      'Visione a lungo termine',
      'Integrità morale'
    ],
    quote: "Ogni scelta è una direzione, ogni azione una rotta verso il mio nord",
    illustration: '⚖️',
    shape: 'rounded-[2rem_4rem_2rem_4rem]',
    decorationIcon: '💧'
  },
  
  'alchimista-tempo': {
    id: 'alchimista-tempo',
    title: "L'Alchimista del Tempo",
    description: "Trasformi i momenti in rituali. Per te, fermarsi non è perdere tempo — è coltivare benessere, dentro e fuori.",
    emoji: "⏳",
    colors: {
      primary: '#A8E6CF',
      secondary: '#88D4AB',
      accent: '#FFB8D1',
      background: '#FFF9F3',
      text: '#4A7C59',
      glow: '#FF9EC4',
      border: 'rgba(168, 230, 207, 0.4)'
    },
    characteristics: [
      'Rituali quotidiani',
      'Consapevolezza del presente',
      'Trasformazione interiore',
      'Equilibrio e armonia'
    ],
    quote: "Ogni istante è una pozione da distillare con cura",
    illustration: '🧪',
    shape: 'rounded-[3rem]',
    decorationIcon: '✨'
  },
  
  'cacao-dormiente': {
    id: 'cacao-dormiente',
    title: "Il Cacao Dormiente",
    description: "Stai in modalità standby. Il cacao ti aspetta… quando vorrai risvegliarti.",
    emoji: "😴",
    colors: {
      primary: '#78350F',
      secondary: '#92400E',
      accent: '#D97706',
      background: '#FEF3C7',
      text: '#451A03',
      glow: '#F59E0B',
      border: 'rgba(120, 53, 15, 0.3)'
    },
    characteristics: [
      'Potenziale latente',
      'Pausa rigenerativa',
      'Ascolto interiore',
      'Risveglio possibile'
    ],
    quote: "Nel silenzio del riposo, il cacao aspetta il momento giusto",
    illustration: '💤',
    shape: 'rounded-[5rem]',
    decorationIcon: '💤'
  }
};

// Esperienze sensoriali (uguali per tutti, cambiano solo i colori)
const SENSORY_EXPERIENCES = [
  {
    id: 'sound',
    sense: 'sound',
    name: 'Udito',
    description: 'La Sinfonia Nascosta',
    icon: '👂'
  },
  {
    id: 'touch',
    sense: 'touch',
    name: 'Tatto',
    description: 'La Memoria della Texture',
    icon: '🖐️'
  },
  {
    id: 'smell',
    sense: 'smell',
    name: 'Olfatto',
    description: "L'Archivio degli Aromi",
    icon: '👃'
  },
  {
    id: 'sight',
    sense: 'sight',
    name: 'Vista',
    description: 'Il Caleidoscopio del Cacao',
    icon: '👁️'
  },
  {
    id: 'taste',
    sense: 'taste',
    name: 'Gusto',
    description: 'La Temperatura del Ricordo',
    icon: '✨'
  }
];
