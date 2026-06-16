/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Award, Briefcase, Video, BookOpen, Contact, Shield, Scale, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Mobile Accordions
  const [mobilePracticeOpen, setMobilePracticeOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileLinkClick = (page: PageId) => {
    setIsOpen(false);
    onNavigate(page);
  };

  const isPracticeActive = [
    'practice-areas',
    'real-estate',
    'business-corporate',
    'estate-planning',
    'personal-injury',
  ].includes(currentPage);

  const isResourcesActive = [
    'resources-videos',
    'resources-testimonials'
  ].includes(currentPage);

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${
        scrolled
          ? 'glass-navbar py-3 shadow-2xl'
          : 'bg-transparent py-4 border-b border-white/[0.02]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo element */}
          <div
            id="brand-logo"
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2.5 sm:space-x-4 cursor-pointer group shrink-0"
          >
            <div className="w-7 h-7 sm:w-8 h-8 border border-gold-500 flex items-center justify-center transform rotate-45 shrink-0 group-hover:border-white transition-all duration-350">
              <span className="text-[9px] sm:text-[10px] font-bold -rotate-45 text-gold-500 tracking-tight group-hover:text-white transition-all duration-350">DL</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif-luxury text-sm sm:text-lg md:text-xl font-bold tracking-[0.15em] sm:tracking-[0.2em] text-[#F5F2ED] transition-colors duration-300 group-hover:text-gold-200 uppercase whitespace-nowrap">
                DENELLE <span className="text-gold-500 text-[0.85em] font-light tracking-normal font-sans ml-0.5">LAW</span>
              </span>
              <p className="text-[7px] sm:text-[8px] tracking-[0.3em] sm:tracking-[0.4em] uppercase text-charcoal-400 group-hover:text-gold-400/80 transition-colors duration-300">Integrity & Excellence</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => onNavigate('home')}
              className={`px-4 py-2 text-sm tracking-wide transition-colors uppercase font-medium ${
                currentPage === 'home' ? 'text-gold-500' : 'text-charcoal-200 hover:text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`px-4 py-2 text-sm tracking-wide transition-colors uppercase font-medium ${
                currentPage === 'about' ? 'text-gold-500' : 'text-charcoal-200 hover:text-white'
              }`}
            >
              About
            </button>

            {/* Practice Areas Dropdown with Hover Expand */}
            <div
              className="relative"
              onMouseEnter={() => setPracticeDropdownOpen(true)}
              onMouseLeave={() => setPracticeDropdownOpen(false)}
            >
              <button
                onClick={() => onNavigate('practice-areas')}
                className={`px-4 py-2 text-sm tracking-wide transition-colors uppercase font-medium flex items-center space-x-1 ${
                  isPracticeActive ? 'text-gold-500' : 'text-charcoal-200 hover:text-white'
                }`}
              >
                <span>Practice Areas</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${practiceDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {practiceDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute left-0 mt-1 w-64 glass-premium-dark rounded-none shadow-2xl p-2 z-50 border border-gold-500/20"
                  >
                    {[
                      { id: 'practice-areas', label: 'All Practice Areas', icon: Scale },
                      { id: 'real-estate', label: 'Real Estate Law', icon: MapPin },
                      { id: 'business-corporate', label: 'Business & Corp Law', icon: Shield },
                      { id: 'estate-planning', label: 'Estate Planning', icon: BookOpen },
                      { id: 'personal-injury', label: 'Personal Injury Law', icon: Award },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            onNavigate(item.id as PageId);
                            setPracticeDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-xs tracking-wider uppercase rounded-none flex items-center space-x-3 transition-all ${
                            currentPage === item.id
                              ? 'bg-gold-500/10 text-gold-500 border-l-2 border-gold-500'
                              : 'text-charcoal-300 hover:bg-white/[0.03] hover:text-white'
                          }`}
                        >
                          <Icon className="w-4 h-4 text-gold-500/80" />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => onNavigate('team')}
              className={`px-4 py-2 text-sm tracking-wide transition-colors uppercase font-medium ${
                currentPage === 'team' ? 'text-gold-500' : 'text-charcoal-200 hover:text-white'
              }`}
            >
              Our Team
            </button>

            {/* Resources Dropdown with Hover Expand */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesDropdownOpen(true)}
              onMouseLeave={() => setResourcesDropdownOpen(false)}
            >
              <button
                className={`px-4 py-2 text-sm tracking-wide transition-colors uppercase font-medium flex items-center space-x-1 ${
                  isResourcesActive ? 'text-gold-500' : 'text-charcoal-200 hover:text-white'
                }`}
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {resourcesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute left-0 mt-1 w-56 glass-premium-dark rounded-none shadow-2xl p-2 z-50 border border-gold-500/20"
                  >
                    {[
                      { id: 'resources-videos', label: 'Video Library', icon: Video },
                      { id: 'resources-testimonials', label: 'Testimonials', icon: BookOpen },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            onNavigate(item.id as PageId);
                            setResourcesDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-xs tracking-wider uppercase rounded-none flex items-center space-x-3 transition-all ${
                            currentPage === item.id
                              ? 'bg-gold-500/10 text-gold-500 border-l-2 border-gold-500'
                              : 'text-charcoal-300 hover:bg-white/[0.03] hover:text-white'
                          }`}
                        >
                          <Icon className="w-4 h-4 text-gold-500/80" />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => onNavigate('careers')}
              className={`px-4 py-2 text-sm tracking-wide transition-colors uppercase font-medium ${
                currentPage === 'careers' ? 'text-gold-500' : 'text-charcoal-200 hover:text-white'
              }`}
            >
              Careers
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`px-4 py-2 text-sm tracking-wide transition-colors uppercase font-medium ${
                currentPage === 'contact' ? 'text-gold-500' : 'text-charcoal-200 hover:text-white'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Desktop Call to Action Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => onNavigate('order-title')}
              className={`relative overflow-hidden group px-6 py-2.5 text-xs uppercase tracking-widest font-semibold rounded-none bg-[#0e0e11] text-gold-200 border border-gold-500/40 glow-gold transition-all duration-300 hover:text-white hover:border-gold-400 active:scale-95`}
            >
              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-gold-600/15 to-gold-500/15 group-hover:scale-105 transition-transform duration-500" />
              <span>Order Title</span>
            </button>
          </div>

          {/* Tablet & Mobile Menu Button */}
          <div className="flex items-center lg:hidden space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal-200 hover:text-white focus:outline-none p-1.5"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Drawer Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop slide shadow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-[1000] lg:hidden"
            />

            {/* Sidebar drawer panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-full glass-premium-dark border-l border-gold-500/15 z-[1001] p-6 flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.05]">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 border border-gold-500 flex items-center justify-center transform rotate-45 shrink-0">
                      <span className="text-[8px] font-bold -rotate-45 text-gold-500 tracking-tight">DL</span>
                    </div>
                    <span className="font-serif-luxury text-base tracking-wider text-[#F5F2ED] uppercase">DENELLE <span className="text-gold-500 font-light font-sans ml-0.5">LAW</span></span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-charcoal-400 hover:text-white p-1"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="mt-8 space-y-4 flex flex-col">
                  <button
                    onClick={() => handleMobileLinkClick('home')}
                    className={`text-left py-2 text-base uppercase tracking-wider font-medium border-b border-white/[0.02] ${
                      currentPage === 'home' ? 'text-gold-500' : 'text-charcoal-300'
                    }`}
                  >
                    Home
                  </button>
                  <button
                    onClick={() => handleMobileLinkClick('about')}
                    className={`text-left py-2 text-base uppercase tracking-wider font-medium border-b border-white/[0.02] ${
                      currentPage === 'about' ? 'text-gold-500' : 'text-charcoal-300'
                    }`}
                  >
                    About
                  </button>

                  {/* Practice Areas Collapsible Accordion */}
                  <div className="border-b border-white/[0.02] py-2">
                    <button
                      onClick={() => setMobilePracticeOpen(!mobilePracticeOpen)}
                      className="w-full flex justify-between items-center text-left text-base uppercase tracking-wider font-medium text-charcoal-300"
                    >
                      <span>Practice Areas</span>
                      <ChevronDown className={`w-5 h-5 transition-transform text-gold-500 ${mobilePracticeOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {mobilePracticeOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden bg-black/30 rounded-md mt-2 px-3 py-1 space-y-1.5 flex flex-col"
                        >
                          {[
                            { id: 'practice-areas', label: 'All Practice Areas' },
                            { id: 'real-estate', label: 'Real Estate Law' },
                            { id: 'business-corporate', label: 'Business & Corporate' },
                            { id: 'estate-planning', label: 'Estate Planning' },
                            { id: 'personal-injury', label: 'Personal Injury Law' },
                          ].map((subItem) => (
                            <button
                              key={subItem.id}
                              onClick={() => handleMobileLinkClick(subItem.id as PageId)}
                              className={`text-left py-1.5 text-sm font-medium ${
                                currentPage === subItem.id ? 'text-gold-500' : 'text-charcoal-400'
                              }`}
                            >
                              • {subItem.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    onClick={() => handleMobileLinkClick('team')}
                    className={`text-left py-2 text-base uppercase tracking-wider font-medium border-b border-white/[0.02] ${
                      currentPage === 'team' ? 'text-gold-500' : 'text-charcoal-300'
                    }`}
                  >
                    Our Team
                  </button>

                  {/* Resources Collapsible Accordion */}
                  <div className="border-b border-white/[0.02] py-2">
                    <button
                      onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                      className="w-full flex justify-between items-center text-left text-base uppercase tracking-wider font-medium text-charcoal-300"
                    >
                      <span>Resources</span>
                      <ChevronDown className={`w-5 h-5 transition-transform text-gold-500 ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {mobileResourcesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden bg-black/30 rounded-md mt-2 px-3 py-1 space-y-1.5 flex flex-col"
                        >
                          {[
                            { id: 'resources-videos', label: 'Video Library' },
                            { id: 'resources-testimonials', label: 'Testimonials' },
                          ].map((subItem) => (
                            <button
                              key={subItem.id}
                              onClick={() => handleMobileLinkClick(subItem.id as PageId)}
                              className={`text-left py-1.5 text-sm font-medium ${
                                currentPage === subItem.id ? 'text-gold-500' : 'text-charcoal-400'
                              }`}
                            >
                              • {subItem.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    onClick={() => handleMobileLinkClick('careers')}
                    className={`text-left py-2 text-base uppercase tracking-wider font-medium border-b border-white/[0.02] ${
                      currentPage === 'careers' ? 'text-gold-500' : 'text-charcoal-300'
                    }`}
                  >
                    Careers
                  </button>
                  <button
                    onClick={() => handleMobileLinkClick('contact')}
                    className={`text-left py-2 text-base uppercase tracking-wider font-medium border-b border-white/[0.02] ${
                      currentPage === 'contact' ? 'text-gold-500' : 'text-charcoal-300'
                    }`}
                  >
                    Contact
                  </button>

                  {/* High visibility Order Title CTA Button inside mobile drawer */}
                  <div className="pt-4 pb-2">
                    <button
                      onClick={() => handleMobileLinkClick('order-title')}
                      className="w-full py-3 bg-linear-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-black font-semibold text-xs uppercase tracking-widest text-center shadow-xl glow-gold transition-all duration-300 hover:scale-[1.02] active:scale-95"
                    >
                      Order Title Services
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Drawer Footer Contacts */}
              <div className="pt-6 border-t border-white/[0.05] space-y-3">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#c5a880]">Office Location</span>
                <p className="text-xs text-charcoal-400 leading-relaxed">
                  Providence Capital Building<br />
                  100 Westminster St, Suite 1500<br />
                  Providence, RI 02903
                </p>
                <div className="flex flex-col text-xs text-charcoal-400">
                  <a href="tel:4012745300" className="text-gold-400 hover:underline">T: (401) 274-5300</a>
                  <a href="mailto:info@denellelaw.com" className="text-gold-400 hover:underline mt-1">E: info@denellelaw.com</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
