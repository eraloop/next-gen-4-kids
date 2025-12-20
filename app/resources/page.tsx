'use client';

import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, Search, BookOpen, Download, FileText, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function ResourcesPage() {
  const [activeTag, setActiveTag] = useState("All Index");
  
  const resources = [
    { title: "The Book of Discovery: Vol 1", type: "Activity Book", code: "RES-01", tag: "Books", icon: <BookOpen className="w-6 h-6 transition-all duration-500" />, color: "text-sun",  hoverBg: "hover:bg-highlight" },
    { title: "Innovator's Blueprint", type: "Curriculum Map", code: "RES-02", tag: "Guides", icon: <FileText className="w-6 h-6 transition-all duration-500" />, color: "text-sky", hoverBg: "hover:bg-sky" },
    { title: "Safety Shield Simulator", type: "Interactive Tool", code: "RES-03", tag: "Tools", icon: <Globe className="w-6 h-6 transition-all duration-500" />, color: "text-leaf", hoverBg: "hover:bg-leaf" },
    { title: "Guided Parenting Guide", type: "Resource Paper", code: "RES-04", tag: "Guides", icon: <FileText className="w-6 h-6 transition-all duration-500" />, color: "text-sky", hoverBg: "hover:bg-sky" },
    { title: "STEM Workshop Kit", type: "Technical Kit", code: "RES-05", tag: "Tools", icon: <Download className="w-6 h-6 transition-all duration-500" />, color: "text-leaf", highlight: true, bgColor: "bg-leaf", hoverBg: "hover:bg-highlight" },
    { title: "Digital Ethics Handbook", type: "Faculty Asset", code: "RES-06", tag: "Books", icon: <BookOpen className="w-6 h-6 transition-all duration-500" />, color: "text-sun", hoverBg: "hover:bg-sun" }
  ];

  const filteredResources = activeTag === "All Index" 
    ? resources 
    : resources.filter(r => r.tag === activeTag);

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        chapter="Institutional Library"
        title="Resources for <span class='text-leaf font-playful lowercase tracking-normal italic wavy-underline'>Empowerment.</span>"
        subtitle="A centralized repository of activity books, technical blueprints, and pedagogical tools for the NextGen community."
        image="/assets/images/istockphoto-2152266807-2048x2048.webp"
        accentColor="leaf"
      />

      {/* Functional Filter Bar */}
      <AnimatedSection className="bg-white !py-0 -mt-12 relative z-10">
         <div className="editorial-container">
            <div className="bg-black text-white p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 rounded-2xl md:rounded-[2rem] overflow-hidden">
               <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12 w-full lg:w-auto">
                  {["All Index", "Books", "Guides", "Tools"].map((tag) => (
                    <button 
                      key={tag} 
                      onClick={() => setActiveTag(tag)}
                      className={cn(
                        "text-[10px] font-semibold uppercase tracking-[0.3em] transition-all relative py-4",
                        activeTag === tag ? "text-leaf" : "opacity-40 hover:opacity-100"
                      )}
                    >
                      {tag}
                      {activeTag === tag && <motion.div layoutId="tag-underline" className="absolute bottom-0 left-0 right-0 h-1 bg-leaf" />}
                    </button>
                  ))}
               </div>
               <div className="flex items-center gap-4 bg-white/10 px-6 py-4 border border-white/10 w-full lg:w-96 rounded-xl">
                  <Search className="w-4 h-4 opacity-40 shrink-0" />
                  <input placeholder="SEARCH REPOSITORY..." className="bg-transparent border-none outline-none text-[10px] font-semibold tracking-widest uppercase w-full placeholder:text-white/20" />
               </div>
            </div>
         </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white">
        <div className="editorial-container">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
             {filteredResources.map((res, i) => (
               <Card key={i} className={cn(
                  "group transition-all duration-700 flex flex-col justify-between min-h-[400px] md:min-h-[450px] h-full hover:text-white",
                  res.highlight 
                    ? cn(res.bgColor, "text-black hover:bg-black hover:text-white border-none") 
                    : cn("bg-neutral-50/50 border border-black/5", res.hoverBg)
                )}>
                  <div className="space-y-12">
                    <div className="flex justify-between items-start">
                      <div className={cn(
                        "text-[10px] font-semibold uppercase tracking-widest transition-colors duration-500", 
                        res.highlight ? "text-black/60 group-hover:text-white/60" : cn("opacity-40 group-hover:opacity-100 group-hover:text-white", res.color)
                      )}>{res.code}</div>
                      <div className={cn(
                        "text-[10px] font-semibold uppercase tracking-widest px-4 py-2 border transition-colors duration-500", 
                        res.highlight ? "border-black/5 text-black group-hover:border-white/20 group-hover:text-white" : cn("border-black/10 group-hover:border-white/20 group-hover:text-white", res.color)
                      )}>{res.tag}</div>
                    </div>
                    <div className="space-y-6">
                      <div className={cn(
                        "p-6 bg-white border transition-all duration-500 inline-block shadow-sm overflow-hidden rounded-xl", 
                        res.highlight ? "bg-black/5 border-black/5 group-hover:bg-white/10 group-hover:border-white/20" : "border-black/5 group-hover:bg-white/10 group-hover:border-white/20"
                      )}>
                        <div className={cn("transition-colors duration-500", res.highlight ? "text-black group-hover:text-white" : "group-hover:text-white")}>
                          {res.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-tighter transition-colors duration-500 leading-[1.1] group-hover:text-white">{res.title}</h3>
                    </div>
                  </div>
                  <div className={cn(
                    "pt-16 border-t flex items-center justify-between transition-colors duration-500", 
                    res.highlight ? "border-black/5 group-hover:border-white/10" : "border-black/5 group-hover:border-white/10"
                  )}>
                    <span className="text-[10px] font-semibold uppercase tracking-widest opacity-60 group-hover:text-white group-hover:opacity-100 transition-all duration-500">Download Asset</span>
                    <ArrowRight className={cn(
                      "w-5 h-5 transition-all duration-500 group-hover:translate-x-4 group-hover:text-white", 
                      res.highlight ? "text-black" : cn(res.color, "group-hover:text-white")
                    )} />
                  </div>
                </Card>
             ))}
           </div>
        </div>
      </AnimatedSection>
      
      {/* Secondary Information */}
      <AnimatedSection className="bg-neutral-50/30">
        <div className="editorial-container grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32 items-center">
           <div className="space-y-12">
              <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-leaf">Technical Licensing</div>
              <h2 className="text-4xl md:text-7xl font-semibold tracking-tighter uppercase leading-[0.9] text-balance">Open for <br /><span className="text-leaf font-playful lowercase tracking-normal italic wavy-underline">Enquiry.</span></h2>
              <p className="text-lg md:text-xl font-light text-muted-foreground leading-relaxed text-balance">
                All resources in our library are available for community use under the NextGen Creative Commons license. For institutional <span className="wavy-underline text-black">mass-printing</span> or commercial integration, please contact our legal team.
              </p>
              <div className="flex flex-wrap gap-8 pt-4">
                <button className="text-[10px] font-semibold uppercase tracking-widest border-b-2 border-leaf py-2 transition-colors hover:text-leaf tactile-pop">Licensing T&C</button>
                <button className="text-[10px] font-semibold uppercase tracking-widest border-b-2 border-black/5 py-2 hover:border-black transition-all tactile-pop">Support Desk</button>
              </div>
           </div>
           
           <div className="aspect-video bg-neutral-900 flex items-center justify-center p-12 shadow-2xl shadow-black/20 rounded-[2rem] overflow-hidden relative">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
                style={{ backgroundImage: `url('/assets/images/premium_photo-1683138608820-3182ced664d5.jpeg')` }}
              />
              <div className="text-center space-y-6 relative z-10">
                 <div className="text-leaf font-semibold text-6xl md:text-8xl transition-transform hover:scale-110 duration-500 cursor-default">CC</div>
                 <div className="text-[10px] font-semibold uppercase tracking-widest text-white/40">Resource Sharing Paradigm</div>
              </div>
           </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
