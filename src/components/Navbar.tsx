import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO, ASSETS } from '../data';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Transformations', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#3B2118]/95 backdrop-blur-md shadow-lg shadow-[#3B2118]/20 py-2.5 border-b border-[#B98252]/20'
          : 'bg-[#3B2118] py-3.5 border-b border-[#B98252]/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          id="nav-brand-link"
          href="#home"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C6A15B] rounded-lg p-1"
        >
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#C6A15B]/60 shadow-md bg-[#3B2118] flex-shrink-0">
            <img
              src={ASSETS.logo}
              alt="SF Sofa Centre Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-editorial text-lg sm:text-xl font-bold tracking-tight text-[#FFF8ED] uppercase group-hover:text-[#C6A15B] transition-colors">
              SF Sofa Centre
            </span>
            <span className="text-[10px] tracking-[0.2em] font-sans text-[#C6A15B] font-bold uppercase">
              Premium Restoration
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-7 text-xs font-sans font-bold uppercase tracking-widest text-[#FFF8ED]/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#C6A15B] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C6A15B] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-[#FFF8ED] hover:text-[#C6A15B] hover:bg-[#4A2C20] focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-[#3B2118] border-b border-[#B98252]/30 px-5 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-2 pt-2 pb-3 border-b border-[#4A2C20]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#FFF8ED] hover:text-[#C6A15B] text-sm font-sans font-bold uppercase tracking-wider py-2 px-2 rounded-md hover:bg-[#4A2C20]/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 text-center text-xs text-[#C6A15B] flex items-center justify-center gap-1.5 font-sans tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Serving All Locations in Delhi & Noida</span>
          </div>
        </div>
      )}
    </header>
  );
};
