import React, { useState } from 'react';
import { PhoneCall, MessageSquare, X } from 'lucide-react';

export default function EmergencyBar() {
  const [collapsed, setCollapsed] = useState(false);

  if (collapsed) {
    return (
      <button 
        onClick={() => setCollapsed(false)}
        className="fixed bottom-6 right-6 z-50 bg-coral text-[#3a0f06] font-bold p-3.5 rounded-full shadow-2xl flex items-center gap-2 text-xs uppercase tracking-widest hover:scale-105 transition-transform"
      >
        <PhoneCall className="w-4 h-4 animate-bounce" />
        <span className="hidden sm:inline">Rescue Helpline</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-ink text-white p-3 rounded-full border border-[#333] shadow-2xl flex items-center gap-3 max-w-[90vw] sm:max-w-auto">
      <div className="flex items-center gap-2 bg-coral text-[#3a0f06] px-3.5 py-2 rounded-full font-bold text-[11px] tracking-wider uppercase shrink-0">
        <span className="w-2 h-2 rounded-full bg-[#3a0f06] animate-ping"></span>
        <PhoneCall className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Helpline:</span>
        <a href="tel:+919008912829" className="hover:underline">+91 90089 12829</a>
      </div>

      <a 
        href="https://wa.me/919008912829" 
        target="_blank" 
        rel="noreferrer"
        className="hidden md:flex items-center gap-1.5 bg-teal text-[#04332d] px-3 py-2 rounded-full font-bold text-[11px] uppercase tracking-wider hover:bg-[#15a393] transition-colors"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        WhatsApp
      </a>

      <a 
        href="#donate" 
        className="flex items-center gap-1.5 bg-coral text-[#3a0f06] px-3.5 py-2 rounded-full font-bold text-[11px] uppercase tracking-wider hover:bg-[#D6432A] transition-colors"
      >
        Donate
      </a>

      <button 
        onClick={() => setCollapsed(true)}
        className="text-muted hover:text-white p-1 rounded-full text-xs"
        title="Minimize"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
