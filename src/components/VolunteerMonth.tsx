import React from 'react';
import { ArrowRight } from 'lucide-react';
import volunteerImg from '../assets/volunteer of the month.jpeg';
import SectionHeader from './SectionHeader';

export default function VolunteerMonth() {
  return (
    <section className="section-wrapper bg-bg">
      <div className="section-container">
        
        <SectionHeader 
          eyebrow="Volunteer of the month"
          headingParts={["Meet", "Neha & Siri"]}
        />

        {/* Card Split */}
        <div className="grid md:grid-cols-12 overflow-hidden border border-line rounded-[20px] bg-surface brand-card p-0">
          {/* Left Side: Photo */}
          <div className="md:col-span-6 lg:col-span-7 h-full min-h-[350px] md:min-h-0 relative">
            <img 
              src={volunteerImg}
              alt="Neha and Siri - Volunteers of the Month" 
              className="absolute inset-0 w-full h-full object-cover block"
            />
          </div>

          {/* Right Side: Ink Card */}
          <div className="md:col-span-6 lg:col-span-5 bg-ink text-white p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <span className="eyebrow mb-6 !text-white !before:bg-yellow">July Spotlight</span>
              
              <div className="flex flex-col gap-6 mb-10">
                {/* Neha */}
                <div>
                  <h3 className="font-display text-[clamp(32px,4vw,42px)] uppercase tracking-[.01em] leading-[.92] mb-1">
                    Neha
                  </h3>
                  <div className="text-yellow text-[13px] tracking-widest uppercase font-bold mb-3">
                    Adoption Coordinator
                  </div>
                  <p className="text-white/70 text-[15px] leading-relaxed">
                    Neha works tirelessly to match every rescue with their perfect forever family, bringing hope to countless animals.
                  </p>
                </div>

                {/* Siri */}
                <div>
                  <h3 className="font-display text-[clamp(32px,4vw,42px)] uppercase tracking-[.01em] leading-[.92] mb-1">
                    Siri
                  </h3>
                  <div className="text-yellow text-[13px] tracking-widest uppercase font-bold mb-3">
                    Field Volunteer
                  </div>
                  <p className="text-white/70 text-[15px] leading-relaxed">
                    Siri is always on the front lines, responding to rescue calls and providing immediate, compassionate care.
                  </p>
                </div>
              </div>
            </div>

            <a 
              href="#volunteer" 
              className="btn-primary w-fit"
            >
              Become a volunteer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
