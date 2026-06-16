/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Target, Compass, Eye, Users, Landmark, Scale, Coins } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { TIMELINE_EVENTS } from '../data';
import { PageId } from '../types';
import ThreeDTiltCard from '../components/ThreeDTiltCard';

interface AboutProps {
  onNavigate: (page: PageId) => void;
}

// Sub-component for auto-counting stats
function StatCounter({ target, suffix = '', label }: { target: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1500; // 1.5s
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center p-6 bg-white/[0.01] border border-white/[0.03] rounded-xl">
      <div className="font-mono text-4xl sm:text-5xl font-semibold text-gold-500 tracking-tight">
        {count}
        {suffix}
      </div>
      <p className="text-xs uppercase tracking-widest text-[#c5a880] font-medium mt-2">{label}</p>
    </div>
  );
}

export default function About({ onNavigate }: AboutProps) {
  // Stagger animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div id="about-page-container" className="pt-24">
      {/* Editorial Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="absolute top-1/4 right-[25%] w-72 h-72 bg-gold-500/5 rounded-full blur-[80px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#c5a880] font-bold">In Honor of Advocacy</span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white font-medium tracking-tight">
            Firm Profile & Legal Credo
          </h1>
          <p className="font-sans text-sm sm:text-base text-charcoal-400 font-light max-w-2xl mx-auto leading-relaxed">
            Denelle Law was established with a singular, unyielding standard: to deliver corporate prestige and rigorous attention to complex private and business clients.
          </p>
          <div className="w-16 h-[2px] bg-gold-500 mx-auto mt-6" />
        </motion.div>
      </section>

      {/* Narrative & Stats Blocks */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 text-sm text-charcoal-300 leading-relaxed font-light">
            <h2 className="font-serif text-3xl text-white mb-4">Our History of Transactional Safety</h2>
            <p>
              Founded in Providence initially by Raymond A. Denelle, Esq., the firm expanded around mortgage conveyance and high-value corporate operations. Over the decades, we have integrated leading client security platforms to address changing legal frameworks directly.
            </p>
            <p>
              We manage the transactional lifecycles for private property sales, title validation, mortgage refinancing, complex commercial litigation, and family inheritance protection across the Northeast. By maintaining a partner-centric structure, our clients directly access key litigation perspectives, avoiding traditional bureaucratic processing.
            </p>
            <div className="p-5 rounded-lg border border-gold-500/20 bg-gold-500/5 flex items-start space-x-3.5 mt-6">
              <Landmark className="w-6 h-6 text-gold-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm font-semibold text-white">Regional Jurisdiction Admittance</h4>
                <p className="text-xs text-charcoal-400 mt-1">
                  Fully certified closing services, escrow management, and trial advocacy spanning Rhode Island, Massachusetts, and Connecticut.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Counters Grid */}
          <div className="grid grid-cols-2 gap-4">
            <StatCounter target={25} suffix="+" label="Years Active Practice" />
            <StatCounter target={2} suffix="B" label="Total Value Transacted" />
            <StatCounter target={99} suffix="%" label="Title Insurance Safety" />
            <StatCounter target={100} suffix="%" label="Secureclosing Verified" />
          </div>

        </div>
      </section>

      {/* Mission / Vision Cards with micro interactivity */}
      <section className="py-24 bg-[#0a0a0f] border-y border-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#c5a880] font-bold">• Core Directives</span>
            <h2 className="font-serif text-3xl text-white font-medium">Bespoke Principles & Client Intent</h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                icon: Target,
                title: 'Our Firm Mission',
                desc: 'To safeguard client wealth, title, and corporate security by bridging classical legal rigor and fast-paced operational technology. We remove title clouds and restructure liabilities with unyielding attention.',
              },
              {
                icon: Compass,
                title: 'Strategic Counsel Vision',
                desc: 'Bringing transactional clarity to the regional real estate and general enterprise space. We envisions multi-generational client advisory that grows, adapts, and wins alongside your family estate.',
              },
            ].map((box, i) => {
              const Icon = box.icon;
              return (
                <motion.div key={i} variants={itemVariants}>
                  <ThreeDTiltCard className="border border-white/[0.04] p-8 h-full flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#c5a880]" />
                      </div>
                      <h3 className="font-serif text-2xl text-white font-semibold tracking-wide">
                        {box.title}
                      </h3>
                      <p className="font-sans text-charcoal-400 text-sm font-light leading-relaxed">
                        {box.desc}
                      </p>
                    </div>
                  </ThreeDTiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline Journey Animation Section */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-xl mx-auto mb-20 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-gold-500 font-bold">• Chronology of Success</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">Timeline Journey</h2>
        </div>

        {/* Vertical Timeline center track */}
        <div className="absolute top-[340px] bottom-20 left-4 sm:left-1/2 w-[2px] bg-gold-500/10 -translate-x-[1px] hidden sm:block" />

        <div className="space-y-12 sm:space-y-20 relative z-10">
          {TIMELINE_EVENTS.map((event, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col sm:flex-row items-stretch sm:justify-between relative ${
                  isLeft ? '' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-0 sm:left-1/2 w-6 h-6 rounded-full bg-[#0a0a0f] border-2 border-[#c5a880] -translate-x-[9px] -translate-y-1 flex items-center justify-center z-20 hidden sm:flex">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold-400" />
                </div>

                {/* Event block */}
                <div className="w-full sm:w-[45%] pl-6 sm:pl-0 sm:text-right">
                  <div className={`glass-premium p-6 rounded-xl border border-white/[0.04] text-left hover:border-gold-500/25 transition-all duration-300 ${isLeft ? 'sm:text-right' : 'sm:text-left'}`}>
                    <small className="font-mono text-xs font-semibold text-gold-500 block tracking-widest mb-1">
                      {event.year}
                    </small>
                    <h4 className="font-serif text-lg font-semibold text-white tracking-wide mb-2">
                      {event.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-charcoal-400 font-light leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </div>

                {/* Empty block to pad space on desktop */}
                <div className="w-0 sm:w-[45%] hidden sm:block" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Call to Action bar */}
      <section className="py-16 bg-[#030304] border-t border-white/[0.02]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="font-serif text-2xl sm:text-3xl text-white">Connect with Partner Counsel Today</h3>
          <p className="text-charcoal-400 text-sm max-w-lg mx-auto">
            Discuss your upcoming real estate transfer, corporate restructuring, or litigation protection directly with our directors.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 bg-[#0a0a0f] text-[#c5a880] border border-[#c5a880]/30 hover:border-[#c5a880] hover:text-white rounded text-xs uppercase tracking-widest transition-all"
          >
            Arrange a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
