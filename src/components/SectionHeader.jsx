/* ══════════════════════════════════════════════════════
   RAGAS AEROSPACE — SectionHeader Component
   Animated section title with subtitle tag, decorative
   gradient line, and scroll-triggered entrance animation.
   Supports blue and gold accent variants.
   ══════════════════════════════════════════════════════ */

import { motion } from 'framer-motion';

/**
 * @param {Object} props
 * @param {string} props.title    - Main heading text
 * @param {string} props.subtitle - Small label above the title
 * @param {string} props.accent   - Color accent: 'blue' (default) or 'gold'
 * @param {string} props.align    - Text alignment: 'center' (default), 'left', or 'right'
 */
export default function SectionHeader({
  title,
  subtitle,
  accent = 'blue',
  align = 'center',
  glitch = false,
}) {
  /* ── Accent-based styles ── */
  const isGold = accent === 'gold';

  const subtitleColor = isGold ? 'text-gold' : 'text-electric';
  const titleGlow = isGold ? 'text-glow-gold' : 'text-glow';
  const lineGradient = isGold
    ? 'from-transparent via-gold to-transparent'
    : 'from-transparent via-electric to-transparent';

  /* ── Alignment classes ── */
  const alignmentClasses = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end',
  };
  const alignClass = alignmentClasses[align] || alignmentClasses.center;

  return (
    <motion.div
      className={`flex flex-col gap-4 mb-12 md:mb-16 ${alignClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* ── Subtitle Tag ── */}
      {subtitle && (
        <span
          className={`
            uppercase tracking-[0.3em] text-xs font-body font-medium
            ${subtitleColor}
          `}
        >
          {subtitle}
        </span>
      )}

      {/* ── Main Title ── */}
      <h2
        data-text={title}
        className={`
          text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white
          ${titleGlow}
          ${glitch ? 'glitch-text' : ''}
        `}
      >
        {title}
      </h2>

      {/* ── Decorative Gradient Line ── */}
      <motion.div
        className={`h-[2px] w-20 md:w-28 bg-gradient-to-r ${lineGradient}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        style={{ originX: align === 'right' ? 1 : align === 'left' ? 0 : 0.5 }}
      />
    </motion.div>
  );
}
