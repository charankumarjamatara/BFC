import React from 'react';
import { motion } from 'framer-motion';
import { PawPrint, Heart, Shield, Sparkles, ArrowRight } from 'lucide-react';

export default function Activities() {
  return (
    <section id="activities" className="py-24 px-6 bg-[#FAF8F3] relative">
      <div className="container mx-auto max-w-[1440px]">
        
        {/* Centered Heading with Line */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[1px] bg-gold w-16"></div>
          <span className="text-forest font-bold text-xs uppercase tracking-widest flex items-center gap-2">
            OUR ACTIVITIES <PawPrint className="w-3.5 h-3.5 fill-current" />
          </span>
          <div className="h-[1px] bg-gold w-16"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Animal Rescue */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="group flex flex-col"
          >
            <div className="relative h-64 overflow-visible mb-10">
              <img 
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80" 
                alt="Animal Rescue"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute -bottom-6 left-6 bg-forest text-white p-4 rounded-full shadow-lg border-4 border-[#FAF8F3]">
                <Shield className="w-5 h-5" />
              </div>
            </div>
            <div className="px-2">
              <h3 className="font-serif font-bold text-2xl text-forest mb-3">Animal Rescue</h3>
              <p className="text-charcoal text-sm leading-relaxed mb-4">
                Rescuing injured and abandoned animals and giving them a chance at a new life.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-charcoal font-bold text-sm hover:text-gold transition-colors">
                Know More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Feeding Program */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="group flex flex-col"
          >
            <div className="relative h-64 overflow-visible mb-10">
              <img 
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80" 
                alt="Feeding Program"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute -bottom-6 left-6 bg-forest text-white p-4 rounded-full shadow-lg border-4 border-[#FAF8F3]">
                <Heart className="w-5 h-5" />
              </div>
            </div>
            <div className="px-2">
              <h3 className="font-serif font-bold text-2xl text-forest mb-3">Feeding Program</h3>
              <p className="text-charcoal text-sm leading-relaxed mb-4">
                Providing daily meals to 56+ indies and making sure no one sleeps hungry.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-charcoal font-bold text-sm hover:text-gold transition-colors">
                Know More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Card 3: Collar Drives */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="group flex flex-col"
          >
            <div className="relative h-64 overflow-visible mb-10">
              <img 
                src="https://images.unsplash.com/photo-1541599540903-216a46ca1df0?auto=format&fit=crop&w=600&q=80" 
                alt="Collar Drives"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute -bottom-6 left-6 bg-forest text-white p-4 rounded-full shadow-lg border-4 border-[#FAF8F3]">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
            <div className="px-2">
              <h3 className="font-serif font-bold text-2xl text-forest mb-3">Collar Drives</h3>
              <p className="text-charcoal text-sm leading-relaxed mb-4">
                Reflective collars for safety, visibility and a brighter tomorrow.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-charcoal font-bold text-sm hover:text-gold transition-colors">
                Know More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
