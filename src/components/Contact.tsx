import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Users, MessageSquare, Check, Send } from 'lucide-react';

export default function Contact() {
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactFormSubmitted(true);
    setTimeout(() => setContactFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 container mx-auto max-w-[1180px]">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
        <span className="eyebrow mb-6">
          Get In Touch
        </span>
        <h2 className="font-display text-4xl md:text-[52px] uppercase tracking-[.01em] text-ink mb-6">
          Connect With BFC
        </h2>
        <p className="text-muted text-[15px] leading-relaxed">
          Report injured street animals, inquire about adopting an indie puppy, or ask questions about our reflective collar drives.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-stretch max-w-5xl mx-auto">
        
        {/* Column 1: Details */}
        <div className="brand-card p-8 md:p-12 border border-line bg-surface flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <h3 className="font-display text-[32px] uppercase tracking-[.02em] text-ink mb-8">Contact Information</h3>
            
            <div className="flex gap-5 items-start">
              <div className="text-yellow shrink-0 mt-1"><MapPin className="w-6 h-6" strokeWidth={1.5} /></div>
              <div>
                <h5 className="font-bold text-ink uppercase text-[13px] tracking-wide">Rescue Headquarters</h5>
                <p className="text-[14px] text-muted leading-relaxed mt-1">
                  No 45, 12th Cross, Indiranagar Double Road, Bangalore - 560038
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="text-yellow shrink-0 mt-1"><Phone className="w-6 h-6" strokeWidth={1.5} /></div>
              <div>
                <h5 className="font-bold text-ink uppercase text-[13px] tracking-wide">Helpline Number</h5>
                <p className="text-[14px] text-muted leading-relaxed mt-1">
                  +91 98450 12345 (9 AM - 6 PM Daily)
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="text-yellow shrink-0 mt-1"><Mail className="w-6 h-6" strokeWidth={1.5} /></div>
              <div>
                <h5 className="font-bold text-ink uppercase text-[13px] tracking-wide">Email Address</h5>
                <p className="text-[14px] text-muted leading-relaxed mt-1 break-all">
                  rescue@brutalityfreecommunity.org
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-line pt-8">
            <h5 className="font-bold text-ink uppercase text-[13px] tracking-wide mb-4">Follow Our Action</h5>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-bg border border-line text-ink flex items-center justify-center hover:bg-yellow transition-colors">
                <Users className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919845012345" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-bg border border-line text-ink flex items-center justify-center hover:bg-yellow transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>


        <div className="brand-card p-8 md:p-12 border border-line bg-surface relative">
          <AnimatePresence>
            {contactFormSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-surface rounded-[24px] flex flex-col items-center justify-center text-center p-6 z-30 border border-line"
              >
                <div className="w-16 h-16 rounded-full bg-yellow text-ink flex items-center justify-center mb-6">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-display text-[32px] text-ink mb-2 uppercase tracking-[.02em]">Message Sent!</h4>
                <p className="text-muted text-[15px] max-w-[280px]">
                  We have received your message and will reply via email as soon as possible.
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <h3 className="font-display text-[32px] text-ink mb-8 uppercase tracking-[.02em]">Send a Message</h3>
          
          <form onSubmit={handleContactSubmit} className="space-y-5">
            <div>
              <label htmlFor="ct-name" className="block text-[11px] font-bold text-ink uppercase tracking-widest mb-2">Name</label>
              <input 
                id="ct-name"
                type="text" 
                required
                placeholder="Your Name"
                className="w-full bg-bg border border-line rounded-lg py-3 px-4 text-[14px] focus:outline-none focus:border-ink transition-colors text-ink placeholder:text-muted"
              />
            </div>
            
            <div>
              <label htmlFor="ct-email" className="block text-[11px] font-bold text-ink uppercase tracking-widest mb-2">Email</label>
              <input 
                id="ct-email"
                type="email" 
                required
                placeholder="name@email.com"
                className="w-full bg-bg border border-line rounded-lg py-3 px-4 text-[14px] focus:outline-none focus:border-ink transition-colors text-ink placeholder:text-muted"
              />
            </div>

            <div>
              <label htmlFor="ct-phone" className="block text-[11px] font-bold text-ink uppercase tracking-widest mb-2">Phone</label>
              <input 
                id="ct-phone"
                type="tel" 
                placeholder="Mobile Number (Optional)"
                className="w-full bg-bg border border-line rounded-lg py-3 px-4 text-[14px] focus:outline-none focus:border-ink transition-colors text-ink placeholder:text-muted"
              />
            </div>

            <div>
              <label htmlFor="ct-msg" className="block text-[11px] font-bold text-ink uppercase tracking-widest mb-2">Message</label>
              <textarea 
                id="ct-msg"
                rows={4}
                required
                placeholder="Type your message here..."
                className="w-full bg-bg border border-line rounded-lg py-3 px-4 text-[14px] focus:outline-none focus:border-ink transition-colors text-ink placeholder:text-muted resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-ink text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#222] transition-colors text-[13px] uppercase tracking-[.1em] mt-2"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
