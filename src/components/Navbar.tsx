import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate?: (page: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [navScrolled, setNavScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-between py-4 border-b border-line-soft ${
      navScrolled 
        ? 'bg-bg/90 backdrop-blur-md' 
        : 'bg-bg'
    }`}>
      <div className="section-container flex items-center justify-between w-full">
        {/* Brandmark */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <span className="w-[26px] h-[26px] border-[3px] border-yellow border-r-transparent rounded-full -rotate-45" aria-hidden="true"></span>
          <b className="font-display text-[21px] tracking-[.04em] text-ink uppercase">BFC</b>
        </a>
        
        {/* Nav Links */}
        <div className="hidden lg:flex items-center justify-center gap-8 text-[13px] font-semibold text-muted tracking-wide uppercase flex-1">
          <a href="#about" className="hover:text-ink transition-colors duration-200">About Us</a>
          <a href="#activities" className="hover:text-ink transition-colors duration-200">Activities</a>
          <a href="#blogs" className="hover:text-ink transition-colors duration-200">Blogs</a>
          <a href="#donate" className="hover:text-ink transition-colors duration-200">Donate</a>
          <a href="#volunteer" className="hover:text-ink transition-colors duration-200">Volunteer</a>
          <a href="#contact" className="hover:text-ink transition-colors duration-200">Contact</a>
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
