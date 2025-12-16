import { useState, useEffect } from 'react';
import { PersonalizedSensoryJourney } from './components/PersonalizedSensoryJourney';
import { NocaForm } from './components/NocaForm';
import { personalities, getPersonalityFromUrl } from './types/personality';
import type { PersonalityType } from './types/personality';

export interface SensoryExperience {
  id: string;
  sense: 'touch' | 'smell' | 'sight' | 'sound' | 'taste';
  name: string;
  description: string;
  icon: string;
  color: string;
  collected: boolean;
  timestamp?: number;
  interactionData?: any;
}

export default function App() {
  // Controlla se l'utente ha già completato il form
  const [hasCompletedForm, setHasCompletedForm] = useState(false);
  const [personalityType, setPersonalityType] = useState<PersonalityType>('cacao-dormiente');
  
  useEffect(() => {
    // Controlla localStorage per vedere se l'utente ha già fatto il form
    const savedPersonality = localStorage.getItem('noca_personality') as PersonalityType;
    const urlPersonality = getPersonalityFromUrl();
    
    // Se c'è un parametro URL, usa quello (permette testing diretto)
    if (urlPersonality) {
      setPersonalityType(urlPersonality);
      setHasCompletedForm(true);
    } 
    // Altrimenti controlla se c'è una personalità salvata E che sia valida
    else if (savedPersonality && personalities[savedPersonality]) {
      setPersonalityType(savedPersonality);
      setHasCompletedForm(true);
    }
    // Altrimenti mostra il form (default per nuovi utenti)
    else {
      setHasCompletedForm(false);
      // Pulizia preventiva per evitare stati inconsistenti
      clearAllNocaData();
    }
  }, []);
  
  // Funzione helper per pulire TUTTI i dati NOCA da localStorage
  const clearAllNocaData = () => {
    // Rimuovi tutti i dati salvati dell'app
    localStorage.removeItem('noca_personality');
    localStorage.removeItem('noca_user_data');
    
    // Rimuovi tutte le chiavi di percorso sensoriale per ogni personalità
    const allPersonalities: PersonalityType[] = [
      'alchimista-tempo',
      'custode-verde', 
      'architetto-futuro',
      'giardiniere-sensoriale',
      'navigatore-etico',
      'cacao-dormiente'
    ];
    
    allPersonalities.forEach(p => {
      localStorage.removeItem(`noca-sensory-journey-${p}`);
    });
  };
  
  const handleFormComplete = (personality: PersonalityType) => {
    setPersonalityType(personality);
    setHasCompletedForm(true);
    
    // Aggiorna URL senza reload
    window.history.pushState({}, '', `/?p=${personality}`);
  };
  
  const personality = personalities[personalityType];

  // Ordine: udito, tatto, olfatto, vista, gusto
  const [experiences, setExperiences] = useState<SensoryExperience[]>([
    {
      id: 'sound',
      sense: 'sound',
      name: 'Udito',
      description: 'La Sinfonia Nascosta',
      icon: 'Ear',
      color: 'from-[#88D4AB] to-[#A8E6CF]',
      collected: false
    },
    {
      id: 'touch',
      sense: 'touch',
      name: 'Tatto',
      description: 'La Memoria della Texture',
      icon: 'Hand',
      color: 'from-[#A8E6CF] to-[#B8E6D5]',
      collected: false
    },
    {
      id: 'smell',
      sense: 'smell',
      name: 'Olfatto',
      description: 'L\'Archivio degli Aromi',
      icon: 'Wind',
      color: 'from-[#88D4AB] to-[#A8E6CF]',
      collected: false
    },
    {
      id: 'sight',
      sense: 'sight',
      name: 'Vista',
      description: 'Il Caleidoscopio del Cacao',
      icon: 'Eye',
      color: 'from-[#A8E6CF] to-[#C8E6D7]',
      collected: false
    },
    {
      id: 'taste',
      sense: 'taste',
      name: 'Gusto',
      description: 'La Temperatura del Ricordo',
      icon: 'Sparkles',
      color: 'from-[#88D4AB] via-[#A8E6CF] to-[#B8E6D5]',
      collected: false
    }
  ]);

  useEffect(() => {
    // Carica da localStorage con chiave specifica per personalità
    const storageKey = `noca-sensory-journey-${personalityType}`;
    const savedExperiences = localStorage.getItem(storageKey);
    if (savedExperiences) {
      setExperiences(JSON.parse(savedExperiences));
    }
  }, [personalityType]);

  const handleExperienceCollect = (experienceId: string, data?: any) => {
    const updatedExperiences = experiences.map(exp =>
      exp.id === experienceId
        ? { ...exp, collected: true, timestamp: Date.now(), interactionData: data }
        : exp
    );
    setExperiences(updatedExperiences);
    
    // Salva con chiave specifica per personalità
    const storageKey = `noca-sensory-journey-${personalityType}`;
    localStorage.setItem(storageKey, JSON.stringify(updatedExperiences));
  };

  const handleReset = () => {
    const resetExperiences = experiences.map(exp => ({ 
      ...exp, 
      collected: false, 
      timestamp: undefined,
      interactionData: undefined 
    }));
    setExperiences(resetExperiences);
    
    // Rimuovi da localStorage
    const storageKey = `noca-sensory-journey-${personalityType}`;
    localStorage.removeItem(storageKey);
  };

  const handleReturnToForm = () => {
    // Reset completo: pulisci TUTTO e torna al form
    clearAllNocaData();
    setHasCompletedForm(false);
    setPersonalityType('cacao-dormiente');
    
    // Reset anche l'URL
    window.history.pushState({}, '', '/');
    
    // Reset le esperienze per sicurezza
    const resetExperiences = experiences.map(exp => ({ 
      ...exp, 
      collected: false, 
      timestamp: undefined,
      interactionData: undefined 
    }));
    setExperiences(resetExperiences);
  };

  return (
    <div>
      {!hasCompletedForm ? (
        <NocaForm onComplete={handleFormComplete} />
      ) : (
        <PersonalizedSensoryJourney
          personality={personality}
          experiences={experiences}
          onExperienceCollect={handleExperienceCollect}
          onReset={handleReset}
          onReturnToForm={handleReturnToForm}
        />
      )}
    </div>
  );
}