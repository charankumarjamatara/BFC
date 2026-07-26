import React from 'react';
import { motion } from 'framer-motion';
import Stats from './Stats';

export default function Hero() {
  return (
    <div className="bg-bg">
      <section className="pt-[140px] pb-20 px-6 relative max-w-[1180px] mx-auto w-full">
        <motion.span 
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow mb-[18px]"
        >
          Brutality Free Community · Visual Identity & Movement
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-[clamp(56px,10vw,138px)] leading-[.92] text-ink uppercase tracking-[.01em]"
        >
          Every Life<br/>
          Deserves <span className="bg-yellow text-ink px-3 pb-1 box-decoration-clone inline-block">Kindness</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-[26px] max-w-[620px] text-[clamp(16px,2vw,20px)] text-muted leading-relaxed"
        >
          The animal-welfare movement out of Bengaluru. <b>Bold, not soft. A movement, not a charity.</b> Five colors, each with one job.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 mt-10"
        >
          <a href="#donate" className="bg-coral text-[#3a0f06] font-bold text-[13px] tracking-[.1em] uppercase py-3.5 px-8 rounded-full hover:bg-[#D6432A] transition-colors duration-200 shadow-sm">
            Donate Now
          </a>
          <a href="#volunteer" className="bg-ink text-white font-bold text-[13px] tracking-[.1em] uppercase py-3.5 px-8 rounded-full hover:bg-[#222] transition-colors duration-200">
            Join the Movement
          </a>
        </motion.div>

        {/* Brand System Swatchstrip directly from brand doc */}
        <motion.div 
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14"
        >
          <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-widest text-muted mb-2">
            <span>Brand System Swatches</span>
            <span>Ink · Yellow · White · Teal · Coral</span>
          </div>
          <div className="flex h-12 rounded-xl overflow-hidden border border-line select-none">
            <div className="bg-ink flex-[2.4] relative group flex items-center justify-center cursor-pointer">
              <span className="text-[10px] text-white font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Ink</span>
            </div>
            <div className="bg-yellow flex-[1.6] relative group flex items-center justify-center cursor-pointer">
              <span className="text-[10px] text-ink font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Yellow</span>
            </div>
            <div className="bg-white flex-[1.1] relative group flex items-center justify-center border-r border-line-soft cursor-pointer">
              <span className="text-[10px] text-ink font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">White</span>
            </div>
            <div className="bg-teal flex-[0.8] relative group flex items-center justify-center cursor-pointer">
              <span className="text-[10px] text-[#04332d] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Teal</span>
            </div>
            <div className="bg-coral flex-[0.8] relative group flex items-center justify-center cursor-pointer">
              <span className="text-[10px] text-[#3a0f06] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Coral</span>
            </div>
          </div>
        </motion.div>
      </section>

      <Stats />
    </div>
  );
}
