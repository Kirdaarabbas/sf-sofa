import React from 'react';
import { MapPin, Phone, Navigation, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ServiceAreaSection: React.FC = () => {
  return (
    <section
      id="service-areas"
      className="py-16 sm:py-20 bg-[#FFF8ED] text-[#4A2C20] relative border-t border-[#B98252]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#3B2118] text-[#FFF8ED] p-8 sm:p-12 shadow-2xl border border-[#C6A15B]/40 relative overflow-hidden">
          
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B98252]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center space-y-4">
            <span className="text-[11px] font-sans font-bold tracking-[0.3em] uppercase text-[#C6A15B] border-b border-[#B98252]/40 pb-1.5 inline-block">
              Doorstep Service Coverage
            </span>

            <h2
              id="service-area-heading"
              className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-[#FFF8ED] tracking-tight"
            >
              Serving All of Delhi & Noida
            </h2>

            <p
              id="service-area-text"
              className="text-base sm:text-lg text-[#FFF8ED]/80 max-w-2xl mx-auto font-sans leading-relaxed"
            >
              SF Sofa Centre provides professional sofa repair, upholstery, foam renewal, and customization services with free doorstep inspection across all locations in Delhi and Noida.
            </p>
          </div>

          {/* Region Highlights - Clean high-level cards without micro-neighborhoods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-6 border-t border-[#B98252]/20">
            {/* Delhi Region */}
            <div className="rounded-2xl bg-[#4A2C20]/60 p-6 border border-[#B98252]/30 space-y-4">
              <div className="flex items-center gap-2.5 text-[#C6A15B]">
                <Navigation className="w-5 h-5" />
                <h3 className="font-editorial font-medium text-xl text-[#FFF8ED]">
                  Delhi Region
                </h3>
              </div>
              <p className="text-xs text-[#FFF8ED]/80 font-sans leading-relaxed">
                Full coverage across all Delhi residential, commercial, and embassy zones.
              </p>
              <div className="space-y-2 text-xs text-[#FFF8ED]/90 font-sans">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B] flex-shrink-0" />
                  <span>Doorstep Master Craftsman Visit & Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B] flex-shrink-0" />
                  <span>Complete Fabric & Leatherette Swatch Catalog</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B] flex-shrink-0" />
                  <span>Hassle-Free Sofa Pickup & Express Delivery</span>
                </div>
              </div>
            </div>

            {/* Noida Region */}
            <div className="rounded-2xl bg-[#4A2C20]/60 p-6 border border-[#B98252]/30 space-y-4">
              <div className="flex items-center gap-2.5 text-[#C6A15B]">
                <Navigation className="w-5 h-5" />
                <h3 className="font-editorial font-medium text-xl text-[#FFF8ED]">
                  Noida & Greater Noida
                </h3>
              </div>
              <p className="text-xs text-[#FFF8ED]/80 font-sans leading-relaxed">
                Prompt doorstep service across all sectors, high-rises, and townships.
              </p>
              <div className="space-y-2 text-xs text-[#FFF8ED]/90 font-sans">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B] flex-shrink-0" />
                  <span>Quick-Response Home Inspection & Quotation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B] flex-shrink-0" />
                  <span>High-Density Foam & Cushion Testing on Site</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B] flex-shrink-0" />
                  <span>Safe Furniture Handling & Clean Delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Doorstep Assurance Banner inside */}
          <div className="mt-8 pt-6 border-t border-[#B98252]/20 flex items-center justify-center text-center font-sans">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#C6A15B] tracking-wide">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>Doorstep master craftsman inspection & fabric presentation across all of Delhi & Noida</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
