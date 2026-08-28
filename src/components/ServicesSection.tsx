import React from 'react';
import { Phone, Check, Sparkles, Layers, Hammer, ShieldAlert, Cpu } from 'lucide-react';
import { SERVICES_DATA, CONTACT_INFO } from '../data';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="py-16 sm:py-20 bg-[#FFF8ED] text-[#4A2C20] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-sans font-bold tracking-[0.3em] uppercase text-[#B98252] border-b border-[#B98252]/30 pb-1.5 inline-block mb-3">
            What We Do
          </span>
          
          <h2
            id="services-heading"
            className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-[#3B2118] tracking-tight"
          >
            Master Craftsman Restoration
          </h2>
          
          <p className="text-base sm:text-lg text-[#4A2C20]/80 leading-relaxed font-sans mt-3 max-w-2xl mx-auto">
            Explore our specialized sofa restoration solutions for Delhi & Noida. Each service features dedicated before-and-after craftsmanship transformations.
          </p>
        </div>

        {/* 5 Services with Direct Integrated Before/After Sliders */}
        <div className="space-y-14 sm:space-y-16">
          {SERVICES_DATA.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className="rounded-2xl bg-white border border-[#B98252]/25 shadow-sm p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-[#C6A15B] hover:shadow-md"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Left Column: Service Details & Descriptions */}
                  <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    {/* Service Number & Category */}
                    <div className="flex items-center gap-3">
                      <span className="font-editorial text-3xl sm:text-4xl font-normal text-[#C6A15B]">
                        {service.number}
                      </span>
                      <div className="h-4 w-px bg-[#B98252]/30"></div>
                      <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold text-[#B98252]">
                        SF Sofa Centre Restoration
                      </span>
                    </div>

                    {/* Service Title */}
                    <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-[#3B2118] tracking-tight">
                      {service.title}
                    </h3>

                    {/* Service Tagline */}
                    <p className="text-xs font-sans uppercase tracking-wider font-bold text-[#B98252]">
                      {service.tagline}
                    </p>

                    {/* Mandatory Exact Service Description */}
                    <p className="text-base sm:text-lg text-[#3B2118] leading-relaxed font-sans italic bg-[#FFF8ED] p-4 rounded-xl border-l-2 border-[#C6A15B]">
                      “{service.description}”
                    </p>

                    {/* Before & After Transformation Bullet Points */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                      {/* Before Highlights */}
                      <div className="p-3.5 rounded-xl bg-[#FFF8ED] border border-[#B98252]/20 space-y-2">
                        <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#4A2C20]/70 block">
                          Before Restoration:
                        </span>
                        <ul className="space-y-1.5 text-xs text-[#4A2C20] font-sans">
                          {service.beforeDetails.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-[#B98252] font-bold">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* After Highlights */}
                      <div className="p-3.5 rounded-xl bg-[#FFF8ED] border border-[#C6A15B]/40 space-y-2">
                        <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#3B2118] block">
                          After Master Work:
                        </span>
                        <ul className="space-y-1.5 text-xs text-[#3B2118] font-sans font-medium">
                          {service.afterDetails.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <Check className="w-3.5 h-3.5 text-[#B98252] flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Quick Features List */}
                    <div className="flex flex-wrap gap-2 pt-1 font-sans">
                      {service.features.map((feature, fIdx) => (
                        <span
                          key={fIdx}
                          className="px-3 py-1 rounded-full bg-[#FFF8ED] text-[#3B2118] text-[11px] font-medium border border-[#B98252]/20"
                        >
                          ✓ {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Exact Corresponding Interactive Before/After Slider */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between pb-1 font-sans">
                        <span className="text-[11px] font-bold text-[#3B2118] uppercase tracking-wider">
                          {service.title} Transformation
                        </span>
                        <span className="text-[10px] text-[#B98252] font-bold uppercase tracking-widest">
                          Before ← Drag → After
                        </span>
                      </div>

                      {/* Interactive Drag Slider */}
                      <BeforeAfterSlider
                        id={service.id}
                        beforeImage={service.beforeImage}
                        afterImage={service.afterImage}
                        serviceTitle={service.title}
                        beforeAlt={`${service.title} Before condition`}
                        afterAlt={`${service.title} After condition`}
                      />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
