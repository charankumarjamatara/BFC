import React from 'react';
import SectionHeader from './SectionHeader';

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
                src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=400&q=80" 
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
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80" 
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
                src="https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&w=400&q=80" 
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
