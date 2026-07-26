import React, { useState, useEffect } from 'react';
import { PawPrint, Heart } from 'lucide-react';

export default function Navbar() {
  const [navScrolled, setNavScrolled] = useState(false);

  // Monitor scroll for header glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      navScrolled 
        ? 'bg-forest/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 max-w-[1440px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="bg-gold p-2 rounded-xl text-forest group-hover:rotate-12 transition-transform duration-300">
            <PawPrint className="w-6 h-6 fill-current" />
          </div>
          <div className="leading-tight text-white font-serif font-bold text-lg tracking-wide">
            BRUTALITY FREE<br/>
            <span className="text-gold text-sm tracking-widest font-sans font-medium">COMMUNITY</span>
          </div>
        </a>
        
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/95 tracking-wide">
          <a href="#about" className="hover:text-gold transition-colors duration-200">About Us</a>
          <a href="#activities" className="hover:text-gold transition-colors duration-200">Activities</a>
          <a href="#blogs" className="hover:text-gold transition-colors duration-200">Blogs</a>
          <a href="#donate" className="hover:text-gold transition-colors duration-200">Donate</a>
          <a href="#volunteer" className="hover:text-gold transition-colors duration-200">Volunteer</a>
          <a href="#contact" className="hover:text-gold transition-colors duration-200">Contact</a>
        </div>

        <a href="#donate" className="bg-gold hover:bg-gold/90 text-charcoal font-bold py-2.5 px-6 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-md text-sm">
          Donate Now <Heart className="w-4 h-4 fill-charcoal" />
        </a>
      </div>
    </nav>
  );
}
