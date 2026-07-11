import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = [
    {
      category: 'AI & Machine Learning',
      skills: ['AI', 'Machine Learning', 'NLP', 'Prompt Engineering', 'LLMs', 'GPT', 'BERT'],
    },
    {
      category: 'Frontend Development',
      skills: ['JavaScript', 'React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Axios'],
    },
    {
      category: 'Backend & Databases',
      skills: ['Python', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'C++', 'Postman'],
    },
    {
      category: 'Tools, Leadership & Creative',
      skills: ['Git', 'GitHub', 'Version Control', 'Problem Solving', 'Leadership', 'Team Collaboration', 'Social Media Management', 'Content Creation', 'YouTube Content Strategy', 'Freelancing'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 12 } },
  };

  const skillPillVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.08, transition: { type: 'spring', stiffness: 400, damping: 10 } },
  };

  const SkillCard = ({ category, skills }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      className="group relative bg-[#111827] border border-white/8 rounded-3xl p-6 h-fit shadow-sm hover:shadow-xl hover:shadow-[#2563EB]/10 transition-all duration-500"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2563EB]/0 to-[#2563EB]/0 group-hover:from-[#2563EB]/8 group-hover:to-[#3B82F6]/4 transition-all duration-500 pointer-events-none" />
      <div className="relative z-10">
        <h3 className="text-sm font-semibold text-white mb-4 tracking-tight">{category}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <motion.button
              key={idx}
              variants={skillPillVariants}
              initial="initial"
              whileHover="hover"
              className="px-3 py-1.5 text-xs font-medium text-[#D1D5DB] bg-white/5 hover:bg-[#2563EB]/20 border border-white/8 hover:border-[#2563EB]/40 rounded-full transition-all duration-300 cursor-default select-none hover:text-[#3B82F6]"
              aria-label={`Skill: ${skill}`}
            >
              {skill}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="relative w-full bg-[#0B0B0B] py-16 md:py-20 overflow-hidden" aria-labelledby="skills-heading">
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-10 md:mb-12"
        >
          <div className="mb-3">
            <span className="inline-block text-xs font-semibold text-[#D1D5DB]/50 uppercase tracking-widest px-3 py-1.5 bg-white/4 border border-white/8 rounded-full">
              Technical Stack
            </span>
          </div>
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight">
            Technologies I Work With
          </h2>
          <p className="text-sm text-[#D1D5DB]/60 font-normal">
            Full-stack expertise across AI, machine learning, modern web development, and creative digital strategy.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {skillsData.map((item, idx) => (
            <SkillCard key={idx} category={item.category} skills={item.skills} />
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-10 w-32 h-32 bg-[#2563EB] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        animate={{ y: [0, -8, 0], opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-5 w-40 h-40 bg-[#3B82F6] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
};

export default Skills;
