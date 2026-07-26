import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PawPrint, MapPin, Phone, Mail, Users, MessageSquare, Check, Send } from 'lucide-react';

export default function Contact() {
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactFormSubmitted(true);
    setTimeout(() => setContactFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 container mx-auto max-w-[1440px]">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-gold font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 mb-4">
          GET IN TOUCH <PawPrint className="w-4 h-4 fill-current" />
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-4">
          Connect With BFC
        </h2>
        <p className="text-muted text-sm md:text-base leading-relaxed">
          Report injured street animals, inquire about adopting an indie puppy, or ask questions about our reflective collar drives.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-stretch max-w-5xl mx-auto">
        
        {/* Column 1: Details */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <h3 className="font-serif font-bold text-2xl text-forest mb-4">Contact Information</h3>
            
            <div className="flex gap-4 items-start">
              <div className="bg-beige p-3 rounded-xl text-forest shrink-0"><MapPin className="w-5 h-5" /></div>
              <div>
                <h5 className="font-bold text-sm text-forest">Rescue Headquarters</h5>
                <p className="text-xs text-muted leading-relaxed mt-1">
                  No 45, 12th Cross, Indiranagar Double Road, Bangalore - 560038
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-beige p-3 rounded-xl text-forest shrink-0"><Phone className="w-5 h-5" /></div>
              <div>
                <h5 className="font-bold text-sm text-forest">Helpline Number</h5>
                <p className="text-xs text-muted leading-relaxed mt-1">
                  +91 98450 12345 (9 AM - 6 PM Daily)
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-beige p-3 rounded-xl text-forest shrink-0"><Mail className="w-5 h-5" /></div>
              <div>
                <h5 className="font-bold text-sm text-forest">Email Address</h5>
                <p className="text-xs text-muted leading-relaxed mt-1">
                  rescue@brutalityfreecommunity.org
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h5 className="font-bold text-sm text-forest mb-4">Follow Our Action</h5>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-beige text-forest flex items-center justify-center hover:bg-gold hover:text-white transition-all shadow-inner">
                <Users className="w-4 h-4" />
              </a>
              <a href="https://wa.me/919845012345" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-beige text-forest flex items-center justify-center hover:bg-gold hover:text-white transition-all shadow-inner">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>


        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative">
          <AnimatePresence>
            {contactFormSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white rounded-3xl flex flex-col items-center justify-center text-center p-6 z-30"
              >
                <div className="w-12 h-12 rounded-full bg-forest text-white flex items-center justify-center mb-4 shadow-md">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-2xl text-forest mb-2">Message Sent!</h4>
                <p className="text-muted text-xs max-w-xs">
                  We have received your message and will reply via email as soon as possible.
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <h3 className="font-serif font-bold text-2xl text-forest mb-6">Send a Message</h3>
          
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label htmlFor="ct-name" className="block text-[10px] font-semibold text-forest uppercase tracking-wider mb-1">Name</label>
              <input 
                id="ct-name"
                type="text" 
                required
                placeholder="Your Name"
                className="w-full bg-[#FAF8F3] border border-gray-200 rounded-xl py-2.5 px-4 text-xs focus:outline-none focus:border-gold transition-colors text-charcoal font-medium"
              />
            </div>
            
            <div>
              <label htmlFor="ct-email" className="block text-[10px] font-semibold text-forest uppercase tracking-wider mb-1">Email</label>
              <input 
                id="ct-email"
                type="email" 
                required
                placeholder="name@email.com"
                className="w-full bg-[#FAF8F3] border border-gray-200 rounded-xl py-2.5 px-4 text-xs focus:outline-none focus:border-gold transition-colors text-charcoal font-medium"
              />
            </div>

            <div>
              <label htmlFor="ct-phone" className="block text-[10px] font-semibold text-forest uppercase tracking-wider mb-1">Phone</label>
              <input 
                id="ct-phone"
                type="tel" 
                placeholder="Mobile Number (Optional)"
                className="w-full bg-[#FAF8F3] border border-gray-200 rounded-xl py-2.5 px-4 text-xs focus:outline-none focus:border-gold transition-colors text-charcoal font-medium"
              />
            </div>

            <div>
              <label htmlFor="ct-msg" className="block text-[10px] font-semibold text-forest uppercase tracking-wider mb-1">Message</label>
              <textarea 
                id="ct-msg"
                rows={3}
                required
                placeholder="Type your message here..."
                className="w-full bg-[#FAF8F3] border border-gray-200 rounded-xl py-2.5 px-4 text-xs focus:outline-none focus:border-gold transition-colors text-charcoal font-medium resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-forest hover:bg-forest/90 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm text-sm"
            >
              Send Message <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
