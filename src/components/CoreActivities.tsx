import React from 'react';
import { Shield, Home, BookOpen } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function CoreActivities() {
  return (
    <div className="w-full pt-10 md:pt-12 mb-8 md:mb-10" id="about">
      <SectionHeader 
        eyebrow="About Us"
        headingParts={["Volunteer Driven", "Movement"]}
        description="Rescuing street animals, facilitating adoptions, and building a cruelty-free community across Bengaluru."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="brand-card p-8 flex flex-col items-center justify-center text-center gap-4 border border-line bg-surface rounded-[16px]">
          <div className="w-14 h-14 rounded-full bg-bg flex items-center justify-center text-ink border border-line-soft">
            <Shield className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <h4 className="font-display text-[22px] text-ink uppercase tracking-[.02em]">Animal Rescue</h4>
        </div>
        
        <div className="brand-card p-8 flex flex-col items-center justify-center text-center gap-4 border border-line bg-surface rounded-[16px]">
          <div className="w-14 h-14 rounded-full bg-bg flex items-center justify-center text-ink border border-line-soft">
            <Home className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <h4 className="font-display text-[22px] text-ink uppercase tracking-[.02em]">Adoption</h4>
        </div>
        
        <div className="brand-card p-8 flex flex-col items-center justify-center text-center gap-4 border border-line bg-surface rounded-[16px]">
          <div className="w-14 h-14 rounded-full bg-bg flex items-center justify-center text-ink border border-line-soft">
            <BookOpen className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <h4 className="font-display text-[22px] text-ink uppercase tracking-[.02em]">Education &<br/>Awareness</h4>
        </div>
      </div>
    </div>
  );
}
