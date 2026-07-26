import React from 'react';
import { Star, Clock, Heart, Handshake } from 'lucide-react';

export default function VolunteerMonth() {
  return (
    <section className="py-24 px-6 container mx-auto max-w-[1440px]">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest uppercase tracking-wide">
          Volunteer of the Month
        </h2>
      </div>

      <div className="bg-white border border-gray-100 shadow-sm rounded-3xl p-8 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: 4:3 Image */}
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=800&q=80" 
              alt="Volunteer of the Month" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Details and Dialogue */}
          <div className="flex flex-col justify-between h-full py-4">
            
            {/* Top: Details */}
            <div className="mb-12">
              <h3 className="text-4xl font-serif font-bold text-forest mb-8">Ananya R.</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-beige p-2 rounded-lg"><Star className="w-5 h-5 text-gold" /></div>
                  <span className="text-charcoal font-medium"><strong className="font-bold">Role:</strong> Weekend Volunteer</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-beige p-2 rounded-lg"><Clock className="w-5 h-5 text-gold" /></div>
                  <span className="text-charcoal font-medium"><strong className="font-bold">Volunteered hours:</strong> 45+ Hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-beige p-2 rounded-lg"><Heart className="w-5 h-5 text-gold" /></div>
                  <span className="text-charcoal font-medium"><strong className="font-bold">Animals helped:</strong> 20+</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-beige p-2 rounded-lg"><Handshake className="w-5 h-5 text-gold" /></div>
                  <span className="text-charcoal font-medium"><strong className="font-bold">Contribution:</strong> Rescue & Feeding Drives</span>
                </div>
              </div>
            </div>

            {/* Bottom: Dialogue Box */}
            <div className="bg-[#FAF8F3] border border-gray-100 rounded-2xl p-8 relative">
              <span className="absolute top-4 left-6 text-forest/20 font-serif text-6xl leading-none">“</span>
              <p className="text-charcoal text-lg font-serif italic relative z-10 pl-6 leading-relaxed">
                Helping them changed my life. The unconditional love and gratitude you see in their eyes is worth every early morning and late night. They fill my world with so much love.
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
