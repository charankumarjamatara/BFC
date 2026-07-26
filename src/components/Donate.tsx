import React from 'react';
import { Heart, ArrowDown } from 'lucide-react';
import dogFeedingImg from '../assets/brown_dog_feeding.png';

export default function Donate() {
  return (
    <section id="donate" className="py-24 px-6 container mx-auto max-w-[1440px]">
      <div className="bg-forest rounded-[32px] overflow-hidden shadow-xl flex flex-col lg:flex-row relative">
        
        {/* Left Side: Dark Green Block */}
        <div className="text-white p-12 lg:w-[30%] flex flex-col justify-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Donate</h2>
          <p className="text-white/90 text-sm leading-relaxed mb-10 max-w-sm">
            Your support helps us rescue, feed, treat and give street animals a better life.
          </p>
          <a href="#contact" className="bg-gold text-charcoal font-bold py-3 px-8 rounded-xl flex items-center gap-2 hover:bg-gold/90 transition-all self-start shadow-md text-sm">
            Donate Now <Heart className="w-4 h-4" />
          </a>
        </div>

        {/* Middle Side: White Progress Box */}
        <div className="bg-white m-4 rounded-[24px] p-10 lg:w-[45%] flex flex-col justify-center z-10 shadow-lg">
          <h3 className="font-serif font-bold text-xl text-charcoal mb-8">Where Your Donation Helps</h3>
          
          <div className="relative mt-4 mb-6">
            {/* The Track */}
            <div className="w-full h-3 bg-gray-100 rounded-full flex items-center justify-between px-2 text-[10px] text-gray-300 font-bold">
              <span>₹10K</span>
              <span>₹50K</span>
            </div>
            
            {/* The Gradient Progress Bar */}
            <div className="absolute top-0 left-0 w-3/4 h-3 rounded-full bg-gradient-to-r from-gold via-[#e6b94e] to-[#7f9882] shadow-inner"></div>

            {/* The Data Points */}
            <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-4">
              
              {/* Point 1 */}
              <div className="relative flex flex-col items-center">
                <div className="w-3 h-3 bg-forest rounded-full border-2 border-white shadow-sm mt-3 relative z-20"></div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center mt-1 w-24">
                  <ArrowDown className="w-3 h-3 text-forest mb-1" />
                  <h4 className="font-bold text-charcoal text-sm">₹100</h4>
                  <p className="text-muted text-[10px] leading-tight text-center">Meals for an animal</p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="relative flex flex-col items-center">
                <div className="w-3 h-3 bg-forest rounded-full border-2 border-white shadow-sm mt-3 relative z-20"></div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center mt-1 w-24">
                  <ArrowDown className="w-3 h-3 text-forest mb-1" />
                  <h4 className="font-bold text-charcoal text-sm">₹500</h4>
                  <p className="text-muted text-[10px] leading-tight text-center">Medical care and treatment</p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="relative flex flex-col items-center">
                <div className="w-3 h-3 bg-forest rounded-full border-2 border-white shadow-sm mt-3 relative z-20"></div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center mt-1 w-24">
                  <ArrowDown className="w-3 h-3 text-forest mb-1" />
                  <h4 className="font-bold text-charcoal text-sm">₹1,000</h4>
                  <p className="text-muted text-[10px] leading-tight text-center">Vaccination & sterilization</p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="relative flex flex-col items-center">
                <div className="w-3 h-3 bg-forest rounded-full border-2 border-white shadow-sm mt-3 relative z-20 opacity-40"></div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center mt-1 w-24">
                  <ArrowDown className="w-3 h-3 text-gray-400 mb-1" />
                  <h4 className="font-bold text-gray-400 text-sm">₹2,500</h4>
                  <p className="text-gray-400 text-[10px] leading-tight text-center">Complete rescue and rehabilitation</p>
                </div>
              </div>

            </div>
          </div>
          {/* Spacer for absolute positioned elements */}
          <div className="h-20"></div>
        </div>
        
        {/* Right Side: Image */}
        <div className="lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-[35%] z-0 h-64 lg:mt-0 mt-4">
          <img 
            src={dogFeedingImg} 
            alt="Feeding dog" 
            className="w-full h-full object-cover lg:rounded-r-[32px]"
          />
        </div>

      </div>
    </section>
  );
}
