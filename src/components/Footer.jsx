import React from 'react';

const Footer = () => {
  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/AreebaSaleem95' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/areebasaleem-s' },
    { label: 'LeetCode', href: 'https://leetcode.com/u/AreebaSaleem/' },
    { label: 'YouTube', href: '#', placeholder: true },
    { label: 'Fiverr', href: '#', placeholder: true },
    { label: 'Upwork', href: '#', placeholder: true },
    { label: 'X', href: '#', placeholder: true },
  ];

  return (
    <footer className="bg-[#0B0B0B] text-[#D1D5DB] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh] border-t border-white/5" aria-label="Site footer">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>AI Engineering &amp; Full-Stack Development</p>
          <p>LLMs · NLP · MERN Stack</p>
          <p>Agentic AI · Open Source</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <p>Brainthon Laptop Winner · Brandthon Top 8</p>
          <a href="https://github.com/AreebaSaleem95" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#3B82F6] transition-colors mt-1 underline-offset-4 decoration-1">View Projects</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p>Pakistan · Available Worldwide</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden" aria-hidden="true">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-white/5 w-full text-center">
          AREEBA
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a href="#contact" className="underline hover:text-[#3B82F6] transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Areeba Saleem | Built with React
          </p>
        </div>
        
        <div className="flex flex-col gap-2 md:items-center">
          <a href="mailto:areebasaleem988@gmail.com" className="underline hover:text-[#3B82F6] transition-colors underline-offset-4 decoration-1 lowercase">areebasaleem988@gmail.com</a>
          <a href="tel:+923056473608" className="underline hover:text-[#3B82F6] transition-colors underline-offset-4 decoration-1">+92 305 6473608</a>
          <div className="flex flex-wrap gap-3 mt-2" aria-label="Social links">
            {socialLinks.map(({ label, href, placeholder }) => (
              <a
                key={label}
                href={href}
                target={placeholder ? undefined : '_blank'}
                rel={placeholder ? undefined : 'noopener noreferrer'}
                className={`underline hover:text-[#3B82F6] transition-colors underline-offset-4 decoration-1 ${placeholder ? 'opacity-30 cursor-not-allowed' : ''}`}
                aria-label={placeholder ? `${label} (coming soon)` : label}
                onClick={placeholder ? (e) => e.preventDefault() : undefined}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p className="text-white/50 text-[9px]">NAVTTC AI · Hunarmand Punjab · Prompt Engineering</p>
          <a href="https://github.com/AreebaSaleem95" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#3B82F6] transition-colors underline-offset-4 decoration-1">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
