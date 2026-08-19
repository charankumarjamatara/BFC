import React from 'react';
import SectionHeader from './SectionHeader';
import blog1Img from '../assets/blogs/The Art Of Noticing.webp';
import blog2Img from '../assets/blogs/This is a Positive Investment.webp';
import blog3Img from '../assets/blogs/Indie Pup Looking for Home.webp';

interface BlogsProps {
  onKnowMore?: () => void;
}

export default function Blogs({ onKnowMore }: BlogsProps) {
  return (
    <section id="blogs" className="section-wrapper bg-bg">
      <div className="section-container">
        
        <SectionHeader 
          eyebrow="From Our Blogs"
          headingParts={["Latest", "Stories"]}
        />

        <div className="grid md:grid-cols-3 gap-5">
          
          <article className="brand-card flex flex-col">
            <div className="relative h-44 border-b border-line shrink-0">
              <img 
                src={blog1Img} 
                alt="The Art Of Noticing" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6 lg:p-8 flex-1">
              <h3 className="font-display text-[22px] text-ink mb-2 leading-[1.1] uppercase tracking-[.02em]">
                The Art Of Noticing
              </h3>
              <p className="text-muted text-[14.5px] leading-relaxed line-clamp-3">
                Noticing the wag of a tail, the eyes that speak without words, the life that's lived in silence and survival.
              </p>
            </div>
          </article>

          <article className="brand-card flex flex-col">
            <div className="relative h-44 border-b border-line shrink-0">
              <img 
                src={blog2Img} 
                alt="Positive Investment" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6 lg:p-8 flex-1">
              <h3 className="font-display text-[22px] text-ink mb-2 leading-[1.1] uppercase tracking-[.02em]">
                This is a Positive Investment
              </h3>
              <p className="text-muted text-[14.5px] leading-relaxed line-clamp-3">
                Because every meal, every medicine, every rescued life is a step towards a better world.
              </p>
            </div>
          </article>

          <article className="brand-card flex flex-col">
            <div className="relative h-44 border-b border-line shrink-0">
              <img 
                src={blog3Img} 
                alt="Looking for Home" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6 lg:p-8 flex-1">
              <h3 className="font-display text-[22px] text-ink mb-2 leading-[1.1] uppercase tracking-[.02em]">
                Indie Pup Looking for Home
              </h3>
              <p className="text-muted text-[14.5px] leading-relaxed line-clamp-3">
                These adorable indie pups are looking for their forever homes. Let's give them the love they deserve.
              </p>
            </div>
          </article>

        </div>

        <div className="mt-10 flex justify-center">
          <button onClick={onKnowMore} className="btn-outline">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}
