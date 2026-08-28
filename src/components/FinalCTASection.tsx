import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FinalCTASection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-[#3B2118] text-[#FFF8ED] relative overflow-hidden border-t border-[#B98252]/20"
    >
      {/* Subtle Glow & Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C6A15B_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B98252]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Badge */}
        <span className="text-[11px] font-sans font-bold tracking-[0.3em] uppercase text-[#C6A15B] border-b border-[#B98252]/40 pb-1.5 inline-block">
          Get Your Free Consultation & Quote
        </span>

        {/* Headline */}
        <h2
          id="final-cta-headline"
          className="font-editorial text-4xl sm:text-5xl md:text-6xl font-medium text-[#FFF8ED] tracking-tight leading-tight"
        >
          Ready to Bring Your Sofa <br />
          <span className="italic text-[#C6A15B]">Back to Life?</span>
        </h2>

        {/* Supporting Text */}
        <p
          id="final-cta-supporting-text"
          className="text-base sm:text-xl text-[#FFF8ED]/80 max-w-2xl mx-auto leading-relaxed font-sans"
        >
          Talk to SF Sofa Centre today and discover what your sofa can become.
        </p>

        {/* Primary Call & WhatsApp Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-xl mx-auto font-sans">
          <a
            id="final-call-now-btn"
            href={`tel:${CONTACT_INFO.phone}`}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#C6A15B] text-[#3B2118] text-sm sm:text-base font-bold uppercase tracking-wider hover:bg-[#d4af66] active:scale-[0.98] transition-all shadow-lg"
          >
            <Phone className="w-4 h-4 fill-[#3B2118]" />
            <span>Call {CONTACT_INFO.phoneDisplay}</span>
          </a>

          <a
            id="final-whatsapp-btn"
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white text-sm sm:text-base font-bold uppercase tracking-wider hover:bg-[#20ba59] active:scale-[0.98] transition-all shadow-lg"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Direct Functional Email & Service Area Badges */}
        <div className="pt-8 border-t border-[#B98252]/20 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#FFF8ED]/80 font-sans">
          <a
            id="final-email-link"
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-2 hover:text-[#C6A15B] transition-colors font-medium p-2 rounded-lg"
          >
            <Mail className="w-4 h-4 text-[#C6A15B]" />
            <span>{CONTACT_INFO.email}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>

          <div className="flex items-center gap-2 text-[#C6A15B] font-medium">
            <MapPin className="w-4 h-4" />
            <span>Delhi & Noida (Doorstep Service)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
