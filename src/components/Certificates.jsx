import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import cert1Pdf from '../assets/Certificataes/Areeba.pdf';
import cert2Pdf from '../assets/Certificataes/Certificate.pdf';
import cert3Pdf from '../assets/Certificataes/N65hfzBKXRiATv6yd_Zbnc2o4ok6kD2NEXx_697608f04414d52c3e80c273_1777088959560_completion_certificate.pdf';
import certPng from '../assets/Certificataes/png.png';

const certificates = [
  {
    id: 1,
    name: 'AI & Prompt Engineering Certification',
    organization: 'NAVTTC / Hunarmand Punjab',
    date: '2024',
    skills: ['Prompt Engineering', 'LLMs', 'AI Workflows', 'GPT Integration'],
    image: certPng,
    file: cert3Pdf,
    accent: '#7c3aed',
  },
  {
    id: 2,
    name: 'Full Stack Development Certificate',
    organization: 'Professional Training Program',
    date: '2024',
    skills: ['React.js', 'Node.js', 'MongoDB', 'REST APIs'],
    image: null,
    file: cert1Pdf,
    accent: '#2563EB',
  },
  {
    id: 3,
    name: 'Completion Certificate',
    organization: 'Training Institute',
    date: '2024',
    skills: ['Web Development', 'JavaScript', 'Problem Solving'],
    image: null,
    file: cert2Pdf,
    accent: '#0891b2',
  },
];

const AwardIcon = ({ color }) => (
  <svg className="w-7 h-7" fill="none" stroke={color} viewBox="0 0 24 24" aria-hidden="true" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const CertModal = ({ cert, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
    onClick={onClose}
    role="dialog"
    aria-modal="true"
    aria-label={`Viewing certificate: ${cert.name}`}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="bg-[#111827] border border-white/8 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between p-5 border-b border-white/8">
        <div>
          <h3 className="font-black text-white text-base">{cert.name}</h3>
          <p className="text-xs text-[#D1D5DB]/50 mt-0.5">{cert.organization} · {cert.date}</p>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-white/8 flex items-center justify-center hover:bg-white/15 transition-colors"
          aria-label="Close certificate viewer"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="p-4">
        {cert.image ? (
          <img
            src={cert.image}
            alt={`${cert.name} certificate`}
            className="w-full rounded-xl object-contain max-h-[60vh] bg-[#1F2937]"
          />
        ) : (
          <iframe
            src={cert.file}
            title={`${cert.name} PDF`}
            className="w-full h-[60vh] rounded-xl border border-white/8"
            aria-label={`PDF viewer for ${cert.name}`}
          />
        )}
      </div>

      <div className="px-5 pb-5 flex gap-3">
        <a
          href={cert.file}
          download
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white text-sm font-bold hover:shadow-[0_8px_20px_rgba(37,99,235,0.4)] transition-all"
          aria-label={`Download ${cert.name}`}
        >
          <DownloadIcon />
          Download
        </a>
        <a
          href={cert.file}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-[#D1D5DB] text-sm font-bold hover:border-white/30 hover:text-white transition-all"
          aria-label={`Open ${cert.name} in new tab`}
        >
          Open in New Tab
        </a>
      </div>
    </motion.div>
  </motion.div>
);

const CertCard = ({ cert, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
        className="group relative bg-[#111827] border border-white/8 rounded-3xl p-6 hover:shadow-xl hover:shadow-[#2563EB]/10 transition-all duration-500 hover:-translate-y-1 flex flex-col"
        style={{ boxShadow: `0 0 0 0 ${cert.accent}00` }}
      >
        {/* Hover tint */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `linear-gradient(135deg, ${cert.accent}10, ${cert.accent}04)` }}
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-4 w-12 h-12 rounded-2xl bg-[#1F2937] border border-white/8 flex items-center justify-center">
            <AwardIcon color={cert.accent} />
          </div>

          {cert.image && (
            <div className="mb-4 rounded-xl overflow-hidden border border-white/8 h-32 bg-[#1F2937]">
              <img
                src={cert.image}
                alt={`${cert.name} preview`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          )}

          <h3 className="font-black text-white text-sm mb-1 leading-tight">{cert.name}</h3>
          <p className="text-xs text-[#D1D5DB]/50 mb-3">{cert.organization} · {cert.date}</p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 text-[10px] font-semibold rounded-full border bg-white/4 border-white/8 text-[#D1D5DB]/60"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-auto flex gap-2.5">
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-white text-xs font-bold transition-all duration-200 hover:shadow-lg"
              style={{ backgroundColor: cert.accent }}
              aria-label={`View ${cert.name} certificate`}
            >
              <EyeIcon />
              View
            </button>
            <a
              href={cert.file}
              download
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#D1D5DB] text-xs font-bold hover:bg-white/10 hover:text-white transition-all duration-200"
              aria-label={`Download ${cert.name} certificate`}
            >
              <DownloadIcon />
              Download
            </a>
          </div>
        </div>
      </motion.article>

      <AnimatePresence>
        {open && <CertModal cert={cert} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

const Certificates = () => (
  <section id="certifications" className="relative w-full bg-[#0B0B0B] py-20 md:py-28 overflow-hidden" aria-labelledby="certs-heading">
    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" aria-hidden="true" />

    <motion.div
      animate={{ y: [0, 10, 0], opacity: [0.04, 0.07, 0.04] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-20 right-16 w-48 h-48 bg-[#2563EB] rounded-full blur-3xl pointer-events-none"
      aria-hidden="true"
    />
    <motion.div
      animate={{ y: [0, -10, 0], opacity: [0.03, 0.05, 0.03] }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute bottom-20 left-10 w-40 h-40 bg-[#7c3aed] rounded-full blur-3xl pointer-events-none"
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
            Credentials
          </span>
        </div>
        <h2 id="certs-heading" className="text-3xl md:text-5xl font-black text-white mb-3 tracking-tight">
          Certificates &amp; Achievements
        </h2>
        <p className="text-sm text-[#D1D5DB]/60 max-w-lg leading-relaxed">
          Professional certifications from industry programs, training institutes, and academic achievements — click any card to view or download.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <CertCard key={cert.id} cert={cert} index={index} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center text-xs text-[#D1D5DB]/30 mt-10"
      >
        More certificates will be added as they are earned.
      </motion.p>
    </div>
  </section>
);

export default Certificates;
