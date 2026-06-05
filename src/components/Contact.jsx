import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'web-dev',
    message: '',
  });

  const [status, setStatus] = useState({ type: null, msg: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', msg: 'Please fill out all required fields.' });
      return;
    }

    // Simulate sending lead
    setStatus({ type: 'loading', msg: 'Submitting parameters...' });

    setTimeout(() => {
      setStatus({ type: 'success', msg: 'Thank you! Priyanka and Maruthu will reach out to you within 24 hours.' });
      setFormData({ name: '', email: '', phone: '', service: 'web-dev', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-brand-midnight grid-bg-dots">
      {/* Glow background */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3">
            Contact Us
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display text-white">
            Schedule a Free Consultation
          </h3>
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            Let's discuss how M2P Nexus can build your technology products, source expert engineers, or automate workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Contact Information & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Info details */}
            <div className="glass-card rounded-2xl border border-white/5 p-6 md:p-8 space-y-6 text-left">
              <h4 className="text-lg font-bold font-display text-white mb-4">Direct Connection</h4>
              
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan shrink-0">
                  <Phone size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400 font-mono uppercase tracking-wider">Call or WhatsApp</p>
                  <p className="text-sm font-semibold text-white mt-1">+91 99442 83316</p>
                  <p className="text-xs text-gray-400 mt-0.5">+91 63804 65605</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-lg bg-brand-purple/10 border border-brand-purple/20 text-brand-purple shrink-0">
                  <Mail size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400 font-mono uppercase tracking-wider">Email Inquiry</p>
                  <a href="mailto:hrpriyaanka@gmail.com" className="text-sm font-semibold text-white mt-1 hover:text-brand-purple transition-colors block">
                    hrpriyaanka@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-lg bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400 font-mono uppercase tracking-wider">Headquarters</p>
                  <p className="text-sm font-semibold text-white mt-1 leading-relaxed">
                    2/176 East Street, Sithalangudi, <br />
                    Madurai, Tamil Nadu - 625221, India
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps placeholder iframe */}
            {/* Replace with actual map embed */}
            <div className="w-full h-56 rounded-2xl overflow-hidden border border-white/5 relative bg-brand-navy">
              <iframe
                title="M2P Nexus Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.076856417743!2d77.9623838!3d10.0215329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c3b06385d8f7%3A0xe54ef396fa2f1c87!2sSithalangudi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1716942000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(85%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl border border-white/10 p-6 md:p-8 bg-gradient-to-tr from-brand-blue-deep/30 to-brand-midnight/60 h-full flex flex-col justify-between text-left">
              <div className="space-y-4">
                <h4 className="text-lg font-bold font-display text-white mb-2">Request callback</h4>
                
                {status.type === 'success' && (
                  <div className="p-4 rounded-xl border border-brand-emerald/20 bg-brand-emerald/10 text-brand-emerald flex items-start space-x-2.5">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 animate-bounce" />
                    <span className="text-xs font-semibold leading-relaxed">{status.msg}</span>
                  </div>
                )}

                {status.type === 'error' && (
                  <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 text-xs">
                    {status.msg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-gray-400 mb-1.5 font-bold">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-white/5 border border-white/5 rounded-lg px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/40"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-gray-400 mb-1.5 font-bold">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      className="w-full bg-white/5 border border-white/5 rounded-lg px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-gray-400 mb-1.5 font-bold">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 99442 83316"
                      className="w-full bg-white/5 border border-white/5 rounded-lg px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/40"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-gray-400 mb-1.5 font-bold">Consultation Area</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-brand-navy border border-white/5 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan/40"
                    >
                      <option value="web-dev">Web & Software Dev</option>
                      <option value="hr-talent">HR & Talent Acquisition</option>
                      <option value="automation">Workflow Automation</option>
                      <option value="growth">Growth & Client Acquisition</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-gray-400 mb-1.5 font-bold">Message Details *</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your requirements or hiring timelines..."
                    className="w-full bg-white/5 border border-white/5 rounded-lg px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/40 resize-none"
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg bg-gradient-to-r from-brand-cyan to-brand-purple text-brand-midnight font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-pointer"
                >
                  {status.type === 'loading' ? (
                    <div className="w-5 h-5 border-2 border-brand-midnight border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
