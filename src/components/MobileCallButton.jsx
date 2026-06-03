import React from 'react';
import { Phone } from 'lucide-react';

export default function MobileCallButton() {
  return (
    <a
      href="tel:+919944283316"
      className="md:hidden fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 text-white rounded-full shadow-lg transition-transform active:scale-95 cursor-pointer"
      style={{ backgroundColor: '#1E3A8A' }}
      aria-label="Call M2P Nexus"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
