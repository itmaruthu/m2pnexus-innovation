import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyM2PNexus from './components/WhyM2PNexus';
import TechShowcase from './components/TechShowcase';
import TalentShowcase from './components/TalentShowcase';
import InnovationLab from './components/InnovationLab';
import Journey from './components/Journey';
import Portfolio from './components/Portfolio';
import TrustMetrics from './components/TrustMetrics';
import Founders from './components/Founders';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppCallWidget from './components/WhatsAppCallWidget';
import AIAssistant from './components/AIAssistant';

function App() {
  return (
    <div className="min-h-screen bg-brand-midnight text-gray-100 selection:bg-brand-cyan selection:text-brand-midnight font-sans relative">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Trust Counters */}
      <TrustMetrics />

      {/* Why M2P Nexus Comparison Grid */}
      <WhyM2PNexus />

      {/* Technical Services Showcase */}
      <TechShowcase />

      {/* HR & Talent Showcase */}
      <TalentShowcase />

      {/* Innovation Lab Mockups */}
      <InnovationLab />

      {/* Business Process Journey */}
      <Journey />

      {/* Filterable Portfolio */}
      <Portfolio />

      {/* Meet the Founders Profiles */}
      <Founders />

      {/* Client Success Slider */}
      <Testimonials />

      {/* Consultation Contact Form & Maps */}
      <Contact />

      {/* Directory Footer */}
      <Footer />

      {/* Floating Action Overlays */}
      <WhatsAppCallWidget />
      <AIAssistant />
    </div>
  );
}

export default App;
