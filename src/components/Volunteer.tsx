import React from 'react';
import { Clock, MapPin, PawPrint, FileText } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Volunteer() {
  return (
    <section id="volunteer" className="section-wrapper bg-surface border-b-0">
      <div className="section-container">
        
        <SectionHeader 
          eyebrow="Join The Movement"
          headingParts={["Become A", "Volunteer"]}
          description="Whether you can spare two hours on weekends or manage adoption leads from home, every pair of hands makes a difference."
        />

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Left: Become a volunteer */}
          <div className="brand-card p-7 md:p-10 flex flex-col justify-between bg-bg">
            <div className="space-y-4">
              <span className="eyebrow">
                Volunteer Tribe
              </span>
              
              <h3 className="text-[32px] md:text-[40px] font-display text-ink leading-[1.1] uppercase tracking-[.01em]">
                Join Bangalore's Kindest Rescue Tribe.
              </h3>
              
              <p className="text-muted text-[14.5px] leading-relaxed">
                Our feeding routes, medical runs, and collar drives are powered entirely by volunteers. Whether you can spare two hours on Saturday mornings or help manage our social adoption leads, your support helps directly.
              </p>
            </div>

            <div className="space-y-4 my-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal text-[#04332d] flex items-center justify-center shrink-0 border border-line-soft"><Clock className="w-5 h-5" /></div>
                <span className="text-[14px] font-bold text-ink uppercase tracking-wide">Flexible weekend / weekday slots</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal text-[#04332d] flex items-center justify-center shrink-0 border border-line-soft"><MapPin className="w-5 h-5" /></div>
                <span className="text-[14px] font-bold text-ink uppercase tracking-wide">Multiple Bengaluru zones</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal text-[#04332d] flex items-center justify-center shrink-0 border border-line-soft"><PawPrint className="w-5 h-5" /></div>
                <span className="text-[14px] font-bold text-ink uppercase tracking-wide">No prior experience required</span>
              </div>
            </div>
            
            <div className="space-y-4 pt-2 border-t border-line-soft">
              <p className="text-ink font-medium text-[14px]">
                Fill the form in 2 mins to lend a hand for the cause
              </p>
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer"
                className="btn-outline self-start"
              >
                Fill Google Form
              </a>
            </div>
          </div>

          {/* Right: What Our Volunteers Say */}
          <div className="brand-card p-7 md:p-10 flex flex-col justify-center bg-surface">
            <h3 className="font-display text-[26px] text-ink mb-8 uppercase tracking-[.02em]">
              What Our Volunteers Say<span className="inline-block w-2.5 h-2.5 bg-yellow align-baseline ml-1"></span>
            </h3>
            
            <div className="space-y-5">
              <div className="brand-card p-6 bg-bg">
                <p className="text-ink text-[14.5px] italic font-medium leading-relaxed">
                  "Volunteering here doesn't just change the animals' lives, it changes yours. You learn patience, empathy, and unconditional love."
                </p>
                <div className="mt-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal text-[#04332d] flex items-center justify-center font-display text-lg uppercase pt-1 border border-line-soft">K</div>
                  <div>
                    <h5 className="font-bold text-ink text-[13px] uppercase tracking-wide leading-tight">Kiran R.</h5>
                    <span className="text-[11px] text-muted uppercase tracking-[.06em] font-medium">Weekend Rescue Driver</span>
                  </div>
                </div>
              </div>
              
              <div className="brand-card p-6 bg-bg">
                <p className="text-ink text-[14.5px] italic font-medium leading-relaxed">
                  "I joined to feed street dogs on Sundays, and I ended up finding an entire community of compassionate friends."
                </p>
                <div className="mt-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-yellow text-ink flex items-center justify-center font-display text-lg uppercase pt-1 border border-line-soft">S</div>
                  <div>
                    <h5 className="font-bold text-ink text-[13px] uppercase tracking-wide leading-tight">Sanjay V.</h5>
                    <span className="text-[11px] text-muted uppercase tracking-[.06em] font-medium">Feeding Coordinator</span>
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
