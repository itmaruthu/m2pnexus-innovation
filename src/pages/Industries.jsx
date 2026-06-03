import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Factory,
  Wrench,
  Building2,
  ShoppingBag,
  Leaf,
  HeartPulse,
  GraduationCap,
  Truck,
  Hotel,
  Briefcase,
  Rocket,
  AlertTriangle,
  Lightbulb,
  Check
} from 'lucide-react';
import Seo from '../components/Seo';

export default function Industries() {
  const navigate = useNavigate();
  const whatsappUrl = "https://wa.me/919944283316?text=Hello%20Maruthu%2C%0A%0AI%20visited%20the%20M2P%20Nexus%20website%20and%20would%20like%20to%20discuss%20my%20business%20requirements.%0A%0APlease%20contact%20me.%0A%0AThank%20you.";

  const industriesList = [
    {
      title: 'Manufacturing',
      icon: Factory,
      challenge: 'Manual stock calculations and scrap tracking lead to raw material leakages and delayed billing records.',
      solution: 'Deploy custom material registries and batch-tracking dashboards configured for the factory floor.',
      benefit: 'Complete visibility of material lifecycle and accurate raw scrap records.'
    },
    {
      title: 'Engineering',
      icon: Wrench,
      challenge: 'Difficulties coordinating production schedules, material issues, and machine maintenance records.',
      solution: 'Configure a localized, real-time resource and scheduling ERP that works on factory-floor terminals.',
      benefit: 'Reduced machine downtime and unified project billing tracking.'
    },
    {
      title: 'Construction',
      icon: Building2,
      challenge: 'Vulnerable spreadsheet tracking of sand, steel, cement deliveries, and sub-contractor accounts.',
      solution: 'A secure cloud database application tracking logistics, material weights, and billing vouchers.',
      benefit: 'Elimination of double entries and material delivery discrepancies.'
    },
    {
      title: 'Retail',
      icon: ShoppingBag,
      challenge: 'Legacy GST billing systems are slow, complex, and fail during internet blackouts.',
      solution: 'Install a high-speed, localized bilingual billing software (Tamil/English) with local caching.',
      benefit: 'Zero transactional delays and faster checkout queues for traders.'
    },
    {
      title: 'Agriculture',
      icon: Leaf,
      challenge: 'Fluctuating batch prices, commission tracking, and logistics coordinating for bulk traders.',
      solution: 'A targeted agribusiness ERP tracking batch weights, driver logs, commissions, and farmer invoices.',
      benefit: 'Immediate settlements, transparent accounts, and optimized crop logistics.'
    },
    {
      title: 'Healthcare',
      icon: HeartPulse,
      challenge: 'Complex staff duty rotas and slow inventory updates for medical equipment and medications.',
      solution: 'Configure lightweight, responsive clinical duty planners and automatic stock warning alerts.',
      benefit: 'Seamless ward handovers and reduced medication inventory waste.'
    },
    {
      title: 'Education',
      icon: GraduationCap,
      challenge: 'Siloed student records, manually compiled marks, and expensive, hard-to-use learning platforms.',
      solution: 'Lightweight cloud portals for central student tracking, automated GPA compilation, and parent notifications.',
      benefit: 'Reduced admin overhead and secure, centralized academic data.'
    },
    {
      title: 'Logistics',
      icon: Truck,
      challenge: 'Uncoordinated driver logs, vehicle maintenance tracking, and raw fuel billing discrepancies.',
      solution: 'Deploy cloud transport portals tracking mileage, driver sheets, load counts, and maintenance dates.',
      benefit: 'Reduced fuel fraud and clean operational logs for transport networks.'
    },
    {
      title: 'Hospitality',
      icon: Hotel,
      challenge: 'High staff turnover rates and uncoordinated booking registries across multiple web portals.',
      solution: 'Lightweight room/table booking consolidators and intuitive staff rota schedules.',
      benefit: 'Reduced booking overlaps and efficient kitchen rota alignments.'
    },
    {
      title: 'Corporate Services',
      icon: Briefcase,
      challenge: 'Administrative staff spent hours manually copying data from documents into reports.',
      solution: 'Setup automated script engines and AI extractors to compile invoices and draft communications.',
      benefit: 'Hundreds of administrative hours redirected back to core client support.'
    },
    {
      title: 'Startups & SMEs',
      icon: Rocket,
      challenge: 'Bloated software quotes, long wait times, and failure to establish a digital authority.',
      solution: 'Rapid, cost-effective MVP development, sleek SEO websites, and flexible cloud systems.',
      benefit: 'Faster market entry and premium corporate digital presence.'
    }
  ];

  return (
    <>
      <Seo
        title="Industries We Serve - Custom ERP & Tech Architectures"
        description="M2P Nexus serves manufacturing, engineering, agriculture, retail, and construction sectors with custom software engineered around specific industry challenges."
      />

      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/30 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
            Industries We Serve
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We deliver tailor-made solutions for critical economic sectors. From steel mills to agricultural trade corridors.
          </p>
        </div>
      </section>

      {/* Industry Grid Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-semibold text-brand-secondary uppercase tracking-widest font-heading">Sectors</span>
            <h2 className="text-3xl font-extrabold text-brand-primary font-heading">
              Custom Technological Integration For Your Field
            </h2>
            <p className="text-base text-brand-text">
              We do not expect your teams to adapt to our systems. We build systems that match your field operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesList.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-section border border-brand-border rounded-xl p-8 hover:border-brand-accent/50 hover:shadow-md transition-all flex flex-col justify-between"
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
                        <div className="space-y-1">
                          <span className="text-xs font-bold text-slate-400 uppercase font-heading">Challenge</span>
                          <p className="text-brand-text leading-relaxed">{ind.challenge}</p>
                        </div>
                      </div>

                      {/* Solution */}
                      <div className="flex gap-2">
                        <Lightbulb className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <span className="text-xs font-bold text-brand-secondary uppercase font-heading">Our Solution</span>
                          <p className="text-brand-primary font-medium leading-relaxed">{ind.solution}</p>
                        </div>
                      </div>

                      {/* Benefit */}
                      <div className="flex gap-2 bg-white p-3 rounded-md border border-brand-border">
                        <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-emerald-600 uppercase font-heading">Primary Benefit</span>
                          <p className="text-brand-text leading-relaxed text-xs">{ind.benefit}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 pt-4 border-t border-brand-border flex items-center justify-between">
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-heading">
            Don't See Your Industry Listed Here?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            M2P Nexus has a highly adaptable engineering core. We can build custom database solutions, ERP extensions, and reporting automation dashboards for any operational model.
          </p>
          <div className="pt-2">
            <a
              href="mailto:m2pnexus2026@gmail.com?subject=Custom%20Industry%20Tech%20Request"
              className="bg-brand-secondary text-white hover:bg-slate-800 border border-slate-700 px-8 py-3 rounded-md text-sm font-semibold transition-colors cursor-pointer inline-block"
            >
              Consult with our Architect
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
