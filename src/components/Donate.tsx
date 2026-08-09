import React, { useState } from 'react';
import { Heart, ArrowRight, AlertTriangle, ShieldCheck, PawPrint, Sparkles } from 'lucide-react';
import impactDogBg from '../assets/impact_dog_bg.png';

export default function Donate() {
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

            <a 
              href="#contact" 
              className="btn-primary w-full"
            >
              Donate to Bruno <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Donation Container Card */}
      <div className="bg-surface rounded-[20px] border border-line p-6 lg:p-8">
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Banner + Quick Contribution Selector */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Warm Hero Banner with Background Image */}
              <div 
                className="rounded-[16px] p-6 lg:p-8 relative overflow-hidden mb-6 border border-line-soft min-h-[220px] flex items-center"
                style={{
                  backgroundImage: `url(${impactDogBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                
                <div className="relative z-10 max-w-[80%] md:max-w-[70%]">
                  <span className="eyebrow mb-2 text-white/90">Make An Impact</span>
                  <h3 className="font-display text-2xl lg:text-3xl text-white uppercase leading-[.95] mb-2">
                    Your Support,<br />
                    Their <span className="bg-yellow text-ink px-1.5 pb-0.5 box-decoration-clone inline-block">Second Chance.</span>
                  </h3>
                  <div className="w-10 h-0.5 bg-yellow mb-2"></div>
                  <p className="text-[#e2e2e2] text-[13px] leading-relaxed">
                    Choose an amount and help us create a better tomorrow for animals in need.
                  </p>
                </div>
              </div>

              {/* Quick Contribution Selector */}
              <div>
                <span className="eyebrow mb-2">Quick Contribution</span>
                <h4 className="font-display text-2xl text-ink uppercase mb-3">Select An Amount</h4>

                <div className="flex flex-wrap gap-2.5 mb-4">
                  {donationTiers.map((tier) => (
                    <button
                      key={tier.amount}
                      onClick={() => setSelectedAmount(tier.amount)}
                      className={`px-5 py-2 rounded-full font-display text-base transition-all border ${
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
                  <div className="bg-bg border border-line rounded-[14px] p-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-yellow text-ink flex items-center justify-center font-bold shrink-0">
                      <Heart className="w-4 h-4 fill-current" />
                    </div>
                    <div>
                      <span className="font-bold text-ink text-[13.5px]">₹{selectedAmount.toLocaleString()} — {donationTiers.find(t => t.amount === selectedAmount)?.label}</span>
                      <p className="text-muted text-[11.5px]">{donationTiers.find(t => t.amount === selectedAmount)?.desc}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: QR Code */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-dashed border-line pt-6 lg:pt-0 lg:pl-6 flex flex-col justify-center">
            <div>
              <span className="eyebrow mb-2">Support The Movement</span>
              <h3 className="font-display text-2xl lg:text-3xl text-ink uppercase leading-[.95] mb-5">
                Every Donation<br />
                Creates A<br />
                <span className="text-yellow">Second Chance.</span>
              </h3>

              {/* QR Code Container */}
              <div className="bg-surface p-4 rounded-xl border border-line max-w-[210px] mx-auto text-center shadow-sm">
                <div className="w-36 h-36 bg-[#F4F1EA] flex items-center justify-center relative overflow-hidden rounded-lg mx-auto">
                  <svg className="w-full h-full text-ink" viewBox="0 0 100 100" fill="currentColor">
                    <rect x="0" y="0" width="25" height="25" />
                    <rect x="5" y="5" width="15" height="15" fill="white" />
                    <rect x="9" y="9" width="7" height="7" />
                    
                    <rect x="75" y="0" width="25" height="25" />
                    <rect x="80" y="5" width="15" height="15" fill="white" />
                    <rect x="84" y="9" width="7" height="7" />
                    
                    <rect x="0" y="75" width="25" height="25" />
                    <rect x="5" y="80" width="15" height="15" fill="white" />
                    <rect x="8" y="84" width="8" height="8" />
                    
                    <rect x="35" y="10" width="10" height="15" />
                    <rect x="55" y="5" width="15" height="10" />
                    <rect x="35" y="35" width="30" height="10" />
                    <rect x="10" y="45" width="15" height="20" />
                    <rect x="40" y="60" width="15" height="15" />
                    <rect x="80" y="40" width="15" height="25" />
                    <rect x="65" y="75" width="10" height="15" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white p-1 rounded">
                      <div className="bg-yellow w-5 h-5 flex items-center justify-center text-ink text-[10px] font-bold">
                        <PawPrint className="w-3.5 h-3.5 fill-current"/>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-serif italic text-muted text-xs mt-2.5">Scan to donate</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      </div>
    </section>
  );
}
