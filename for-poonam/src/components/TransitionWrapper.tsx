import React from 'react';
import { motion } from 'framer-motion';

interface TransitionWrapperProps {
  children: React.ReactNode;
  reducedMotion?: boolean;
  className?: string;
}

export const TransitionWrapper: React.FC<TransitionWrapperProps> = ({
  children,
  reducedMotion = false,
  className = '',
}) => {
  if (reducedMotion) {
    return (
      <main className={`relative z-10 w-full min-h-[calc(100vh-4rem)] flex flex-col justify-center px-4 py-8 sm:py-12 ${className}`}>
        {children}
      </main>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`relative z-10 w-full min-h-[calc(100vh-4rem)] flex flex-col justify-center px-4 py-8 sm:py-12 ${className}`}
    >
      {children}
    </motion.main>
  );
};
