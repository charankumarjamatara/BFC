import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import impactImg from '../assets/Activities/Animal Rescue.webp';
import feedingImg from '../assets/Activities/Feeding Program.webp';
import volunteerImg from '../assets/Activities/Collar Drives.webp';

export default function ActivitiesPage({ onBack }: { onBack?: () => void }) {
  return (
    <div className="w-full flex flex-col animate-fade-in bg-surface pt-20 md:pt-24">
      
      {/* 1. HEADER */}
      <section className="section-wrapper border-t-0 bg-surface !pt-4 md:!pt-8 !pb-4 md:!pb-8">
        <div className="section-container">
          
          <button 
            onClick={onBack} 
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-muted hover:text-ink transition-colors mb-10 md:mb-14 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          
          <div className="flex flex-col text-left pb-4">
            <span className="eyebrow mb-2">What we do</span>
            <h1 className="font-display text-[clamp(40px,6.5vw,72px)] text-ink uppercase leading-[.92] tracking-[.01em] mb-4">
              Events<span className="inline-block w-3 h-3 bg-yellow align-baseline ml-1.5"></span>
            </h1>
            <p className="text-muted text-[16px] md:text-[18px] leading-relaxed max-w-sm">
              Small actions. Real impact. Here is how BFC helps animals every day.
            </p>
          </div>
          
        </div>
      </section>

      {/* 2. ACTIVITY 01 - ANIMAL RESCUE */}
      <section className="section-wrapper border-t-0 bg-surface border-b border-line-soft !py-6 md:!py-10">
        <div className="section-container">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            
            {/* Image Left */}
            <div className="w-full md:w-[35%] h-[240px] md:h-[320px] rounded-[16px] overflow-hidden">
              <img 
                src={impactImg} 
                alt="Animal Rescue" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Text Right */}
            <div className="w-full md:w-[65%] text-left py-4 md:py-0">
              <h2 className="font-display text-[clamp(40px,5vw,56px)] text-ink uppercase leading-[.92] tracking-[.01em] mb-5">
                Animal<br/>Rescue.
              </h2>
              <p className="text-muted text-[16px] leading-relaxed mb-8 max-w-md">
                Rescuing injured and abandoned animals and giving them a chance at a new life. Our rapid response team works around the clock to provide critical care and rehabilitation to those in need.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ACTIVITY 02 - FEEDING PROGRAM */}
      <section className="section-wrapper bg-surface border-b border-line-soft !py-6 md:!py-10">
        <div className="section-container">
          <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 items-center">
            
            {/* Text Left */}
            <div className="w-full md:w-[65%] text-left py-4 md:py-0">
              <h2 className="font-display text-[clamp(40px,5vw,56px)] text-ink uppercase leading-[.92] tracking-[.01em] mb-5">
                Feeding<br/>Program.
              </h2>
              <p className="text-muted text-[16px] leading-relaxed mb-8 max-w-md">
                Providing daily meals to street animals across the community, ensuring no one sleeps hungry. We believe every life matters and ensure our furry friends get the nutrition they need.
              </p>
            </div>

            {/* Image Right */}
            <div className="w-full md:w-[35%] h-[240px] md:h-[320px] rounded-[16px] overflow-hidden">
              <img 
                src={feedingImg} 
                alt="Feeding Program" 
                className="w-full h-full object-cover" 
              />
            </div>

          </div>
        </div>
      </section>

      {/* 4. ACTIVITY 03 - COLLAR DRIVES */}
      <section className="section-wrapper bg-surface !py-6 md:!py-10">
        <div className="section-container">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            
            {/* Image Left */}
            <div className="w-full md:w-[35%] h-[240px] md:h-[320px] rounded-[16px] overflow-hidden">
              <img 
                src={volunteerImg} 
                alt="Collar Drives" 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Text Right */}
            <div className="w-full md:w-[65%] text-left py-4 md:py-0">
              <h2 className="font-display text-[clamp(40px,5vw,56px)] text-ink uppercase leading-[.92] tracking-[.01em] mb-5">
                Collar<br/>Drives.
              </h2>
              <p className="text-muted text-[16px] leading-relaxed mb-8 max-w-md">
                Reflective collars for safety, visibility and a brighter tomorrow. These collars help prevent accidents at night and keep our street animals safe from traffic.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
