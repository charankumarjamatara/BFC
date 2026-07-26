import React from 'react';
import { Heart, ArrowDown } from 'lucide-react';
import dogFeedingImg from '../assets/brown_dog_feeding.png';

export default function Donate() {
  return (
    <section id="donate" className="py-24 px-6 container mx-auto max-w-[1180px]">
      <div className="bg-ink rounded-[24px] overflow-hidden flex flex-col lg:flex-row relative">
        
        {/* Left Side: Dark Block */}
        <div className="text-white p-12 lg:w-[35%] flex flex-col justify-center z-10">
          <h2 className="text-[52px] font-display uppercase tracking-[.01em] mb-6 leading-[1.1]">Donate</h2>
          <p className="text-[#cfcfd3] text-[15px] leading-relaxed mb-10 max-w-sm">
            Your support helps us rescue, feed, treat and give street animals a better life.
          </p>
          <a href="#contact" className="bg-coral text-[#3a0f06] font-bold py-3.5 px-8 rounded-full flex items-center justify-center gap-2 hover:bg-[#D6432A] transition-colors self-start text-xs uppercase tracking-[.14em]">
            Donate Now <Heart className="w-4 h-4" />
          </a>
        </div>

        {/* Middle Side: Progress Box */}
        <div className="bg-surface m-4 rounded-[16px] p-10 lg:w-[45%] flex flex-col justify-center z-10 border border-line">
          <h3 className="font-display text-2xl text-ink uppercase mb-8 tracking-[.02em]">Where Your Donation Helps</h3>
          
          <div className="relative mt-4 mb-6">
            <div className="w-full h-3 bg-[#F4F1EA] rounded-full flex items-center justify-between px-2 text-[10px] text-muted font-bold">
              <span>₹10K</span>
              <span>₹50K</span>
            </div>
            
            <div className="absolute top-0 left-0 w-3/4 h-3 rounded-full bg-yellow shadow-inner"></div>

            <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-4">
              
              <div className="relative flex flex-col items-center">
                <div className="w-3 h-3 bg-ink rounded-full border-2 border-surface mt-3 relative z-20"></div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center mt-1 w-24">
                  <ArrowDown className="w-3 h-3 text-ink mb-1" />
                  <h4 className="font-bold text-ink text-sm">₹100</h4>
                  <p className="text-muted text-[10px] leading-tight text-center">Meals for an animal</p>
                </div>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="w-3 h-3 bg-ink rounded-full border-2 border-surface mt-3 relative z-20"></div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center mt-1 w-24">
                  <ArrowDown className="w-3 h-3 text-ink mb-1" />
                  <h4 className="font-bold text-ink text-sm">₹500</h4>
                  <p className="text-muted text-[10px] leading-tight text-center">Medical care and treatment</p>
                </div>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="w-3 h-3 bg-ink rounded-full border-2 border-surface mt-3 relative z-20"></div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center mt-1 w-24">
                  <ArrowDown className="w-3 h-3 text-ink mb-1" />
                  <h4 className="font-bold text-ink text-sm">₹1,000</h4>
                  <p className="text-muted text-[10px] leading-tight text-center">Vaccination & sterilization</p>
                </div>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="w-3 h-3 bg-ink rounded-full border-2 border-surface mt-3 relative z-20 opacity-40"></div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center mt-1 w-24">
                  <ArrowDown className="w-3 h-3 text-slate mb-1" />
                  <h4 className="font-bold text-slate text-sm">₹2,500</h4>
                  <p className="text-slate text-[10px] leading-tight text-center">Complete rescue & rehab</p>
                </div>
              </div>

            </div>
          </div>
          <div className="h-20"></div>
        </div>
        
        {/* Right Side: Image */}
        <div className="lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-[35%] z-0 h-64 lg:mt-0 mt-4">
          <img 
            src={dogFeedingImg} 
            alt="Feeding dog" 
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity lg:rounded-r-[24px]"
          />
        </div>

      </div>
    </section>
  );
}
