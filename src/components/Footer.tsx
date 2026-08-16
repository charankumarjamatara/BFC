import React from 'react';
import { PawPrint, Users, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-20 pb-8 relative overflow-hidden border-t border-[#333]">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 border-b border-[#333] pb-16">
          
          {/* Branding Column */}
          <div className="col-span-2 md:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-4">
              <div className="bg-yellow p-2.5 rounded-lg text-ink">
                <PawPrint className="w-6 h-6 fill-current" />
              </div>
              <div className="leading-[1.1] text-white font-display text-[26px] uppercase tracking-[.02em]">
                BRUTALITY FREE<br/>
                <span className="text-yellow text-[13px] tracking-[.14em] font-sans font-bold block mt-1">COMMUNITY</span>
              </div>
            </a>
            <p className="text-[14.5px] text-[#8e8e93] max-w-sm leading-relaxed">
              Empowering neighborhoods across Bangalore to rescue, rehabilitate, feed, and collar local street animals. Together, we build a kind community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-2 space-y-5">
            <h4 className="font-display text-yellow text-[20px] uppercase tracking-[.02em]">Quick Links</h4>
            <ul className="space-y-3 text-[14.5px] text-[#8e8e93]">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#activities" className="hover:text-white transition-colors">Activities</a></li>
              <li><a href="#blogs" className="hover:text-white transition-colors">Blogs</a></li>
              <li><a href="#donate" className="hover:text-coral transition-colors text-coral font-bold">Donate Now</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="col-span-1 md:col-span-2 space-y-5">
            <h4 className="font-display text-yellow text-[20px] uppercase tracking-[.02em]">Programs</h4>
            <ul className="space-y-3 text-[14.5px] text-[#8e8e93]">
              <li><a href="#activities" className="hover:text-white transition-colors">Animal Rescue</a></li>
              <li><a href="#activities" className="hover:text-white transition-colors">Feeding Drives</a></li>
              <li><a href="#activities" className="hover:text-white transition-colors">Collar Drives</a></li>
              <li><a href="#volunteer" className="hover:text-white transition-colors">Volunteering</a></li>
            </ul>
          </div>

          {/* Contact Details in Footer */}
          <div className="col-span-2 md:col-span-4 space-y-5">
            <h4 className="font-display text-yellow text-[20px] uppercase tracking-[.02em]">Helpline Support</h4>
            <p className="text-[14.5px] text-[#8e8e93] leading-relaxed">
              Emergency Hotline: +91 98450 12345<br/>
              Office Address: Indiranagar, Bangalore, KA, India<br/>
              Email: rescue@brutalityfreecommunity.org
            </p>
            
            <div className="flex gap-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-[#8e8e93] hover:text-ink hover:bg-yellow hover:border-yellow transition-colors">
                <Users className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919845012345" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-[#8e8e93] hover:text-ink hover:bg-yellow hover:border-yellow transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-[12px] text-[#8e8e93] space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Brutality Free Community NGO. All Rights Reserved.</p>
          <p>Designed with compassion for street animals • Registered Trust 12A/80G</p>
        </div>
      </div>
    </footer>
  );
}
