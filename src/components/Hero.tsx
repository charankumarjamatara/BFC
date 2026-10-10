import React from 'react';
import { motion } from 'framer-motion';
import Stats from './Stats';
import heroBgVideo from '../assets/hero_bg.mp4';

interface HeroProps {
  onDonateClick?: () => void;
}

export default function Hero({ onDonateClick }: HeroProps) {
  return (
    <div className="relative h-[60vh] min-h-[530px] max-h-[600px] md:h-auto md:min-h-[85vh] lg:min-h-screen flex items-end md:items-center overflow-hidden dark bg-black mb-8 md:mb-0">
      
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      >
        <source src={heroBgVideo} type="video/mp4" />
      </video>

      {/* Overlay: Top-to-Bottom on mobile, Left-to-Right on desktop */}
      <div className="absolute inset-0 max-md:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0)_30%,rgba(0,0,0,0.55)_65%,rgba(0,0,0,0.85)_100%)] md:bg-gradient-to-r md:from-black/95 md:via-black/60 md:to-transparent z-10 pointer-events-none"></div>

      {/* Content Container aligned to master grid */}
      <section className="section-container px-6 md:px-12 lg:px-0 relative z-20 pb-6 pt-[100px] md:pt-40 md:pb-24 w-full text-left">
        
        {/* Confine content to the left reading zone (approx 40% on desktop) */}
        <div className="w-full md:w-[50%] lg:w-[42%] flex flex-col justify-end gap-5 md:gap-0">
          
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
            className="flex flex-row items-center gap-[10px] md:gap-3 md:mt-10 w-full"
          >
            <button onClick={onDonateClick} className="btn-primary flex-1 !px-0 !py-0 flex items-center justify-center text-[10.5px] sm:text-[13px] h-[44px] tracking-wide whitespace-nowrap">
              Donate Now
            </button>
            <a href="#volunteer" className="btn-outline flex-1 !px-0 !py-0 flex items-center justify-center text-[10.5px] sm:text-[13px] h-[44px] tracking-wide whitespace-nowrap">
              Join the Movement
            </a>
          </motion.div>

        </div>

      </section>

    </div>
  );
}
