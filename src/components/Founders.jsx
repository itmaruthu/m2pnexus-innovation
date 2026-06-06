import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import founderPhoto from '../assets/founder_photo.jpg';
import coFounderPhoto from '../assets/co_founder_photo.png';

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


export default function Founders() {
  const founders = [
    {
      name: 'Maruthu Pandi',
      role: 'Co-Founder',
      division: 'Technology & Digital Solutions',
      quote: 'Building technology that accelerates business growth.',
      bio: 'Pioneering scalable cloud solutions, robust automation systems, and high-performance React architectures for startups globally. Over a decade of software engineering expertise.',
      linkedin: 'https://www.linkedin.com/in/maruthupandi',
      email: 'hello@m2pnexus.com', // fallback
      color: 'cyan',
      comment: '<!-- Replace with actual founder image -->',
      avatarUrl: founderPhoto,
      position: 'object-[center_18%]',
    },
    {
      name: 'Priyanka',
      role: 'Co-Founder',
      division: 'Talent Acquisition & HR Strategy',
      quote: 'Human Capital, Engineered with Intent.',
      bio: 'Specializing in capacity planning, fractional HR leadership, and building custom engineering pipelines that align candidate capabilities with business timelines.',
      linkedin: 'https://www.linkedin.com/in/priyanka-hr',
      email: 'hello@m2pnexus.com',
      color: 'purple',
      comment: '<!-- Replace with actual founder image -->',
      avatarUrl: coFounderPhoto,
      position: 'object-[center_12%]',
    },
  ];

  return (
    <section id="founders" className="py-24 relative overflow-hidden bg-brand-midnight grid-bg-dots">
      {/* Decorative Blur background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-purple mb-3">
            Leadership
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display text-white">
            Meet the Founders
          </h3>
          <p className="text-gray-400 mt-4 text-base md:text-lg">
            Fusing software architecture with strategic human capital consulting to guide startups from MVP to scalable exit.
          </p>
        </div>

        {/* Founders Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className={`glass-card rounded-2xl border border-white/5 p-6 md:p-8 text-left hover:border-brand-${founder.color}/30 transition-all duration-300 flex flex-col md:flex-row gap-6 items-center relative overflow-hidden`}
            >
              {/* HTML image replace comment placeholder */}
              <div dangerouslySetInnerHTML={{ __html: founder.comment }} className="hidden" />

              {/* Avatar Wrapper */}
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border-2 border-white/10 overflow-hidden shrink-0 relative bg-brand-navy shadow-xl">
                <img
                  src={founder.avatarUrl}
                  alt={founder.name}
                  className={`w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ${founder.position}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-brand-${founder.color}/30 to-transparent pointer-events-none`} />
              </div>

              {/* Bio & Details */}
              <div className="flex-1 flex flex-col justify-between h-full text-center md:text-left">
                <div>
                  <span className={`text-[10px] font-mono tracking-wider font-bold uppercase text-brand-${founder.color}`}>
                    {founder.role} • {founder.division}
                  </span>
                  <h4 className="text-xl font-bold text-white mt-1.5 font-display">{founder.name}</h4>
                  
                  <blockquote className="italic text-sm text-gray-300 my-4 border-l-2 border-brand-purple/30 pl-3 md:text-left">
                    "{founder.quote}"
                  </blockquote>
                  
                  <p className="text-xs text-gray-400 leading-relaxed font-sans mt-2">
                    {founder.bio}
                  </p>
                </div>

                {/* Social links */}
                <div className="flex items-center justify-center md:justify-start space-x-3 mt-6 pt-4 border-t border-white/5">
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded bg-white/5 hover:bg-brand-${founder.color}/10 hover:text-brand-${founder.color} border border-white/5 transition-colors cursor-pointer`}
                    aria-label={`${founder.name}'s LinkedIn`}
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href={`mailto:${founder.email}`}
                    className={`p-2 rounded bg-white/5 hover:bg-brand-${founder.color}/10 hover:text-brand-${founder.color} border border-white/5 transition-colors cursor-pointer`}
                    aria-label={`Email ${founder.name}`}
                  >
                    <Mail size={16} />
                  </a>
                  
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-[10px] font-mono font-bold tracking-wide text-gray-400 hover:text-white flex items-center space-x-1"
                  >
                    <span>CONNECT</span>
                    <ArrowUpRight size={10} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
