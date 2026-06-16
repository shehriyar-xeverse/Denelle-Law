/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Shield, Scale, Award, ArrowLeft, CheckCircle, FileText, ChevronRight, Bookmark, Lock, ShieldCheck, HeartPulse, Hammer } from 'lucide-react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import ThreeDTiltCard from '../components/ThreeDTiltCard';

interface PracticeAreasDetailProps {
  pageId: PageId;
  onNavigate: (page: PageId) => void;
}

export default function PracticeAreasDetail({ pageId, onNavigate }: PracticeAreasDetailProps) {
  
  // Go back helper
  const handleGoBack = () => {
    onNavigate('practice-areas');
  };

  const isRealEstate = pageId === 'real-estate';
  const isBusiness = pageId === 'business-corporate';
  const isEstate = pageId === 'estate-planning';
  const isInjury = pageId === 'personal-injury';

  return (
    <div id="practice-detail-container" className="pt-24 min-h-screen pb-20">
      
      {/* Header Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <button
          onClick={handleGoBack}
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Practices Directory</span>
        </button>
      </div>

      {/* 🏡 NESTED RENDER: REAL ESTATE */}
      {isRealEstate && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-16">
          {/* Hero segment */}
          <div className="relative rounded-none overflow-hidden aspect-video md:aspect-21/9 min-h-[300px] flex items-end p-6 sm:p-14 border border-gold-500/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600"
              alt="Real Estate Conveyancing"
              className="absolute inset-0 w-full h-full object-cover brightness-[0.25] saturate-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative z-10 space-y-4 max-w-3xl">
              <span className="px-3 py-1 bg-gold-500/10 text-[#D4AF37] border border-gold-500/30 text-[10px] uppercase font-mono tracking-widest rounded-none">
                🏡 Specialty Practice Division
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl text-white font-medium">
                Real Estate Law & e-Closing
              </h1>
              <p className="font-sans text-sm sm:text-base text-charcoal-300 font-light max-w-xl">
                Certified residential conveyancing, commercial property transitions, bank settlement processing, and ALTA risk mitigation throughout New England.
              </p>
            </div>
          </div>

          {/* Interactive Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-3xl text-white">Security-First Settlement & Curation</h2>
              <p className="text-sm font-light text-charcoal-300 leading-relaxed">
                As an ALTA Best Practices certified closing counsel, we represent buyers, sellers, brokers, and institutional lenders. Residential and commercial transactions are safeguarded utilizing encrypted closing platforms to prevent wire-fraud and paperwork delays.
              </p>
              
              <div className="space-y-4 pt-4">
                <h4 className="font-serif text-lg text-gold-200">Our Title & Closing Checklist:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Purchase & Sale (P&S) agreement formulation',
                    'Comprehensive municipal title abstract searches',
                    'Escrow asset holding & wire security',
                    'Closing Disclosure (CD) compilation & TRID audit',
                    'Deed preparation & title clearance',
                    'Instant electronic e-recording filings',
                  ].map((bullet, idx) => (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      viewport={{ once: true }}
                      key={idx}
                      className="flex items-start space-x-2.5 text-xs text-charcoal-200"
                    >
                      <CheckCircle className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ThreeDTiltCard className="border border-gold-500/15 p-8 space-y-6">
                <Bookmark className="w-8 h-8 text-gold-500" />
                <h4 className="font-serif text-xl sm:text-2xl text-white font-bold">Secure Insight Verified</h4>
                <p className="text-xs sm:text-sm text-charcoal-400 font-light leading-relaxed">
                  Denelle Law holds pre-verified closing rating clearance with national banking consortiums. Your funds and title records stand fully insured across all jurisdictions.
                </p>
                <div className="pt-4 border-t border-white/[0.04]">
                  <p className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider">LENDER INTEGRATIONS: CATIC, COMMONWEALTH, SECURE closing</p>
                </div>
                <button
                  onClick={() => onNavigate('order-title')}
                  className="w-full py-3 bg-gold-500 hover:bg-gold-600 text-black font-semibold text-xs uppercase tracking-widest rounded-none"
                >
                  Order Title Services
                </button>
              </ThreeDTiltCard>
            </div>
          </div>
        </section>
      )}

      {/* 🏢 NESTED RENDER: BUSINESS & CORPORATE */}
      {isBusiness && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-16">
          <div className="relative rounded-none overflow-hidden aspect-video md:aspect-21/9 min-h-[300px] flex items-end p-6 sm:p-14 border border-gold-500/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600"
              alt="Business and Corporate"
              className="absolute inset-0 w-full h-full object-cover brightness-[0.25] saturate-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative z-10 space-y-4 max-w-3xl">
              <span className="px-3 py-1 bg-gold-500/10 text-[#D4AF37] border border-gold-500/30 text-[10px] uppercase font-mono tracking-widest rounded-none">
                🏢 Enterprise Practice Division
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl text-white font-medium">
                Business & Corporate Law
              </h1>
              <p className="font-sans text-sm sm:text-base text-charcoal-300 font-light max-w-xl">
                Startup formations, meticulous contract preparation, share structures, general counsel retainer, and mergers & acquisitions analysis.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="font-serif text-3xl text-white">Scalable Corporate Architecture & Counsel</h2>
              <p className="text-sm font-light text-charcoal-300 leading-relaxed">
                Our business attorneys assist founders, regional operators, and corporate boards of directors through operational expansion. We structure operating agreements, commercial lease conditions, vendor supply agreements, and internal regulatory dockets.
              </p>

              {/* Animated content blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { title: 'STARTUP & LLC FORMATIONS', desc: 'Secure articles of organization, federal EINs, licensing compliance, and partner buy-out restrictions.' },
                  { title: 'CONTRACT DRAFTING & REVIEW', desc: 'Precision lease forms, employment directives, client retainers, and mutual non-disclosure (NDA) terms.' },
                  { title: 'MERGERS & TRANSACTION VALUATION', desc: 'Sellers/Buyers asset-purchase compliance, capital structuring audits, and post-merger integration counsel.' },
                  { title: 'GENERAL RETAINER COUNSEL', desc: 'Corporate bylaws consulting, board of director minutes, annual dockets updates, and dispute mitigations.' },
                ].map((block, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="p-5 rounded-none bg-white/[0.01] border border-white/[0.04]"
                  >
                    <h4 className="font-serif text-sm font-bold text-gold-400 tracking-wider mb-2">{block.title}</h4>
                    <p className="text-xs text-charcoal-400 leading-relaxed font-light">{block.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="glass-premium p-6 rounded-none border border-gold-500/10 space-y-4">
                <Lock className="w-7 h-7 text-gold-500" />
                <h4 className="font-serif text-lg text-white font-semibold">Regulatory Integrity Certify</h4>
                <p className="text-xs text-charcoal-400 leading-relaxed font-light">
                  We align company bylaws with state corporation statutes, establishing safe, resilient operations which streamline future capitalization rounds.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-2.5 bg-[#0a0a0f] border border-gold-500/30 hover:border-gold-500 text-gold-300 rounded-none text-xs uppercase tracking-widest"
                >
                  Request Corporate Diagnostic
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 📜 NESTED RENDER: ESTATE PLANNING */}
      {isEstate && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-16">
          <div className="relative rounded-none overflow-hidden aspect-video md:aspect-21/9 min-h-[300px] flex items-end p-6 sm:p-14 border border-gold-500/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1600"
              alt="Estate Planning Documents"
              className="absolute inset-0 w-full h-full object-cover brightness-[0.25] saturate-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative z-10 space-y-4 max-w-3xl">
              <span className="px-3 py-1 bg-gold-500/10 text-[#D4AF37] border border-gold-500/30 text-[10px] uppercase font-mono tracking-widest rounded-none">
                📜 Wealth & Legacy Practice Division
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl text-white font-medium">
                Estate Planning & Trusts
              </h1>
              <p className="font-sans text-sm sm:text-base text-charcoal-300 font-light max-w-xl">
                Wills, irrevocable trusts, healthcare directives, asset protection frameworks, and regional probate court navigation.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-10 pt-8 text-left">
            <div className="text-center space-y-3 mb-10">
              <h2 className="font-serif text-3xl text-white">Trust-Focused Legacy Curation</h2>
              <p className="text-sm font-light text-charcoal-400 leading-relaxed max-w-xl mx-auto">
                Sophisticated estate structures drafted with document-style precision to maximize asset protection, minimize tax liability, and bypass probate.
              </p>
            </div>

            {/* Document layout representation */}
            <div className="bg-[#09090c] border border-gold-500/15 p-8 sm:p-12 rounded-none relative overflow-hidden shadow-2xl space-y-8">
              {/* Seal decoration background */}
              <div className="absolute right-6 top-6 w-20 h-20 border border-gold-500/10 rounded-full flex items-center justify-center text-gold-500/5 select-none font-serif text-[40px]">D</div>
              
              <div className="border-b border-white/[0.04] pb-6 text-center">
                <span className="font-serif text-base tracking-widest text-[#D4AF37] font-bold block">FIDUCIARY TRUST RESOLUTIONS</span>
                <p className="text-[10px] font-mono text-charcoal-400 mt-1 uppercase">ESTABLISHED BY DEED UNDER RHODE ISLAND PROBATE STATUTES</p>
              </div>

              <div className="space-y-6 text-xs sm:text-sm font-light text-charcoal-300 leading-relaxed">
                <div>
                  <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4 text-gold-500" />
                    <span>I. Asset Preservation & Revocable/Irrevocable Trust Models</span>
                  </h4>
                  <p className="pl-5">
                    We curate customized trusts designed specifically to manage residential structures, family business entities, and passive funds. These systems prevent liquidations during transition phases, keeping control strictly within nominated successor hands.
                  </p>
                </div>

                <div>
                  <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                    <FileText className="w-4 h-4 text-gold-500" />
                    <span>II. Wills, Powers of Attorney, & Healthcare Mandates</span>
                  </h4>
                  <p className="pl-5">
                    Complete designation of medical proxy powers, financial decisions, and testamentary distributions. These records prevent multi-family disputes and medical delays in stressful conditions.
                  </p>
                </div>

                <div>
                  <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                    <Scale className="w-4 h-4 text-gold-500" />
                    <span>III. Fiduciary Duties & Successor Trustee Training</span>
                  </h4>
                  <p className="pl-5">
                    Our counsel coordinates directly with designated successor trustees, training them on accounting requirements, court dockets registrations, and fiduciary obligations under regional laws.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-charcoal-400">
                <span>AUTHENTICATED RECTOR PROTOCOL</span>
                <button
                  onClick={() => onNavigate('contact')}
                  className="mt-4 sm:mt-0 px-4 py-2 bg-gold-500 text-black font-semibold uppercase tracking-wider rounded-none transition-colors"
                >
                  Draft Estate Dossier
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ⚠️ NESTED RENDER: PERSONAL INJURY */}
      {isInjury && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-16">
          <div className="relative rounded-none overflow-hidden aspect-video md:aspect-21/9 min-h-[300px] flex items-end p-6 sm:p-14 border border-gold-500/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1600"
              alt="Personal Injury Advocacy"
              className="absolute inset-0 w-full h-full object-cover brightness-[0.25] saturate-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative z-10 space-y-4 max-w-3xl">
              <span className="px-3 py-1 bg-red-900/40 text-red-200 border border-red-500/30 text-[10px] uppercase font-mono tracking-widest rounded-none">
                ⚠️ Litigation Force division
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl text-white font-medium">
                Personal Injury Advocacy
              </h1>
              <p className="font-sans text-sm sm:text-base text-charcoal-300 font-light max-w-xl">
                Rigorous, trial-tested injury representation standing against corporate negligence, medical oversights, vehicular impact, and insurance evasion.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="font-serif text-3xl text-white font-bold leading-tight">Uncompromising Recovery & Trial Defense</h2>
              <p className="text-sm font-light text-charcoal-300 leading-relaxed">
                When catastrophic injury or unexpected corporate recklessness disrupts your life, you are immediately up against massive insurance adjusters aiming to minimize liability. Denelle Law advocates step in as aggressive strategic defenders. We compile hospital statements, reconstruct accident coordinates, and formulate meticulous pleadings that demand peak restitution.
              </p>

              <blockquote className="border-l-4 border-gold-500 pl-6 py-2 italic font-serif text-xl text-stone-100 bg-white/[0.01]">
                "Our single objective is to secure the medical funding, physical rehabilitation compensation, and lost salary recovery necessary to rebuild your stability."
              </blockquote>

              <div className="space-y-4 pt-4">
                <h4 className="font-serif text-lg text-white uppercase tracking-wider">Representative Injury Actions Covered</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { val: 'Highway & Vehicular Crashes', sub: 'Defending victims against freight carrier negligence, distracted motorist adjustments, and commercial collisions.' },
                    { val: 'Construction Site Failures', sub: 'Targeting prime contract and employer safety violations on complex high-density build coordinates.' },
                    { val: 'Medical Care Malpractice', sub: 'Meticulous investigation of surgical oversights, dangerous diagnostic delays, and medication management errors.' },
                    { val: 'Premises Structural Neglect', sub: 'Targeting corporate commercial properties displaying hazardous floorings or structural easement omissions.' },
                  ].map((field, ix) => (
                    <div key={ix} className="p-4 rounded-none bg-neutral-900/60 border border-white/[0.02]">
                      <h5 className="font-serif text-sm font-bold text-white flex items-center space-x-1.5 mb-1">
                        <HeartPulse className="w-4 h-4 text-gold-500 shrink-0" />
                        <span>{field.val}</span>
                      </h5>
                      <p className="text-xs text-charcoal-400 font-light leading-relaxed">{field.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="p-8 rounded-none bg-orange-950/20 border border-gold-500/30 space-y-5 text-left">
                <Hammer className="w-8 h-8 text-gold-500" />
                <h4 className="font-serif text-lg text-white font-bold uppercase tracking-wider">The Fiduciary Contingency Pledge</h4>
                <p className="text-xs text-charcoal-400 font-light leading-relaxed">
                  We collect ZERO attorneys fees unless we obtain a recovery or settlement on your docket. All initial physical consulting, medical reviews, and records collation stand completely subsidized.
                </p>
                <div className="h-[1px] bg-white/[0.05]" />
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-3 bg-gold-500 hover:bg-gold-600 text-black font-semibold text-xs tracking-widest uppercase rounded-none cursor-pointer"
                >
                  Arrange Case Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
