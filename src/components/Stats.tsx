import React, { useState, useEffect } from 'react';

const CountUp = ({ to, duration = 2 }: { to: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      setCount(Math.floor(to * percentage));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [to, duration]);

  return <span>{count}</span>;
};

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-6 md:gap-y-10 max-w-xl">
      <div className="flex flex-col items-start w-full">
        <div className="text-[36px] sm:text-4xl md:text-[56px] font-display text-ink mb-1 leading-none"><CountUp to={50} />+</div>
        <div className="text-[10px] sm:text-[12px] font-bold text-muted uppercase tracking-[.10em] md:tracking-[.14em]">Lives Rescued</div>
      </div>
      <div className="flex flex-col items-start w-full">
        <div className="text-[36px] sm:text-4xl md:text-[56px] font-display text-ink mb-1 leading-none"><CountUp to={100} />+</div>
        <div className="text-[10px] sm:text-[12px] font-bold text-muted uppercase tracking-[.10em] md:tracking-[.14em]">Indies Collared</div>
      </div>
      <div className="flex flex-col items-start w-full">
        <div className="text-[36px] sm:text-4xl md:text-[56px] font-display text-ink mb-1 leading-none"><CountUp to={56} />+</div>
        <div className="text-[10px] sm:text-[12px] font-bold text-muted uppercase tracking-[.10em] md:tracking-[.14em]">Indies Fed Daily</div>
      </div>
      <div className="flex flex-col items-start w-full">
        <div className="text-[36px] sm:text-4xl md:text-[56px] font-display text-ink mb-1 leading-none tracking-normal">Growing</div>
        <div className="text-[10px] sm:text-[12px] font-bold text-muted uppercase tracking-[.10em] md:tracking-[.14em]">Volunteer Network</div>
      </div>
    </div>
  );
}
