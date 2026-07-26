import React from 'react';
import { PawPrint, Heart } from 'lucide-react';

export default function QRDonate() {
  return (
    <section className="pb-16 px-6 container mx-auto max-w-[1180px]">
      <div className="bg-surface rounded-[24px] p-10 md:p-12 border border-line flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side */}
        <div className="flex-1 flex flex-col pl-4">
          <span className="eyebrow mb-4">Support the movement</span>
          <h3 className="font-display font-bold text-[40px] text-ink mb-2 uppercase leading-[1] tracking-[.01em]">Donate Now</h3>
          <p className="text-muted text-[15px] leading-relaxed max-w-[240px]">
            Scan the QR code to make a direct impact today.
          </p>
        </div>
        
        {/* Center: QR Code */}
        <div className="flex-1 flex justify-center">
          <div className="bg-surface p-4 rounded-xl border border-line">
            <div className="w-32 h-32 bg-[#F4F1EA] flex items-center justify-center relative overflow-hidden rounded-lg">
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
                <div className="bg-white p-1.5 rounded">
                  <div className="bg-yellow w-6 h-6 flex items-center justify-center text-ink text-[10px] font-bold">
                    <PawPrint className="w-4 h-4 fill-current"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6 pr-8 text-center">
          <p className="font-display text-[26px] text-ink max-w-[200px] leading-[1.1] uppercase tracking-[.02em]">
            Every donation<br/>creates a second chance.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 text-ink font-bold text-xs uppercase tracking-[.14em] hover:text-coral transition-colors">
            Other ways to help <Heart className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
