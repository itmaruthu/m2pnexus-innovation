import React from 'react';
import { Mail, Smartphone, Award, Briefcase, Code, BookOpen, ExternalLink, CheckCircle } from 'lucide-react';

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

export default function Founder() {
  const whatsappUrl = "https://wa.me/919944283316?text=Hello%20Maruthu%2C%0A%0AI%20visited%20the%20M2P%20Nexus%20website%20and%20would%20like%20to%20discuss%20my%20business%20requirements.%0A%0APlease%20contact%20me.%0A%0AThank%20you.";
  const emailUrl = "mailto:m2pnexus2026@gmail.com?subject=Business%20Enquiry%20from%20Founder%20Page";

  const expertise = [
    { title: 'React.js & Frontend', desc: 'Crafting responsive, high-performance user interfaces and localized web portals supporting offline state management.', icon: Code },
    { title: 'Node.js & Backend', desc: 'Designing secure Restful APIs, event-driven cron scripts, and scalable microservices.', icon: Code },
    { title: '.NET & Enterprise', desc: 'Deploying high-security databases, transactional ERP networks, and Windows services for heavy manufacturers.', icon: Briefcase },
    { title: 'SaaS Platforms', desc: 'Architecting subscription structures, user access control matrices, and cloud licensing frameworks.', icon: Award },
    { title: 'AI Solutions', desc: 'Integrating OpenAI models, custom language chains, automated billing extractors, and analytics summaries.', icon: BookOpen },
    { title: 'Digital Transformation', desc: 'Mapping physical factory lines and paper-based inventory steps into normalized database columns.', icon: Briefcase },
    { title: 'Business Automation', desc: 'Creating script pipelines to handle email alerts, invoice matching, automated pricing sheets, and logistics reports.', icon: Award }
  ];

  return (
    <>
      <Seo
        title="Meet the Founder - Maruthu Pandi PT"
        description="Read the profile of Maruthu Pandi PT, Founder & Director of M2P Nexus. Explore his experience in technology leadership, React, .NET, and AI."
      />

      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/30 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Picture */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-brand-section">
                <img
                  src={founderPhoto}
                  alt="Maruthu Pandi PT"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Intro */}
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-brand-accent uppercase tracking-widest font-heading">The Director</span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white font-heading">Maruthu Pandi PT</h1>
                <p className="text-lg md:text-xl text-slate-300 font-semibold font-heading">Founder & Director, M2P Nexus</p>
              </div>

              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
                A seasoned technology director and database architect with extensive professional experience building high-security corporate systems, custom ERPs, and automated workflows.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-secondary text-white hover:bg-slate-800 border border-slate-700 px-6 py-3 rounded-md font-semibold text-sm transition-all flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white hover:bg-[#20ba59] px-6 py-3 rounded-md font-semibold text-sm transition-all flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 fill-current">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  WhatsApp Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Biography */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-border text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-extrabold text-brand-primary font-heading border-b border-brand-border pb-4">
            Our Story & Leadership Message
          </h2>
          
          <div className="space-y-6 text-base text-brand-text leading-relaxed">
            <p className="text-lg font-bold text-brand-primary">
              I am Maruthu Pandi PT, Founder & Director of M2P Nexus.
            </p>
            
            <p>
              With over 14 years of experience in software engineering, enterprise application development, digital transformation, and technology leadership, I have had the opportunity to work with organizations across diverse industries, helping them solve complex business challenges through technology.
            </p>
            
            <p>
              Throughout my career, I have collaborated closely with business leaders, stakeholders, and global clients to deliver scalable software solutions that improve operational efficiency, accelerate digital transformation, and support sustainable growth. I was also privileged to work onsite in Japan, working directly with international clients and gaining valuable insight into global business practices, customer expectations, and technology delivery standards.
            </p>
            
            <div className="bg-brand-section border-l-4 border-brand-secondary p-5 rounded-r-lg italic font-medium text-brand-secondary my-6">
              "One insight became increasingly clear over the years: business success requires more than technology alone. Organizations need the right technology, the right people, and the right growth strategies working together."
            </div>
            
            <p className="font-bold text-brand-primary">
              This realization became the foundation of M2P Nexus.
            </p>
            
            <p>
              M2P Nexus was established through the combined expertise of its founding team. While my focus has been on technology, software solutions, automation, and digital transformation, our Co-Founder brings extensive experience in talent acquisition, workforce solutions, client engagement, and business relationship management. Having successfully supported recruitment initiatives and worked closely with clients across various sectors, she plays a vital role in helping organizations build capable teams and strengthen their growth strategies.
            </p>
            
            <p>
              Together, we created M2P Nexus to bridge the gap between business needs, technology innovation, and workforce excellence.
            </p>

            <div className="space-y-4 pt-4">
              <p className="font-bold text-brand-primary text-lg font-heading">
                Today, we help organizations through:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium text-brand-primary">
                {[
                  'Custom Software Development and Digital Solutions',
                  'AI, Automation, and Business Process Optimization',
                  'Technology Consulting and Digital Transformation Services',
                  'Recruitment, Talent Acquisition, and Workforce Solutions',
                  'Client Acquisition and Business Growth Support',
                  'Startup Enablement and Business Advisory Services'
                ].map((item, idx) => (
                  <li key={idx} className="bg-brand-section border border-brand-border p-3.5 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p>
              Whether supporting startups, SMEs, or established enterprises, our goal remains the same: delivering practical, scalable, and results-driven solutions that create measurable business value.
            </p>
            
            <p>
              We believe sustainable growth happens when technology, talent, and strategy work together.
            </p>
            
            <div className="bg-brand-secondary/5 border border-brand-secondary/20 p-6 rounded-xl text-center space-y-2 my-6">
              <span className="text-xs font-semibold text-brand-accent uppercase tracking-widest font-heading">Our Mission</span>
              <p className="text-lg font-extrabold text-brand-primary font-heading italic">
                "Our mission is simple: help organizations innovate faster, build stronger teams, operate smarter, and grow sustainably."
              </p>
            </div>
            
            <p>
              We are committed to becoming a trusted partner in our clients' growth journey—transforming ideas into opportunities and challenges into success stories.
            </p>
            
            <div className="pt-6 border-t border-brand-border text-center space-y-2">
              <h3 className="text-xl md:text-2xl font-extrabold text-brand-accent font-heading tracking-wide uppercase">
                Making Innovation Accessible. Enabling Growth Everywhere.
              </h3>
            </div>

            {/* Signature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-brand-border/60">
              <div className="space-y-1">
                <p className="text-lg font-extrabold text-brand-primary font-heading">Maruthu Pandi PT</p>
                <p className="text-xs text-brand-accent font-semibold tracking-wider uppercase font-heading">Founder & Director</p>
              </div>
              <div className="space-y-1 md:text-right">
                <p className="text-lg font-extrabold text-brand-primary font-heading">Priyanka M</p>
                <p className="text-xs text-brand-accent font-semibold tracking-wider uppercase font-heading">Co-Founder</p>
              </div>
              <div className="md:col-span-2 text-center pt-4 text-xs text-slate-400 font-bold tracking-widest font-heading uppercase">
                M2P Nexus
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core areas of expertise */}
      <section className="py-16 md:py-24 bg-brand-section border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-semibold text-brand-secondary uppercase tracking-widest font-heading">Expertise</span>
            <h2 className="text-3xl font-extrabold text-brand-primary font-heading">
              Technical & Architecture Leadership
            </h2>
            <p className="text-base text-brand-text">
              Direct competencies that Maruthu Pandi PT brings to every client partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {expertise.map((exp, idx) => {
              const Icon = exp.icon;
              return (
                <div key={idx} className="bg-white border border-brand-border p-6 rounded-lg shadow-xs space-y-3">
                  <div className="w-10 h-10 bg-brand-section rounded flex items-center justify-center text-brand-secondary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-primary font-heading">{exp.title}</h3>
                  <p className="text-xs text-brand-text leading-relaxed">{exp.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Connect section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl font-bold text-brand-primary font-heading">Connect Directly with the Founder</h2>
          <p className="text-sm text-brand-text max-w-md mx-auto leading-relaxed">
            Schedule a strategic technology session with Maruthu Pandi PT to audit your database, review your tech staff, or map your ERP.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <a
              href={emailUrl}
              className="bg-brand-primary text-white hover:bg-slate-800 px-6 py-3 rounded-md text-xs font-semibold shadow transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-brand-accent" />
              Email Founder
            </a>
            <a
              href="tel:+919944283316"
              className="border border-brand-border text-brand-primary hover:bg-brand-section px-6 py-3 rounded-md text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Smartphone className="w-4 h-4 text-brand-accent" />
              Call Office
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
