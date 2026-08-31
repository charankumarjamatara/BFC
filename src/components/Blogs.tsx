import React, { useEffect, useRef } from 'react';
import SectionHeader from './SectionHeader';
import blog1Img from '../assets/blogs/The Art Of Noticing.webp';
import blog2Img from '../assets/blogs/This is a Positive Investment.webp';
import blog3Img from '../assets/blogs/Indie Pup Looking for Home.webp';

interface BlogsProps {
  onKnowMore?: () => void;
}

export default function Blogs({ onKnowMore }: BlogsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollWidth > clientWidth) {
          let nextScroll = scrollLeft + clientWidth;
          if (nextScroll >= scrollWidth - 10) {
            nextScroll = 0;
          }
          scrollRef.current.scrollTo({ left: nextScroll, behavior: 'smooth' });
        }
      }
    }, 3500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="blogs" className="section-wrapper bg-bg">
      <div className="section-container">
        
        <SectionHeader 
          eyebrow="From Our Blogs"
          headingParts={["Latest", "Stories"]}
        />

        <div 
          ref={scrollRef}
          className="flex md:grid flex-nowrap md:grid-cols-3 gap-5 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-6 md:pb-0 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          
          <article className="bg-white border border-gray-100 rounded-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col min-w-[280px] w-full md:min-w-0 snap-start h-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer group">
            <div className="relative w-full h-[220px] shrink-0 overflow-hidden">
              <img 
                src={blog1Img} 
                alt="The Art Of Noticing" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#E53E3E] text-[13px] font-bold uppercase tracking-wide">Stories</span>
                <span className="text-muted text-[13px]">June 2026</span>
              </div>
              <h3 className="font-display text-[22px] text-ink leading-[1.2] mb-3 line-clamp-2">
                The Art Of Noticing
              </h3>
              <p className="text-muted text-[15px] leading-relaxed line-clamp-3">
                Noticing the wag of a tail, the eyes that speak without words, the life that's lived in silence and survival.
              </p>
            </div>
          </article>

          <article className="bg-white border border-gray-100 rounded-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col min-w-[280px] w-full md:min-w-0 snap-start h-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer group">
            <div className="relative w-full h-[220px] shrink-0 overflow-hidden">
              <img 
                src={blog2Img} 
                alt="Positive Investment" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#E53E3E] text-[13px] font-bold uppercase tracking-wide">Impact</span>
                <span className="text-muted text-[13px]">May 2026</span>
              </div>
              <h3 className="font-display text-[22px] text-ink leading-[1.2] mb-3 line-clamp-2">
                This is a Positive Investment
              </h3>
              <p className="text-muted text-[15px] leading-relaxed line-clamp-3">
                Because every meal, every medicine, every rescued life is a step towards a better world.
              </p>
            </div>
          </article>

          <article className="bg-white border border-gray-100 rounded-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col min-w-[280px] w-full md:min-w-0 snap-start h-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer group">
            <div className="relative w-full h-[220px] shrink-0 overflow-hidden">
              <img 
                src={blog3Img} 
                alt="Looking for Home" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#E53E3E] text-[13px] font-bold uppercase tracking-wide">Adoption</span>
                <span className="text-muted text-[13px]">April 2026</span>
              </div>
              <h3 className="font-display text-[22px] text-ink leading-[1.2] mb-3 line-clamp-2">
                Indie Pup Looking for Home
              </h3>
              <p className="text-muted text-[15px] leading-relaxed line-clamp-3">
                These adorable indie pups are looking for their forever homes. Let's give them the love they deserve.
              </p>
            </div>
          </article>

        </div>

        <div className="mt-6 md:mt-10 flex justify-center">
          <button onClick={onKnowMore} className="btn-outline">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}
