import React from 'react';
import { ArrowLeft } from 'lucide-react';
import blog1Img from '../assets/blogs/The Art Of Noticing.webp';
import blog2Img from '../assets/blogs/This is a Positive Investment.webp';
import blog3Img from '../assets/blogs/Indie Pup Looking for Home.webp';

export default function BlogsPage({ onBack }: { onBack?: () => void }) {
  
  const blogs = [
    {
      id: 1,
      title: 'The Art Of Noticing',
      description: "Noticing the wag of a tail, the eyes that speak without words, the life that's lived in silence and survival.",
      image: blog1Img,
    },
    {
      id: 2,
      title: 'This is a Positive Investment',
      description: 'Because every meal, every medicine, every rescued life is a step towards a better world.',
      image: blog2Img,
    },
    {
      id: 3,
      title: 'Indie Pup Looking for Home',
      description: "These adorable indie pups are looking for their forever homes. Let's give them the love they deserve.",
      image: blog3Img,
    }
  ];

  return (
    <div className="w-full flex flex-col animate-fade-in bg-surface pt-20 md:pt-24">
      
      {/* 1. HEADER */}
      <section className="section-wrapper border-t-0 bg-surface !pt-4 md:!pt-8 !pb-4 md:!pb-8">
        <div className="section-container">
          
          <button 
            onClick={onBack} 
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-muted hover:text-ink transition-colors mb-10 md:mb-14 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          
          <div className="flex flex-col text-left pb-4">
            <span className="eyebrow mb-2">Read our stories</span>
            <h1 className="font-display text-[clamp(40px,6.5vw,72px)] text-ink uppercase leading-[.92] tracking-[.01em] mb-4">
              Blogs<span className="inline-block w-3 h-3 bg-yellow align-baseline ml-1.5"></span>
            </h1>
            <p className="text-muted text-[16px] md:text-[18px] leading-relaxed max-w-sm">
              Tales of rescue, recovery, and hope. Discover the lives we've touched and the impact of our community.
            </p>
          </div>
          
        </div>
      </section>

      {/* 2. BLOG 01 */}
      <section className="section-wrapper border-t-0 bg-surface border-b border-line-soft !py-6 md:!py-10">
        <div className="section-container">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            
            {/* Image Left */}
            <div className="w-full md:w-[35%] h-[240px] md:h-[320px] rounded-[16px] overflow-hidden">
              <img 
                src={blogs[0].image} 
                alt={blogs[0].title} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Text Right */}
            <div className="w-full md:w-[65%] text-left py-4 md:py-0">
              <h2 className="font-display text-[clamp(40px,5vw,56px)] text-ink uppercase leading-[.92] tracking-[.01em] mb-5">
                {blogs[0].title}
              </h2>
              <p className="text-muted text-[16px] leading-relaxed mb-8 max-w-md">
                {blogs[0].description}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. BLOG 02 */}
      <section className="section-wrapper bg-surface border-b border-line-soft !py-6 md:!py-10">
        <div className="section-container">
          <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 items-center">
            
            {/* Text Left */}
            <div className="w-full md:w-[65%] text-left py-4 md:py-0">
              <h2 className="font-display text-[clamp(40px,5vw,56px)] text-ink uppercase leading-[.92] tracking-[.01em] mb-5">
                {blogs[1].title}
              </h2>
              <p className="text-muted text-[16px] leading-relaxed mb-8 max-w-md">
                {blogs[1].description}
              </p>
            </div>

            {/* Image Right */}
            <div className="w-full md:w-[35%] h-[240px] md:h-[320px] rounded-[16px] overflow-hidden">
              <img 
                src={blogs[1].image} 
                alt={blogs[1].title} 
                className="w-full h-full object-cover" 
              />
            </div>

          </div>
        </div>
      </section>

      {/* 4. BLOG 03 */}
      <section className="section-wrapper bg-surface !py-6 md:!py-10">
        <div className="section-container">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            
            {/* Image Left */}
            <div className="w-full md:w-[35%] h-[240px] md:h-[320px] rounded-[16px] overflow-hidden">
              <img 
                src={blogs[2].image} 
                alt={blogs[2].title} 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Text Right */}
            <div className="w-full md:w-[65%] text-left py-4 md:py-0">
              <h2 className="font-display text-[clamp(40px,5vw,56px)] text-ink uppercase leading-[.92] tracking-[.01em] mb-5">
                {blogs[2].title}
              </h2>
              <p className="text-muted text-[16px] leading-relaxed mb-8 max-w-md">
                {blogs[2].description}
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
