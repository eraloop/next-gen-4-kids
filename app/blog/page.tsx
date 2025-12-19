'use client';

import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Share2, Clock, User2, Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BlogPage() {
  const posts = [
    { 
      title: "Why Cybersecurity is the New Literacy for youth.", 
      id: "INS-001", 
      category: "Online Safety", 
      date: "DEC 12, 2025",
      author: "NextGen Research",
      color: "text-highlight",
      hoverBg: "hover:bg-highlight",
      highlight: true,
      bgColor: "bg-highlight"
    },
    { 
      title: "Inspiring STEM Curiosity in Early Childhood.", 
      id: "INS-002", 
      category: "STEM Education", 
      date: "DEC 08, 2025",
      author: "Academic Faculty",
      color: "text-sky",
      hoverBg: "hover:bg-sky"
    },
    { 
      title: "Africa's Digital Renaissance: A Decade of Growth.", 
      id: "INS-003", 
      category: "Impact", 
      date: "NOV 24, 2025",
      author: "Director of Policy",
      color: "text-leaf",
      hoverBg: "hover:bg-leaf"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        chapter="Chapter Five: Insights"
        title="Thinking Beyond the <span class='text-sun font-playful lowercase tracking-normal italic'>Interface.</span>"
        subtitle="A collection of research, guides, and thought leadership from the frontlines of digital education and youth development."
        image="BLOG_PAGE_HERO"
        accentColor="sun"
      />

      {/* 1. NEW SECTION: The Daily Wire (Short updates) */}
      <AnimatedSection className="bg-neutral-50/50 py-16 md:py-24 border-b border-black/5">
        <div className="editorial-container flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="flex items-center gap-6">
              <Newspaper className="w-10 h-10 text-highlight" />
              <div className="space-y-1">
                 <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-highlight">The Briefing</div>
                 <h2 className="text-2xl font-semibold tracking-tighter uppercase">Latest Technical Updates</h2>
              </div>
           </div>
           <div className="flex flex-wrap gap-8 items-center text-sm font-medium opacity-60">
              <span className="hover:text-highlight cursor-pointer transition-colors underline underline-offset-8">V4.0 Security Patch</span>
              <span className="hover:text-highlight cursor-pointer transition-colors underline underline-offset-8">New School Partner in Lagos</span>
              <span className="hover:text-highlight cursor-pointer transition-colors underline underline-offset-8">Download STEM Guide</span>
           </div>
           <Button variant="outline" size="sm" className="border-black font-semibold">Live Feed</Button>
        </div>
      </AnimatedSection>

      {/* 2. Featured Insight Grid */}
      <AnimatedSection className="bg-white">
        <div className="editorial-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {posts.map((post, i) => (
              <Card key={i} className={cn(
                    "group border-none transition-all duration-700 flex flex-col justify-between min-h-[500px] md:min-h-[550px] h-full hover:text-white",
                    post.highlight ? cn(post.bgColor, "text-white hover:bg-black") : cn("bg-neutral-50/50", post.hoverBg)
              )}>
                <div className="space-y-12">
                  <div className={cn(
                    "flex justify-between items-center text-[10px] font-semibold uppercase tracking-[0.4em] transition-colors duration-500", 
                    post.highlight ? "text-white opacity-60 group-hover:opacity-100" : "opacity-40 group-hover:opacity-100 group-hover:text-white"
                  )}>
                    <span>{post.id}</span>
                    <span className={cn(
                      "px-4 py-2 border transition-colors duration-500", 
                      post.highlight ? "border-white/20 text-white" : cn("border-black/10 group-hover:border-white/20 group-hover:text-white", post.color)
                    )}>{post.category}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-semibold tracking-tighter uppercase leading-[1.1] transition-colors duration-500 group-hover:text-white">
                    {post.title}
                  </h3>
                  <div className={cn(
                    "flex flex-wrap items-center gap-6 md:gap-8 pt-8 transition-all duration-500", 
                    post.highlight ? "opacity-80 text-white group-hover:opacity-100" : "opacity-40 group-hover:opacity-100 group-hover:text-white"
                  )}>
                     <div className="flex items-center gap-2">
                        <User2 className={cn("w-3 h-3 transition-colors duration-500", post.highlight ? "text-white" : cn(post.color, "group-hover:text-white"))} />
                        <span className="text-[10px] font-semibold uppercase tracking-widest">{post.author}</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <Clock className={cn("w-3 h-3 transition-colors duration-500", post.highlight ? "text-white" : cn(post.color, "group-hover:text-white"))} />
                        <span className="text-[10px] font-semibold uppercase tracking-widest">{post.date}</span>
                     </div>
                  </div>
                </div>
                <div className={cn(
                  "pt-16 border-t flex items-center justify-between transition-colors duration-500", 
                  post.highlight ? "border-white/10" : "border-black/5 group-hover:border-white/10"
                )}>
                   <div className={cn(
                     "flex items-center gap-4 text-[10px] font-semibold uppercase tracking-widest transition-colors duration-500", 
                     post.highlight ? "text-white" : cn(post.color, "group-hover:text-white")
                   )}>
                      Read Blueprint <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-4 group-hover:text-white" />
                   </div>
                   <Share2 className={cn(
                     "w-4 h-4 cursor-pointer transition-all duration-500", 
                     post.highlight ? "text-white opacity-40 group-hover:opacity-100" : "opacity-20 group-hover:opacity-100 group-hover:text-white hover:text-sun"
                   )} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 3. Newsletter / Intelligence Intake */}
      <AnimatedSection className="bg-neutral-50/30">
         <div className="editorial-container grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-20 md:gap-32 items-center">
            <div className="space-y-12">
               <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-sun">Weekly Briefing</div>
               <h2 className="text-5xl md:text-8xl font-semibold leading-[0.9] tracking-tighter uppercase text-balance">Intake <br /><span className="text-sun font-playful lowercase tracking-normal italic">intelligence.</span></h2>
               <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground text-balance">
                 Subscribe to our research digest and receive monthly updates on digital literacy and scientific education trends.
               </p>
            </div>
            
            <form className="bg-black p-10 md:p-16 space-y-12 text-white shadow-2xl shadow-sun/5">
               <div className="space-y-4">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.4em] text-sun">Protocol: Subscriber_Input</label>
                  <input placeholder="ENTER EMAIL ADDRESS" className="w-full bg-transparent border-b-2 border-white/10 py-6 text-xl md:text-2xl font-semibold tracking-tighter uppercase outline-none focus:border-sun transition-colors placeholder:text-white/10" />
               </div>
               <Button variant="sun" size="xl" className="w-full font-semibold shadow-xl shadow-sun/10 transition-all hover:scale-[1.02]">Initialize Briefing</Button>
            </form>
         </div>
      </AnimatedSection>
    </div>
  );
}
