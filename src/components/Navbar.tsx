import React, { useState, useEffect } from 'react';
import logoImg from '../assets/BFC logo.png';

interface NavbarProps {
  onNavigate?: (page: string) => void;
  transparentOnTop?: boolean;
}

export default function Navbar({ onNavigate, transparentOnTop = false }: NavbarProps) {
  const [navScrolled, setNavScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = transparentOnTop && !navScrolled;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-between py-4 ${
      isTransparent 
        ? 'bg-transparent border-b border-transparent' 
        : 'bg-bg/90 backdrop-blur-md border-b border-line-soft'
    }`}>
      <div className="section-container flex items-center justify-between w-full">
        {/* Brandmark */}
        <a href="#" className="flex items-center shrink-0">
          <img src={logoImg} alt="BFC Logo" className="h-[50px] md:h-[60px] w-auto" />
        </a>
        
        {/* Nav Links */}
        <div className={`hidden lg:flex items-center justify-center gap-8 text-[13px] font-semibold tracking-wide uppercase flex-1 transition-colors duration-300 ${isTransparent ? 'text-white/80' : 'text-muted'}`}>
          <a href="#about" className={`transition-colors duration-200 ${isTransparent ? 'hover:text-white' : 'hover:text-ink'}`}>About Us</a>
          <a href="#activities" className={`transition-colors duration-200 ${isTransparent ? 'hover:text-white' : 'hover:text-ink'}`}>Activities</a>
          <a href="#blogs" className={`transition-colors duration-200 ${isTransparent ? 'hover:text-white' : 'hover:text-ink'}`}>Blogs</a>
          <a href="#donate" className={`transition-colors duration-200 ${isTransparent ? 'hover:text-white' : 'hover:text-ink'}`}>Donate</a>
          <a href="#adoption" className={`transition-colors duration-200 ${isTransparent ? 'hover:text-white' : 'hover:text-ink'}`}>Adoption</a>
          <a href="#volunteer" className={`transition-colors duration-200 ${isTransparent ? 'hover:text-white' : 'hover:text-ink'}`}>Volunteer</a>
          <a href="#contact" className={`transition-colors duration-200 ${isTransparent ? 'hover:text-white' : 'hover:text-ink'}`}>Contact</a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4 shrink-0">
          <button 
            onClick={() => onNavigate?.('donate')} 
            className="btn-primary"
          >
            Donate Now
          </button>
        </div>
      </div>
    </nav>
  );
}
