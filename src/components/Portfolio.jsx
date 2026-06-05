import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Layers, Briefcase, ExternalLink, X, CheckCircle } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'tech', label: 'Tech Solutions' },
    { id: 'automation', label: 'Automations' },
    { id: 'talent', label: 'Talent Sourcing' },
  ];

  const projects = [
    {
      id: 'startup-web',
      name: 'FinTech Startup Platform',
      category: 'tech',
      industry: 'Financial Technology',
      stack: ['React', 'Node.js', 'Vite', 'PostgreSQL', 'AWS'],
      impact: 'Scaled user intake capacity by 400% with sub-100ms loading speeds.',
      details: 'A clean, high-performance portal featuring instant verification APIs, multi-currency wallets, and serverless background transactions.',
      comment: '<!-- Replace with portfolio project -->'
    },
    {
      id: 'biz-auto',
      name: 'Supply Chain Workflow Automation',
      category: 'automation',
      industry: 'Logistics & Distribution',
      stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Slack API', 'Twilio'],
      impact: 'Reduced weekly processing times by 24 hours of manual effort.',
      details: 'Custom internal notification and inventory tracking system that triggers automated sms and slack alerts upon warehouse arrivals.',
      comment: '<!-- Replace with portfolio project -->'
    },
    {
      id: 'recruitment-portal',
      name: 'Global Engineering Sourcing Portal',
      category: 'talent',
      industry: 'Human Resources & Talent',
      stack: ['React', 'Express', 'MongoDB', 'SendGrid', 'Tailwind'],
      impact: 'Delivered 85 pre-vetted engineers to scale client tech cells.',
      details: 'Candidate dashboard designed with interactive CV filters and video introduction screens, shortening the technical screening cycle.',
      comment: '<!-- Replace with portfolio project -->'
    },
    {
      id: 'crm-dashboard',
      name: 'Custom Sales CRM & Pipeline Tool',
      category: 'automation',
      industry: 'Real Estate & Brokerage',
      stack: ['Vite', 'React', 'Firebase', 'Chart.js'],
      impact: 'Increased lead-to-conversion rates by 34% in 60 days.',
      details: 'Visual Deal Board representing lead status cards, integrated with automated email followups and click-to-dial systems.',
      comment: '<!-- Replace with portfolio project -->'
    },
    {
      id: 'billing-software',
      name: 'Cloud Invoicing & Billing Engine',
      category: 'tech',
      industry: 'B2B Services',
      stack: ['React', 'Express', 'PostgreSQL', 'Stripe API'],
      impact: 'Automated subscription collection for 1,200+ monthly clients.',
      details: 'Robust invoicing SaaS solution featuring PDF invoice auto-generation, secure webhooks, and tiered subscription control policies.',
      comment: '<!-- Replace with portfolio project -->'
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-brand-midnight grid-bg-dots">
      {/* Glow decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-emerald/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-emerald mb-3">
            Case Studies
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display text-white">
            Portfolio Showcase
          </h3>
          <p className="text-gray-400 mt-4 text-base md:text-lg">
            A selection of custom technology solutions, recruitment cycles, and automated systems built for startups.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border cursor-pointer ${
                filter === cat.id
                  ? 'bg-brand-emerald text-brand-midnight border-transparent shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                  : 'bg-white/[0.02] border-white/5 text-gray-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-2xl border border-white/5 hover:border-brand-emerald/30 glow-emerald p-6 text-left flex flex-col justify-between h-80 transition-all duration-300 relative"
              >
                {/* Developer code comment display */}
                <span className="hidden">{proj.comment}</span>

                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3 font-mono">
                    <span>{proj.industry}</span>
                    <span className="uppercase tracking-wider text-brand-emerald">{proj.category}</span>
                  </div>

                  <h4 className="text-lg font-bold font-display text-white mb-2">{proj.name}</h4>
                  
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.stack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-white/5 text-[9px] font-mono text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="p-3 rounded-lg border border-brand-emerald/15 bg-brand-emerald/5 mb-4">
                    <p className="text-[11px] font-semibold text-brand-emerald-light leading-snug">
                      <strong>Impact:</strong> {proj.impact}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="flex items-center space-x-1.5 text-xs font-semibold text-white/90 hover:text-brand-emerald transition-colors group cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Case Study Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-midnight/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg glass-card rounded-2xl border border-white/10 p-8 text-left bg-brand-navy shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="mb-4 text-xs font-mono text-brand-emerald uppercase tracking-wider">
                {selectedProject.industry}
              </div>

              <h4 className="text-2xl font-bold font-display text-white mb-4">
                {selectedProject.name}
              </h4>

              <div className="p-4 rounded-xl border border-brand-emerald/20 bg-brand-emerald/5 mb-6">
                <div className="flex items-start space-x-2 text-brand-emerald-light">
                  <CheckCircle size={16} className="mt-0.5 shrink-0" />
                  <p className="text-xs font-semibold leading-relaxed">
                    <strong>Business Impact:</strong> {selectedProject.impact}
                  </p>
                </div>
              </div>

              <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-2 font-mono">
                System Implementation Overview:
              </h5>
              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                {selectedProject.details}
              </p>

              <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-2 font-mono">
                Technologies Integrated:
              </h5>
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.stack.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-xs font-mono text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-end">
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold bg-brand-emerald text-brand-midnight hover:bg-brand-emerald-light transition-colors"
                >
                  Request custom build audit
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
