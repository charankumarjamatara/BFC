import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, AlertCircle, Loader2 } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Contact() {
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current || isLoading) return;
    
    setIsLoading(true);
    setSubmitError(null);

    const formData = new FormData(formRef.current);
    const name = (formData.get('name') as string || '').trim();
    const email = (formData.get('email') as string || '').trim();
    const subject = (formData.get('subject') as string || '').trim();
    const message = (formData.get('message') as string || '').trim();

    if (!name || !email || !message) {
      setSubmitError('Please fill in all required fields.');
      setIsLoading(false);
      return;
    }

    const payload = {
      type: 'contact',
      name,
      email,
      subject,
      message,
      data: {
        name,
        email,
        subject,
        message
      }
    };

    try {
      const response = await fetch('/api/send-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const contentType = response.headers.get('content-type') || '';
      const rawBody = await response.text();

      let result: any = null;
      if (contentType.includes('application/json')) {
        try {
          result = rawBody ? JSON.parse(rawBody) : null;
        } catch {
          throw new Error('Server returned an invalid JSON response.');
        }
      } else {
        console.error('Non-JSON response received:', response.status, rawBody.slice(0, 150));
        throw new Error(
          `Server returned an invalid response (HTTP ${response.status}). Please try again later or contact us at brutalityfreecommunity@gmail.com.`
        );
      }

      if (!response.ok || !result || !result.success) {
        throw new Error(result?.error || result?.message || `Failed to send message (HTTP ${response.status})`);
      }

      setContactFormSubmitted(true);
      formRef.current.reset();
      setTimeout(() => setContactFormSubmitted(false), 5000);
    } catch (error: any) {
      console.error('FAILED...', error);
      setSubmitError(error.message || 'Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
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
                    <a href="mailto:brutalityfreecommunity@gmail.com" className="font-semibold text-ink text-[14.5px] hover:text-muted transition-colors">
                      brutalityfreecommunity@gmail.com
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
                    <a href="tel:+919008912829" className="font-semibold text-ink text-[14.5px] hover:text-muted transition-colors">
                      +91 90089 12829
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
            
            <form ref={formRef} onSubmit={handleContactSubmit} className="space-y-4">
              {submitError && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {submitError}
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="ct-name" className="block text-[10px] font-bold text-muted uppercase tracking-[.12em] mb-2">Your Name</label>
                  <input 
                    id="ct-name"
                    name="name"
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
                    name="email"
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
                  name="subject"
                  type="text" 
                  placeholder="How can we help?"
                  className="w-full bg-bg border border-line-soft rounded-[12px] py-3.5 px-4 text-[14px] focus:outline-none focus:border-ink transition-colors text-ink placeholder:text-slate/60"
                />
              </div>

              <div>
                <label htmlFor="ct-msg" className="block text-[10px] font-bold text-muted uppercase tracking-[.12em] mb-2">Your Message</label>
                <textarea 
                  id="ct-msg"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us what is on your mind."
                  className="w-full bg-bg border border-line-soft rounded-[12px] py-3.5 px-4 text-[14px] focus:outline-none focus:border-ink transition-colors text-ink placeholder:text-slate/60 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="btn-outline mt-2 flex items-center justify-center gap-2 min-w-[160px]"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send message'
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
