import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  headingParts: React.ReactNode[];
  alignment?: 'left' | 'center';
  description?: string;
  light?: boolean;
}

export default function SectionHeader({ eyebrow, headingParts, alignment = 'left', description, light = false }: SectionHeaderProps) {
  const textColor = light ? 'text-white' : 'text-ink';
  const descColor = light ? 'text-[#8e8e93]' : 'text-muted';
  
  return (
    <div className={`flex flex-col ${alignment === 'left' ? 'md:flex-row md:items-end justify-between' : 'items-center text-center'} mb-10 gap-6`}>
      <div className={alignment === 'center' ? 'flex flex-col items-center text-center' : 'text-left'}>
        <span className={`eyebrow mb-3 ${light ? 'text-white' : ''}`}>{eyebrow}</span>
        <h2 className={`font-display text-[clamp(40px,6vw,64px)] ${textColor} uppercase leading-[.92] tracking-[.01em]`}>
          {headingParts.map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {index < headingParts.length - 1 && <br />}
            </React.Fragment>
          ))}
          <span className="inline-block w-3 h-3 bg-yellow align-baseline ml-1.5"></span>
        </h2>
      </div>
      {description && (
        <p className={`${descColor} text-[15.5px] max-w-sm leading-relaxed ${alignment === 'left' ? 'md:pb-1 text-left' : 'text-center'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
