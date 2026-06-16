/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Shield, Sparkles, FileText, CheckCircle, Calculator, Upload, ClipboardCheck, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function OrderTitle() {
  const [dealAmount, setDealAmount] = useState(450000);
  const [dealType, setDealType] = useState<'purchase' | 'refinance' | 'commercial'>('purchase');
  
  // File upload state simulation
  const [droppedFiles, setDroppedFiles] = useState<string[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);

  // Form submit state
  const [orderSent, setOrderSent] = useState(false);
  const [fields, setFields] = useState({
    street: '',
    city: '',
    buyerName: '',
    buyerEmail: '',
    lenderName: '',
  });

  // Simple premium calculation logic to show live estimates
  const calculateTitleInsurance = () => {
    // Standard RI/MA title insurance estimation ($3.50 per $1000 + $250 base)
    const insurerFee = Math.floor(dealAmount * 0.0035 + 250);
    const settlementFee = dealType === 'refinance' ? 750 : 950;
    const adminFees = 225; // recording administrative costs
    return {
      insurerFee,
      settlementFee,
      adminFees,
      total: insurerFee + settlementFee + adminFees,
    };
  };

  const fees = calculateTitleInsurance();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files) {
      const names = Array.from(e.dataTransfer.files).map((f: any) => f.name);
      setDroppedFiles([...droppedFiles, ...names]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const names = Array.from(e.target.files).map((f: any) => f.name);
      setDroppedFiles([...droppedFiles, ...names]);
    }
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handlePublishOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fields.street || !fields.buyerName) return;
    setOrderSent(true);
  };

  return (
    <div id="order-title-container" className="pt-24 min-h-screen pb-20">
      {/* Visual Splash Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-gold-500/10 to-transparent blur-[120px] pointer-events-none z-0" />

      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        
        {/* Animated Headline banner */}
        <div className="text-center space-y-6 max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold-400/10 border border-gold-400/20 px-3 py-1 rounded-none text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] glow-gold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Encrypted Closing Pipeline</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl sm:text-6xl text-white font-medium tracking-tight leading-[1.12]"
          >
            Initiate Title Curative &<br />
            <span className="text-gold-500 font-serif italic font-light">Settlement Operations</span>
          </motion.h1>
          
          <p className="font-sans text-xs sm:text-sm text-charcoal-400 max-w-xl mx-auto leading-relaxed">
            Brokers, lenders, and buyers are invited to order title policies or upload transaction details directly. Our Providence settlement clerks will balanced ALTA statements instantly.
          </p>
          <div className="w-16 h-[1.5px] bg-gold-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left: Interactive Ordering Information & File Upload */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-8">
            <div className="glass-premium p-6 sm:p-8 rounded-none border border-gold-500/15 relative">
              <h3 className="font-serif text-2xl text-white pb-4 border-b border-white/[0.04] mb-8 flex items-center space-x-2.5">
                <ClipboardCheck className="w-5.5 h-5.5 text-gold-500" />
                <span>Transaction details</span>
              </h3>

              {!orderSent ? (
                <form onSubmit={handlePublishOrder} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Street */}
                    <div className="relative z-0 w-full group">
                      <input
                        type="text"
                        name="street"
                        value={fields.street}
                        onChange={handleFieldChange}
                        className="block py-3 px-3 w-full text-sm text-white bg-transparent border border-white/10 rounded-none focus:border-gold-500 focus:outline-none Focus peer"
                        placeholder=" "
                        required
                      />
                      <label className="absolute text-xs sm:text-sm text-charcoal-405 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#050505] px-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-gold-500">
                        Property Street Address
                      </label>
                    </div>

                    {/* Town/City */}
                    <div className="relative z-0 w-full group">
                      <input
                        type="text"
                        name="city"
                        value={fields.city}
                        onChange={handleFieldChange}
                        className="block py-3 px-3 w-full text-sm text-white bg-transparent border border-white/10 rounded-none focus:border-gold-500 focus:outline-none peer"
                        placeholder=" "
                        required
                      />
                      <label className="absolute text-xs sm:text-sm text-charcoal-405 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#050505] px-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-gold-500">
                        Town / City & State
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Buyer Name */}
                    <div className="relative z-0 w-full group">
                      <input
                        type="text"
                        name="buyerName"
                        value={fields.buyerName}
                        onChange={handleFieldChange}
                        className="block py-3 px-3 w-full text-sm text-white bg-transparent border border-white/10 rounded-none focus:border-gold-500 focus:outline-none peer"
                        placeholder=" "
                        required
                      />
                      <label className="absolute text-xs sm:text-sm text-charcoal-405 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#050505] px-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-gold-500">
                        Buyer / Borrower Name
                      </label>
                    </div>

                    {/* Buyer Email */}
                    <div className="relative z-0 w-full group">
                      <input
                        type="email"
                        name="buyerEmail"
                        value={fields.buyerEmail}
                        onChange={handleFieldChange}
                        className="block py-3 px-3 w-full text-sm text-white bg-transparent border border-white/10 rounded-none focus:border-gold-500 focus:outline-none peer"
                        placeholder=" "
                        required
                      />
                      <label className="absolute text-xs sm:text-sm text-charcoal-405 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#050505] px-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-gold-500">
                        Buyer Contact Email
                      </label>
                    </div>
                  </div>

                  {/* Lender Information */}
                  <div className="relative z-0 w-full group">
                    <input
                      type="text"
                      name="lenderName"
                      value={fields.lenderName}
                      onChange={handleFieldChange}
                      className="block py-3 px-3 w-full text-sm text-white bg-transparent border border-white/10 rounded-none focus:border-gold-500 focus:outline-none peer"
                      placeholder=" "
                    />
                    <label className="absolute text-xs sm:text-sm text-charcoal-405 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#050505] px-2 left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-gold-500">
                      Primary Lending Institutional Bank (e.g., Chase, Citizens)
                    </label>
                  </div>

                  {/* File Upload Section - Usability Pattern */}
                  <div className="space-y-2">
                    <label className="text-xs text-charcoal-400 font-mono uppercase tracking-wider block font-bold">
                      Upload Sale Contract or Loan Estimate (Mandatory documentation)
                    </label>
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`border-2 border-dashed rounded-none p-8 text-center transition-all cursor-pointer ${
                        isDragOver
                          ? 'border-gold-400 bg-gold-500/10'
                          : 'border-white/10 hover:border-gold-500/40 bg-zinc-900/40'
                      }`}
                    >
                      <input
                        type="file"
                        id="order-file-upload"
                        onChange={handleFileSelect}
                        className="hidden"
                        multiple
                      />
                      <label htmlFor="order-file-upload" className="cursor-pointer space-y-3 block">
                        <Upload className="w-10 h-10 text-gold-500 mx-auto animate-bounce" />
                        <div className="text-xs sm:text-sm font-medium text-white">
                          Drag and drop deals files here, or <span className="text-gold-500 hover:underline">browse files</span>
                        </div>
                        <p className="text-[10px] text-charcoal-450 leading-relaxed font-light">
                          Supports PDFs, DOCX, and Closing Disclosure estimates. Max size: 100MB encrypted.
                        </p>
                      </label>
                    </div>

                    {/* Show files dropped */}
                    {droppedFiles.length > 0 && (
                      <div className="p-3 bg-gold-500/10 border border-gold-500/20 rounded-none text-xs space-y-2">
                        <p className="font-mono text-[10px] text-gold-500 uppercase font-black">Files Cured Into Docket Queue:</p>
                        <ul className="list-disc pl-5 text-white space-y-1">
                          {droppedFiles.map((n, i) => (
                            <li key={i} className="font-light">{n}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* High Glow submit action button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 bg-linear-to-r from-gold-500 to-gold-400 text-black font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-none shadow-xl glow-gold-hover hover:scale-[1.01] active:scale-95 transition-all duration-300"
                    >
                      Launch Escrow & Title Clearing Order
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-none bg-gold-500/15 border border-gold-400 flex items-center justify-center mx-auto shadow-2xl">
                    <FileText className="w-8 h-8 text-gold-500" />
                  </div>
                  <h4 className="font-serif text-3xl text-gold-200">Docket Cleared into Settlement Queue</h4>
                  <p className="text-xs sm:text-sm text-charcoal-350 leading-relaxed max-w-sm mx-auto font-light">
                    The transaction for <strong>{fields.street}, {fields.city}</strong> is initiated. Our Providence title abstract clerks are pulling municipal lien records and matching lender parameters immediately. Your digital docket identifier is active in this browser.
                  </p>
                  
                  <div className="p-4 bg-gold-400/5 rounded-none border border-gold-400/20 max-w-xs mx-auto text-center space-y-1">
                    <p className="text-[10px] font-mono text-gold-500 uppercase tracking-widest leading-none">ORDER REFERENCE ID</p>
                    <p className="text-base text-white font-mono font-bold">#OS-{Math.floor(Math.random() * 90000) + 10000}-2026</p>
                  </div>

                  <button
                    onClick={() => {
                      setOrderSent(false);
                      setDroppedFiles([]);
                      setFields({ street: '', city: '', buyerName: '', buyerEmail: '', lenderName: '' });
                    }}
                    className="px-5 py-2.5 border border-white/10 text-charcoal-400 hover:text-white rounded-none text-xs tracking-widest uppercase"
                  >
                    Initiate Secondary Deal File
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right: Premium Premium Calculator */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-6">
            <div className="glass-premium-dark rounded-none border border-gold-500/25 p-6 sm:p-8">
              <h3 className="font-serif text-xl text-white pb-3.5 border-b border-white/[0.04] mb-6 flex items-center space-x-2">
                <Calculator className="w-5 h-5 text-gold-500" />
                <span>Title Escrow Fee Estimator</span>
              </h3>

              <div className="space-y-6 text-left">
                {/* Sliders for deal premium estimation */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono font-bold tracking-wider text-charcoal-400">
                    <span>TRANSACTION VALUE</span>
                    <span className="text-gold-500">${dealAmount.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={150000}
                    max={3000000}
                    step={25000}
                    value={dealAmount}
                    onChange={(e) => setDealAmount(parseInt(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-none appearance-none cursor-pointer accent-gold-500"
                  />
                </div>

                {/* Deal type select */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'purchase', label: 'Purchase' },
                    { id: 'refinance', label: 'Refinance' },
                    { id: 'commercial', label: 'Commercial' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setDealType(t.id as any)}
                      className={`py-2 text-[10px] uppercase font-bold tracking-wider rounded-none border transition-colors ${
                        dealType === t.id
                          ? 'bg-gold-500/10 text-gold-400 border-gold-500/50 shadow'
                          : 'text-charcoal-400 border-white/5 hover:border-white/15'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                {/* Fee breakdown visual */}
                <div className="pt-6 border-t border-white/[0.04] space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-charcoal-400 font-light">Estimated Title Policy Premium:</span>
                    <span className="text-white font-mono">${fees.insurerFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-charcoal-400 font-light">Attorney settlement & closing fee:</span>
                    <span className="text-white font-mono">${fees.settlementFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-light">
                    <span className="text-charcoal-400">Recording & administrative disbursements:</span>
                    <span className="text-white font-mono">${fees.adminFees.toLocaleString()}</span>
                  </div>

                  <div className="h-[1px] bg-white/[0.05] my-4" />

                  <div className="flex justify-between items-center bg-[#07070a] p-4 rounded-none border border-gold-500/10">
                    <div>
                      <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#D4AF37] block">Estimated Total Settlement</span>
                      <small className="text-[10px] text-charcoal-450 leading-none">Fully guaranteed e-closing execution</small>
                    </div>
                    <span className="text-2xl text-white font-serif font-bold text-gold-200 font-mono">${fees.total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="text-[9px] text-charcoal-450 leading-relaxed font-light flex items-start space-x-1.5 p-3 bg-white/[0.01] rounded-none border border-white/[0.03]">
                  <Shield className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>These calculators compile estimates based on standard Rhode Island and Massachusetts title insurance schedules. Full deal dockets receive customized binding quotes.</span>
                </div>
              </div>
            </div>

            {/* Quick Benefits card */}
            <div className="glass-premium p-6 rounded-none border border-white/[0.04] text-left space-y-4">
              <h4 className="font-serif text-sm font-semibold text-white tracking-widest uppercase flex items-center space-x-1.5">
                <ClipboardCheck className="w-4 h-4 text-gold-500" />
                <span>The Conveyance Protocol:</span>
              </h4>
              <ul className="space-y-3.5 text-xs text-charcoal-350 font-light pl-1">
                <li className="flex items-start space-x-2">
                  <ArrowUpRight className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                  <span>ALTA best practice guidelines are actively audited.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ArrowUpRight className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                  <span>Direct secure wire verification procedures defend transaction capital.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ArrowUpRight className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                  <span>Pre-approved title clearing services clear clouds within 48 hours.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
