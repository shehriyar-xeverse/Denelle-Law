/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, Shield, Star, Award, ChevronRight, Linkedin, Facebook, Twitter } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="app-footer" className="relative bg-[#050505] border-t border-white/[0.04] overflow-hidden">
      {/* Subtle glowing halo base */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative vertical lines */}
      <div className="absolute inset-y-0 left-1/4 w-[1px] bg-white/[0.01] pointer-events-none hidden md:block" />
      <div className="absolute inset-y-0 left-2/4 w-[1px] bg-white/[0.01] pointer-events-none hidden md:block" />
      <div className="absolute inset-y-0 left-3/4 w-[1px] bg-white/[0.01] pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Credo */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-8 h-8 border border-gold-500 flex items-center justify-center transform rotate-45 shrink-0">
                <span className="text-[10px] font-bold -rotate-45 text-gold-500 tracking-tight">DL</span>
              </div>
              <span className="font-serif-luxury text-[19px] font-bold tracking-[0.2em] text-[#F5F2ED] uppercase">
                DENELLE <span className="text-gold-500 font-light font-sans ml-0.5">LAW</span>
              </span>
            </div>
            <p className="text-sm font-light text-charcoal-400 leading-relaxed max-w-xs">
              A premium client-centric law firm offering cinematic dedication to Real Estate Law, Corporate representation, Estate Planning, and Personal Injury advocacy.
            </p>
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-none bg-white/[0.02] border border-white/[0.05] flex items-center justify-center">
                <Shield className="w-5 h-5 text-gold-500" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">Fully Certified</p>
                <p className="text-xs text-charcoal-400">Secure Insight & ALTA Best Practices</p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="font-serif text-base font-semibold text-white tracking-widest uppercase border-b border-gold-500/20 pb-2.5 w-1/2">
              Navigation
            </h4>
            <ul className="space-y-3.5 text-sm">
              {[
                { id: 'home', label: 'Home Front' },
                { id: 'about', label: 'Firm Profiles' },
                { id: 'practice-areas', label: 'Legal Practices' },
                { id: 'team', label: 'Our Councelors' },
                { id: 'careers', label: 'Career Paths' },
                { id: 'contact', label: 'Contact Office' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id as PageId)}
                    className="flex items-center text-charcoal-400 hover:text-gold-300 transition-colors duration-300 group py-0.5 text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-gold-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1.5 transition-transform duration-300">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6">
            <h4 className="font-serif text-base font-semibold text-white tracking-widest uppercase border-b border-gold-500/20 pb-2.5 w-1/2">
              Contact us
            </h4>
            <div className="space-y-4 text-sm font-light text-charcoal-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span>
                  Providence Capital Building<br />
                  100 Westminster Street, Suite 1500<br />
                  Providence, RI 02903
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <a href="tel:4012745300" className="hover:text-gold-300 transition-colors">
                  (401) 274-5300
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <a href="mailto:info@denellelaw.com" className="hover:text-gold-300 transition-colors break-all">
                  info@denellelaw.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Affiliations & Accents */}
          <div className="space-y-6">
            <h4 className="font-serif text-base font-semibold text-white tracking-widest uppercase border-b border-gold-500/20 pb-2.5 w-1/2">
              Accredits
            </h4>
            <p className="text-xs font-light text-charcoal-400 leading-relaxed">
              We leverage premium insurance and technology platforms to guarantee transactional safety and security.
            </p>
            <div className="grid grid-cols-3 gap-2 pt-2">
              {['CATIC', 'Simplifile', 'ARAG'].map((name) => (
                <div
                  key={name}
                  className="px-2 py-1.5 text-[10px] text-center font-bold tracking-wider text-gold-400 bg-white/[0.02] border border-white/[0.05] rounded-none hover:border-gold-500/30 transition-all duration-300"
                >
                  {name}
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-4 pt-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-none bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-charcoal-400 hover:text-gold-500 hover:border-gold-500/40 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-none bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-charcoal-400 hover:text-gold-500 hover:border-gold-500/40 transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-none bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-charcoal-400 hover:text-gold-500 hover:border-gold-500/40 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.03] text-center md:flex md:items-center md:justify-between text-xs font-light text-charcoal-400">
          <p>© {currentYear} Denelle Law, LLC. All rights reserved. Advertising Materials.</p>
          <div className="flex justify-center space-x-6 mt-4 md:mt-0">
            <button onClick={() => onNavigate('practice-areas')} className="hover:text-white transition-colors">Practices</button>
            <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">Our History</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">Counsel Office</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
