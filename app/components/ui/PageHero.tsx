import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image?: string;
  chapter?: string;
  className?: string;
  accentColor?: 'highlight' | 'sky' | 'leaf' | 'sun';
}

export const PageHero = ({ title, subtitle, image, chapter, className, accentColor }: PageHeroProps) => {
  const bgColors = {
    highlight: 'bg-highlight-soft',
    sky: 'bg-sky-soft',
    leaf: 'bg-leaf-soft',
    sun: 'bg-sun-soft',
  };

  return (
    <section className={cn(
      "relative pt-48 pb-24 border-b border-black/5 transition-colors duration-700",
      accentColor ? bgColors[accentColor] : "bg-white",
      className
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-end">
          <div className="space-y-8 md:space-y-12">
            {chapter && (
              <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-black/40">
                {chapter}
              </div>
            )}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl font-semibold leading-[0.95] tracking-tighter uppercase break-words"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>
          <div className="space-y-6 md:space-y-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-2xl font-light leading-relaxed text-muted-foreground text-balance"
            >
              {subtitle}
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Media Placeholder */}
      <div className="mt-16 md:mt-24 h-[30vh] md:h-[40vh] w-full bg-white/60 backdrop-blur-sm border-y border-black/5 overflow-hidden flex items-center justify-center">
        <div className="px-6 text-center text-[10px] font-semibold uppercase tracking-[0.5em] text-black/20">
          Editorial Hero Media Placeholder: {image || 'DEFAULT_PAGE_IMAGE'}
        </div>
      </div>
    </section>
  );
};
