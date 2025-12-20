'use client';

import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone, ArrowRight, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        chapter="Chapter Six: Join the Hub"
        title="Let's Build the <span class='text-sky font-playful lowercase tracking-normal italic wavy-underline'>Blueprint.</span>"
        subtitle="Have a question about our research, institutional licensing, or interested in bringing our curriculum to your school?"
        image="/assets/images/photo-1576633587382-13ddf37b1fc1.avif"
      />

      <AnimatedSection className="bg-white">
        <div className="editorial-container grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-20 md:gap-32 items-start">
           <div className="space-y-16 md:space-y-20">
              <div className="space-y-8">
                 <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-highlight">Communication Protocol</div>
                 <h2 className="text-4xl md:text-7xl font-semibold tracking-tighter uppercase leading-[0.9] text-balance">Submit a <br /><span className="text-highlight font-playful lowercase tracking-normal italic wavy-underline">Pathway Inquiry.</span></h2>
              </div>
              
              {/* Well-Defined Form Section */}
              <div className="bg-neutral-50/50 p-8 md:p-12 lg:p-16 border border-black/5 editorial-border shadow-2xl shadow-black/5 rounded-[2rem] overflow-hidden">
                <form className="space-y-12">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                      <div className="space-y-4">
                         <label className="text-[10px] font-semibold uppercase tracking-widest opacity-40">Identifier: Full_Name</label>
                         <input className="w-full py-4 md:py-6 text-xl bg-transparent border-b-2 border-black/5 outline-none focus:border-highlight transition-all placeholder:opacity-10 uppercase tracking-tighter" placeholder="NAME / INSTITUTION" />
                      </div>
                      <div className="space-y-4">
                         <label className="text-[10px] font-semibold uppercase tracking-widest opacity-40">Identifier: Digital_Address</label>
                         <input className="w-full py-4 md:py-6 text-xl bg-transparent border-b-2 border-black/5 outline-none focus:border-highlight transition-all placeholder:opacity-10 uppercase tracking-tighter" placeholder="EMAIL@DOMAIN.COM" />
                      </div>
                   </div>
                   
                   <div className="space-y-4">
                      <label className="text-[10px] font-semibold uppercase tracking-widest opacity-40">Protocol: Inquiry_Scope</label>
                      <select className="w-full py-4 md:py-6 text-xl bg-transparent border-b-2 border-black/5 outline-none focus:border-highlight transition-all uppercase tracking-tighter appearance-none cursor-pointer">
                         <option>Select Inquiry Type</option>
                         <option>Institutional Partnership</option>
                         <option>Research Collaboration</option>
                         <option>Media & Press</option>
                         <option>General Support</option>
                      </select>
                   </div>

                   <div className="space-y-4">
                      <label className="text-[10px] font-semibold uppercase tracking-widest opacity-40">Protocol: Transmission_Data</label>
                      <textarea rows={4} className="w-full py-4 md:py-6 text-xl bg-transparent border-b-2 border-black/5 outline-none focus:border-highlight transition-all placeholder:opacity-10 uppercase tracking-tighter resize-none" placeholder="DESCRIBE YOUR VISION..." />
                   </div>

                   <Button variant="highlight" size="xl" className="w-full py-8 md:py-10 flex items-center justify-center gap-6 font-semibold shadow-xl shadow-highlight/10 tactile-pop">Initialize Communication <ArrowRight className="w-6 h-6" /></Button>
                </form>
              </div>
           </div>

           {/* Contact Sidebar */}
           <div className="space-y-16 md:space-y-20 lg:pl-16 lg:border-l border-black/5">
              <div className="space-y-12">
                 <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-highlight">Direct Access</div>
                 <div className="grid grid-cols-1 gap-8">
                    {[
                       { icon: <Mail className="w-5 h-5" />, label: "Email", value: "hello@nextgenkids.org", color: "text-sky", highlight: true },
                       { icon: <Phone className="w-5 h-5" />, label: "Global", value: "+237 000 000 000", color: "text-leaf" },
                       { icon: <MapPin className="w-5 h-5" />, label: "HQ", value: "Douala, Cameroon", color: "text-sun" }
                    ].map((item, i) => (
                      <div key={i} className={cn(
                        "flex items-center gap-6 md:gap-8 p-6 transition-all duration-500 border border-black/5 rounded-2xl hover:border-transparent group cursor-pointer",
                        item.highlight ? "bg-white shadow-xl shadow-black/5 ring-1 ring-sky/10" : "bg-neutral-50/50 hover:bg-black hover:text-white"
                      )}>
                         <div className={cn("p-4 bg-white border border-black/5 transition-all shadow-sm shrink-0 rounded-xl", `group-hover:${item.color.replace('text-', 'bg-')}`)}>
                            <div className="group-hover:text-white transition-colors">{item.icon}</div>
                         </div>
                         <div className="space-y-1 min-w-0 overflow-hidden">
                            <div className={cn("text-[10px] font-semibold uppercase tracking-widest opacity-40 group-hover:text-white/60", item.color)}>{item.label}</div>
                            <div className="font-semibold text-base md:text-lg tracking-tighter truncate">{item.value}</div>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="p-10 md:p-12 bg-neutral-900 text-white space-y-8 relative overflow-hidden group rounded-[2rem]">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-sun/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                 <MessageSquare className="w-10 h-10 text-sun relative z-10" />
                 <h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-tighter text-balance text-white relative z-10">Live <span className="wavy-underline">Support</span> Protocol.</h3>
                 <p className="text-sm opacity-60 leading-relaxed font-light text-balance relative z-10">For immediate technical assistance during school hours, please use our secure faculty portal.</p>
                 <Button variant="outline" className="w-full border-white/20 text-white hover:bg-sun hover:border-sun hover:text-black font-semibold relative z-10 tactile-pop">Access Portal</Button>
              </div>
           </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
