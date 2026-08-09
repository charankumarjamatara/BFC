import React from 'react';
import { ArrowRight } from 'lucide-react';
import volunteerImg from '../assets/volunteer.jpg';

export default function VolunteerMonth() {
  return (
    <section className="section-wrapper">
      <div className="section-container">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="eyebrow mb-2">Volunteer of the month</span>
          <h2 className="font-display text-[clamp(40px,6.5vw,68px)] text-ink uppercase leading-[.92] tracking-[.01em]">
            Meet<br />Maya<span className="inline-block w-3 h-3 bg-yellow align-baseline ml-1.5"></span>
          </h2>
        </div>
      </div>

      {/* Card Split */}
      <div className="grid md:grid-cols-12 overflow-hidden border border-line rounded-[20px]">
        {/* Left Side: Photo */}
        <div className="md:col-span-6 lg:col-span-7 relative aspect-[4/3]">
          <img 
            src={volunteerImg}
            alt="Maya Prakash - Volunteer of the Month" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Ink Card */}
        <div className="md:col-span-6 lg:col-span-5 bg-ink text-white p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <span className="eyebrow mb-3 text-white">July Spotlight</span>
            
            <h3 className="font-display text-4xl lg:text-5xl uppercase tracking-[.01em] leading-[.92] mb-3">
              Maya<br />
              <span className="text-yellow">Prakash</span>
            </h3>

            <p className="text-[#bfc1c5] text-[14px] leading-relaxed mb-6">
              Maya shows up before work to walk, feed and calm the newest arrivals. Her gentleness gives them a reason to trust people again.
            </p>
          </div>

          <a 
            href="#volunteer" 
            className="btn-primary w-full mt-2"
          >
            Become a volunteer <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
