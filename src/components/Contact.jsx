import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    permission: false
  });

  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.permission) {
      setStatus({ type: 'error', message: 'Please accept the contact permission checkbox.' });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id') {
      setStatus({
        type: 'error',
        message: 'Email service is not configured. Add your EmailJS credentials to a .env file.',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'areebasaleem988@gmail.com',
        },
        publicKey
      );

      setStatus({ type: 'success', message: `Thanks ${formData.name}! Your message has been sent successfully.` });
      setFormData({ name: '', email: '', subject: '', message: '', permission: false });
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again or email me directly at areebasaleem988@gmail.com.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900" aria-labelledby="contact-heading">
      
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
        aria-hidden="true"
      >
        <h1 
          id="contact-heading"
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      <div className="relative z-10 w-full flex justify-end items-end">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#111827] border-t border-l border-white/8 w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between"
        >
          <div className="text-xs font-bold tracking-[0.2em] mb-12 md:mb-20 uppercase opacity-90">
            Reach Me
          </div>

          <AnimatePresence mode="wait">
            {status && (
              <motion.div
                key={status.type}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                role="alert"
                aria-live="polite"
                className={`mb-8 px-4 py-3 rounded-lg text-sm font-semibold ${
                  status.type === 'success'
                    ? 'bg-white/20 border border-white/40 text-white'
                    : 'bg-black/20 border border-white/30 text-red-100'
                }`}
              >
                {status.message}
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="flex flex-col gap-12 md:gap-16 w-full" noValidate>
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
              
              <div className="flex-1 flex flex-col gap-10">
                <div className="relative">
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name" 
                    required
                    autoComplete="name"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email" 
                    required
                    autoComplete="email"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="subject" className="sr-only">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject" 
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea 
                    id="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here" 
                    required
                    className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium resize-none rounded-none"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 mt-4">
              <div className="flex-1 flex items-start gap-4 text-sm font-medium text-white/90">
                <input 
                  type="checkbox" 
                  id="permission" 
                  checked={formData.permission}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer" 
                  style={{ accentColor: "white" }}
                />
                <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
                  I give permission to contact me at this email address.
                </label>
              </div>

              <div className="flex-1 flex flex-col gap-8 text-xs text-white/70 font-medium">
                <p className="leading-relaxed max-w-[400px]">
                  Prefer direct contact? Email me at{' '}
                  <a href="mailto:areebasaleem988@gmail.com" className="underline hover:text-white transition-colors">
                    areebasaleem988@gmail.com
                  </a>{' '}
                  or call{' '}
                  <a href="tel:+923056473608" className="underline hover:text-white transition-colors">
                    +92 305 6473608
                  </a>.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                  <p className="max-w-[250px] leading-relaxed">
                    Based in Pakistan · Open to remote opportunities worldwide.
                  </p>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white font-bold flex items-center justify-center gap-3 hover:shadow-[0_10px_25px_rgba(37,99,235,0.4)] transition-all duration-300 group whitespace-nowrap self-start sm:self-auto disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send'}
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
