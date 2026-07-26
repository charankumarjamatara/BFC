import React from 'react';
import { Shield, Heart, Sparkles, ArrowRight } from 'lucide-react';

export default function Activities() {
  return (
    <section id="activities" className="py-12 md:py-16 px-6 bg-bg border-t border-line-soft relative">
      <div className="container mx-auto max-w-[1180px]">
        
        {/* Signature Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="eyebrow mb-2">Our Activities</span>
            <h2 className="font-display text-[clamp(40px,6.5vw,68px)] text-ink uppercase leading-[.92] tracking-[.01em]">
              What We<br />Do<span className="inline-block w-3 h-3 bg-yellow align-baseline ml-1.5"></span>
            </h2>
          </div>
          <p className="text-muted text-[15px] max-w-sm leading-relaxed md:pb-1">
            From 24/7 animal rescue and daily feeding runs to reflective collar drives that save street animals from night accidents.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-5">
          
          <div className="brand-card rounded-[20px] flex flex-col overflow-hidden">
            <div className="relative h-56 w-full border-b border-line">
              <img 
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80" 
                alt="Animal Rescue"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-ink text-white p-2.5 rounded-full">
                <Shield className="w-4 h-4" />
              </div>
            </div>
            <div className="p-6 lg:p-8 bg-surface flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-[24px] text-ink mb-2 uppercase tracking-[.02em]">Animal Rescue</h3>
                <p className="text-muted text-[14px] leading-relaxed mb-5">
                  Rescuing injured and abandoned animals and giving them a chance at a new life.
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 text-ink font-bold text-xs uppercase tracking-[.14em] hover:text-muted transition-colors">
                Know More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="brand-card rounded-[20px] flex flex-col overflow-hidden">
            <div className="relative h-56 w-full border-b border-line">
              <img 
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80" 
                alt="Feeding Program"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-ink text-white p-2.5 rounded-full">
                <Heart className="w-4 h-4" />
              </div>
            </div>
            <div className="p-6 lg:p-8 bg-surface flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-[24px] text-ink mb-2 uppercase tracking-[.02em]">Feeding Program</h3>
                <p className="text-muted text-[14px] leading-relaxed mb-5">
                  Providing daily meals to 56+ indies and making sure no one sleeps hungry.
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 text-ink font-bold text-xs uppercase tracking-[.14em] hover:text-muted transition-colors">
                Know More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="brand-card rounded-[20px] flex flex-col overflow-hidden">
            <div className="relative h-56 w-full border-b border-line">
              <img 
                src="https://images.unsplash.com/photo-1541599540903-216a46ca1df0?auto=format&fit=crop&w=600&q=80" 
                alt="Collar Drives"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-ink text-white p-2.5 rounded-full">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
            <div className="p-6 lg:p-8 bg-surface flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-[24px] text-ink mb-2 uppercase tracking-[.02em]">Collar Drives</h3>
                <p className="text-muted text-[14px] leading-relaxed mb-5">
                  Reflective collars for safety, visibility and a brighter tomorrow.
                </p>
              </div>
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
