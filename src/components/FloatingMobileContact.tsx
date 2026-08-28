import React from 'react';
import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingMobileContact: React.FC = () => {
  return (
    <>
      {/* Floating Call Button - Bottom Left (Circular) */}
      <aside
        id="floating-call-container"
        aria-label="Floating Call Quick Action"
        className="fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-50"
      >
        <a
          id="floating-call-btn"
          href={`tel:${CONTACT_INFO.phone}`}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#3B2118] text-[#C6A15B] border-2 border-[#C6A15B] flex items-center justify-center shadow-2xl shadow-black/60 hover:bg-[#C6A15B] hover:text-[#3B2118] transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm"
          aria-label="Call SF Sofa Centre at 9313643395"
          title={`Call SF Sofa Centre (${CONTACT_INFO.phoneDisplay})`}
        >
          <Phone className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
        </a>
      </aside>

      {/* Floating WhatsApp Button - Bottom Right (Circular) */}
      <aside
        id="floating-whatsapp-container"
        aria-label="Floating WhatsApp Quick Action"
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50"
      >
        <a
          id="floating-whatsapp-btn"
          href={CONTACT_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-black/60 hover:bg-[#20ba59] transition-all duration-300 hover:scale-105 active:scale-95 ring-2 ring-white/40 backdrop-blur-sm"
          aria-label="Chat on WhatsApp with SF Sofa Centre at 9313643395"
          title="Chat on WhatsApp (9313643395)"
        >
          <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-white drop-shadow" />
        </a>
      </aside>
    </>
  );
};

