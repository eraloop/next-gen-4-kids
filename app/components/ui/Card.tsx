'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noBorder?: boolean;
}

export const Card = ({
  children,
  className,
  noBorder = false,
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'bg-white p-8 md:p-12 overflow-hidden relative flex flex-col h-full',
        !noBorder && 'border border-black/5',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
