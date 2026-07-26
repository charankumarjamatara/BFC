import React from 'react';
import { Star, Clock, Heart, Handshake } from 'lucide-react';

export default function VolunteerMonth() {
  return (
    <section className="py-24 px-6 container mx-auto max-w-[1180px]">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="eyebrow mb-6">Our Stars</span>
        <h2 className="font-display text-4xl md:text-[52px] uppercase tracking-[.01em] text-ink">
          Volunteer of the Month
        </h2>
      </div>

      <div className="brand-card p-8 lg:p-12 border border-line bg-surface">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="w-full aspect-[4/3] rounded-[16px] overflow-hidden border border-line">
            <img 
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=800&q=80" 
              alt="Volunteer of the Month" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-between h-full py-4">
            
            <div className="mb-12">
              <h3 className="text-[40px] font-display text-ink mb-8 uppercase tracking-[.02em] leading-[1]">Ananya R.</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-yellow"><Star className="w-6 h-6" strokeWidth={1.5} /></div>
                  <span className="text-ink font-medium text-[15px]"><strong className="font-bold uppercase tracking-wide text-xs">Role:</strong> Weekend Volunteer</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-yellow"><Clock className="w-6 h-6" strokeWidth={1.5} /></div>
                  <span className="text-ink font-medium text-[15px]"><strong className="font-bold uppercase tracking-wide text-xs">Volunteered hours:</strong> 45+ Hours</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-yellow"><Heart className="w-6 h-6" strokeWidth={1.5} /></div>
                  <span className="text-ink font-medium text-[15px]"><strong className="font-bold uppercase tracking-wide text-xs">Animals helped:</strong> 20+</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-yellow"><Handshake className="w-6 h-6" strokeWidth={1.5} /></div>
                  <span className="text-ink font-medium text-[15px]"><strong className="font-bold uppercase tracking-wide text-xs">Contribution:</strong> Rescue & Feeding Drives</span>
                </div>
              </div>
            </div>

            <div className="bg-bg border border-line rounded-[16px] p-8 relative">
              <p className="text-ink text-[15px] font-medium italic relative z-10 leading-relaxed">
                "Helping them changed my life. The unconditional love and gratitude you see in their eyes is worth every early morning and late night. They fill my world with so much love."
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
