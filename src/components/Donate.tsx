import React, { useState } from 'react';
import { Heart, ArrowRight, AlertTriangle, ShieldCheck, PawPrint, Sparkles } from 'lucide-react';
import impactDogBg from '../assets/impact_dog_bg.png';

interface DonateProps {
  onDonateClick?: () => void;
}

export default function Donate({ onDonateClick }: DonateProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(500);

  const donationTiers = [
    { amount: 100, label: "1 Day Meals", desc: "Feeds an indie dog nutritious meals" },
    { amount: 500, label: "Medical Kit", desc: "First aid & wound care treatment" },
    { amount: 1000, label: "Vaccine & Sterilize", desc: "Anti-rabies shot & ABC procedure" },
    { amount: 2500, label: "Complete Rescue", desc: "Emergency transport, surgery & rehab" },
  ];

  return (
    <section id="donate" className="section-wrapper">
      <div className="section-container">
      {/* Signature Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="eyebrow mb-2">Urgent Action Needed</span>
          <h2 className="font-display text-[clamp(40px,6.5vw,68px)] text-ink uppercase leading-[.92] tracking-[.01em]">
            Where Your<br />Help Goes<span className="inline-block w-3 h-3 bg-yellow align-baseline ml-1.5"></span>
          </h2>
        </div>
      </div>

      {/* Single Urgency Card */}
      <div className="mb-10">
        <div className="bg-ink rounded-[20px] p-7 lg:p-10 border border-line relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Left side content */}
          <div className="md:w-1/2">
            <div className="flex justify-between items-center mb-5 md:justify-start md:gap-4">
              <span className="bg-coral text-[#3a0f06] font-bold text-[10px] tracking-[.14em] uppercase px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" /> Rescue Alert
              </span>
              <span className="text-[11px] font-bold text-coral uppercase tracking-wider">Urgent</span>
            </div>

            <h3 className="font-display text-4xl lg:text-5xl text-white uppercase leading-[.92] tracking-[.01em] mb-4">
              Bruno Needs<br />Surgery <span className="text-coral">Today</span>
            </h3>

            <p className="text-[#bfc1c5] text-[15px] leading-relaxed max-w-md">
              Severe hind leg fracture after a hit-and-run in Indiranagar. Surgery scheduled for 4 PM.
            </p>
          </div>

          {/* Right side tracker and button */}
          <div className="md:w-5/12 flex flex-col gap-6">
            {/* Money Tracker */}
            <div className="w-full">
              <div className="flex justify-between text-[11px] font-bold text-[#bfc1c5] mb-2.5 uppercase tracking-widest">
                <span className="text-white">Raised: ₹45,000</span>
                <span>Goal: ₹60,000</span>
              </div>
              <div className="w-full h-3 bg-[#2e2e2e] rounded-full overflow-hidden">
                <div className="h-full bg-coral rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            <button 
              onClick={onDonateClick}
              className="btn-primary w-full text-center"
            >
              Donate to Bruno <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Donation Container Card */}
      <div className="bg-surface rounded-[20px] border border-line p-6 lg:p-8">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Banner */}
          <div className="flex flex-col h-full">
            {/* Warm Hero Banner with Background Image */}
            <div 
              className="rounded-[16px] p-6 lg:p-10 relative overflow-hidden border border-line-soft min-h-[320px] h-full flex flex-col justify-end"
              style={{
                backgroundImage: `url(${impactDogBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="relative z-10 w-full md:max-w-[90%]">
                <span className="eyebrow mb-3 text-white/90">Make An Impact</span>
                <h3 className="font-display text-3xl lg:text-5xl text-white uppercase leading-[.95] mb-4">
                  Your Support,<br />
                  Their <span className="bg-yellow text-ink px-2 pb-1 box-decoration-clone inline-block mt-1">Second Chance.</span>
                </h3>
                <div className="w-12 h-1 bg-yellow mb-4"></div>
                <p className="text-[#e2e2e2] text-sm lg:text-base leading-relaxed">
                  Choose an amount and help us create a better tomorrow for animals in need.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Contribution Selector */}
          <div className="flex flex-col justify-center lg:pl-6 border-t lg:border-t-0 lg:border-l border-dashed border-line pt-6 lg:pt-0">
            <div>
              <span className="eyebrow mb-2">Quick Contribution</span>
              <h4 className="font-display text-2xl lg:text-3xl text-ink uppercase mb-5">Select An Amount</h4>

              <div className="flex flex-wrap gap-3 mb-6">
                {donationTiers.map((tier) => (
                  <button
                    key={tier.amount}
                    onClick={() => setSelectedAmount(tier.amount)}
                    className={`px-6 py-2.5 rounded-full font-display text-lg transition-all border ${
                      selectedAmount === tier.amount 
                        ? 'bg-ink text-yellow border-ink shadow-sm' 
                        : 'bg-bg text-ink border-line hover:border-ink'
                    }`}
                  >
                    ₹{tier.amount.toLocaleString()}
                  </button>
                ))}
              </div>

              {selectedAmount && (
                <div className="bg-bg border border-line rounded-[14px] p-5 flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-yellow text-ink flex items-center justify-center font-bold shrink-0">
                    <Heart className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <span className="font-bold text-ink text-[16px]">₹{selectedAmount.toLocaleString()} — {donationTiers.find(t => t.amount === selectedAmount)?.label}</span>
                    <p className="text-muted text-[13px] mt-1">{donationTiers.find(t => t.amount === selectedAmount)?.desc}</p>
                  </div>
                </div>
              )}

              <button 
                onClick={onDonateClick}
                className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-lg shadow-sm"
              >
                Donate Now <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      </div>
    </section>
  );
}
