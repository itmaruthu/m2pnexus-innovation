import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import m2pLogo from '../assets/m2p_nexus_logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'About', href: '#about' },
    { name: 'Founders', href: '#founders' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-3 group select-none cursor-pointer">
          <img
            src={m2pLogo}
            alt="M2P Nexus Logo"
            className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105"
          />
          <span className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-emerald font-display transition-all duration-300 group-hover:brightness-110">
            M2P NEXUS
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 hover:text-brand-cyan transition-colors duration-200 font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="flex items-center space-x-2 text-xs font-semibold px-5 py-2.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 hover:bg-brand-cyan/20 hover:border-brand-cyan text-brand-cyan shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all duration-300 hover:scale-105"
          >
            <span>Book Free Consultation</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-300 hover:text-brand-cyan transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-y-0 right-0 w-80 bg-brand-midnight/98 border-l border-white/5 backdrop-blur-2xl z-40 p-8 transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end mb-8">
          <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-brand-cyan">
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg text-gray-300 hover:text-brand-cyan font-medium border-b border-white/5 pb-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center space-x-2 text-sm font-semibold px-6 py-3 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan hover:bg-brand-cyan/20 transition-all duration-300"
          >
            <span>Book Free Consultation</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
}
