import React, { useState } from 'react';
import { Check, X, ShieldAlert, Sparkles, Heart } from 'lucide-react';

export default function BrandSystemShowcase() {
  const [activeTab, setActiveTab] = useState<'palette' | 'rules'>('palette');

  return (
    <section className="py-20 px-6 bg-surface border-y border-line-soft">
      <div className="container mx-auto max-w-[1180px]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="eyebrow mb-3">Visual Identity System</span>
            <h2 className="font-display text-4xl md:text-[52px] uppercase tracking-[.01em] text-ink">
              Built On Purpose
            </h2>
            <p className="text-muted text-[15px] max-w-xl mt-2">
              Five colors, each with one job. Three workhorses and two accents — designed for impact, clarity, and urgency.
            </p>
          </div>

          <div className="flex bg-bg p-1.5 rounded-full border border-line self-start md:self-auto">
            <button
              onClick={() => setActiveTab('palette')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'palette' ? 'bg-ink text-yellow shadow-sm' : 'text-muted hover:text-ink'
              }`}
            >
              The Palette
            </button>
            <button
              onClick={() => setActiveTab('rules')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'rules' ? 'bg-ink text-yellow shadow-sm' : 'text-muted hover:text-ink'
              }`}
            >
              Usage Rules
            </button>
          </div>
        </div>

        {activeTab === 'palette' && (
          <div>
            {/* Color Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
              
              {/* Ink */}
              <div className="brand-card flex flex-col justify-between">
                <div className="h-36 bg-ink p-4 flex items-end">
                  <span className="bg-[#1d1d1f] text-[#cfcfd3] font-bold text-[10px] uppercase tracking-[.14em] px-2.5 py-1 rounded-full">
                    Foundation
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-display text-xl text-ink uppercase">Ink</h4>
                  <div className="text-[12px] text-muted font-mono mt-0.5">#0A0A0A</div>
                  <p className="text-[13px] text-muted mt-3 leading-snug">
                    <strong className="text-ink font-semibold">Base canvas.</strong> Backgrounds and elements sit on this rich near-black.
                  </p>
                </div>
              </div>

              {/* Electric Yellow */}
              <div className="brand-card flex flex-col justify-between">
                <div className="h-36 bg-yellow p-4 flex items-end">
                  <span className="bg-ink text-yellow font-bold text-[10px] uppercase tracking-[.14em] px-2.5 py-1 rounded-full">
                    Brand Energy
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-display text-xl text-ink uppercase">Electric Yellow</h4>
                  <div className="text-[12px] text-muted font-mono mt-0.5">#FFD400</div>
                  <p className="text-[13px] text-muted mt-3 leading-snug">
                    <strong className="text-ink font-semibold">The Signature.</strong> High impact headlines and highlights.
                  </p>
                </div>
              </div>

              {/* White */}
              <div className="brand-card flex flex-col justify-between">
                <div className="h-36 bg-white border-b border-line-soft p-4 flex items-end">
                  <span className="bg-ink text-white font-bold text-[10px] uppercase tracking-[.14em] px-2.5 py-1 rounded-full">
                    Clarity
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-display text-xl text-ink uppercase">White</h4>
                  <div className="text-[12px] text-muted font-mono mt-0.5">#FFFFFF</div>
                  <p className="text-[13px] text-muted mt-3 leading-snug">
                    <strong className="text-ink font-semibold">Text & Space.</strong> Gives body copy maximum legibility and air.
                  </p>
                </div>
              </div>

              {/* Signal Coral */}
              <div className="brand-card flex flex-col justify-between">
                <div className="h-36 bg-coral p-4 flex items-end">
                  <span className="bg-[#3a0f06] text-[#ffb6a8] font-bold text-[10px] uppercase tracking-[.14em] px-2.5 py-1 rounded-full">
                    Urgency
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-display text-xl text-ink uppercase">Signal Coral</h4>
                  <div className="text-[12px] text-muted font-mono mt-0.5">#FF5A3C</div>
                  <p className="text-[13px] text-muted mt-3 leading-snug">
                    <strong className="text-ink font-semibold">Act Now.</strong> Rescue alerts and donate buttons.
                  </p>
                </div>
              </div>

              {/* Hope Teal */}
              <div className="brand-card flex flex-col justify-between">
                <div className="h-36 bg-teal p-4 flex items-end">
                  <span className="bg-[#04332d] text-[#8fe0d6] font-bold text-[10px] uppercase tracking-[.14em] px-2.5 py-1 rounded-full">
                    Hope
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-display text-xl text-ink uppercase">Hope Teal</h4>
                  <div className="text-[12px] text-muted font-mono mt-0.5">#17B8A6</div>
                  <p className="text-[13px] text-muted mt-3 leading-snug">
                    <strong className="text-ink font-semibold">Calm Support.</strong> Adoptions, volunteer stories, and education.
                  </p>
                </div>
              </div>

            </div>

            {/* Proportion Bar */}
            <div className="bg-bg p-6 rounded-2xl border border-line">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-ink mb-3">
                <span>Color System Proportions</span>
                <span className="text-muted">Workhorses 88% · Accents 12%</span>
              </div>
              <div className="h-4 rounded-full overflow-hidden flex border border-line">
                <div style={{ width: '48%' }} className="bg-ink" title="Ink 48%"></div>
                <div style={{ width: '27%' }} className="bg-yellow" title="Yellow 27%"></div>
                <div style={{ width: '13%' }} className="bg-white border-r border-line-soft" title="White 13%"></div>
                <div style={{ width: '7%' }} className="bg-teal" title="Teal 7%"></div>
                <div style={{ width: '5%' }} className="bg-coral" title="Coral 5%"></div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rules' && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Do */}
            <div className="brand-card p-8 bg-surface">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-teal text-[#04332d] flex items-center justify-center">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h4 className="font-display text-2xl text-ink uppercase tracking-wide">Do</h4>
              </div>
              <ul className="space-y-4 text-[14px] text-muted">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2 shrink-0"></span>
                  <span>Let <strong className="text-ink font-semibold">black and yellow</strong> carry every layout — they are the identity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2 shrink-0"></span>
                  <span>Keep coral and teal in <strong className="text-ink font-semibold">separate lanes</strong>: coral = urgency, teal = hope.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2 shrink-0"></span>
                  <span>Set yellow or white type <strong className="text-ink font-semibold">on Ink</strong> for maximum contrast and punch.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2 shrink-0"></span>
                  <span>Pick <strong className="text-ink font-semibold">one dominant emotion</strong> per piece and let that color lead.</span>
                </li>
              </ul>
            </div>

            {/* Don't */}
            <div className="brand-card p-8 bg-surface">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-coral text-[#3a0f06] flex items-center justify-center">
                  <X className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h4 className="font-display text-2xl text-ink uppercase tracking-wide">Don't</h4>
              </div>
              <ul className="space-y-4 text-[14px] text-muted">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-coral mt-2 shrink-0"></span>
                  <span>Never put <strong className="text-ink font-semibold">yellow type on white</strong> — it fails contrast and kills legibility.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-coral mt-2 shrink-0"></span>
                  <span>Don't run yellow, coral and teal <strong className="text-ink font-semibold">at full size together</strong> — it creates clutter.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-coral mt-2 shrink-0"></span>
                  <span>Don't use coral or teal as a <strong className="text-ink font-semibold">background</strong> for long body text blocks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-coral mt-2 shrink-0"></span>
                  <span>Don't add a sixth color without a <strong className="text-ink font-semibold">new specific job</strong> for it to do.</span>
                </li>
              </ul>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
