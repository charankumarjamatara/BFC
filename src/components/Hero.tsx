import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Play, Sparkles } from 'lucide-react';
import heroPhoto from "@/imports/hero-bg-2.jpg";
import Stats from './Stats';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-visible">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0 bg-[#16271c]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#111e15]/95 via-[#111e15]/75 to-transparent z-10" />
        <img 
          src={heroPhoto}
          alt="Hero Background" 
          className="w-full h-full object-cover object-top opacity-70"
        />
      </div>

      <div className="container mx-auto px-6 max-w-[1440px] relative z-20 flex-1 flex flex-col justify-center pb-32 pt-32">
        <div className="max-w-2xl text-pure-white">

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-[68px] font-bold font-serif leading-[1.1] mb-6 text-white"
          >
            Every Life Deserves<br/>
            <span className="text-gold">Kindness.</span> Every Animal<br/>
            Deserves a Home.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-white/90 mb-10 max-w-lg font-sans leading-relaxed"
          >
            We rescue, heal, feed and find loving homes for street animals. Together we can build a cruelty-free community.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#donate" className="bg-forest border border-forest text-white font-semibold py-4 px-8 rounded-xl flex items-center gap-2 hover:bg-forest/90 transition-all shadow-lg hover:shadow-forest/20">
              Donate Now <Heart className="w-4 h-4" />
            </a>
            <a href="#volunteer" className="bg-transparent border border-white/60 text-white font-semibold py-4 px-8 rounded-xl flex items-center gap-2 hover:bg-white/10 hover:border-white transition-all">
              Join Us <Users className="w-4 h-4" />
            </a>
          </motion.div>
        </div>


      </div>
      
      <Stats />
    </section>
  );
}
