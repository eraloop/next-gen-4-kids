'use client';

import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { ArrowRight, BookOpen, Users, School, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProgramsPage() {
  const programs = [
    {
      title: "Digital Sanctuary",
      chapter: "Chapter I",
      level: "Foundations",
      desc: "For young explorers aged 7-10. Building a scientific intuition for online safety through narrative-driven discovery.",
      features: ["Cyber Safety Basics", "Digital Etiquette", "Intro to STEM"],
      accentColor: "text-highlight",
      hoverBg: "hover:bg-highlight",
      highlight: false
    },
    {
      title: "The Innovator's Lab",
      chapter: "Chapter II",
      level: "Deep Exploration",
      desc: "For middle years aged 11-14. Hands-on STEM modules that transform passive consumers into active digital creators.",
      features: ["Code & Logic", "Scientific Method", "Hardware Intros"],
      accentColor: "text-sky",
      hoverBg: "hover:bg-sky",
      highlight: true,
      bgColor: "bg-sky"
    },
    {
      title: "NextGen Academy",
      chapter: "Chapter III",
      level: "Leadership",
      desc: "For advanced learners aged 15-18. Professional-grade cybersecurity training and ethical leadership frameworks.",
      features: ["Network Defense", "Ethical Hacking", "Career Readiness"],
      accentColor: "text-leaf",
      hoverBg: "hover:bg-leaf",
      highlight: false
    }
  ];

  const educatorGuides = [
    { title: "Teaching Digital Ethics", level: "Ages 7-18", code: "EDU-01", color: "text-highlight", hoverBg: "hover:bg-highlight" },
    { title: "STEM Integration Manual", level: "Professional", code: "EDU-02", color: "text-sky", highlight: false, bgColor: "bg-sky", hoverBg: "hover:bg-highlight" },
    { title: "Discovery Lab Setup", level: "Technical", code: "EDU-03", color: "text-leaf", hoverBg: "hover:bg-leaf" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero: The Academy Chapter */}
      <PageHero 
        chapter="Institutional Registry"
        title="The Academy: Structured for <span class='text-sky font-playful lowercase tracking-normal italic wavy-underline'>Mastery.</span>"
        subtitle="Our curriculum is a guided journey from digital responsibility to technical mastery, designed by educators for the scientists of tomorrow."
        image="/assets/images/photo-1576633587382-13ddf37b1fc1.avif"
        accentColor="sky"
      />

      {/* 1. Program Matrix */}
      <AnimatedSection className="bg-white">
        <div className="editorial-container space-y-24 md:space-y-32">
          <div className="max-w-4xl space-y-12">
            <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-highlight">Curriculum Matrix</div>
            <h2 className="text-4xl md:text-7xl font-semibold tracking-tighter uppercase text-balance">Pathways of <br /><span className="opacity-30">Discovery & </span><span className="text-highlight font-playful lowercase tracking-normal italic wavy-underline">Defense.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {programs.map((p, i) => (
              <Card key={i} className={cn(
  "group transition-all duration-700 flex flex-col justify-between min-h-[550px] md:min-h-[650px] h-full",
  p.highlight 
    ? cn(p.bgColor, "text-white hover:bg-black border-none") 
    : cn("bg-neutral-50/50 hover:text-white border border-black/5", p.hoverBg)
)}>
  <div className="space-y-12">
    <div className={cn(
      "flex justify-between items-center text-[10px] font-semibold uppercase tracking-[0.4em] transition-colors duration-500", 
      p.highlight ? "text-white opacity-100" : "opacity-40 group-hover:opacity-100 group-hover:text-white"
    )}>
      <span className="group-hover:text-white">{p.chapter}</span>
      <span className={cn("transition-colors duration-500", p.highlight ? "text-white" : cn(p.accentColor, "group-hover:text-white"))}>{p.level}</span>
    </div>
    <div className="space-y-6">
      <h3 className="text-3xl md:text-5xl font-semibold tracking-tighter uppercase leading-[1.1] group-hover:text-white transition-colors duration-500">{p.title}</h3>
      <p className={cn("text-base md:text-lg font-light leading-relaxed transition-all duration-500 group-hover:text-white/80", p.highlight ? "text-white/90" : "opacity-60")}>
        {p.desc}
      </p>
    </div>
    <ul className={cn("space-y-4 pt-8 border-t transition-colors duration-500", p.highlight ? "border-white/10" : "border-black/5 group-hover:border-white/10")}>
      {p.features.map((f, idx) => (
        <li key={idx} className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest transition-colors duration-500 text-inherit">
          <div className={cn("w-1.5 h-1.5 transition-colors duration-500", p.highlight ? "bg-white" : cn(p.accentColor.replace('text-', 'bg-'), "group-hover:bg-white"))} /> {f}
        </li>
      ))}
    </ul>
  </div>
  <Button variant="outline" className={cn(
    "w-full h-16 transition-all duration-500 font-semibold mt-12 tactile-pop", 
    p.highlight ? "border-white/20 text-white hover:bg-white hover:text-black" : "border-black/10 group-hover:border-white/20 group-hover:text-white hover:bg-white hover:text-black"
  )}>View Syllabus</Button>
</Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 2. Educator & Institutional Hub */}
      <AnimatedSection className="bg-neutral-50/30">
        <div className="editorial-container space-y-20 md:space-y-32">
           <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20 md:gap-32 items-start">
              <div className="space-y-12 lg:sticky lg:top-32">
                 <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-highlight">Institutional Support</div>
                 <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter uppercase leading-[0.9] text-balance">Empowering the <br /><span className="text-leaf font-playful lowercase tracking-normal italic wavy-underline">Mentors.</span></h2>
                 <p className="text-lg md:text-xl font-light text-muted-foreground leading-relaxed text-balance">
                   We provide schools and institutional partners with the <span className="wavy-underline text-black">pedagogical frameworks</span> and technical manuals needed to sustain a world-class STEM environment.
                 </p>
                 <div className="space-y-6 pt-12 border-t border-black/10">
                    <div className="flex items-center gap-6 group">
                       <div className="p-4 bg-white border border-black/5 rounded-none group-hover:bg-sky group-hover:border-sky transition-all shadow-sm">
                          <School className="w-6 h-6 group-hover:text-white transition-colors" />
                       </div>
                       <span className="text-xs font-semibold uppercase tracking-[0.2em] group-hover:text-sky transition-colors text-balance">Institutional Licensing</span>
                    </div>
                    <div className="flex items-center gap-6 group">
                       <div className="p-4 bg-white border border-black/5 rounded-none group-hover:bg-leaf group-hover:border-leaf transition-all shadow-sm">
                          <Users className="w-6 h-6 group-hover:text-white transition-colors" />
                       </div>
                       <span className="text-xs font-semibold uppercase tracking-[0.2em] group-hover:text-leaf transition-colors text-balance">Faculty Training</span>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                 {educatorGuides.map((guide, i) => (
                  <Card key={i} className={cn(
                      "group transition-all duration-700 flex flex-col justify-between space-y-12 min-h-[350px] h-full hover:text-white",
                      guide.highlight 
                        ? cn(guide.bgColor, "text-white hover:bg-black border-none") 
                        : cn("bg-white border border-black/5", guide.hoverBg)
                    )}>
                      <div className="space-y-8">
                        <div className={cn(
                          "flex justify-between items-center text-[10px] font-semibold uppercase tracking-widest transition-colors duration-500", 
                          guide.highlight ? "text-white opacity-40 group-hover:text-white" : "opacity-40 group-hover:opacity-100 group-hover:text-white"
                        )}>
                          <span className={cn("transition-colors duration-500", guide.highlight ? "text-white" : cn(guide.color, "group-hover:text-white"))}>{guide.code}</span>
                          <BookOpen className="w-4 h-4" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase leading-[1.1] group-hover:text-white transition-colors duration-500">{guide.title}</h3>
                        <p className={cn("text-[10px] md:text-xs font-semibold uppercase tracking-widest transition-colors duration-500", guide.highlight ? "text-white opacity-60 group-hover:text-white" : "opacity-40 group-hover:text-white group-hover:opacity-60")}>{guide.level}</p>
                      </div>
                      <Button variant="link" className={cn("p-0 h-auto justify-start transition-colors font-semibold tactile-pop", guide.highlight ? "text-white" : "text-black/40 group-hover:text-white")}>Download Guide</Button>
                    </Card>
                 ))}
                 <Card className="bg-sun text-black border-none flex flex-col justify-between space-y-12 min-h-[350px] h-full shadow-xl shadow-sun/5 group transition-all duration-700 hover:bg-black hover:text-white">
                    <div className="flex justify-between items-start">
                       <h3 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase leading-[1.1] transition-colors duration-500 group-hover:text-white">Custom <br /><span className="wavy-underline">Partnership.</span></h3>
                       <Layers className="w-5 h-5 opacity-20 group-hover:opacity-100 group-hover:text-white transition-all" />
                    </div>
                    <p className="text-sm font-light opacity-80 text-balance group-hover:text-white/80 transition-all">Request a specialized workshop or curriculum integration for your entire school network.</p>
                    <Button variant="outline" className="border-black text-black group-hover:border-white group-hover:text-white hover:bg-white hover:text-black font-semibold transition-all duration-500 tactile-pop">Inquire Now</Button>
                 </Card>
              </div>
           </div>
        </div>
      </AnimatedSection>

      {/* 3. Call to Research Hub */}
      <AnimatedSection className="bg-white">
         <div className="editorial-container bg-black text-white p-12 md:p-24 flex flex-col md:flex-row justify-between items-center gap-12 rounded-[2rem] md:rounded-[3rem] overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter uppercase text-center md:text-left text-balance">Access the <span className="text-sun font-playful lowercase tracking-normal italic wavy-underline">Digital Library.</span></h2>
            <Button variant="sun" size="lg" className="w-full md:w-auto flex items-center gap-4 shadow-xl shadow-sun/10 tactile-pop">Browse Resources <ArrowRight className="w-5 h-5" /></Button>
         </div>
      </AnimatedSection>
    </div>
  );
}
