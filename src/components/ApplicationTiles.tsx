import React, { useState } from 'react';
import { ArrowRight, AlertTriangle, Heart, Sparkles, Check } from 'lucide-react';

export default function ApplicationTiles() {
  const [copiedRescue, setCopiedRescue] = useState(false);

  return (
    <section className="py-20 px-6 container mx-auto max-w-[1180px]">
      <div className="flex flex-col items-center mb-12 text-center">
        <span className="eyebrow mb-4">In The Wild</span>
        <h2 className="font-display text-4xl md:text-[52px] uppercase tracking-[.01em] text-ink">
          One System · Three Roles
        </h2>
        <p className="text-muted text-[15px] max-w-lg mt-3">
          Each color stays in its lane: Signal Coral for urgency, Hope Teal for adoption, Electric Yellow for brand energy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Tile 1: Rescue Alert (Signal Coral Accent on Ink) */}
        <div className="bg-ink rounded-[20px] p-8 min-h-[420px] flex flex-col justify-between border border-line relative overflow-hidden group hover:border-coral transition-colors">
          <div>
            <span className="bg-coral text-[#3a0f06] font-bold text-[10px] tracking-[.16em] uppercase px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-8">
              <AlertTriangle className="w-3.5 h-3.5" /> Rescue Alert
            </span>
            <h3 className="font-display text-4xl text-white uppercase leading-[.92] tracking-[.01em] mb-4">
              Bruno needs<br />surgery <em className="not-italic text-coral">today</em>
            </h3>
            <p className="text-[#bfc1c5] text-[14px] leading-relaxed">
              ₹40,000 to get him walking again after an emergency accident in Indiranagar.
            </p>
          </div>

          <div className="mt-8">
            <a 
              href="#donate" 
              className="bg-coral text-[#3a0f06] font-bold text-[12px] tracking-[.1em] uppercase py-3.5 px-6 rounded-full inline-flex items-center gap-2 hover:bg-[#D6432A] transition-colors"
            >
              Donate now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Tile 2: Adoption (Hope Teal Accent) */}
        <div className="bg-teal rounded-[20px] p-8 min-h-[420px] flex flex-col justify-between border border-line relative overflow-hidden group hover:border-[#0a574e] transition-colors">
          <div>
            <span className="bg-[#0a574e] text-[#8fe0d6] font-bold text-[10px] tracking-[.16em] uppercase px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-8">
              <Heart className="w-3.5 h-3.5" /> Adoption
            </span>
            <h3 className="font-display text-4xl text-[#04332d] uppercase leading-[.92] tracking-[.01em] mb-4">
              Meet Laika.<br />Ready for home.
            </h3>
            <p className="text-[#0a574e] text-[14px] leading-relaxed font-medium">
              Vaccinated · Gentle · Loves kids. Looking for a forever family in Bengaluru.
            </p>
          </div>

          <div className="mt-8">
            <a 
              href="#contact" 
              className="bg-ink text-teal font-bold text-[12px] tracking-[.1em] uppercase py-3.5 px-6 rounded-full inline-flex items-center gap-2 hover:bg-[#222] transition-colors"
            >
              Adopt her <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Tile 3: Awareness / Movement (Electric Yellow Accent) */}
        <div className="bg-yellow rounded-[20px] p-8 min-h-[420px] flex flex-col justify-between border border-line relative overflow-hidden group hover:border-ink transition-colors">
          <div>
            <span className="bg-ink text-yellow font-bold text-[10px] tracking-[.16em] uppercase px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-8">
              <Sparkles className="w-3.5 h-3.5" /> Movement
            </span>
            <h3 className="font-display text-5xl text-ink uppercase leading-[.92] tracking-[.01em] mb-4">
              Every<br />life<br />matters
            </h3>
            <p className="text-[#5c4d00] text-[14px] leading-relaxed font-medium">
              A cruelty-free world starts in our neighborhoods. Build it with us.
            </p>
          </div>

          <div className="mt-8">
            <a 
              href="#volunteer" 
              className="bg-ink text-yellow font-bold text-[12px] tracking-[.1em] uppercase py-3.5 px-6 rounded-full inline-flex items-center gap-2 hover:bg-[#222] transition-colors"
            >
              Join BFC <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
