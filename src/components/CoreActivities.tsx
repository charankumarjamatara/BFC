import React from 'react';
import { Shield, Home, BookOpen } from 'lucide-react';

export default function CoreActivities() {
  return (
    <div className="w-full pt-24 mb-24" id="about">
      <div className="flex justify-center mb-10">
        <span className="eyebrow">About Us</span>
      </div>
      
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display text-ink uppercase tracking-[.01em] leading-[1.1] mb-12">
          We are a volunteer driven Organization.<br/>
          <span className="text-muted text-[15px] font-sans tracking-normal normal-case block mt-6 max-w-2xl mx-auto font-normal">
            What our organization does:
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="brand-card p-10 flex flex-col items-center justify-center text-center gap-5">
            <div className="text-yellow">
              <Shield className="w-10 h-10" strokeWidth={1.5} />
            </div>
            <h4 className="font-display text-[22px] text-ink uppercase tracking-[.03em]">Animal Rescue</h4>
          </div>
          
          <div className="brand-card p-10 flex flex-col items-center justify-center text-center gap-5">
            <div className="text-yellow">
              <Home className="w-10 h-10" strokeWidth={1.5} />
            </div>
            <h4 className="font-display text-[22px] text-ink uppercase tracking-[.03em]">Adoption</h4>
          </div>
          
          <div className="brand-card p-10 flex flex-col items-center justify-center text-center gap-5">
            <div className="text-yellow">
              <BookOpen className="w-10 h-10" strokeWidth={1.5} />
            </div>
            <h4 className="font-display text-[22px] text-ink uppercase tracking-[.03em]">Education &<br/>Awareness</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
