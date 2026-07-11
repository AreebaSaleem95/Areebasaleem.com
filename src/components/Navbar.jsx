import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isOpen
          ? 'bg-[#111827] py-4'
          : isScrolled
            ? 'bg-[#0B0B0B]/90 backdrop-blur-xl py-3 border-b border-white/8 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent py-5'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

        <a
          href="#home"
          className="text-2xl font-black tracking-tight text-white transition-colors duration-300 hover:text-[#3B82F6]"
          aria-label="Areeba Saleem home"
        >
          Areeba <span className="text-[#2563EB]">.</span>
        </a>

        <div className="hidden md:flex space-x-7 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-semibold text-sm tracking-wide relative group text-[#D1D5DB] hover:text-white transition-colors duration-300"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#2563EB] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full text-sm font-black bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white hover:shadow-[0_10px_25px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none p-2 text-white transition-colors duration-300"
            aria-label="Toggle navigation drawer menu"
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[460px] py-6 opacity-100 bg-[#111827] border-b border-white/8 shadow-2xl' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[#D1D5DB] hover:text-white font-extrabold text-base border-b border-white/8 pb-2.5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white font-black hover:shadow-[0_10px_25px_rgba(37,99,235,0.4)] transition-all duration-300 w-full text-center shadow-xl"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
