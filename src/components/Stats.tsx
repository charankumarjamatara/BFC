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
    <div className="relative -mt-6 px-6 z-30">
      <div className="container mx-auto max-w-[1180px]">
        <div className="brand-card p-6 md:p-8 rounded-[20px] flex flex-col md:flex-row justify-between items-center gap-6 md:divide-x divide-line">
          
          <div className="flex flex-col items-center text-center w-full">
            <div className="text-4xl md:text-[48px] font-display text-ink mb-0.5"><CountUp to={50} />+</div>
            <div className="text-[11px] font-semibold text-muted uppercase tracking-[.14em]">Lives Rescued</div>
          </div>

          <div className="flex flex-col items-center text-center w-full">
            <div className="text-4xl md:text-[48px] font-display text-ink mb-0.5"><CountUp to={100} />+</div>
            <div className="text-[11px] font-semibold text-muted uppercase tracking-[.14em]">Indies Collared</div>
          </div>

          <div className="flex flex-col items-center text-center w-full">
            <div className="text-4xl md:text-[48px] font-display text-ink mb-0.5"><CountUp to={56} />+</div>
            <div className="text-[11px] font-semibold text-muted uppercase tracking-[.14em]">Indies Fed Daily</div>
          </div>

          <div className="flex flex-col items-center text-center w-full">
            <div className="text-4xl md:text-[48px] font-display text-ink mb-0.5 tracking-normal">Growing</div>
            <div className="text-[11px] font-semibold text-muted uppercase tracking-[.14em]">Volunteer Network</div>
          </div>

        </div>
      </div>
    </div>
  );
}
