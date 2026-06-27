/* ══════════════════════════════════════════════════════
   RAGAS AEROSPACE — GlassCard Component
   Reusable glassmorphism card with entrance animation,
   optional gold variant, hover effects, and depth overlay.
   ══════════════════════════════════════════════════════ */

import { motion } from 'framer-motion';

/**
 * @param {Object}  props
 * @param {React.ReactNode} props.children   - Card content
 * @param {string}  props.className          - Additional CSS classes
 * @param {boolean} props.hover              - Enable hover glow/scale (default: true)
 * @param {boolean} props.gold               - Use gold glass variant (default: false)
 * @param {number}  props.delay              - Entrance animation delay in seconds
 */
export default function GlassCard({
  children,
  className = '',
  hover = true,
  gold = false,
  delay = 0,
}) {
  /* ── Choose glass variant ── */
  const glassClass = gold ? 'glass-gold' : 'glass';

  /* ── Hover effect classes ── */
  const hoverClasses = hover
    ? 'hover:shadow-glow-md hover:scale-[1.02] hover:border-electric/30'
    : '';

  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl p-6 transition-all duration-500
        ${glassClass}
        ${hoverClasses}
        ${className}
      `}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: 'easeOut',
      }}
    >
      {/* ── Subtle gradient overlay at top for depth ── */}
      <div
        className="absolute inset-x-0 top-0 h-px opacity-40"
        style={{
          background: gold
            ? 'linear-gradient(90deg, transparent, rgba(212,168,67,0.5), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(0,180,255,0.4), transparent)',
        }}
      />

      {/* ── Card Content ── */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
