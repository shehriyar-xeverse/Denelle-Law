/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Mail, GraduationCap, X, Scale, FileText, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TEAM_MEMBERS } from '../data';
import { TeamMember } from '../types';
import ThreeDTiltCard from '../components/ThreeDTiltCard';

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [filterCategory, setFilterCategory] = useState<'all' | 'real-estate' | 'business'>('all');

  const filteredMembers = TEAM_MEMBERS.filter((member) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'real-estate') return member.role.toLowerCase().includes('real estate') || member.role.toLowerCase().includes('managing');
    if (filterCategory === 'business') return member.role.toLowerCase().includes('business') || member.role.toLowerCase().includes('managing');
    return true;
  });

  return (
    <div id="team-page-container" className="pt-24 min-h-screen pb-20">
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gold-500/5 rounded-full blur-[90px] pointer-events-none" />

        <div className="space-y-4 mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#c5a880] font-semibold">• Strategic Counselors</span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white font-medium tracking-tight">
            Our Defense Council
          </h1>
          <p className="font-sans text-sm sm:text-base text-charcoal-400 font-light max-w-2xl mx-auto leading-relaxed">
            Meet the Attorneys and Managing Directors standing at the center of Denelle Law. We deliver direct advisory and precise trial action.
          </p>
          <div className="w-16 h-[1.5px] bg-gold-400 mx-auto" />
        </div>

        {/* Categories Filter Controls */}
        <div className="flex justify-center items-center space-x-2.5 bg-white/[0.01] border border-white/[0.04] p-1.5 rounded-full max-w-md mx-auto mb-16">
          {[
            { id: 'all', label: 'All Counsel' },
            { id: 'real-estate', label: 'Conveyancing & Closing' },
            { id: 'business', label: 'Corporate & Estate' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id as 'all' | 'real-estate' | 'business')}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full transition-all duration-300 ${
                filterCategory === cat.id
                  ? 'bg-gold-500 text-black shadow-lg shadow-gold-500/15'
                  : 'text-charcoal-300 hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Team Members Grid with entrance animation */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredMembers.map((member) => (
              <motion.div
                layout
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ThreeDTiltCard
                  onClick={() => setSelectedMember(member)}
                  className="group flex flex-col justify-between border border-white/[0.04] p-0 h-full overflow-hidden"
                >
                  <div className="relative aspect-4/5 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 filter transition-all duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    
                    {/* Hover prompt label */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-serif text-lg sm:text-xl font-medium text-white group-hover:text-gold-200 transition-colors uppercase leading-tight">
                          {member.name}
                        </h4>
                        <p className="font-mono text-[9px] uppercase text-gold-500/90 tracking-widest mt-1">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 bg-white/[0.01] border-t border-white/[0.03] space-y-3">
                    <p className="text-xs font-light text-charcoal-400 line-clamp-2 text-left leading-relaxed">
                      {member.bio}
                    </p>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#c5a880] flex items-center space-x-1 hover:underline text-left">
                      <span>Examine Attorney Credentials</span>
                      <span>→</span>
                    </span>
                  </div>
                </ThreeDTiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Counselor Detail Interactive Modal */}
      <AnimatePresence>
        {selectedMember && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed inset-y-8 inset-x-4 max-w-3xl mx-auto glass-premium-dark rounded-2xl border border-gold-500/25 z-50 p-6 sm:p-10 flex flex-col md:flex-row gap-8 overflow-y-auto"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/5 text-charcoal-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Area */}
              <div className="w-full md:w-2/5 shrink-0">
                <div className="rounded-xl overflow-hidden border border-gold-500/20 aspect-3/4">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="flex items-center space-x-2 text-xs text-gold-500 hover:underline hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 shrink-0" />
                    <span>{selectedMember.email}</span>
                  </a>
                  <div className="flex items-center space-x-2 text-xs text-charcoal-400">
                    <Scale className="w-4 h-4 shrink-0 text-gold-500/50" />
                    <span>T: (401) 274-5300 ex. 10{selectedMember.id}</span>
                  </div>
                </div>
              </div>

              {/* Text Credentials content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium uppercase tracking-wide leading-none mb-1 text-gold-200">
                    {selectedMember.name}
                  </h3>
                  <span className="font-mono text-xs uppercase text-gold-500/80 tracking-widest font-semibold block mt-1.5 border-b border-white/[0.04] pb-4">
                    {selectedMember.role}
                  </span>
                </div>

                <div className="space-y-4">
                  <h5 className="font-serif text-sm font-semibold text-white uppercase tracking-widest flex items-center space-x-1.5">
                    <FileText className="w-4 h-4 text-gold-500" />
                    <span>Profile Manifesto</span>
                  </h5>
                  <p className="text-xs sm:text-sm text-charcoal-300 font-light leading-relaxed">
                    {selectedMember.bio}
                  </p>
                </div>

                <div className="space-y-4">
                  <h5 className="font-serif text-sm font-semibold text-white uppercase tracking-widest flex items-center space-x-1.5">
                    <GraduationCap className="w-4 h-4 text-gold-500" />
                    <span>Academic Credentials</span>
                  </h5>
                  <ul className="space-y-2 text-xs text-charcoal-400 font-light pl-4 list-disc marker:text-[#c5a880]">
                    {selectedMember.credentials.map((cred, i) => (
                      <li key={i}>{cred}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between">
                  <span className="text-[10px] text-charcoal-400 uppercase font-mono tracking-widest">Office location: Providence, RI</span>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="px-4 py-2 border border-white/10 hover:border-gold-500/30 text-[10px] uppercase tracking-widest font-bold text-[#c5a880] hover:text-white rounded transition-colors"
                  >
                    Confirm Review
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
