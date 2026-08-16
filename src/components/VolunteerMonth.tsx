import React from 'react';
import { ArrowRight } from 'lucide-react';
import volunteerImg from '../assets/volunteer.jpg';
import SectionHeader from './SectionHeader';

export default function VolunteerMonth() {
  return (
    <section className="section-wrapper bg-bg">
      <div className="section-container">
        
        <SectionHeader 
          eyebrow="Volunteer of the month"
          headingParts={["Meet", "Maya"]}
        />

        {/* Card Split */}
        <div className="grid md:grid-cols-12 overflow-hidden border border-line rounded-[20px] bg-surface brand-card p-0">
          {/* Left Side: Photo */}
          <div className="md:col-span-6 lg:col-span-7 relative aspect-[4/3]">
            <img 
              src={volunteerImg}
              alt="Maya Prakash - Volunteer of the Month" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Ink Card */}
          <div className="md:col-span-6 lg:col-span-5 bg-ink text-white p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <span className="eyebrow mb-4 !text-white !before:bg-yellow">July Spotlight</span>
              
              <h3 className="font-display text-[clamp(32px,4vw,48px)] uppercase tracking-[.01em] leading-[.92] mb-4">
                Maya<br />
                <span className="text-yellow">Prakash</span>
              </h3>

              <p className="text-white/70 text-[15px] leading-relaxed mb-10">
                Maya shows up before work to walk, feed and calm the newest arrivals. Her gentleness gives them a reason to trust people again.
              </p>
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
