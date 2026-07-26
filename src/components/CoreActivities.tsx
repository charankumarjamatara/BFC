import React from 'react';
import { PawPrint, Shield, Home, BookOpen } from 'lucide-react';

export default function CoreActivities() {
  return (
    <div className="w-full pt-24 mb-24">
      <div className="text-gold font-bold text-xs uppercase tracking-widest mb-6 flex items-center justify-center gap-2">
        ABOUT US <PawPrint className="w-3.5 h-3.5 fill-current" />
      </div>
      
      {/* What our organization does section */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest leading-[1.3] mb-12">
          We are a volunteer driven Organization.<br/>
          <span className="text-charcoal/80 text-2xl md:text-3xl mt-4 block font-medium">What our organization does:</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-100 rounded-[24px] p-10 shadow-sm flex flex-col items-center justify-center text-center gap-6 hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-20 h-20 rounded-2xl bg-beige text-gold flex items-center justify-center shadow-inner">
              <Shield className="w-10 h-10" />
            </div>
            <h4 className="font-serif font-bold text-2xl text-forest">Animal Rescue</h4>
          </div>
          
          <div className="bg-white border border-gray-100 rounded-[24px] p-10 shadow-sm flex flex-col items-center justify-center text-center gap-6 hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-20 h-20 rounded-2xl bg-beige text-gold flex items-center justify-center shadow-inner">
              <Home className="w-10 h-10" />
            </div>
            <h4 className="font-serif font-bold text-2xl text-forest">Adoption</h4>
          </div>
          
          <div className="bg-white border border-gray-100 rounded-[24px] p-10 shadow-sm flex flex-col items-center justify-center text-center gap-6 hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-20 h-20 rounded-2xl bg-beige text-gold flex items-center justify-center shadow-inner">
              <BookOpen className="w-10 h-10" />
            </div>
            <h4 className="font-serif font-bold text-2xl text-forest">Education & Awareness</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
