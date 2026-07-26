import React from 'react';
import { Clock, MapPin, PawPrint, MessageSquare } from 'lucide-react';

export default function Volunteer() {
  return (
    <section id="volunteer" className="py-24 px-6 bg-surface border-y border-line-soft">
      <div className="container mx-auto max-w-[1180px]">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-stretch">
          
          {/* Left: Become a volunteer */}
          <div className="flex flex-col justify-between bg-bg rounded-[24px] p-8 md:p-12 border border-line">
            <div className="space-y-6">
              <span className="eyebrow">
                Become a volunteer
              </span>
              
              <h2 className="text-[40px] md:text-[52px] font-display text-ink leading-[1] uppercase tracking-[.01em]">
                Join Bangalore's Kindest Rescue Tribe.
              </h2>
              
              <p className="text-muted text-[15px] leading-relaxed">
                Our feeding routes, medical runs, and collar drives are powered entirely by volunteers. Whether you can spare two hours on Saturday mornings or help manage our social adoption leads, your support helps directly.
              </p>
            </div>

            <div className="space-y-4 mt-8 mb-10">
              <div className="flex items-center gap-4">
                <div className="bg-teal text-[#04332d] p-2.5 rounded-xl"><Clock className="w-5 h-5" /></div>
                <span className="text-[14px] font-bold text-ink uppercase tracking-wide">Flexible weekend / weekday slots</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-teal text-[#04332d] p-2.5 rounded-xl"><MapPin className="w-5 h-5" /></div>
                <span className="text-[14px] font-bold text-ink uppercase tracking-wide">Multiple Bengaluru zones</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-teal text-[#04332d] p-2.5 rounded-xl"><PawPrint className="w-5 h-5" /></div>
                <span className="text-[14px] font-bold text-ink uppercase tracking-wide">No prior experience required</span>
              </div>
            </div>
            
            <a 
              href="https://wa.me/919845012345" 
              target="_blank" 
              rel="noreferrer"
              className="bg-ink text-teal font-bold text-xs uppercase tracking-[.14em] py-4 px-8 rounded-full flex items-center justify-center gap-2 hover:bg-[#222] transition-colors self-start"
            >
              <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>

          {/* Right: What Our Volunteers Say */}
          <div className="bg-surface rounded-[24px] p-8 md:p-12 border border-line flex flex-col justify-center">
            <h3 className="font-display text-[32px] text-ink mb-12 uppercase tracking-[.02em]">What Our Volunteers Say:</h3>
            
            <div className="space-y-8">
              <div className="bg-bg p-8 rounded-[16px] border border-line relative">
                <p className="text-ink text-[15px] italic relative z-10 font-medium leading-relaxed">
                  "Volunteering here doesn't just change the animals' lives, it changes yours. You learn patience, empathy, and unconditional love."
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal text-[#04332d] flex items-center justify-center font-display text-xl uppercase pt-1">K</div>
                  <div>
                    <h5 className="font-bold text-ink text-[14px] uppercase tracking-wide">Kiran R.</h5>
                    <span className="text-[11px] text-muted uppercase tracking-[.06em]">Weekend Rescue Driver</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-bg p-8 rounded-[16px] border border-line relative">
                <p className="text-ink text-[15px] italic relative z-10 font-medium leading-relaxed">
                  "I joined to feed street dogs on Sundays, and I ended up finding an entire community of compassionate friends."
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-yellow text-ink flex items-center justify-center font-display text-xl uppercase pt-1">S</div>
                  <div>
                    <h5 className="font-bold text-ink text-[14px] uppercase tracking-wide">Sanjay V.</h5>
                    <span className="text-[11px] text-muted uppercase tracking-[.06em]">Feeding Coordinator</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
