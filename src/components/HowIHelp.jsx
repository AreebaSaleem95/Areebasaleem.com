import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Understand Business Goals',
    description: 'I begin by deeply understanding your business, target users, and success metrics. No code gets written until the goal is clear.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    accent: '#2563EB',
  },
  {
    number: '02',
    title: 'Plan the Solution',
    description: 'I design scalable system architecture, select the right technology stack, and plan an efficient development roadmap before writing a single line.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    accent: '#3B82F6',
  },
  {
    number: '03',
    title: 'Develop High-Quality Applications',
    description: 'I build responsive, fast, and secure web applications using React.js, Node.js, Express.js, MongoDB, and modern full-stack patterns.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    accent: '#059669',
  },
  {
    number: '04',
    title: 'AI Integration',
    description: 'I integrate AI features — chatbots, content generation, intelligent workflows, and LLM-powered automation — directly into your products.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    accent: '#7c3aed',
  },
  {
    number: '05',
    title: 'Testing & Optimization',
    description: 'I validate every feature for performance, responsiveness, accessibility, and cross-browser compatibility — shipping bug-free, optimized code.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    accent: '#d97706',
  },
  {
    number: '06',
    title: 'Deployment & Support',
    description: 'I deploy applications to production, configure environments, and provide ongoing maintenance, improvements, and technical support.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    accent: '#0891b2',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 14 } },
};

const StepCard = ({ step }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
    className="group relative bg-[#111827] border border-white/8 rounded-3xl p-6 hover:shadow-xl hover:shadow-[#2563EB]/10 transition-all duration-500 flex flex-col"
  >
    <div
      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ background: `linear-gradient(135deg, ${step.accent}10, ${step.accent}04)` }}
      aria-hidden="true"
    />
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs font-black tracking-widest" style={{ color: step.accent }}>
          {step.number}
        </span>
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${step.accent}18`, color: step.accent }}
        >
          {step.icon}
        </div>
      </div>
      <h3 className="text-base font-black text-white mb-2 tracking-tight leading-snug">{step.title}</h3>
      <p className="text-sm text-[#D1D5DB]/60 leading-relaxed font-medium">{step.description}</p>
    </div>
  </motion.div>
);

const HowIHelp = () => (
  <section id="process" className="relative w-full bg-[#0B0B0B] py-20 md:py-28 overflow-hidden" aria-labelledby="process-heading">
    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" aria-hidden="true" />

    <motion.div
      animate={{ y: [0, 12, 0], opacity: [0.04, 0.08, 0.04] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-16 left-12 w-52 h-52 bg-[#2563EB] rounded-full blur-3xl pointer-events-none"
      aria-hidden="true"
    />
    <motion.div
      animate={{ y: [0, -10, 0], opacity: [0.03, 0.06, 0.03] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute bottom-16 right-10 w-44 h-44 bg-[#3B82F6] rounded-full blur-3xl pointer-events-none"
      aria-hidden="true"
    />

    <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-12 md:mb-16"
      >
        <div className="mb-3">
          <span className="inline-block text-xs font-semibold text-[#D1D5DB]/50 uppercase tracking-widest px-3 py-1.5 bg-white/4 border border-white/8 rounded-full">
            My Process
          </span>
        </div>
        <h2 id="process-heading" className="text-3xl md:text-5xl font-black text-white mb-3 tracking-tight">
          How I Help Businesses &amp; Clients
        </h2>
        <p className="text-sm text-[#D1D5DB]/60 max-w-xl leading-relaxed">
          A transparent, structured approach to every project — from understanding your goals to shipping and maintaining production-grade software.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
      >
        {steps.map((step) => <StepCard key={step.number} step={step} />)}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-14 bg-gradient-to-r from-[#1d4ed8] to-[#2563EB] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_60px_rgba(37,99,235,0.25)]"
      >
        <div>
          <h3 className="text-xl md:text-2xl font-black text-white mb-1">Ready to build something?</h3>
          <p className="text-blue-100/80 text-sm font-medium">Let's discuss your project and see how I can help.</p>
        </div>
        <a
          href="#contact"
          className="shrink-0 px-7 py-3.5 rounded-full bg-white text-[#2563EB] font-black text-sm hover:bg-blue-50 transition-all duration-300 shadow-lg transform hover:-translate-y-0.5"
        >
          Start a Conversation
        </a>
      </motion.div>
    </div>
  </section>
);

export default HowIHelp;
