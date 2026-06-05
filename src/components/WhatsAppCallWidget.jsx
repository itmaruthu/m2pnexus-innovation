import React, { useState } from 'react';
import { MessageSquare, Phone, X, ExternalLink, ChevronUp } from 'lucide-react';

export default function WhatsAppCallWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '9944283316';
  
  const quickActions = [
    { label: 'Website Development', text: 'Hello M2P Nexus, I would like to discuss Website Development requirements.' },
    { label: 'Recruitment Services', text: 'Hello M2P Nexus, I am interested in Recruitment Services for my company.' },
    { label: 'HR Consulting', text: 'Hello M2P Nexus, I want to discuss HR Consulting and workforce planning.' },
    { label: 'Business Automation', text: 'Hello M2P Nexus, I would like to set up Business Automation systems.' },
    { label: 'Talk to Founder', text: 'Hello M2P Nexus, I would like to schedule a direct call with the founders.' },
  ];

  const getWhatsAppUrl = (text) => {
    const encoded = encodeURIComponent(text);
    return `https://wa.me/91${phoneNumber}?text=${encoded}`;
  };

  const defaultMsg = 'Hello M2P Nexus, I would like to discuss my business requirements. Please contact me.';

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 font-sans">
      
      {/* Quick Action Popup Panel */}
      {isOpen && (
        <div className="glass-card rounded-2xl border border-emerald-500/30 p-5 w-72 text-left bg-brand-navy shadow-2xl animate-float">
          <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
            <div>
              <h5 className="text-xs font-bold text-white">M2P Quick Support</h5>
              <p className="text-[9px] text-emerald-400 font-mono">Typically replies instantly</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-gray-400 hover:text-white cursor-pointer"
              aria-label="Close WhatsApp Quick Actions"
            >
              <X size={14} />
            </button>
          </div>

          <p className="text-[10px] text-gray-400 leading-normal mb-3">
            Select a service area below to initiate direct WhatsApp chat:
          </p>

          <div className="space-y-2">
            {quickActions.map((action, i) => (
              <a
                key={i}
                href={getWhatsAppUrl(action.text)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 text-xs text-gray-200 font-medium transition-all group"
              >
                <span>{action.label}</span>
                <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 text-emerald-400 transition-opacity" />
              </a>
            ))}
          </div>

          <div className="mt-3 pt-2 border-t border-white/5 text-center">
            <a 
              href={getWhatsAppUrl(defaultMsg)}
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-[10px] font-bold text-emerald-400 hover:underline"
            >
              General Business Query
            </a>
          </div>
        </div>
      )}

      {/* Button Row (Phone + WhatsApp) */}
      <div className="flex items-center space-x-3">
        {/* Call Floating Button */}
        <a
          href={`tel:+91${phoneNumber}`}
          className="p-3.5 rounded-full bg-brand-navy border border-brand-cyan/20 text-brand-cyan hover:bg-brand-cyan/10 shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer flex items-center justify-center"
          title="Call M2P Nexus"
          aria-label="Call M2P Nexus"
        >
          <Phone size={18} />
        </a>

        {/* WhatsApp Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3.5 rounded-full bg-emerald-600 text-white hover:bg-emerald-500 shadow-[0_4px_20px_rgba(16,185,129,0.3)] transition-all duration-300 hover:scale-110 cursor-pointer flex items-center justify-center relative"
          title="Contact on WhatsApp"
          aria-label="Contact on WhatsApp"
        >
          <MessageSquare size={18} />
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
            </span>
          )}
        </button>
      </div>

    </div>
  );
}
