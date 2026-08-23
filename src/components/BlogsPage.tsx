import React from 'react';
import { ArrowLeft } from 'lucide-react';
import blog1Img from '../assets/blogs/The Art Of Noticing.webp';
import blog2Img from '../assets/blogs/This is a Positive Investment.webp';
import blog3Img from '../assets/blogs/Indie Pup Looking for Home.webp';
import blog4Img from '../assets/blogs/A LITTLE KINDNESS GOES A LONG WAY.jpeg';
import blog5Img from '../assets/blogs/EVERY LIFE DESERVES A SAFE PLACE.jpeg';

export default function BlogsPage({ onBack }: { onBack?: () => void }) {
  
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

  return (
    <div className="w-full flex flex-col animate-fade-in bg-surface pt-20 md:pt-24 pb-16 md:pb-24">
      
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
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12 mb-10 md:mb-14">
            <div className="w-full md:w-[45%] lg:w-[40%]">
              <span className="eyebrow mb-2 block">Read our stories</span>
              <h1 className="font-display text-[clamp(40px,6.5vw,72px)] text-ink uppercase leading-[.92] tracking-[.01em]">
                Blogs<span className="inline-block w-3 h-3 md:w-4 md:h-4 bg-yellow align-baseline ml-1.5 md:ml-2"></span>
              </h1>
            </div>
            <div className="w-full md:w-[55%] lg:w-[60%] pb-1 md:pb-3">
              <p className="text-muted text-[16px] md:text-[18px] leading-relaxed max-w-md">
                Tales of rescue, recovery, and hope. Discover the lives we've touched and the impact of our community.
              </p>
            </div>
          </div>
          
          {/* 3-COLUMN EDITORIAL ARTICLE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {blogs.map((blog) => (
              <article key={blog.id} className="flex flex-col group cursor-pointer bg-surface rounded-[16px]">
                
                {/* IMAGE TOP */}
                <div className="relative w-full h-[220px] sm:h-[260px] md:h-[240px] lg:h-[260px] rounded-[16px] overflow-hidden mb-5">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                
                {/* CONTENT BOTTOM */}
                <div className="flex flex-col flex-1 px-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="eyebrow !text-[10px]">{blog.category}</span>
                    <span className="w-1 h-1 rounded-full bg-line-soft"></span>
                    <span className="text-muted text-[10px] font-bold uppercase tracking-wider">{blog.date}</span>
                  </div>
                  
                  <h2 className="font-display text-[26px] md:text-[28px] lg:text-[32px] text-ink uppercase leading-[1.05] tracking-[.01em] mb-3">
                    {blog.title}
                  </h2>
                  
                  <p className="text-muted text-[14px] md:text-[15px] leading-relaxed">
                    {blog.description}
                  </p>
                </div>
                
              </article>
            ))}

          </div>
          
        </div>
      </section>

    </div>
  );
}
