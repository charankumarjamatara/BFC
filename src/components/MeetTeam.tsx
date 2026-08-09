import React from 'react';

export default function MeetTeam({ fullPage = false }: { fullPage?: boolean }) {
  return (
    <div className={`${fullPage ? 'max-w-4xl mx-auto w-full' : 'lg:col-span-6'} flex flex-col justify-between h-full bg-surface rounded-[20px] p-7 lg:p-10 border border-line relative`}>
      <div>
        {/* Yellow Dot & Title */}
        <div className="mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-yellow inline-block mb-2"></span>
          <h2 className="text-3xl lg:text-[40px] font-display text-ink uppercase leading-[.95] tracking-[.01em]">
            Meet Our Team<span className="inline-block w-3 h-3 bg-yellow align-baseline ml-1.5"></span>
          </h2>
        </div>
        
        {/* Top Row: Founder and Co-founder Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-5">
          
          {/* Founder */}
          <div className="bg-bg rounded-[16px] p-4 lg:p-5 border border-line-soft flex flex-col justify-between">
            <div className="flex items-center gap-3.5">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" 
                alt="Aishwarya S."
                className="w-14 h-14 rounded-full object-cover shrink-0 border-4 border-yellow"
              />
              <div>
                <span className="text-yellow text-[10px] font-bold tracking-widest uppercase block mb-0.5">Founder</span>
                <h4 className="font-display text-lg text-ink uppercase leading-none">Aishwarya S.</h4>
                <div className="w-7 h-0.5 bg-yellow mt-1"></div>
              </div>
            </div>
            <p className="text-[12.5px] text-muted leading-relaxed italic mt-4 font-serif">
              "We are their voice."
            </p>
          </div>
          
          {/* Co-founder */}
          <div className="bg-bg rounded-[16px] p-4 lg:p-5 border border-line-soft flex flex-col justify-between">
            <div className="flex items-center gap-3.5">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80" 
                alt="Rohan Verma"
                className="w-14 h-14 rounded-full object-cover shrink-0 border-4 border-yellow"
              />
              <div>
                <span className="text-yellow text-[10px] font-bold tracking-widest uppercase block mb-0.5">Co-Founder</span>
                <h4 className="font-display text-lg text-ink uppercase leading-none">Rohan Verma</h4>
                <div className="w-7 h-0.5 bg-yellow mt-1"></div>
              </div>
            </div>
            <p className="text-[12.5px] text-muted leading-relaxed italic mt-4 font-serif">
              "Community makes it work."
            </p>
          </div>

        </div>
        
        {/* Bottom Row: Managing Team Card */}
        <div className="bg-bg rounded-[16px] p-5 border border-line-soft">
          <h3 className="font-display text-xl text-ink uppercase text-center mb-4 tracking-[.02em]">
            Managing Team<span className="inline-block w-2.5 h-2.5 bg-yellow align-baseline ml-1"></span>
          </h3>
          
          <div className="grid grid-cols-3 divide-x divide-dashed divide-line">
            <div className="flex flex-col items-center text-center px-1.5">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80" 
                alt="Priya S."
                className="w-12 h-12 rounded-full object-cover border-4 border-yellow mb-2"
              />
              <h5 className="font-display text-sm text-ink uppercase tracking-wide">Priya S.</h5>
              <span className="text-[9.5px] text-muted uppercase tracking-widest font-bold mt-0.5">Rescue</span>
            </div>
            
            <div className="flex flex-col items-center text-center px-1.5">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" 
                alt="Arjun M."
                className="w-12 h-12 rounded-full object-cover border-4 border-yellow mb-2"
              />
              <h5 className="font-display text-sm text-ink uppercase tracking-wide">Arjun M.</h5>
              <span className="text-[9.5px] text-muted uppercase tracking-widest font-bold mt-0.5">Logistics</span>
            </div>
            
            <div className="flex flex-col items-center text-center px-1.5">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" 
                alt="Sneha K."
                className="w-12 h-12 rounded-full object-cover border-4 border-yellow mb-2"
              />
              <h5 className="font-display text-sm text-ink uppercase tracking-wide">Sneha K.</h5>
              <span className="text-[9.5px] text-muted uppercase tracking-widest font-bold mt-0.5">Medical</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
