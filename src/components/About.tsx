import React from 'react';
import { Target, Eye, Heart, Handshake } from 'lucide-react';

export default function About() {
  return (
    <div className="lg:col-span-6 flex flex-col h-full bg-surface rounded-[20px] p-7 lg:p-10 border border-line">
      {/* Title with yellow period & bar */}
      <div className="mb-8">
        <h2 className="text-3xl lg:text-[40px] font-display text-ink uppercase leading-[.95] tracking-[.01em]">
          How We Are Different<br />
          From Other NGOs<span className="inline-block w-3 h-3 bg-yellow align-baseline ml-1.5"></span>
        </h2>
        <div className="w-12 h-1 bg-yellow mt-3"></div>
      </div>
      
      {/* 2x2 Grid */}
      <div className="grid md:grid-cols-2 gap-x-6 gap-y-8">
        
        {/* Mission */}
        <div className="flex flex-col gap-2.5">
          <div className="w-12 h-12 rounded-full bg-[#FFF9E6] border border-[#FFE8A3] flex items-center justify-center text-yellow">
            <Target className="w-5 h-5 text-[#E6B800]" strokeWidth={2} />
          </div>
          <div>
            <h3 className="font-display text-lg text-ink uppercase tracking-wider mb-1.5">Our Mission</h3>
            <p className="text-muted text-[13px] leading-relaxed">
              To rescue, rehabilitate and find loving homes for street animals while building a cruelty-free community.
            </p>
          </div>
        </div>
        
        {/* Vision */}
        <div className="flex flex-col gap-2.5">
          <div className="w-12 h-12 rounded-full bg-[#FFF9E6] border border-[#FFE8A3] flex items-center justify-center text-yellow">
            <Eye className="w-5 h-5 text-[#E6B800]" strokeWidth={2} />
          </div>
          <div>
            <h3 className="font-display text-lg text-ink uppercase tracking-wider mb-1.5">Our Vision</h3>
            <p className="text-muted text-[13px] leading-relaxed">
              A world where every animal is treated with compassion, respect and love.
            </p>
          </div>
        </div>
        
        {/* Approach */}
        <div className="flex flex-col gap-2.5">
          <div className="w-12 h-12 rounded-full bg-[#FFF9E6] border border-[#FFE8A3] flex items-center justify-center text-yellow">
            <Heart className="w-5 h-5 text-[#E6B800]" strokeWidth={2} />
          </div>
          <div>
            <h3 className="font-display text-lg text-ink uppercase tracking-wider mb-1.5">Our Approach</h3>
            <p className="text-muted text-[13px] leading-relaxed">
              We focus on rescue, medical care, feeding, adoption and awareness through community participation.
            </p>
          </div>
        </div>
        
        {/* Promise */}
        <div className="flex flex-col gap-2.5">
          <div className="w-12 h-12 rounded-full bg-[#FFF9E6] border border-[#FFE8A3] flex items-center justify-center text-yellow">
            <Handshake className="w-5 h-5 text-[#E6B800]" strokeWidth={2} />
          </div>
          <div>
            <h3 className="font-display text-lg text-ink uppercase tracking-wider mb-1.5">Our Promise</h3>
            <p className="text-muted text-[13px] leading-relaxed">
              We are volunteer-driven and committed to transparency, compassion and continuous impact.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
