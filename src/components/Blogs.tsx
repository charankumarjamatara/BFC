import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Blogs() {
  return (
    <section id="blogs" className="py-24 px-6 bg-bg border-t border-line-soft">
      <div className="container mx-auto max-w-[1180px]">
        
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="eyebrow mb-6">From Our Blogs</span>
          <h2 className="font-display text-4xl md:text-[52px] uppercase tracking-[.01em] text-ink">
            Latest Stories
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          <article className="brand-card flex flex-col">
            <div className="relative h-48 border-b border-line">
              <img 
                src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=400&q=80" 
                alt="The Art Of Noticing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-yellow text-ink text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest rounded-full">
                11 July 2026
              </div>
            </div>
            <div className="p-8 bg-surface">
              <h3 className="font-display text-[26px] text-ink mb-3 leading-[1.1] uppercase tracking-[.02em]">
                The Art Of Noticing
              </h3>
              <p className="text-muted text-[15px] leading-relaxed mb-6 line-clamp-3">
                Noticing the wag of a tail, the eyes that speak without words, the life that's lived in silence and survival.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-ink font-bold text-xs uppercase tracking-[.14em] hover:text-muted transition-colors">
                Read More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </article>

          <article className="brand-card flex flex-col">
            <div className="relative h-48 border-b border-line">
              <img 
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80" 
                alt="Positive Investment" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-yellow text-ink text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest rounded-full">
                28 May 2026
              </div>
            </div>
            <div className="p-8 bg-surface">
              <h3 className="font-display text-[26px] text-ink mb-3 leading-[1.1] uppercase tracking-[.02em]">
                This is a Positive Investment
              </h3>
              <p className="text-muted text-[15px] leading-relaxed mb-6 line-clamp-3">
                Because every meal, every medicine, every rescued life is a step towards a better world.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-ink font-bold text-xs uppercase tracking-[.14em] hover:text-muted transition-colors">
                Read More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </article>

          <article className="brand-card flex flex-col">
            <div className="relative h-48 border-b border-line">
              <img 
                src="https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&w=400&q=80" 
                alt="Looking for Home" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-yellow text-ink text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest rounded-full">
                29 Dec 2025
              </div>
            </div>
            <div className="p-8 bg-surface">
              <h3 className="font-display text-[26px] text-ink mb-3 leading-[1.1] uppercase tracking-[.02em]">
                Indie Pup Looking for Home
              </h3>
              <p className="text-muted text-[15px] leading-relaxed mb-6 line-clamp-3">
                These adorable indie pups are looking for their forever homes. Let's give them the love they deserve.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-ink font-bold text-xs uppercase tracking-[.14em] hover:text-muted transition-colors">
                Read More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
