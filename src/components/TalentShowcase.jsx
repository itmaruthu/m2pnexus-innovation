import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, CheckSquare, ClipboardCheck, Award, TrendingUp, Search } from 'lucide-react';

export default function TalentShowcase() {
  const [pipelineState, setPipelineState] = useState({
    sourcing: 142,
    screening: 64,
    technical: 28,
    offers: 11,
  });

  const [activeStage, setActiveStage] = useState(null);

  // Simulate incoming candidates
  useEffect(() => {
    const interval = setInterval(() => {
      setPipelineState((prev) => {
        const addSourced = Math.random() > 0.4 ? 1 : 0;
        const screenAdvance = Math.random() > 0.7 ? 1 : 0;
        const techAdvance = Math.random() > 0.85 ? 1 : 0;
        const offerAdvance = Math.random() > 0.95 ? 1 : 0;

        return {
          sourcing: prev.sourcing + addSourced,
          screening: prev.screening + screenAdvance - (techAdvance ? 1 : 0),
          technical: prev.technical + techAdvance - (offerAdvance ? 1 : 0),
          offers: prev.offers + offerAdvance,
        };
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const talentServices = [
    {
      title: 'Talent Acquisition',
      icon: Search,
      desc: 'Sourcing elite software engineers, web developers, and growth executives. Verified technical vetting by engineering leads.',
    },
    {
      title: 'Fractional HR Leadership',
      icon: Award,
      desc: 'High-level HR operations, policy design, compliance, and culture blueprints for scaling startups without the overhead.',
    },
    {
      title: 'Workforce Planning & Org Design',
      icon: Users,
      desc: 'Strategic capacity planning, reporting hierarchies, and career growth ladder design to scale structural velocity.',
    },
    {
      title: 'Founder Advisory',
      icon: TrendingUp,
      desc: 'Executive advisory, performance monitoring frameworks, conflict mitigation, and compensation benchmarking strategy.',
    },
  ];

  const pipelineStages = [
    { id: 'sourcing', label: 'Sourcing & Outreach', count: pipelineState.sourcing, icon: Users, color: 'text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20' },
    { id: 'screening', label: 'Technical Screening', count: pipelineState.screening, icon: FileText, color: 'text-brand-purple bg-brand-purple/10 border-brand-purple/20' },
    { id: 'technical', label: 'System Architecture Interview', count: pipelineState.technical, icon: CheckSquare, color: 'text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20' },
    { id: 'offers', label: 'Hiring Decision & Offer', count: pipelineState.offers, icon: ClipboardCheck, color: 'text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20' },
  ];

  return (
    <section id="solutions" className="py-24 relative overflow-hidden bg-brand-midnight grid-bg-lines">
      {/* Background decorations */}
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Services & Title */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-purple mb-3">
              Talent & Human Capital
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
              Human Capital, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">
                Engineered with Intent.
              </span>
            </h3>
            
            <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
              We do not just hand over resumes. We engineer high-velocity teams by matching startups with elite professionals, vetted under active engineering supervision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {talentServices.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <div key={i} className="glass-card rounded-xl border border-white/5 p-5 hover:border-brand-purple/20 transition-all duration-300">
                    <div className="p-2 rounded bg-brand-purple/10 border border-brand-purple/20 w-fit text-brand-purple mb-3">
                      <Icon size={16} />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5">{svc.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{svc.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Hiring Pipeline Visualization */}
          <div className="lg:col-span-6">
            <div className="glass-card rounded-2xl border border-white/10 p-6 md:p-8 bg-gradient-to-tr from-brand-blue-deep/60 to-brand-midnight/80 relative">
              <div className="absolute top-4 right-4 flex items-center space-x-1.5 text-[10px] text-gray-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>LIVE SIMULATION</span>
              </div>

              <h4 className="text-md font-bold font-display text-white mb-1 text-left">Hiring Pipeline Status</h4>
              <p className="text-xs text-gray-400 text-left mb-6">Real-time candidate metrics matching current active engagements.</p>

              {/* Vertical Stages */}
              <div className="space-y-4">
                {pipelineStages.map((stage) => {
                  const Icon = stage.icon;
                  const isActive = activeStage === stage.id;

                  return (
                    <div
                      key={stage.id}
                      onMouseEnter={() => setActiveStage(stage.id)}
                      onMouseLeave={() => setActiveStage(null)}
                      className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                        isActive 
                        ? 'border-brand-purple/40 bg-brand-purple/5 translate-x-1 shadow-md shadow-brand-purple/5' 
                        : 'border-white/5 bg-white/[0.01]'
                      }`}
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className={`p-2.5 rounded-lg border shrink-0 ${stage.color}`}>
                          <Icon size={18} />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-semibold text-white leading-none">{stage.label}</p>
                          <p className="text-[10px] text-gray-400 font-mono mt-1">Status: Operational</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <motion.span 
                          key={stage.count}
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-lg font-bold font-mono text-white"
                        >
                          {stage.count}
                        </motion.span>
                        <p className="text-[9px] text-gray-400 font-mono mt-0.5">Candidates</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 border-t border-white/5 pt-4 text-left">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Average Time-to-Hire</span>
                  <span className="font-mono text-white font-bold">18 Days</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
                  <span>Candidate Vetting Passing Rate</span>
                  <span className="font-mono text-brand-purple font-bold">4.2%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
