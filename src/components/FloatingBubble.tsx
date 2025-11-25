import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface FloatingBubbleProps {
  children: ReactNode;
  delay?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function FloatingBubble({ children, delay = 0, size = 'md', className = '' }: FloatingBubbleProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className} rounded-full bg-white/30 backdrop-blur-md border-2 border-[#FFB8D1]/60 shadow-lg flex items-center justify-center relative overflow-hidden`}
      animate={{
        y: [0, -12, 0],
        rotate: [0, 5, -5, 0],
        scale: [1, 1.05, 1]
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      {/* Inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFB8D1]/20 to-transparent rounded-full" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Shine effect */}
      <motion.div
        className="absolute top-2 left-2 w-3 h-3 bg-white rounded-full opacity-60"
        animate={{
          opacity: [0.6, 0.9, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      />
    </motion.div>
  );
}
