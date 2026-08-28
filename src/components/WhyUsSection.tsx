import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { WHY_US_ITEMS } from '../data';

export const WhyUsSection: React.FC = () => {
  return (
    <section
      id="why-us"
      className="py-16 sm:py-20 bg-[#FFF8ED] text-[#4A2C20] relative border-t border-[#B98252]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-[11px] font-sans font-bold tracking-[0.3em] uppercase text-[#B98252] border-b border-[#B98252]/30 pb-1.5 inline-block mb-3">
            Why SF Sofa Centre?
          </span>

          <h2
            id="why-us-heading"
            className="font-editorial text-3xl sm:text-4xl font-medium text-[#3B2118] tracking-tight"
          >
            The Standards We Stand By
          </h2>
        </div>

        {/* 5 Distinct Feature Cards (Strictly the 5 items specified) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {WHY_US_ITEMS.map((item, index) => (
            <div
              key={index}
              id={`why-item-${index + 1}`}
              className="rounded-2xl bg-white border border-[#B98252]/20 p-6 flex flex-col items-center text-center space-y-3 hover:bg-[#3B2118] hover:text-[#FFF8ED] group transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-[#FFF8ED] text-[#C6A15B] border border-[#B98252]/30 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-[#C6A15B] group-hover:text-[#3B2118] transition-colors">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>

              <h3 className="font-editorial text-base sm:text-lg font-medium text-[#3B2118] group-hover:text-[#FFF8ED] transition-colors leading-snug">
                {item.title}
              </h3>

              <p className="text-xs text-[#4A2C20]/75 group-hover:text-[#FFF8ED]/80 font-sans transition-colors leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
