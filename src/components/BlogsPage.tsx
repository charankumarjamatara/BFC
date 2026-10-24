import React, { useState, useMemo } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import BlogCarousel from './BlogCarousel';
import blog1Img from '../assets/blogs/The Art Of Noticing.webp';
import blog2Img from '../assets/blogs/This is a Positive Investment.webp';
import blog3Img from '../assets/blogs/Indie Pup Looking for Home.webp';
import blog4Img from '../assets/blogs/A LITTLE KINDNESS GOES A LONG WAY.jpeg';
import blog5Img from '../assets/blogs/EVERY LIFE DESERVES A SAFE PLACE.jpeg';

export default function BlogsPage({ onBack }: { onBack?: () => void }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const blogs = [
    {
      id: 1,
      title: 'The Art Of Noticing',
      description: "Noticing the wag of a tail, the eyes that speak without words, the life that's lived in silence and survival.",
      image: blog1Img,
      category: 'Stories',
      date: 'June 2026'
    },
    {
      id: 2,
      title: 'This is a Positive Investment',
      description: 'Because every meal, every medicine, every rescued life is a step towards a better world.',
      image: blog2Img,
      category: 'Impact',
      date: 'May 2026'
    },
    {
      id: 3,
      title: 'Indie Pup Looking for Home',
      description: "These adorable indie pups are looking for their forever homes. Let's give them the love they deserve.",
      image: blog3Img,
      category: 'Adoption',
      date: 'April 2026'
    },
    {
      id: 4,
      title: 'A Little Kindness Goes A Long Way',
      description: 'Sometimes, care begins with nothing more than a gentle touch. Every act of kindness can make a rescued animal feel safe, loved, and remembered.',
      image: blog4Img,
      category: 'Community',
      date: 'June 2026'
    },
    {
      id: 5,
      title: 'Every Life Deserves A Safe Place',
      description: 'A quiet moment of rest can mean a lot to an animal recovering from life on the streets. Care, patience, and compassion give them a chance to heal.',
      image: blog5Img,
      category: 'Rescue',
      date: 'June 2026'
    }
  ];

  const filteredBlogs = useMemo(() => {
    if (!searchQuery.trim()) return blogs;
    const lowerQuery = searchQuery.toLowerCase();
    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(lowerQuery) ||
        blog.description.toLowerCase().includes(lowerQuery) ||
        blog.category.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery, blogs]);

  return (
    <div className="w-full flex flex-col animate-fade-in bg-surface pt-20 md:pt-24 pb-16 md:pb-24 min-h-screen">
      
      <section className="section-wrapper border-t-0 bg-surface !pt-4 md:!pt-8 !pb-0">
        <div className="section-container">
          
          {/* BACK BUTTON */}
          <button 
            onClick={onBack} 
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-muted hover:text-ink transition-colors mb-8 md:mb-12 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          
          {/* HEADER INTRODUCTION */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12 mb-10 md:mb-14">
            <div className="w-full md:w-1/2">
              <span className="eyebrow mb-2 block">Read our stories</span>
              <h1 className="font-display text-[clamp(40px,6.5vw,72px)] text-ink uppercase leading-[.92] tracking-[.01em]">
                Blogs<span className="inline-block w-3 h-3 md:w-4 md:h-4 bg-yellow align-baseline ml-1.5 md:ml-2"></span>
              </h1>
            </div>
            
            {/* SEARCH BAR */}
            <div className="w-full md:w-1/2 md:max-w-md pb-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search blogs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-full outline-none focus:outline-none hover:border-[#FFD400] focus:border-[#FFD400] focus:ring-2 focus:ring-[#FFD400] active:border-[#FFD400] transition-all text-[15px] shadow-sm text-ink placeholder-muted"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
              </div>
            </div>
          </div>
          
          {/* HORIZONTAL BLOG CAROUSEL */}
          <BlogCarousel 
            blogs={filteredBlogs} 
            searchQuery={searchQuery} 
            onClearSearch={() => setSearchQuery('')} 
          />
          
        </div>
      </section>

    </div>
  );
}
