import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function VolunteerMonth() {
  return (
    <section className="py-12 md:py-16 px-6 container mx-auto max-w-[1180px]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="eyebrow mb-2">Volunteer of the month</span>
          <h2 className="font-display text-[clamp(40px,6.5vw,68px)] text-ink uppercase leading-[.92] tracking-[.01em]">
            Meet<br />Maya<span className="inline-block w-3 h-3 bg-yellow align-baseline ml-1.5"></span>
          </h2>
        </div>
        <p className="text-muted text-[15px] max-w-sm leading-relaxed md:pb-1">
          A regular two-hour shift became the kind of steady care that changes an animal's whole recovery.
        </p>
      </div>

      {/* Card Split */}
      <div className="grid md:grid-cols-12 overflow-hidden border border-line rounded-[20px]">
        {/* Left Side: Photo */}
        <div className="md:col-span-6 lg:col-span-7 relative min-h-[360px] md:min-h-[460px]">
          <img 
            src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=1000&q=80" 
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

            {/* 2x2 Stats Grid with Divider lines */}
            <div className="border-t border-b border-[#2e2e2e] py-5 my-5 grid grid-cols-2 gap-y-5 gap-x-4">
              <div>
                <div className="font-display text-2xl lg:text-3xl text-yellow">42 hours</div>
                <div className="text-[11px] text-[#8e8e93] uppercase tracking-wider mt-0.5">This month</div>
              </div>

              <div>
                <div className="font-display text-2xl lg:text-3xl text-yellow">11 animals</div>
                <div className="text-[11px] text-[#8e8e93] uppercase tracking-wider mt-0.5">Supported</div>
              </div>

              <div>
                <div className="font-display text-2xl lg:text-3xl text-yellow">3 drives</div>
                <div className="text-[11px] text-[#8e8e93] uppercase tracking-wider mt-0.5">Coordinated</div>
              </div>

              <div>
                <div className="font-display text-2xl lg:text-3xl text-yellow">Since 2025</div>
                <div className="text-[11px] text-[#8e8e93] uppercase tracking-wider mt-0.5">With BFC</div>
              </div>
            </div>
          </div>

          <a 
            href="#volunteer" 
            className="bg-yellow text-ink font-bold text-[12px] uppercase tracking-[.14em] py-3.5 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-[#e6be00] transition-colors mt-2 w-full"
          >
            Become a volunteer <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
