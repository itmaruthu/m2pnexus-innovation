import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Linkedin = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
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

export default function Footer() {
  const location = useLocation();

  // Exclude footer render on the Connect page
  if (location.pathname === '/connect') return null;

  const emailUrl = "mailto:m2pnexus2026@gmail.com?subject=Business%20Enquiry%20from%20Website";

  return (
    <footer className="bg-brand-primary text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Column 1: Company Info & Links */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-brand-secondary rounded text-white font-bold text-lg">
                M
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-heading">M2P NEXUS</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm mt-2">
              Bridging the gap between traditional businesses and modern technology through AI-powered solutions, workforce excellence, and digital transformation.
            </p>
            <div className="flex flex-col space-y-2 pt-2">
              <span className="text-xs font-semibold uppercase text-brand-accent tracking-wider font-heading">Quick Links</span>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
                <Link to="/founder" className="hover:text-white transition-colors">The Founder</Link>
                <Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-white font-heading font-semibold text-base uppercase tracking-wider mb-4">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1">
                  Technology Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1">
                  Workforce Excellence
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1">
                  Business Growth
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div>
            <h3 className="text-white font-heading font-semibold text-base uppercase tracking-wider mb-4">Contact Details</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="tel:+919944283316" className="hover:text-white transition-colors font-medium">
                    +91 99442 83316
                  </a>
                  <a href="tel:+916380465605" className="hover:text-white transition-colors font-medium text-slate-400">
                    +91 63804 65605
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <a href={emailUrl} className="hover:text-white transition-colors font-medium break-all">
                  m2pnexus2026@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Linkedin className="w-5 h-5 text-brand-accent shrink-0" />
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-medium flex items-center gap-1"
                >
                  Connect on LinkedIn <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=Sithalangudi,Madurai,TamilNadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors leading-relaxed"
                >
                  Sithalangudi, Madurai,<br />Tamil Nadu, India
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} M2P Nexus. All rights reserved.</p>
          <div className="flex flex-col md:items-end gap-1">
            <p className="font-semibold text-brand-accent tracking-widest uppercase">
              வேரிலிருந்து வெற்றிவரை
            </p>
            <p className="text-[10px] text-slate-600 tracking-wider">
              From Root to Success
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
