import React from 'react';

export default function MeetTeam() {
  return (
    <div className="lg:col-span-6 flex flex-col h-full brand-card p-8 lg:p-12 border border-line bg-surface">
      <div className="mb-12">
        <h2 className="text-3xl md:text-[40px] font-display text-ink uppercase leading-[1.1] tracking-[.01em]">
          Meet Our Team
        </h2>
      </div>
      
      <div className="flex flex-col gap-6 flex-1">
        
        {/* Top Row: Founder and Co-founder */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-bg rounded-[16px] p-6 border border-line flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" 
                alt="Founder"
                className="w-16 h-16 rounded-full object-cover shrink-0 bg-line"
              />
              <div>
                <h4 className="font-display text-xl text-ink uppercase tracking-[.02em]">Founder</h4>
                <p className="text-sm font-bold text-ink uppercase mt-1">Aishwarya S.</p>
              </div>
            </div>
            <div className="h-[1px] bg-line w-full"></div>
            <p className="text-xs text-muted leading-relaxed italic font-medium">
              "We are their voice."
            </p>
          </div>
          
          <div className="bg-bg rounded-[16px] p-6 border border-line flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80" 
                alt="Co-Founder"
                className="w-16 h-16 rounded-full object-cover shrink-0 bg-line"
              />
              <div>
                <h4 className="font-display text-xl text-ink uppercase tracking-[.02em]">Co-founder</h4>
                <p className="text-sm font-bold text-ink uppercase mt-1">Rohan Verma</p>
              </div>
            </div>
            <div className="h-[1px] bg-line w-full"></div>
            <p className="text-xs text-muted leading-relaxed italic font-medium">
              "Community makes it work."
            </p>
          </div>
        </div>
        
        {/* Bottom Row: Managing Team Box */}
        <div className="bg-bg rounded-[16px] p-6 border border-line flex flex-col justify-center w-full mt-2">
          <h4 className="font-display text-2xl text-ink uppercase mb-6 text-center tracking-[.02em]">Managing Team</h4>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center space-y-3 text-center">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80" 
                alt="Team Member"
                className="w-14 h-14 bg-line object-cover rounded-full"
              />
              <div className="h-[1px] bg-line w-full"></div>
              <div>
                <p className="text-[13px] font-bold text-ink uppercase tracking-wide">Priya S.</p>
                <p className="text-[10px] text-muted mt-1 uppercase tracking-wider">Rescue</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3 text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" 
                alt="Team Member"
                className="w-14 h-14 bg-line object-cover rounded-full"
              />
              <div className="h-[1px] bg-line w-full"></div>
              <div>
                <p className="text-[13px] font-bold text-ink uppercase tracking-wide">Arjun M.</p>
                <p className="text-[10px] text-muted mt-1 uppercase tracking-wider">Logistics</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3 text-center">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" 
                alt="Team Member"
                className="w-14 h-14 bg-line object-cover rounded-full"
              />
              <div className="h-[1px] bg-line w-full"></div>
              <div>
                <p className="text-[13px] font-bold text-ink uppercase tracking-wide">Sneha K.</p>
                <p className="text-[10px] text-muted mt-1 uppercase tracking-wider">Medical</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
