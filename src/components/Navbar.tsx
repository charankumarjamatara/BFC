import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/BFC logo.png';

interface NavbarProps {
  onNavigate?: (page: string) => void;
  transparentOnTop?: boolean;
}

export default function Navbar({ onNavigate, transparentOnTop = false }: NavbarProps) {
  const [navScrolled, setNavScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (page?: string) => {
    setIsMobileMenuOpen(false);
    if (page && onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-between py-4 ${
      isTransparent && !isMobileMenuOpen
        ? 'bg-transparent border-b border-transparent' 
        : 'bg-bg/95 backdrop-blur-md border-b border-line-soft'
    }`}>
      <div className="section-container px-5 md:px-12 lg:px-0 flex items-center justify-between w-full relative">
        {/* Brandmark */}
        <a href="#" onClick={() => handleNavClick()} className="flex items-center gap-2 md:gap-[10px] shrink-0 z-50">
          <img src={logoImg} alt="BFC Logo" className="h-[35px] md:h-[60px] w-auto" />
          <div className={`flex flex-col font-display text-[12px] sm:text-[14px] md:text-[18px] uppercase tracking-[.02em] leading-[1.1] ${isTransparent && !isMobileMenuOpen ? 'text-white' : 'text-ink'}`}>
            <span>Brutality Free</span>
            <span>Community</span>
          </div>
        </a>
        
        {/* Desktop Nav Links */}
        <div className={`hidden lg:flex items-center justify-center gap-8 text-[13px] font-semibold tracking-wide uppercase flex-1 transition-colors duration-300 ${isTransparent && !isMobileMenuOpen ? 'text-white/80' : 'text-muted'}`}>
          <a href="#about" className={`transition-colors duration-200 ${isTransparent && !isMobileMenuOpen ? 'hover:text-white' : 'hover:text-ink'}`}>About Us</a>
          <a href="#activities" className={`transition-colors duration-200 ${isTransparent && !isMobileMenuOpen ? 'hover:text-white' : 'hover:text-ink'}`}>Activities</a>
          <a href="#blogs" className={`transition-colors duration-200 ${isTransparent && !isMobileMenuOpen ? 'hover:text-white' : 'hover:text-ink'}`}>Blogs</a>
          <a href="#donate" className={`transition-colors duration-200 ${isTransparent && !isMobileMenuOpen ? 'hover:text-white' : 'hover:text-ink'}`}>Donate</a>
          <a href="#adoption" className={`transition-colors duration-200 ${isTransparent && !isMobileMenuOpen ? 'hover:text-white' : 'hover:text-ink'}`}>Adoption</a>
          <a href="#volunteer" className={`transition-colors duration-200 ${isTransparent && !isMobileMenuOpen ? 'hover:text-white' : 'hover:text-ink'}`}>Volunteer</a>
          <a href="#contact" className={`transition-colors duration-200 ${isTransparent && !isMobileMenuOpen ? 'hover:text-white' : 'hover:text-ink'}`}>Contact</a>
        </div>

        {/* CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 md:gap-4 shrink-0 z-50">
          <button 
            onClick={() => handleNavClick('donate')} 
            className="hidden md:block btn-primary !px-3 !py-2 md:!px-6 md:!py-3 text-[10px] md:text-[13px]"
          >
            Donate Now
          </button>
          
          {/* Hamburger Icon */}
          <button 
            className={`lg:hidden p-1 transition-colors ${isTransparent && !isMobileMenuOpen ? 'text-white' : 'text-ink'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-bg border-b border-line-soft h-[calc(100vh-82px)] overflow-y-auto flex flex-col animate-fade-in shadow-xl pb-10">
          <div className="flex flex-col px-6 py-8 gap-6 text-[15px] font-semibold tracking-wide uppercase text-ink">
            <a href="#about" onClick={() => handleNavClick()} className="hover:text-yellow transition-colors border-b border-line-soft pb-4">About Us</a>
            <a href="#activities" onClick={() => handleNavClick()} className="hover:text-yellow transition-colors border-b border-line-soft pb-4">Activities</a>
            <a href="#blogs" onClick={() => handleNavClick()} className="hover:text-yellow transition-colors border-b border-line-soft pb-4">Blogs</a>
            <a href="#donate" onClick={() => handleNavClick()} className="hover:text-yellow transition-colors border-b border-line-soft pb-4">Donate</a>
            <a href="#adoption" onClick={() => handleNavClick()} className="hover:text-yellow transition-colors border-b border-line-soft pb-4">Adoption</a>
            <a href="#volunteer" onClick={() => handleNavClick()} className="hover:text-yellow transition-colors border-b border-line-soft pb-4">Volunteer</a>
            <a href="#contact" onClick={() => handleNavClick()} className="hover:text-yellow transition-colors pb-4">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
