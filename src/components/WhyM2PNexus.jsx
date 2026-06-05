import React from 'react';
import { Check, X, ShieldAlert, Cpu, Users, TrendingUp } from 'lucide-react';

export default function WhyM2PNexus() {
  const comparisonItems = [
    {
      feature: 'Custom Software & Web Engineering',
      traditional: 'Charged hourly with high variance, minimal ongoing support.',
      nexus: 'Integrated product development led by elite software architects.',
      nexusStatus: true,
      traditionalStatus: false,
    },
    {
      feature: 'Tech Team Sourcing & Placement',
      traditional: 'Generic recruitment agencies charging high commissions without understanding technology.',
      nexus: 'Direct access to a pre-vetted, elite pipeline of React, Node, AI developers and QA engineers.',
      nexusStatus: true,
      traditionalStatus: false,
    },
    {
      feature: 'Business Process Automation',
      traditional: 'Standard SaaS templates that require manual integration and expensive configuration.',
      nexus: 'Custom automated workflows, CRM, and AI assistants tailored specifically to your workflows.',
      nexusStatus: true,
      traditionalStatus: false,
    },
    {
      feature: 'Growth & Client Acquisition Strategy',
      traditional: 'Fails to align marketing systems with actual engineering capabilities.',
      nexus: 'Automated lead acquisition engines paired with core software and CRM tools to drive growth.',
      nexusStatus: true,
      traditionalStatus: false,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-brand-midnight grid-bg-lines">
      {/* Decorative Blur background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-purple mb-3">
            Why M2P Nexus
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display text-white">
            Traditional Vendors Do One Thing. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-emerald">
              We Integrate Everything.
            </span>
          </h3>
          <p className="text-gray-400 mt-4 text-base md:text-lg">
            Siloed solutions cause alignment failures. M2P Nexus fuses high-end software development, elite talent placement, and automation into a single growth partnership.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Traditional Siloed Vendors */}
          <div className="glass-card rounded-2xl border border-white/5 p-8 text-left bg-gradient-to-b from-white/[0.01] to-transparent">
            <div className="flex items-center space-x-3 text-red-400 mb-6">
              <div className="p-2 rounded bg-red-400/10 border border-red-400/20">
                <ShieldAlert size={20} />
              </div>
              <h4 className="text-lg font-bold font-display text-white">Traditional Siloed Vendors</h4>
            </div>
            
            <p className="text-sm text-gray-400 mb-8">
              Working with separate IT agencies, recruitment brokers, and marketing consultants results in misaligned goals, communication delays, and fragmented systems.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3 pb-4 border-b border-white/5">
                <X className="text-red-400 mt-0.5 shrink-0" size={16} />
                <div>
                  <h5 className="text-sm font-semibold text-gray-200">Only Technology</h5>
                  <p className="text-xs text-gray-400 mt-0.5">Builds code but leaves you without talent to maintain or grow it.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 pb-4 border-b border-white/5">
                <X className="text-red-400 mt-0.5 shrink-0" size={16} />
                <div>
                  <h5 className="text-sm font-semibold text-gray-200">Only Recruitment</h5>
                  <p className="text-xs text-gray-400 mt-0.5">Sends resumes without verifying actual engineering capabilities on active codebases.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <X className="text-red-400 mt-0.5 shrink-0" size={16} />
                <div>
                  <h5 className="text-sm font-semibold text-gray-200">Only Growth Strategy</h5>
                  <p className="text-xs text-gray-400 mt-0.5">Hands over static slides but has zero ability to implement software pipelines.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Unified M2P Nexus Model */}
          <div className="glass-card rounded-2xl border border-brand-cyan/20 p-8 text-left bg-gradient-to-b from-brand-cyan/[0.03] to-transparent shadow-[0_0_30px_rgba(6,182,212,0.05)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center space-x-3 text-brand-cyan mb-6">
              <div className="p-2 rounded bg-brand-cyan/10 border border-brand-cyan/20">
                <Cpu size={20} className="animate-pulse" />
              </div>
              <h4 className="text-lg font-bold font-display text-white">The M2P Nexus Unified Model</h4>
            </div>

            <p className="text-sm text-gray-300 mb-8 font-medium">
              We sync technical architecture, expert talent scouting, and growth funnels under a unified strategy to accelerate time-to-market.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3 pb-4 border-b border-white/5">
                <Check className="text-brand-cyan mt-0.5 shrink-0" size={16} />
                <div>
                  <h5 className="text-sm font-semibold text-white">Technology Solutions</h5>
                  <p className="text-xs text-gray-300 mt-0.5">Robust custom code and business workflow automations deployed on secure cloud servers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 pb-4 border-b border-white/5">
                <Check className="text-brand-cyan mt-0.5 shrink-0" size={16} />
                <div>
                  <h5 className="text-sm font-semibold text-white">Talent Acquisition</h5>
                  <p className="text-xs text-gray-300 mt-0.5">We source, screen, and place engineers verified by our active technical leaders.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="text-brand-cyan mt-0.5 shrink-0" size={16} />
                <div>
                  <h5 className="text-sm font-semibold text-white">Growth Automation</h5>
                  <p className="text-xs text-gray-300 mt-0.5">Lead generation engines and CRM funnels custom-coded to scale sales pipeline velocity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="glass-card rounded-2xl border border-white/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.02] text-xs uppercase tracking-widest text-gray-400 font-bold font-mono">
                  <th className="p-5">Capability Matrix</th>
                  <th className="p-5 text-red-400/80">Traditional Vendors</th>
                  <th className="p-5 text-brand-cyan">M2P Nexus Solutions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm font-medium">
                {comparisonItems.map((item, index) => (
                  <tr key={index} className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-5 text-white font-semibold font-display">{item.feature}</td>
                    <td className="p-5 text-gray-400 text-xs font-normal max-w-xs">{item.traditional}</td>
                    <td className="p-5 text-gray-200 text-xs font-normal max-w-xs">{item.nexus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
