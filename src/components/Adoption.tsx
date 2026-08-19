import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import img1 from '../assets/adoption_carousel/IMG_1.webp';
import img2 from '../assets/adoption_carousel/IMG_2.webp';
import img3 from '../assets/adoption_carousel/IMG_3.webp';
import img4 from '../assets/adoption_carousel/IMG_4.webp';
import img5 from '../assets/adoption_carousel/IMG_5.webp';
import img6 from '../assets/adoption_carousel/IMG_6.webp';
import img7 from '../assets/adoption_carousel/IMG_7.webp';

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function Adoption() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered, activeIndex, images.length]);

  const getStyle = (index: number) => {
    const diff = (index - activeIndex + images.length) % images.length;
    // Calculate distance for symmetric layout
    const distance = diff > images.length / 2 ? diff - images.length : diff;
    
    const absDistance = Math.abs(distance);
    const isVisible = absDistance <= 2; // Show active, 2 on left, 2 on right

    return {
      x: `${distance * 60}%`, // Responsive horizontal offset
      z: -absDistance * 100, // Push back in 3D space
      rotateY: -distance * 20, // Rotate towards center
      scale: 1 - absDistance * 0.1, // Make smaller
      zIndex: 10 - absDistance,
      opacity: isVisible ? 1 - absDistance * 0.3 : 0,
    };
  };

  return (
    <section id="adoption" className="section-wrapper bg-bg text-ink py-16 md:py-24 border-t border-line-soft overflow-hidden">
      <div className="section-container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 text-left">
          <div>
            <span className="eyebrow mb-2">Adoption</span>
            <h2 className="font-display text-[clamp(40px,6.5vw,68px)] text-ink uppercase leading-[.92] tracking-[.01em]">
              Find Your<br />New Best Friend<span className="inline-block w-3 h-3 bg-yellow align-baseline ml-1.5"></span>
            </h2>
          </div>
          <div className="md:max-w-sm pb-2">
            <p className="text-muted text-[15px] leading-relaxed text-left md:text-right">
              Give a loving home to our rescued Indies. Adopt, don't shop, and experience unconditional love.
            </p>
          </div>
        </div>

        <div 
          className="flex flex-col items-center w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel Container Wrapper */}
          <div className="relative w-full">
            
            {/* Arrows */}
            <button 
              onClick={() => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-2 sm:left-6 md:left-12 xl:left-24 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-[0_2px_15px_rgba(0,0,0,0.08)] border border-line-soft hover:scale-110 transition-transform text-ink hidden sm:flex"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <button 
              onClick={() => setActiveIndex((prev) => (prev + 1) % images.length)}
              className="absolute right-2 sm:right-6 md:right-12 xl:right-24 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-[0_2px_15px_rgba(0,0,0,0.08)] border border-line-soft hover:scale-110 transition-transform text-ink hidden sm:flex"
              aria-label="Next slide"
            >
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <div 
              className="relative h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center w-full max-w-5xl mx-auto"
              style={{ perspective: '1200px' }}
            >
              {images.map((src, index) => {
                const style = getStyle(index);
            // pointer-events should be none if invisible or behind to prevent blocking clicks
            const isClickable = Math.abs(style.zIndex - 10) <= 1; 

            return (
              <motion.div
                key={index}
                className="absolute w-[240px] sm:w-[320px] md:w-[450px] cursor-pointer"
                animate={{
                  x: style.x,
                  z: style.z,
                  rotateY: style.rotateY,
                  scale: style.scale,
                  zIndex: style.zIndex,
                  opacity: style.opacity
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                style={{
                  transformStyle: 'preserve-3d',
                  pointerEvents: isClickable ? 'auto' : 'none'
                }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-line-soft bg-bg">
                  <img src={src} alt={`Adoption ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            );
          })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {images.map((_, idx) => (
             <button 
               key={idx}
               onClick={() => setActiveIndex(idx)}
               className={`h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-ink w-8' : 'bg-muted opacity-50 hover:opacity-100 w-2'}`}
               aria-label={`Go to slide ${idx + 1}`}
             />
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center text-center">
          <p className="text-lg font-semibold text-ink">For adoption kindly contact us at <a href="tel:+919972812063" className="hover:underline text-yellow">+91 99728 12063</a></p>
        </div>
      </div>
    </section>
  );
}
