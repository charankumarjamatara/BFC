import React from 'react';

export default function MeetTeam() {
  return (
    <div className="lg:col-span-6 flex flex-col h-full bg-[#FAF8F3] rounded-[32px] p-8 lg:p-12 border border-gray-100 shadow-sm">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest leading-[1.2]">
          Meet Our Team.
        </h2>
      </div>
      
      <div className="flex flex-col gap-6 flex-1">
        
        {/* Top Row: Founder and Co-founder */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Founder Box */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" 
                alt="Founder"
                className="w-16 h-16 rounded-full object-cover shrink-0 bg-gray-100"
              />
              <div>
                <h4 className="font-serif font-bold text-lg text-charcoal">Founder</h4>
                <p className="text-sm font-bold text-forest mt-1">Aishwarya S.</p>
              </div>
            </div>
            <div className="h-[1px] bg-gray-100 w-full"></div>
            <p className="text-xs text-charcoal leading-relaxed italic">
              "We are their voice."
            </p>
          </div>
          
          {/* Co-Founder Box */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80" 
                alt="Co-Founder"
                className="w-16 h-16 rounded-full object-cover shrink-0 bg-gray-100"
              />
              <div>
                <h4 className="font-serif font-bold text-lg text-charcoal">Co-founder</h4>
                <p className="text-sm font-bold text-forest mt-1">Rohan Verma</p>
              </div>
            </div>
            <div className="h-[1px] bg-gray-100 w-full"></div>
            <p className="text-xs text-charcoal leading-relaxed italic">
              "Community makes it work."
            </p>
          </div>
        </div>
        
        {/* Bottom Row: Managing Team Box */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-sm flex flex-col justify-center w-full mt-2">
          <h4 className="font-serif font-bold text-lg text-charcoal mb-6">Managing Team</h4>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center space-y-3 text-center">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80" 
                alt="Team Member"
                className="w-14 h-14 bg-gray-100 object-cover rounded-full"
              />
              <div className="h-[1px] bg-gray-100 w-full"></div>
              <div>
                <p className="text-xs font-bold text-forest">Priya S.</p>
                <p className="text-[10px] text-muted mt-0.5">Rescue</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3 text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" 
                alt="Team Member"
                className="w-14 h-14 bg-gray-100 object-cover rounded-full"
              />
              <div className="h-[1px] bg-gray-100 w-full"></div>
              <div>
                <p className="text-xs font-bold text-forest">Arjun M.</p>
                <p className="text-[10px] text-muted mt-0.5">Logistics</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3 text-center">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" 
                alt="Team Member"
                className="w-14 h-14 bg-gray-100 object-cover rounded-full"
              />
              <div className="h-[1px] bg-gray-100 w-full"></div>
              <div>
                <p className="text-xs font-bold text-forest">Sneha K.</p>
                <p className="text-[10px] text-muted mt-0.5">Medical</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
