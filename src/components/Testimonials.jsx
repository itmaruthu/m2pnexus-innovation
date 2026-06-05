import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'The technology architecture built by M2P Nexus accelerated our launch by 2 months. Absolutely elite React and cloud integration.',
      author: 'Karthik Raja',
      role: 'CTO, FinTech Startup',
      rating: 5,
    },
    {
      quote: "Sourcing talent with Priyanka's team was a game changer. We got 4 senior developers placed in 2 weeks who understand active development.",
      author: 'Subashini S.',
      role: 'VP of Engineering, EdTech Solutions',
      rating: 5,
    },
    {
      quote: 'Their workflow automations cut down our daily CRM manual synchronization times to zero. Highly recommend for business growth.',
      author: 'Ganesh Kumar',
      role: 'COO, Logistics Corp',
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // 6 seconds auto-rotate
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-brand-midnight grid-bg-lines">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Placeholder client logos */}
        {/* Replace with client logos */}
        <div className="mb-16 border-b border-white/5 pb-12">
          <p className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-6 text-center">TRUSTED BY TEAMS FROM</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-45 grayscale">
            {['AGRITECH', 'FINTECH CORP', 'EDTECH CELL', 'LOGISTICS LTD', 'SAAS ENGINE'].map((logo, idx) => (
              <span key={idx} className="text-sm font-bold tracking-widest text-white font-mono hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
                {logo}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 text-left">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-purple mb-3">
              Client Success
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
              What Our Growth Partners Say
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
              Hear directly from startup founders, product managers, and operations leaders who scale their technology and teams using M2P Nexus.
            </p>

            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full border border-white/10 hover:border-brand-purple/35 text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full border border-white/10 hover:border-brand-purple/35 text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Sliding Testimonial Card */}
          {/* Replace with actual client testimonials */}
          <div className="lg:col-span-7 relative h-72 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full glass-card rounded-2xl border border-brand-purple/20 p-8 text-left bg-gradient-to-tr from-brand-blue-deep/30 to-brand-midnight/40 relative shadow-lg"
              >
                <Quote className="absolute top-6 right-6 text-brand-purple/20" size={48} />
                
                {/* Star Rating */}
                <div className="flex space-x-1 text-brand-cyan mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                <p className="text-base text-gray-200 italic leading-relaxed mb-6">
                  "{testimonials[activeIndex].quote}"
                </p>

                <div>
                  <h4 className="text-sm font-bold text-white font-display">{testimonials[activeIndex].author}</h4>
                  <p className="text-xs text-brand-purple font-mono mt-0.5">{testimonials[activeIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Dots */}
            <div className="absolute bottom-[-24px] left-0 right-0 flex justify-center space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === i ? 'bg-brand-purple w-4' : 'bg-white/20'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
