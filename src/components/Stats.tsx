import React, { useState, useEffect } from 'react';
import { PawPrint, CheckCircle2, Heart, Users } from 'lucide-react';

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
    <div className="absolute bottom-0 left-0 right-0 z-30 translate-y-1/2 px-6">
      <div className="container mx-auto max-w-[1200px]">
        <div className="bg-white rounded-3xl p-8 shadow-xl flex flex-col md:flex-row justify-between items-center gap-8 md:divide-x divide-gray-100 border border-gray-100">
          <div className="flex items-center gap-5 w-full md:w-auto justify-center md:justify-start">
            <div className="bg-beige p-4 rounded-2xl text-forest"><PawPrint className="w-7 h-7 fill-forest/20"/></div>
            <div>
              <div className="text-3xl font-serif font-bold text-forest"><CountUp to={50} />+</div>
              <div className="text-xs font-semibold text-muted uppercase tracking-wider">Lives Rescued</div>
            </div>
          </div>
          <div className="flex items-center gap-5 w-full md:w-auto justify-center md:justify-start md:pl-12">
            <div className="bg-beige p-4 rounded-2xl text-forest"><CheckCircle2 className="w-7 h-7"/></div>
            <div>
              <div className="text-3xl font-serif font-bold text-forest"><CountUp to={100} />+</div>
              <div className="text-xs font-semibold text-muted uppercase tracking-wider">Indies Collared</div>
            </div>
          </div>
          <div className="flex items-center gap-5 w-full md:w-auto justify-center md:justify-start md:pl-12">
            <div className="bg-beige p-4 rounded-2xl text-forest"><Heart className="w-7 h-7 fill-forest/20"/></div>
            <div>
              <div className="text-3xl font-serif font-bold text-forest"><CountUp to={56} />+</div>
              <div className="text-xs font-semibold text-muted uppercase tracking-wider">Indies Fed Daily</div>
            </div>
          </div>
          <div className="flex items-center gap-5 w-full md:w-auto justify-center md:justify-start md:pl-12">
            <div className="bg-beige p-4 rounded-2xl text-forest"><Users className="w-7 h-7"/></div>
            <div>
              <div className="text-3xl font-serif font-bold text-forest">Growing</div>
              <div className="text-xs font-semibold text-muted uppercase tracking-wider">Volunteer Network</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
