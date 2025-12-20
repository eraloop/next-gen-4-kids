'use client';

import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Shield, Microscope, Compass, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function AboutPage() {
  const stats = [
    { label: "Schools Reached", value: "150+", id: "STA-01", color: "text-highlight" },
    { label: "Youth Impacted", value: "12k+", id: "STA-02", color: "text-sky" },
    { label: "Active Partners", value: "24", id: "STA-03", color: "text-leaf", highlight: true },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero: The Story Chapter */}
      <PageHero 
        chapter="Chapter One: Our Roots"
        title="Born in Africa, Made for <span class='text-highlight font-playful lowercase tracking-normal italic wavy-underline'>Global Impact.</span>"
        subtitle="What started as a response to the digital divide in African communities has evolved into a global movement to prepare the youth for a scientific world."
        image="/assets/images/premium_photo-1683138608820-3182ced664d5.jpeg"
        accentColor="highlight"
      />

      <AnimatedSection className="bg-white">
        <div className="editorial-container">
           <div className="max-w-4xl space-y-8 md:space-y-12">
              <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-highlight">The Philosophy</div>
              <p className="text-2xl md:text-4xl font-light leading-snug tracking-tight text-balance">
                We bridge the gap between <span className="text-highlight font-playful lowercase tracking-normal italic wavy-underline">playful engagement</span> and academic rigor, ensuring that every digital interaction is a step toward scientific mastery.
              </p>
           </div>
        </div>
      </AnimatedSection>

      {/* 1. Integrated Impact Section (Moved Up for Results First) */}
      <AnimatedSection className="bg-neutral-50/30">
        <div className="editorial-container space-y-16 md:space-y-24">
           <div className="max-w-3xl space-y-8">
              <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-highlight text-balance">The Benchmark</div>
              <h2 className="text-4xl md:text-7xl font-semibold tracking-tighter uppercase text-balance">Documenting the <br /><span className="text-leaf font-playful lowercase tracking-normal italic wavy-underline">Evolving Legacy.</span></h2>
              <p className="text-lg md:text-2xl font-light leading-relaxed text-muted-foreground text-balance">
                Our success is measured by the growing confidence and technical <span className="wavy-underline text-black">mastery</span> of the youth we serve across multiple continents.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {stats.map((s, i) => (
               <Card key={i} className={cn(
                  "p-12 md:p-16 space-y-12 transition-all duration-700 group flex flex-col justify-between h-full min-h-[300px]",
                  s.highlight 
                    ? "bg-leaf text-white hover:bg-black border-none" 
                    : "bg-white hover:bg-black hover:text-white border border-black/5"
                )}>
                  <div className={cn(
                    "text-[10px] font-semibold uppercase tracking-widest transition-colors duration-500", 
                    s.highlight ? "text-white/40 group-hover:text-white/40" : "text-black/40 group-hover:text-white/40"
                  )}>{s.id}</div>
                  <div className="space-y-4">
                    <div className={cn(
                      "text-5xl md:text-8xl font-semibold tracking-tighter transition-colors duration-500", 
                      s.highlight ? "text-white" : cn(s.color, "group-hover:text-white")
                    )}>{s.value}</div>
                    <div className={cn(
                      "text-[10px] font-semibold uppercase tracking-[0.3em] transition-colors duration-500", 
                      s.highlight ? "text-white/60 group-hover:text-white/60" : "opacity-40 group-hover:opacity-100 group-hover:text-white/60"
                    )}>{s.label}</div>
                  </div>
                </Card>
              ))}
           </div>
        </div>
      </AnimatedSection>

      {/* 2. Mission & Philosophy */}
      <AnimatedSection className="bg-white">
        <div className="editorial-container space-y-24 md:space-y-32">
           <div className="max-w-4xl space-y-12">
              <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-highlight">The Narrative</div>
              <h2 className="text-4xl md:text-7xl font-semibold tracking-tighter uppercase text-balance">
                A Philosophy of <br /><span className="opacity-30">Trust & </span><span className="text-sky font-playful lowercase tracking-normal italic wavy-underline">Curiosity.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                <p className="text-lg md:text-2xl font-light leading-relaxed text-muted-foreground text-balance">
                  We believe that technology is not a toy, but a <span className="wavy-underline text-black">tool for discovery</span>. Education should be as fluid and inspiring as a well-written story.
                </p>
                <p className="text-lg md:text-2xl font-light leading-relaxed text-muted-foreground text-balance">
                  At NextGen Kids, we balance the playful nature of learning with the professional oversight parents and educators expect from a modern institution.
                </p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                { 
                  title: "Mission", 
                  desc: "To inspire, educate, and prepare the next generation to confidently explore the digital and scientific world.", 
                  label: "I. Purpose",
                  icon: <Compass className="w-8 h-8 transition-all duration-500" />,
                  highlight: true,
                  bgColor: "bg-highlight",
                  hoverBg: "hover:bg-highlight"
                },
                { 
                  title: "Vision", 
                  desc: "A safe, intelligent, and inspiring digital environment where curiosity and responsibility grow together.", 
                  label: "II. Future",
                  icon: <Microscope className="w-8 h-8 transition-all duration-500" />,
                  highlight: false,
                  bgColor: "bg-neutral-50/50",
                  hoverBg: "hover:bg-sky"
                },
                { 
                  title: "Core Values", 
                  desc: "Safety first, scientific rigor, inclusive design, and African-centered global progress.", 
                  label: "III. Principles",
                  icon: <Shield className="w-8 h-8 transition-all duration-500" />,
                  highlight: false,
                  bgColor: "bg-neutral-50/50",
                  hoverBg: "hover:bg-leaf"
                }
              ].map((val, i) => (
               <Card key={i} className={cn(
                  "group transition-all duration-700 h-full min-h-[400px] justify-between",
                  val.highlight 
                    ? cn(val.bgColor, "text-white hover:bg-black border-none") 
                    : cn(val.bgColor, "hover:text-white border border-black/5", val.hoverBg)
                )}>
                  <div className="flex justify-between items-start">
                    <div className={cn(
                      "text-[10px] font-semibold uppercase tracking-widest transition-colors duration-500", 
                      val.highlight ? "text-white opacity-80 group-hover:text-white" : "opacity-40 group-hover:opacity-100 group-hover:text-white"
                    )}>{val.label}</div>
                    <div className={cn("transition-colors duration-500", val.highlight ? "text-white" : "text-black/40 group-hover:text-white")}>{val.icon}</div>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-semibold tracking-tight uppercase leading-[1.1] transition-colors duration-500 group-hover:text-white">{val.title}</h3>
                    <p className={cn("text-base md:text-lg font-light leading-relaxed transition-all duration-500 group-hover:text-white/90", val.highlight ? "text-white/90" : "text-muted-foreground")}>
                        {val.desc}
                    </p>
                  </div>
                </Card>
              ))}
           </div>
        </div>
      </AnimatedSection>

      {/* 3. NEW SECTION: Testimonial/Quote */}
      <AnimatedSection className="bg-neutral-900 text-white">
        <div className="editorial-container flex flex-col items-center text-center space-y-12">
           <Quote className="w-16 h-16 text-highlight opacity-40 shrink-0" />
           <p className="text-2xl md:text-5xl font-light leading-tight tracking-tight max-w-5xl text-balance">
             &quot;The transition from a passive user to an active, scientific mind is the greatest <span className="wavy-underline text-highlight">gift</span> we can give a child in the 21st century.&quot;
           </p>
           <div className="space-y-2">
              <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-highlight">Lead Researcher</div>
              <div className="font-semibold text-xl tracking-tighter">Dr. Sarah Mensah</div>
           </div>
        </div>
      </AnimatedSection>

      {/* 4. The Journey Forward */}
      <AnimatedSection className="bg-black text-white">
        <div className="editorial-container grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
           <div className="space-y-12 md:space-y-16">
              <h2 className="text-5xl md:text-7xl font-semibold leading-[0.85] tracking-tighter uppercase text-balance">Preparing for a <br /><span className="text-sun font-playful lowercase tracking-normal italic wavy-underline">Scientific Future.</span></h2>
              <p className="text-xl md:text-2xl font-light opacity-60 max-w-xl text-balance">
                 Our long-term commitment is to establish NextGen Kids as a global benchmark for digital safety and scientific literacy. 
              </p>
              <div className="grid grid-cols-1 gap-1">
                 {[
                   { label: "Community Schools", value: "Level 1", color: "text-highlight" },
                   { label: "Institutional Partners", value: "Level 2", color: "text-sky" },
                   { label: "Ministry Collaborations", value: "Level 3", color: "text-leaf" }
                 ].map((item, i) => (
                   <div key={i} className="flex justify-between items-center py-6 md:py-8 border-b border-white/10 group cursor-default">
                      <span className="font-semibold text-lg md:text-xl uppercase tracking-tighter opacity-40 group-hover:opacity-100 transition-opacity">{item.label}</span>
                      <span className={cn("font-semibold text-lg md:text-xl", item.color)}>{item.value}</span>
                   </div>
                 ))}
              </div>
              <Button variant="highlight" size="xl" className="w-full md:w-auto mt-8 shadow-xl shadow-highlight/10 tactile-pop">Invest in the Future</Button>
           </div>
           
           <div className="relative aspect-square bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
              <motion.div 
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
                style={{ backgroundImage: `url('/assets/images/photo-1560253023-3ec5d502959f.jpeg')` }}
              />
              <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-white/20 absolute top-8 left-8 md:top-12 md:left-12 z-20">Institutional Goal</div>
              <div className="text-[40vw] font-semibold opacity-5 leading-none select-none text-sun z-10">2030</div>
           </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
