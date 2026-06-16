/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Shield, Scale, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import ThreeDTiltCard from '../components/ThreeDTiltCard';

interface PracticeAreasProps {
  onNavigate: (page: PageId) => void;
}

export const PRACTICES_DATA = [
  {
    id: 'real-estate' as PageId,
    title: 'Real Estate Law & Closing',
    icon: MapPin,
    short: 'Residential conveyance, commercial acquisitions, zoning approvals, lender representation, and certified e-closings across New England.',
    highlights: ['Secure Closing Disclosure Preparation', 'Municipal Lien & Title Clearing', 'Lender Closing Packages', 'Zoning Variances & Easement Analysis'],
  },
  {
    id: 'business-corporate' as PageId,
    title: 'Business & Corporate Law',
    icon: Shield,
    short: 'Proactive general counsel, entity formations, partnership bylaws, venture structuring, compliance audits, and commercial transactions.',
    highlights: ['Strategic Bylaws & Operating Manuals', 'Corporate restructures & startups', 'Contract curation & negotiations', 'Venture capital legal audits'],
  },
  {
    id: 'estate-planning' as PageId,
    title: 'Estate Planning & Trusts',
    icon: Scale,
    short: 'Sophisticated legacy curation, asset protection, irrevocable family trusts, probate administration, and healthcare directives.',
    highlights: ['Asset preservation & trust designs', 'Meticulous wills & healthcare power', 'Probate court navigation', 'Multi-generational tax limits'],
  },
  {
    id: 'personal-injury' as PageId,
    title: 'Personal Injury Advocacy',
    icon: Award,
    short: 'Meticulous representation demanding justice and compensation for life-altering accidents, medical errors, and regional liabilities.',
    highlights: ['Trial-tested courtroom litigation', 'Comprehensive medical damages collation', 'Direct coordination with insurers', 'Zero fee unless we obtain recovery'],
  },
];

export default function PracticeAreas({ onNavigate }: PracticeAreasProps) {
  return (
    <div id="practices-main-container" className="pt-24 min-h-screen pb-20">
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gold-400/5 rounded-full blur-[100px] pointer-events-none animate-pulse" />

        <div className="text-center space-y-4 mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">• Spheres of Expertise</span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white font-medium tracking-tight">
            Practice Directories
          </h1>
          <p className="font-sans text-sm sm:text-base text-charcoal-400 font-light max-w-2xl mx-auto leading-relaxed">
            We provide pristine, comprehensive legal architecture spanning real estate transactional speed, general corporate formations, wealth heritage, and advocacy.
          </p>
          <div className="w-16 h-[1.5px] bg-gold-400 mx-auto" />
        </div>

        {/* 4 Cards Grid of Practice Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRACTICES_DATA.map((practice, ix) => {
            const Icon = practice.icon;
            return (
              <ThreeDTiltCard
                key={practice.id}
                onClick={() => onNavigate(practice.id)}
                className="group border border-white/[0.04] p-8 h-full flex flex-col justify-between hover:border-gold-500/25 transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-none bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:scale-110 group-hover:border-gold-500/50 transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <span className="text-[10px] font-mono text-charcoal-500 tracking-widest font-black uppercase">
                      0{ix + 1} // practice
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-semibold tracking-wide group-hover:text-gold-200 transition-colors">
                      {practice.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-400 leading-relaxed font-light">
                      {practice.short}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 pb-4">
                    {practice.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-[11px] text-charcoal-300">
                        <CheckCircle className="w-3.5 h-3.5 text-gold-500/70 shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/[0.04] pt-4 flex items-center justify-between text-xs font-mono tracking-widest text-gold-500 uppercase group-hover:text-white transition-colors">
                  <span>Explore Practice Mandate</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </ThreeDTiltCard>
            );
          })}
        </div>
      </section>

      {/* Advisory Note */}
      <section className="py-16 bg-[#050505] border-t border-white/[0.02]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="font-serif text-2xl text-white">Require Immediate Consultation?</h3>
          <p className="text-xs text-charcoal-400 max-w-md mx-auto">
            Our Providence closing coordinators, corporate advisors, and dockets clerks are standing by online.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 bg-[#0e0e11] text-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:text-black hover:bg-[#D4AF37] rounded-none text-xs uppercase tracking-widest transition-all"
          >
            Schedule Office Intake
          </button>
        </div>
      </section>
    </div>
  );
}
