import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, MonitorPlay, RefreshCw, BarChart2, Rocket, Cloud, X, ChevronRight } from 'lucide-react';


function Figma({ size = 22 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 9h3.5a3.5 3.5 0 1 1-3.5 3.5V9z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
      <path d="M8.5 16a3.5 3.5 0 1 1 3.5 3.5V16H8.5z" />
    </svg>
  );
}


export default function TechShowcase() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'web-dev',
      title: 'Web Development',
      icon: Code2,
      tagline: 'High-speed modern websites.',
      color: 'cyan',
      description: 'We build blazing fast, responsive, and SEO-optimized web applications using React, Next.js, and modern CSS engines. Engineered for high conversion rates and flawless accessibility.',
      features: ['Server-Side Rendering (SSR)', 'SEO-Optimized Codebases', 'Ultra-Responsive Layouts', 'Headless CMS Integrations'],
    },
    {
      id: 'custom-software',
      title: 'Custom Software',
      icon: MonitorPlay,
      tagline: 'Tailored enterprise architectures.',
      color: 'purple',
      description: 'Scalable backend engines, secure API integrations, and robust database systems built to automate your core business operations. Designed for maximum throughput and reliability.',
      features: ['Microservices Architecture', 'Secure REST & GraphQL APIs', 'SQL & NoSQL Database Tuning', 'Real-time Event Processing'],
    },
    {
      id: 'digital-transform',
      title: 'Digital Transformation',
      icon: RefreshCw,
      tagline: 'Legacy system modernization.',
      color: 'emerald',
      description: 'Transition outdated operations into cloud-native infrastructures. We audit legacy workflows and upgrade them into modern automated systems that reduce overhead.',
      features: ['Cloud Migrations', 'Workflow Digitalization', 'System Audits & Security', 'Modernizing Legacy Code'],
    },
    {
      id: 'biz-automation',
      title: 'Business Automation',
      icon: BarChart2,
      tagline: 'Remove manual bottlenecks.',
      color: 'cyan',
      description: 'Streamline repetitive daily operations. We code custom scripts, integrate third-party APIs, and build dashboard monitors that save hours of human labor every week.',
      features: ['Automated Lead Ingestion', 'CRM & ERP Synced Pipelines', 'Custom Slack & Email Triggers', 'Reporting & Analysis Dashboards'],
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      icon: Figma,
      tagline: 'Framer-quality experiences.',
      color: 'purple',
      description: 'Stunning visual interfaces that captivate users. We craft responsive web layouts, custom design systems, and animated interactions with Stripe-like polish.',
      features: ['Custom Figma Prototypes', 'Design System Architecture', 'Interactive Micro-animations', 'User-testing & Accessibility'],
    },
    {
      id: 'mvp-dev',
      title: 'Startup MVP Development',
      icon: Rocket,
      tagline: 'Launch to market in 6 weeks.',
      color: 'emerald',
      description: 'Accelerate product-market validation. We design, code, and deploy lightweight, high-performance MVPs so founders can raise capital and acquire beta users fast.',
      features: ['Rapid Prototyping', 'Highly Extensible Tech Stacks', 'Analytics & Event Tracking', 'Iterative Feature Roadmaps'],
    },
    {
      id: 'cloud-deploy',
      title: 'Cloud Deployment',
      icon: Cloud,
      tagline: 'Secure, serverless scaling.',
      color: 'cyan',
      description: 'Deploy web projects globally. We set up robust AWS, Google Cloud, or Vercel configurations with automated CI/CD pipelines, DDoS security, and caching layers.',
      features: ['Automated CI/CD Pipelines', 'Serverless Functions & Edge API', 'SSL & WAF Security Rules', 'Auto-scaling & Monitoring'],
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-brand-midnight grid-bg-dots">
      {/* Decorative glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3">
            Technology Showcase
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display text-white">
            Future-Proof Engineering Solutions
          </h3>
          <p className="text-gray-400 mt-4 text-base md:text-lg">
            We build custom code architecture, modern digital platforms, and integrations engineered to drive measurable business velocity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            let cardClass = 'glass-card border-white/5 hover:border-brand-cyan/30 glow-cyan';
            let iconClass = 'text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20';
            
            if (svc.color === 'purple') {
              cardClass = 'glass-card border-white/5 hover:border-brand-purple/30 glow-purple';
              iconClass = 'text-brand-purple bg-brand-purple/10 border-brand-purple/20';
            } else if (svc.color === 'emerald') {
              cardClass = 'glass-card border-white/5 hover:border-brand-emerald/30 glow-emerald';
              iconClass = 'text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20';
            }

            return (
              <motion.div
                key={svc.id}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl p-6 text-left flex flex-col justify-between h-72 transition-all duration-300 ${cardClass}`}
              >
                <div>
                  <div className={`p-3 rounded-lg border w-fit mb-6 ${iconClass}`}>
                    <Icon size={22} />
                  </div>
                  <h4 className="text-lg font-bold font-display text-white mb-2">{svc.title}</h4>
                  <p className="text-xs font-mono text-gray-400 mb-3">{svc.tagline}</p>
                  <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">{svc.description}</p>
                </div>

                <button
                  onClick={() => setSelectedService(svc)}
                  className="mt-6 flex items-center space-x-1 text-xs font-semibold text-white/90 hover:text-brand-cyan transition-colors group cursor-pointer"
                >
                  <span>Learn More</span>
                  <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal Overlay */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-midnight/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg glass-card rounded-2xl border border-white/10 p-8 text-left bg-brand-navy shadow-2xl"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-lg border ${
                  selectedService.color === 'purple' ? 'text-brand-purple bg-brand-purple/10 border-brand-purple/20' :
                  selectedService.color === 'emerald' ? 'text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20' :
                  'text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20'
                }`}>
                  <selectedService.icon size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold font-display text-white">{selectedService.title}</h4>
                  <p className="text-xs font-mono text-gray-400 mt-0.5">{selectedService.tagline}</p>
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                {selectedService.description}
              </p>

              <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-3 font-mono">
                Key Offerings & Focus:
              </h5>
              <ul className="space-y-2">
                {selectedService.features.map((feat, i) => (
                  <li key={i} className="flex items-center space-x-2.5 text-sm text-gray-300">
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      selectedService.color === 'purple' ? 'bg-brand-purple' :
                      selectedService.color === 'emerald' ? 'bg-brand-emerald' :
                      'bg-brand-cyan'
                    }`} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center justify-end">
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold bg-white text-brand-midnight hover:bg-brand-cyan transition-colors"
                >
                  Consult on this service
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
