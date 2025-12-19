'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'outline' | 'ghost' | 'accent' | 'link' | 'highlight' | 'sky' | 'leaf' | 'sun';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: 'bg-black text-white hover:bg-neutral-800',
    accent: 'bg-blue-600 text-white hover:bg-blue-700',
    highlight: 'bg-highlight text-white hover:opacity-90',
    sky: 'bg-sky text-white hover:opacity-90',
    leaf: 'bg-leaf text-white hover:opacity-90',
    sun: 'bg-sun text-black hover:opacity-90',
    outline: 'bg-transparent border-2 border-black text-black hover:bg-black hover:text-white',
    ghost: 'bg-transparent text-black hover:bg-neutral-100',
    link: 'bg-transparent text-black underline underline-offset-8 hover:opacity-70 p-0 h-auto font-medium',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs font-bold uppercase tracking-widest',
    md: 'px-8 py-4 text-sm font-semibold uppercase tracking-widest',
    lg: 'px-12 py-5 text-base font-semibold uppercase tracking-widest',
    xl: 'px-16 py-6 text-xl font-semibold uppercase tracking-widest',
  };

  return (
    <motion.button
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'inline-flex items-center justify-center transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
