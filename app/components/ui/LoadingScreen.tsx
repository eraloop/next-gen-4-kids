'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to ensure the animation is seen on fast connections
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-6"
        >
          <div className="relative overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10px] font-semibold uppercase tracking-[0.5em] text-black/20"
            >
              Initializing Protocol
            </motion.div>
          </div>
          <div className="mt-8 space-y-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-4xl md:text-5xl font-semibold tracking-tighter uppercase"
            >
              NextGen<span className="text-highlight">Kids</span>
            </motion.h1>
            <div className="w-48 h-[1px] bg-black/5 mx-auto relative overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-highlight"
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-12 text-[8px] font-semibold uppercase tracking-widest opacity-20"
          >
            Digital Sanctuary Layer v1.0
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
