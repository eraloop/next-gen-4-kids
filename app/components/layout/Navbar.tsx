'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Story' },
  { href: '/programs', label: 'Academy' },
  { href: '/resources', label: 'Library' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if the Navbar should be transparent or themed
  const isHomePage = pathname === '/';
  const navBg = scrolled || isOpen ? 'bg-white border-b border-black/5 py-4' : 'bg-transparent py-8';
  const textColor = scrolled || isOpen ? 'text-black' : (isHomePage ? 'text-black' : 'text-black'); 

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      navBg
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between lg:grid lg:grid-cols-3">
        {/* Left: Logo */}
        <div className="flex justify-start">
          <Link href="/" className="group flex items-center gap-2">
            <span className={cn(
              "text-2xl font-semibold tracking-tighter uppercase transition-colors group-hover:text-highlight",
              textColor
            )}>
              NextGen<span className="group-hover:text-highlight transition-colors">Kids</span>
            </span>
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <div className="hidden lg:flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "text-[10px] font-semibold uppercase tracking-[0.2em] transition-all hover:text-highlight hover:opacity-100",
                pathname === link.href ? "opacity-100 text-highlight" : "opacity-40",
                textColor
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: CTA */}
        <div className="hidden lg:flex justify-end items-center gap-6">
          <Button variant="primary" size="sm" className="bg-black text-white hover:bg-highlight font-semibold">Discovery Portal</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn("lg:hidden p-2 transition-colors hover:text-highlight", textColor)}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-black/5 overflow-hidden"
          >
            <div className="px-6 py-12 flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-4xl font-semibold uppercase tracking-tighter transition-colors hover:text-highlight",
                    pathname === link.href ? "text-highlight" : "text-black"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="primary" size="lg" className="w-full bg-black hover:bg-highlight font-semibold">Discovery Portal</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
