import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Laptop,
  Brain,
  Users,
  TrendingUp,
  Factory,
  Wrench,
  Building2,
  Leaf,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Truck,
  Rocket,
  ShieldCheck,
  Zap,
  Settings,
  FileSpreadsheet,
  Layers,
  Users2,
  ChevronRight,
  Phone,
  Mail
} from 'lucide-react';

const Linkedin = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

import StatCounter from '../components/StatCounter';
import Seo from '../components/Seo';
import founderPhoto from '../assets/founder_photo.jpg';

// Framer Motion Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const navigate = useNavigate();
  const whatsappUrl = "https://wa.me/919944283316?text=Hello%20Maruthu%2C%0A%0AI%20visited%20the%20M2P%20Nexus%20website%20and%20would%20like%20to%20discuss%20my%20business%20requirements.%0A%0APlease%20contact%20me.%0A%0AThank%20you.";
  const emailUrl = "mailto:m2pnexus2026@gmail.com?subject=Business%20Enquiry%20from%20Website";

  // Data mapping
  const whoWeHelp = [
    { title: 'Manufacturers', desc: 'Streamlining factory floors, production schedules, and automated reporting systems.', icon: Factory },
    { title: 'Engineering Companies', desc: 'Deploying heavy-duty ERP and inventory tracking workflows for precise project management.', icon: Wrench },
    { title: 'SMEs', desc: 'Providing professional enterprise-level tech tools scaled down for small-to-medium business agility.', icon: Building2 },
    { title: 'Traders', desc: 'Integrating high-speed supply chain logistics and digital billing interfaces.', icon: ShoppingBag },
    { title: 'Farmers', desc: 'Empowering regional agribusiness and coconut trading through custom operations ERPs.', icon: Leaf },
    { title: 'Educational Institutions', desc: 'Enabling interactive cloud platforms, digital administration, and automated grading frameworks.', icon: GraduationCap },
    { title: 'Startups', desc: 'Accelerating product launches with rapid MVP development and robust tech foundations.', icon: Rocket }
  ];

  const problemsWeSolve = [
    { title: 'Manual Processes', desc: 'Eliminate human errors and operational delays by automating administrative and operational tasks.', icon: Settings },
    { title: 'Excel Dependency', desc: 'Transition fragile, siloed spreadsheets into unified, secure, real-time cloud database applications.', icon: FileSpreadsheet },
    { title: 'Inventory Challenges', desc: 'Resolve stockouts, excessive storage costs, and unrecorded shrinkage with smart tracking systems.', icon: Layers },
    { title: 'Digital Adoption Issues', desc: 'Bridge cultural/language gaps with localized, highly intuitive software designed for easy adoption.', icon: Zap },
    { title: 'Workforce Challenges', desc: 'Address skill gaps and high turnover by sourcing and preparing specialized technology talents.', icon: Users2 },
    { title: 'Growth Constraints', desc: 'Unlock business potential with scalable cloud architectures and AI-driven growth frameworks.', icon: TrendingUp }
  ];

  const solutionsWeProvide = [
    { title: 'Technology Solutions', desc: 'Custom enterprise software, ERP developments, high-traffic billing software, and custom business portals built with modern architectures.', icon: Laptop, link: '/services' },
    { title: 'AI Solutions', desc: 'Integrate artificial intelligence, automated reporting pipelines, predictive business analytics, and machine learning systems into daily workflows.', icon: Brain, link: '/services' },
    { title: 'Workforce Solutions', desc: 'Bridge staffing gaps with highly qualified talent, expert technical screening, and corporate onboarding programs for rapid team expansion.', icon: Users, link: '/services' },
    { title: 'Business Growth Solutions', desc: 'Drive product positioning, digital presence, strategic growth consultancy, and comprehensive tech transformation strategies.', icon: TrendingUp, link: '/services' }
  ];

  const featuredSolutions = [
    { title: 'Tamil Billing Software', industry: 'Retail & Agribusiness', problem: 'Local traders struggle with complex English billing tools.', tech: 'React, Node.js, Tailwind CSS', desc: 'Highly intuitive bilingual (Tamil/English) billing system supporting GST compliance, offline functionality, and fast checkout.' },
    { title: 'Steel Industry ERP', industry: 'Heavy Manufacturing', problem: 'Fragmented inventory trackers lead to raw material discrepancies.', tech: 'React, .NET Core, SQL Server', desc: 'Comprehensive resource planner managing raw materials, scrap calculations, logistics, client accounts, and employee schedules.' },
    { title: 'Coconut Trader ERP', industry: 'Agribusiness & Trade', problem: 'Manual recording of bulk weight, transport logistics, and farmer pay.', tech: 'React, Node.js, MongoDB', desc: 'Targeted agricultural commerce system optimizing logistics tracking, batch weights, regional pricing engines, and commission charts.' },
    { title: 'Business Websites', industry: 'Corporate & SMEs', problem: 'Weak digital footprint and low authority online.', tech: 'Next.js, Tailwind CSS', desc: 'Premium, conversion-optimized corporate web systems built for maximum SEO rankings, fast load speeds, and professional branding.' },
    { title: 'AI Business Automation', industry: 'Enterprise Operations', problem: 'Expensive labor spent on repetitive data compilation and analytics.', tech: 'Python, OpenAI API, LangChain', desc: 'Custom automation agents that analyze operational logs, generate daily summaries, compile invoices, and draft client communications.' }
  ];

  const industriesWeServe = [
    { title: 'Manufacturing', icon: Factory },
    { title: 'Engineering', icon: Wrench },
    { title: 'Construction', icon: Building2 },
    { title: 'Agriculture', icon: Leaf },
    { title: 'Retail', icon: ShoppingBag },
    { title: 'Healthcare', icon: HeartPulse },
    { title: 'Education', icon: GraduationCap },
    { title: 'Logistics', icon: Truck },
    { title: 'Startups & SMEs', icon: Rocket }
  ];

  return (
    <>
      <Seo
        title="Digital Solutions & AI Consulting"
        description="Empowering enterprises, SMEs, and traders through custom software, Steel & Coconut ERPs, AI-driven automation, and workforce solutions. Modernizing tradition from root to success."
      />

      {/* SECTION 1: Hero */}
      <section className="relative overflow-hidden bg-white border-b border-brand-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-section border border-brand-border rounded-full text-brand-secondary text-xs font-semibold uppercase tracking-wider font-heading">
                <span>M2P Nexus</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                <span>Corporate Technology Partner</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-primary leading-tight font-heading">
                Digital Solutions That Help Businesses Grow
              </h1>
              <div className="space-y-2 border-l-4 border-brand-accent pl-4 py-1">
                <p className="text-xl font-bold text-brand-secondary font-heading">
                  Modernizing Tradition. Empowering Communities. Driving Innovation.
                </p>
                <p className="text-lg font-bold text-brand-accent tracking-widest uppercase font-heading">
                  வேரிலிருந்து வெற்றிவரை
                </p>
              </div>
              <p className="text-lg text-brand-text max-w-xl leading-relaxed">
                Bridging the gap between traditional businesses and modern technology through AI-powered solutions, workforce excellence, and digital transformation. We help you scale from the root up.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-brand-secondary text-white hover:bg-brand-primary font-bold px-8 py-3.5 rounded-md shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  Request Consultation
                  <ChevronRight className="w-5 h-5" />
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-emerald-500/40 text-emerald-600 hover:bg-emerald-500/10 font-bold px-8 py-3.5 rounded-md transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </motion.div>

            {/* Right: Founder Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="lg:col-span-5 flex justify-center relative"
            >
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-brand-section group">
                <img
                  src={founderPhoto}
                  alt="Maruthu Pandi PT - Founder & Director of M2P Nexus"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white text-left">
                  <p className="text-lg font-bold font-heading">Maruthu Pandi PT</p>
                  <p className="text-xs text-brand-accent font-semibold tracking-wider font-heading">Founder & Director</p>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-accent rounded-lg -z-10 opacity-30 blur-xs"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-secondary rounded-lg -z-10 opacity-10 blur-xs"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Trust Bar */}
      <section className="py-12 bg-brand-section border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatCounter target={50} suffix="+" label="Projects Delivered" />
            <StatCounter target={9} suffix="+" label="Industries Served" />
            <StatCounter target={5} suffix="+" label="ERP Systems Built" />
          </div>
        </div>
      </section>

      {/* SECTION 3: Who We Help */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary font-heading">
              Who We Help
            </h2>
            <p className="text-lg text-brand-text">
              We specialize in custom tech transformations that resolve specific growth and administrative blockers for organizations of all structures.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left"
          >
            {whoWeHelp.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-white border border-brand-border p-6 rounded-lg shadow-xs hover:shadow-md transition-all hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-brand-section rounded-md flex items-center justify-center mb-4 text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-primary font-heading mb-2">{item.title}</h3>
                  <p className="text-sm text-brand-text leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Problems We Solve */}
      <section className="py-16 md:py-24 bg-brand-section border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary font-heading">
              Problems We Solve
            </h2>
            <p className="text-lg text-brand-text">
              We replace operational friction with streamlined, robust digital workflows.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
          >
            {problemsWeSolve.map((prob, idx) => {
              const Icon = prob.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-white border border-brand-border p-8 rounded-lg flex gap-4 shadow-xs"
                >
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-brand-primary font-heading">{prob.title}</h3>
                    <p className="text-sm text-brand-text leading-relaxed">{prob.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: Solutions We Provide */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary font-heading">
              Solutions We Provide
            </h2>
            <p className="text-lg text-brand-text">
              Our core capabilities cover the full technological spectrum needed to scale and manage modern companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {solutionsWeProvide.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-section border border-brand-border p-8 rounded-lg hover:border-brand-accent/50 transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-white border border-brand-border rounded-lg flex items-center justify-center text-brand-secondary shadow-xs">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-primary font-heading">{sol.title}</h3>
                    <p className="text-base text-brand-text leading-relaxed">{sol.desc}</p>
                  </div>
                  <button
                    onClick={() => navigate(sol.link)}
                    className="mt-6 text-sm font-bold text-brand-secondary hover:text-brand-primary flex items-center gap-1 cursor-pointer w-fit"
                  >
                    Learn more details <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: Featured Solutions */}
      <section className="py-16 md:py-24 bg-brand-section border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary font-heading">
              Featured Solutions
            </h2>
            <p className="text-lg text-brand-text">
              Highly specialized systems engineered by M2P Nexus to solve specific regional and industrial operational problems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 text-left">
            {featuredSolutions.map((sol, idx) => (
              <div
                key={idx}
                className="bg-white border border-brand-border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-semibold text-brand-accent bg-brand-accent/10 px-2.5 py-1 rounded-full font-heading">
                      {sol.industry}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      SYS-{idx + 101}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary font-heading">{sol.title}</h3>
                  <div className="space-y-2 text-sm leading-relaxed">
                    <p className="text-brand-text"><strong className="text-brand-primary">Blocker:</strong> {sol.problem}</p>
                    <p className="text-brand-text">{sol.desc}</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-border">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-slate-500 font-medium">{sol.tech}</span>
                    <Link to="/portfolio" className="text-brand-secondary font-bold hover:underline flex items-center gap-0.5">
                      Case details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Industries We Serve */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary font-heading">
              Industries We Serve
            </h2>
            <p className="text-lg text-brand-text">
              We bring deep engineering expertise and business-first technology architectures to critical sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {industriesWeServe.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <button
                  key={idx}
                  onClick={() => navigate('/industries')}
                  className="bg-white border border-brand-border p-6 rounded-lg text-center flex flex-col items-center justify-center gap-3 hover:border-brand-secondary transition-colors group cursor-pointer shadow-xs hover:shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-section flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-brand-primary font-heading group-hover:text-brand-secondary transition-colors">{ind.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: Founder Highlight */}
      <section className="py-16 md:py-24 bg-brand-section border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Founder Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={founderPhoto}
                  alt="Maruthu Pandi PT"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Info */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-1">
                <h2 className="text-3xl font-extrabold text-brand-primary font-heading">Maruthu Pandi PT</h2>
                <p className="text-lg font-semibold text-brand-secondary font-heading">Founder & Director</p>
              </div>
              <p className="text-base text-brand-text leading-relaxed">
                Maruthu Pandi PT is a seasoned technology director and architect specializing in designing custom ERP systems, building resilient AI integrations, and launching scalable software structures. He has supported manufacturers, traders, and agricultural networks for over a decade.
              </p>
              <p className="text-base text-brand-text leading-relaxed">
                Recognizing that traditional regional companies are often locked out of enterprise software due to price and complexity, he established M2P Nexus to deliver corporate-grade solutions configured for local business structures, ensuring long-term success from the root up.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-secondary text-white hover:bg-brand-primary px-6 py-3 rounded-md font-semibold text-sm transition-all flex items-center gap-2 shadow-xs hover:shadow-md cursor-pointer"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
                <button
                  onClick={() => navigate('/founder')}
                  className="border border-brand-border text-brand-primary hover:bg-brand-section bg-white px-6 py-3 rounded-md font-semibold text-sm transition-colors cursor-pointer"
                >
                  Read Founder Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Why Choose M2P Nexus */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary font-heading">
              Why Choose M2P Nexus
            </h2>
            <p className="text-lg text-brand-text">
              We combine enterprise expertise with a regional understanding to deliver high-yield partnership experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { title: 'Business First Thinking', desc: 'We do not build technology for technology’s sake. Our architectures are modeled strictly around your operations to protect your capital and generate tangible cashflow efficiency.', icon: ShieldCheck },
              { title: 'Deep Technology Expertise', desc: 'With a foundation across .NET, Node.js, React, and Python, we build high-capacity databases and custom ERPs that support critical daily manufacturing pipelines.', icon: Laptop },
              { title: 'Startup & SME Friendly', desc: 'No bloated enterprise billing or lengthy sales loops. We deliver rapid, cost-effective deployments tailored for SMEs and agile startup frameworks.', icon: Rocket },
              { title: 'AI Innovation', desc: 'We help you stay ahead by implementing custom AI models, neural indexing, and operational report automation, unlocking insights hidden in logs.', icon: Brain },
              { title: 'Regional Understanding', desc: 'We understand local languages and regional trade dynamics, enabling us to build bilingual software (Tamil/English) that workforce teams adopt effortlessly.', icon: Users },
              { title: 'Long-Term Partnership', desc: 'We do not believe in transactional consultancies. M2P Nexus acts as your virtual CTO, supporting and scaling with your enterprise as your business expands.', icon: ShieldCheck }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-section border border-brand-border p-8 rounded-lg hover:border-brand-secondary/40 transition-colors space-y-4"
                >
                  <div className="w-12 h-12 bg-white border border-brand-border rounded flex items-center justify-center text-brand-secondary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-primary font-heading">{item.title}</h3>
                  <p className="text-sm text-brand-text leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 10: Call To Action */}
      <section className="bg-brand-primary text-white py-16 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/40 to-transparent pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discuss your requirements directly with our technology team. Get custom consultations for steel ERPs, billing applications, AI automation, or technical talent recruitment.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="tel:+919944283316"
              className="bg-brand-secondary text-white hover:bg-slate-800 border border-slate-700 px-8 py-3.5 rounded-md font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-brand-accent" />
              Call Now
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white hover:bg-[#20ba59] px-8 py-3.5 rounded-md font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 fill-current">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              WhatsApp Us
            </a>
            <a
              href={emailUrl}
              className="border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-white px-8 py-3.5 rounded-md font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-brand-accent" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
