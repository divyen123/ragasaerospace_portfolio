import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { raicLayers } from '../data/siteData';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';

/* ── Asset import ── */
import raicBg from '../assets/images/raic-bg.png';

/* ── Framer-motion orchestration ── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function RAICTechnology() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="raic" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* ── Background Circuit Image ── */}
      {raicBg && (
        <img
          src={raicBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}

      {/* ── Dark overlays for text readability ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/85 to-navy-950 z-10" />
      <div className="absolute inset-0 bg-grid opacity-25 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <SectionHeader
          title="RAIC™ Technology"
          subtitle="REAL-TIME ADAPTIVE INTELLIGENT CORE"
          accent="blue"
        />

        {/* ── Intro paragraph (High contrast white/85 for readability) ── */}
        <motion.p
          className="text-lg text-white/85 max-w-3xl mx-auto text-center mt-6 mb-16 leading-relaxed text-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          The Real-time Adaptive Intelligent Core (RAIC™) is our proprietary
          multi-layered AI architecture that powers every RAGAS drone. It
          combines environmental perception, sensor fusion, autonomous
          navigation, intelligent decision-making, and swarm coordination into a
          single edge-computed system — enabling true autonomy without cloud
          dependency.
        </motion.p>

        {/* ── Cards Grid ──
             5 cards: 3 on top row, 2 on bottom row centered.
             We use a 6-column grid so the bottom 2 cards can each span 2 cols
             offset by 1 col to center them.                                    */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {raicLayers.map((layer, index) => {
            const Icon = layer.icon;

            /* First 3 cards span 2 cols each (fills the row).
               Last 2 cards also span 2 cols but start at col 2 and col 4. */
            const isBottomRow = index >= 3;
            const colStart = isBottomRow
              ? index === 3
                ? 'lg:col-start-2'
                : 'lg:col-start-4'
              : '';

            return (
              <motion.div
                key={layer.title}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 0 40px rgba(0,180,255,0.25)',
                }}
                className={`lg:col-span-2 ${colStart}`}
              >
                <GlassCard className="h-full p-6 relative overflow-hidden group">
                  {/* Top accent border */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${layer.color}`}
                  />

                  {/* Icon circle */}
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${layer.color}
                                flex items-center justify-center mb-4
                                shadow-glow-sm group-hover:shadow-glow-md transition-shadow duration-300`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg text-white mb-2">
                    {layer.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/60 leading-relaxed">
                    {layer.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
