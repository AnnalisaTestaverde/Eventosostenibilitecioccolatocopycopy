import { useState } from 'react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RotateCcw, Map } from 'lucide-react';
import type { SensoryExperience } from '../App';
import logo from 'figma:asset/cd753dbc51034f17d4a69918e0aede9add610752.png';
import { IllustratedSense } from './IllustratedSense';
import { FloatingBubble } from './FloatingBubble';
import type { Personality } from '../types/personality';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';

interface SensoryJourneyProps {
  personality: Personality;
  experiences: SensoryExperience[];
  onExperienceCollect: (experienceId: string, data?: any) => void;
  onReset: () => void;
}

// Decorative elements background
function DecorativeBackground({ personality }: { personality: Personality }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Organic blobs - personalized colors */}
      <motion.div
        className="absolute top-10 left-10 w-96 h-96 rounded-full blur-3xl"
        style={{ background: `${personality.colors.primary}30` }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl"
        style={{ background: `${personality.colors.accent}30` }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full blur-3xl"
        style={{ background: `${personality.colors.glow}25` }}
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating personality symbols */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 8 + i,
            delay: i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <div className="text-4xl opacity-10">
            {personality.illustration}
          </div>
        </motion.div>
      ))}

      {/* Circuit lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.path
          d="M100,50 L200,50 L200,150 L300,150"
          stroke={personality.colors.glow}
          strokeWidth="1"
          fill="none"
          strokeDasharray="5,5"
          animate={{
            strokeDashoffset: [0, -10]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </svg>
    </div>
  );
}

export function SensoryJourney({ personality, experiences, onExperienceCollect, onReset }: SensoryJourneyProps) {
  const [selectedExperience, setSelectedExperience] = useState<SensoryExperience | null>(null);
  const [showExperienceDialog, setShowExperienceDialog] = useState(false);
  const [showMapDialog, setShowMapDialog] = useState(false);

  const collectedCount = experiences.filter(e => e.collected).length;
  const totalCount = experiences.length;
  const isComplete = collectedCount === totalCount;

  const topExperiences = experiences.slice(0, 3);
  const bottomExperiences = experiences.slice(3, 5);

  const handleExperienceClick = (experience: SensoryExperience) => {
    setSelectedExperience(experience);
    setShowExperienceDialog(true);
  };

  const handleComplete = () => {
    if (selectedExperience) {
      onExperienceCollect(selectedExperience.id, { completedAt: Date.now() });
      setShowExperienceDialog(false);
      setTimeout(() => setSelectedExperience(null), 300);
    }
  };

  const getSenseType = (icon: string) => {
    const map: { [key: string]: 'ear' | 'hand' | 'wind' | 'eye' | 'sparkles' } = {
      'Ear': 'ear',
      'Hand': 'hand',
      'Wind': 'wind',
      'Eye': 'eye',
      'Sparkles': 'sparkles'
    };
    return map[icon] || 'sparkles';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9F3] via-[#FFFFFF] to-[#FFF9F3] relative overflow-hidden">
      {/* Decorative Background - Personalized */}
      <DecorativeBackground personality={personality} />

      <div className="relative z-10">
        {/* Header with handdrawn feel */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass border-b border-[#A8E6CF]/30 shadow-sm relative overflow-hidden"
        >
          {/* Header decoration - personalized */}
          <div 
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background: `linear-gradient(to right, ${personality.colors.primary}, ${personality.colors.accent}, ${personality.colors.primary})`
            }}
          />
          
          <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 md:gap-4 flex-1">
                <motion.img 
                  src={logo} 
                  alt="Noca" 
                  className="h-10 md:h-16 drop-shadow-lg flex-shrink-0"
                  whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
                <div>
                  <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#4A7C59]">
                    Viaggio Sensoriale
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base text-[#4A7C59]/70" style={{ color: personality.colors.primary }}>
                    {personality.emoji} {personality.title}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 flex-shrink-0">
                {/* Bottone Mappa - visibile sempre ma senza azione */}
                <FloatingBubble size="sm">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#A8E6CF] hover:text-[#4A7C59] hover:bg-transparent p-0 h-auto cursor-default"
                  >
                    <Map className="w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </FloatingBubble>
                
                {/* Bottone Rifai Test - desktop */}
                <div className="hidden md:block">
                  <FloatingBubble size="sm" delay={0.3}>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        localStorage.removeItem('noca_personality');
                        localStorage.removeItem('noca_user_data');
                        window.location.href = '/';
                      }}
                      className="text-[#A8E6CF] hover:text-[#4A7C59] hover:bg-transparent px-3 py-1 h-auto text-xs"
                      title="Rifai il test"
                    >
                      🔄 Rifai Test
                    </Button>
                  </FloatingBubble>
                </div>
                
                {/* Bottone Reset - solo desktop */}
                <div className="hidden md:block">
                  <FloatingBubble size="sm" delay={0.5}>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onReset}
                      className="text-[#A8E6CF] hover:text-[#4A7C59] hover:bg-transparent p-0 h-auto"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </Button>
                  </FloatingBubble>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 pb-safe">
          {/* Hero Section - Playful & Personalized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12 md:mb-20 relative"
          >
            {/* Decorative character - personality emoji */}
            <motion.div
              className="inline-block mb-6 relative"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <div className="text-7xl md:text-9xl relative">
                {personality.emoji}
                {/* Glowing aura - personalized */}
                <motion.div
                  className="absolute inset-0 blur-2xl rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${personality.colors.primary}, ${personality.colors.accent})`
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>
            
            <h2 className="text-3xl md:text-6xl text-[#4A7C59] mb-4">
              Il Tuo Laboratorio<br/>
              <span style={{ color: personality.colors.primary }}>Sensoriale</span>
            </h2>
            <p className="text-lg md:text-xl text-[#4A7C59]/80 max-w-2xl mx-auto leading-relaxed">
              {personality.quote}
            </p>

            {/* Floating bubbles decoration */}
            <div className="absolute top-0 left-1/4 opacity-60">
              <FloatingBubble size="sm" delay={1}>
                <span className="text-2xl">{personality.illustration}</span>
              </FloatingBubble>
            </div>
            <div className="absolute top-0 right-1/4 opacity-60">
              <FloatingBubble size="sm" delay={1.5}>
                <span className="text-2xl">🍫</span>
              </FloatingBubble>
            </div>
          </motion.div>

          {/* Progress Card - Organic & Personalized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12 md:mb-16"
          >
            <div className="max-w-md mx-auto glass-strong rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden">
              {/* Decorative corner - personalized */}
              <div 
                className="absolute top-0 right-0 w-24 h-24 rounded-bl-full"
                style={{ background: `linear-gradient(to bottom left, ${personality.colors.accent}30, transparent)` }}
              />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                      <svg width="40" height="40" viewBox="0 0 40 40">
                        <circle cx="20" cy="20" r="18" fill="none" stroke={personality.colors.primary} strokeWidth="2" strokeDasharray="3,3" />
                        <circle cx="20" cy="20" r="12" fill="none" stroke={personality.colors.accent} strokeWidth="2" />
                        <circle cx="20" cy="20" r="6" fill={personality.colors.glow} opacity="0.6" />
                      </svg>
                    </motion.div>
                    <div>
                      <p className="text-sm" style={{ color: personality.colors.primary }}>Il tuo percorso</p>
                      <p className="text-xs text-[#4A7C59]/70">{personality.title}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-4xl text-[#4A7C59]">{collectedCount}</span>
                    <span className="text-2xl" style={{ color: personality.colors.primary }}>/{totalCount}</span>
                  </div>
                </div>
                
                {/* Organic progress bar - personalized */}
                <div 
                  className="relative h-4 rounded-full overflow-hidden border-2"
                  style={{ 
                    backgroundColor: `${personality.colors.primary}20`,
                    borderColor: `${personality.colors.primary}30`
                  }}
                >
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      background: `linear-gradient(to right, ${personality.colors.primary}, ${personality.colors.accent}, ${personality.colors.glow})`
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${(collectedCount / totalCount) * 100}%` }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  >
                    {/* Animated shine */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      animate={{
                        x: ['-100%', '200%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                    />
                  </motion.div>
                </div>

                {isComplete && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-center p-3 rounded-2xl"
                    style={{ 
                      background: `linear-gradient(to right, ${personality.colors.primary}30, ${personality.colors.accent}30)` 
                    }}
                  >
                    <p className="text-[#4A7C59] flex items-center justify-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      <span>Avventura completata!</span>
                      <Sparkles className="w-5 h-5" />
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Top 3 Experiences */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-8 md:mb-10 relative">
            {topExperiences.map((experience, index) => (
              <ExperienceCard 
                key={experience.id}
                experience={experience}
                index={index}
                onClick={handleExperienceClick}
                getSenseType={getSenseType}
                personality={personality}
              />
            ))}
          </div>

          {/* Bottom 2 Experiences - Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-16 max-w-4xl mx-auto relative">
            {bottomExperiences.map((experience, index) => (
              <ExperienceCard 
                key={experience.id}
                experience={experience}
                index={index + 3}
                onClick={handleExperienceClick}
                getSenseType={getSenseType}
                personality={personality}
                isImportant={experience.sense === 'taste'}
              />
            ))}
          </div>

          {/* Bottom Message - Personalized */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="max-w-2xl mx-auto text-center mb-8"
          >
            <div className="glass-strong rounded-[2.5rem] p-10 shadow-xl relative overflow-hidden">
              {/* Decorative elements - personality symbols */}
              <div className="absolute top-4 left-4 text-4xl opacity-20">{personality.illustration}</div>
              <div className="absolute bottom-4 right-4 text-4xl opacity-20">✨</div>
              
              <div className="relative">
                <FloatingBubble size="md" className="mx-auto mb-6">
                  <div className="text-2xl">{personality.emoji}</div>
                </FloatingBubble>
                
                <p className="text-lg text-[#4A7C59] leading-relaxed mb-2">
                  Un laboratorio pensato per te
                </p>
                <p className="text-base" style={{ color: personality.colors.primary }}>
                  Dove ogni senso racconta<br/>
                  la tua storia unica
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dialogs remain similar but with updated styling */}
      <MapDialog 
        open={showMapDialog}
        onOpenChange={setShowMapDialog}
        experiences={experiences}
        getSenseType={getSenseType}
        personality={personality}
      />

      <ExperienceDialog
        open={showExperienceDialog}
        onOpenChange={setShowExperienceDialog}
        experience={selectedExperience}
        onComplete={handleComplete}
        getSenseType={getSenseType}
        personality={personality}
      />
    </div>
  );
}

// Experience Card Component
interface ExperienceCardProps {
  experience: SensoryExperience;
  index: number;
  onClick: (exp: SensoryExperience) => void;
  getSenseType: (icon: string) => 'ear' | 'hand' | 'wind' | 'eye' | 'sparkles';
  personality: Personality;
  isImportant?: boolean;
}

function ExperienceCard({ experience, index, onClick, getSenseType, personality, isImportant = false }: ExperienceCardProps) {
  // Forme organiche diverse per ogni personalità
  const getShapeClass = () => {
    switch (personality.id) {
      case 'custode-verde':
        return 'rounded-[3rem_2rem_3rem_2rem]'; // Forme floreali asimmetriche
      case 'architetto-futuro':
        return 'rounded-[1rem]'; // Forme geometriche tech
      case 'giardiniere-sensoriale':
        return 'rounded-[4rem_2rem_4rem_2rem]'; // Forme organiche calde
      case 'navigatore-etico':
        return 'rounded-[2rem_4rem_2rem_4rem]'; // Forme fluide come onde
      case 'alchimista-tempo':
        return 'rounded-[3rem]'; // Forme morbide (originale)
      case 'cacao-dormiente':
        return 'rounded-[5rem]'; // Forme molto morbide/rilassate
      default:
        return 'rounded-[3rem]';
    }
  };

  // Decorazioni specifiche per personalità - SEMPLIFICATE con elemento distintivo
  const getDecorationElements = () => {
    switch (personality.id) {
      case 'custode-verde':
        // Elementi floreali - SEMPLIFICATI
        return (
          <>
            {/* Elemento distintivo: UNA foglia in basso a destra */}
            <motion.div
              className="absolute bottom-6 right-6 text-4xl opacity-30"
              animate={{ 
                rotate: [0, 15, -15, 0],
                x: [0, -3, 3, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              🍃
            </motion.div>
            
            {/* Un fiore in alto a sinistra */}
            <motion.div
              className="absolute top-6 left-6 text-4xl opacity-25"
              animate={{ rotate: [0, 15, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🌸
            </motion.div>
          </>
        );
      case 'architetto-futuro':
        // Elementi tech - SEMPLIFICATI
        return (
          <>
            {/* Elemento distintivo: UN cerchio tech in basso a destra */}
            <motion.div
              className="absolute bottom-6 right-6 w-8 h-8 rounded-full border-[3px]"
              style={{
                borderColor: personality.colors.accent,
                backgroundColor: 'transparent'
              }}
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.4, 1, 0.4],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
            
            {/* Griglia tech leggera */}
            <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
              <defs>
                <pattern id="tech-grid-light" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="50" height="50" fill="none" stroke={personality.colors.accent} strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#tech-grid-light)" />
            </svg>
          </>
        );
      case 'giardiniere-sensoriale':
        // Elementi terra - SEMPLIFICATI
        return (
          <>
            {/* Elemento distintivo: UNA spiga in basso a destra */}
            <motion.div
              className="absolute bottom-6 right-6 text-4xl opacity-35"
              animate={{ 
                rotate: [0, 12, -8, 0],
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              🌾
            </motion.div>
            
            {/* Un vaso di miele in basso a sinistra */}
            <motion.div
              className="absolute bottom-6 left-6 text-4xl opacity-30"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🍯
            </motion.div>
          </>
        );
      case 'navigatore-etico':
        // Elementi acqua - SEMPLIFICATI
        return (
          <>
            {/* Elemento distintivo: UNA goccia in basso a destra */}
            <motion.div
              className="absolute bottom-6 right-6 text-3xl opacity-40"
              animate={{ 
                y: [0, 15, 30],
                opacity: [0.4, 0.6, 0],
                scale: [1, 0.9, 0.7]
              }}
              transition={{ 
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeIn'
              }}
            >
              💧
            </motion.div>
            
            {/* Bussola in alto */}
            <motion.div
              className="absolute top-6 left-6 text-4xl opacity-30"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              🧭
            </motion.div>
            
            {/* Onda sottile */}
            <svg className="absolute bottom-10 left-0 right-0 h-20 w-full opacity-15 pointer-events-none">
              <motion.path
                d="M 0,50 Q 25,40 50,50 T 100,50"
                stroke={personality.colors.accent}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                animate={{
                  d: [
                    "M 0,50 Q 25,40 50,50 T 100,50",
                    "M 0,50 Q 25,60 50,50 T 100,50",
                    "M 0,50 Q 25,40 50,50 T 100,50"
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </svg>
          </>
        );
      case 'alchimista-tempo':
        // Elementi alchemici - SEMPLIFICATI
        return (
          <>
            {/* Elemento distintivo: UN pallino alchemico in basso a destra */}
            <motion.div
              className="absolute bottom-6 right-6 w-6 h-6 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${personality.colors.primary}, ${personality.colors.accent})`,
              }}
              animate={{ 
                scale: [1, 1.6, 1],
                opacity: [0.5, 1, 0.5],
                boxShadow: [
                  `0 0 0px ${personality.colors.glow}`,
                  `0 0 20px ${personality.colors.glow}`,
                  `0 0 0px ${personality.colors.glow}`
                ]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            
            {/* Clessidra in alto */}
            <motion.div
              className="absolute top-6 right-6 text-4xl opacity-25"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ⏳
            </motion.div>
            
            {/* Provetta in basso a sinistra */}
            <motion.div
              className="absolute bottom-6 left-6 text-3xl opacity-25"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🧪
            </motion.div>
          </>
        );
      case 'cacao-dormiente':
        // Elementi riposo - SEMPLIFICATI
        return (
          <>
            {/* Elemento distintivo: UNA Z in basso a destra che sale */}
            <motion.div
              className="absolute bottom-6 right-6 text-4xl opacity-25"
              animate={{
                y: [0, -40, -80],
                x: [0, 8, 15],
                opacity: [0.25, 0.5, 0],
                scale: [0.8, 1.1, 1.4],
                rotate: [0, 12, 25]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeOut'
              }}
            >
              💤
            </motion.div>
            
            {/* Luna in alto */}
            <motion.div
              className="absolute top-6 left-6 text-5xl opacity-20"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              🌙
            </motion.div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.15,
        type: 'spring',
        stiffness: 80
      }}
      layout
    >
      <motion.div
        whileHover={{ 
          y: -12,
          scale: 1.03,
          rotate: [0, -1, 1, 0]
        }}
        whileTap={{ scale: 0.97 }}
        onClick={() => onClick(experience)}
        className="cursor-pointer group h-full"
      >
        {/* Card with handdrawn feel - personalized border and shape */}
        <div className={`relative overflow-hidden ${getShapeClass()} transition-all duration-500 h-full ${
          experience.collected
            ? 'glass-strong glow-green shadow-2xl'
            : 'glass shadow-lg hover:shadow-2xl hover:glow-pink'
        } border-[3px]`}
        style={{
          borderColor: experience.collected 
            ? `${personality.colors.primary}60` 
            : 'rgba(255, 255, 255, 0.5)'
        }}
        >
          
          {/* Decorazioni specifiche per personalità */}
          {getDecorationElements()}
          
          {/* Top accent wave - personalized gradient */}
          <svg className="absolute top-0 left-0 right-0 h-3 w-full" preserveAspectRatio="none">
            <motion.path
              d="M0,2 Q25,0 50,2 T100,2 L100,3 L0,3 Z"
              fill={`url(#gradient-${experience.id})`}
              animate={{
                d: [
                  'M0,2 Q25,0 50,2 T100,2 L100,3 L0,3 Z',
                  'M0,2 Q25,4 50,2 T100,2 L100,3 L0,3 Z',
                  'M0,2 Q25,0 50,2 T100,2 L100,3 L0,3 Z'
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <defs>
              <linearGradient id={`gradient-${experience.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={personality.colors.primary} />
                <stop offset="50%" stopColor={personality.colors.accent} />
                <stop offset="100%" stopColor={personality.colors.primary} />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Floating sparkles - personalized colors - TRE PALLINI IN ALTO A DESTRA */}
          <div className="absolute top-6 right-6 flex flex-col gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${personality.colors.accent}, ${personality.colors.glow})`
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                  x: [0, 3, 0]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </div>
          
          <div className="p-8 md:p-10 relative">
            {/* Multi-layer glow */}
            <div className={`absolute top-10 left-10 w-48 h-48 bg-gradient-to-br ${experience.color} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-all duration-700`} />
            
            {/* Illustrated Icon */}
            <motion.div
              className="relative mb-8 flex justify-center"
              animate={experience.collected ? {
                scale: [1, 1.05, 1],
              } : {}}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="relative w-28 h-28 md:w-32 md:h-32">
                <IllustratedSense 
                  type={getSenseType(experience.icon)}
                  className="w-full h-full"
                  collected={experience.collected}
                />
              </div>
            </motion.div>

            {/* Content */}
            <div className="space-y-4 relative text-center">
              <h3 className={`text-2xl md:text-3xl ${experience.collected ? 'text-[#4A7C59]' : 'text-[#A8E6CF]'} transition-colors`}>
                {experience.name}
              </h3>
              
              <p className={`text-base md:text-lg ${experience.collected ? 'text-[#4A7C59]/90' : 'text-[#A8E6CF]/80'}`}>
                {experience.description}
              </p>

              {/* Status bubble - personalized */}
              <div className="pt-4 flex justify-center">
                {experience.collected ? (
                  <div 
                    className="flex items-center gap-2 px-4 py-2 rounded-full border-2"
                    style={{
                      backgroundColor: `${personality.colors.primary}20`,
                      borderColor: `${personality.colors.primary}40`
                    }}
                  >
                    <motion.div 
                      className="w-3 h-3 rounded-full"
                      style={{
                        background: `linear-gradient(to right, ${personality.colors.primary}, ${personality.colors.accent})`
                      }}
                      animate={{
                        scale: [1, 1.4, 1],
                        boxShadow: [
                          '0 0 0px rgba(168, 230, 207, 0)', 
                          `0 0 15px ${personality.colors.primary}80`, 
                          '0 0 0px rgba(168, 230, 207, 0)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-sm text-[#4A7C59]">Vissuta</span>
                  </div>
                ) : (
                  <motion.div 
                    className="flex items-center gap-2 px-4 py-2 rounded-full border-2"
                    style={{
                      backgroundColor: `${personality.colors.accent}15`,
                      borderColor: `${personality.colors.accent}30`
                    }}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.div 
                      className="w-3 h-3 rounded-full"
                      style={{
                        background: `linear-gradient(to right, ${personality.colors.accent}, ${personality.colors.glow})`
                      }}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-sm" style={{ color: personality.colors.accent }}>Esplora</span>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Collected sparkles */}
          {experience.collected && (
            <>
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${20 + i * 20}%`,
                    left: i % 2 === 0 ? '10%' : '90%'
                  }}
                  animate={{
                    scale: [0, 1.2, 0],
                    rotate: [0, 180, 360],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.7,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <span className="text-2xl">✨</span>
                </motion.div>
              ))}
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// Map Dialog Component
function MapDialog({ 
  open, 
  onOpenChange, 
  experiences,
  getSenseType,
  personality
}: { 
  open: boolean;
  onOpenChange: (open: boolean) => void;
  experiences: SensoryExperience[];
  getSenseType: (icon: string) => 'ear' | 'hand' | 'wind' | 'eye' | 'sparkles';
  personality: Personality;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="sm:max-w-2xl glass-strong rounded-[2.5rem] overflow-hidden border-4"
        style={{ borderColor: `${personality.colors.primary}30` }}
      >
        <DialogHeader>
          <DialogTitle className="sr-only">Mappa del Percorso Sensoriale</DialogTitle>
          <DialogDescription className="sr-only">
            Visualizza il percorso completo delle 5 esperienze sensoriali
          </DialogDescription>
        </DialogHeader>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6"
        >
          <div className="text-center mb-8">
            <FloatingBubble size="lg" className="mx-auto mb-4">
              <Map className="w-10 h-10" style={{ color: personality.colors.primary }} />
            </FloatingBubble>
            
            <h3 className="text-3xl text-[#4A7C59] mb-2">
              La Tua Mappa
            </h3>
            <p style={{ color: personality.colors.primary }}>
              {personality.emoji} Segui il flusso sensoriale
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 glass rounded-3xl border-2 border-[#A8E6CF]/20 hover:border-[#FFB8D1]/40 transition-colors"
              >
                <div className="flex-shrink-0">
                  <FloatingBubble size="md" delay={index * 0.2}>
                    <span className="text-xl">{index + 1}</span>
                  </FloatingBubble>
                </div>
                
                <div className="w-12 h-12">
                  <IllustratedSense 
                    type={getSenseType(exp.icon)}
                    collected={exp.collected}
                    className="w-full h-full"
                  />
                </div>
                
                <div className="flex-1">
                  <h4 className="text-[#4A7C59]">{exp.name}</h4>
                  <p className="text-sm text-[#A8E6CF]">{exp.description}</p>
                </div>
                
                {exp.collected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#A8E6CF] to-[#FFB8D1] flex items-center justify-center"
                  >
                    <span className="text-white text-lg">✓</span>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <Button
            onClick={() => onOpenChange(false)}
            className="w-full text-white hover:opacity-90 py-6 text-lg rounded-3xl shadow-xl border-0 font-semibold"
            style={{
              background: `linear-gradient(to right, ${personality.colors.primary}, ${personality.colors.accent})`
            }}
          >
            Chiudi Mappa
          </Button>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}

// Experience Dialog Component  
function ExperienceDialog({
  open,
  onOpenChange,
  experience,
  onComplete,
  getSenseType,
  personality
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  experience: SensoryExperience | null;
  onComplete: () => void;
  getSenseType: (icon: string) => 'ear' | 'hand' | 'wind' | 'eye' | 'sparkles';
  personality: Personality;
}) {
  if (!experience) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="sm:max-w-lg glass-strong rounded-[3rem] overflow-hidden border-4"
        style={{ borderColor: `${personality.colors.primary}30` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <DialogHeader>
            <DialogTitle className="sr-only">
              Esperienza Sensoriale: {experience.name}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {experience.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="p-8 md:p-10">
            {/* Illustrated icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.6 }}
              className="mb-8 flex justify-center"
            >
              <div className="w-40 h-40">
                <IllustratedSense 
                  type={getSenseType(experience.icon)}
                  collected={experience.collected}
                  className="w-full h-full"
                />
              </div>
            </motion.div>

            {/* Content */}
            <div className="text-center space-y-4 mb-8">
              <h3 className="text-4xl text-[#4A7C59]">
                {experience.name}
              </h3>
              <p className="text-xl text-[#A8E6CF]">
                {experience.description}
              </p>
            </div>

            {!experience.collected ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-3xl p-8 mb-6 border-2"
                style={{ borderColor: `${personality.colors.accent}30` }}
              >
                <p className="text-center text-[#4A7C59] mb-6">
                  Vivi l'esperienza allo stand fisico,<br/>
                  poi scannerizza il QR per catturare il momento ✨
                </p>
                
                <motion.div className="flex justify-center mb-6">
                  <FloatingBubble size="lg">
                    <Sparkles className="w-12 h-12" style={{ color: personality.colors.accent }} />
                  </FloatingBubble>
                </motion.div>

                <Button
                  onClick={onComplete}
                  className="w-full text-white hover:opacity-90 py-6 text-lg rounded-3xl shadow-xl border-0 font-semibold"
                  style={{
                    background: `linear-gradient(135deg, ${personality.colors.primary}, ${personality.colors.accent}, ${personality.colors.glow})`
                  }}
                >
                  Completa l'Esperienza
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-3xl p-6 border-2 text-center"
                style={{ borderColor: `${personality.colors.primary}40` }}
              >
                <p className="text-[#4A7C59] text-lg">
                  ✨ Esperienza vissuta con successo! ✨
                </p>
              </motion.div>
            )}

            <Button
              variant="ghost"
              onClick={() => onOpenChange(false)}
              className="w-full mt-4 hover:bg-[#A8E6CF]/10 rounded-3xl"
              style={{ color: personality.colors.primary }}
            >
              Torna al percorso
            </Button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}