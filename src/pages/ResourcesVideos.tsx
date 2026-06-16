/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { Play, Video, BookOpen, Clock, Tag, X, Volume2, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { VIDEO_GUIDES } from '../data';
import { VideoGuide } from '../types';
import ThreeDTiltCard from '../components/ThreeDTiltCard';

export default function ResourcesVideos() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'buying-mortgage' | 'financing' | 'closing-credit' | 'selling' | 'trid'>('all');
  const [selectedVideo, setSelectedVideo] = useState<VideoGuide | null>(null);

  // States for player simulation
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [elapsedTime, setElapsedTime] = useState('00:00');
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Lock background scroll when modal open
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
      setIsPlaying(true);
      setProgress(0);
      setElapsedTime('00:00');
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedVideo]);

  // Sync real video playback state with isPlaying state
  useEffect(() => {
    if (selectedVideo && videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, selectedVideo]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      if (duration) {
        setProgress((current / duration) * 100);
      }
      
      // Calculate elapsed readable timeline string
      const mins = Math.floor(current / 60);
      const secs = Math.floor(current % 60);
      setElapsedTime(`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`);
    }
  };

  const filteredVideos = VIDEO_GUIDES.filter((vid) => {
    if (activeCategory === 'all') return true;
    return vid.category === activeCategory;
  });

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'buying-mortgage': return 'Buying & Mortgage';
      case 'financing': return 'Financing Education';
      case 'closing-credit': return 'Closing & Credit Prep';
      case 'selling': return 'Selling Curation';
      case 'trid': return 'TRID Education Standard';
      default: return 'General Resource';
    }
  };

  return (
    <div id="video-library-container" className="pt-24 min-h-screen pb-20">
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute top-1/4 right-[25%] w-80 h-80 bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="text-center space-y-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#c5a880] font-semibold">• Educational Briefing Rooms</span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white font-medium tracking-tight">
            Client Video Library
          </h1>
          <p className="font-sans text-sm sm:text-base text-charcoal-400 font-light max-w-2xl mx-auto leading-relaxed">
            Short, tactical video modules prepared by our attorneys to walk buyers, sellers, and corporate executives through transactional legal compliance.
          </p>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto" />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 max-w-3xl mx-auto bg-white/[0.01] border border-white/[0.04] p-2 rounded-2xl">
          {[
            { id: 'all', label: 'All Modules' },
            { id: 'buying-mortgage', label: 'Buying & Mortgage' },
            { id: 'financing', label: 'Financing' },
            { id: 'closing-credit', label: 'Closing & Title' },
            { id: 'selling', label: 'Selling Guides' },
            { id: 'trid', label: 'TRID Standards' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 text-[10px] sm:text-xs uppercase tracking-wider font-semibold rounded-lg transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gold-500 text-black shadow-lg shadow-gold-500/15'
                  : 'text-charcoal-300 hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((vid) => (
              <motion.div
                layout
                key={vid.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
              >
                <ThreeDTiltCard
                  onClick={() => {
                    setSelectedVideo(vid);
                    setIsPlaying(true);
                    setProgress(0);
                  }}
                  className="group flex flex-col justify-between border border-white/[0.04] p-0 h-full overflow-hidden"
                >
                  {/* Video Thumbnail area */}
                  <div className="relative aspect-16/9 overflow-hidden">
                    <img
                      src={vid.embedUrl}
                      alt={vid.title}
                      className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-black/80 border border-gold-500/30 text-gold-500 flex items-center justify-center group-hover:scale-110 group-hover:border-gold-400 shadow-2xl transition-transform duration-300">
                        <Play className="w-6 h-6 fill-gold-500 text-gold-500 translate-x-0.5" />
                      </div>
                    </div>
                    
                    {/* Timestamp Tag */}
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/85 rounded flex items-center space-x-1 border border-white/10">
                      <Clock className="w-3.5 h-3.5 text-gold-500" />
                      <span className="text-[10px] text-white font-mono">{vid.duration}</span>
                    </div>
                  </div>

                  {/* Descriptions area */}
                  <div className="p-6 space-y-4 text-left bg-white/[0.01]">
                    <div className="flex items-center space-x-1.5 text-[10px] text-gold-500 uppercase font-mono tracking-wider">
                      <Tag className="w-3.5 h-3.5 text-gold-500/80" />
                      <span>{getCategoryLabel(vid.category)}</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-bold tracking-wide">
                      {vid.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-400 font-light leading-relaxed line-clamp-3">
                      {vid.description}
                    </p>
                    <div className="pt-2 flex items-center justify-between text-[11px] font-mono tracking-widest text-[#c5a880] uppercase">
                      <span>Stream Guide briefing</span>
                      <span>Play Now →</span>
                    </div>
                  </div>
                </ThreeDTiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Cinematic Modal Video Player Overlay */}
      <AnimatePresence>
        {selectedVideo && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
              className="fixed inset-0 bg-black z-[1000] cursor-pointer backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: '-50%', y: '-48%' }}
              animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
              exit={{ opacity: 0, scale: 0.95, x: '-50%', y: '-48%' }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-2xl bg-[#080808] border border-gold-500/20 z-[1001] p-5 sm:p-7 shadow-2xl flex flex-col overflow-y-auto max-h-[90vh] rounded-none space-y-4"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/[0.04] pb-3">
                <div className="flex items-center space-x-2.5">
                  <Video className="w-5 h-5 text-gold-500" />
                  <span className="font-mono text-[10px] uppercase text-gold-500 tracking-wider font-semibold">
                    Denelle Law Private Briefing
                  </span>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-1 text-charcoal-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Real HTML5 Cinematic Video Player Container */}
              <div className="relative aspect-16/9 bg-black border border-white/10 rounded-none overflow-hidden group">
                <video
                  ref={videoRef}
                  src="https://assets.mixkit.co/videos/preview/mixkit-gavel-and-books-on-a-wooden-table-40111-large.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  className="w-full h-full object-cover brightness-[0.7] saturate-75"
                />
                
                {/* Control overlay & simulated timing feedback */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/85 via-transparent to-black/40">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 bg-gold-500/10 border border-gold-500/30 rounded-none text-[8px] uppercase tracking-widest text-[#D4AF37] font-mono">
                      Secure Stream
                    </span>
                    <span className="text-[9px] text-charcoal-400 font-mono tracking-wider">
                      1080p WebStream
                    </span>
                  </div>

                  {/* Play Center Action Button */}
                  <div className="text-center space-y-2">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-12 h-12 rounded-full bg-gold-500 hover:bg-gold-600 text-black flex items-center justify-center mx-auto cursor-pointer shadow-lg transition-colors"
                    >
                      {isPlaying ? <Volume2 className="w-5 h-5" /> : <Play className="w-5 h-5 translate-x-0.5 fill-current" />}
                    </motion.div>
                    <p className="font-serif text-sm text-white font-medium tracking-wide">
                      {isPlaying ? 'Streaming Legal Briefing...' : 'Briefing Paused'}
                    </p>
                  </div>

                  {/* Dynamic control timeline bar */}
                  <div className="space-y-1.5">
                    <div 
                      className="relative w-full h-1 bg-white/10 rounded-none overflow-hidden cursor-pointer"
                      onClick={(e) => {
                        if (videoRef.current) {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const pos = (e.clientX - rect.left) / rect.width;
                          videoRef.current.currentTime = pos * videoRef.current.duration;
                        }
                      }}
                    >
                      <div
                        className="absolute h-full bg-gold-500 left-0 top-0 transition-all duration-150"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between items-center text-[9px] text-charcoal-400 font-mono">
                      <span>{elapsedTime}</span>
                      <span>{selectedVideo.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Briefing text documentation below */}
              <div className="space-y-3 text-left">
                <h4 className="font-serif text-xl sm:text-2xl text-white font-bold tracking-tight">
                  {selectedVideo.title}
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-300 font-light leading-relaxed">
                  {selectedVideo.description}
                </p>

                <div className="p-3.5 bg-gold-500/5 rounded-none border border-gold-500/15 text-xs text-charcoal-300 flex items-start space-x-3 leading-relaxed">
                  <ShieldAlert className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Regulatory Notice:</strong> These digital modules serve purely as general educational frameworks and do not constitute formal retainer-based attorney-client legal counsel. Consult a Denelle Attorney in Providence to address specific deal terms.
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
