import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-between px-6 py-4 border-b border-line-soft ${
      navScrolled 
        ? 'bg-bg/90 backdrop-blur-md' 
        : 'bg-bg'
    }`}>
      <div className="container mx-auto max-w-[1180px] flex items-center justify-between">
        {/* Brandmark */}
        <a href="#" className="flex items-center gap-3">
          <span className="w-[26px] h-[26px] border-[3px] border-yellow border-r-transparent rounded-full -rotate-45" aria-hidden="true"></span>
          <b className="font-display text-[21px] tracking-[.04em] text-ink uppercase">BFC</b>
        </a>
        
        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-[13px] font-semibold text-muted tracking-wide uppercase">
          <a href="#about" className="hover:text-ink transition-colors duration-200">About Us</a>
          <a href="#activities" className="hover:text-ink transition-colors duration-200">Activities</a>
          <a href="#blogs" className="hover:text-ink transition-colors duration-200">Blogs</a>
          <a href="#donate" className="hover:text-ink transition-colors duration-200">Donate</a>
          <a href="#volunteer" className="hover:text-ink transition-colors duration-200">Volunteer</a>
          <a href="#contact" className="hover:text-ink transition-colors duration-200">Contact</a>
        </div>

        {/* CTA & Theme Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink hover:bg-yellow hover:border-yellow transition-colors cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <a href="#donate" className="btn-primary !py-3 !px-6">
            Donate Now
          </a>
        </div>
      </div>
    </nav>
  );
}
