import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, FileText, Globe, ArrowRight } from 'lucide-react';
import m2pLogo from '../assets/m2p_nexus_logo.png';

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
import Seo from '../components/Seo';
import founderPhoto from '../assets/founder_photo.jpg';

export default function Connect() {
  const navigate = useNavigate();
  const whatsappUrl = "https://wa.me/919944283316?text=Hello%20Maruthu%2C%0A%0AI%20visited%20the%20M2P%20Nexus%20website%20and%20would%20like%20to%20discuss%20my%20business%20requirements.%0A%0APlease%20contact%20me.%0A%0AThank%20you.";
  const profileWhatsappUrl = "https://wa.me/919944283316?text=Hello%20Maruthu%2C%20I%20would%20like%20to%20receive%20the%20M2P%20Nexus%20Company%20Profile.%20Please%20share%20it%20with%20me.%20Thank%20you.";
  const emailUrl = "mailto:m2pnexus2026@gmail.com?subject=Business%20Enquiry%20from%20QR%20Card";

  return (
    <>
      <Seo
        title="Connect with Maruthu Pandi PT"
        description="Digital Business Card for Maruthu Pandi PT, Founder & Director of M2P Nexus. Get instant links to call, WhatsApp, email, or view our profile."
      />

      <div className="fixed inset-0 w-full h-full bg-brand-primary text-white flex flex-col items-center justify-between p-6 select-none overflow-hidden no-scrollbar font-sans">
        {/* Decorative Grid Line Panel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

        {/* Top Spacer / Logo */}
        <div className="z-10 text-center pt-2">
          <img
            src={m2pLogo}
            alt="M2P Nexus"
            className="h-[44px] w-auto object-contain brightness-0 invert mx-auto"
          />
        </div>

        {/* Core Card Section */}
        <div className="z-10 w-full max-w-sm flex flex-col items-center space-y-6">
          {/* Avatar frame */}
          <div className="relative">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-brand-accent shadow-lg bg-slate-800">
              <img
                src={founderPhoto}
                alt="Maruthu Pandi PT"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-brand-accent border-2 border-brand-primary flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>
          </div>

          {/* Identity details */}
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-extrabold tracking-tight font-heading">
              Maruthu Pandi PT
            </h1>
            <p className="text-xs text-brand-accent font-semibold tracking-wider uppercase font-heading">
              Founder & Director
            </p>
          </div>

          {/* Button panel */}
          <div className="w-full space-y-3.5 pt-2">
            {/* Call Now */}
            <a
              href="tel:+919944283316"
              className="flex items-center justify-between w-full bg-slate-800 hover:bg-slate-700/80 border border-slate-700/60 p-3.5 rounded-xl font-bold text-sm transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-accent" />
                <span>Call Now</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono font-medium">+91 99442 83316</span>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full bg-[#25D366] hover:bg-[#20ba59] p-3.5 rounded-xl font-bold text-sm transition-colors text-left text-white"
            >
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 fill-current">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                <span>WhatsApp Us</span>
              </div>
              <ArrowRight className="w-4 h-4 opacity-75" />
            </a>

            {/* Email */}
            <a
              href={emailUrl}
              className="flex items-center justify-between w-full bg-slate-800 hover:bg-slate-700/80 border border-slate-700/60 p-3.5 rounded-xl font-bold text-sm transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-accent" />
                <span>Email Office</span>
              </div>
              <ArrowRight className="w-4 h-4 opacity-75" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full bg-slate-800 hover:bg-slate-700/80 border border-slate-700/60 p-3.5 rounded-xl font-bold text-sm transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-brand-accent" />
                <span>LinkedIn Profile</span>
              </div>
              <ArrowRight className="w-4 h-4 opacity-75" />
            </a>

            {/* Company Profile */}
            <a
              href={profileWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full bg-slate-800 hover:bg-slate-700/80 border border-slate-700/60 p-3.5 rounded-xl font-bold text-sm transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-brand-accent" />
                <span>Company Profile</span>
              </div>
              <span className="text-[10px] text-brand-accent font-bold uppercase tracking-wider font-heading">Get PDF</span>
            </a>
          </div>
        </div>

        {/* Bottom Panel */}
        <div className="z-10 w-full max-w-sm pt-4 flex flex-col items-center space-y-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-1.5 w-full border border-slate-700 hover:border-slate-500 py-3 rounded-xl font-bold text-xs tracking-wider uppercase text-slate-300 transition-colors cursor-pointer"
          >
            <Globe className="w-4 h-4 text-brand-accent" />
            Visit Full Website
          </button>
          
          <div className="text-center space-y-1">
            <img
              src={m2pLogo}
              alt="M2P Nexus"
              className="h-[32px] w-auto object-contain brightness-0 invert opacity-40 mx-auto"
            />
            <p className="text-[9px] text-slate-600 font-medium">
              © {new Date().getFullYear()} M2P Nexus
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
