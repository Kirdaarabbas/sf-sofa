import React from 'react';
import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingMobileContact: React.FC = () => {
  return (
    <>
      {/* Floating Call Button - Bottom Left */}
      <aside
        id="floating-call-container"
        aria-label="Floating Call Quick Action"
        className="fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-50 font-sans"
      >
        <a
          id="floating-call-btn"
          href={`tel:${CONTACT_INFO.phone}`}
          className="group flex items-center gap-2.5 py-3 px-4 sm:px-5 rounded-full bg-[#3B2118] text-[#FFF8ED] border-2 border-[#C6A15B] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-2xl shadow-black/50 hover:bg-[#C6A15B] hover:text-[#3B2118] active:scale-95 transition-all duration-300 backdrop-blur-sm"
          aria-label="Call SF Sofa Centre at 9313643395"
        >
          <div className="w-6 h-6 rounded-full bg-[#C6A15B] text-[#3B2118] group-hover:bg-[#3B2118] group-hover:text-[#C6A15B] flex items-center justify-center transition-colors">
            <Phone className="w-3.5 h-3.5 fill-current" />
          </div>
          <span>Call {CONTACT_INFO.phoneDisplay}</span>
        </a>
      </aside>

      {/* Floating WhatsApp Button - Bottom Right (Opposite Side) */}
      <aside
        id="floating-whatsapp-container"
        aria-label="Floating WhatsApp Quick Action"
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 font-sans"
      >
        <a
          id="floating-whatsapp-btn"
          href={CONTACT_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 py-3 px-4 sm:px-5 rounded-full bg-[#25D366] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-2xl shadow-black/50 hover:bg-[#20ba59] active:scale-95 transition-all duration-300 ring-2 ring-white/30 backdrop-blur-sm"
          aria-label="Chat on WhatsApp with SF Sofa Centre at 9313643395"
        >
          <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-white drop-shadow" />
          <span>WhatsApp Us</span>
        </a>
      </aside>
    </>
  );
};
