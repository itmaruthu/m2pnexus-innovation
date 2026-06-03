import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, Calendar } from 'lucide-react';

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

export default function Contact() {
  const whatsappUrl = "https://wa.me/919944283316?text=Hello%20Maruthu%2C%0A%0AI%20visited%20the%20M2P%20Nexus%20website%20and%20would%20like%20to%20discuss%20my%20business%20requirements.%0A%0APlease%20contact%20me.%0A%0AThank%20you.";
  const emailUrl = "mailto:m2pnexus2026@gmail.com?subject=Business%20Enquiry%20from%20Website";

  const contactMethods = [
    {
      title: 'Phone Numbers',
      desc: 'Call our technology team directly to discuss ERP, billing software, or staffing requests.',
      actionText: 'Dial Office Dialer',
      link: 'tel:+919944283316',
      icon: Phone,
      details: (
        <div className="flex flex-col font-mono text-sm mt-2 text-brand-primary">
          <span>+91 99442 83316 (Primary)</span>
          <span className="text-slate-400 font-medium">+91 63804 65605 (Secondary)</span>
        </div>
      )
    },
    {
      title: 'Email Client',
      desc: 'Send us detailed RFPs, requirements documents, or candidate CVs for vetting.',
      actionText: 'Launch Mail Client',
      link: emailUrl,
      icon: Mail,
      details: (
        <div className="font-mono text-sm mt-2 text-brand-primary font-medium break-all">
          m2pnexus2026@gmail.com
        </div>
      )
    },
    {
      title: 'LinkedIn Network',
      desc: 'Connect with our leadership and review past projects, articles, and industry insights.',
      actionText: 'Visit LinkedIn Profile',
      link: 'https://linkedin.com',
      icon: Linkedin,
      details: (
        <div className="text-sm mt-2 text-brand-primary font-medium">
          M2P Nexus Corporate
        </div>
      )
    },
    {
      title: 'Office Location',
      desc: 'Sithalangudi, Madurai, Tamil Nadu, India. Click to open coordinates on Google Maps.',
      actionText: 'View on Google Maps',
      link: 'https://maps.google.com/?q=Sithalangudi,Madurai,TamilNadu',
      icon: MapPin,
      details: (
        <div className="text-sm mt-2 text-brand-primary font-medium leading-relaxed">
          Sithalangudi, Madurai,<br />Tamil Nadu, Pin-625221
        </div>
      )
    }
  ];

  return (
    <>
      <Seo
        title="Contact Our Office - Phone, Email & Location"
        description="Get in touch with M2P Nexus. Call +91 99442 83316, email m2pnexus2026@gmail.com, or visit us in Madurai, Tamil Nadu. Direct communication, no forms."
      />

      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/30 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
            Contact M2P Nexus
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Direct, transparent communication channels. Skip the contact forms and speak directly with our engineering office.
          </p>
        </div>
      </section>

      {/* Info grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold text-brand-secondary uppercase tracking-widest font-heading">Connect</span>
            <h2 className="text-3xl font-extrabold text-brand-primary font-heading">
              Direct Communication Channels
            </h2>
            <p className="text-sm text-brand-text">
              We value direct relationships. Select any channel below to connect with us immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <a
                  key={idx}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="bg-brand-section border border-brand-border hover:border-brand-secondary rounded-xl p-8 hover:shadow-md transition-all flex flex-col justify-between text-left group cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white border border-brand-border rounded-lg flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-colors shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-brand-primary font-heading">{method.title}</h3>
                    </div>
                    <p className="text-sm text-brand-text leading-relaxed">{method.desc}</p>
                    {method.details}
                  </div>

                  <div className="mt-8 pt-4 border-t border-brand-border flex items-center gap-1.5 text-xs font-bold text-brand-secondary group-hover:text-brand-primary transition-colors">
                    <span>{method.actionText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="bg-brand-section py-16 border-t border-b border-brand-border text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="w-16 h-16 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] rounded-full flex items-center justify-center mx-auto mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8 fill-current">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-brand-primary font-heading">Prefer Immediate WhatsApp Chat?</h3>
          <p className="text-sm text-brand-text max-w-md mx-auto leading-relaxed">
            Click below to start an instant text thread with Maruthu Pandi PT. Perfect for quick questions regarding ERP demos or custom pricing.
          </p>
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white hover:bg-[#20ba59] px-8 py-3.5 rounded-md text-sm font-bold shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              Start Instant WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
