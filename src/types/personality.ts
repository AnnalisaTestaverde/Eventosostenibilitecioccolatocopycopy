export type PersonalityType = 
  | 'custode-verde'
  | 'architetto-futuro'
  | 'giardiniere-sensoriale'
  | 'navigatore-etico'
  | 'alchimista-tempo'
  | 'cacao-dormiente';

export interface Personality {
  id: PersonalityType;
  title: string;
  description: string;
  emoji: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    glow: string;
    border: string;
  };
  gradients: {
    sound: string;
    touch: string;
    smell: string;
    sight: string;
    taste: string;
  };
  characteristics: string[];
  quote: string;
  illustration: string;
  iconName: string;
}

export const personalities: Record<PersonalityType, Personality> = {
  'custode-verde': {
    id: 'custode-verde',
    title: "Il Custode Verde",
    description: "Vegli su ciò che ami. Per te, ogni scelta è un atto di cura.",
    emoji: "🌱",
    colors: {
      primary: '#2D6A4F',        // Verde foresta ricco
      secondary: '#52B788',      // Verde smeraldo vibrante
      accent: '#74C69D',         // Verde giada luminoso
      background: '#F1FAEE',     // Bianco naturale
      text: '#1B4332',           // Verde scurissimo
      glow: '#95D5B2',          // Verde acqua brillante
      border: 'rgba(45, 106, 79, 0.4)'
    },
    gradients: {
      sound: 'linear-gradient(135deg, #2D6A4F 0%, #52B788 100%)',
      touch: 'linear-gradient(135deg, #52B788 0%, #74C69D 100%)',
      smell: 'linear-gradient(135deg, #74C69D 0%, #95D5B2 100%)',
      sight: 'linear-gradient(135deg, #95D5B2 0%, #B7E4C7 100%)',
      taste: 'linear-gradient(135deg, #2D6A4F 0%, #95D5B2 100%)'
    },
    characteristics: [
      'Cura e attenzione',
      'Protezione del valore',
      'Scelte consapevoli',
      'Amore per la natura'
    ],
    quote: "Ogni gesto di cura è un seme per il futuro",
    illustration: '🌿',
    iconName: 'HandHeart'
  },
  
  'architetto-futuro': {
    id: 'architetto-futuro',
    title: "L'Architetto del Futuro",
    description: "Sogni mondi nuovi. Ti ispira ciò che unisce tecnologia e natura.",
    emoji: "🏗️",
    colors: {
      primary: '#0077FF',        // Blu elettrico cyber
      secondary: '#00D4FF',      // Azzurro neon
      accent: '#B24BF3',         // Viola digitale
      background: '#F0F9FF',     // Bianco bluastro
      text: '#003366',           // Blu navy profondo
      glow: '#00F0FF',          // Ciano luminoso
      border: 'rgba(0, 119, 255, 0.5)'
    },
    gradients: {
      sound: 'linear-gradient(135deg, #0077FF 0%, #00D4FF 100%)',
      touch: 'linear-gradient(135deg, #00D4FF 0%, #00F0FF 100%)',
      smell: 'linear-gradient(135deg, #00D4FF 0%, #B24BF3 100%)',
      sight: 'linear-gradient(135deg, #B24BF3 0%, #E293FF 100%)',
      taste: 'linear-gradient(135deg, #0077FF 0%, #B24BF3 100%)'
    },
    characteristics: [
      'Visione innovativa',
      'Armonia tech-natura',
      'Design del domani',
      'Pensiero sistemico'
    ],
    quote: "Il futuro si costruisce oggi, foglia dopo foglia, bit dopo bit",
    illustration: '🔬',
    iconName: 'CircuitLeaf'
  },
  
  'giardiniere-sensoriale': {
    id: 'giardiniere-sensoriale',
    title: "Il Giardiniere Sensoriale",
    description: "Coltivi il piacere con pazienza. Il cibo è memoria, condivisione, radici.",
    emoji: "🌾",
    colors: {
      primary: '#D97706',        // Ambra/zafferano intenso
      secondary: '#F59E0B',      // Arancio dorato
      accent: '#FBBF24',         // Giallo caldo
      background: '#FFFBEB',     // Crema miele
      text: '#92400E',           // Marrone terra
      glow: '#FCD34D',          // Oro brillante
      border: 'rgba(217, 119, 6, 0.4)'
    },
    gradients: {
      sound: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
      touch: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
      smell: 'linear-gradient(135deg, #FBBF24 0%, #FCD34D 100%)',
      sight: 'linear-gradient(135deg, #FCD34D 0%, #FDE68A 100%)',
      taste: 'linear-gradient(135deg, #D97706 0%, #FCD34D 100%)'
    },
    characteristics: [
      'Pazienza e cura',
      'Memoria gustativa',
      'Condivisione rituale',
      'Radici profonde'
    ],
    quote: "Coltivo sapori come si coltivano ricordi: con tempo e dedizione",
    illustration: '☕',
    iconName: 'CupRoots'
  },
  
  'navigatore-etico': {
    id: 'navigatore-etico',
    title: "Il Navigatore Etico",
    description: "Cammini con una bussola interiore. Coerenza, onestà, lungimiranza.",
    emoji: "🧭",
    colors: {
      primary: '#0C4A6E',        // Blu oceano profondo
      secondary: '#0284C7',      // Blu cielo intenso
      accent: '#38BDF8',         // Azzurro brillante
      background: '#F0F9FF',     // Bianco ghiaccio
      text: '#082F49',           // Blu notte
      glow: '#7DD3FC',          // Azzurro cristallo
      border: 'rgba(12, 74, 110, 0.4)'
    },
    gradients: {
      sound: 'linear-gradient(135deg, #0C4A6E 0%, #0284C7 100%)',
      touch: 'linear-gradient(135deg, #0284C7 0%, #0EA5E9 100%)',
      smell: 'linear-gradient(135deg, #0EA5E9 0%, #38BDF8 100%)',
      sight: 'linear-gradient(135deg, #38BDF8 0%, #7DD3FC 100%)',
      taste: 'linear-gradient(135deg, #0C4A6E 0%, #7DD3FC 100%)'
    },
    characteristics: [
      'Coerenza d\'azione',
      'Onestà radicale',
      'Visione a lungo termine',
      'Integrità morale'
    ],
    quote: "Ogni scelta è una direzione, ogni azione una rotta verso il mio nord",
    illustration: '⚖️',
    iconName: 'CompassLeaf'
  },
  
  'alchimista-tempo': {
    id: 'alchimista-tempo',
    title: "L'Alchimista del Tempo",
    description: "Trasformi i momenti in rituali. Per te, fermarsi non è perdere tempo — è coltivare benessere, dentro e fuori.",
    emoji: "⏳",
    colors: {
      primary: '#A8E6CF',        // Verde menta (ORIGINALE)
      secondary: '#88D4AB',      // Verde acqua
      accent: '#FFB8D1',         // Rosa tenue (ORIGINALE)
      background: '#FFF9F3',     // Panna chiaro
      text: '#4A7C59',           // Verde medio
      glow: '#FF9EC4',          // Rosa brillante
      border: 'rgba(168, 230, 207, 0.4)'
    },
    gradients: {
      sound: 'linear-gradient(135deg, #A8E6CF 0%, #88D4AB 100%)',
      touch: 'linear-gradient(135deg, #88D4AB 0%, #A8E6CF 100%)',
      smell: 'linear-gradient(135deg, #A8E6CF 0%, #FFB8D1 100%)',
      sight: 'linear-gradient(135deg, #FFB8D1 0%, #FF9EC4 100%)',
      taste: 'linear-gradient(135deg, #A8E6CF 0%, #FFB8D1 100%)'
    },
    characteristics: [
      'Rituali quotidiani',
      'Consapevolezza del presente',
      'Trasformazione interiore',
      'Equilibrio e armonia'
    ],
    quote: "Ogni istante è una pozione da distillare con cura",
    illustration: '🧪',
    iconName: 'HourglassBubbles'
  },
  
  'cacao-dormiente': {
    id: 'cacao-dormiente',
    title: "Il Cacao Dormiente",
    description: "Stai in modalità standby. Il cacao ti aspetta… quando vorrai risvegliarti.",
    emoji: "😴",
    colors: {
      primary: '#78350F',        // Marrone cacao ricco
      secondary: '#92400E',      // Marrone cioccolato
      accent: '#D97706',         // Ambra caramello
      background: '#FEF3C7',     // Crema latte
      text: '#451A03',           // Marrone espresso
      glow: '#F59E0B',          // Oro miele
      border: 'rgba(120, 53, 15, 0.3)'
    },
    gradients: {
      sound: 'linear-gradient(135deg, #78350F 0%, #92400E 100%)',
      touch: 'linear-gradient(135deg, #92400E 0%, #A16207 100%)',
      smell: 'linear-gradient(135deg, #A16207 0%, #D97706 100%)',
      sight: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
      taste: 'linear-gradient(135deg, #78350F 0%, #F59E0B 100%)'
    },
    characteristics: [
      'Potenziale latente',
      'Pausa rigenerativa',
      'Ascolto interiore',
      'Risveglio possibile'
    ],
    quote: "Nel silenzio del riposo, il cacao aspetta il momento giusto",
    illustration: '💤',
    iconName: 'SleepingBean'
  }
};

// Helper per ottenere personalità da URL params (utile per testing)
export function getPersonalityFromUrl(): PersonalityType {
  if (typeof window === 'undefined') return 'cacao-dormiente';
  
  const params = new URLSearchParams(window.location.search);
  const p = params.get('p') as PersonalityType;
  
  return p && personalities[p] ? p : 'cacao-dormiente';
}