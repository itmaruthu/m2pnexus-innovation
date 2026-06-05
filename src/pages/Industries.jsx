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
  Sparkles,
  ChevronRight,
  Shield,
  Activity,
  Hourglass
} from 'lucide-react';
import Seo from '../components/Seo';

// Client avatars
import clientAvatar1 from '../assets/client_avatar_1.png';
import clientAvatar2 from '../assets/client_avatar_2.png';
import clientAvatar3 from '../assets/client_avatar_3.png';

// Animation Variants
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

export default function Industries() {
  const navigate = useNavigate();
  const whatsappUrl = "https://wa.me/919944283316?text=Hello%20Maruthu%2C%0A%0AI%20visited%20the%20M2P%20Nexus%20website%20and%20would%20like%20to%20discuss%20my%20business%20requirements.%0A%0APlease%20contact%20me.%0A%0AThank%20you.";

  // Industries dataset with original text intact
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
      title: 'Retail',
      icon: ShoppingBag,
      challenge: 'Legacy GST billing systems are slow, complex, and fail during internet blackouts.',
      solution: 'Install a high-speed, localized bilingual billing software (Tamil/English) with local caching.',
      benefit: 'Zero transactional delays and faster checkout queues for traders.',
      client: 'Karthik Traders & Provisions',
      projectType: 'Bilingual POS Client',
      scope: 'Engineered high-speed, offline-first billing client supporting GST invoicing in Tamil & English.',
      tech: 'Vite, React, IndexedDB, Tailwind CSS'
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
      challenge: 'Uncoordinated driver logs, vehicle maintenance tracking, and raw fuel billing discrepancies.',
      solution: 'Deploy cloud transport portals tracking mileage, driver sheets, load counts, and maintenance dates.',
      benefit: 'Reduced fuel fraud and clean operational logs for transport networks.',
      client: 'Maruthi Transport & Logistics',
      projectType: 'Fleet Trip Manager',
      scope: 'Built driver log sheet validation, mileage tracking, and automatic invoice mapping scripts.',
      tech: 'React, Python, Fast API, PostgreSQL'
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
    }
  ];

  // Group columns for staggered desktop layout
  // Column 1: Manufacturing, Startups & SMEs
  // Column 2: Construction, EdTech, Retail
  // Column 3: Agriculture, Logistics
  const column1 = [industriesList[0], industriesList[6]];
  const column2 = [industriesList[1], industriesList[4], industriesList[3]];
  const column3 = [industriesList[2], industriesList[5]];

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

      <div className="bg-gradient-to-br from-[#030712] via-[#080f24] to-[#020617] text-white min-h-screen relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-[30%] right-10 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[20%] left-10 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Subtle abstract grid lines overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-[0.08] pointer-events-none"></div>

        {/* HERO SECTION */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 text-center z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-widest font-heading shadow-[0_0_15px_rgba(59,130,246,0.1)]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Sectors We Empower
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400"
            >
              Industries We Serve
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
              Tailored software systems and technology-led consulting built on deep operational analysis, solving real-world business bottlenecks.
            </motion.p>
          </motion.div>
        </section>

        {/* INDUSTRY CARDS SECTION (STAGGERED LAYOUT) */}
        <section className="py-16 md:py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest font-heading">Client Success Portfolios</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                Proven Cases & Custom Architectures
              </h2>
              <p className="text-base text-slate-400 leading-relaxed">
                We design specialized operational software modeled on physical operational floor workflows. Explore our active sector portfolios below.
              </p>
            </div>

            {/* 3-Column Staggered Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              {/* COLUMN 1 */}
              <div className="space-y-8 flex flex-col">
                {column1.map((ind, idx) => {
                  const Icon = ind.icon;
                  return <IndustryCard key={idx} ind={ind} Icon={Icon} navigate={navigate} whatsappUrl={whatsappUrl} />;
                })}
              </div>

              {/* COLUMN 2 (STAGGERED DOWNWARDS ON DESKTOP) */}
              <div className="space-y-8 lg:translate-y-10 flex flex-col">
                {column2.map((ind, idx) => {
                  const Icon = ind.icon;
                  return <IndustryCard key={idx} ind={ind} Icon={Icon} navigate={navigate} whatsappUrl={whatsappUrl} />;
                })}
              </div>

              {/* COLUMN 3 (STAGGERED EVEN MORE ON DESKTOP) */}
              <div className="space-y-8 lg:translate-y-20 flex flex-col">
                {column3.map((ind, idx) => {
                  const Icon = ind.icon;
                  return <IndustryCard key={idx} ind={ind} Icon={Icon} navigate={navigate} whatsappUrl={whatsappUrl} />;
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Spacer to balance the staggered bottom gap */}
        <div className="hidden lg:block h-28"></div>

        {/* CLIENT TESTIMONIALS SECTION */}
        <section className="py-20 md:py-28 relative z-10 border-t border-white/[0.06] bg-slate-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest font-heading">Endorsements</span>
              <h2 className="text-3xl font-extrabold font-heading text-white">
                Feedback from Business Leaders
              </h2>
              <p className="text-base text-slate-400">
                Verified performance feedback from manufacturing directors, agribusiness founders, and retailers we support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.02] backdrop-blur-md border border-white/[0.06] p-8 rounded-3xl flex flex-col justify-between hover:border-blue-500/20 hover:bg-white/[0.04] transition-all duration-300 shadow-2xl relative group"
                >
                  <div className="absolute top-0 right-8 w-12 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="space-y-6">
                    {/* Rating Stars */}
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    {/* Quote Text */}
                    <p className="text-sm italic text-slate-300 leading-relaxed text-left">
                      "{t.quote}"
                    </p>
                  </div>
                  {/* User Profile */}
                  <div className="flex items-center gap-4 border-t border-white/[0.06] pt-6 mt-6 text-left">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/20 bg-slate-900 shrink-0">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm font-heading leading-snug">{t.name}</h4>
                      <p className="text-[10px] text-blue-400 font-semibold tracking-wider uppercase font-heading">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PERFORMANCE RATING & SCORES */}
        <section className="py-20 md:py-28 relative z-10 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Overall Rating Score */}
              <div className="lg:col-span-5 bg-white/[0.02] backdrop-blur-md border border-white/[0.07] p-8 rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest font-heading">Performance Audit</span>
                
                <div className="space-y-4 relative z-10">
                  <div className="inline-flex items-center justify-center w-28 h-28 rounded-full border-4 border-blue-500/30 bg-blue-500/5 shadow-[0_0_25px_rgba(59,130,246,0.2)]">
                    <span className="text-5xl font-extrabold text-white font-heading">4.9</span>
                  </div>
                  
                  <div className="flex justify-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">Verified Average Across 50+ Modules</p>
                </div>
                
                <div className="border-t border-white/[0.06] pt-6 relative z-10">
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "Our engineering philosophy focuses on high operations yields and low-friction, zero-training adoption for operators on the floor."
                  </p>
                </div>
              </div>

              {/* Right Column: Breakdown */}
              <div className="lg:col-span-7 space-y-8 text-left">
                <div className="space-y-3">
                  <h2 className="text-3xl font-extrabold font-heading text-white">
                    Review Breakdown & Audit Scores
                  </h2>
                  <p className="text-sm text-slate-400">
                    How our software architectures perform on third-party security audits and client reviews:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {reviewBreakdown.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-white/[0.02] border border-white/[0.06] p-6 rounded-2xl flex gap-4 hover:border-blue-500/20 hover:bg-white/[0.03] transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-white text-sm font-heading leading-snug">{item.label}</h4>
                            <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">{item.score}</span>
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA CONSULTATION SECTION */}
        <section className="relative py-20 text-center overflow-hidden border-t border-white/[0.06]">
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white">
              Need custom tech integration for your sector?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
              Discuss your system constraints directly with our tech director. Get custom weighbridge, logistics, billing, or ERP audits.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all cursor-pointer border border-blue-400/20"
              >
                Consult with our Architect
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// Reusable IndustryCard Component
function IndustryCard({ ind, Icon, navigate, whatsappUrl }) {
  return (
    <div className="bg-white/[0.02] backdrop-blur-md border border-white/[0.06] rounded-[2.5rem] p-6 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between min-h-[460px] group shadow-2xl relative overflow-hidden">
      {/* Visual Accent Glow on Hover */}
      <div className="absolute -right-16 -top-16 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="space-y-6">
        {/* Card Header */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:scale-105 transition-transform duration-300">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white font-heading tracking-tight">{ind.title}</h3>
        </div>

        {/* Details Breakdown */}
        <div className="space-y-4 text-xs text-left">
          {/* Challenge */}
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-red-400/80 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-heading">Operational Challenge</span>
              <p className="text-slate-300 leading-relaxed font-medium">{ind.challenge}</p>
            </div>
          </div>

          {/* Solution */}
          <div className="flex gap-3">
            <Lightbulb className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest font-heading">Targeted Solution</span>
              <p className="text-blue-300 leading-relaxed font-semibold">{ind.solution}</p>
            </div>
          </div>

          {/* Primary Benefit */}
          <div className="flex gap-3 bg-white/[0.01] border border-white/[0.04] p-3 rounded-2xl">
            <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest font-heading">Operational Benefit</span>
              <p className="text-slate-300 leading-relaxed font-medium">{ind.benefit}</p>
            </div>
          </div>

          {/* Case Study Summary */}
          <div className="bg-white/[0.02] border border-white/[0.05] p-4 rounded-2xl space-y-2.5">
            <div className="flex justify-between items-center flex-wrap gap-2">
              <span className="font-extrabold text-white text-xs font-heading">Client: {ind.client}</span>
              <span className="font-mono text-blue-300 text-[9px] bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">{ind.projectType}</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-[11px]"><strong className="text-white font-semibold">Scope:</strong> {ind.scope}</p>
            <p className="text-blue-300/80 font-mono text-[9px] pt-2 border-t border-white/[0.04]"><strong className="text-slate-400 font-sans font-bold uppercase text-[8px] tracking-wider pr-1">Tech Stack:</strong> {ind.tech}</p>
          </div>
        </div>
      </div>

      {/* Action Links */}
      <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between">
        <button
          onClick={() => navigate('/contact')}
          className="text-xs font-bold text-slate-300 hover:text-white hover:underline cursor-pointer flex items-center gap-1"
        >
          Enquire for Sector
          <ChevronRight className="w-3 h-3" />
        </button>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-emerald-400 hover:text-emerald-300 cursor-pointer"
        >
          WhatsApp Us
        </a>
      </div>
    </div>
  );
}
