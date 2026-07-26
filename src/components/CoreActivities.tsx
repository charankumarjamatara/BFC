import React from 'react';
import { Shield, Home, BookOpen } from 'lucide-react';

export default function CoreActivities() {
  return (
    <div className="w-full pt-10 md:pt-12 mb-8 md:mb-10" id="about">
      {/* Signature Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="eyebrow mb-2">About Us</span>
          <h2 className="font-display text-[clamp(40px,6.5vw,68px)] text-ink uppercase leading-[.92] tracking-[.01em]">
            Volunteer Driven<br />Movement<span className="inline-block w-3 h-3 bg-yellow align-baseline ml-1.5"></span>
          </h2>
        </div>
        <p className="text-muted text-[15px] max-w-sm leading-relaxed md:pb-1">
          Rescuing street animals, facilitating adoptions, and building a cruelty-free community across Bengaluru.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="brand-card rounded-[20px] p-8 flex flex-col items-center justify-center text-center gap-4">
          <div className="text-yellow">
            <Shield className="w-9 h-9" strokeWidth={1.5} />
          </div>
          <h4 className="font-display text-[22px] text-ink uppercase tracking-[.03em]">Animal Rescue</h4>
        </div>
        
        <div className="brand-card rounded-[20px] p-8 flex flex-col items-center justify-center text-center gap-4">
          <div className="text-yellow">
            <Home className="w-9 h-9" strokeWidth={1.5} />
          </div>
          <h4 className="font-display text-[22px] text-ink uppercase tracking-[.03em]">Adoption</h4>
        </div>
        
        <div className="brand-card rounded-[20px] p-8 flex flex-col items-center justify-center text-center gap-4">
          <div className="text-yellow">
            <BookOpen className="w-9 h-9" strokeWidth={1.5} />
          </div>
          <h4 className="font-display text-[22px] text-ink uppercase tracking-[.03em]">Education &<br/>Awareness</h4>
        </div>
      </div>
    </div>
  );
}
