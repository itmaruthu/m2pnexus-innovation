import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Eye, Target, Compass, Sparkles, HeartHandshake } from 'lucide-react';
import Seo from '../components/Seo';
import founderPhoto from '../assets/founder_photo.png';

export default function About() {
  const navigate = useNavigate();
  const whatsappUrl = "https://wa.me/919944283316?text=Hello%20Maruthu%2C%0A%0AI%20visited%20the%20M2P%20Nexus%20website%20and%20would%20like%20to%20discuss%20my%20business%20requirements.%0A%0APlease%20contact%20me.%0A%0AThank%20you.";

  const coreValues = [
    { title: 'Trust & Integrity', desc: 'We guard client operational secrets and deliver completely transparent software architectures with no hidden maintenance clauses.', icon: Shield },
    { title: 'Business-First Mentality', desc: 'We do not sell technological jargon. We construct solutions strictly designed to protect capital and boost cashflow efficiency.', icon: Target },
    { title: 'Engineering Excellence', desc: 'From database normalization to API caching, our software is built to handle heavy transactional logs without breakdown.', icon: Sparkles },
    { title: 'Regional Empowerment', desc: 'We design localized systems in regional languages, ensuring that non-technical workforces adopt software immediately.', icon: HeartHandshake }
  ];

  return (
    <>
      <Seo
        title="About Us - Our Purpose & Values"
        description="Learn about the purpose, vision, mission, and values behind M2P Nexus. Discover how our founder, Maruthu Pandi PT, leads regional technological transformations."
      />

      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/30 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
            About M2P Nexus
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between traditional operations and corporate-grade technology, scaling regional success from root to victory.
          </p>
        </div>
      </section>

      {/* Who We Are & Purpose */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-brand-accent uppercase tracking-widest font-heading">Who We Are</span>
                <h2 className="text-3xl font-extrabold text-brand-primary font-heading">
                  Empowering Regional Businesses with Corporate-Grade Software
                </h2>
              </div>
              <p className="text-base text-brand-text leading-relaxed">
                M2P Nexus is a premier technology consulting and digital solutions partner founded in Madurai, Tamil Nadu. We focus on modernizing traditional manufacturing lines, trading operations, and agribusinesses through custom enterprise systems, AI automations, and targeted talent placement.
              </p>
              <p className="text-base text-brand-text leading-relaxed">
                We believe that software should not be an expensive luxury reserved only for mega-corporations. Our systems are engineered specifically to remove the operational vulnerabilities of SMEs, steel makers, agricultural traders, and growing startups.
              </p>
            </div>

            <div className="bg-brand-section border border-brand-border p-8 rounded-xl text-left space-y-6">
              <span className="text-xs font-semibold text-brand-secondary uppercase tracking-widest font-heading">Our Purpose</span>
              <h3 className="text-2xl font-bold text-brand-primary font-heading">
                To build high-value technological pathways for every organization.
              </h3>
              <p className="text-sm text-brand-text leading-relaxed">
                Many traditional businesses operate on fragmented paper trails, vulnerable spreadsheets, and manual tracking systems. Our purpose is to engineer intuitive, localized, and resilient cloud systems that allow traditional business leaders to govern their operations transparently, optimize costs, and scale into new markets.
              </p>
              <div className="border-t border-brand-border pt-4">
                <span className="font-heading font-bold text-brand-accent tracking-widest uppercase text-xs">
                  வேரிலிருந்து வெற்றிவரை
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-brand-section border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white border border-brand-border p-8 rounded-xl shadow-xs space-y-4 text-left">
              <div className="w-12 h-12 bg-brand-section rounded-md flex items-center justify-center text-brand-secondary">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-brand-primary font-heading">Our Vision</h3>
              <p className="text-sm text-brand-text leading-relaxed">
                To be the most trusted technology and AI automation consulting partner for startups, manufacturers, and agribusinesses in South India and beyond. We envision a digital landscape where traditional trading networks and modern AI-powered cloud architectures blend seamlessly to drive sustainable, community-wide success.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white border border-brand-border p-8 rounded-xl shadow-xs space-y-4 text-left">
              <div className="w-12 h-12 bg-brand-section rounded-md flex items-center justify-center text-brand-secondary">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-brand-primary font-heading">Our Mission</h3>
              <p className="text-sm text-brand-text leading-relaxed">
                To engineer reliable, bilingual, and accessible software solutions that eliminate administrative bottlenecks, minimize data leakage, and scale organizational workflows. We fulfill this by combining software engineering with expert technical workforce sourcing, supporting our clients’ long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-semibold text-brand-secondary uppercase tracking-widest font-heading">Core Values</span>
            <h2 className="text-3xl font-extrabold text-brand-primary font-heading">
              The Principles That Guide Our Engineering
            </h2>
            <p className="text-lg text-brand-text">
              Every system built by M2P Nexus is shaped by our commitment to integrity and business efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-brand-section border border-brand-border p-6 rounded-lg space-y-4">
                  <div className="w-10 h-10 bg-white border border-brand-border rounded flex items-center justify-center text-brand-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-primary font-heading">{val.title}</h3>
                  <p className="text-xs text-brand-text leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-16 md:py-24 bg-brand-section border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Quotes & Story */}
            <div className="lg:col-span-8 space-y-6 text-left">
              <span className="text-xs font-semibold text-brand-accent uppercase tracking-widest font-heading">Founder's Message</span>
              <h2 className="text-3xl font-extrabold text-brand-primary font-heading">
                "We design solutions starting directly at the root."
              </h2>
              <blockquote className="border-l-4 border-brand-secondary pl-4 py-1 text-lg italic text-brand-secondary font-medium">
                "Our software is built to empower people. When we write an ERP for a steel manufacturer or a coconut trader, we spend time on the factory floor and in the warehouses. We ensure that our systems speak the language of the operators, making digital adoption swift, natural, and highly profitable."
              </blockquote>
              <div className="space-y-4 text-base text-brand-text leading-relaxed">
                <p>
                  Technology transformation fails when software is too complex or detached from the business's day-to-day reality. At M2P Nexus, we follow a 'Business-First' methodology. We analyze your cash flow, your material receipts, your billing delays, and your labor constraints before recommending lines of code.
                </p>
                <p>
                  We are here to serve as your long-term strategic technology partner, helping your traditional operations adapt, compete, and lead in a rapidly changing digital economy.
                </p>
              </div>
              <div className="pt-2">
                <p className="text-lg font-bold text-brand-primary font-heading">Maruthu Pandi PT</p>
                <p className="text-xs text-brand-accent font-semibold tracking-wider font-heading">Founder & Director, M2P Nexus</p>
              </div>
            </div>

            {/* Right: Picture */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-4 border-white shadow-md bg-white">
                <img
                  src={founderPhoto}
                  alt="Maruthu Pandi PT"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 md:py-24 text-center border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl font-extrabold text-brand-primary font-heading">
            Partner With a Long-Term Strategic Advisor
          </h2>
          <p className="text-lg text-brand-text max-w-2xl mx-auto leading-relaxed">
            Reach out to our engineering and consulting team to discuss your operational challenges and explore customized software options.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={() => navigate('/contact')}
              className="bg-brand-secondary text-white hover:bg-brand-primary font-bold px-8 py-3 rounded-md shadow transition-colors cursor-pointer"
            >
              Contact Our Office
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 font-bold px-8 py-3 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
