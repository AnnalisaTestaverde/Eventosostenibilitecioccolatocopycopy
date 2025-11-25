import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';
import { Personality } from '../types/personality';
import { useState } from 'react';

interface PersonalityRevealProps {
  personality: Personality;
  onContinue: () => void;
}

export function PersonalityReveal({ personality, onContinue }: PersonalityRevealProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-br from-[#FFF9F3] via-[#FFFFFF] to-[#FFF9F3]"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl"
          style={{ background: `${personality.colors.primary}40` }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ background: `${personality.colors.accent}40` }}
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating symbols */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute text-6xl opacity-10"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{
              duration: 10 + i * 2,
              delay: i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            {personality.illustration}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative max-w-2xl w-full">
        <AnimatePresence mode="wait">
          {!showDetails ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center"
            >
              {/* Main illustration */}
              <motion.div
                className="mb-8"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <div className="relative inline-block">
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-3xl"
                    style={{ background: `${personality.colors.glow}60` }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  <div className="relative text-9xl md:text-[12rem]">
                    {personality.emoji}
                  </div>
                </div>
              </motion.div>

              {/* Title reveal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-6"
              >
                <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-3" style={{ color: personality.colors.secondary }}>
                  Sei
                </p>
                <h1 className="text-4xl md:text-6xl mb-6" style={{ color: personality.colors.primary }}>
                  {personality.title}
                </h1>
                
                {/* Decorative line */}
                <motion.div
                  className="w-32 h-1 mx-auto rounded-full"
                  style={{ background: `linear-gradient(to right, ${personality.colors.primary}, ${personality.colors.accent})` }}
                  initial={{ width: 0 }}
                  animate={{ width: 128 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                />
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-[#4A7C59] leading-relaxed mb-8 max-w-xl mx-auto"
              >
                {personality.description}
              </motion.p>

              {/* Continue button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Button
                  onClick={() => setShowDetails(true)}
                  className="text-white hover:opacity-90 py-6 px-10 text-lg rounded-full shadow-2xl border-0 font-semibold"
                  style={{
                    background: `linear-gradient(135deg, ${personality.colors.primary}, ${personality.colors.accent})`
                  }}
                >
                  Scopri di più
                  <Sparkles className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="details"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-strong rounded-3xl p-6 md:p-8 border-3 shadow-2xl max-h-[90vh] flex flex-col"
              style={{ borderColor: `${personality.colors.primary}60` }}
            >
              {/* Header */}
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{personality.illustration}</div>
                <h2 className="text-2xl md:text-3xl mb-2" style={{ color: personality.colors.primary }}>
                  {personality.title}
                </h2>
                <div className="w-20 h-0.5 mx-auto rounded-full" style={{ background: personality.colors.accent }} />
              </div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4 p-4 rounded-2xl relative overflow-hidden"
                style={{ background: `${personality.colors.primary}15` }}
              >
                <div className="absolute top-0 left-2 text-4xl opacity-20" style={{ color: personality.colors.accent }}>
                  "
                </div>
                <p className="text-sm md:text-base text-[#4A7C59] italic text-center relative z-10 pt-2 px-2">
                  {personality.quote}
                </p>
                <div className="absolute bottom-0 right-2 text-4xl opacity-20" style={{ color: personality.colors.accent }}>
                  "
                </div>
              </motion.div>

              {/* Characteristics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-4 flex-1"
              >
                <h3 className="text-base md:text-lg text-center mb-3 text-[#4A7C59]">
                  Le tue qualità
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {personality.characteristics.map((char, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="p-2 rounded-xl border-2 text-center"
                      style={{
                        borderColor: `${personality.colors.primary}40`,
                        background: `${personality.colors.primary}10`
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 2,
                          delay: index * 0.3,
                          repeat: Infinity
                        }}
                        className="mb-1 text-xl"
                      >
                        {personality.illustration}
                      </motion.div>
                      <p className="text-xs md:text-sm" style={{ color: personality.colors.primary }}>
                        {char}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Call to action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-center"
              >
                <p className="text-xs md:text-sm text-[#4A7C59]/80 mb-3">
                  Ora che conosci la tua essenza, è tempo di esplorare il percorso sensoriale ✨
                </p>
                
                <Button
                  onClick={onContinue}
                  className="w-full text-white hover:opacity-90 py-4 text-base md:text-lg rounded-full shadow-2xl border-0 font-semibold"
                  style={{
                    background: `linear-gradient(135deg, ${personality.colors.primary}, ${personality.colors.accent}, ${personality.colors.glow})`
                  }}
                >
                  Inizia il Viaggio Sensoriale
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}