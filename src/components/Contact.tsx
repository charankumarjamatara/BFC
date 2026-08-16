import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Contact() {
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactFormSubmitted(true);
    setTimeout(() => setContactFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-wrapper bg-bg">
      <div className="section-container">
        
        <SectionHeader 
          eyebrow="Let us talk"
          headingParts={["Connect", "With BFC"]}
          description="Have a rescue lead, a partnership idea or a question? Send a note. We read every message."
        />

        {/* Two Column Grid */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Left Card: Contact Information */}
          <div className="brand-card p-7 lg:p-10 flex flex-col justify-between bg-surface">
            <div>
              <span className="eyebrow mb-4">Contact Information</span>
              <h3 className="font-display text-3xl lg:text-[40px] text-ink uppercase tracking-[.01em] mb-8 leading-none">
                Hello,<br />Neighbour.
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-yellow flex items-center justify-center font-bold text-ink text-sm shrink-0 border border-line-soft">
                    @
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-muted uppercase tracking-[.12em]">Email</span>
                    <a href="mailto:hello@bfc.community" className="font-semibold text-ink text-[14.5px] hover:text-muted transition-colors">
                      hello@bfc.community
                    </a>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-yellow flex items-center justify-center font-bold text-ink text-[12px] shrink-0 border border-line-soft">
                    +91
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-muted uppercase tracking-[.12em]">Call or WhatsApp</span>
                    <a href="tel:+919000000000" className="font-semibold text-ink text-[14.5px] hover:text-muted transition-colors">
                      +91 90000 00000
                    </a>
                  </div>
                </div>

                {/* Based In */}
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-yellow flex items-center justify-center font-bold text-ink text-xs shrink-0 border border-line-soft">
                    IN
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-muted uppercase tracking-[.12em]">Based In</span>
                    <span className="font-semibold text-ink text-[14.5px]">
                      Bengaluru, Karnataka
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-line-soft text-[12px] text-muted font-medium">
              Emergency Helpline available 9 AM - 6 PM Daily across Bengaluru.
            </div>
          </div>

          {/* Right Card: Send a Message */}
          <div className="brand-card p-7 lg:p-10 relative bg-surface">
            <AnimatePresence>
              {contactFormSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-surface flex flex-col items-center justify-center text-center p-6 z-30"
                >
                  <div className="w-14 h-14 rounded-full bg-yellow text-ink flex items-center justify-center mb-4">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="font-display text-3xl text-ink mb-2 uppercase tracking-[.02em]">Message Sent!</h4>
                  <p className="text-muted text-[14px] max-w-[280px]">
                    We have received your message and will read it immediately.
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <span className="eyebrow mb-4">Send a Message</span>
            <h3 className="font-display text-3xl lg:text-[40px] text-ink uppercase tracking-[.01em] mb-8 leading-none">
              We Are Listening.
            </h3>
            
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="ct-name" className="block text-[10px] font-bold text-muted uppercase tracking-[.12em] mb-2">Your Name</label>
                  <input 
                    id="ct-name"
                    type="text" 
                    required
                    placeholder="Your name"
                    className="w-full bg-bg border border-line-soft rounded-[12px] py-3.5 px-4 text-[14px] focus:outline-none focus:border-ink transition-colors text-ink placeholder:text-slate/60"
                  />
                </div>
                
                <div>
                  <label htmlFor="ct-email" className="block text-[10px] font-bold text-muted uppercase tracking-[.12em] mb-2">Email</label>
                  <input 
                    id="ct-email"
                    type="email" 
                    required
                    placeholder="you@email.com"
                    className="w-full bg-bg border border-line-soft rounded-[12px] py-3.5 px-4 text-[14px] focus:outline-none focus:border-ink transition-colors text-ink placeholder:text-slate/60"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="ct-subject" className="block text-[10px] font-bold text-muted uppercase tracking-[.12em] mb-2">Subject</label>
                <input 
                  id="ct-subject"
                  type="text" 
                  placeholder="How can we help?"
                  className="w-full bg-bg border border-line-soft rounded-[12px] py-3.5 px-4 text-[14px] focus:outline-none focus:border-ink transition-colors text-ink placeholder:text-slate/60"
                />
              </div>

              <div>
                <label htmlFor="ct-msg" className="block text-[10px] font-bold text-muted uppercase tracking-[.12em] mb-2">Your Message</label>
                <textarea 
                  id="ct-msg"
                  rows={4}
                  required
                  placeholder="Tell us what is on your mind."
                  className="w-full bg-bg border border-line-soft rounded-[12px] py-3.5 px-4 text-[14px] focus:outline-none focus:border-ink transition-colors text-ink placeholder:text-slate/60 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="btn-outline mt-2"
              >
                Send message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
