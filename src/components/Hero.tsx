import React from 'react';
import { motion } from 'framer-motion';
import Stats from './Stats';

export default function Hero() {
  return (
    <div className="bg-bg">
      <section className="pt-[120px] pb-12 md:pb-14 px-6 relative max-w-[1180px] mx-auto w-full">
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
          className="flex flex-wrap items-center gap-4 mt-8"
        >
          <a href="#donate" className="btn-primary">
            Donate Now
          </a>
          <a href="#volunteer" className="btn-outline">
            Join the Movement
          </a>
        </motion.div>
      </section>


    </div>
  );
}
