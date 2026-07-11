import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    name: 'Interview Buddy',
    tagline: 'AI-Powered Interview Preparation Platform',
    description:
      'A full-stack AI interview platform built as my Final Year Project at GCUF, earning an A Grade. It simulates real technical and behavioral interviews using AI-driven question generation, evaluates responses, and provides detailed performance feedback to help candidates improve.',
    image: 'https://opengraph.githubassets.com/1/AreebaSaleem95/interview-buddy',
    screenshots: ['https://opengraph.githubassets.com/1/AreebaSaleem95/interview-buddy'],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'AI/NLP', 'REST APIs'],
    features: [
      'AI-generated interview questions by role & difficulty',
      'Real-time answer evaluation & scoring',
      'Performance analytics dashboard',
      'Role-based access (Admin, Candidate)',
      '25 REST API endpoints with full auth flow',
      'Secure JWT authentication with token revocation',
    ],
    problemSolved:
      "Candidates struggle to prepare for interviews due to lack of personalized, on-demand practice. Interview Buddy provides a scalable AI platform that adapts questions to the candidate's skill level.",
    challenges:
      'Integrating AI evaluation into a real-time MERN workflow while maintaining sub-second response times and secure multi-role authentication was the key engineering challenge.',
    role: 'Full-stack developer and AI integration lead — designed the system architecture, built all 25 API endpoints, implemented JWT auth, and integrated AI question generation.',
    github: 'https://github.com/AreebaSaleem95/interview-buddy',
    live: null,
    status: 'Completed',
    featured: true,
    grade: 'A Grade',
    isFYP: true,
  },
  {
    id: 2,
    name: 'MERN LMS',
    tagline: 'Full-Stack Learning Management System',
    description:
      'A production-deployed Learning Management System built on the MERN stack. The platform supports three user roles — Student, Instructor, and Admin — with secure authentication, course management, and a live backend deployed on Render.',
    image: 'https://opengraph.githubassets.com/1/AreebaSaleem95/lms-mern-project',
    screenshots: ['https://opengraph.githubassets.com/1/AreebaSaleem95/lms-mern-project'],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt', 'Render'],
    features: [
      'Student enrollment & course browsing',
      'Instructor course creation & management',
      'Admin dashboard for user & content control',
      'JWT authentication with bcrypt password hashing',
      'Role-based protected API routes',
      'Deployed frontend & backend on Render',
    ],
    problemSolved:
      'Educational institutions needed a scalable, secure platform to manage courses and users online. This LMS delivers a full production-ready solution with clear role separation.',
    challenges:
      'Implementing robust role-based access control across the full stack, ensuring protected routes are enforced on both client and server, and deploying both services reliably to Render.',
    role: 'Solo full-stack developer — built and deployed the entire MERN application from scratch, including MVC backend, React frontend, and cloud deployment configuration.',
    github: 'https://github.com/AreebaSaleem95/lms-mern-project',
    live: 'https://lms-mern-project-1-t9ya.onrender.com',
    status: 'Live',
    featured: true,
    grade: null,
    isFYP: false,
  },
  {
    id: 3,
    name: 'Hunarmand Portfolio',
    tagline: 'Professional Developer Portfolio Website',
    description:
      'This very portfolio — a modern, performant React portfolio built for the Hunarmand Punjab program assignment. Features a video hero section, scroll-driven animations, EmailJS contact form, and responsive design optimized for all devices.',
    image: 'https://opengraph.githubassets.com/1/AreebaSaleem95/hunarmand-portfolio',
    screenshots: ['https://opengraph.githubassets.com/1/AreebaSaleem95/hunarmand-portfolio'],
    technologies: ['React.js', 'Vite', 'Tailwind CSS v4', 'Framer Motion', 'AOS', 'EmailJS'],
    features: [
      'Video hero section with mute/unmute control',
      'Scroll-driven path animation in Expertise section',
      'EmailJS-powered contact form',
      'AOS and Framer Motion animations throughout',
      'Mobile-first responsive design',
      'Preloader with smooth exit transition',
    ],
    problemSolved:
      'Required a professional online presence that showcases skills, projects, and contact information in a visually compelling, performance-optimized format.',
    challenges:
      'Combining AOS and Framer Motion without conflicts, implementing the SVG path scroll animation synced to scroll position, and optimizing the video hero for all screen sizes.',
    role: 'Designer & developer — designed the full UI/UX, implemented all components, animations, and the contact system using EmailJS.',
    github: 'https://github.com/AreebaSaleem95/hunarmand-portfolio',
    live: null,
    status: 'In Progress',
    featured: false,
    grade: null,
    isFYP: false,
  },
];

const statusColors = {
  Live: 'bg-green-900/40 text-green-400 border-green-500/30',
  Completed: 'bg-blue-900/40 text-blue-400 border-blue-500/30',
  'In Progress': 'bg-yellow-900/40 text-yellow-400 border-yellow-500/30',
};

const TechBadge = ({ tech }) => (
  <span className="px-2.5 py-1 text-[10px] font-semibold bg-white/5 border border-white/10 rounded-full text-[#D1D5DB] hover:bg-[#2563EB]/20 hover:border-[#2563EB]/40 hover:text-[#3B82F6] transition-all duration-200 cursor-default">
    {tech}
  </span>
);

