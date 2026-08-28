/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { FinalCTASection } from './components/FinalCTASection';
import { FloatingMobileContact } from './components/FloatingMobileContact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF8ED] text-[#4A2C20] flex flex-col selection:bg-[#C6A15B] selection:text-[#3B2118]">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Compact, Visually Impressive Hero */}
        <Hero />

        {/* 5 Services + 5 Integrated Before/After Sliders */}
        <ServicesSection />

        {/* Why SF Sofa Centre */}
        <WhyUsSection />

        {/* Exactly 3 Customer Reviews */}
        <ReviewsSection />

        {/* Serving Delhi & Noida */}
        <ServiceAreaSection />

        {/* Final High-Conversion CTA */}
        <FinalCTASection />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Floating Mobile Sticky Contact Buttons */}
      <FloatingMobileContact />
    </div>
  );
}
