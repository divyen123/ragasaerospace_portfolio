/* ══════════════════════════════════════════════════════
   RAGAS AEROSPACE — Performance Metrics Section
   Six animated counter cards with video background,
   glow divider, and mission-critical tagline.
   ══════════════════════════════════════════════════════ */

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { performanceStats } from '../data/siteData';
import SectionHeader from '../components/SectionHeader';
import AnimatedCounter from '../components/AnimatedCounter';

/* ── Asset import (graceful fallback) ── */
let perfVideo = null;
try {
  perfVideo = new URL('../assets/videos/performance-bg.mp4', import.meta.url).href;
} catch {
  perfVideo = null;
}

/* ── Animation variants ── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const counterVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Performance() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="performance" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* ── Video Background ── */}
      {perfVideo && (
        <video
          src={perfVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      )}

      {/* ── Dark overlay for readability ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/80 to-navy-950/95" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* ── Radial gradient glow behind content ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,180,255,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <SectionHeader
          title="Performance Metrics"
          subtitle="OPERATIONAL EXCELLENCE"
        />

        {/* ── Stats Grid ── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {performanceStats.map((stat) => (
            <motion.div key={stat.label} variants={counterVariants} className="h-full flex">
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Glowing Divider ── */}
        <div className="relative mt-16 mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />
          {/* Center glow dot */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                       w-2 h-2 rounded-full bg-electric shadow-glow-sm"
          />
        </div>

        {/* ── Tagline ── */}
        <motion.p
          className="text-center text-white/40 italic text-lg font-body"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Engineered for mission-critical reliability
        </motion.p>
      </div>
    </section>
  );
}
