import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactFormSubmitted(true);
    setTimeout(() => setContactFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="section-container">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="eyebrow mb-2">Let us talk</span>
          <h2 className="font-display text-[clamp(40px,6.5vw,68px)] text-ink uppercase leading-[.92] tracking-[.01em]">
            Connect<br />With BFC<span className="inline-block w-3 h-3 bg-yellow align-baseline ml-1.5"></span>
          </h2>
        </div>
        <p className="text-muted text-[15px] max-w-sm leading-relaxed md:pb-1">
          Have a rescue lead, a partnership idea or a question? Send a note. We read every message.
        </p>
      </div>

      {/* Two Column Grid */}
      <div className="grid lg:grid-cols-2 gap-6 items-stretch">
        
        {/* Left Card: Contact Information */}
        <div className="bg-surface rounded-[20px] p-7 lg:p-10 border border-line flex flex-col justify-between">
          <div>
            <span className="eyebrow mb-3">Contact Information</span>
            <h3 className="font-display text-3xl lg:text-4xl text-ink uppercase tracking-[.01em] mb-8 leading-none">
              Hello,<br />Neighbour.
            </h3>

            <div className="space-y-5">
              {/* Email */}
              <div className="flex gap-4 items-center">
                <div className="w-9 h-9 rounded-xl bg-yellow flex items-center justify-center font-bold text-ink text-sm shrink-0">
                  @
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-muted uppercase tracking-[.12em]">Email</span>
                  <a href="mailto:hello@bfc.community" className="font-semibold text-ink text-[15px] hover:text-muted transition-colors">
                    hello@bfc.community
                  </a>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex gap-4 items-center">
                <div className="w-9 h-9 rounded-xl bg-yellow flex items-center justify-center font-bold text-ink text-[11px] shrink-0">
                  +91
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-muted uppercase tracking-[.12em]">Call or WhatsApp</span>
                  <a href="tel:+919000000000" className="font-semibold text-ink text-[15px] hover:text-muted transition-colors">
                    +91 90000 00000
                  </a>
                </div>
              </div>

              {/* Based In */}
              <div className="flex gap-4 items-center">
                <div className="w-9 h-9 rounded-xl bg-yellow flex items-center justify-center font-bold text-ink text-xs shrink-0">
                  IN
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-muted uppercase tracking-[.12em]">Based In</span>
                  <span className="font-semibold text-ink text-[15px]">
                    Bengaluru, Karnataka
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 text-[12px] text-muted">
            Emergency Helpline available 9 AM - 6 PM Daily across Bengaluru.
          </div>
        </div>

        {/* Right Card: Send a Message */}
        <div className="bg-surface rounded-[20px] p-7 lg:p-10 border border-line relative">
          <AnimatePresence>
            {contactFormSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-surface rounded-[20px] flex flex-col items-center justify-center text-center p-6 z-30 border border-line"
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

          <span className="eyebrow mb-3">Send a Message</span>
          <h3 className="font-display text-3xl lg:text-4xl text-ink uppercase tracking-[.01em] mb-6 leading-none">
            We Are Listening.
          </h3>
          
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="ct-name" className="block text-[10px] font-bold text-muted uppercase tracking-[.12em] mb-1.5">Your Name</label>
                <input 
                  id="ct-name"
                  type="text" 
                  required
                  placeholder="Your name"
                  className="w-full bg-bg border border-line-soft rounded-xl py-3 px-4 text-[14px] focus:outline-none focus:border-ink transition-colors text-ink placeholder:text-slate"
                />
              </div>
              
              <div>
                <label htmlFor="ct-email" className="block text-[10px] font-bold text-muted uppercase tracking-[.12em] mb-1.5">Email</label>
                <input 
                  id="ct-email"
                  type="email" 
                  required
                  placeholder="you@email.com"
                  className="w-full bg-bg border border-line-soft rounded-xl py-3 px-4 text-[14px] focus:outline-none focus:border-ink transition-colors text-ink placeholder:text-slate"
                />
              </div>
            </div>

            <div>
              <label htmlFor="ct-subject" className="block text-[10px] font-bold text-muted uppercase tracking-[.12em] mb-1.5">Subject</label>
              <input 
                id="ct-subject"
                type="text" 
                placeholder="How can we help?"
                className="w-full bg-bg border border-line-soft rounded-xl py-3 px-4 text-[14px] focus:outline-none focus:border-ink transition-colors text-ink placeholder:text-slate"
              />
            </div>

            <div>
              <label htmlFor="ct-msg" className="block text-[10px] font-bold text-muted uppercase tracking-[.12em] mb-1.5">Your Message</label>
              <textarea 
                id="ct-msg"
                rows={4}
                required
                placeholder="Tell us what is on your mind."
                className="w-full bg-bg border border-line-soft rounded-xl py-3 px-4 text-[14px] focus:outline-none focus:border-ink transition-colors text-ink placeholder:text-slate resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="btn-outline mt-2"
            >
              Send message <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
      </div>
    </section>
  );
}