const ExpandedView = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
    onClick={onClose}
    role="dialog"
    aria-modal="true"
    aria-label={`${project.name} project details`}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: 30 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="bg-[#111827] border border-white/8 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative">
        <img
          src={project.screenshots[0]}
          alt={`${project.name} screenshot`}
          className="w-full h-48 md:h-64 object-cover rounded-t-3xl bg-[#1F2937]"
          loading="lazy"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#111827]/90 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-[#1F2937] shadow-lg transition-all"
          aria-label="Close project details"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`px-3 py-1 text-xs font-bold rounded-full border ${statusColors[project.status]}`}>
            {project.status}
          </span>
          {project.isFYP && (
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white">
              FYP · {project.grade}
            </span>
          )}
          {project.featured && !project.isFYP && (
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-white/10 border border-white/20 text-white">Featured</span>
          )}
        </div>
      </div>

      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-black text-white mb-1">{project.name}</h3>
        <p className="text-[#3B82F6] font-semibold text-sm mb-4">{project.tagline}</p>
        <p className="text-[#D1D5DB]/80 text-sm leading-relaxed mb-6">{project.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[#D1D5DB]/40 mb-2">Problem Solved</h4>
            <p className="text-sm text-[#D1D5DB]/70 leading-relaxed">{project.problemSolved}</p>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[#D1D5DB]/40 mb-2">Challenges Faced</h4>
            <p className="text-sm text-[#D1D5DB]/70 leading-relaxed">{project.challenges}</p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xs font-black uppercase tracking-wider text-[#D1D5DB]/40 mb-2">My Role</h4>
          <p className="text-sm text-[#D1D5DB]/70 leading-relaxed">{project.role}</p>
        </div>

        <div className="mb-6">
          <h4 className="text-xs font-black uppercase tracking-wider text-[#D1D5DB]/40 mb-3">Key Features</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#D1D5DB]/80">
                <span className="w-4 h-4 rounded-full bg-[#2563EB]/20 flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                  <svg className="w-2.5 h-2.5 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xs font-black uppercase tracking-wider text-[#D1D5DB]/40 mb-3">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => <TechBadge key={t} tech={t} />)}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-4 border-t border-white/8">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F2937] border border-white/10 text-white text-sm font-bold hover:bg-white/10 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white text-sm font-bold hover:shadow-[0_8px_20px_rgba(37,99,235,0.4)] transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
        className="group relative bg-[#111827] border border-white/8 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#2563EB]/10 transition-all duration-500 hover:-translate-y-1 flex flex-col"
      >
        <div className="relative overflow-hidden bg-[#1F2937] h-48">
          <img
            src={project.screenshots[0]}
            alt={`${project.name} project screenshot`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" aria-hidden="true" />
          <div className="absolute top-3 left-3 flex gap-2">
            {project.isFYP && (
              <span className="px-2.5 py-1 text-[10px] font-black rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white shadow-lg">
                ★ FYP · {project.grade}
              </span>
            )}
            {project.featured && !project.isFYP && (
              <span className="px-2.5 py-1 text-[10px] font-black rounded-full bg-white/10 border border-white/20 text-white shadow-lg">Featured</span>
            )}
          </div>
          <div className="absolute top-3 right-3">
            <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full border ${statusColors[project.status]}`}>
              {project.status}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-lg font-black text-white mb-1">{project.name}</h3>
          <p className="text-[#3B82F6] text-xs font-bold mb-3">{project.tagline}</p>
          <p className="text-[#D1D5DB]/60 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 5).map((t) => <TechBadge key={t} tech={t} />)}
            {project.technologies.length > 5 && (
              <span className="px-2.5 py-1 text-[10px] font-semibold text-[#D1D5DB]/40 bg-white/3 rounded-full border border-white/8">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>

          <div className="mt-auto flex flex-wrap gap-2.5">
            <button
              onClick={() => setExpanded(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white text-xs font-bold hover:shadow-[0_8px_20px_rgba(37,99,235,0.35)] transition-all duration-200"
              aria-label={`View details for ${project.name}`}
            >
              View Details
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 text-[#D1D5DB] text-xs font-bold hover:border-white/30 hover:text-white transition-all duration-200"
              aria-label={`View ${project.name} on GitHub`}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#3B82F6] text-xs font-bold hover:bg-[#2563EB] hover:text-white transition-all duration-200"
                aria-label={`View ${project.name} live demo`}
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.article>

      <AnimatePresence>
        {expanded && <ExpandedView project={project} onClose={() => setExpanded(false)} />}
      </AnimatePresence>
    </>
  );
};

const Projects = () => (
  <section id="projects" className="relative w-full bg-[#0B0B0B] py-20 md:py-28 overflow-hidden" aria-labelledby="projects-heading">
    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" aria-hidden="true" />

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
            My Work
          </span>
        </div>
        <h2 id="projects-heading" className="text-3xl md:text-5xl font-black text-white mb-3 tracking-tight">
          Featured Projects
        </h2>
        <p className="text-sm text-[#D1D5DB]/60 max-w-lg leading-relaxed">
          Full-stack applications spanning AI integration, MERN development, and modern web engineering — built to solve real problems.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 text-center"
      >
        <a
          href="https://github.com/AreebaSaleem95"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-[#D1D5DB] font-bold text-sm hover:border-[#2563EB]/50 hover:bg-[#2563EB]/10 hover:text-white transition-all duration-300"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          View All Repositories on GitHub
        </a>
      </motion.div>
    </div>
  </section>
);

export default Projects;
