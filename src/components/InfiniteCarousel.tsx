import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface InfiniteCarouselProps {
  children: React.ReactNode[];
  autoPlayInterval?: number;
  showControls?: boolean;
  itemClassName?: string;
  align?: 'start' | 'center' | 'end';
}

export default function InfiniteCarousel({ 
  children, 
  autoPlayInterval = 3500, 
  showControls = false,
  itemClassName = "flex-[0_0_100%] min-w-0",
  align = 'start'
}: InfiniteCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align, skipSnaps: false },
    autoPlayInterval ? [Autoplay({ delay: autoPlayInterval, stopOnInteraction: true })] : []
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full group">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y -ml-5" style={{ backfaceVisibility: 'hidden' }}>
          {React.Children.map(children, (child, index) => (
            <div key={index} className={`pl-5 ${itemClassName}`}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {showControls && (
        <>
          <button 
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-ink p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-ink p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}
    </div>
  );
}
