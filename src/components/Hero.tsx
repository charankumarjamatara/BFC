import React from 'react';
import { motion } from 'framer-motion';
import Stats from './Stats';

export default function Hero() {
  return (
    <div className="bg-bg">
      <section className="pt-[120px] pb-12 md:pb-14 px-6 relative max-w-[1180px] mx-auto w-full">
        <motion.span 
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow mb-[14px]"
        >
          Brutality Free Community
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-[clamp(52px,9vw,130px)] leading-[.92] text-ink uppercase tracking-[.01em]"
        >
          Every Life<br/>
          Deserves <span className="bg-yellow text-ink px-3 pb-1 box-decoration-clone inline-block">Kindness</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 max-w-[620px] text-[clamp(16px,2vw,19px)] text-muted leading-relaxed"
        >
          We rescue, heal, feed and find loving homes for street animals. <b>A movement, not a charity.</b> Together we can build a cruelty-free community.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 mt-8"
        >
          <a href="#donate" className="bg-coral text-[#3a0f06] font-bold text-xs uppercase tracking-[.14em] py-3.5 px-7 rounded-full hover:bg-[#D6432A] transition-colors shadow-sm">
            Donate Now
          </a>
          <a href="#volunteer" className="bg-ink text-yellow font-bold text-xs uppercase tracking-[.14em] py-3.5 px-7 rounded-full hover:bg-[#222] transition-colors">
            Join the Movement
          </a>
        </motion.div>
      </section>

      <Stats />
    </div>
  );
}
