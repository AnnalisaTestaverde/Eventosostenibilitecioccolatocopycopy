import { motion } from 'motion/react';

interface IllustratedSenseProps {
  type: 'ear' | 'hand' | 'wind' | 'eye' | 'sparkles';
  className?: string;
  collected?: boolean;
}

export function IllustratedSense({ type, className = '', collected = false }: IllustratedSenseProps) {
  const baseColor = collected ? '#A8E6CF' : '#A8E6CF80';
  const accentColor = '#FFB8D1';
  const glitchColor = '#C9A0DC';

  // Ear - Orecchio con onde sonore
  if (type === 'ear') {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Onde sonore */}
        <motion.path
          d="M20,30 Q25,28 30,30"
          stroke={glitchColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          animate={{
            d: ['M20,30 Q25,28 30,30', 'M20,30 Q25,32 30,30', 'M20,30 Q25,28 30,30'],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M15,40 Q20,37 25,40"
          stroke={glitchColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          animate={{
            d: ['M15,40 Q20,37 25,40', 'M15,40 Q20,43 25,40', 'M15,40 Q20,37 25,40'],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 2, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Orecchio organico */}
        <motion.path
          d="M45,25 C48,22 52,20 56,22 C62,25 65,32 64,40 C63,48 62,58 58,64 C54,70 48,72 42,68 C38,65 36,60 36,55 C36,50 38,45 42,42 C45,39 50,38 54,40 C56,41 58,43 58,46"
          stroke={baseColor}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        
        {/* Dettagli interni */}
        <motion.path
          d="M48,45 C50,43 52,42 54,44"
          stroke={accentColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Circuiti cyber */}
        <motion.circle cx="68" cy="35" r="2" fill={glitchColor} opacity="0.6"
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.line x1="66" y1="35" x2="62" y2="35" stroke={glitchColor} strokeWidth="1" opacity="0.4" />
      </svg>
    );
  }

  // Hand - Mano che tocca
  if (type === 'hand') {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Texture lines */}
        <motion.path
          d="M30,65 Q35,63 40,65"
          stroke={accentColor}
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.4"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Mano organica */}
        <motion.path
          d="M50,70 L50,45 M42,50 L42,40 C42,35 44,32 47,32 C49,32 50,34 50,36 M58,50 L58,38 C58,33 56,30 53,30 C51,30 50,32 50,34 M35,55 L35,52 C35,48 37,45 40,45 C42,45 43,47 43,49"
          stroke={baseColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        
        {/* Palmo */}
        <motion.path
          d="M35,58 C35,62 38,70 45,72 C52,74 58,70 58,65 L58,55"
          stroke={baseColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Onde tattili */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx="50"
            cy="75"
            r={8 + i * 6}
            stroke={glitchColor}
            strokeWidth="1"
            fill="none"
            opacity="0"
            animate={{
              r: [8 + i * 6, 12 + i * 6],
              opacity: [0.6, 0]
            }}
            transition={{
              duration: 2,
              delay: i * 0.4,
              repeat: Infinity,
              ease: 'easeOut'
            }}
          />
        ))}
      </svg>
    );
  }

  // Wind - Naso con profumi che fluttuano
  if (type === 'wind') {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Molecole di aroma */}
        {[
          { cx: 25, cy: 35, delay: 0 },
          { cx: 35, cy: 28, delay: 0.5 },
          { cx: 30, cy: 42, delay: 1 },
        ].map((mol, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={mol.cx}
              cy={mol.cy}
              r="3"
              fill={accentColor}
              opacity="0.6"
              animate={{
                y: [0, -15, -30],
                opacity: [0.6, 0.8, 0],
                scale: [1, 1.2, 0.8]
              }}
              transition={{
                duration: 3,
                delay: mol.delay,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </motion.g>
        ))}
        
        {/* Naso stilizzato */}
        <motion.path
          d="M50,30 C45,30 42,35 42,40 L42,55 C42,58 44,60 47,60 L53,60 C56,60 58,58 58,55 L58,40 C58,35 55,30 50,30 Z"
          stroke={baseColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        
        {/* Narici */}
        <motion.ellipse cx="45" cy="58" rx="3" ry="4" fill={baseColor} opacity="0.3" />
        <motion.ellipse cx="55" cy="58" rx="3" ry="4" fill={baseColor} opacity="0.3" />
        
        {/* Linee di flusso */}
        <motion.path
          d="M65,45 Q70,40 75,45"
          stroke={glitchColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          animate={{
            d: ['M65,45 Q70,40 75,45', 'M65,45 Q70,48 75,45'],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    );
  }

  // Eye - Occhio che osserva
  if (type === 'eye') {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Forma occhio organica */}
        <motion.path
          d="M25,50 Q35,35 50,35 Q65,35 75,50 Q65,65 50,65 Q35,65 25,50 Z"
          stroke={baseColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          animate={{
            d: [
              'M25,50 Q35,35 50,35 Q65,35 75,50 Q65,65 50,65 Q35,65 25,50 Z',
              'M25,50 Q35,38 50,38 Q65,38 75,50 Q65,62 50,62 Q35,62 25,50 Z',
              'M25,50 Q35,35 50,35 Q65,35 75,50 Q65,65 50,65 Q35,65 25,50 Z'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Iride con pattern */}
        <motion.circle
          cx="50"
          cy="50"
          r="12"
          stroke={baseColor}
          strokeWidth="2"
          fill="none"
        />
        
        {/* Pupilla */}
        <motion.circle
          cx="50"
          cy="50"
          r="6"
          fill={baseColor}
          animate={{
            r: [6, 5, 6]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Riflesso */}
        <motion.circle
          cx="48"
          cy="47"
          r="3"
          fill={accentColor}
          opacity="0.6"
          animate={{
            opacity: [0.6, 0.9, 0.6]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Linee di scansione digitale */}
        <motion.line
          x1="30"
          y1="50"
          x2="38"
          y2="50"
          stroke={glitchColor}
          strokeWidth="1"
          opacity="0"
          animate={{
            x1: [30, 70],
            x2: [38, 78],
            opacity: [0, 0.6, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Ciglia stilizzate */}
        {[0, 1, 2].map((i) => (
          <motion.line
            key={i}
            x1={28 + i * 8}
            y1="35"
            x2={26 + i * 8}
            y2="28"
            stroke={baseColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            animate={{
              y1: [35, 33, 35]
            }}
            transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
          />
        ))}
      </svg>
    );
  }

  // Sparkles - Lingua con papille gustative
  if (type === 'sparkles') {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Lingua organica */}
        <motion.path
          d="M50,70 C40,70 32,65 30,55 C28,45 30,35 35,30 C40,25 45,23 50,23 C55,23 60,25 65,30 C70,35 72,45 70,55 C68,65 60,70 50,70 Z"
          stroke={baseColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        
        {/* Papille gustative */}
        {[
          { cx: 45, cy: 40, delay: 0 },
          { cx: 55, cy: 38, delay: 0.3 },
          { cx: 50, cy: 50, delay: 0.6 },
          { cx: 42, cy: 55, delay: 0.9 },
          { cx: 58, cy: 52, delay: 1.2 }
        ].map((p, i) => (
          <motion.circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r="2.5"
            fill={accentColor}
            opacity="0.6"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
        
        {/* Particelle di sapore */}
        {[0, 1, 2, 3].map((i) => (
          <motion.path
            key={i}
            d={`M${25 + i * 15},${20 + i * 5} l-2,-2 l2,-2 l2,2 Z`}
            fill={glitchColor}
            opacity="0"
            animate={{
              y: [0, -20],
              opacity: [0, 0.8, 0],
              rotate: [0, 180]
            }}
            transition={{
              duration: 2.5,
              delay: i * 0.5,
              repeat: Infinity,
              ease: 'easeOut'
            }}
          />
        ))}
        
        {/* Onde di gusto */}
        <motion.path
          d="M30,65 Q50,60 70,65"
          stroke={glitchColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          animate={{
            d: ['M30,65 Q50,60 70,65', 'M30,65 Q50,68 70,65'],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    );
  }

  return null;
}
