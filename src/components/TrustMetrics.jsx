import React, { useState, useEffect } from 'react';
import { Award, CheckCircle2, Heart, ShieldAlert } from 'lucide-react';

export default function TrustMetrics() {
  const metrics = [
    { id: 'projects', label: 'Projects Delivered', target: 124, suffix: '+', icon: CheckCircle2 },
    { id: 'clients', label: 'Happy Clients', target: 82, suffix: '+', icon: Heart },
    { id: 'experience', label: 'Years Experience', target: 13, suffix: '+', icon: Award },
    { id: 'solutions', label: 'Business Solutions', target: 240, suffix: '+', icon: ShieldAlert },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-brand-midnight border-t border-b border-white/5">
      {/* Tamil Pattern overlay */}
      <div className="absolute inset-0 tamil-pattern-overlay pointer-events-none opacity-[0.02]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((m) => (
            <MetricCard key={m.id} metric={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCard({ metric }) {
  const [count, setCount] = useState(0);
  const Icon = metric.icon;

  useEffect(() => {
    let start = 0;
    const end = metric.target;
    if (start === end) return;

    const duration = 2000; // 2 seconds
    const incrementTime = Math.max(Math.floor(duration / end), 15);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [metric.target]);

  return (
    <div className="glass-card rounded-2xl border border-white/5 p-6 text-center hover:border-brand-cyan/25 transition-all duration-300">
      <div className="mx-auto p-2.5 rounded-lg bg-white/5 w-fit text-brand-cyan mb-4">
        <Icon size={20} />
      </div>
      <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display flex justify-center items-center">
        <span>{count}</span>
        <span className="text-brand-cyan">{metric.suffix}</span>
      </div>
      <p className="text-xs md:text-sm text-gray-400 mt-2 font-medium tracking-wide">
        {metric.label}
      </p>
    </div>
  );
}
