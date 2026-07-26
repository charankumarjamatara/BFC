import React from 'react';
import { Target, Eye, Heart, Handshake } from 'lucide-react';

export default function About() {
  return (
    <div className="lg:col-span-6 flex flex-col h-full brand-card p-8 lg:p-12">
      <div className="mb-12">
        <h2 className="text-3xl md:text-[40px] font-display text-ink uppercase leading-[1.1]">
          How we are different<br/>from other NGOs.
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
        <div className="flex flex-col gap-4">
          <div className="text-yellow">
            <Target className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-sans font-bold text-[16px] text-ink mb-2">Our Mission</h3>
            <p className="text-muted text-[14px] leading-relaxed">
              To rescue, rehabilitate and find loving homes for street animals while building a cruelty-free community.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="text-yellow">
            <Eye className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-sans font-bold text-[16px] text-ink mb-2">Our Vision</h3>
            <p className="text-muted text-[14px] leading-relaxed">
              A world where every animal is treated with compassion, respect and love.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="text-yellow">
            <Heart className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-sans font-bold text-[16px] text-ink mb-2">Our Approach</h3>
            <p className="text-muted text-[14px] leading-relaxed">
              We focus on rescue, medical care, feeding, adoption and awareness through community participation.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="text-yellow">
            <Handshake className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-sans font-bold text-[16px] text-ink mb-2">Our Promise</h3>
            <p className="text-muted text-[14px] leading-relaxed">
              We are volunteer-driven and committed to transparency, compassion and continuous impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
