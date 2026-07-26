import React, { useState } from 'react';
import { Heart, ArrowRight, AlertTriangle, ShieldCheck, PawPrint, Sparkles } from 'lucide-react';

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(500);

  const donationTiers = [
    { amount: 100, label: "1 Day Meals", desc: "Feeds an indie dog nutritious meals" },
    { amount: 500, label: "Medical Kit", desc: "First aid & wound care treatment" },
    { amount: 1000, label: "Vaccine & Sterilize", desc: "Anti-rabies shot & ABC procedure" },
    { amount: 2500, label: "Complete Rescue", desc: "Emergency transport, surgery & rehab" },
  ];

  return (
    <section id="donate" className="py-12 md:py-16 px-6 container mx-auto max-w-[1180px]">
      
      {/* Signature Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="eyebrow mb-2">Urgent Action Needed</span>
          <h2 className="font-display text-[clamp(40px,6.5vw,68px)] text-ink uppercase leading-[.92] tracking-[.01em]">
            Where Your<br />Help Goes<span className="inline-block w-3 h-3 bg-yellow align-baseline ml-1.5"></span>
          </h2>
        </div>
        <p className="text-muted text-[15px] max-w-sm leading-relaxed md:pb-1">
          Direct, immediate impact. Choose an active rescue case or support our daily feeding & medical runs in Bengaluru.
        </p>
      </div>

      {/* 3 Scene Urgency Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        
        {/* Scene 1: Signal Coral Urgent Rescue */}
        <div className="bg-ink rounded-[20px] p-7 lg:p-8 flex flex-col justify-between border border-line relative overflow-hidden">
          <div>
            <div className="flex justify-between items-center mb-5">
              <span className="bg-coral text-[#3a0f06] font-bold text-[10px] tracking-[.14em] uppercase px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" /> Rescue Alert
              </span>
              <span className="text-[11px] font-bold text-coral uppercase tracking-wider">Urgent</span>
            </div>

            <h3 className="font-display text-4xl text-white uppercase leading-[.92] tracking-[.01em] mb-3">
              Bruno Needs<br />Surgery <span className="text-coral">Today</span>
            </h3>

            <p className="text-[#bfc1c5] text-[14px] leading-relaxed mb-6">
              Severe hind leg fracture after a hit-and-run in Indiranagar. Surgery scheduled for 4 PM.
            </p>
          </div>

          <a 
            href="#contact" 
            className="bg-coral text-[#3a0f06] font-bold text-[12px] uppercase tracking-[.14em] py-3.5 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-[#D6432A] transition-colors w-full mt-2"
          >
            Donate to Bruno <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Scene 2: Hope Teal Medical & Vaccine Fund */}
        <div className="bg-teal rounded-[20px] p-7 lg:p-8 flex flex-col justify-between border border-line relative overflow-hidden">
          <div>
            <div className="flex justify-between items-center mb-5">
              <span className="bg-[#0a574e] text-[#8fe0d6] font-bold text-[10px] tracking-[.14em] uppercase px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" /> Medical Care
              </span>
              <span className="text-[11px] font-bold text-[#04332d] uppercase tracking-wider">Active</span>
            </div>

            <h3 className="font-display text-4xl text-[#04332d] uppercase leading-[.92] tracking-[.01em] mb-3">
              Medicine &<br />Vaccine <span className="text-[#0a574e]">Drive</span>
            </h3>

            <p className="text-[#0a574e] text-[14px] leading-relaxed mb-6 font-medium">
              Anti-rabies vaccines, deworming, and wound dressing kits for 50+ neighborhood indies.
            </p>
          </div>

          <a 
            href="#contact" 
            className="bg-ink text-teal font-bold text-[12px] uppercase tracking-[.14em] py-3.5 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-[#222] transition-colors w-full mt-2"
          >
            Sponsor Care <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Scene 3: Electric Yellow Daily Feeding & Collar Drive */}
        <div className="bg-yellow rounded-[20px] p-7 lg:p-8 flex flex-col justify-between border border-line relative overflow-hidden">
          <div>
            <div className="flex justify-between items-center mb-5">
              <span className="bg-ink text-yellow font-bold text-[10px] tracking-[.14em] uppercase px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <PawPrint className="w-3.5 h-3.5" /> Daily Impact
              </span>
              <span className="text-[11px] font-bold text-ink uppercase tracking-wider">Ongoing</span>
            </div>

            <h3 className="font-display text-4xl text-ink uppercase leading-[.92] tracking-[.01em] mb-3">
              Feed 56+ Indies<br /><span className="text-[#5c4d00]">Every Day</span>
            </h3>

            <p className="text-[#5c4d00] text-[14px] leading-relaxed mb-6 font-medium">
              Nutritious cooked meals and reflective glow collars for night-time safety across 4 routes.
            </p>
          </div>

          <a 
            href="#contact" 
            className="bg-ink text-yellow font-bold text-[12px] uppercase tracking-[.14em] py-3.5 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-[#222] transition-colors w-full mt-2"
          >
            Support Feeding <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Main Donation Container Card */}
      <div className="bg-surface rounded-[20px] border border-line p-6 lg:p-8">
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Banner + Quick Contribution Selector */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Warm Hero Banner */}
              <div className="bg-[#FAF8F3] rounded-[16px] p-6 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between mb-6 border border-line-soft">
                <div className="flex-1 pr-4">
                  <span className="eyebrow mb-2">Make An Impact</span>
                  <h3 className="font-display text-2xl lg:text-3xl text-ink uppercase leading-[.95] mb-2">
                    Your Support,<br />
                    Their <span className="bg-yellow text-ink px-1.5 pb-0.5 box-decoration-clone inline-block">Second Chance.</span>
                  </h3>
                  <div className="w-10 h-0.5 bg-ink mb-2"></div>
                  <p className="text-muted text-[13px] leading-relaxed">
                    Choose an amount and help us create a better tomorrow for animals in need.
                  </p>
                </div>

                <div className="relative mt-4 sm:mt-0 shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400&q=80" 
                    alt="Happy dog second chance" 
                    className="w-28 h-28 rounded-full object-cover border-4 border-yellow shadow-sm"
                  />
                  <div className="absolute -top-1.5 -right-1.5 bg-yellow text-ink w-7 h-7 rounded-full flex items-center justify-center font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
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
                  <div className="bg-[#FAF8F3] border border-line rounded-[14px] p-4 flex items-center gap-3">
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

    </section>
  );
}
