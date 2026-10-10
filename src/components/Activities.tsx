import React from 'react';
import { Shield, Heart, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';
import rescueImg from '../assets/Activities/Animal Rescue.webp';
import feedingImg from '../assets/Activities/Feeding Program.webp';
import collarImg from '../assets/Activities/Collar Drives.webp';
import InfiniteCarousel from './InfiniteCarousel';

interface ActivitiesProps {
  onKnowMore?: () => void;
}

export default function Activities({ onKnowMore }: ActivitiesProps) {
  return (
    <section id="activities" className="section-wrapper bg-bg">
      <div className="section-container">
        
        <SectionHeader 
          eyebrow="Our Activities"
          headingParts={["What We", "Do"]}
        />
        
        <InfiniteCarousel 
          autoPlayInterval={3500} 
          showControls={true}
          itemClassName="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 flex"
        >
          {/* Large Left Card */}
          <div className="brand-card flex flex-col w-full h-full">
            <div className="relative flex-1 min-h-[280px] md:min-h-[300px] w-full border-b border-line">
              <img 
                src={rescueImg} 
                alt="Animal Rescue"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6 lg:p-8 shrink-0 flex-1 flex flex-col">
              <h3 className="font-display text-[26px] text-ink mb-3 uppercase tracking-[.02em]">Animal Rescue</h3>
              <p className="text-muted text-[15px] leading-relaxed">
                Rescuing injured and abandoned animals and giving them a chance at a new life. Our rapid response team works around the clock to provide critical care and rehabilitation to those in need.
              </p>
            </div>
          </div>

          {/* Top Right Card */}
          <div className="brand-card flex flex-col w-full h-full">
            <div className="relative flex-1 min-h-[280px] md:min-h-[300px] w-full border-b border-line">
              <img 
                src={feedingImg} 
                alt="Feeding Program"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6 lg:p-8 shrink-0 flex-1 flex flex-col">
              <h3 className="font-display text-[26px] text-ink mb-3 uppercase tracking-[.02em]">Feeding Program</h3>
              <p className="text-muted text-[15px] leading-relaxed">
                Providing daily meals to 56+ indies and making sure no one sleeps hungry.
              </p>
            </div>
          </div>

          {/* Bottom Right Card */}
          <div className="brand-card flex flex-col w-full h-full">
            <div className="relative flex-1 min-h-[280px] md:min-h-[300px] w-full border-b border-line">
              <img 
                src={collarImg} 
                alt="Collar Drives"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6 lg:p-8 shrink-0 flex-1 flex flex-col">
              <h3 className="font-display text-[26px] text-ink mb-3 uppercase tracking-[.02em]">Collar Drives</h3>
              <p className="text-muted text-[15px] leading-relaxed">
                Reflective collars for safety, visibility and a brighter tomorrow.
              </p>
            </div>
          </div>
        </InfiniteCarousel>

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
