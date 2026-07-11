import React from 'react';
import reactImage from '../assets/about/react.png';
import nodeImage from '../assets/about/node.png';
import mongoImage from '../assets/about/mongodb.png';
import profileImage from '../assets/about/profile.png';

const About = () => {
  return (
    <section id="about" className="bg-[#0B0B0B] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-[#2563EB]/30 transform -translate-x-1/2 shadow-inner z-0"></div>
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-[#1F2937] rounded border border-white/10 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.5)]"></div>

            <div className="bg-[#111827] w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.7)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500 border border-white/8">
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-[#111827] rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/40 rounded-full shadow-inner"></div>
              </div>
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-[#1F2937]">
                <img
                  src={profileImage}
                  alt="Areeba Saleem — AI Engineer & Full-Stack Developer"
                  className="w-full h-full object-cover"
                  loading="eager"
                  width="280"
                  height="373"
                  onError={(e) => { e.currentTarget.src = '/profile-placeholder.svg'; }}
                />
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          <h2 id="about-heading" className="text-4xl md:text-5xl font-black text-white mb-4">Hello!</h2>
          <p className="text-lg font-bold mb-6 leading-relaxed max-w-3xl text-[#D1D5DB]">
            Hi, my name is <span className="text-[#3B82F6] text-xl font-black mx-1 tracking-wide uppercase">Areeba Saleem</span>, a final-year BS Computer Science student at Government College University Faisalabad with a deep passion for Artificial Intelligence, Machine Learning, and Full-Stack Development.
          </p>
          <p className="text-base font-medium mb-6 leading-relaxed max-w-3xl text-[#D1D5DB]/80">
            I specialize in building intelligent applications powered by NLP, LLMs, and Agentic AI, alongside scalable MERN stack platforms. With a research-driven mindset and commitment to clean code, I thrive on solving complex problems — from AI-powered interview systems to production-ready web applications. I actively contribute to open source, create educational programming content, and continuously expand my expertise at the intersection of AI and software engineering.
          </p>
          <p className="text-sm font-semibold mb-12 leading-relaxed max-w-3xl text-[#D1D5DB]/50">
            BS Computer Science · GCUF · 2022–2026 · Brainthon Laptop Winner · Punjab Brandthon Top 8
          </p>

          <div className="flex items-center gap-10 mt-8" role="list" aria-label="Core technologies">
            <img
              data-aos="zoom-in" data-aos-delay="300"
              src={reactImage}
              alt="React.js"
              className="w-20 h-20 md:w-24 md:h-24 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl"
              loading="lazy"
              role="listitem"
            />
            <img
              data-aos="zoom-in" data-aos-delay="450"
              src={nodeImage}
              alt="Node.js"
              className="w-20 h-20 md:w-24 md:h-24 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl"
              loading="lazy"
              role="listitem"
            />
            <img
              data-aos="zoom-in" data-aos-delay="600"
              src={mongoImage}
              alt="MongoDB"
              className="w-20 h-20 md:w-24 md:h-24 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl"
              loading="lazy"
              role="listitem"
            />
          </div>
        </div>
      </div>

      {/* Wave divider — matches next section bg */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1" aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0B0B0B]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="absolute top-10 right-10 md:right-20 text-[#2563EB] opacity-15 animate-pulse" aria-hidden="true">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-[#3B82F6] opacity-10 animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true">
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
