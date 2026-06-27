import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

// Layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LogoIntro from './components/LogoIntro';

// Page sections (in display order)
import Hero from './sections/Hero';
import RAICTechnology from './sections/RAICTechnology';
import DroneSystem from './sections/DroneSystem';
import SwarmArchitecture from './sections/SwarmArchitecture';
import Applications from './sections/Applications';
import Performance from './sections/Performance';
import BusinessImpact from './sections/BusinessImpact';
import Contact from './sections/Contact';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [showLetterbox, setShowLetterbox] = useState(false);

  // Initialize GSAP ScrollTrigger on mount
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0.3, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  // Refresh GSAP triggers when scroll is unlocked
  useEffect(() => {
    if (isIntroComplete) {
      ScrollTrigger.refresh();
    }
  }, [isIntroComplete]);

  const handleIntroComplete = () => {
    setIsIntroComplete(true);
    setShowLetterbox(true);

    // Remove letterbox elements after the animation finishes
    setTimeout(() => {
      setShowLetterbox(false);
    }, 1500);
  };

  return (
    <div
      className={`relative min-h-screen bg-navy-950 text-white font-body overflow-x-hidden transition-all duration-300
                 ${!isIntroComplete ? 'h-screen overflow-hidden' : ''}`}
    >
      {/* ── Hands-free Logo Intro Animation ── */}
      <AnimatePresence>
        {!isIntroComplete && (
          <LogoIntro onIntroComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* ── Letterbox Widescreen Reveal Panels ── */}
      <AnimatePresence>
        {showLetterbox && (
          <>
            {/* Top black panel (slides up offscreen) */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: '-100%' }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="fixed top-0 left-0 right-0 h-[50vh] bg-black z-[99999] pointer-events-none"
            />
            {/* Bottom black panel (slides down offscreen) */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: '100%' }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="fixed bottom-0 left-0 right-0 h-[50vh] bg-black z-[99999] pointer-events-none"
            />
          </>
        )}
      </AnimatePresence>

      {/* ── Fixed Navigation (always mounted to prevent layout flash) ── */}
      <Navbar />

      {/* ── Main Content Sections (pre-mounted and warming up in background) ── */}
      <main>
        <Hero />
        <RAICTechnology />
        <DroneSystem />
        <Applications />
        <SwarmArchitecture />
        <Performance />
        <BusinessImpact />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
