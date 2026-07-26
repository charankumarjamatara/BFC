import React from 'react';
import { Users, Clock, MapPin, PawPrint, MessageSquare } from 'lucide-react';

export default function Volunteer() {
  return (
    <section id="volunteer" className="py-24 px-6 bg-white border-y border-gray-100">
      <div className="container mx-auto max-w-[1440px]">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-stretch">
          
          {/* Left: Become a volunteer */}
          <div className="flex flex-col justify-between bg-beige/30 rounded-[28px] p-8 md:p-12 border border-gray-100 shadow-inner">
            <div className="space-y-6">
              <span className="text-gold font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                BECOME A VOLUNTEER <Users className="w-4 h-4" />
              </span>
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest leading-tight">
                Join Bangalore's Kindest Rescue Tribe.
              </h2>
              
              <p className="text-muted text-sm md:text-base leading-relaxed">
                Our feeding routes, medical runs, and collar drives are powered entirely by volunteers. Whether you can spare two hours on Saturday mornings or help manage our social adoption leads, your support helps directly.
              </p>
            </div>

            <div className="space-y-4 mt-8 mb-10">
              <div className="flex items-center gap-4">
                <div className="bg-forest text-white p-2 rounded-xl"><Clock className="w-5 h-5" /></div>
                <span className="text-sm font-semibold text-forest">Flexible weekend / weekday slots</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-forest text-white p-2 rounded-xl"><MapPin className="w-5 h-5" /></div>
                <span className="text-sm font-semibold text-forest">Drives organized in multiple Bengaluru zones</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-forest text-white p-2 rounded-xl"><PawPrint className="w-5 h-5 fill-white/10" /></div>
                <span className="text-sm font-semibold text-forest">No prior animal rescue experience required</span>
              </div>
            </div>
            
            <a 
              href="https://wa.me/919845012345" 
              target="_blank" 
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20b958] text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md self-start"
            >
              <MessageSquare className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>

          {/* Right: What Our Volunteers Say */}
          <div className="bg-white rounded-[28px] p-8 md:p-12 border border-gray-100 shadow-md flex flex-col justify-center">
            <h3 className="font-serif font-bold text-3xl text-forest mb-12">What Our Volunteers Say:</h3>
            
            <div className="space-y-8">
              <div className="bg-beige/20 p-8 rounded-2xl border border-gray-50 relative">
                <span className="absolute -top-4 -left-2 text-forest/20 font-serif text-6xl leading-none">“</span>
                <p className="text-charcoal text-lg font-serif italic relative z-10">
                  Volunteering here doesn't just change the animals' lives, it changes yours. You learn patience, empathy, and unconditional love.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center font-bold font-serif">K</div>
                  <div>
                    <h5 className="font-bold text-charcoal text-sm">Kiran R.</h5>
                    <span className="text-xs text-muted">Weekend Rescue Driver</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-beige/20 p-8 rounded-2xl border border-gray-50 relative">
                <span className="absolute -top-4 -left-2 text-forest/20 font-serif text-6xl leading-none">“</span>
                <p className="text-charcoal text-lg font-serif italic relative z-10">
                  I joined to feed street dogs on Sundays, and I ended up finding an entire community of compassionate friends.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold text-charcoal flex items-center justify-center font-bold font-serif">S</div>
                  <div>
                    <h5 className="font-bold text-charcoal text-sm">Sanjay V.</h5>
                    <span className="text-xs text-muted">Feeding Coordinator</span>
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
