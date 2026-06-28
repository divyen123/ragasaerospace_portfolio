/* ══════════════════════════════════════════════════════
   RAGAS AEROSPACE — Hero Section
   Full-screen cinematic intro with video bg, particles,
   HUD overlay, and staggered entrance animations.
   ══════════════════════════════════════════════════════ */

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ParticleField from '../components/ParticleField';
import HUDOverlay from '../components/HUDOverlay';

/* ── Asset imports (graceful fallback if missing) ── */
let heroVideo = null;
try {
  heroVideo = new URL('../assets/videos/hero-drone.mp4', import.meta.url).href;
} catch {
  heroVideo = null;
}

/* ── Framer-motion orchestration ── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const bounceVariants = {
  animate: {
    y: [0, 12, 0],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
  },
};

export default function Hero() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex items-center pt-28 md:pt-36 pb-16"
    >
      {/* ── Video Background (Full width, content shifted right and slightly up via object-position) ── */}
      {heroVideo && (
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[50%_40%] md:object-[68%_40%] z-0"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      )}

      {/* ── Slight background dimming overlays for text readability ── */}
      {/* Uniform dimming layer */}
      <div className="absolute inset-0 z-10 bg-navy-950/45 pointer-events-none" />
      {/* Subtle vertical gradient to protect the top header and bottom HUD indicators */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy-950/60 via-transparent to-navy-950/75 pointer-events-none" />
      {/* Strong bottom fade gradient to blend video seamlessly into the page background */}
      <div className="absolute inset-x-0 bottom-0 h-48 z-10 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent pointer-events-none" />

      {/* ── Particle field ── */}
      <div className="particle-canvas">
        <ParticleField />
      </div>

      {/* ── HUD tactical overlay ── */}
      <HUDOverlay />

      {/* ── Main Content (Shifted slightly bottom) ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-20">
        <motion.div
          className="text-center max-w-5xl mx-auto flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Tag line — small label */}
          <motion.p
            variants={childVariants}
            className="tracking-[0.3em] text-electric/70 text-xs font-mono uppercase mb-4"
          >
            Autonomous Aerial Intelligence
          </motion.p>

          {/* Company name — RAGAS */}
          <motion.h1
            variants={childVariants}
            className="text-6xl md:text-8xl font-heading font-black text-white leading-none text-glow-strong"
          >
            RAGAS
          </motion.h1>

          {/* Sub-heading — AEROSPACE */}
          <motion.h2
            variants={childVariants}
            className="text-4xl md:text-6xl font-heading font-light text-white/90 tracking-[0.2em] mt-2"
          >
            AEROSPACE
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={childVariants}
            className="text-xl md:text-2xl text-electric/80 italic mt-4"
          >
            Decisions in the Sky
          </motion.p>

          {/* CTA Buttons (Smaller sizing) ── */}
          <motion.div
            variants={childVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            {/* Primary CTA */}
            <a
              href="#raic"
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-electric-600 to-electric
                         text-navy-950 font-heading text-xs font-bold tracking-wider uppercase
                         rounded-full px-6 py-2.5 w-full sm:w-auto
                         shadow-glow-sm hover:shadow-glow-lg
                         transition-all duration-300 hover:scale-105"
            >
              Explore RAIC Technology
            </a>

            {/* Secondary CTA */}
            <a
              href="#applications"
              className="inline-flex items-center justify-center gap-2 border border-electric/40
                         text-electric font-heading text-xs font-bold tracking-wider uppercase
                         rounded-full px-6 py-2.5 w-full sm:w-auto
                         hover:bg-electric/10 hover:border-electric/70
                         transition-all duration-300"
            >
              View Applications
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
