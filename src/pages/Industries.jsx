import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Check,
  Star,
  ShieldCheck,
  Zap,
  Users
} from 'lucide-react';
import Seo from '../components/Seo';

// Client avatars
import clientAvatar1 from '../assets/client_avatar_1.png';
import clientAvatar2 from '../assets/client_avatar_2.png';
import clientAvatar3 from '../assets/client_avatar_3.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Industries() {
  const navigate = useNavigate();
  const whatsappUrl = "https://wa.me/919944283316?text=Hello%20Maruthu%2C%0A%0AI%20visited%20the%20M2P%20Nexus%20website%20and%20would%20like%20to%20discuss%20my%20business%20requirements.%0A%0APlease%20contact%20me.%0A%0AThank%20you.";

  const industriesList = [
    {
      index: '01',
      title: 'Manufacturing',
      challenge: 'Manual stock calculations and scrap tracking lead to raw material leakages and delayed billing records.',
      solution: 'Deploy custom material registries and batch-tracking dashboards configured for the factory floor.',
      impact: 'Achieved near-zero inventory discrepancies with automated scrap reconciliation.',
      metricValue: '-99.8%',
      metricLabel: 'Inventory Error Rate'
    },
    {
      index: '02',
      title: 'Construction',
      challenge: 'Vulnerable spreadsheet tracking of sand, steel, cement deliveries, and sub-contractor accounts.',
      solution: 'A secure cloud database application tracking logistics, material weights, and billing vouchers.',
      impact: 'Complete elimination of double billing and material shipping discrepancies.',
      metricValue: '100%',
      metricLabel: 'Audit Compliance'
    },
    {
      index: '03',
      title: 'Agriculture',
      challenge: 'Fluctuating batch prices, commission tracking, and logistics coordinating for bulk traders.',
      solution: 'A targeted agribusiness ERP tracking batch weights, driver logs, commissions, and farmer invoices.',
      impact: 'Accelerated post-harvest payment loops, ensuring immediate settlements for bulk traders.',
      metricValue: '35%',
      metricLabel: 'Faster Settlements'
    },
    {
      index: '04',
      title: 'Startups & SMEs',
      challenge: 'Bloated software quotes, long wait times, and failure to establish a digital authority.',
      solution: 'Rapid, cost-effective MVP development, sleek SEO websites, and flexible cloud systems.',
      impact: 'Delivered production-ready MVPs within weeks instead of months, accelerating customer feedback.',
      metricValue: '3x',
      metricLabel: 'Time-to-Market Speed'
    },
    {
      index: '05',
      title: 'EdTech',
      challenge: 'Siloed student records, manually compiled marks, and expensive, hard-to-use learning platforms.',
      solution: 'Lightweight cloud portals for central student tracking, automated GPA compilation, and parent notifications.',
      impact: 'Automated grades and attendance reporting, eliminating manual compilation workflows.',
      metricValue: '92%',
      metricLabel: 'Admin Overhead Saved'
    },
    {
      index: '06',
      title: 'Logistics',
      challenge: 'Uncoordinated driver logs, vehicle maintenance tracking, and fuel billing discrepancies.',
      solution: 'Deploy cloud transport portals tracking mileage, driver sheets, load counts, and maintenance dates.',
      impact: 'Mitigated fuel billing discrepancies using digital odometer verification and trip matching.',
      metricValue: '15%',
      metricLabel: 'Fuel Costs Saved'
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
      <section className="bg-brand-primary text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/30 to-transparent"></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading"
          >
            Our Worked Industries
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Discover the sectors we have modernized and read verified feedback from business leaders we support.
          </motion.p>
        </motion.div>
      </section>

      {/* Industry Horizontal Blocks Section */}
      <section className="py-24 md:py-32 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="space-y-6 mb-20 md:mb-28 text-left max-w-4xl">
            <span className="text-xs font-semibold text-brand-secondary uppercase tracking-widest font-heading">
              Worked Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-brand-primary tracking-tight font-heading leading-tight">
              Tailored Integrations &amp; <br />
              <span className="font-semibold text-brand-secondary">Business Impact.</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-text font-light leading-relaxed max-w-2xl">
              A precise analysis of operational bottlenecks and the custom digital resolutions deployed across core industries.
            </p>
          </div>

          {/* Horizontal Storytelling Rows */}
          <div className="divide-y divide-slate-100 border-t border-slate-100">
            {industriesList.map((ind, idx) => {
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-baseline first:pt-16 last:pb-0"
                >
                  {/* Column 1: Industry */}
                  <div className="lg:col-span-2 md:col-span-2 space-y-1">
                    <span className="font-mono text-[10px] text-slate-400 font-semibold tracking-wider block leading-none mb-1">
                      {ind.index} /
                    </span>
                    <h3 className="text-lg font-bold text-brand-primary tracking-tight font-heading uppercase">
                      {ind.title}
                    </h3>
                  </div>

                  {/* Column 2: Challenge */}
                  <div className="lg:col-span-3 space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-heading block">
                      Challenge
                    </span>
                    <p className="text-slate-600 text-sm font-light leading-relaxed">
                      {ind.challenge}
                    </p>
                  </div>

                  {/* Column 3: Solution */}
                  <div className="lg:col-span-3 space-y-2">
                    <span className="text-[10px] font-bold text-brand-secondary uppercase tracking-widest font-heading block">
                      Solution
                    </span>
                    <p className="text-slate-900 text-sm font-normal leading-relaxed">
                      {ind.solution}
                    </p>
                  </div>

                  {/* Column 4: Business Impact */}
                  <div className="lg:col-span-2 space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-heading block">
                      Business Impact
                    </span>
                    <p className="text-slate-600 text-sm font-light leading-relaxed">
                      {ind.impact}
                    </p>
                  </div>

                  {/* Column 5: KPI Metric */}
                  <div className="lg:col-span-2 text-left lg:text-right space-y-1 self-start lg:self-auto">
                    <div className="text-4xl md:text-5xl font-extralight text-brand-secondary tracking-tight font-heading leading-none">
                      {ind.metricValue}
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                      {ind.metricLabel}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-16 md:py-24 bg-brand-section border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-semibold text-brand-accent uppercase tracking-widest font-heading">Testimonials</span>
            <h2 className="text-3xl font-extrabold text-brand-primary font-heading">
              Feedback from Business Owners
            </h2>
            <p className="text-base text-brand-text">
              Real reviews from manufacturing directors, agribusiness founders, and retailers we support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white border border-brand-border p-6 rounded-xl flex flex-col justify-between shadow-xs space-y-6">
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
                <div className="flex items-center gap-3 border-t border-brand-border pt-4 text-left">
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
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Overall Rating Score */}
            <div className="lg:col-span-5 bg-brand-section border border-brand-border p-8 rounded-2xl text-center space-y-6 shadow-xs">
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
                  Review Breakdown &amp; Audit Scores
                </h2>
                <p className="text-sm text-brand-text">
                  How we score on third-party reviews and independent software architecture audits:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {reviewBreakdown.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-brand-section border border-brand-border p-5 rounded-lg flex gap-4">
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
      <section className="bg-brand-primary text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-heading">
            Need custom tech integration for your sector?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            Discuss your system constraints directly with our tech director. Get custom weighbridge, logistics, billing, or ERP audits.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/contact')}
              className="bg-brand-secondary text-white hover:bg-slate-800 border border-slate-700 px-8 py-3 rounded-md text-sm font-semibold transition-colors cursor-pointer"
            >
              Consult with our Architect
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
