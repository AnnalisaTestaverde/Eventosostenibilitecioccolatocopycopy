import { motion } from 'motion/react';

interface ConnectingWaveProps {
  fromIndex: number;
  toIndex: number;
  active?: boolean;
}

export function ConnectingWave({ fromIndex, toIndex, active = false }: ConnectingWaveProps) {
  // Calculate positions based on grid layout
  // This is a simplified version - adjust based on your actual layout
  const getPosition = (index: number) => {
    const positions = [
      { x: 16.6, y: 30 }, // Udito (top row left)
      { x: 50, y: 30 },   // Tatto (top row center)
      { x: 83.3, y: 30 }, // Olfatto (top row right)
      { x: 33.3, y: 70 }, // Vista (bottom row left)
      { x: 66.6, y: 70 }  // Gusto (bottom row right)
    ];
    return positions[index] || { x: 50, y: 50 };
  };

  const from = getPosition(fromIndex);
  const to = getPosition(toIndex);
  
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;
  const controlOffset = 15;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <defs>
        <linearGradient id={`gradient-${fromIndex}-${toIndex}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A8E6CF" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#C9A0DC" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FFB8D1" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      
      <motion.path
        d={`M ${from.x},${from.y} Q ${midX},${midY - controlOffset} ${to.x},${to.y}`}
        stroke={`url(#gradient-${fromIndex}-${toIndex})`}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="5,5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: active ? 1 : 0.3,
          opacity: active ? 0.8 : 0.3,
          strokeDashoffset: [0, -10]
        }}
        transition={{
          pathLength: { duration: 1.5, ease: 'easeInOut' },
          opacity: { duration: 0.5 },
          strokeDashoffset: { duration: 2, repeat: Infinity, ease: 'linear' }
        }}
      />
      
      {/* Flow particles */}
      {active && (
        <motion.circle
          r="3"
          fill="#FFB8D1"
          opacity="0.8"
          initial={{ opacity: 0 }}
          animate={{
            offsetDistance: ['0%', '100%'],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            offsetPath: `path('M ${from.x},${from.y} Q ${midX},${midY - controlOffset} ${to.x},${to.y}')`
          }}
        />
      )}
    </svg>
  );
}
