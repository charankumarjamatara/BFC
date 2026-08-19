import React from 'react';
import logoImg from '../assets/BFC logo.png';

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-20 pb-8 relative overflow-hidden border-t border-[#333]">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 border-b border-[#333] pb-16">
          
          {/* Branding Column */}
          <div className="col-span-2 md:col-span-4 space-y-6">
            <a href="#" className="flex items-center">
              <img src={logoImg} alt="BFC Logo" className="h-[80px] md:h-[100px] w-auto" />
            </a>
            <div className="flex gap-4 pt-2">
              <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-[#8e8e93] hover:text-ink hover:bg-yellow hover:border-yellow transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-[#8e8e93] hover:text-ink hover:bg-yellow hover:border-yellow transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-[#8e8e93] hover:text-ink hover:bg-yellow hover:border-yellow transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
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
              Emergency Hotline: +91 90089 12829<br/>
              Office Address: Indiranagar, Bangalore, KA, India<br/>
              Email: brutalityfreecommunity@gmail.com
            </p>
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
