/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import ThreeDTiltCard from '../components/ThreeDTiltCard';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="contact-page-container" className="pt-24 min-h-screen pb-20">
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="text-center space-y-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">• Direct Attorney Access</span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white font-medium tracking-tight">
            Connect With Our Chambers
          </h1>
          <p className="font-sans text-sm sm:text-base text-charcoal-400 font-light max-w-2xl mx-auto leading-relaxed">
            Our offices are situated inside the Providence Capital Building on Westminster Street. Schedule your residential real estate closing or corporate formation consultation.
          </p>
          <div className="w-16 h-[1.5px] bg-gold-400 mx-auto" />
        </div>

        {/* Floating Icons & Location blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Phone,
              title: 'Voice Communications',
              desc: 'Schedule e-closings, link bank coordinators, or file urgent dockets.',
              action: '(401) 274-5300',
              href: 'tel:4012745300',
            },
            {
              icon: Mail,
              title: 'Secure Digital Mail',
              desc: 'Transmit deeds, operating contracts, and title binder packages.',
              action: 'info@denellelaw.com',
              href: 'mailto:info@denellelaw.com',
            },
            {
              icon: MapPin,
              title: 'Providence Chambers',
              desc: '100 Westminster Street, Suite 1500, Providence, RI 02903',
              action: 'Providence Capital Building',
              href: 'https://maps.google.com/?q=100+Westminster+St,+Providence,+RI+02903',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <ThreeDTiltCard key={idx} className="border border-white/[0.04] p-6 hover:border-gold-500/20">
                <div className="space-y-4 text-left">
                  <div className="w-10 h-10 rounded-none bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-white tracking-wide">{item.title}</h4>
                  <p className="text-xs text-charcoal-400 leading-relaxed font-light">{item.desc}</p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono font-bold tracking-wider text-gold-500 hover:underline block pt-2"
                  >
                    {item.action} →
                  </a>
                </div>
              </ThreeDTiltCard>
            );
          })}
        </div>

        {/* Contact Form & Styled Map Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Left: Contact Form */}
          <div className="lg:col-span-6">
            <div className="glass-premium p-8 rounded-none border border-gold-500/15 relative">
              <h3 className="font-serif text-2xl text-white tracking-widest uppercase border-b border-white/[0.04] pb-4 mb-8">
                Consultation Request Ledger
              </h3>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field relative peer floating */}
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="name"
                      id="input_name"
                      value={form.name}
                      onChange={handleChange}
                      className="block py-3 px-3 w-full text-sm text-white bg-transparent border border-white/10 rounded-none focus:border-gold-500 focus:outline-noneFocus peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="input_name"
                      className="peer-focus:font-medium absolute text-xs sm:text-sm text-charcoal-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#050505] px-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-gold-500"
                    >
                      Legal Contact Name
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="email"
                      name="email"
                      id="input_email"
                      value={form.email}
                      onChange={handleChange}
                      className="block py-3 px-3 w-full text-sm text-white bg-transparent border border-white/10 rounded-none focus:border-gold-500 focus:outline-noneFocus peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="input_email"
                      className="peer-focus:font-medium absolute text-xs sm:text-sm text-charcoal-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#050505] px-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-gold-500"
                    >
                      Electronic Mail (Email)
                    </label>
                  </div>

                  {/* Phone */}
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="tel"
                      name="phone"
                      id="input_phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="block py-3 px-3 w-full text-sm text-white bg-transparent border border-white/10 rounded-none focus:border-gold-500 focus:outline-noneFocus peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="input_phone"
                      className="peer-focus:font-medium absolute text-xs sm:text-sm text-charcoal-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#050505] px-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-gold-500"
                    >
                      Telephone Number
                    </label>
                  </div>

                  {/* Selection Category */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-charcoal-400 font-mono uppercase tracking-wider block">Specialty Practice Focus</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="block w-full text-xs p-3 text-white bg-black/60 border border-white/10 rounded-none focus:border-gold-500 focus:outline-none"
                    >
                      <option value="">-- Choose Field Specialty --</option>
                      <option value="Real Estate Closing">🏡 Real Estate & Residential e-Closing</option>
                      <option value="Corporate LLC Setup">🏢 Startup & General Corporate retainer</option>
                      <option value="Estate Planning Trust">📜 Irrevocable Legacy Estate & Will drafting</option>
                      <option value="Personal Injury Defense">⚠️ Personal Injury Trial Representation</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-charcoal-400 font-mono uppercase tracking-wider block font-semibold">Inquiry Case Details</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="block w-full text-xs p-3 text-white bg-neutral-900 border border-white/10 rounded-none focus:border-gold-500 focus:outline-none focus:ring-0 leading-relaxed font-light"
                      placeholder="Provide details on the transaction date, lender, zoning, or trial requirements..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-linear-to-r from-gold-500 to-gold-400 text-black font-semibold text-xs uppercase tracking-widest rounded-none shadow-xl hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>File Strategic Inquiry</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-10 space-y-6">
                  <div className="w-16 h-16 rounded-none bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-gold-500" />
                  </div>
                  <h4 className="font-serif text-2xl text-white">Docket Transmitted</h4>
                  <p className="text-xs sm:text-sm text-charcoal-300 leading-relaxed max-w-sm mx-auto font-light">
                    Your diagnostic inquiry has been delivered safely to our clerk. A senior attorney specializing in {form.subject || 'your practice focus'} will analyze the details and follow up directly via secure encrypted call or email.
                  </p>
                  <div className="p-4 bg-gold-500/5 rounded-none border border-gold-500/20 text-[10px] font-mono text-gold-500 uppercase tracking-widest max-w-xs mx-auto">
                    TRANSMISSION COMPLETE • ID #{Math.floor(Math.random() * 800000) + 100000}
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 border border-white/10 text-charcoal-300 hover:text-white rounded-none text-xs uppercase tracking-widest"
                  >
                    Reset Form Ledger
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right: Google Map Styled Dark */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="rounded-none overflow-hidden border border-gold-500/15 relative h-[380px] sm:h-[450px] bg-neutral-950">
              {/* Overlay vignette to make light map look dark glassmorphic luxury style */}
              <div className="absolute inset-0 z-10 pointer-events-none border border-white/[0.04] bg-radial-gradient(circle, transparent 35%, #050505 100%) opacity-80" />
              
              {/* Real OpenStreetMap dark styling map iframe */}
              <iframe
                title="Denelle Law Chambers Westminster St Providence Map"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=100%20Westminster%20Street,%20Providence,%20RI%2002903+(Denelle%20Law,%20LLC)&t=k&z=17&ie=UTF8&iwloc=B&output=embed"
                style={{
                  filter: 'invert(90%) hue-rotate(180deg) contrast(1.2) brightness(0.65) saturate(0.3)',
                  border: 0,
                  opacity: 0.95,
                }}
              />
            </div>

            {/* Hours and Compliance Panel */}
            <div className="p-6 rounded-none bg-white/[0.01] border border-white/[0.03] mt-6 flex items-start space-x-4">
              <Clock className="w-6 h-6 text-gold-500 animate-pulse shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-mono text-[9px] uppercase text-[#D4AF37] tracking-widest block font-bold">Providence Chambers Schedule:</span>
                <p className="text-xs text-charcoal-350 leading-relaxed font-light">
                  Monday — Friday: 8:30 AM to 5:30 PM (EST)<br />
                  Emergency closing support or litigation holds filed 24/7 on special clerk hotlines.
                </p>
                <div className="pt-2 flex items-center space-x-1 text-[10px] text-charcoal-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-500/60" />
                  <span>ALTA certified security standards compliant.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
