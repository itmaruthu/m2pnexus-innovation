import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';

function Linkedin({ size = 16, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}


export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'About', href: '#about' },
    { name: 'Founders', href: '#founders' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'Web Development', href: '#services' },
    { name: 'Custom Software', href: '#services' },
    { name: 'Business Automation', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'Cloud Deployment', href: '#services' },
  ];

  const solutions = [
    { name: 'Talent Acquisition', href: '#solutions' },
    { name: 'Workforce Planning', href: '#solutions' },
    { name: 'Fractional HR', href: '#solutions' },
    { name: 'Founder Advisory', href: '#solutions' },
  ];

  return (
    <footer className="relative bg-brand-midnight/90 border-t border-white/5 pt-16 pb-8">
      {/* Tamil Pattern overlay */}
      <div className="absolute inset-0 tamil-pattern-overlay pointer-events-none opacity-[0.015]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Logo & Taglines */}
          <div className="lg:col-span-5 text-left">
            <a href="#home" className="text-xl font-bold tracking-wider text-white font-display">
              M2P NEXUS
            </a>
            
            <p className="text-xs text-gray-400 font-mono mt-4 max-w-sm leading-relaxed">
              Technology Engineered for Growth.<br />
              Human Capital Engineered with Intent.
            </p>

            <p className="text-xs text-gray-500 mt-6 leading-relaxed max-w-sm">
              Supporting startups and businesses by integrating robust codebase development, candidate pipeline acquisition, and automated growth workflows under one partnership.
            </p>
          </div>

          {/* Directory Column 1 */}
          <div className="lg:col-span-2 text-left">
            <h5 className="text-[10px] font-mono tracking-widest text-brand-purple font-bold uppercase mb-4">Quick Directory</h5>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Directory Column 2 */}
          <div className="lg:col-span-2 text-left">
            <h5 className="text-[10px] font-mono tracking-widest text-brand-cyan font-bold uppercase mb-4">Core Services</h5>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              {services.map((svc) => (
                <li key={svc.name}>
                  <a href={svc.href} className="hover:text-white transition-colors">{svc.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Directory Column 3 */}
          <div className="lg:col-span-3 text-left">
            <h5 className="text-[10px] font-mono tracking-widest text-brand-emerald font-bold uppercase mb-4">HR & Talent Solutions</h5>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium mb-6">
              {solutions.map((sol) => (
                <li key={sol.name}>
                  <a href={sol.href} className="hover:text-white transition-colors">{sol.name}</a>
                </li>
              ))}
            </ul>

            {/* Social Connection */}
            <div className="flex items-center space-x-3.5 pt-4 border-t border-white/5">
              <a
                href="https://www.linkedin.com/company/m2p-nexus"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-white/5 hover:bg-brand-purple/10 hover:text-brand-purple border border-white/5 transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="mailto:hello@m2pnexus.com"
                className="p-2 rounded bg-white/5 hover:bg-brand-cyan/10 hover:text-brand-cyan border border-white/5 transition-colors cursor-pointer"
                aria-label="Email"
              >
                <Mail size={14} />
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="ml-auto p-2 rounded bg-white/5 hover:bg-brand-emerald/10 hover:text-brand-emerald border border-white/5 transition-colors cursor-pointer text-gray-400"
                aria-label="Scroll to top"
              >
                <ArrowUp size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Small Legal text */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] text-gray-500 font-mono">
          <span>&copy; {new Date().getFullYear()} M2P Nexus. All rights reserved.</span>
          <span className="mt-2 sm:mt-0">
            Powered by <a href="#home" className="hover:text-white text-gray-400 font-semibold transition-colors">M2P Nexus</a>
          </span>
        </div>

      </div>
    </footer>
  );
}
