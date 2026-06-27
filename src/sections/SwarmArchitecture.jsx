/* ══════════════════════════════════════════════════════
   RAGAS AEROSPACE — Swarm Architecture Section
   3D Rotating Carousel showing multi-agent swarm nodes.
   Clean, borderless container, custom hover-pause,
   and responsive sizes.
   ══════════════════════════════════════════════════════ */

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wifi, GitBranch, ShieldCheck, Radio, Cpu, Navigation } from 'lucide-react';
import { swarmNodes } from '../data/siteData';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';

/* ── Helper: assign icons dynamically ── */
const getNodeIcon = (id) => {
  if (id === 'gcs') return Radio;
  if (id.startsWith('hex')) return Cpu;
  return Navigation;
};

/* ── Info cards data ── */
const infoCards = [
  {
    icon: Wifi,
    title: 'Mesh Networking',
    description:
      'Peer-to-peer communication between all drones ensures redundant data paths. If one link drops, traffic re-routes through neighbouring nodes automatically.',
  },
  {
    icon: GitBranch,
    title: 'Task Distribution',
    description:
      'The GCS distributes mission objectives to swarm leaders, who autonomously assign sub-tasks to scout units based on capability and proximity.',
  },
  {
    icon: ShieldCheck,
    title: 'Failover Protocol',
    description:
      'If a swarm leader goes offline, the next-ranked unit promotes itself and assumes command — zero downtime, zero human intervention.',
  },
];

/* ── Animation variants for info cards ── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function SwarmArchitecture() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  /* ── Rotation angle state ── */
  const [angle, setAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  /* ── Window resize listener for responsive 3D radius ── */
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /* ── Frame loop for 3D rotation (pause on hover) ── */
  useEffect(() => {
    if (isHovered) return;
    let animationFrameId;
    const updateRotation = () => {
      setAngle((prev) => prev + 0.004); // Speed factor
      animationFrameId = requestAnimationFrame(updateRotation);
    };
    animationFrameId = requestAnimationFrame(updateRotation);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const isMobile = windowWidth < 768;
  const radius = isMobile ? 120 : 340; // Desktop radius of rotation

  return (
    <section id="architecture" ref={sectionRef} className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <SectionHeader
          title="Swarm Architecture"
          subtitle="MULTI-AGENT COORDINATION NETWORK"
        />

        {/* ─── 3D Rotating Carousel Container (Clean & Borderless) ─── */}
        <div
          className="relative w-full h-[320px] md:h-[450px] mt-8 flex justify-center items-center pointer-events-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Ambient glow behind carousel */}
          <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />

          {/* Cards map */}
          {swarmNodes.map((node, i) => {
            const Icon = getNodeIcon(node.id);
            const isGCS = node.id === 'gcs';
            const isHex = node.id.startsWith('hex');

            /* ── Compute 3D coords & values ── */
            const cardAngle = angle + (i * Math.PI * 2) / swarmNodes.length;
            const x = Math.sin(cardAngle) * radius;
            const z = Math.cos(cardAngle); // [-1, 1]
            const normalizedZ = (z + 1) / 2; // [0, 1]

            // Interpolate scale & opacity
            const scale = isMobile
              ? 0.75 + normalizedZ * 0.25 // [0.75, 1] on mobile
              : 0.65 + normalizedZ * 0.35; // [0.65, 1] on desktop
            const opacity = 0.25 + normalizedZ * 0.75; // [0.25, 1]

            /* Border class: gold for GCS, electric blue for leaders, lighter for units */
            const borderClass = isGCS
              ? 'border-gold/50 shadow-glow-gold/20'
              : isHex
              ? 'border-electric/50 shadow-glow-sm'
              : 'border-electric/20';

            return (
              <div
                key={node.id}
                style={{
                  position: 'absolute',
                  transform: `translate(-50%, -50%) translateX(${x}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: Math.round(normalizedZ * 100),
                  transition: 'opacity 0.1s linear, transform 0.1s linear',
                }}
                className={`left-1/2 top-1/2 w-[150px] h-[190px] md:w-[220px] md:h-[260px]
                            glass border rounded-2xl flex flex-col justify-center items-center p-4 md:p-6
                            text-center select-none group cursor-pointer ${borderClass}`}
              >
                {/* HUD corner accents inside each card */}
                <div className="hud-corner hud-corner-tl w-3 h-3 border-electric/30" />
                <div className="hud-corner hud-corner-tr w-3 h-3 border-electric/30" />
                <div className="hud-corner hud-corner-bl w-3 h-3 border-electric/30" />
                <div className="hud-corner hud-corner-br w-3 h-3 border-electric/30" />

                {/* Card Icon */}
                <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-3 md:mb-5
                                 ${isGCS ? 'bg-gold/10' : 'bg-electric/10'}`}>
                  <Icon className={`w-5 h-5 md:w-7 md:h-7 ${isGCS ? 'text-gold' : 'text-electric'}`} />
                </div>

                {/* Node Label */}
                <h4 className={`font-heading text-xs md:text-sm tracking-wider font-bold mb-1 md:mb-2
                                ${isGCS ? 'text-gold text-glow-gold' : 'text-white text-glow'}`}>
                  {node.label}
                </h4>

                {/* Node Sublabel */}
                <p className="text-[10px] md:text-xs text-white/50 font-body">
                  {node.sublabel}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── Info Cards ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {infoCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.title} variants={cardVariants}>
                <GlassCard className="p-6 h-full text-center">
                  <div className="w-12 h-12 rounded-full bg-electric/10 border border-electric/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-electric" />
                  </div>
                  <h3 className="font-heading text-white text-lg mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {card.description}
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
