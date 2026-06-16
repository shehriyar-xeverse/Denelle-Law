/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PageId } from './types';

// Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';

// Page Views
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Careers from './pages/Careers';
import ResourcesVideos from './pages/ResourcesVideos';
import ResourcesTestimonials from './pages/ResourcesTestimonials';
import PracticeAreas from './pages/PracticeAreas';
import PracticeAreasDetail from './pages/PracticeAreasDetail';
import Contact from './pages/Contact';
import OrderTitle from './pages/OrderTitle';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Trigger instant scroll behavior resetting top offsets on screen change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as any });
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'team':
        return <Team />;
      case 'careers':
        return <Careers />;
      case 'resources-videos':
        return <ResourcesVideos />;
      case 'resources-testimonials':
        return <ResourcesTestimonials />;
      case 'practice-areas':
        return <PracticeAreas onNavigate={handleNavigate} />;
      
      // Nested service modules
      case 'real-estate':
      case 'business-corporate':
      case 'estate-planning':
      case 'personal-injury':
        return <PracticeAreasDetail pageId={currentPage} onNavigate={handleNavigate} />;

      case 'contact':
        return <Contact />;
      case 'order-title':
        return <OrderTitle />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#060608] flex flex-col justify-between selection:bg-gold-500/35 selection:text-white overflow-x-hidden w-full max-w-full">
      {/* 1. Desktop mouse tail halo orb tracker */}
      <CursorGlow />

      {/* 2. Seamless sticky custom header menu */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* 3. Cinematic Router Switchboard wrapper */}
      <main className="flex-grow z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. Elegant credential footer elements */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
