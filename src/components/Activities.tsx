import React from 'react';
import { Shield, Heart, Sparkles, ArrowRight } from 'lucide-react';

export default function Activities() {
  return (
    <section id="activities" className="py-24 px-6 bg-bg border-t border-line-soft relative">
      <div className="container mx-auto max-w-[1180px]">
        
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="eyebrow mb-6">Our Activities</span>
          <h2 className="font-display text-4xl md:text-[52px] uppercase tracking-[.01em] text-ink">
            What We Do
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="brand-card flex flex-col overflow-hidden">
            <div className="relative h-60 w-full border-b border-line">
              <img 
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80" 
                alt="Animal Rescue"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-ink text-white p-3 rounded-full">
                <Shield className="w-5 h-5" />
              </div>
            </div>
            <div className="p-8 bg-surface">
              <h3 className="font-display text-[26px] text-ink mb-3 uppercase tracking-[.02em]">Animal Rescue</h3>
              <p className="text-muted text-[15px] leading-relaxed mb-6">
                Rescuing injured and abandoned animals and giving them a chance at a new life.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-ink font-bold text-xs uppercase tracking-[.14em] hover:text-muted transition-colors">
                Know More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="brand-card flex flex-col overflow-hidden">
            <div className="relative h-60 w-full border-b border-line">
              <img 
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80" 
                alt="Feeding Program"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-ink text-white p-3 rounded-full">
                <Heart className="w-5 h-5" />
              </div>
            </div>
            <div className="p-8 bg-surface">
              <h3 className="font-display text-[26px] text-ink mb-3 uppercase tracking-[.02em]">Feeding Program</h3>
              <p className="text-muted text-[15px] leading-relaxed mb-6">
                Providing daily meals to 56+ indies and making sure no one sleeps hungry.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-ink font-bold text-xs uppercase tracking-[.14em] hover:text-muted transition-colors">
                Know More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="brand-card flex flex-col overflow-hidden">
            <div className="relative h-60 w-full border-b border-line">
              <img 
                src="https://images.unsplash.com/photo-1541599540903-216a46ca1df0?auto=format&fit=crop&w=600&q=80" 
                alt="Collar Drives"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-ink text-white p-3 rounded-full">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
            <div className="p-8 bg-surface">
              <h3 className="font-display text-[26px] text-ink mb-3 uppercase tracking-[.02em]">Collar Drives</h3>
              <p className="text-muted text-[15px] leading-relaxed mb-6">
                Reflective collars for safety, visibility and a brighter tomorrow.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-ink font-bold text-xs uppercase tracking-[.14em] hover:text-muted transition-colors">
                Know More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
