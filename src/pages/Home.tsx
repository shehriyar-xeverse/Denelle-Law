/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Scale, Award, Heart, ArrowRight, Star, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { PageId } from '../types';
import { PARTNERS_LOGOS, TESTIMONIALS_DATA } from '../data';
import ThreeDTiltCard from '../components/ThreeDTiltCard';

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startTestimonialAutoSlide();
    return () => {
      if (testimonialTimer.current) clearInterval(testimonialTimer.current);
    };
  }, []);

  const startTestimonialAutoSlide = () => {
    if (testimonialTimer.current) clearInterval(testimonialTimer.current);
    testimonialTimer.current = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
    startTestimonialAutoSlide();
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    startTestimonialAutoSlide();
  };

  // Viewport stagger animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div id="home-page-container">
      {/* 1. HERO SECTION */}
      <section className="relative h-[100dvh] min-h-[580px] sm:h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Panoramic image background of heavy-metal modern architecture / luxury estate */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000"
            alt="Denelle Law Luxury Cinematic Estate"
            className="w-full h-full object-cover object-center scale-105"
            style={{
              filter: 'brightness(0.28) contrast(1.1) saturate(0.85)',
            }}
          />
          {/* Complex overlay gradients to achieve seamless dark blend in luxury corporate style */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/50" />
          <div className="absolute inset-0 bg-radial-gradient(circle, transparent 20%, #050505 100%) opacity-70" />
        </div>

        {/* Floating background graphic element */}
        <div className="absolute top-1/4 right-[5%] w-72 h-72 bg-gold-500/5 rounded-full blur-[90px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 left-[5%] w-96 h-96 bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Hero content area */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="space-y-6"
          >
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] max-w-5xl mx-auto">
              Bespoke Representation.<br />
              <span className="text-gold-500 font-serif font-light italic">Cinematic Precision.</span>
            </h1>

            <p className="font-sans text-charcoal-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed tracking-wider">
              Denelle Law blends multi-generational real estate, corporate strategy, 
              estate security, and injury defense with lightning-fast closing technology.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => onNavigate('order-title')}
                className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-black font-semibold text-xs uppercase tracking-widest rounded-none shadow-xl glow-gold-hover hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Order Title Insurance
              </button>
              <button
                onClick={() => onNavigate('practice-areas')}
                className="w-full sm:w-auto px-8 py-4 bg-[#050505]/90 hover:bg-black text-white border border-white/10 hover:border-gold-500/40 rounded-none text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Explore Practices
              </button>
            </div>
          </motion.div>

          {/* Quick values ticker bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-white/[0.04] pt-8"
          >
            {[
              { val: '$2B+', lbl: 'Real Estate Closings' },
              { val: '25+', lbl: 'Years Combined Advocacy' },
              { val: '100%', lbl: 'Secure Insight Rating' },
              { val: 'RI • MA • CT', lbl: 'Admitted Jurisdictions' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-mono text-xl sm:text-2xl font-semibold text-gold-500 tracking-wide">{stat.val}</p>
                <p className="text-[10px] uppercase text-charcoal-400 font-medium tracking-wider mt-1">{stat.lbl}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. SECTION 1: WELCOME TO DENELLE LAW */}
      <section className="relative py-24 bg-[#050505] border-t border-white/[0.02]">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-900/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="img-zoom-parent rounded-none border border-gold-500/10 shadow-2xl overflow-hidden aspect-4/5">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
                  alt="Denelle Law Advocate"
                  className="w-full h-full object-cover brightness-95 filter saturate-75"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-premium px-6 py-5 rounded-none border border-gold-500/20 shadow-2xl max-w-[240px] hidden sm:block">
                <div className="flex items-center space-x-2">
                  <Award className="w-8 h-8 text-gold-500" />
                  <div>
                    <h5 className="font-serif text-sm font-semibold text-white">Top Rated Firm</h5>
                    <p className="text-[10px] uppercase text-charcoal-400 tracking-wider">Providence Business News</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-gold-500 font-semibold">• Firm Proclamation</span>
                <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium leading-[1.2]">
                  Welcome to Denelle Law, LLC
                </h2>
              </div>

              <div className="space-y-4 font-light text-sm sm:text-base text-charcoal-300 leading-relaxed max-w-3xl">
                <p>
                  At Denelle Law, we believe that legal representation is more than just navigating statutes—it is a pursuit of excellence designed to give you strategic security, protection, and transactional advantage.
                </p>
                <p>
                  Based in Providence, we have built a reputation for handling high-value transactions, commercial conveyancing, regulatory corporate compliance, and meticulous property transitions. Our firm utilizes state-of-the-art secure title settlement software, ensuring residential and commercial closings happen efficiently, securely, and seamlessly.
                </p>
                <p>
                  Whether launching a brand, planning legacy trusts for your heirs, closing on a dream home, or demanding justice in a personal injury action, you receive dedicated partner-level counsel focused entirely on your peace of mind and success.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  'Secure, encrypted closing workflows',
                  'Multilingual support integrations',
                  'ALTA Best Practices certified closing agent',
                  'Experienced litigation trial advocates',
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2.5 text-xs text-charcoal-200">
                    <div className="w-5 h-5 rounded-none bg-gold-500/10 flex items-center justify-center border border-gold-500/20 shrink-0">
                      <Check className="w-3 h-3 text-gold-500" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center space-x-2 text-gold-500 hover:text-white font-semibold text-xs uppercase tracking-widest group transition-colors duration-300"
                >
                  <span>Our Corporate History</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTION 2: HONESTY, INTEGRITY & RESPECT (Animated Info Cards) */}
      <section className="relative py-24 bg-[#050505] border-t border-white/[0.01]">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[110px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">• Core Directives</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium">Honesty, Integrity & Respect</h2>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
            <p className="font-sans text-charcoal-400 font-light text-sm tracking-wide">
              We anchor our interactions at the highest level of professional ethics, safeguarding client trust with absolute dedication.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: ShieldCheck,
                title: 'Abiding Honesty',
                desc: 'We offer accurate legal diagnostics, realistic projections, and complete transparency on pricing structure. No administrative surprises, ever.',
              },
              {
                icon: Scale,
                title: 'Uncompromised Integrity',
                desc: 'Certified by top international settlement platforms, we strictly abide by escrow regulations and title insurance security protocols to defend capital.',
              },
              {
                icon: Heart,
                title: 'Peerless Client Respect',
                desc: 'We value your distinct perspective and time. Calls are returned promptly, meetings are prioritized, and clients are treated as integral strategic partners.',
              },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div key={i} variants={itemVariants}>
                  <ThreeDTiltCard className="h-full flex flex-col justify-between border border-white/[0.05]">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-none bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white tracking-wide">
                        {card.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-charcoal-400 font-light leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </ThreeDTiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 4. SECTION 3: TESTIMONIALS SLIDER */}
      <section className="relative py-24 bg-[#050505] border-t border-white/[0.02]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gold-950/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">• Case Success Stories</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium">Real Feedback From Active Clients</h2>
          </div>

          <div className="glass-premium-dark rounded-none p-8 sm:p-14 border border-gold-500/15 relative overflow-hidden">
            {/* Quote decoration */}
            <div className="absolute -top-6 -left-2 text-white/[0.03] font-serif text-[280px] leading-none pointer-events-none select-none">“</div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 relative z-10"
              >
                <div className="flex items-center space-x-1">
                  {[...Array(TESTIMONIALS_DATA[activeTestimonial].stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl font-light italic leading-relaxed text-slate-100">
                  "{TESTIMONIALS_DATA[activeTestimonial].quote}"
                </blockquote>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-white tracking-wide">
                    {TESTIMONIALS_DATA[activeTestimonial].clientName}
                  </h4>
                  <p className="font-mono text-xs text-gold-500 font-medium tracking-widest uppercase mt-1">
                    {TESTIMONIALS_DATA[activeTestimonial].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="flex items-center space-x-3 mt-10 relative z-10 justify-end">
              <button
                onClick={handlePrevTestimonial}
                className="w-10 h-10 rounded-none border border-white/10 hover:border-gold-500/50 flex items-center justify-center text-charcoal-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextTestimonial}
                className="w-10 h-10 rounded-none border border-white/10 hover:border-gold-500/50 flex items-center justify-center text-charcoal-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('resources-testimonials')}
              className="font-mono text-[11px] tracking-widest text-[#D4AF37] uppercase hover:underline"
            >
              View All Client Records
            </button>
          </div>
        </div>
      </section>

      {/* 5. SECTION 4: OUR PARTNERS (Logo Carousel Animation) */}
      <section className="relative py-16 bg-[#050505] border-t border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">Insured Platforms & Integration Networks</p>
          </div>

          {/* Premium Logo Strip Carousel */}
          <div className="relative overflow-hidden w-full py-4 border-y border-white/[0.02]">
            <div className="flex w-[200%] gap-6 animate-carousel">
              {/* Loop logos twice to guarantee seamless animation */}
              {[...PARTNERS_LOGOS, ...PARTNERS_LOGOS].map((p, idx) => (
                <div
                  key={idx}
                  className="flex-1 min-w-[200px] flex flex-col items-center justify-center text-center p-3 grayscale hover:grayscale-0 transition-all duration-500 cursor-default"
                >
                  <span className="font-serif text-lg tracking-[0.12em] font-extrabold text-white group-hover:text-gold-500 transition-colors uppercase">
                    {p.name}
                  </span>
                  <span className="text-[9px] tracking-wider uppercase text-charcoal-400 font-light mt-1">
                    {p.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded carousel CSS purely inline inside a custom style tag for zero file system dependencies */}
      <style>{`
        @keyframes carousel-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-carousel {
          animation: carousel-infinite 22s linear infinite;
        }
        .animate-carousel:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
