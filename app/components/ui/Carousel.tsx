'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

interface CarouselProps {
  slides: Slide[];
}

export const Carousel = ({ slides }: CarouselProps) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-neutral-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Main Image - Using Placeholder for now as requested */}
          <div className="absolute inset-0 bg-neutral-200">
             <div className="w-full h-full flex items-center justify-center text-neutral-400 font-bold uppercase tracking-widest text-sm">
                NextGen Editorial Image Placeholder: {slides[current].image}
             </div>
             {/* Gradient overlay for text readability */}
             <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="max-w-4xl space-y-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xs font-black uppercase tracking-[0.4em] text-white/80"
              >
                {slides[current].subtitle}
              </motion.div>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-5xl md:text-8xl font-black text-white leading-tight uppercase tracking-tighter"
              >
                {slides[current].title}
              </motion.h2>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-12 right-12 flex gap-4 z-20">
        <button onClick={prev} className="p-4 bg-white/10 hover:bg-white/20 transition-colors text-white border border-white/20">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={next} className="p-4 bg-white/10 hover:bg-white/20 transition-colors text-white border border-white/20">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-12 flex gap-3 z-20">
        {slides.map((_, i) => (
          <div 
            key={i} 
            className={cn(
              "h-1 transition-all duration-500", 
              i === current ? "w-12 bg-white" : "w-6 bg-white/30"
            )} 
          />
        ))}
      </div>
    </div>
  );
};
