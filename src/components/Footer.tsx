import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO, ASSETS } from '../data';

export const Footer: React.FC = () => {
  return (
    <footer
      id="main-footer"
      className="bg-[#2A1710] text-[#FFF8ED] py-12 border-t border-[#B98252]/20 pb-24 md:pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#B98252]/15 text-center md:text-left">
          
          {/* Logo & Identity */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C6A15B]/50 shadow-md bg-[#3B2118] flex-shrink-0">
              <img
                src={ASSETS.logo}
                alt="SF Sofa Centre"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-editorial text-2xl font-medium tracking-wide text-[#FFF8ED]">
                SF Sofa Centre
              </h3>
              <p className="text-[11px] font-sans uppercase tracking-widest text-[#C6A15B] font-bold mt-0.5">
                Delhi & Noida • Doorstep Sofa Restoration
              </p>
            </div>
          </div>

          {/* Direct Phone & Email Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-sans">
            <a
              id="footer-call-link"
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-2 text-[#FFF8ED] hover:text-[#C6A15B] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C6A15B] fill-[#C6A15B]" />
              <span className="font-bold tracking-wide">{CONTACT_INFO.phoneDisplay}</span>
            </a>

            <a
              id="footer-email-link"
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-2 text-[#FFF8ED]/85 hover:text-[#C6A15B] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>{CONTACT_INFO.email}</span>
            </a>

            <div className="flex items-center gap-2 text-[#C6A15B]">
              <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Delhi & Noida</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-xs text-[#FFF8ED]/60">
          <p>© 2026 SF Sofa Centre. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
