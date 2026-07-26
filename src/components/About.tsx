import React from 'react';
import { Target, Eye, Heart, Handshake } from 'lucide-react';

export default function About() {
  return (
    <div className="lg:col-span-6 flex flex-col h-full bg-white rounded-[32px] p-8 lg:p-12 border border-gray-100 shadow-sm">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest leading-[1.2]">
          How we are different<br/>from other NGOs.
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
        
        {/* Mission */}
        <div className="flex flex-col gap-4">
          <div className="w-14 h-14 shrink-0 rounded-xl bg-beige flex items-center justify-center text-gold shadow-sm border border-gold/10">
            <Target className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-xl text-forest mb-2">Our Mission</h3>
            <p className="text-charcoal text-sm leading-relaxed">
              To rescue, rehabilitate and find loving homes for street animals while building a cruelty-free community.
            </p>
          </div>
        </div>
        
        {/* Vision */}
        <div className="flex flex-col gap-4">
          <div className="w-14 h-14 shrink-0 rounded-xl bg-beige flex items-center justify-center text-gold shadow-sm border border-gold/10">
            <Eye className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-xl text-forest mb-2">Our Vision</h3>
            <p className="text-charcoal text-sm leading-relaxed">
              A world where every animal is treated with compassion, respect and love.
            </p>
          </div>
        </div>
        
        {/* Approach */}
        <div className="flex flex-col gap-4">
          <div className="w-14 h-14 shrink-0 rounded-xl bg-beige flex items-center justify-center text-gold shadow-sm border border-gold/10">
            <Heart className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-xl text-forest mb-2">Our Approach</h3>
            <p className="text-charcoal text-sm leading-relaxed">
              We focus on rescue, medical care, feeding, adoption and awareness through community participation.
            </p>
          </div>
        </div>
        
        {/* Promise */}
        <div className="flex flex-col gap-4">
          <div className="w-14 h-14 shrink-0 rounded-xl bg-beige flex items-center justify-center text-gold shadow-sm border border-gold/10">
            <Handshake className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-xl text-forest mb-2">Our Promise</h3>
            <p className="text-charcoal text-sm leading-relaxed">
              We are volunteer-driven and committed to transparency, compassion and continuous impact.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
