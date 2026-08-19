import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowLeft, ArrowRight, Heart } from 'lucide-react';

// Impact Images
import impactImg1 from '../assets/Donate section/Weekly Feeding Drives.webp';
import impactImg2 from '../assets/Donate section/Emergency Surgeries.webp';
import impactImg3 from '../assets/Donate section/Vaccination Camp.webp';

// Carousel Images
import carouselImg1 from '../assets/Donate section/donate_carousel/IMG_1.webp';
import carouselImg2 from '../assets/Donate section/donate_carousel/IMG_2.webp';
import carouselImg3 from '../assets/Donate section/donate_carousel/IMG_3.webp';
import carouselImg4 from '../assets/Donate section/donate_carousel/IMG_4.webp';
import carouselImg5 from '../assets/Donate section/donate_carousel/IMG_5.webp';
import carouselImg6 from '../assets/Donate section/donate_carousel/IMG_6.webp';

export default function DonatePage({ onBack }: { onBack?: () => void }) {
  const [galleryIndex, setGalleryIndex] = useState(0);
  
  const galleryImages = [
    carouselImg1,
    carouselImg2,
    carouselImg3,
    carouselImg4,
    carouselImg5,
    carouselImg6
  ];

  const [isHovered, setIsHovered] = useState(false);

  // Auto-play with pause on hover and reset on interaction
  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3500);
    
    return () => clearInterval(timer);
  }, [isHovered, galleryIndex, galleryImages.length]);

  const getCarouselStyle = (index: number) => {
    const diff = (index - galleryIndex + galleryImages.length) % galleryImages.length;
    const distance = diff > galleryImages.length / 2 ? diff - galleryImages.length : diff;
    const absDistance = Math.abs(distance);
    const isVisible = absDistance <= 2;
    return {
      x: `${distance * 60}%`,
      z: -absDistance * 100,
      rotateY: -distance * 20,
      scale: 1 - absDistance * 0.1,
      zIndex: 10 - absDistance,
      opacity: isVisible ? 1 - absDistance * 0.3 : 0,
    };
  };

  return (
    <div className="w-full flex flex-col animate-fade-in bg-bg pt-20 md:pt-24">
      
      {/* 1. IMPACT OF DONATIONS */}
      <section className="section-wrapper bg-bg !pt-8 md:!pt-12">
        <div className="section-container">
          
          <button onClick={onBack} className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-muted hover:text-ink transition-colors mb-10 md:mb-14 cursor-pointer">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 text-left">
            <div>
              <span className="eyebrow mb-2">Real Results</span>
              <h2 className="font-display text-[clamp(40px,6.5vw,68px)] text-ink uppercase leading-[.92] tracking-[.01em]">
                Impact of<br />Donations<span className="inline-block w-3 h-3 bg-yellow align-baseline ml-1.5"></span>
              </h2>
            </div>
          </div>
          
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {/* Card 1 */}
            <div className="brand-card flex flex-col h-full">
              <div className="relative h-48 w-full border-b border-line shrink-0">
                <img 
                  src={impactImg1} 
                  alt="Feeding Drive"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-surface flex-1 flex flex-col">
                <h3 className="font-display text-[20px] text-ink mb-2 uppercase tracking-[.02em]">Weekly Feeding Drives</h3>
                <p className="text-muted text-[14px] leading-relaxed">
                  Thanks to your contributions, we successfully distributed over 500 meals to stray dogs across the city this past month.
                </p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="brand-card flex flex-col h-full">
              <div className="relative h-48 w-full border-b border-line shrink-0">
                <img 
                  src={impactImg2} 
                  alt="Emergency Surgeries"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-surface flex-1 flex flex-col">
                <h3 className="font-display text-[20px] text-ink mb-2 uppercase tracking-[.02em]">Emergency Surgeries</h3>
                <p className="text-muted text-[14px] leading-relaxed">
                  Funds raised last week helped perform life-saving orthopedic surgeries for three injured indie dogs rescued from hit-and-run accidents.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="brand-card flex flex-col h-full">
              <div className="relative h-48 w-full border-b border-line shrink-0">
                <img 
                  src={impactImg3} 
                  alt="Vaccination Camp"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-surface flex-1 flex flex-col">
                <h3 className="font-display text-[20px] text-ink mb-2 uppercase tracking-[.02em]">Vaccination Camp</h3>
                <p className="text-muted text-[14px] leading-relaxed">
                  Your donations sponsored our annual anti-rabies vaccination camp, securing the health of 200+ neighborhood dogs.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. OUR GALLERY */}
      <section className="section-wrapper bg-surface border-y border-line-soft">
        <div className="section-container">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 text-left">
            <div>
              <span className="eyebrow mb-2">Photo Journal</span>
              <h2 className="font-display text-[clamp(40px,6.5vw,68px)] text-ink uppercase leading-[.92] tracking-[.01em]">
                Our<br />Gallery<span className="inline-block w-3 h-3 bg-yellow align-baseline ml-1.5"></span>
              </h2>
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
                onClick={() => setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                className="absolute left-2 sm:left-6 md:left-12 xl:left-24 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-[0_2px_15px_rgba(0,0,0,0.08)] border border-line-soft hover:scale-110 transition-transform text-ink hidden sm:flex"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              <button 
                onClick={() => setGalleryIndex((prev) => (prev + 1) % galleryImages.length)}
                className="absolute right-2 sm:right-6 md:right-12 xl:right-24 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-[0_2px_15px_rgba(0,0,0,0.08)] border border-line-soft hover:scale-110 transition-transform text-ink hidden sm:flex"
                aria-label="Next slide"
              >
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              {/* 3D Carousel Container */}
              <div 
                className="relative h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center w-full max-w-5xl mx-auto"
                style={{ perspective: '1200px' }}
              >
                {galleryImages.map((src, index) => {
                const style = getCarouselStyle(index);
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
                    onClick={() => setGalleryIndex(index)}
                  >
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-line-soft bg-bg">
                      <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-3 mt-10">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setGalleryIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === galleryIndex ? 'w-8 bg-yellow' : 'w-2 bg-line'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* 3. EMERGENCY RESCUE */}
      <section className="section-wrapper bg-bg border-b border-line-soft">
        <div className="section-container">
          
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16 items-center">
            
            <div className="w-full md:w-[45%] text-left">
              <span className="eyebrow mb-3">
                24/7 Support
              </span>
              <h3 className="font-display text-[clamp(40px,5vw,56px)] text-ink uppercase leading-[.92] tracking-[.01em] mb-4">
                For Any<br />
                Emergency<br />
                <span className="bg-yellow px-1 inline-block mt-1 box-decoration-clone">(OR) Rescue</span>
              </h3>
              <p className="text-muted text-[15px] leading-relaxed max-w-sm">
                Please contact us immediately. Every second counts when an animal is in distress.
              </p>
            </div>
            
            <div className="w-full md:w-[55%] flex flex-col gap-4">
              <a href="mailto:brutalityfreecommunity@gmail.com" className="brand-card p-5 md:p-6 flex items-center gap-5 hover:border-ink transition-colors w-full bg-surface shadow-sm">
                <div className="w-12 h-12 rounded-full bg-yellow border border-line-soft flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-ink" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-muted uppercase tracking-[.16em] mb-1">Email Us</div>
                  <div className="font-bold text-[16px] md:text-[18px] text-ink truncate w-full">brutalityfreecommunity@gmail.com</div>
                </div>
              </a>
              
              <a href="tel:+919008912829" className="brand-card p-5 md:p-6 flex items-center gap-5 hover:border-ink transition-colors w-full bg-surface shadow-sm">
                <div className="w-12 h-12 rounded-full bg-yellow border border-line-soft flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-ink" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-muted uppercase tracking-[.16em] mb-1">Call Helpline</div>
                  <div className="font-bold text-[16px] md:text-[18px] text-ink">+91 90089 12829</div>
                </div>
              </a>
            </div>
            
          </div>

        </div>
      </section>

      {/* 4. DONATE */}
      <section className="section-wrapper bg-surface">
        <div className="section-container">
          
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16 items-center">
            
            <div className="w-full md:w-[60%] text-left">
              <span className="eyebrow mb-4">Donate</span>
              <h2 className="font-display text-[clamp(40px,6vw,68px)] text-ink uppercase leading-[.92] tracking-[.01em] mb-5">
                Your Support<br />Gives Them<br />A <span className="bg-yellow px-1 inline-block mt-1 box-decoration-clone">Second Chance.</span>
              </h2>
              <p className="text-muted text-[16px] leading-relaxed max-w-sm">
                Scan the QR code to make a secure donation directly to our medical fund.
              </p>
            </div>
            
            <div className="w-full md:w-[40%] flex justify-start md:justify-end shrink-0">
              <div className="flex flex-col items-start md:items-center">
                <div className="brand-card p-5 bg-surface shadow-sm">
                  <div className="w-48 h-48 bg-bone flex items-center justify-center relative overflow-hidden rounded-[12px]">
                    <svg className="w-full h-full text-ink" viewBox="0 0 100 100" fill="currentColor">
                      <rect x="0" y="0" width="25" height="25" />
                      <rect x="5" y="5" width="15" height="15" fill="white" />
                      <rect x="9" y="9" width="7" height="7" />
                      
                      <rect x="75" y="0" width="25" height="25" />
                      <rect x="80" y="5" width="15" height="15" fill="white" />
                      <rect x="84" y="9" width="7" height="7" />
                      
                      <rect x="0" y="75" width="25" height="25" />
                      <rect x="5" y="80" width="15" height="15" fill="white" />
                      <rect x="8" y="84" width="8" height="8" />
                      
                      <rect x="35" y="10" width="10" height="15" />
                      <rect x="55" y="5" width="15" height="10" />
                      <rect x="35" y="35" width="30" height="10" />
                      <rect x="10" y="45" width="15" height="20" />
                      <rect x="40" y="60" width="15" height="15" />
                      <rect x="80" y="40" width="15" height="25" />
                      <rect x="65" y="75" width="10" height="15" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-surface p-1.5 rounded-[8px] border border-line-soft shadow-sm">
                        <div className="bg-yellow w-6 h-6 flex items-center justify-center rounded-[6px] text-ink font-bold">
                          <Heart className="w-3 h-3 fill-current"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="font-sans text-[11px] uppercase tracking-[.16em] font-bold text-muted mt-5">
                  Scan to donate
                </span>
              </div>
            </div>
            
          </div>

        </div>
      </section>

    </div>
  );
}
