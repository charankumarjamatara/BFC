import React from 'react';
import { motion } from 'framer-motion';
import Stats from './Stats';
import heroBgVideo from '../assets/hero_bg.mp4';

interface HeroProps {
  onDonateClick?: () => void;
}

export default function Hero({ onDonateClick }: HeroProps) {
  return (
    <div className="relative min-h-[80vh] md:min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden dark bg-black">
      
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        poster="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1920&q=80"
      >
        <source src={heroBgVideo} type="video/mp4" />
      </video>

      {/* Directional Gradient Overlay (Dark Left -> Transparent Right) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-black/10 md:from-black/95 md:via-black/60 md:to-transparent z-10 pointer-events-none"></div>



      {/* Content Container aligned to master grid */}
      <section className="section-container relative z-20 pt-32 pb-16 md:pt-40 md:pb-24 w-full text-left">
        
        {/* Confine content to the left reading zone (approx 40% on desktop) */}
        <div className="w-full md:w-[50%] lg:w-[42%]">
          
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Stats />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 mt-10"
          >
            <button onClick={onDonateClick} className="btn-primary w-full sm:w-auto">
              Donate Now
            </button>
            <a href="#volunteer" className="btn-outline w-full sm:w-auto text-center">
              Join the Movement
            </a>
          </motion.div>

        </div>

      </section>

    </div>
  );
}
