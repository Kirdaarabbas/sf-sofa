import React from 'react';
import { Phone, CheckCircle, MapPin, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { BRAND_MESSAGE, CONTACT_INFO, ASSETS } from '../data';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-18 overflow-hidden bg-[#3B2118] text-[#FFF8ED]"
    >
      {/* Subtle Background Luxury Accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C6A15B_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B98252]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Location & Service Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4A2C20]/80 border border-[#B98252]/40 text-[#C6A15B] text-[11px] font-sans font-bold tracking-[0.25em] uppercase">
              <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Doorstep Sofa Services in Delhi & Noida</span>
            </div>

            {/* Primary Headline */}
            <h1
              id="hero-headline"
              className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[54px] font-medium text-[#FFF8ED] tracking-tight leading-[1.05]"
            >
              Revive the Comfort. <br className="hidden sm:inline" />
              <span className="text-[#C6A15B] italic font-normal">Redefine the Look.</span>
            </h1>

            {/* Supporting Text */}
            <p
              id="hero-supporting-text"
              className="text-base sm:text-lg text-[#FFF8ED]/80 max-w-2xl font-sans leading-relaxed"
            >
              {BRAND_MESSAGE.subheadline}
            </p>

            {/* Core Value Quick Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 pb-3 border-y border-[#B98252]/20">
              <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#FFF8ED]/90">
                <CheckCircle className="w-4 h-4 text-[#C6A15B] flex-shrink-0" />
                <span>Doorstep Inspection</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#FFF8ED]/90">
                <CheckCircle className="w-4 h-4 text-[#C6A15B] flex-shrink-0" />
                <span>100+ Fabric Swatches</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#FFF8ED]/90">
                <CheckCircle className="w-4 h-4 text-[#C6A15B] flex-shrink-0" />
                <span>Expert Craftsmanship</span>
              </div>
            </div>

            {/* Direct Instant Response Guarantee */}
            <div className="flex items-center gap-2 text-xs font-sans text-[#C6A15B]/90 pt-1 tracking-wide">
              <Clock className="w-3.5 h-3.5" />
              <span>Doorstep consultation, measurement & master sofa revitalization in Delhi & Noida</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#C6A15B]/50 shadow-2xl bg-[#4A2C20] group">
              <div className="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src={ASSETS.hero}
                  alt="SF Sofa Centre Luxury Restored Sofa"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B2118]/90 via-transparent to-black/10"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#3B2118]/90 backdrop-blur-md border border-[#C6A15B]/40 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#C6A15B] text-[#3B2118]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold font-sans uppercase tracking-wider text-[#FFF8ED]">SF Sofa Centre</p>
                      <p className="text-[11px] text-[#C6A15B] font-editorial italic">Bespoke Restoration & Repair</p>
                    </div>
                  </div>
                  <a
                    href="#services"
                    className="text-xs font-sans font-bold uppercase tracking-wider text-[#FFF8ED] hover:text-[#C6A15B] flex items-center gap-1 transition-colors"
                  >
                    <span>View Work</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
