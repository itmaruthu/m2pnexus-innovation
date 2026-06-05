import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Factory,
  Building2,
  ShoppingBag,
  Leaf,
  GraduationCap,
  Truck,
  Rocket,
  AlertTriangle,
  Lightbulb,
  Check,
  Star,
  ShieldCheck,
  Zap,
  Users,
  ArrowRight
} from 'lucide-react';
import Seo from '../components/Seo';

// Client avatars
import clientAvatar1 from '../assets/client_avatar_1.png';
import clientAvatar2 from '../assets/client_avatar_2.png';
import clientAvatar3 from '../assets/client_avatar_3.png';

// Framer Motion Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

export default function Industries() {
  const navigate = useNavigate();
  const whatsappUrl = "https://wa.me/919944283316?text=Hello%20Maruthu%2C%0A%0AI%20visited%20the%20M2P%20Nexus%20website%20and%20would%20like%20to%20discuss%20my%20business%20requirements.%0A%0APlease%20contact%20me.%0A%0AThank%20you.";

  const industriesList = [
    {
      title: 'Manufacturing',
      icon: Factory,
      challenge: 'Manual stock calculations and scrap tracking lead to raw material leakages and delayed billing records.',
      solution: 'Deploy custom material registries and batch-tracking dashboards configured for the factory floor.',
      benefit: 'Complete visibility of material lifecycle and accurate raw scrap records.',
      client: 'Sri Balaji Steel Rolling Mills',
      projectType: 'Steel ERP System',
      scope: 'Developed custom resource planners managing raw materials, scrap weight calculations, and employee rotas.',
      tech: 'React, .NET Core, SQL Server'
    },
    {
      title: 'Construction',
      icon: Building2,
      challenge: 'Vulnerable spreadsheet tracking of sand, steel, cement deliveries, and sub-contractor accounts.',
      solution: 'A secure cloud database application tracking logistics, material weights, and billing vouchers.',
      benefit: 'Elimination of double entries and material delivery discrepancies.',
      client: 'KMS Infra & Developers',
      projectType: 'Logistics Ledger',
      scope: 'Built secure delivery validation systems for sand, cement, and steel shipments, preventing ledger leaks.',
      tech: 'React, Node.js, MongoDB'
    },
    {
      title: 'Agriculture',
      icon: Leaf,
      challenge: 'Fluctuating batch prices, commission tracking, and logistics coordinating for bulk traders.',
      solution: 'A targeted agribusiness ERP tracking batch weights, driver logs, commissions, and farmer invoices.',
      benefit: 'Immediate settlements, transparent accounts, and optimized crop logistics.',
      client: 'Pandian Agro Trading Co.',
      projectType: 'Harvest Logistics ERP',
      scope: 'Designed bulk weighbridge integrations, crop receipt tracking, commission pricing engines, and farmer ledgers.',
      tech: 'React, Node.js, Express, MongoDB'
    },
    {
      title: 'Startups & SMEs',
      icon: Rocket,
      challenge: 'Bloated software quotes, long wait times, and failure to establish a digital authority.',
      solution: 'Rapid, cost-effective MVP development, sleek SEO websites, and flexible cloud systems.',
      benefit: 'Faster market entry and premium corporate digital presence.',
      client: 'Nexus Retailers & Co.',
      projectType: 'Custom E-Commerce MVP',
      scope: 'Developed full-stack e-commerce web MVP with responsive storefront, order management, and Stripe integrations.',
      tech: 'Vite, React, Node.js, Tailwind CSS'
    },
    {
      title: 'EdTech',
      icon: GraduationCap,
      challenge: 'Siloed student records, manually compiled marks, and expensive, hard-to-use learning platforms.',
      solution: 'Lightweight cloud portals for central student tracking, automated GPA compilation, and parent notifications.',
      benefit: 'Reduced admin overhead and secure, centralized academic data.',
      client: 'Madurai Academy of Excellence',
      projectType: 'Education Cloud Portal',
      scope: 'Created student tracking, automated GPA mark compilers, and dynamic WhatsApp alert notifications for parents.',
      tech: 'Next.js, Node.js, PostgreSQL'
    },
    {
      title: 'Logistics',
      icon: Truck,
      challenge: 'Uncoordinated driver logs, vehicle maintenance tracking, and fuel billing discrepancies.',
      solution: 'Deploy cloud transport portals tracking mileage, driver sheets, load counts, and maintenance dates.',
      benefit: 'Reduced fuel fraud and clean operational logs for transport networks.',
      client: 'Maruthi Transport & Logistics',
      projectType: 'Fleet Trip Manager',
      scope: 'Built driver log sheet validation, mileage tracking, and automatic invoice mapping scripts.',
      tech: 'React, Python, Fast API, PostgreSQL'
    },
    {
      title: 'Retail',
      icon: ShoppingBag,
      challenge: 'Legacy GST billing systems are slow, complex, and fail during internet blackouts.',
      solution: 'Install a high-speed, localized bilingual billing software (Tamil/English) with local caching.',
      benefit: 'Zero transactional delays and faster checkout queues for traders.',
      client: 'Karthik Traders & Provisions',
      projectType: 'Bilingual POS Client',
      scope: 'Engineered high-speed, offline-first billing client supporting GST invoicing in Tamil & English.',
      tech: 'Vite, React, IndexedDB, Tailwind CSS'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Managing Director, Balaji Steel Rolling Mills',
      quote: 'M2P Nexus completely automated our steel scrap registry and logistics loop. We cut down inventory discrepancy to near zero and streamlined our GST receipts.',
      image: clientAvatar1,
      rating: 5
    },
    {
      name: 'M. Karthikeyan',
      role: 'Proprietor, Karthik Traders',
      quote: 'Their bilingual offline-first billing client runs flawlessly. Even during internet outages, our retail sales continue uninterrupted, and billing is incredibly fast.',
      image: clientAvatar2,
      rating: 5
    },
    {
      name: 'S. Pandian',
      role: 'Founder, Pandian Agro Trading Co.',
      quote: 'Their custom weighing-bridge integration and digital commissions bookkeeping saved us lakhs in manual tracking errors during harvest seasons.',
      image: clientAvatar3,
      rating: 5
    }
  ];

  const reviewBreakdown = [
    { label: 'Engineering & Reliability', score: '4.9/5', desc: 'Robust databases and offline redundancy.', icon: ShieldCheck },
    { label: 'GST & Local Compliance', score: '5.0/5', desc: 'Accurate bilingual billing and ledger logic.', icon: Check },
    { label: 'User Adoption & Speed', score: '4.8/5', desc: 'Bilingual user flows tailored for operators.', icon: Zap },
    { label: 'Hypercare & Support', score: '4.9/5', desc: 'Direct access to architects post-launch.', icon: Users }
  ];

  return (
    <>
      <Seo
        title="Industries We Serve - Worked Client Details & Reviews"
        description="Explore the industries M2P Nexus works in, client project scope, verified client testimonials with photos, and our overall quality review metrics."
      />

      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20 md:py-28 text-center relative overflow-hidden">
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-secondary/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-brand-accent text-xs font-semibold uppercase tracking-widest font-heading"
          >
            <Zap className="w-3.5 h-3.5 text-brand-accent" />
            Market Verticals
          </motion.span>
          
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight"
          >
            Our Worked Industries
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Discover the sectors we have modernized and read verified feedback from business leaders we support.
          </motion.p>
        </motion.div>
      </section>

      {/* Industries We Serve Section (Glassmorphism & Staggered Layout) */}
      <section className="relative py-24 bg-brand-primary text-white border-b border-brand-border overflow-hidden">
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>
        
        {/* Glowing blur shapes */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-semibold text-brand-accent uppercase tracking-widest font-heading">
              Sectors & Impact
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
              Tailored Integrations & Worked Client Cases
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We study the physical constraints of each sector on the floor before writing code. Review our client cases below.
            </p>
          </div>

          {/* Staggered Flat-mapping Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
            {industriesList.map((ind, idx) => {
              const Icon = ind.icon;
              
              // Offsets for staggered layout
              let offsetClass = "";
              if (idx % 3 === 1) offsetClass = "lg:translate-y-12";
              if (idx % 3 === 2) offsetClass = "lg:translate-y-6";
              
              let mdOffsetClass = "";
              if (idx % 2 === 1) mdOffsetClass = "md:translate-y-8";

              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-col justify-between rounded-3xl bg-slate-900/40 backdrop-blur-lg border border-slate-800/80 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_15px_30px_rgba(0,0,0,0.3)] hover:bg-slate-900/60 hover:border-blue-500/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),_0_0_25px_rgba(59,130,246,0.15)] transition-all duration-500 hover:-translate-y-1 group ${offsetClass} ${mdOffsetClass}`}
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.25)] group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white font-heading group-hover:text-blue-400 transition-colors">
                        {ind.title}
                      </h3>
                    </div>

                    {/* Breakdown */}
                    <div className="space-y-4 text-xs text-left">
                      {/* Challenge */}
                      <div className="flex gap-3">
                        <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <span className="text-[10px] font-bold text-slate-400 uppercase font-heading tracking-wider">Challenge</span>
                          <p className="text-slate-300 leading-relaxed font-normal">{ind.challenge}</p>
                        </div>
                      </div>

                      {/* Solution */}
                      <div className="flex gap-3">
                        <Lightbulb className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <span className="text-[10px] font-bold text-blue-400 uppercase font-heading tracking-wider">Our Solution</span>
                          <p className="text-slate-200 font-medium leading-relaxed">{ind.solution}</p>
                        </div>
                      </div>

                      {/* Benefit */}
                      <div className="flex gap-3 bg-white/5 border border-white/5 p-3 rounded-2xl shadow-inner">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <span className="text-[9px] font-bold text-emerald-400 uppercase font-heading tracking-wider">Primary Benefit</span>
                          <p className="text-slate-300 leading-relaxed font-normal">{ind.benefit}</p>
                        </div>
                      </div>

                      {/* Case details (Sub-glass card) */}
                      <div className="bg-slate-950/50 border border-slate-800/60 p-4 rounded-2xl space-y-2.5">
                        <div className="flex justify-between items-center gap-2">
                          <span className="font-bold text-white font-heading truncate">Client: {ind.client}</span>
                          <span className="font-mono text-blue-400 text-[9px] bg-blue-950/45 border border-blue-900/60 px-2 py-0.5 rounded-full font-bold shrink-0">{ind.projectType}</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed">
                          <strong className="text-white font-semibold">Scope:</strong> {ind.scope}
                        </p>
                        <div className="pt-2 border-t border-slate-800/50 flex flex-wrap gap-1.5 items-center">
                          <span className="text-slate-400 font-sans font-bold mr-1">Tech:</span>
                          {ind.tech.split(', ').map((techItem, techIdx) => (
                            <span key={techIdx} className="font-mono text-[9px] text-slate-300 bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded-md">
                              {techItem}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-slate-800/50 flex items-center justify-between text-xs">
                    <button
                      onClick={() => navigate('/contact')}
                      className="font-bold text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1 group/btn"
                    >
                      Enquire for Sector <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-24 bg-brand-section border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-semibold text-brand-secondary uppercase tracking-widest font-heading">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary font-heading">
              Feedback from Business Owners
            </h2>
            <p className="text-base text-brand-text">
              Real reviews from manufacturing directors, agribusiness founders, and retailers we support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white border border-brand-border p-8 rounded-3xl flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 space-y-6">
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-sm italic text-brand-text leading-relaxed text-left">
                    "{t.quote}"
                  </p>
                </div>
                {/* Profile */}
                <div className="flex items-center gap-4 border-t border-brand-border pt-6 text-left">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-border bg-brand-section shrink-0">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-brand-primary text-sm font-heading leading-snug">{t.name}</h4>
                    <p className="text-[10px] text-brand-accent font-semibold tracking-wider uppercase font-heading">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overall Review / Feedbacks Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Overall Rating Score */}
            <div className="lg:col-span-5 bg-brand-section border border-brand-border p-8 rounded-3xl text-center space-y-6 shadow-xs">
              <span className="text-xs font-semibold text-brand-secondary uppercase tracking-widest font-heading">Performance Rating</span>
              <div className="space-y-2">
                <div className="text-6xl font-extrabold text-brand-primary font-heading">4.9</div>
                <div className="flex justify-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-brand-text font-medium">Verified average across 50+ business modules</p>
              </div>
              
              <div className="border-t border-brand-border pt-4">
                <p className="text-xs text-brand-secondary italic">
                  "Our design philosophy is anchored in operational safety and zero-training adoption, translating directly into high ratings."
                </p>
              </div>
            </div>

            {/* Right Column: Breakdown */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold text-brand-primary font-heading">
                  Review Breakdown & Audit Scores
                </h2>
                <p className="text-sm text-brand-text">
                  How we score on third-party reviews and independent software architecture audits:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {reviewBreakdown.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-brand-section border border-brand-border p-5 rounded-2xl flex gap-4 hover:border-slate-300 hover:shadow-xs transition-all duration-300">
                      <div className="w-10 h-10 rounded-full bg-white border border-brand-border flex items-center justify-center text-brand-secondary shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-brand-primary text-sm font-heading leading-snug">{item.label}</h4>
                          <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{item.score}</span>
                        </div>
                        <p className="text-xs text-brand-text leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary text-white py-20 text-center relative overflow-hidden">
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white">
            Need custom tech integration for your sector?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Discuss your system constraints directly with our tech director. Get custom weighbridge, logistics, billing, or ERP audits.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/contact')}
              className="bg-brand-secondary hover:bg-slate-800 border border-slate-700 text-white px-8 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
            >
              Consult with our Architect
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
