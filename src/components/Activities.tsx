import React, { useEffect, useRef } from 'react';
import { Shield, Heart, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';
import rescueImg from '../assets/Activities/Animal Rescue.webp';
import feedingImg from '../assets/Activities/Feeding Program.webp';
import collarImg from '../assets/Activities/Collar Drives.webp';

interface ActivitiesProps {
  onKnowMore?: () => void;
}

export default function Activities({ onKnowMore }: ActivitiesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // Only scroll if there is horizontal overflow (i.e. mobile view)
        if (scrollWidth > clientWidth) {
          let nextScroll = scrollLeft + clientWidth;
          // If we reached the end, loop back to the start
          if (nextScroll >= scrollWidth - 10) {
            nextScroll = 0;
          }
          scrollRef.current.scrollTo({ left: nextScroll, behavior: 'smooth' });
        }
      }
    }, 3500); // Auto-scroll every 3.5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="activities" className="section-wrapper bg-bg">
      <div className="section-container">
        
        <SectionHeader 
          eyebrow="Our Activities"
          headingParts={["What We", "Do"]}
        />
        
        <div 
          ref={scrollRef}
          className="flex items-stretch md:grid flex-nowrap md:grid-cols-2 gap-5 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 hide-scrollbar" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          
          {/* Large Left Card */}
          <div className="brand-card flex flex-col md:row-span-2 min-w-full md:min-w-0 snap-start">
            <div className="relative flex-1 min-h-[280px] md:min-h-[300px] w-full border-b border-line">
              <img 
                src={rescueImg} 
                alt="Animal Rescue"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6 lg:p-8 shrink-0">
              <h3 className="font-display text-[26px] text-ink mb-3 uppercase tracking-[.02em]">Animal Rescue</h3>
              <p className="text-muted text-[15px] leading-relaxed">
                Rescuing injured and abandoned animals and giving them a chance at a new life. Our rapid response team works around the clock to provide critical care and rehabilitation to those in need.
              </p>
            </div>
          </div>

          {/* Top Right Card */}
          <div className="brand-card flex flex-col min-w-full md:min-w-0 snap-start">
            <div className="relative flex-1 min-h-[280px] md:min-h-[160px] w-full border-b border-line">
              <img 
                src={feedingImg} 
                alt="Feeding Program"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-5 lg:p-6 shrink-0">
              <h3 className="font-display text-[20px] text-ink mb-2 uppercase tracking-[.02em]">Feeding Program</h3>
              <p className="text-muted text-[14.5px] leading-relaxed">
                Providing daily meals to 56+ indies and making sure no one sleeps hungry.
              </p>
            </div>
          </div>

          {/* Bottom Right Card */}
          <div className="brand-card flex flex-col min-w-full md:min-w-0 snap-start">
            <div className="relative flex-1 min-h-[280px] md:min-h-[160px] w-full border-b border-line">
              <img 
                src={collarImg} 
                alt="Collar Drives"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-5 lg:p-6 shrink-0">
              <h3 className="font-display text-[20px] text-ink mb-2 uppercase tracking-[.02em]">Collar Drives</h3>
              <p className="text-muted text-[14.5px] leading-relaxed">
                Reflective collars for safety, visibility and a brighter tomorrow.
              </p>
            </div>
          </div>

        </div>

        {/* Global Know More Button */}
        <div className="mt-6 md:mt-10 flex justify-center">
          <button onClick={onKnowMore} className="btn-outline">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}
