import React from 'react';
import { motion } from 'framer-motion';
import { PawPrint, ArrowRight } from 'lucide-react';

export default function Blogs() {
  return (
    <section id="blogs" className="py-24 px-6 container mx-auto max-w-[1440px] bg-[#FAF8F3]">
      
      {/* Centered Heading with Line */}
      <div className="flex items-center justify-center gap-4 mb-16">
        <div className="h-[1px] bg-gold w-16"></div>
        <span className="text-forest font-bold text-xs uppercase tracking-widest flex items-center gap-2">
          FROM OUR BLOGS <PawPrint className="w-3.5 h-3.5 fill-current" />
        </span>
        <div className="h-[1px] bg-gold w-16"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Blog 1 */}
        <motion.article 
          whileHover={{ y: -8 }}
          className="group flex flex-col"
        >
          <div className="relative h-48 overflow-hidden rounded-t-3xl mb-4">
            <img 
              src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=400&q=80" 
              alt="The Art Of Noticing" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-2 left-2 bg-forest text-white text-[10px] font-bold px-3 py-1.5 rounded-md">
              11 July 2025
            </div>
          </div>
          <div className="px-2">
            <h3 className="font-serif font-bold text-2xl text-forest mb-2 leading-snug">
              The Art Of Noticing
            </h3>
            <p className="text-charcoal text-sm leading-relaxed mb-4 line-clamp-3">
              Noticing the wag of a tail, the eyes that speak without words, the life that's lived in silence and survival.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-charcoal font-bold text-sm hover:text-gold transition-colors">
              Know More <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.article>

        {/* Blog 2 */}
        <motion.article 
          whileHover={{ y: -8 }}
          className="group flex flex-col"
        >
          <div className="relative h-48 overflow-hidden rounded-t-3xl mb-4">
            <img 
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80" 
              alt="Positive Investment" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-2 left-2 bg-forest text-white text-[10px] font-bold px-3 py-1.5 rounded-md">
              28 May 2025
            </div>
          </div>
          <div className="px-2">
            <h3 className="font-serif font-bold text-2xl text-forest mb-2 leading-snug">
              This is a Positive Investment
            </h3>
            <p className="text-charcoal text-sm leading-relaxed mb-4 line-clamp-3">
              Because every meal, every medicine, every rescued life is a step towards a better world.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-charcoal font-bold text-sm hover:text-gold transition-colors">
              Know More <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.article>

        {/* Blog 3 */}
        <motion.article 
          whileHover={{ y: -8 }}
          className="group flex flex-col"
        >
          <div className="relative h-48 overflow-hidden rounded-t-3xl mb-4">
            <img 
              src="https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&w=400&q=80" 
              alt="Looking for Home" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-2 left-2 bg-forest text-white text-[10px] font-bold px-3 py-1.5 rounded-md">
              29 Dec 2024
            </div>
          </div>
          <div className="px-2">
            <h3 className="font-serif font-bold text-2xl text-forest mb-2 leading-snug">
              Indie Pup Looking for Home
            </h3>
            <p className="text-charcoal text-sm leading-relaxed mb-4 line-clamp-3">
              These adorable indie pups are looking for their forever homes. Let's give them the love they deserve.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-charcoal font-bold text-sm hover:text-gold transition-colors">
              Know More <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.article>

      </div>
    </section>
  );
}
