import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Laptop,
  Brain,
  Users,
  CheckCircle,
  Target,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  Settings,
  Layers
} from 'lucide-react';
import Seo from '../components/Seo';
import dashboardMockup from '../assets/dashboard_mockup.png';

export default function Portfolio() {
  const navigate = useNavigate();
  const whatsappUrl = "https://wa.me/919944283316?text=Hello%20Maruthu%2C%0A%0AI%20visited%20the%20M2P%20Nexus%20website%20and%20would%20like%20to%20discuss%20my%20business%20requirements.%0A%0APlease%20contact%20me.%0A%0AThank%20you.";

  const portfolioCategories = [
    {
      id: 'technology',
      title: 'Technology Solutions',
      icon: Laptop,
      servicesProvided: [
        'Custom Steel & Agribusiness ERP development to resolve stock discrepancies.',
        'GST-compliant bilingual billing software that works offline.',
        'High-performance React/Node.js web systems optimized for search engines.',
        'Normalization of legacy SQL databases and transition from manual Excel logs.'
      ],
      description: 'We design and develop custom, secure corporate software platforms, billing software, and unified resource planners (ERPs) engineered to fit your specific operational structure. We avoid cookie-cutter templates in favor of high-performance code.',
      projects: [
        {
          title: 'Bilingual GST Billing Software',
          client: 'Karthik Traders & Provisions',
          industry: 'Retail & Bulk Provisions',
          problem: 'Store operators struggled with complex, English-only billing systems that frequently crashed during internet blackouts, delaying transactions.',
          solution: 'Engineered an offline-first cashier terminal with IndexedDB local caching. Implemented bilingual (Tamil/English) invoice layout, automated GST math, and automatic background sync.',
          stack: ['Vite', 'React.js', 'IndexedDB', 'Tailwind CSS'],
          metrics: 'Over 15,000+ local invoices compiled with zero transactional downtime.'
        },
        {
          title: 'Steel Industry ERP',
          client: 'Sri Balaji Steel Rolling Mills',
          industry: 'Heavy Metal Manufacturing',
          problem: 'Fragmented manual registers tracking raw scrap material receipts, melting losses, logistics, and contractor accounts led to inventory leakages.',
          solution: 'Created a centralized Web ERP system featuring real-time weighbridge integrations, automated steel receipt calculations, and unified billing logs.',
          stack: ['React.js', '.NET Core', 'SQL Server', 'IIS Server'],
          metrics: 'Eliminated manual inventory discrepancies and reduced monthly audit cycles from 15 days to under 48 hours.'
        },
        {
          title: 'Agribusiness Supply Chain Portal',
          client: 'Pandian Agro Trading Co.',
          industry: 'Agribusiness & Bulk Trade',
          problem: 'Manual tracking of crop batch weights, transport logs, and commission allocations created constant settlement friction with farmers.',
          solution: 'Built a responsive supply chain database app that integrates scales, automates driver fuel allowances, and generates commission settlements.',
          stack: ['React.js', 'Node.js', 'Express', 'MongoDB'],
          metrics: 'Streamlined harvest batch settlements for over 450+ farming partners.'
        }
      ]
    },
    {
      id: 'ai',
      title: 'AI Solutions',
      icon: Brain,
      servicesProvided: [
        'Custom automation agents for compiling daily logs, raw invoice data, and bills.',
        'OpenAI API integrations to handle customer queries and ticket drafting.',
        'Automatic regional translation frameworks to localize software interfaces.',
        'Predictive inventory engines to estimate material requirements.'
      ],
      description: 'We integrate advanced machine learning models, automated data extractors, and generative agent pipelines into daily business platforms. We turn unstructured operational logs into automated executive dashboards and predictive files.',
      projects: [
        {
          title: 'Logistics Ledger & Invoice Automation',
          client: 'KMS Infra & Logistics',
          industry: 'Operations & Fleet Logistics',
          problem: 'Administrative staff spent over 25 hours per week manually reading, sorting, and verifying incoming logistics billing slips.',
          solution: 'Deployed a LangChain and OCR-driven Python automation pipeline that parses shipping receipts, matches them with trip records, and flags anomalies.',
          stack: ['Python', 'OpenAI APIs', 'LangChain', 'PostgreSQL'],
          metrics: 'Saved an estimated 25+ hours of manual administrative compilation per week with 99.4% parsing accuracy.'
        },
        {
          title: 'Intelligent Inventory Chat Agent',
          client: 'Nexus Retailers & Co.',
          industry: 'Agribusiness & Retail Commerce',
          problem: 'Floor operators struggled to query inventory levels and active prices instantly from their phones, delaying orders.',
          solution: 'Developed an intelligent chat agent trained on SQL inventory logs, allowing personnel to query live stock status via simple text commands.',
          stack: ['React.js', 'Node.js', 'OpenAI API', 'SQL Server'],
          metrics: 'Reduced search times for stock inquiries from 10 minutes to under 5 seconds.'
        }
      ]
    },
    {
      id: 'workforce',
      title: 'Workforce Solutions',
      icon: Users,
      servicesProvided: [
        'End-to-end recruitment loops including coding tests and design interviews.',
        'Custom pre-onboarding bootcamps aligning candidates with your tech stack.',
        'Contract-to-hire and full-time placement options for agile teams.',
        'Ongoing technical mentorship and training sessions led by our director.'
      ],
      description: 'Finding skilled developers, database managers, and AI architects is challenging. We act as your specialized technical recruitment partner, screening, vetting, and training tech talents specifically prepared to merge with your company.',
      projects: [
        {
          title: 'Agile Engineering Team Sourcing',
          client: 'KMS Tech Division',
          industry: 'Software & Technology Team Sourcing',
          problem: 'Management spent weeks screening candidates whose technical skills did not match their active code repositories, delaying roadmap deliveries.',
          solution: 'Handled candidate filtering, designed coding tests, and conducted pre-onboarding bootcamps to align candidate skills with their codebase before day 1.',
          stack: ['Technical Screening', 'Developer Bootcamps', 'Mentorship Frameworks'],
          metrics: 'Reduced recruitment search cycles from 45 days to 14 days with 95% candidate retention.'
        }
      ]
    }
  ];

  return (
    <>
      <Seo
        title="Our Portfolio - Detail Work about 3 Core Services"
        description="See detailed case studies of projects built by M2P Nexus across Technology, AI, and Workforce Solutions. Real problems, engineered outcomes."
      />

      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/30 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
            Our Detailed Portfolio
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Real software systems and staffing frameworks engineered to solve critical operational bottlenecks.
          </p>
        </div>
      </section>

      {/* Section Quick Anchor Links */}
      <div className="bg-brand-section border-b border-brand-border sticky top-16 z-20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold font-heading">
          <a href="#technology" className="text-brand-secondary hover:text-brand-primary flex items-center gap-1.5">
            <Laptop className="w-4 h-4 text-brand-accent" /> Technology Solutions
          </a>
          <a href="#ai" className="text-brand-secondary hover:text-brand-primary flex items-center gap-1.5">
            <Brain className="w-4 h-4 text-brand-accent" /> AI Solutions
          </a>
          <a href="#workforce" className="text-brand-secondary hover:text-brand-primary flex items-center gap-1.5">
            <Users className="w-4 h-4 text-brand-accent" /> Workforce Solutions
          </a>
        </div>
      </div>

      {/* Portfolio Categories List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
          {portfolioCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={category.id}
                id={category.id}
                className="scroll-mt-32 space-y-12 border-b border-brand-border/40 pb-16 md:pb-24 last:border-0 last:pb-0 text-left"
              >
                {/* Services Provided Panel */}
                <div className="bg-brand-section border border-brand-border rounded-2xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white border border-brand-border rounded-lg flex items-center justify-center text-brand-secondary shadow-xs">
                        <CategoryIcon className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-brand-primary font-heading">
                        {category.title}
                      </h2>
                    </div>
                    <p className="text-sm md:text-base text-brand-text leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  <div className="lg:col-span-5 bg-white border border-brand-border p-5 rounded-xl space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand-secondary font-heading flex items-center gap-1.5">
                      <Target className="w-4 h-4 text-brand-accent" />
                      Services Provided:
                    </h3>
                    <ul className="space-y-2 text-xs text-brand-text">
                      {category.servicesProvided.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Case Studies Grid */}
                <div className="space-y-8">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-brand-accent uppercase tracking-widest font-heading">Case Studies</span>
                    <h3 className="text-xl font-bold text-brand-primary font-heading">Proven Work & Case Histories</h3>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {category.projects.map((project, idx) => (
                      <div
                        key={idx}
                        className="bg-brand-section border border-brand-border rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        {/* Upper Section */}
                        <div className="p-6 md:p-8 space-y-6">
                          {/* Case Header */}
                          <div className="flex justify-between items-start gap-4">
                            <div className="space-y-1">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-white border border-brand-border px-2 py-0.5 rounded-full font-heading">
                                {project.industry}
                              </span>
                              <h4 className="text-xl font-extrabold text-brand-primary font-heading pt-1">
                                {project.title}
                              </h4>
                              <p className="text-xs text-brand-secondary font-medium font-heading">Client: {project.client}</p>
                            </div>
                          </div>

                          {/* Problem & Solution block */}
                          <div className="space-y-4 text-xs md:text-sm text-left">
                            <div className="space-y-1">
                              <span className="text-[10px] font-bold uppercase text-red-500 font-heading block">The Problem</span>
                              <p className="text-brand-text leading-relaxed text-xs">{project.problem}</p>
                            </div>
                            <div className="space-y-1">
                              <span className="text-[10px] font-bold uppercase text-brand-secondary font-heading block">Our Solution</span>
                              <p className="text-brand-primary leading-relaxed text-xs font-medium">{project.solution}</p>
                            </div>
                          </div>
                        </div>

                        {/* Lower Section */}
                        <div className="bg-white p-6 md:p-8 border-t border-brand-border space-y-4">
                          <div className="bg-brand-section p-3 rounded-lg border border-brand-border/60 text-xs text-left">
                            <strong className="text-brand-secondary font-heading block mb-0.5">Proven Business Outcome:</strong>
                            <span className="text-brand-text leading-relaxed">{project.metrics}</span>
                          </div>

                          <div className="flex flex-wrap gap-2 pt-2">
                            {project.stack.map((tech, i) => (
                              <span key={i} className="text-[10px] font-mono font-bold bg-brand-section border border-brand-border px-2.5 py-1 rounded text-slate-600">
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="pt-2 flex justify-between items-center text-xs">
                            <button
                              onClick={() => navigate('/contact')}
                              className="font-bold text-brand-secondary hover:text-brand-primary flex items-center gap-1 cursor-pointer"
                            >
                              Enquire about this case <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
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
              className="bg-[#25D366] text-white hover:bg-[#20ba59] px-8 py-3.5 rounded-md text-sm font-bold shadow-md hover:shadow-lg transition-all inline-flex items-center gap-1.5 cursor-pointer"
            >
              Request Live Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
