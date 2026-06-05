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

      {/* Industry Grid Section */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-semibold text-brand-secondary uppercase tracking-widest font-heading">Sectors</span>
            <h2 className="text-3xl font-extrabold text-brand-primary font-heading">
              Tailored Integrations &amp; Worked Client Cases
            </h2>
            <p className="text-base text-brand-text">
              We study the physical constraints of each sector on the floor before writing code. Review our client cases below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesList.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  className="bg-brand-section border border-brand-border rounded-xl p-6 hover:border-brand-accent/50 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white border border-brand-border rounded-lg flex items-center justify-center text-brand-secondary shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-brand-primary font-heading">{ind.title}</h3>
                    </div>

                    {/* Breakdown */}
                    <div className="space-y-4 text-sm text-left">
                      {/* Challenge */}
                      <div className="flex gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <span className="text-xs font-bold text-slate-400 uppercase font-heading">Challenge</span>
                          <p className="text-brand-text leading-relaxed text-xs">{ind.challenge}</p>
                        </div>
                      </div>

                      {/* Solution */}
                      <div className="flex gap-2">
                        <Lightbulb className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <span className="text-xs font-bold text-brand-secondary uppercase font-heading">Our Solution</span>
                          <p className="text-brand-primary font-medium leading-relaxed text-xs">{ind.solution}</p>
                        </div>
                      </div>

                      {/* Benefit */}
                      <div className="flex gap-2 bg-white p-3 rounded-md border border-brand-border">
                        <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <span className="text-[10px] font-bold text-emerald-600 uppercase font-heading">Primary Benefit</span>
                          <p className="text-brand-text leading-relaxed text-xs">{ind.benefit}</p>
                        </div>
                      </div>

                      {/* Case details */}
                      <div className="bg-white border border-brand-border/60 p-4 rounded-lg space-y-2 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="font-extrabold text-brand-primary font-heading">Client: {ind.client}</span>
                          <span className="font-mono text-brand-secondary text-[9px] bg-brand-section border border-brand-border px-2 py-0.5 rounded-full font-bold">{ind.projectType}</span>
                        </div>
                        <p className="text-brand-text leading-relaxed"><strong className="text-brand-primary">Scope:</strong> {ind.scope}</p>
                        <p className="text-brand-text font-mono text-[9px] pt-1 border-t border-brand-border/50"><strong className="text-brand-primary font-sans font-bold">Tech Stack:</strong> {ind.tech}</p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-brand-border flex items-center justify-between">
                    <button
                      onClick={() => navigate('/contact')}
                      className="text-xs font-bold text-brand-secondary hover:text-brand-primary cursor-pointer"
                    >
                      Enquire for this sector
                    </button>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-emerald-600 hover:text-emerald-500 cursor-pointer"
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
