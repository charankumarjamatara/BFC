import React from 'react';
import founderImg from '../assets/About_Us_section/founder.webp';
import cofounderImg from '../assets/About_Us_section/cofounder.webp';
import peopleLeadImg from '../assets/About_Us_section/People Management Lead.webp';
import opsHeadImg from '../assets/About_Us_section/Operations & Strategies Head.webp';
import missionImg from '../assets/About_Us_section/our mission.webp';
import visionImg from '../assets/About_Us_section/our vision.webp';

interface MeetTeamProps {
  fullPage?: boolean;
  onBack?: () => void;
}

export default function MeetTeam({ fullPage = false, onBack }: MeetTeamProps) {
  const founder = {
    name: "Sahithi Gutam",
    role: "Founder",
    bio: "Sahithi has dedicated her life to ensuring every street animal in Bengaluru receives the care, love, and respect they deserve. Under her leadership, BFC has grown from a small group of volunteers into a city-wide rescue network.",
    quote: "We are their voice.",
    image: founderImg
  };

  const cofounder = {
    name: "Ruchita D Patel",
    role: "Co-Founder",
    bio: "With a passion for community building and grassroots activism, Ruchita manages the extensive volunteer network that makes BFC's daily operations possible. She believes that true change starts at the neighborhood level.",
    quote: "Community makes it work.",
    image: cofounderImg
  };

  const peopleLead = {
    name: "Manaswini Irgavarapu",
    role: "People Management Lead",
    bio: "Leading our rapid response and volunteer coordination, Manaswini ensures that our network of animal lovers operates seamlessly to save lives every single day.",
    image: peopleLeadImg
  };

  const opsHead = {
    name: "Soumyadeep Maji",
    role: "Operations & Strategies Head",
    bio: "Soumyadeep oversees the complex logistics of rescue, medical transport, and feeding programs, making sure our resources reach the street animals who need them most.",
    image: opsHeadImg
  };

  // Two images for the Mission/Vision block
  const missionImage = missionImg;
  const visionImage = visionImg;

  return (
    <div className="w-full flex flex-col animate-fade-in bg-bg pt-8 pb-10">
      
      {/* 1. INTRODUCTION */}
      <section className="section-wrapper bg-bg mb-8 md:mb-12">
        <div className="section-container">
          
          {onBack && (
            <button 
              onClick={onBack}
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-muted hover:text-ink transition-colors mb-6 cursor-pointer"
            >
              ← Back to Home
            </button>
          )}

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
            <div className="md:col-span-7">
              <span className="eyebrow mb-3 block">About Us</span>
              <h1 className="font-display text-[clamp(44px,6vw,64px)] text-ink uppercase leading-[.92] tracking-[.01em]">
                How We Are Different From Other NGOs<span className="inline-block w-3 h-3 bg-yellow align-baseline ml-1.5"></span>
              </h1>
            </div>
            <div className="md:col-span-5 pb-1">
              <p className="text-muted text-[16px] leading-relaxed">
                We are a volunteer-driven movement dedicated to rescuing street animals, facilitating adoptions, and building a cruelty-free, compassionate community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MISSION / VISION (2x2 GRID) */}
      <section className="section-wrapper bg-bg mb-10 md:mb-14">
        <div className="section-container">
          <div className="flex flex-col gap-10 md:gap-14">
            
            {/* ROW 1: MISSION */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6">
                <span className="text-yellow text-[11px] font-bold tracking-widest uppercase block mb-3">Our Mission</span>
                <p className="text-ink text-[16px] leading-relaxed max-w-md">
                  To provide immediate rescue, medical care, and rehabilitation for street animals in distress. We work tirelessly to eliminate suffering and create a safe environment where every animal is respected and valued by the community.
                </p>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <div className="aspect-[4/3] w-full rounded-[16px] overflow-hidden border border-line-soft">
                  <img src={missionImage} alt="Our Mission" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* ROW 2: VISION */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 order-2 md:order-1">
                <div className="aspect-[4/3] w-full rounded-[16px] overflow-hidden border border-line-soft">
                  <img src={visionImage} alt="Our Vision" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
                <span className="text-yellow text-[11px] font-bold tracking-widest uppercase block mb-3">Our Vision</span>
                <p className="text-ink text-[16px] leading-relaxed max-w-md">
                  A Bengaluru where no street animal goes hungry, untreated, or unloved. We envision a society that co-exists peacefully with community animals through widespread education, compassion, and structured adoption programs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MEET OUR TEAM */}
      <section className="section-wrapper bg-bg">
        <div className="section-container">
          
          <div className="mb-10 md:mb-14">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow"></div>
              <h2 className="font-display text-[28px] md:text-[40px] text-ink uppercase leading-none tracking-[.01em]">
                Meet Our Team
              </h2>
            </div>
          </div>

          <div className="flex flex-col">
            
            {/* FOUNDER */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-8 md:py-10 border-t border-line-soft items-center">
              <div className="md:col-span-4">
                <div className="w-full aspect-[4/5] rounded-[16px] overflow-hidden border border-line-soft bg-surface">
                  <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div className="md:col-span-8 md:pl-8">
                <span className="text-yellow text-[10px] font-bold tracking-widest uppercase block mb-2">{founder.role}</span>
                <h3 className="font-display text-[30px] md:text-[44px] text-ink uppercase leading-none tracking-[.01em] mb-3">
                  {founder.name}
                </h3>
                <p className="text-muted text-[14.5px] leading-relaxed mb-5 max-w-lg">
                  {founder.bio}
                </p>
                <div className="pl-4 border-l-2 border-yellow py-0.5">
                  <p className="text-ink text-[15px] md:text-[16px] leading-relaxed italic font-serif">
                    "{founder.quote}"
                  </p>
                </div>
              </div>
            </div>

            {/* CO-FOUNDER */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-8 md:py-10 border-t border-line-soft items-center">
              <div className="md:col-span-8 md:order-1 order-2 flex flex-col items-start md:items-end md:text-right md:pr-8">
                <span className="text-yellow text-[10px] font-bold tracking-widest uppercase block mb-2">{cofounder.role}</span>
                <h3 className="font-display text-[30px] md:text-[44px] text-ink uppercase leading-none tracking-[.01em] mb-3">
                  {cofounder.name}
                </h3>
                <p className="text-muted text-[14.5px] leading-relaxed mb-5 max-w-lg">
                  {cofounder.bio}
                </p>
                <div className="pr-4 border-l-2 md:border-l-0 md:border-r-2 border-yellow py-0.5 pl-4 md:pl-0">
                  <p className="text-ink text-[15px] md:text-[16px] leading-relaxed italic font-serif">
                    "{cofounder.quote}"
                  </p>
                </div>
              </div>

              <div className="md:col-span-4 md:order-2 order-1">
                <div className="w-full aspect-[4/5] rounded-[16px] overflow-hidden border border-line-soft bg-surface">
                  <img src={cofounder.image} alt={cofounder.name} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* PEOPLE MANAGEMENT LEAD & OPERATIONS HEAD (2x1 CENTERED) */}
            <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-20 py-8 md:py-10 border-t border-b border-line-soft">
              
              {/* PEOPLE MANAGEMENT LEAD */}
              <div className="flex flex-col gap-5 w-full max-w-[280px]">
                <div className="w-full aspect-[4/5] rounded-[16px] overflow-hidden border border-line-soft bg-surface">
                  <img src={peopleLead.image} alt={peopleLead.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-left flex flex-col">
                  <span className="text-yellow text-[9px] font-bold tracking-widest uppercase block mb-2">{peopleLead.role}</span>
                  <h3 className="font-display text-[24px] md:text-[28px] text-ink uppercase leading-none tracking-[.01em] mb-2">
                    {peopleLead.name}
                  </h3>
                  <p className="text-muted text-[14px] leading-relaxed">
                    {peopleLead.bio}
                  </p>
                </div>
              </div>

              {/* OPERATIONS & STRATEGIES HEAD */}
              <div className="flex flex-col gap-5 w-full max-w-[280px]">
                <div className="w-full aspect-[4/5] rounded-[16px] overflow-hidden border border-line-soft bg-surface">
                  <img src={opsHead.image} alt={opsHead.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-left flex flex-col">
                  <span className="text-yellow text-[9px] font-bold tracking-widest uppercase block mb-2">{opsHead.role}</span>
                  <h3 className="font-display text-[24px] md:text-[28px] text-ink uppercase leading-none tracking-[.01em] mb-2">
                    {opsHead.name}
                  </h3>
                  <p className="text-muted text-[14px] leading-relaxed">
                    {opsHead.bio}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
}
