'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedSection = ({ children, className }: AnimatedSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn('section-padding', className)}
    >
      {children}
    </motion.section>
  );
};
