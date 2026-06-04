import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Laptop, Brain, Users, TrendingUp, CheckCircle, Target } from 'lucide-react';
import Seo from '../components/Seo';
import techIllustration from '../assets/tech_illustration.png';
import aiIllustration from '../assets/ai_illustration.png';
import growthIllustration from '../assets/growth_illustration.png';

export default function Services() {
  const navigate = useNavigate();

  // Helper functions to generate pre-filled enquiry links
  const getWhatsAppLink = (serviceTitle, packageName) => {
    const text = `Hello Maruthu, I would like to make a price enquiry for the "${packageName}" package under your "${serviceTitle}" service. Please share details and pricing.`;
    return `https://wa.me/919944283316?text=${encodeURIComponent(text)}`;
  };

  const getEmailLink = (serviceTitle, packageName) => {
    const subject = `Price Enquiry: ${serviceTitle} - ${packageName}`;
    const body = `Hello M2P Nexus Team,\n\nI visited your website and would like to receive a price quote and further details for:\n\nService: ${serviceTitle}\nPackage: ${packageName}\n\nPlease contact me with more information.\n\nThank you.`;
    return `mailto:m2pnexus2026@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const servicesList = [
    {
      id: 'technology',
      title: 'Technology Solutions',
      icon: Laptop,
      illustration: techIllustration,
      description: 'We design and develop custom, secure corporate software platforms, billing software, and unified resource planners (ERPs) engineered to fit your specific operational structure. We avoid cookie-cutter templates in favor of high-performance code.',
      benefits: [
        'Custom Steel & Agribusiness ERP development to resolve stock discrepancies.',
        'GST-compliant bilingual billing software that works offline.',
        'High-performance React/Node.js web systems optimized for search engines.',
        'Normalization of legacy SQL databases and transition from manual Excel logs.'
      ],
      outcomes: [
        'Up to 90% reduction in paper-based entry operations.',
        'Real-time inventory and delivery logging across all warehouses.',
        'Secured, role-based system access protecting company data.'
      ],
      packages: [
        {
          name: '1:1 Architecture Consultation',
          details: 'Direct diagnostic session with our technology lead to audit your current manual processes, design database schemas, and map out your system design schematic.',
          deliverable: 'Custom software architecture roadmap, database schema draft, and technology recommendation report.'
        },
        {
          name: 'Enterprise ERP Implementation',
          details: 'Bespoke ERP system development engineered for your specific operations (steel manufacturing, agricultural trade, or logistics tracking). Includes bilingual capabilities.',
          deliverable: 'Fully deployed cloud database system, operator training sessions, and 3 months of hypercare support.'
        },
        {
          name: 'Corporate Web Portal',
          details: 'High-performance website or customer portal designed for maximum search engine authority, speed optimization, and lead generation.',
          deliverable: 'Responsive React/Next.js corporate website, integrated CRM capture, and basic SEO foundation.'
        }
      ]
    },
    {
      id: 'ai',
      title: 'AI Solutions',
      icon: Brain,
      illustration: aiIllustration,
      description: 'We integrate advanced machine learning models, automated data extractors, and generative agent pipelines into daily business platforms. We turn unstructured operational logs into automated executive dashboards and predictive files.',
      benefits: [
        'Custom automation agents for compiling daily logs, raw invoice data, and bills.',
        'OpenAI API integrations to handle customer queries and ticket drafting.',
        'Automatic regional translation frameworks to localize software interfaces.',
        'Predictive inventory engines to estimate material requirements.'
      ],
      outcomes: [
        'Significant time savings on routine weekly office compilation.',
        'Instant generation of complex analytics summaries.',
        'Automated notifications flagging raw material price shifts.'
      ],
      packages: [
        {
          name: '1:1 AI Feasibility Session',
          details: 'A focused consultation to analyze your company\'s operational logs, identify friction points ripe for AI automation, and estimate ROI.',
          deliverable: 'AI automation roadmap, feasibility analysis report, and tech stack options blueprint.'
        },
        {
          name: 'Log & Data Parsing Pipeline',
          details: 'Automated data pipelines that ingest raw, unstructured documents (emails, receipts, shipping logs) and compile them into structured reports.',
          deliverable: 'Deployable Python script or cloud function with API hooks, feeding clean data into your systems.'
        },
        {
          name: 'Intelligent AI Agents',
          details: 'Custom internal or client-facing chatbots trained on your inventory logs, policy guidelines, or product catalogs for instant support.',
          deliverable: 'Embedded React chat interface, trained LLM agent pipeline, and API orchestration layer.'
        }
      ]
    },
    {
      id: 'workforce',
      title: 'Workforce Solutions',
      icon: Users,
      illustration: null, // Custom layout for workforce
      description: 'Finding skilled developers, database managers, and AI architects is challenging. We act as your specialized technical recruitment partner, screening, vetting, and training tech talents specifically prepared to merge with your company.',
      benefits: [
        'End-to-end recruitment loops including coding tests and design interviews.',
        'Custom pre-onboarding bootcamps aligning candidates with your tech stack.',
        'Contract-to-hire and full-time placement options for agile teams.',
        'Ongoing technical mentorship and training sessions led by our director.'
      ],
      outcomes: [
        'Reduction in recruitment loops from 45 days to 14 days.',
        'Higher candidate retention through customized skill alignment.',
        'Technical staff ready to deploy production code from Day 1.'
      ],
      packages: [
        {
          name: '1:1 Sourcing Strategy Audit',
          details: 'Diagnostic session to audit your current tech team hiring loop, define precise candidate profiles, and draft evaluation questions.',
          deliverable: 'Optimized hiring plan, structured coding interview rubrics, and tailored job description assets.'
        },
        {
          name: 'Vetted Technical Sourcing',
          details: 'Complete end-to-end recruitment search. We filter candidates, perform initial technical tests, and provide a shortlist of highly aligned engineers.',
          deliverable: 'Vetted resume portfolio, screening feedback reports, and coordinated calendar for final loop interviews.'
        },
        {
          name: 'Custom Team Placement & Training',
          details: 'A premium service where we hire developers and train them specifically on your tech stack and repository architecture before they start.',
          deliverable: 'Pre-onboarded candidates, bootcamp completion records, and 30-day technical integration mentorship.'
        }
      ]
    },
    {
      id: 'growth',
      title: 'Business Growth Solutions',
      icon: TrendingUp,
      illustration: growthIllustration,
      description: 'Technology is only as valuable as the growth it drives. We partner with business leaders to build digital footprint maps, optimize lead pipelines, reposition software packages, and execute strategic digital growth plans.',
      benefits: [
        'Complete online brand authority analysis and SEO mapping.',
        'Setup of high-performance marketing channels and CRM tracking systems.',
        'Software product-market fit audits and SaaS packaging consulting.',
        'Consulting on entering new regional and global trade corridors.'
      ],
      outcomes: [
        'Increased client inquiries through WhatsApp and LinkedIn.',
        'Clear product packaging resulting in improved conversion rates.',
        'A comprehensive digital marketing roadmap for the next 12-24 months.'
      ],
      packages: [
        {
          name: '1:1 Growth & SEO Audit',
          details: 'Diagnostic review of your current customer acquisition channels, digital footprint, conversion funnel bottlenecks, and product messaging.',
          deliverable: 'Comprehensive conversion audit report, SEO target keyword map, and growth framework checklist.'
        },
        {
          name: 'CRM & Lead Automation Flow',
          details: 'Setup and configuration of customer database systems (CRMs) to capture leads from forms, WhatsApp, and email, with automated email nurture campaigns.',
          deliverable: 'Integrated CRM environment, automated follow-up sequences, and operator configuration guide.'
        },
        {
          name: 'Product & Pricing Strategy',
          details: 'Consultancy focusing on SaaS product packaging, monetization structures, regional branding positioning, and user acquisition pipelines.',
          deliverable: 'Pricing model schematic, go-to-market playbook, and brand message guidelines.'
        }
      ]
    }
  ];

  return (
    <>
      <Seo
        title="Our Services - Enterprise Tech, AI & Workforce"
        description="Explore the core capabilities of M2P Nexus: Custom ERP software, AI automation pipelines, technical workforce sourcing, and business growth strategies."
      />

      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/30 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
            Our Strategic Services
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From coding steel-industry ERPs to placing technical workforce, we build systems designed for long-term operational success.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="space-y-12 border-b border-brand-border/40 pb-16 md:pb-24 last:border-0 last:pb-0"
              >
                {/* Upper Part: Overview and Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {/* Image block */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    } flex justify-center`}
                  >
                    {service.illustration ? (
                      <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-lg border border-brand-border bg-brand-section p-4">
                        <img
                          src={service.illustration}
                          alt={`${service.title} Illustration`}
                          className="w-full h-auto object-cover rounded-lg"
                        />
                      </div>
                    ) : (
                      // Fallback for Workforce Solution (Sleek abstract icon grid)
                      <div className="w-full max-w-md bg-brand-section border border-brand-border rounded-2xl p-8 text-left space-y-6">
                        <div className="w-12 h-12 bg-white border border-brand-border rounded flex items-center justify-center text-brand-secondary shadow-xs">
                          <Users className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-bold text-brand-primary font-heading">Workforce Placement Framework</h4>
                        <p className="text-sm text-brand-text leading-relaxed">
                          We screen and train technical talent specifically focused on React, Node.js, .NET, and Python. We match professionals with the culture and codebase of your company.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-brand-primary font-heading border-t border-brand-border pt-4">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 bg-brand-accent rounded-full"></span>
                            Full Vetting
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 bg-brand-accent rounded-full"></span>
                            Pre-Training
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 bg-brand-accent rounded-full"></span>
                            Contract-to-Hire
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 bg-brand-accent rounded-full"></span>
                            CTO Mentorship
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content block */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    } space-y-6 text-left`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-brand-section flex items-center justify-center text-brand-secondary border border-brand-border">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h2 className="text-3xl font-extrabold text-brand-primary font-heading">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-base text-brand-text leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      {/* Benefits */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-bold uppercase text-brand-secondary tracking-wider font-heading">
                          Key Capabilities
                        </h4>
                        <ul className="space-y-2 text-sm text-brand-text">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-brand-accent rounded-full shrink-0 mt-2"></span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Outcomes */}
                      <div className="space-y-3 bg-brand-section border border-brand-border p-4 rounded-lg">
                        <h4 className="text-sm font-bold uppercase text-brand-primary tracking-wider font-heading flex items-center gap-1.5">
                          <Target className="w-4 h-4 text-brand-accent" />
                          Target Outcomes
                        </h4>
                        <ul className="space-y-2.5 text-xs font-medium text-brand-primary">
                          {service.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lower Part: Dynamic Packages Grid */}
                <div className="bg-brand-section border border-brand-border/60 rounded-2xl p-6 md:p-8 space-y-6 text-left">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-brand-accent uppercase tracking-widest font-heading">Engagement Models</span>
                    <h3 className="text-xl font-bold text-brand-primary font-heading">Available Packages</h3>
                    <p className="text-sm text-brand-text">Select a package to request custom pricing details directly from our team.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {service.packages.map((pkg, idx) => (
                      <div key={idx} className="bg-white border border-brand-border p-5 rounded-xl flex flex-col justify-between space-y-5 hover:border-brand-secondary/40 shadow-xs hover:shadow-sm transition-all">
                        <div className="space-y-2">
                          <h4 className="font-extrabold text-brand-primary text-base font-heading leading-snug">
                            {pkg.name}
                          </h4>
                          <p className="text-xs text-brand-text leading-relaxed">
                            {pkg.details}
                          </p>
                          <div className="bg-brand-section p-2.5 rounded border border-brand-border/40 text-[11px] leading-relaxed">
                            <strong className="text-brand-secondary font-heading block mb-0.5">Key Deliverable:</strong>
                            <span className="text-brand-text">{pkg.deliverable}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2 pt-3 border-t border-brand-border/40">
                          <a
                            href={getWhatsAppLink(service.title, pkg.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] text-white hover:bg-[#20ba59] font-bold text-xs px-3 py-2 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1.5 w-full shadow-xs text-center"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3.5 h-3.5 fill-current shrink-0">
                              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                            </svg>
                            Price Enquiry (WhatsApp)
                          </a>
                          <a
                            href={getEmailLink(service.title, pkg.name)}
                            className="border border-brand-border text-brand-primary hover:bg-brand-section font-bold text-xs px-3 py-2 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1.5 w-full text-center"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-brand-accent shrink-0">
                              <rect width="20" height="16" x="2" y="4" rx="2"/>
                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                            </svg>
                            Price Enquiry (Email)
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Corporate Call To Action */}
      <section className="bg-brand-primary text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-heading">
            Need a Custom Assessment of Your Core Operations?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            Send us a brief description of your daily workflows, material registries, or manual roadblocks. We will compile a custom roadmap detailing software options.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/contact')}
              className="bg-brand-secondary text-white hover:bg-slate-800 border border-slate-700 px-8 py-3 rounded-md text-sm font-semibold transition-colors cursor-pointer"
            >
              Get Custom Assessment
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
