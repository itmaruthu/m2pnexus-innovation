import React, { useState } from 'react';
import { Eye, Map, Cpu, Zap, LineChart } from 'lucide-react';

export default function Journey() {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      num: '01',
      title: 'Discover',
      tagline: 'Audit & Analysis',
      icon: Eye,
      description: 'We audit your technical systems, analyze workflow friction, map HR resource gaps, and outline core conversion parameters.',
      color: 'cyan',
    },
    {
      num: '02',
      title: 'Plan',
      tagline: 'Architecture & Sourcing Strategy',
      icon: Map,
      description: 'We draft your software development architecture, design recruitment screening profiles, and plan automated growth funnels.',
      color: 'purple',
    },
    {
      num: '03',
      title: 'Build',
      tagline: 'Development & Placement Sprints',
      icon: Cpu,
      description: 'Our software cell writes clean code while our talent advisors source and vet candidates to integrate directly into your operations.',
      color: 'emerald',
    },
    {
      num: '04',
      title: 'Scale',
      tagline: 'Cloud Deployment & Team Ramp',
      icon: Zap,
      description: 'We deploy web architectures on secure serverless clouds and finalize executive onboarding to ensure teams hit velocity.',
      color: 'cyan',
    },
    {
      num: '05',
      title: 'Grow',
      tagline: 'Continuous Analytics & Optimization',
      icon: LineChart,
      description: 'We monitor conversion trends, audit security logs, adjust HR policies, and iteratively deploy patches to maximize business throughput.',
      color: 'purple',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-brand-midnight grid-bg-lines">
      {/* Glow decorations */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-purple mb-3">
            Business Process Journey
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display text-white">
            Our Scale Methodology
          </h3>
          <p className="text-gray-400 mt-4 text-base md:text-lg">
            From initial operational discovery to full-scale technical execution, we align engineering and hiring with precision.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-white/5 max-w-3xl mx-auto pl-8 sm:pl-12 space-y-12 text-left">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isHovered = hoveredStep === idx;
            
            let colorBorder = 'border-white/10 text-gray-500';
            let bgCircle = 'bg-brand-midnight';
            
            if (isHovered) {
              if (step.color === 'cyan') {
                colorBorder = 'border-brand-cyan text-brand-cyan shadow-[0_0_15px_rgba(6,182,212,0.3)]';
                bgCircle = 'bg-brand-cyan/10';
              } else if (step.color === 'purple') {
                colorBorder = 'border-brand-purple text-brand-purple shadow-[0_0_15px_rgba(139,92,246,0.3)]';
                bgCircle = 'bg-brand-purple/10';
              } else {
                colorBorder = 'border-brand-emerald text-brand-emerald shadow-[0_0_15px_rgba(16,185,129,0.3)]';
                bgCircle = 'bg-brand-emerald/10';
              }
            }

            return (
              <div
                key={step.num}
                onMouseEnter={() => setHoveredStep(idx)}
                onMouseLeave={() => setHoveredStep(null)}
                className="relative group transition-all duration-300"
              >
                {/* Step Circle Node */}
                <div className={`absolute left-[-41px] sm:left-[-57px] top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-all duration-300 z-10 ${colorBorder} ${bgCircle}`}>
                  <span className="text-[10px] sm:text-xs font-bold font-mono">{step.num}</span>
                </div>

                {/* Step Card Content */}
                <div className={`p-6 rounded-xl border transition-all duration-300 ${
                  isHovered 
                  ? 'border-white/10 bg-white/[0.02] translate-x-1' 
                  : 'border-white/5 bg-transparent'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded border w-fit ${
                        isHovered && step.color === 'cyan' ? 'text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20' :
                        isHovered && step.color === 'purple' ? 'text-brand-purple bg-brand-purple/10 border-brand-purple/20' :
                        isHovered && step.color === 'emerald' ? 'text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20' :
                        'text-gray-400 bg-white/5 border-white/5'
                      } transition-all duration-300`}>
                        <Icon size={16} />
                      </div>
                      <h4 className="text-lg font-bold font-display text-white">{step.title}</h4>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase">{step.tagline}</span>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed pl-0 sm:pl-10">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
