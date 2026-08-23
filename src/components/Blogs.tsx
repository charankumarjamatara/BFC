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
          className="flex md:grid flex-nowrap md:grid-cols-3 gap-5 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          
          <article className="brand-card flex flex-col min-w-full md:min-w-0 snap-start h-full">
            <div className="relative flex-1 min-h-[240px] md:min-h-[260px] w-full border-b border-line-soft">
              <img 
                src={blog1Img} 
                alt="The Art Of Noticing" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6 lg:p-8 shrink-0">
              <h3 className="font-display text-[22px] text-ink mb-2 leading-[1.1] uppercase tracking-[.02em]">
                The Art Of Noticing
              </h3>
              <p className="text-muted text-[14.5px] leading-relaxed line-clamp-3">
                Noticing the wag of a tail, the eyes that speak without words, the life that's lived in silence and survival.
              </p>
            </div>
          </article>

          <article className="brand-card flex flex-col min-w-full md:min-w-0 snap-start h-full">
            <div className="relative flex-1 min-h-[240px] md:min-h-[260px] w-full border-b border-line-soft">
              <img 
                src={blog2Img} 
                alt="Positive Investment" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6 lg:p-8 shrink-0">
              <h3 className="font-display text-[22px] text-ink mb-2 leading-[1.1] uppercase tracking-[.02em]">
                This is a Positive Investment
              </h3>
              <p className="text-muted text-[14.5px] leading-relaxed line-clamp-3">
                Because every meal, every medicine, every rescued life is a step towards a better world.
              </p>
            </div>
          </article>

          <article className="brand-card flex flex-col min-w-full md:min-w-0 snap-start h-full">
            <div className="relative flex-1 min-h-[240px] md:min-h-[260px] w-full border-b border-line-soft">
              <img 
                src={blog3Img} 
                alt="Looking for Home" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6 lg:p-8 shrink-0">
              <h3 className="font-display text-[22px] text-ink mb-2 leading-[1.1] uppercase tracking-[.02em]">
                Indie Pup Looking for Home
              </h3>
              <p className="text-muted text-[14.5px] leading-relaxed line-clamp-3">
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
