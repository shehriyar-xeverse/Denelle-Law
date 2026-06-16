/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Briefcase, MapPin, ChevronDown, CheckCircle, FileText, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { JOB_POSTINGS } from '../data';
import { JobPosting } from '../types';
import ThreeDTiltCard from '../components/ThreeDTiltCard';

export default function Careers() {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  
  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    msg: '',
  });

  const toggleAccordion = (id: string) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    // Simulate submission flow
    setFormSubmitted(true);
  };

  return (
    <div id="careers-page-container" className="pt-24 min-h-screen pb-20">
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="absolute top-1/4 right-[20%] w-72 h-72 bg-gold-400/5 rounded-full blur-[90px] pointer-events-none" />

        <div className="space-y-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#c5a880] font-semibold">• Expand Your Advisory Path</span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white font-medium tracking-tight">
            Careers at Denelle Law
          </h1>
          <p className="font-sans text-sm sm:text-base text-charcoal-400 font-light max-w-2xl mx-auto leading-relaxed">
            We are looking for exceptional litigation minds, transactional paralegals, and escrow settlement coordinators to drive elite legal delivery.
          </p>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Left: Job Openings lists Accordion */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl text-white tracking-wide border-b border-white/[0.04] pb-4 flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-gold-500" />
              <span>Current Vacant Chairs</span>
            </h3>

            <div className="space-y-4">
              {JOB_POSTINGS.map((job) => {
                const isExpanded = expandedJobId === job.id;
                return (
                  <div
                    key={job.id}
                    className="glass-premium rounded-xl border border-white/[0.03] overflow-hidden transition-all duration-300 hover:border-gold-500/15"
                  >
                    {/* Accordion Trigger Header */}
                    <button
                      onClick={() => toggleAccordion(job.id)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/[0.01]"
                    >
                      <div>
                        <div className="flex items-center space-x-2.5">
                          <span className="px-2.5 py-0.5 bg-gold-500/10 text-gold-500 border border-gold-500/20 rounded text-[9px] uppercase font-bold tracking-widest">
                            {job.type}
                          </span>
                          <span className="text-[10px] text-charcoal-400 uppercase tracking-wider flex items-center font-mono">
                            <MapPin className="w-3.5 h-3.5 text-gold-500/60 mr-1 shrink-0" />
                            {job.location}
                          </span>
                        </div>
                        <h4 className="font-serif text-xl text-white font-bold tracking-wide mt-2">
                          {job.title}
                        </h4>
                        <p className="text-xs text-[#c5a880] mt-1 font-mono tracking-wider uppercase font-semibold">
                          {job.department}
                        </p>
                      </div>
                      <ChevronDown
                        className={`w-6 h-6 text-[#c5a880] transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Accordion Expanded Panel Content with Framer Motion wrapper */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2 border-t border-white/[0.03] space-y-6 text-xs sm:text-sm text-charcoal-300 font-light leading-relaxed">
                            <div className="space-y-2">
                              <h5 className="font-serif text-sm font-semibold text-white uppercase tracking-widest">The Mandate</h5>
                              <p>{job.description}</p>
                            </div>

                            <div className="space-y-2.5">
                              <h5 className="font-serif text-sm font-semibold text-white uppercase tracking-widest">Requirements</h5>
                              <ul className="list-disc pl-5 space-y-1.5 text-xs marker:text-[#c5a880]">
                                {job.requirements.map((req, idx) => (
                                  <li key={idx}>{req}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2.5">
                              <h5 className="font-serif text-sm font-semibold text-white uppercase tracking-widest">Core Responsibilities</h5>
                              <ul className="list-disc pl-5 space-y-1.5 text-xs marker:text-[#c5a880]">
                                {job.responsibilities.map((res, idx) => (
                                  <li key={idx}>{res}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="pt-4 border-t border-white/[0.03]">
                              <button
                                onClick={() => {
                                  setFormData({ ...formData, position: job.title });
                                  const formElement = document.getElementById('apply-form-box');
                                  if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-black font-semibold text-xs uppercase tracking-widest rounded transition-all duration-300"
                              >
                                Apply For This Chair
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Application Form */}
          <div className="lg:col-span-5">
            <div id="apply-form-box" className="glass-premium-dark rounded-xl border border-gold-500/15 p-6 sm:p-8 relative">
              <h3 className="font-serif text-2xl text-white tracking-wide border-b border-white/[0.04] pb-4 flex items-center space-x-2 mb-8">
                <FileText className="w-5 h-5 text-gold-500" />
                <span>Executive Dossier Intake</span>
              </h3>

              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="fullName"
                      id="floating_full_name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="block py-3 px-3 w-full text-sm text-white bg-transparent border border-white/10 rounded-md focus:border-gold-500 focus:outline-none focus:ring-0 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_full_name"
                      className="peer-focus:font-medium absolute text-xs sm:text-sm text-charcoal-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#0c0c0f] px-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-gold-500"
                    >
                      Full Name
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="email"
                      name="email"
                      id="floating_email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="block py-3 px-3 w-full text-sm text-white bg-transparent border border-white/10 rounded-md focus:border-gold-500 focus:outline-none focus:ring-0 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_email"
                      className="peer-focus:font-medium absolute text-xs sm:text-sm text-charcoal-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#0c0c0f] px-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-gold-500"
                    >
                      Email Address
                    </label>
                  </div>

                  {/* Phone */}
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="tel"
                      name="phone"
                      id="floating_phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="block py-3 px-3 w-full text-sm text-white bg-transparent border border-white/10 rounded-md focus:border-gold-500 focus:outline-none focus:ring-0 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_phone"
                      className="peer-focus:font-medium absolute text-xs sm:text-sm text-charcoal-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#0c0c0f] px-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-gold-500"
                    >
                      Contact Phone
                    </label>
                  </div>

                  {/* Desired Position Selection */}
                  <div className="space-y-1">
                    <label className="text-xs text-charcoal-400 font-mono uppercase tracking-wider block">Target Specialty Office</label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="block w-full py-3 px-3 text-sm text-white bg-black/50 border border-white/10 rounded-md focus:border-gold-500 focus:outline-none cursor-pointer"
                    >
                      <option value="">-- Select Target Post --</option>
                      <option value="Senior Conveyancing Paralegal">Senior Conveyancing Paralegal</option>
                      <option value="Corporate & Estate Planning Associate">Corporate & Estate Planning Associate</option>
                      <option value="General Escrow Settlement Clerk">General Escrow Settlement Clerk</option>
                      <option value="Summer J.D. Associate Clerkship">Summer J.D. Associate Clerkship</option>
                    </select>
                  </div>

                  {/* Message / Bio Capsule */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-charcoal-400 font-mono uppercase tracking-wider block font-semibold">Narrative Statement & Experience</label>
                    <textarea
                      name="msg"
                      rows={4}
                      value={formData.msg}
                      onChange={handleInputChange}
                      className="block w-full p-3 text-sm text-white bg-neutral-900 border border-white/10 rounded-md focus:border-gold-500 focus:outline-none focus:ring-0 leading-relaxed font-light"
                      placeholder="Briefly overview your current bar admission status or title closing history..."
                    />
                  </div>

                  {/* Submit button with glow effect feedback */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-linear-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-black font-semibold text-xs uppercase tracking-widest rounded shadow-xl glow-gold-hover hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Legal Credentials</span>
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-gold-500/10 border-2 border-gold-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-gold-500" />
                  </div>
                  <h4 className="font-serif text-2xl text-white">Credentials Received</h4>
                  <p className="text-xs sm:text-sm text-charcoal-300 leading-relaxed max-w-sm mx-auto font-light">
                    Applicant file registered securely in our internal docket. A Managing Director will evaluate your Juris Doctor status or escrow credentials and initiate safe encrypted contact.
                  </p>
                  <p className="text-[10px] font-mono text-gold-500 uppercase tracking-widest">TRANSMISSION CONFIRMED • ID #{Math.floor(Math.random() * 900000) + 100000}</p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', position: '', msg: '' });
                    }}
                    className="px-5 py-2.5 border border-white/10 text-charcoal-300 hover:text-white rounded text-xs uppercase tracking-widest hover:border-gold-500/40"
                  >
                    File Secondary Application
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
