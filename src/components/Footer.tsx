import React from 'react';
import { PawPrint, Users, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest text-white/90 pt-20 pb-8 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 border-b border-white/10 pb-16">
          
          {/* Branding Column */}
          <div className="col-span-2 md:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-3">
              <div className="bg-gold p-2.5 rounded-xl text-forest">
                <PawPrint className="w-6 h-6 fill-current" />
              </div>
              <div className="leading-tight text-white font-serif font-bold text-xl tracking-wide">
                BRUTALITY FREE<br/>
                <span className="text-gold text-xs tracking-widest font-sans font-medium">COMMUNITY</span>
              </div>
            </a>
            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              Empowering neighborhoods across Bangalore to rescue, rehabilitate, feed, and collar local street animals. Together, we build a kind community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h4 className="font-serif font-bold text-gold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#activities" className="hover:text-gold transition-colors">Activities</a></li>
              <li><a href="#blogs" className="hover:text-gold transition-colors">Blogs</a></li>
              <li><a href="#donate" className="hover:text-gold transition-colors">Donate Now</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h4 className="font-serif font-bold text-gold text-lg">Programs</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#activities" className="hover:text-gold transition-colors">Animal Rescue</a></li>
              <li><a href="#activities" className="hover:text-gold transition-colors">Feeding Drives</a></li>
              <li><a href="#activities" className="hover:text-gold transition-colors">Collar Drives</a></li>
              <li><a href="#volunteer" className="hover:text-gold transition-colors">Volunteering</a></li>
            </ul>
          </div>

          {/* Contact Details in Footer */}
          <div className="col-span-2 md:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-gold text-lg">Helpline Support</h4>
            <p className="text-sm text-white/70 leading-relaxed">
              Emergency Hotline: +91 98450 12345<br/>
              Office Address: Indiranagar, Bangalore, KA, India<br/>
              Email: rescue@brutalityfreecommunity.org
            </p>
            
            <div className="flex gap-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/60 hover:text-gold transition-colors">
                <Users className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919845012345" target="_blank" rel="noreferrer" className="text-white/60 hover:text-gold transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-xs text-white/50 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Brutality Free Community NGO. All Rights Reserved.</p>
          <p>Designed with compassion for street animals • Registered Trust 12A/80G</p>
        </div>
      </div>
    </footer>
  );
}
