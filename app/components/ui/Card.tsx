// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { cn } from '@/lib/utils';

// interface CardProps {
//   children: React.ReactNode;
//   className?: string;
//   noBorder?: boolean;
// }

// export const Card = ({
//   children,
//   className,
//   noBorder = false,
// }: CardProps) => {
//   const isHighlighted = className?.includes('bg-highlight') || 
//                         className?.includes('bg-sky') || 
//                         className?.includes('bg-leaf') || 
//                         className?.includes('bg-sun') || 
//                         className?.includes('bg-black');

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 15 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
//       whileHover={{ y: -5 }}
//       className={cn(
//         'bg-white p-8 md:p-12 overflow-hidden relative flex flex-col h-full rounded-2xl md:rounded-[2rem] group',
//         'transition-all duration-700 ease-in-out border',
//         (!noBorder && !isHighlighted) ? 'border-black/5 hover:border-transparent' : 'border-transparent',
//         'shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)]',
//         className
//       )}
//     >
//       {/* Subtle organic shine overlay */}
//       <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 pointer-events-none" />
//       <div className="relative z-10 flex flex-col h-full">
//         {children}
//       </div>
//     </motion.div>
//   );
// };



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
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ y: -5 }}
      className={cn(
        'p-8 md:p-12 overflow-hidden relative flex flex-col h-full rounded-2xl md:rounded-[2rem] group',
        'transition-all duration-700 ease-in-out',
        'shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)]',
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </motion.div>
  );
};