/* ══════════════════════════════════════════════════════
   RAGAS AEROSPACE — Drone System Section
   Product showcase with image, spec categories,
   and powered-by banner.
   ══════════════════════════════════════════════════════ */

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, Cpu, Joystick } from 'lucide-react';
import { droneSpecs } from '../data/siteData';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';

/* ── Asset imports (graceful fallback) ── */
let droneImage1 = null;
try {
  droneImage1 = new URL('../assets/images/drone-1.jpg', import.meta.url).href;
} catch {
  droneImage1 = null;
}

/* ── Animation variants ── */
const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function DroneSystem() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [openCategory, setOpenCategory] = useState(-1);

  return (
    <section id="drone-system" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* ── Full-Section Background Image ── */}
      {droneImage1 && (
        <img
          src={droneImage1}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      )}

      {/* ── Dark gradient overlay for readability ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/75 to-navy-950/95" />
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* ── Content (sits above background) ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <SectionHeader
          title="Advanced Drone System"
          subtitle="AUTONOMOUS UAV PLATFORM"
        />

        {/* ─── Spec Category Cards ─── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
          variants={slideInRight}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {droneSpecs.map((spec, index) => (
            <button
              key={spec.category}
              onClick={() => setOpenCategory(index)}
              className="glass rounded-xl px-5 py-5 text-center
                         hover:shadow-glow-md hover:border-electric/40 hover:scale-[1.03]
                         transition-all duration-300 cursor-pointer group"
            >
              <span className="font-heading text-electric text-xs md:text-sm tracking-widest uppercase
                               group-hover:text-glow transition-all duration-300">
                {spec.category}
              </span>
            </button>
          ))}
        </motion.div>

        {/* ─── Centered Popup Modal ─── */}
        <AnimatePresence>
          {openCategory !== -1 && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 z-50 bg-navy-950/70 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setOpenCategory(-1)}
              />

              {/* Modal */}
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpenCategory(-1)}
              >
                <motion.div
                  className="glass border border-electric/30 rounded-2xl shadow-glow-lg
                             w-full max-w-lg p-8 relative"
                  initial={{ opacity: 0, scale: 0.85, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: 30 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setOpenCategory(-1)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-electric/10
                               border border-electric/20 flex items-center justify-center
                               hover:bg-electric/20 transition-colors duration-200"
                    aria-label="Close"
                  >
                    <span className="text-electric text-sm font-bold">✕</span>
                  </button>

                  {/* Category title */}
                  <h3 className="font-heading text-electric text-lg tracking-widest uppercase mb-6">
                    {droneSpecs[openCategory].category}
                  </h3>

                  {/* Items list */}
                  <ul className="space-y-3">
                    {droneSpecs[openCategory].items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] text-white/90 leading-relaxed">
                        <span className="mt-2 w-2 h-2 rounded-full bg-electric shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* ── Powered-By Banner ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16 max-w-2xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* NVIDIA Jetson */}
          <div className="glass-gold rounded-2xl p-6 text-center hover:shadow-glow-gold transition-shadow duration-300">
            <Cpu className="w-8 h-8 text-gold mx-auto mb-3" />
            <p className="font-heading text-sm text-gold tracking-widest">
              NVIDIA JETSON
            </p>
            <p className="text-xs text-white/40 mt-1">Edge AI Compute</p>
          </div>

          {/* CrossFlight */}
          <div className="glass-gold rounded-2xl p-6 text-center hover:shadow-glow-gold transition-shadow duration-300">
            <Joystick className="w-8 h-8 text-gold mx-auto mb-3" />
            <p className="font-heading text-sm text-gold tracking-widest">
              CROSSFLIGHT V1.1
            </p>
            <p className="text-xs text-white/40 mt-1">Flight Controller</p>
          </div>
        </motion.div>

        {/* ── Floating RAIC Badge (Moved to bottom) ── */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass-gold rounded-full px-6 py-2 shadow-glow-gold">
            <span className="font-heading text-xs text-gold tracking-[0.3em]">
              RAIC™ POWERED AUTONOMOUS PLATFORM
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
