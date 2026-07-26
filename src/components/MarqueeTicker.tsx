import React from 'react';

export default function MarqueeTicker() {
  const items = [
    "BOLD NOT SOFT",
    "A MOVEMENT, NOT A CHARITY",
    "FIVE COLORS, ONE JOB",
    "EVERY LIFE MATTERS",
    "BENGALURU STREET ANIMAL ADVOCACY",
    "RESCUE · HEAL · FEED · COLLAR",
    "VOLUNTEER DRIVEN",
  ];

  return (
    <div className="bg-yellow text-ink border-y border-line py-3.5 overflow-hidden whitespace-nowrap select-none">
      <div className="animate-marquee flex items-center">
        <div className="flex items-center gap-8 shrink-0 pr-8">
          {items.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="font-display text-lg md:text-xl uppercase tracking-[.06em]">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-ink inline-block opacity-60"></span>
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center gap-8 shrink-0 pr-8" aria-hidden="true">
          {items.map((item, idx) => (
            <React.Fragment key={`repeat-${idx}`}>
              <span className="font-display text-lg md:text-xl uppercase tracking-[.06em]">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-ink inline-block opacity-60"></span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
