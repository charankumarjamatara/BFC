import React from 'react';
import { Heart, PawPrint } from 'lucide-react';

export default function QRDonate() {
  return (
    <section className="pb-16 px-6 container mx-auto max-w-[1440px]">
      <div className="bg-[#FAF8F3] rounded-[32px] p-10 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side: Doodle and Text */}
        <div className="flex-1 flex items-center gap-8 pl-4">
          <div className="text-gray-300 transform -rotate-12 relative">
            <Heart className="w-12 h-12 stroke-[1px] absolute top-0 -left-6" />
            <Heart className="w-8 h-8 stroke-[1px] ml-4 mt-6" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-3xl text-forest mb-2">Donate Now</h3>
            <p className="text-charcoal text-sm leading-relaxed max-w-[200px]">
              Scan the QR code to support our mission.
            </p>
          </div>
        </div>
        
        {/* Center: QR Code */}
        <div className="flex-1 flex justify-center relative">
          {/* Doodle Arrow pointing to QR (simulated with SVG) */}
          <div className="absolute top-1/2 -left-16 -translate-y-1/2 text-charcoal/40 hidden lg:block">
            <svg width="80" height="30" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 15 Q 40 30 75 15" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M70 10 L 78 15 L 70 20" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          
          <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-200">
            <div className="w-32 h-32 bg-gray-50 flex items-center justify-center relative overflow-hidden rounded-xl border border-dashed border-gray-300 p-2">
              <svg className="w-full h-full text-charcoal" viewBox="0 0 100 100" fill="currentColor">
                <rect x="0" y="0" width="25" height="25" />
                <rect x="5" y="5" width="15" height="15" fill="white" />
                <rect x="9" y="9" width="7" height="7" />
                
                <rect x="75" y="0" width="25" height="25" />
                <rect x="80" y="5" width="15" height="15" fill="white" />
                <rect x="84" y="9" width="7" height="7" />
                
                <rect x="0" y="75" width="25" height="25" />
                <rect x="5" y="80" width="15" height="15" fill="white" />
                <rect x="8" y="84" width="8" height="8" />
                
                {/* Random blocks */}
                <rect x="35" y="10" width="10" height="15" />
                <rect x="55" y="5" width="15" height="10" />
                <rect x="35" y="35" width="30" height="10" />
                <rect x="10" y="45" width="15" height="20" />
                <rect x="40" y="60" width="15" height="15" />
                <rect x="80" y="40" width="15" height="25" />
                <rect x="65" y="75" width="10" height="15" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white p-1 rounded shadow-sm">
                  <div className="bg-gold w-6 h-6 flex items-center justify-center text-forest rounded-sm text-[10px] font-bold">
                    <PawPrint className="w-4 h-4 fill-current"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Handwritten Text */}
        <div className="flex-1 flex items-center justify-center gap-6 relative pr-8">
          <p className="font-serif italic text-2xl text-charcoal max-w-[200px] leading-snug">
            Every donation creates a second chance.
          </p>
          <div className="flex flex-col gap-2 opacity-30 absolute bottom-0 right-4">
             <Heart className="w-8 h-8 stroke-[1px] transform -rotate-12" />
             <PawPrint className="w-8 h-8 fill-current transform rotate-12 ml-4" />
          </div>
        </div>

      </div>
    </section>
  );
}
