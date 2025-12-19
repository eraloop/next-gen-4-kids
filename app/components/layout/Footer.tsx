'use client';

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="py-24 px-6 md:px-12 border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
          <div className="col-span-1 md:col-span-1 space-y-8">
            <h4 className="text-2xl font-black tracking-tighter uppercase">
              NextGen<span className="text-black">Kids</span>
            </h4>
            <p className="text-sm font-medium leading-relaxed text-neutral-400 max-w-xs">
              Inspiring, educating, and preparing the next generation to confidently explore the digital and scientific world.
            </p>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-300">Explore</h5>
            <ul className="space-y-4 text-xs font-black uppercase tracking-widest text-black">
              <li><Link href="/programs" className="hover:opacity-50 transition-opacity">Programs</Link></li>
              <li><Link href="/resources" className="hover:opacity-50 transition-opacity">Resources</Link></li>
              <li><Link href="/educators" className="hover:opacity-50 transition-opacity">Educators</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-300">Archive</h5>
            <ul className="space-y-4 text-xs font-black uppercase tracking-widest text-black">
              <li><Link href="/about" className="hover:opacity-50 transition-opacity">Story</Link></li>
              <li><Link href="/impact" className="hover:opacity-50 transition-opacity">Impact</Link></li>
              <li><Link href="/blog" className="hover:opacity-50 transition-opacity">Insights</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-300">Connect</h5>
            <ul className="space-y-4 text-xs font-black uppercase tracking-widest text-black">
              <li><Link href="/contact" className="hover:opacity-50 transition-opacity">Contact</Link></li>
              <li><Link href="/partners" className="hover:opacity-50 transition-opacity">Partners</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-300">
           <p>© 2024 NextGen Kids project. All rights reserved.</p>
           <div className="flex gap-12">
             <Link href="/privacy" className="hover:text-black">Privacy</Link>
             <Link href="/terms" className="hover:text-black">Terms</Link>
           </div>
        </div>
      </div>
    </footer>
  );
};
