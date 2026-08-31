import React from 'react';
import { ArrowLeft } from 'lucide-react';

import impactImg from '../assets/Activities/Animal Rescue.webp';
import feedingImg from '../assets/Activities/Feeding Program.webp';
import volunteerImg from '../assets/Activities/Collar Drives.webp';
import medicalImg from '../assets/Activities/Medical care.webp';
import vaccinationImg from '../assets/Activities/Vacination.webp';

export default function ActivitiesPage({ onBack }: { onBack?: () => void }) {
  return (
    <div className="w-full flex flex-col animate-fade-in bg-surface pt-20 md:pt-24 pb-16 md:pb-24">
      
      {/* 1. HEADER & SHOWCASE */}
      <section className="section-wrapper border-t-0 bg-surface !pt-4 md:!pt-8 !pb-0">
        <div className="section-container">
          
          <button 
            onClick={onBack} 
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-muted hover:text-ink transition-colors mb-10 md:mb-14 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          
          {/* Header Introduction - 2-column on desktop */}
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12 mb-12 md:mb-16">
            <div className="w-full md:w-[45%] lg:w-[50%]">
              <span className="eyebrow mb-3 block">What we do</span>
              <h1 className="font-display text-[clamp(40px,6.5vw,72px)] text-ink uppercase leading-[.92] tracking-[.01em]">
                Events<span className="inline-block w-3 h-3 md:w-4 md:h-4 bg-yellow align-baseline ml-1.5 md:ml-2"></span>
              </h1>
            </div>
            <div className="w-full md:w-[55%] lg:w-[50%] pb-1 md:pb-3">
              {/* Removed intro paragraph text */}
            </div>
          </div>
          
          {/* ASYMMETRIC MASONRY GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            
            {/* --- TOP ROW --- */}
            {/* FEATURED: ANIMAL RESCUE */}
            <div className="lg:col-span-8 flex flex-col group">
              <div className="relative w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-[16px] overflow-hidden mb-5 md:mb-6">
                <img 
                  src={impactImg} 
                  alt="Animal Rescue" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="flex flex-col">
                <span className="eyebrow !text-[11px] mb-3">Rescue Operations</span>
                <h2 className="font-display text-[clamp(40px,5vw,64px)] text-ink uppercase leading-[.92] tracking-[.01em] mb-4">
                  Animal Rescue.
                </h2>
                <p className="text-muted text-[16px] md:text-[18px] leading-relaxed max-w-xl">
                  Rescuing injured and abandoned animals and giving them a chance at a new life. Our rapid response team works around the clock to provide critical care and rehabilitation to those in need.
                </p>
              </div>
            </div>

            {/* SUPPORTING ACTIVITIES (FEEDING & COLLAR) */}
            <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 md:gap-6">
              
              {/* FEEDING PROGRAM */}
              <div className="flex flex-col group">
                <div className="relative w-full h-[240px] md:h-[220px] lg:h-[270px] rounded-[16px] overflow-hidden mb-4 md:mb-5">
                  <img 
                    src={feedingImg} 
                    alt="Feeding Program" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                <div className="flex flex-col">
                  <span className="eyebrow !text-[11px] mb-2">Community</span>
                  <h3 className="font-display text-[28px] md:text-[32px] text-ink uppercase leading-[.92] tracking-[.01em] mb-2">
                    Feeding<br/>Program.
                  </h3>
                  <p className="text-muted text-[14px] md:text-[15px] leading-relaxed">
                    Providing daily meals to street animals across the community, ensuring no one sleeps hungry.
                  </p>
                </div>
              </div>

              {/* COLLAR DRIVES */}
              <div className="flex flex-col group">
                <div className="relative w-full h-[240px] md:h-[220px] lg:h-[270px] rounded-[16px] overflow-hidden mb-4 md:mb-5">
                  <img 
                    src={volunteerImg} 
                    alt="Collar Drives" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                <div className="flex flex-col">
                  <span className="eyebrow !text-[11px] mb-2">Safety</span>
                  <h3 className="font-display text-[28px] md:text-[32px] text-ink uppercase leading-[.92] tracking-[.01em] mb-2">
                    Collar<br/>Drives.
                  </h3>
                  <p className="text-muted text-[14px] md:text-[15px] leading-relaxed">
                    Reflective collars for safety, visibility and a brighter tomorrow. These help prevent accidents at night.
                  </p>
                </div>
              </div>

            </div>
            
            {/* --- BOTTOM ROW --- */}
            {/* MEDICAL CARE */}
            <div className="lg:col-span-7 flex flex-col group mt-2 md:mt-4 lg:mt-6">
              <div className="relative w-full h-[280px] sm:h-[320px] md:h-[400px] lg:h-[480px] rounded-[16px] overflow-hidden mb-4 md:mb-5">
                <img 
                  src={medicalImg} 
                  alt="Medical Care" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="flex flex-col">
                <span className="eyebrow !text-[11px] mb-2">Healthcare</span>
                <h3 className="font-display text-[28px] md:text-[36px] text-ink uppercase leading-[.92] tracking-[.01em] mb-2">
                  Medical Care.
                </h3>
                <p className="text-muted text-[14px] md:text-[16px] leading-relaxed max-w-md">
                  Providing life-saving treatments and surgeries to critically injured animals. Ensuring a safe and speedy recovery.
                </p>
              </div>
            </div>

            {/* VACCINATION */}
            <div className="lg:col-span-5 flex flex-col group mt-2 md:mt-4 lg:mt-6">
              <div className="relative w-full h-[280px] sm:h-[320px] md:h-[400px] lg:h-[480px] rounded-[16px] overflow-hidden mb-4 md:mb-5">
                <img 
                  src={vaccinationImg} 
                  alt="Vaccination" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="flex flex-col">
                <span className="eyebrow !text-[11px] mb-2">Prevention</span>
                <h3 className="font-display text-[28px] md:text-[36px] text-ink uppercase leading-[.92] tracking-[.01em] mb-2">
                  Vaccination.
                </h3>
                <p className="text-muted text-[14px] md:text-[16px] leading-relaxed max-w-md">
                  Protecting strays from fatal diseases through regular anti-rabies and multi-vaccination drives.
                </p>
              </div>
            </div>

          </div>
          
        </div>
      </section>

    </div>
  );
}

