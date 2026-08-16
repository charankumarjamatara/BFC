import React, { useState, useEffect } from 'react';
import { Mail, Phone, ArrowLeft, ArrowRight, Heart } from 'lucide-react';

// Impact Images
import impactImg1 from '../assets/Donate section/IMG-20241118-WA0000.jpg';
import impactImg2 from '../assets/Donate section/IMG-20241118-WA0043.jpg';
import impactImg3 from '../assets/Donate section/Screenshot_20241118-082245_Gallery.jpg';

// Carousel Images
import carouselImg1 from '../assets/Donate section/donate_carousel/WhatsApp Image 2026-08-15 at 12.38.26 PM.jpeg';
import carouselImg2 from '../assets/Donate section/donate_carousel/WhatsApp Image 2026-08-15 at 12.42.10 PM.jpeg';
import carouselImg3 from '../assets/Donate section/donate_carousel/WhatsApp Image 2026-08-15 at 12.42.12 PM.jpeg';
import carouselImg4 from '../assets/Donate section/donate_carousel/WhatsApp Image 2026-08-15 at 12.42.17 PM.jpeg';
import carouselImg5 from '../assets/Donate section/donate_carousel/WhatsApp Image 2026-08-15 at 12.42.18 PM.jpeg';

export default function DonatePage({ onBack }: { onBack?: () => void }) {
  const [galleryIndex, setGalleryIndex] = useState(0);
  
  const galleryImages = [
    carouselImg1,
    carouselImg2,
    carouselImg3,
    carouselImg4,
    carouselImg5
  ];

  const handleNext = () => setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  const handlePrev = () => setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  // Optional auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
                <span className="text-[10px] font-bold text-muted uppercase tracking-[.16em] mb-2">Feeding</span>
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
                <span className="text-[10px] font-bold text-coral uppercase tracking-[.16em] mb-2">Medical</span>
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
                <span className="text-[10px] font-bold text-teal-dk uppercase tracking-[.16em] mb-2">Prevention</span>
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

          <div className="flex flex-col items-center">
            {/* Carousel Container */}
            <div className="relative w-full max-w-[1000px] flex items-center justify-between gap-2 md:gap-8">
              
              {/* Left Arrow */}
              <button 
                onClick={handlePrev}
                className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center border border-line hover:border-ink transition-colors cursor-pointer text-ink hover:bg-yellow shadow-sm shrink-0 z-30"
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              {/* 3D Track */}
              <div className="relative flex-1 h-[280px] md:h-[400px] flex items-center justify-center overflow-hidden" style={{ perspective: '1200px' }}>
                {galleryImages.map((src, i) => {
                  const offset = (i - galleryIndex + galleryImages.length) % galleryImages.length;
                  let position = offset;
                  if (offset > galleryImages.length / 2) {
                    position = offset - galleryImages.length;
                  }

                  const isVisible = Math.abs(position) <= 1;
                  const isCenter = position === 0;

                  return (
                    <div
                      key={src}
                      className="brand-card absolute transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                      style={{
                        width: 'clamp(220px, 40vw, 400px)',
                        height: 'clamp(240px, 45vw, 360px)',
                        transform: `translateX(${position * 65}%) scale(${isCenter ? 1 : 0.85}) rotateY(${position * -15}deg)`,
                        zIndex: isCenter ? 20 : 10,
                        opacity: isVisible ? 1 : 0,
                        pointerEvents: isCenter ? 'auto' : 'none',
                        boxShadow: isCenter ? '0 15px 35px -10px rgba(0,0,0,0.15)' : 'none'
                      }}
                    >
                      <img 
                        src={src} 
                        alt="Gallery item" 
                        className="w-full h-full object-cover" 
                      />
                      {!isCenter && <div className="absolute inset-0 bg-surface/30 transition-opacity duration-500"></div>}
                    </div>
                  );
                })}
              </div>

              {/* Right Arrow */}
              <button 
                onClick={handleNext}
                className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center border border-line hover:border-ink transition-colors cursor-pointer text-ink hover:bg-yellow shadow-sm shrink-0 z-30"
              >
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-8">
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
              <a href="mailto:rescue@bfc.org" className="brand-card p-5 md:p-6 flex items-center gap-5 hover:border-ink transition-colors w-full bg-surface shadow-sm">
                <div className="w-12 h-12 rounded-full bg-yellow border border-line-soft flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-ink" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-muted uppercase tracking-[.16em] mb-1">Email Us</div>
                  <div className="font-bold text-[16px] md:text-[18px] text-ink">rescue@bfc.org</div>
                </div>
              </a>
              
              <a href="tel:+911234567890" className="brand-card p-5 md:p-6 flex items-center gap-5 hover:border-ink transition-colors w-full bg-surface shadow-sm">
                <div className="w-12 h-12 rounded-full bg-yellow border border-line-soft flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-ink" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-muted uppercase tracking-[.16em] mb-1">Call Helpline</div>
                  <div className="font-bold text-[16px] md:text-[18px] text-ink">+91 12345 67890</div>
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
