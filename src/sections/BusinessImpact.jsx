/* ══════════════════════════════════════════════════════
   RAGAS AEROSPACE — Business Impact Section
   Full-bleed cinematic slideshow with prev/next navigation.
   Each slide: full background image + text overlay on left.
   Smooth crossfade transitions between slides.
   ══════════════════════════════════════════════════════ */

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/* ── Import all impact images ── */
import imgReducesLabour from '../assets/images/impact/impact-reduces-labour.jpg';
import imgImprovesSafety from '../assets/images/impact/impact-improves-safety.jpg';
import imgHardToReach from '../assets/images/impact/image.png';
import imgFasterDecisions from '../assets/images/impact/impact-faster-decisions.jpg';
import imgScalableMissions from '../assets/images/impact/impact-scalable-missions.jpg';
import imgIndigenousInnovation from '../assets/images/impact/impact-indigenous-innovation.jpg';

/* ── Slide data: each business impact with its image ── */
const slides = [
  {
    title: 'Reduces Manual Labour',
    headline: 'Reduces\nManual Labour',
    description:
      'Automate repetitive aerial tasks that previously required teams of field workers, reducing operational costs by up to 70% while increasing coverage and consistency.',
    image: imgReducesLabour,
  },
  {
    title: 'Improves Safety',
    headline: 'Improves\nSafety',
    description:
      'Remove human operators from hazardous environments — high-voltage power lines, toxic industrial zones, disaster sites, and active conflict areas.',
    image: imgImprovesSafety,
  },
  {
    title: 'Accesses Hard-to-Reach Areas',
    headline: 'Accesses\nHard-to-Reach\nAreas',
    description:
      'Deploy drones in terrain inaccessible to ground vehicles — mountains, dense forests, offshore platforms, and collapsed structures.',
    image: imgHardToReach,
  },
  {
    title: 'Enables Faster Decisions',
    headline: 'Enables\nFaster Decisions',
    description:
      'Real-time data streaming and AI-powered analytics deliver actionable intelligence in seconds, not days. Command centres receive live feeds with automated threat detection.',
    image: imgFasterDecisions,
  },
  {
    title: 'Scalable Autonomous Missions',
    headline: 'Scalable\nAutonomous\nMissions',
    description:
      'Swarm technology enables simultaneous multi-drone operations that scale from a single UAV to a fleet of 50+, autonomously coordinating complex missions.',
    image: imgScalableMissions,
  },
  {
    title: 'Indigenous Aerospace Innovation',
    headline: 'Indigenous\nAerospace\nInnovation',
    description:
      'Proudly developing cutting-edge autonomous systems with homegrown technology, advancing national aerospace capability and self-reliance in critical defence technology.',
    image: imgIndigenousInnovation,
  },
];

/* ── Animation variants ── */
const imageVariants = {
  enter: { opacity: 0, scale: 1.08 },
  center: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    scale: 1.04,
    transition: { duration: 0.6, ease: 'easeIn' },
  },
};

const textVariants = {
  enter: { opacity: 0, x: -40, y: 20 },
  center: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    x: -30,
    y: -10,
    transition: { duration: 0.4, ease: 'easeIn' },
  },
};

export default function BusinessImpact() {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const slide = slides[current];

  return (
    <section
      id="business-impact"
      className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden"
    >
      {/* ══════════════════════════════════════════════
          BACKGROUND IMAGE — full bleed with crossfade
          ══════════════════════════════════════════════ */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover"
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
        />
      </AnimatePresence>

      {/* ── Dark gradient overlay (heavier on left for text readability) ── */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(
            90deg,
            rgba(2,6,23,0.88) 0%,
            rgba(2,6,23,0.65) 40%,
            rgba(2,6,23,0.25) 70%,
            rgba(2,6,23,0.15) 100%
          )`,
        }}
      />
      {/* Bottom fade for seamless section blending */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-navy-950 to-transparent" />
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-24 z-10 bg-gradient-to-b from-navy-950/60 to-transparent" />

      {/* ══════════════════════════════════════════════
          TEXT CONTENT — left aligned, matching the template
          ══════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="max-w-xl"
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Section badge */}
              <p className="text-xs font-mono tracking-[0.3em] text-gold/70 uppercase mb-6">
                Business Impact — {String(current + 1).padStart(2, '0')}/{String(slides.length).padStart(2, '0')}
              </p>

              {/* Headline — large, multi-line, matching template style */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-body font-bold text-white leading-[1.05] whitespace-pre-line mb-6">
                {slide.headline}
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-md mb-8">
                {slide.description}
              </p>

              {/* Gold accent line (matching the template) */}
              <div className="w-12 h-[3px] bg-gold rounded-full" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          NAVIGATION — prev / next buttons
          ══════════════════════════════════════════════ */}
      <div className="absolute bottom-8 right-6 sm:right-10 lg:right-16 z-30 flex items-center gap-3">
        {/* Previous */}
        <button
          onClick={goPrev}
          className="w-12 h-12 rounded-full glass border border-white/10
                     flex items-center justify-center
                     hover:border-electric/50 hover:shadow-glow-sm
                     transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-white/60 group-hover:text-electric transition-colors" />
        </button>

        {/* Next */}
        <button
          onClick={goNext}
          className="w-12 h-12 rounded-full glass border border-white/10
                     flex items-center justify-center
                     hover:border-electric/50 hover:shadow-glow-sm
                     transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-electric transition-colors" />
        </button>
      </div>

      {/* ══════════════════════════════════════════════
          PROGRESS DOTS — bottom center
          ══════════════════════════════════════════════ */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current
                ? 'w-8 bg-gold'
                : 'w-3 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
