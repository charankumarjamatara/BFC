import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Blogs() {
  return (
    <section id="blogs" className="section-wrapper bg-bg">
      <div className="section-container">
        
        {/* Signature Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="eyebrow mb-2">From Our Blogs</span>
            <h2 className="font-display text-[clamp(40px,6.5vw,68px)] text-ink uppercase leading-[.92] tracking-[.01em]">
              Latest<br />Stories<span className="inline-block w-3 h-3 bg-yellow align-baseline ml-1.5"></span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          
          <article className="brand-card rounded-[20px] flex flex-col overflow-hidden">
            <div className="relative h-44 border-b border-line">
              <img 
                src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=400&q=80" 
                alt="The Art Of Noticing" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 lg:p-8 bg-surface flex-1">
              <h3 className="font-display text-[24px] text-ink mb-2 leading-[1.1] uppercase tracking-[.02em]">
                The Art Of Noticing
              </h3>
              <p className="text-muted text-[14px] leading-relaxed line-clamp-3">
                Noticing the wag of a tail, the eyes that speak without words, the life that's lived in silence and survival.
              </p>
            </div>
          </article>

          <article className="brand-card rounded-[20px] flex flex-col overflow-hidden">
            <div className="relative h-44 border-b border-line">
              <img 
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80" 
                alt="Positive Investment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 lg:p-8 bg-surface flex-1">
              <h3 className="font-display text-[24px] text-ink mb-2 leading-[1.1] uppercase tracking-[.02em]">
                This is a Positive Investment
              </h3>
              <p className="text-muted text-[14px] leading-relaxed line-clamp-3">
                Because every meal, every medicine, every rescued life is a step towards a better world.
              </p>
            </div>
          </article>

          <article className="brand-card rounded-[20px] flex flex-col overflow-hidden">
            <div className="relative h-44 border-b border-line">
              <img 
                src="https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&w=400&q=80" 
                alt="Looking for Home" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 lg:p-8 bg-surface flex-1">
              <h3 className="font-display text-[24px] text-ink mb-2 leading-[1.1] uppercase tracking-[.02em]">
                Indie Pup Looking for Home
              </h3>
              <p className="text-muted text-[14px] leading-relaxed line-clamp-3">
                These adorable indie pups are looking for their forever homes. Let's give them the love they deserve.
              </p>
            </div>
          </article>

        </div>

        {/* Global Know More Button */}
        <div className="mt-10 flex justify-center">
          <a href="#blogs" className="btn-outline">
            Know More <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
