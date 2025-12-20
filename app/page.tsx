'use client';

import { Carousel } from '@/components/ui/Carousel';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ArrowRight, Globe2, BookOpen, ShieldCheck, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const heroSlides = [
    {
      image: "/assets/images/istockphoto-2152266807-2048x2048.webp",
      title: "Shaping the Scientific Hub.",
      subtitle: "The Future of Digital Literacy"
    },
    {
      image: "/assets/images/photo-1560253023-3ec5d502959f.jpeg",
      title: "Inquiry Led Discovery.",
      subtitle: "Cybersecurity for Every Classroom"
    },
    {
      image: "/assets/images/photo-1576633587382-13ddf37b1fc1.avif",
      title: "Building Digital Sanctuary.",
      subtitle: "Safety First, Education Always"
    }
  ];

  const sitePillars = [
    {
      title: "Our Story",
      desc: "Moving from baseline statistics to human-centered impact in education.",
      href: "/about",
      label: "Chronicle",
      accent: "text-highlight",
      hoverBg: "hover:bg-highlight",
      highlight: false
    },
    {
      title: "The Academy",
      desc: "Structured curriculum designed for the scientific minds of tomorrow.",
      href: "/programs",
      label: "Pedagogy",
      accent: "text-sky",
      hoverBg: "hover:bg-sky",
      highlight: true
    },
    {
      title: "Digital Library",
      desc: "A repository of blueprints, guides, and interactive tools for discovery.",
      href: "/resources",
      label: "Archive",
      accent: "text-leaf",
      hoverBg: "hover:bg-leaf",
      highlight: false
    },
    {
      title: "Briefing Room",
      desc: "Latest insights and thought leadership from our research team.",
      href: "/blog",
      label: "Intelligence",
      accent: "text-sun",
      hoverBg: "hover:bg-sun",
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      <section className="relative">
        <Carousel slides={heroSlides} />
      </section>

      <AnimatedSection className="bg-neutral-50/30">
        <div className="editorial-container space-y-20 md:space-y-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-black/10 pb-20">
             <div className="max-w-2xl space-y-8 text-balance">
                <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-highlight">Strategic Pillars</div>
                <h2 className="text-4xl md:text-7xl font-semibold tracking-tighter uppercase leading-[0.95]">
                  Pathways to <span className="wavy-underline text-leaf">Discovery.</span>
                </h2>
             </div>
             <Button variant="link" className="text-highlight font-semibold p-0 h-auto tactile-pop">Explore Full Registry</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { 
                title: "Cybersecurity", 
                desc: "Building digital shields and responsible netizen skills for the modern landscape.", 
                label: "Safety First",
                color: "text-highlight",
                hoverBg: "hover:bg-highlight",
                highlight: true,
                bgColor: "bg-highlight"
              },
              { 
                title: "STEM Literacy", 
                desc: "Hands-on explorations in science, technology, and engineering for curious minds.", 
                label: "Inquiry Led",
                color: "text-sky",
                hoverBg: "hover:bg-sky",
                highlight: false,
                bgColor: "bg-white"
              },
              { 
                title: "Digital Leadership", 
                desc: "Preparing adolescents to lead with ethics and innovation in the virtual world.", 
                label: "Ethical Future",
                color: "text-leaf",
                hoverBg: "hover:bg-leaf",
                highlight: false,
                bgColor: "bg-white"
              }
          ].map((item, i) => (
            <Card 
              key={i} 
              className={cn(
                "group transition-all duration-700 justify-between h-full min-h-[450px]",
                item.highlight 
                  ? cn(item.bgColor, "text-white hover:bg-black border-none") 
                  : cn("bg-white hover:text-white border border-black/5", item.hoverBg)
              )}
            >
              <div className="space-y-12">
                <div className={cn(
                  "text-[10px] font-semibold uppercase tracking-widest transition-colors duration-500", 
                  item.highlight 
                    ? "text-white/80 group-hover:text-white" 
                    : cn(item.color, "group-hover:text-white")
                )}>
                  {item.label}
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-semibold tracking-tight uppercase leading-[1.1] group-hover:text-white transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className={cn(
                    "text-base md:text-lg font-light leading-relaxed transition-all duration-500 group-hover:text-white/90", 
                    item.highlight ? "text-white/90" : "text-muted-foreground"
                  )}>
                    {item.desc}
                  </p>
                </div>
              </div>
              
              <div className={cn(
                "pt-10 flex items-center justify-between text-[10px] font-semibold uppercase tracking-widest border-t transition-colors duration-500", 
                item.highlight 
                  ? "border-white/10 text-white" 
                  : "border-black/5 group-hover:border-white/20 group-hover:text-white"
              )}>
                <span className="group-hover:text-white">Access Module</span>
                <svg 
                  className={cn(
                    "w-5 h-5 transition-transform duration-500 group-hover:translate-x-2 group-hover:text-white", 
                    item.highlight ? "text-white" : item.color
                  )} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Card>
          ))}
        </div>

        </div>
      </AnimatedSection>

      {/* 3. NEW SECTION: Technical Excellence */}
      <AnimatedSection className="bg-black text-white py-32 md:py-48 overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 blur-xl">
           <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="150" stroke="white" strokeWidth="2" strokeDasharray="20 20" />
           </svg>
        </div>

        <div className="editorial-container grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
           <div className="space-y-12">
              <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-sun">Operational Excellence</div>
              <h2 className="text-5xl md:text-8xl font-semibold leading-[0.9] tracking-tighter uppercase">Technically <br /><span className="text-sun font-playful lowercase tracking-normal italic wavy-underline">superior.</span></h2>
              <p className="text-xl md:text-2xl font-light opacity-60 leading-relaxed text-balance">
                Our infrastructure is built on the same principles we teach: <span className="wavy-underline text-white/80">security</span>, efficiency, and clarity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                 <div className="space-y-4">
                    <Zap className="w-8 h-8 text-sun" />
                    <h4 className="text-xl font-semibold uppercase tracking-tighter">Instant Latency</h4>
                    <p className="text-sm opacity-40 leading-relaxed">Sub-50ms response times for all institutional portals globally.</p>
                 </div>
                 <div className="space-y-4">
                    <ShieldCheck className="w-8 h-8 text-sun" />
                    <h4 className="text-xl font-semibold uppercase tracking-tighter">Vault Encryption</h4>
                    <p className="text-sm opacity-40 leading-relaxed">AES-256 standard across all student and researcher data pipelines.</p>
                 </div>
              </div>
           </div>
           <div className="relative aspect-video lg:aspect-square bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden rounded-[2rem]">
              <motion.div 
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.15 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
                style={{ backgroundImage: `url('/assets/images/istockphoto-2152266807-2048x2048.webp')` }}
              />
              <div className="text-[30vw] font-semibold opacity-5 leading-none select-none text-sun relative z-10">V4.0</div>
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 z-20">
                 <div className="text-[10px] font-semibold uppercase tracking-[0.8em] text-sun">Protocol Active</div>
                 <Globe2 className="w-12 h-12 text-white animate-pulse" />
              </div>
           </div>
        </div>
      </AnimatedSection>

      {/* 4. INTRO: The Narrative Hub */}
      <AnimatedSection className="bg-white">
        <div className="editorial-container grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 md:gap-20 items-end">
           <div className="space-y-8 md:space-y-12">
              <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-highlight text-balance">
                The Philosophy <span className="font-playful normal-case text-2xl tracking-normal ml-4">Defined</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-semibold leading-[0.9] tracking-tighter uppercase text-balance">
                Creating <span className="text-highlight wavy-underline">Safe Spaces</span> for <span className="text-sky font-playful lowercase tracking-normal italic wavy-underline">bold minds.</span>
              </h2>
           </div>
           <div className="space-y-8">
              <p className="text-lg md:text-2xl font-light leading-relaxed text-muted-foreground text-balance">
                NextGen Kids isn&apos;t just a platform; it&apos;s a <span className="text-black font-semibold">thoughtfully designed</span> educational experience. We bridge the gap between playful engagement and academic rigor.
              </p>
              <div className="flex flex-wrap gap-8 md:gap-20 pt-8 border-t border-black/5">
                 <div className="space-y-2">
                    <div className="text-4xl font-semibold text-highlight">12k+</div>
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/40 text-balance">Impacted</div>
                 </div>
                 <div className="space-y-2">
                    <div className="text-4xl font-semibold text-sky">24+</div>
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/40 text-balance">Partners</div>
                 </div>
                 <div className="space-y-2">
                    <div className="text-4xl font-semibold text-leaf">150+</div>
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/40 text-balance">Schools</div>
                 </div>
              </div>
           </div>
        </div>
      </AnimatedSection>

      {/* 5. SITE ATLAS: The Visual Index */}
      <AnimatedSection className="bg-neutral-50/20">
        <div className="editorial-container space-y-16 md:space-y-24">
           <div className="max-w-3xl space-y-8 md:space-y-12">
              <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-highlight">Navigation Atlas</div>
              <h2 className="text-5xl md:text-8xl font-semibold leading-[0.9] tracking-tighter uppercase">
                Explore the <br /><span className="text-sky font-playful lowercase tracking-normal italic wavy-underline">ecosystem.</span>
              </h2>
              <p className="text-lg md:text-2xl font-light leading-relaxed text-muted-foreground">
                A unified gateway to every scientific and architectural <span className="wavy-underline text-black">pillar</span> of the NextGen Kids platform.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sitePillars.map((pillar, i) => (
                <Link key={i} href={pillar.href} className="group block h-full tactile-pop">
                  <div className={cn(
                    "h-full p-10 md:p-12 border transition-all duration-700 flex flex-col justify-between space-y-12 min-h-[300px] rounded-[1.5rem] md:rounded-[2rem]",
                    pillar.highlight ? cn(pillar.hoverBg.replace('hover:', ''), "text-white hover:bg-black") : cn("bg-white border-black/5 hover:text-white", pillar.hoverBg)
                  )}>
                    <div className="flex justify-between items-start">
                      <span className={cn(
                        "text-[10px] font-semibold uppercase tracking-widest transition-colors duration-500 leading-none", 
                        pillar.highlight ? "text-white/80 group-hover:text-white" : "text-black/40 group-hover:text-white"
                      )}>{pillar.label}</span>
                      <ArrowRight className={cn(
                        "w-5 h-5 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-white", 
                        pillar.highlight ? "opacity-100 translate-x-0 text-white" : "opacity-0 -translate-x-4"
                      )} />
                    </div>
                    <div className="space-y-6">
                      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase leading-[1.1] group-hover:text-white transition-colors duration-500">{pillar.title}</h3>
                      <p className={cn("text-sm font-light transition-colors duration-500 group-hover:text-white/80", pillar.highlight ? "text-white/80" : "text-muted-foreground")}>{pillar.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
           </div>
        </div>
      </AnimatedSection>

      {/* 6. CTA: High Contrast Engagement */}
      <AnimatedSection className="bg-black text-white">
         <div className="editorial-container text-center space-y-12 md:space-y-20">
            <h2 className="text-5xl md:text-9xl font-semibold leading-[0.85] tracking-tighter uppercase text-balance">
              Ready to Shape <br />
              <span className="text-sun font-playful lowercase tracking-normal italic wavy-underline">the future?</span>
            </h2>
            <p className="text-lg md:text-3xl max-w-2xl mx-auto font-light opacity-60 text-balance">
              Join educators and parents globally in nurturing the scientists of tomorrow.
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 pt-8">
               <Button variant="highlight" size="xl" className="w-full md:w-auto shadow-2xl shadow-highlight/10 transition-all hover:scale-[1.02]">Get Teaching Guide</Button>
               <Button variant="outline" size="xl" className="w-full md:w-auto border-white text-white hover:bg-highlight hover:border-highlight hover:text-white transition-all font-semibold">Request Workshop</Button>
            </div>
         </div>
      </AnimatedSection>
    </div>
  );
}
