import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface BlogItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

interface BlogCarouselProps {
  blogs: BlogItem[];
  searchQuery: string;
  onClearSearch: () => void;
  autoPlayInterval?: number;
}

export default function BlogCarousel({
  blogs,
  searchQuery,
  onClearSearch,
  autoPlayInterval = 3500
}: BlogCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // For seamless infinite looping in Embla across all screen sizes (needs enough slides for 3-column view)
  const displayItems = useMemo(() => {
    if (blogs.length === 0 || blogs.length === 1) return blogs;
    if (blogs.length < 6) {
      const list: BlogItem[] = [];
      while (list.length < 6) {
        list.push(...blogs);
      }
      return list.map((item, idx) => ({
        ...item,
        carouselKey: `${item.id}-clone-${idx}`
      }));
    }
    return blogs.map((item, idx) => ({
      ...item,
      carouselKey: `${item.id}-${idx}`
    }));
  }, [blogs]);

  const canLoop = blogs.length > 1;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: canLoop,
    align: 'start',
    skipSnaps: false,
    duration: 40
  });

  // Track active slide index
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Re-init embla when items change
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      setSelectedIndex(0);
    }
  }, [emblaApi, displayItems.length]);

  // Pause autoplay temporarily and resume after idle period
  const triggerInteractionPause = useCallback(() => {
    setIsInteracting(true);
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
    }
    idleTimerRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 4000);
  }, []);

  // Listen to pointer events on emblaApi
  useEffect(() => {
    if (!emblaApi) return;
    const handlePointerDown = () => triggerInteractionPause();
    emblaApi.on('pointerDown', handlePointerDown);
    return () => {
      emblaApi.off('pointerDown', handlePointerDown);
    };
  }, [emblaApi, triggerInteractionPause]);

  // Autoplay moving LEFT TO RIGHT (cards visually travel toward the right)
  useEffect(() => {
    if (!emblaApi || !canLoop || prefersReducedMotion || isHovered || isInteracting) {
      return;
    }

    const interval = setInterval(() => {
      // scrollPrev() makes cards slide towards the right
      emblaApi.scrollPrev();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [emblaApi, canLoop, prefersReducedMotion, isHovered, isInteracting, autoPlayInterval]);

  // Clean up idle timer on unmount
  useEffect(() => {
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, []);

  const handlePrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    triggerInteractionPause();
  }, [emblaApi, triggerInteractionPause]);

  const handleNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    triggerInteractionPause();
  }, [emblaApi, triggerInteractionPause]);

  // Handle 0 results empty state
  if (blogs.length === 0) {
    return (
      <div className="py-20 text-center flex flex-col items-center">
        <p className="text-muted text-[18px] mb-4">No blogs found matching "{searchQuery}"</p>
        <button 
          onClick={onClearSearch}
          className="px-6 py-2 bg-bg border border-line-soft rounded-full text-ink font-medium text-[14px] hover:bg-surface transition-colors cursor-pointer"
        >
          Clear Search
        </button>
      </div>
    );
  }

  // Handle single result (no carousel needed)
  if (blogs.length === 1) {
    const blog = blogs[0];
    return (
      <div className="max-w-md mx-auto">
        <article className="bg-white border border-gray-100 rounded-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col h-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 group cursor-pointer">
          <div className="relative w-full h-[220px] shrink-0 overflow-hidden">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>
          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[#E53E3E] text-[13px] font-bold uppercase tracking-wide">{blog.category}</span>
              <span className="text-muted text-[13px]">{blog.date}</span>
            </div>
            <h2 className="font-display text-[22px] text-ink leading-[1.2] mb-3 line-clamp-2">
              {blog.title}
            </h2>
            <p className="text-muted text-[15px] leading-relaxed line-clamp-3">
              {blog.description}
            </p>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Desktop Prev / Next Buttons */}
      <button 
        onClick={handlePrev}
        className="hidden md:flex absolute -left-4 lg:-left-6 top-[42%] -translate-y-1/2 z-20 w-11 h-11 bg-white hover:bg-surface border border-line-soft rounded-full items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all text-ink cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FFD400]"
        aria-label="Previous story"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button 
        onClick={handleNext}
        className="hidden md:flex absolute -right-4 lg:-right-6 top-[42%] -translate-y-1/2 z-20 w-11 h-11 bg-white hover:bg-surface border border-line-soft rounded-full items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all text-ink cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FFD400]"
        aria-label="Next story"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Embla Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div 
          className="flex touch-pan-y -ml-5 sm:-ml-6" 
          style={{ backfaceVisibility: 'hidden' }}
        >
          {displayItems.map((blog: any) => (
            <div 
              key={blog.carouselKey} 
              className="pl-5 sm:pl-6 flex-[0_0_84%] sm:flex-[0_0_72%] md:flex-[0_0_48%] lg:flex-[0_0_33.333%] min-w-0"
            >
              <article className="bg-white border border-gray-100 rounded-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col h-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 group cursor-pointer select-none">
                {/* IMAGE TOP */}
                <div className="relative w-full h-[220px] shrink-0 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none" 
                  />
                </div>
                
                {/* CONTENT BOTTOM */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#E53E3E] text-[13px] font-bold uppercase tracking-wide">{blog.category}</span>
                    <span className="text-muted text-[13px]">{blog.date}</span>
                  </div>
                  
                  <h2 className="font-display text-[22px] text-ink leading-[1.2] mb-3 line-clamp-2">
                    {blog.title}
                  </h2>
                  
                  <p className="text-muted text-[15px] leading-relaxed line-clamp-3">
                    {blog.description}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Indicators (Dots) */}
      <div className="flex justify-center items-center gap-2 mt-8 md:mt-10">
        {blogs.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (emblaApi) {
                emblaApi.scrollTo(i);
                triggerInteractionPause();
              }
            }}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === (selectedIndex % blogs.length) 
                ? 'w-8 bg-[#FFD400]' 
                : 'w-2 bg-line hover:bg-muted/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
