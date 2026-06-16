/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, PenTool, CheckCircle, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data';
import { Testimonial } from '../types';
import ThreeDTiltCard from '../components/ThreeDTiltCard';

export default function ResourcesTestimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [allTestimonials, setAllTestimonials] = useState<Testimonial[]>(TESTIMONIALS_DATA);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Form states to let the client submit comments
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [feedback, setFeedback] = useState({
    name: '',
    role: '',
    quote: '',
    rating: 5,
  });

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [allTestimonials]);

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % allTestimonials.length);
    }, 7000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + allTestimonials.length) % allTestimonials.length);
    startAutoPlay();
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % allTestimonials.length);
    startAutoPlay();
  };

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.name || !feedback.quote) return;

    const newTestimonial: Testimonial = {
      id: `client-${Date.now()}`,
      clientName: feedback.name,
      role: feedback.role || 'Homeowner',
      quote: feedback.quote,
      stars: feedback.rating,
    };

    setAllTestimonials([newTestimonial, ...allTestimonials]);
    setActiveSlide(0);
    setFormSubmitted(true);
  };

  return (
    <div id="testimonials-library-container" className="pt-24 min-h-screen pb-20">
      {/* Editorial Header */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gold-400/5 rounded-full blur-[110px] pointer-events-none animate-pulse" />
        
        <div className="space-y-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#c5a880] font-semibold">• Certified Records</span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white font-medium tracking-tight">
            Client Testimonials
          </h1>
          <p className="font-sans text-sm sm:text-base text-charcoal-400 font-light max-w-2xl mx-auto leading-relaxed">
            Read true records of title resolution, complex closing coordination, and corporate transactional success compiled from Rhode Island courts and regional closings.
          </p>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto" />
        </div>
      </section>

      {/* Hero Showcase Slider */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <div className="relative glass-premium-dark rounded-2xl p-8 sm:p-16 border border-gold-500/20 shadow-2xl overflow-hidden min-h-[350px] flex flex-col justify-between">
          <Quote className="absolute right-8 top-8 w-24 h-24 text-white/[0.02] pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-1">
                {[...Array(allTestimonials[activeSlide].stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                ))}
              </div>
              
              <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl font-light italic leading-relaxed text-slate-100 max-w-4xl">
                "{allTestimonials[activeSlide].quote}"
              </blockquote>

              <div>
                <h4 className="font-serif text-lg sm:text-xl font-semibold text-white tracking-wide">
                  {allTestimonials[activeSlide].clientName}
                </h4>
                <p className="font-mono text-xs text-[#c5a880] uppercase tracking-widest mt-1">
                  {allTestimonials[activeSlide].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider controls bottom bar */}
          <div className="flex items-center justify-between pt-8 border-t border-white/[0.04] mt-8">
            <div className="font-mono text-xs text-charcoal-400">
              <span className="text-gold-500 font-bold">{activeSlide + 1}</span> / {allTestimonials.length}
            </div>
            
            <div className="flex space-x-2.5">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-gold-500/40 flex items-center justify-center text-[#c5a880]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-gold-500/40 flex items-center justify-center text-[#c5a880]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid List + Form to post feedback */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* List display */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="font-serif text-2xl text-white tracking-widest uppercase border-b border-white/[0.04] pb-4 flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-gold-500" />
              <span>Attested Case Files</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {allTestimonials.map((t) => (
                <ThreeDTiltCard
                  key={t.id}
                  className="border border-white/[0.03] p-6 hover:border-gold-500/20"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex space-x-0.5">
                        {[...Array(t.stars)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                        ))}
                      </div>
                      <span className="font-serif text-3xl text-gold-500/10 leading-none select-none">“</span>
                    </div>

                    <p className="text-xs sm:text-sm text-charcoal-300 font-light leading-relaxed italic">
                      "{t.quote}"
                    </p>

                    <div className="border-t border-white/[0.03] pt-3.5">
                      <h4 className="font-serif text-sm font-semibold text-white tracking-wide">
                        {t.clientName}
                      </h4>
                      <p className="font-mono text-[9px] uppercase text-charcoal-400 tracking-wider">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </ThreeDTiltCard>
              ))}
            </div>
          </div>

          {/* Form to submit testimonials */}
          <div className="lg:col-span-4">
            <div className="glass-premium-dark rounded-xl border border-gold-500/15 p-6 relative">
              <h3 className="font-serif text-lg text-white tracking-wide border-b border-white/[0.04] pb-3.5 flex items-center space-x-2 mb-6">
                <PenTool className="w-4.5 h-4.5 text-gold-500" />
                <span>Submit Attestation</span>
              </h3>

              {!formSubmitted ? (
                <form onSubmit={handleSubmitFeedback} className="space-y-5">
                  <div className="space-y-1">
                    <label className="text-[10px] text-charcoal-400 font-mono uppercase tracking-wider block">Your Name</label>
                    <input
                      type="text"
                      value={feedback.name}
                      onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
                      className="block w-full text-xs p-3 text-white bg-transparent border border-white/10 rounded-md focus:border-gold-500 focus:outline-none"
                      placeholder="e.g. Richard K. Vance"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] text-charcoal-400 font-mono uppercase tracking-wider block">Your Transaction Role</label>
                    <input
                      type="text"
                      value={feedback.role}
                      onChange={(e) => setFeedback({ ...feedback, role: e.target.value })}
                      className="block w-full text-xs p-3 text-white bg-transparent border border-white/10 rounded-md focus:border-gold-500 focus:outline-none"
                      placeholder="e.g. Commercial Broker / Corporate General Manager"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] text-charcoal-400 font-mono uppercase tracking-wider block">Client Rating</label>
                    <select
                      value={feedback.rating}
                      onChange={(e) => setFeedback({ ...feedback, rating: parseInt(e.target.value) })}
                      className="block w-full text-xs p-3 text-white bg-black/60 border border-white/10 rounded-md focus:border-gold-500 focus:outline-none"
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ (5 Stars Outstanding)</option>
                      <option value={4}>⭐⭐⭐⭐ (4 Stars Excellence)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] text-charcoal-400 font-mono uppercase tracking-wider block font-semibold">Your Review / Account</label>
                    <textarea
                      value={feedback.quote}
                      onChange={(e) => setFeedback({ ...feedback, quote: e.target.value })}
                      rows={5}
                      className="block w-full text-xs p-3 text-white bg-neutral-900 border border-white/10 rounded-md focus:border-gold-500 focus:outline-none focus:ring-0 leading-relaxed font-light"
                      placeholder="Detail your experience with residential e-closing software, legal drafting, litigation security, or counsel speed..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-linear-to-r from-gold-500 to-gold-400 text-black font-semibold text-xs uppercase tracking-widest rounded shadow-xl hover:scale-[1.01] active:scale-95 transition-all duration-300"
                  >
                    Post Certified Feedback
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <CheckCircle className="w-12 h-12 text-gold-500 mx-auto" />
                  <h4 className="font-serif text-lg text-white">Record Registered</h4>
                  <p className="text-xs text-charcoal-400 leading-relaxed font-light">
                    Thank you immensely. Your feedback has been prepended to the live testimonials queue. It will persist dynamically in this active browser session.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFeedback({ name: '', role: '', quote: '', rating: 5 });
                    }}
                    className="px-4 py-2 border border-white/10 text-charcoal-400 hover:text-white rounded text-xs uppercase tracking-widest"
                  >
                    File Another Feedback
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
