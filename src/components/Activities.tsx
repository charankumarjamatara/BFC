import React from 'react';
import { Shield, Heart, Sparkles, ArrowRight } from 'lucide-react';

export default function Activities() {
  return (
    <section id="activities" className="section-wrapper bg-bg">
      <div className="section-container">
        
        {/* Signature Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="eyebrow mb-2">Our Activities</span>
            <h2 className="font-display text-[clamp(40px,6.5vw,68px)] text-ink uppercase leading-[.92] tracking-[.01em]">
              What We<br />Do<span className="inline-block w-3 h-3 bg-yellow align-baseline ml-1.5"></span>
            </h2>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-5">
          
          {/* Large Left Card */}
          <div className="brand-card rounded-[20px] flex flex-col overflow-hidden md:row-span-2">
            <div className="relative flex-1 min-h-[240px] md:min-h-[300px] w-full border-b border-line">
              <img 
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80" 
                alt="Animal Rescue"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-5 left-5 bg-ink text-white p-2.5 rounded-full">
                <Shield className="w-5 h-5" />
              </div>
            </div>
            <div className="p-6 lg:p-8 bg-surface shrink-0">
              <h3 className="font-display text-[26px] text-ink mb-3 uppercase tracking-[.02em]">Animal Rescue</h3>
              <p className="text-muted text-[15px] leading-relaxed">
                Rescuing injured and abandoned animals and giving them a chance at a new life. Our rapid response team works around the clock to provide critical care and rehabilitation to those in need.
              </p>
            </div>
          </div>

          {/* Top Right Card */}
          <div className="brand-card rounded-[20px] flex flex-col overflow-hidden">
            <div className="relative h-40 sm:h-48 w-full border-b border-line shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80" 
                alt="Feeding Program"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-ink text-white p-2 rounded-full">
                <Heart className="w-4 h-4" />
              </div>
            </div>
            <div className="p-5 lg:p-6 bg-surface flex-1">
              <h3 className="font-display text-[20px] text-ink mb-2 uppercase tracking-[.02em]">Feeding Program</h3>
              <p className="text-muted text-[14px] leading-relaxed">
                Providing daily meals to 56+ indies and making sure no one sleeps hungry.
              </p>
            </div>
          </div>

          {/* Bottom Right Card */}
          <div className="brand-card rounded-[20px] flex flex-col overflow-hidden">
            <div className="relative h-40 sm:h-48 w-full border-b border-line shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=600&q=80" 
                alt="Collar Drives"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-ink text-white p-2 rounded-full">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
            <div className="p-5 lg:p-6 bg-surface flex-1">
              <h3 className="font-display text-[20px] text-ink mb-2 uppercase tracking-[.02em]">Collar Drives</h3>
              <p className="text-muted text-[14px] leading-relaxed">
                Reflective collars for safety, visibility and a brighter tomorrow.
              </p>
            </div>
          </div>

        </div>

        {/* Global Know More Button */}
        <div className="mt-10 flex justify-center">
          <a href="#contact" className="btn-outline">
            Know More <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
