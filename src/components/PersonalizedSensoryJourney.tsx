import { useState } from 'react';
import { SensoryJourney } from './SensoryJourney';
import { PersonalityReveal } from './PersonalityReveal';
import { AnimatePresence } from 'motion/react';
import type { SensoryExperience } from '../App';
import type { Personality } from '../types/personality';

interface PersonalizedSensoryJourneyProps {
  personality: Personality;
  experiences: SensoryExperience[];
  onExperienceCollect: (experienceId: string, data?: any) => void;
  onReset: () => void;
  onReturnToForm: () => void;
}

export function PersonalizedSensoryJourney({
  personality,
  experiences,
  onExperienceCollect,
  onReset,
  onReturnToForm
}: PersonalizedSensoryJourneyProps) {
  const [showReveal, setShowReveal] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {showReveal ? (
        <PersonalityReveal 
          key="reveal"
          personality={personality}
          onContinue={() => setShowReveal(false)}
        />
      ) : (
        <SensoryJourney
          key="journey"
          personality={personality}
          experiences={experiences}
          onExperienceCollect={onExperienceCollect}
          onReset={onReset}
          onReturnToForm={onReturnToForm}
        />
      )}
    </AnimatePresence>
  );
}