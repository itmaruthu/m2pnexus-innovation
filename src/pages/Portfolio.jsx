import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layers, Database, Shield, Zap, Laptop, Brain, ArrowRight } from 'lucide-react';
import Seo from '../components/Seo';
import dashboardMockup from '../assets/dashboard_mockup.png';

export default function Portfolio() {
  const navigate = useNavigate();
  const whatsappUrl = "https://wa.me/919944283316?text=Hello%20Maruthu%2C%0A%0AI%20visited%20the%20M2P%20Nexus%20website%20and%20would%20like%20to%20discuss%20my%20business%20requirements.%0A%0APlease%20contact%20me.%0A%0AThank%20you.";

  const portfolioList = [
    {
      title: 'Tamil Billing Software',
      industry: 'Retail, Trade & Agribusiness',
      problem: 'Small retail store operators and agricultural traders struggle with complex English-only billing systems, leading to incorrect calculations and GST compliance issues.',
      solution: 'We engineered a localized, high-speed billing interface supporting Tamil & English. The application supports offline transactions with automatic sync, basic barcode scans, inventory tracking, and GST reporting.',
      stack: ['React', 'Node.js', 'MongoDB', 'IndexedDB (Offline)'],
      metrics: 'Over 15,000+ local invoices compiled successfully with zero downtime.'
    },
    {
      title: 'Steel Industry ERP',
      industry: 'Manufacturing & Heavy Metals',
      problem: 'Fragmented logsheets and spreadsheets tracking tons of steel raw materials, melting losses, logistics, and labor rotas led to constant discrepancies and accounting delays.',
      solution: 'A unified enterprise resource planner configured for heavy metal manufacturing. Includes automated raw scrap formulas, logistics weighbridge integrations, driver shifts, client credit lines, and automated tax worksheets.',
      stack: ['React', '.NET Core', 'SQL Server', 'IIS Server'],
      metrics: 'Eliminated raw material discrepancy logs and reduced billing cycles from 15 days to 2 days.'
    },
    {
      title: 'Coconut Trader ERP',
      industry: 'Agribusiness & Bulk Commerce',
      problem: 'Coordinating batch weights, commissions for regional agents, truck fuel allowances, and immediate farmer settlements manually led to inventory shrinkage and cashflow friction.',
      solution: 'A tailored supply chain application optimizing agricultural logistics. It records batch weights, manages local commissions, tracks driver allowances, and outputs simple farmer receipts.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB'],
      metrics: 'Streamlined batch settlements for over 450+ farming partners.'
    },
    {
      title: 'Corporate Websites',
      industry: 'B2B Services & Enterprises',
      problem: 'SMEs and service companies operating with outdated websites that were slow, non-responsive, and failed to appear on search engines, hindering digital growth.',
      solution: 'Premium corporate websites built for maximum speed, clean styling, and advanced SEO. Configured semantic structures, responsive viewports, and custom interactive panels to capture leads.',
      stack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      metrics: 'Targeted Lighthouse score of 95+ and significant increase in client inquiries.'
    },
    {
      title: 'AI Automation',
      industry: 'Operations & Corporate Services',
      problem: 'Manual entry staff spending hours reading emails, copying transaction codes, compiling PDF bills, and composing status reports for stakeholders.',
      solution: 'Custom artificial intelligence script pipelines that parse incoming logs, extract critical billing details, generate summaries, and automatically format client updates.',
      stack: ['Python', 'OpenAI APIs', 'LangChain', 'Postgres'],
      metrics: 'Saved an estimated 25+ hours of manual administrative compilation per week.'
    }
  ];

  return (
    <>
      <Seo
        title="Our Portfolio - Steel ERP & Agribusiness Software"
        description="See how M2P Nexus builds billing tools, heavy manufacturing ERPs, coconut trader software, and AI automations. Real business problems, engineered solutions."
      />

      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/30 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Real software systems engineered by M2P Nexus to solve critical operational bottlenecks. No gimmicks, just robust engineering.
          </p>
        </div>
      </section>

      {/* Case Studies grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-semibold text-brand-secondary uppercase tracking-widest font-heading">Case Studies</span>
            <h2 className="text-3xl font-extrabold text-brand-primary font-heading">
              Software Engineered for Real-World Impact
            </h2>
            <p className="text-base text-brand-text">
              Explore the challenges we have resolved and the custom tech architectures we deployed to secure operations.
            </p>
          </div>

          <div className="space-y-12">
            {portfolioList.map((item, idx) => (
              <div
                key={idx}
                className="bg-brand-section border border-brand-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Visual Block (Dashboard Mockup Backdrop) */}
                <div className="lg:col-span-4 bg-brand-primary p-8 flex flex-col justify-between relative overflow-hidden text-left text-white min-h-[250px] lg:min-h-auto">
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <img src={dashboardMockup} alt="System Preview Background" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative z-10 space-y-2">
                    <span className="text-[10px] font-extrabold tracking-widest text-brand-accent uppercase bg-brand-primary border border-slate-700 px-2 py-0.5 rounded font-heading">
                      Case Study {idx + 1}
                    </span>
                    <h3 className="text-2xl font-bold font-heading pt-1">{item.title}</h3>
                    <p className="text-xs text-slate-300 font-medium font-heading">{item.industry}</p>
                  </div>

                  <div className="relative z-10 bg-brand-primary/80 border border-slate-700/60 p-3 rounded-lg mt-4">
                    <p className="text-[11px] text-brand-accent font-bold uppercase tracking-wider font-heading">Proven Outcome</p>
                    <p className="text-xs text-slate-200 leading-normal mt-1">{item.metrics}</p>
                  </div>
                </div>

                {/* Content Block */}
                <div className="lg:col-span-8 p-8 md:p-10 text-left space-y-6 flex flex-col justify-between">
                  <div className="space-y-6">
                    {/* Blocker */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase text-red-600 tracking-wider font-heading">
                        Business Problem
                      </h4>
                      <p className="text-sm text-brand-text leading-relaxed">
                        {item.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase text-brand-secondary tracking-wider font-heading">
                        Our Solution
                      </h4>
                      <p className="text-sm text-brand-primary leading-relaxed font-medium">
                        {item.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech stack & Action */}
                  <div className="pt-6 border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {item.stack.map((tech, i) => (
                        <span key={i} className="text-xs font-mono bg-white border border-brand-border px-2.5 py-1 rounded text-slate-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => navigate('/contact')}
                      className="text-sm font-bold text-brand-secondary hover:text-brand-primary flex items-center gap-1 cursor-pointer"
                    >
                      Enquire about this solution <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-heading">
            Want to See a Product Demo?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            We can schedule a screen-share session to show you the Steel ERP, Coconut Trader ERP, or Tamil Billing interfaces. Contact us to schedule.
          </p>
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white hover:bg-[#20ba59] px-8 py-3 rounded-md text-sm font-bold shadow transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              Request Live Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
