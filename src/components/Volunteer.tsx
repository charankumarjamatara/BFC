import React from 'react';
import { Clock, MapPin, PawPrint, MessageSquare } from 'lucide-react';

export default function Volunteer() {
  return (
    <section id="volunteer" className="py-12 md:py-16 px-6 bg-surface border-y border-line-soft">
      <div className="container mx-auto max-w-[1180px]">
        
        {/* Signature Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="eyebrow mb-2">Join The Movement</span>
            <h2 className="font-display text-[clamp(40px,6.5vw,68px)] text-ink uppercase leading-[.92] tracking-[.01em]">
              Become A<br />Volunteer<span className="inline-block w-3 h-3 bg-yellow align-baseline ml-1.5"></span>
            </h2>
          </div>
          <p className="text-muted text-[15px] max-w-sm leading-relaxed md:pb-1">
            Whether you can spare two hours on weekends or manage adoption leads from home, every pair of hands makes a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Left: Become a volunteer */}
          <div className="flex flex-col justify-between bg-bg rounded-[20px] p-7 md:p-10 border border-line">
            <div className="space-y-4">
              <span className="eyebrow">
                Volunteer Tribe
              </span>
              
              <h3 className="text-[32px] md:text-[40px] font-display text-ink leading-[1] uppercase tracking-[.01em]">
                Join Bangalore's Kindest Rescue Tribe.
              </h3>
              
              <p className="text-muted text-[14.5px] leading-relaxed">
                Our feeding routes, medical runs, and collar drives are powered entirely by volunteers. Whether you can spare two hours on Saturday mornings or help manage our social adoption leads, your support helps directly.
              </p>
            </div>

            <div className="space-y-3.5 my-6">
              <div className="flex items-center gap-3.5">
                <div className="bg-teal text-[#04332d] p-2 rounded-xl"><Clock className="w-4 h-4" /></div>
                <span className="text-[13.5px] font-bold text-ink uppercase tracking-wide">Flexible weekend / weekday slots</span>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="bg-teal text-[#04332d] p-2 rounded-xl"><MapPin className="w-4 h-4" /></div>
                <span className="text-[13.5px] font-bold text-ink uppercase tracking-wide">Multiple Bengaluru zones</span>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="bg-teal text-[#04332d] p-2 rounded-xl"><PawPrint className="w-4 h-4" /></div>
                <span className="text-[13.5px] font-bold text-ink uppercase tracking-wide">No prior experience required</span>
              </div>
            </div>
            
            <a 
              href="https://wa.me/919845012345" 
              target="_blank" 
              rel="noreferrer"
              className="bg-ink text-teal font-bold text-xs uppercase tracking-[.14em] py-3.5 px-7 rounded-full flex items-center justify-center gap-2 hover:bg-[#222] transition-colors self-start"
            >
              <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>

          {/* Right: What Our Volunteers Say */}
          <div className="bg-surface rounded-[20px] p-7 md:p-10 border border-line flex flex-col justify-center">
            <h3 className="font-display text-[26px] text-ink mb-6 uppercase tracking-[.02em]">What Our Volunteers Say<span className="inline-block w-2.5 h-2.5 bg-yellow align-baseline ml-1"></span></h3>
            
            <div className="space-y-5">
              <div className="bg-bg p-6 rounded-[16px] border border-line relative">
                <p className="text-ink text-[14px] italic relative z-10 font-medium leading-relaxed">
                  "Volunteering here doesn't just change the animals' lives, it changes yours. You learn patience, empathy, and unconditional love."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal text-[#04332d] flex items-center justify-center font-display text-base uppercase pt-0.5">K</div>
                  <div>
                    <h5 className="font-bold text-ink text-[13px] uppercase tracking-wide">Kiran R.</h5>
                    <span className="text-[10px] text-muted uppercase tracking-[.06em]">Weekend Rescue Driver</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-bg p-6 rounded-[16px] border border-line relative">
                <p className="text-ink text-[14px] italic relative z-10 font-medium leading-relaxed">
                  "I joined to feed street dogs on Sundays, and I ended up finding an entire community of compassionate friends."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-yellow text-ink flex items-center justify-center font-display text-base uppercase pt-0.5">S</div>
                  <div>
                    <h5 className="font-bold text-ink text-[13px] uppercase tracking-wide">Sanjay V.</h5>
                    <span className="text-[10px] text-muted uppercase tracking-[.06em]">Feeding Coordinator</span>
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
