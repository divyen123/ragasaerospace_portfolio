/* ══════════════════════════════════════════════════════
   RAGAS AEROSPACE — AnimatedCounter Component
   Scroll-triggered animated number counter with icon,
   value, suffix, and label. Counts from 0 to `end` when
   the element scrolls into view.
   ══════════════════════════════════════════════════════ */

import { useRef, useEffect } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from 'framer-motion';

/**
 * @param {Object}   props
 * @param {number}   props.end     - Target number to animate to
 * @param {string}   props.suffix  - Text appended after the number (e.g. '%', 'km')
 * @param {string}   props.label   - Descriptive label below the number
 * @param {Function} props.icon    - Lucide icon component
 */
export default function AnimatedCounter({ end, suffix = '', label, icon: Icon }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  /* ── Motion values for smooth count-up ── */
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  /* Track the displayed value in a span via subscription */
  const displayRef = useRef(null);

  useEffect(() => {
    // Subscribe to rounded value changes and update DOM directly
    const unsubscribe = rounded.on('change', (v) => {
      if (displayRef.current) {
        displayRef.current.textContent = v;
      }
    });
    return unsubscribe;
  }, [rounded]);

  /* ── Trigger animation when element enters viewport ── */
  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, end, {
      duration: 2,
      ease: 'easeOut',
    });

    return () => controls.stop();
  }, [isInView, end, motionValue]);

  return (
    <motion.div
      ref={ref}
      className="glass-light rounded-2xl p-6 md:p-8 text-center flex flex-col items-center justify-center gap-3 h-full w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* ── Icon ── */}
      {Icon && (
        <div className="text-electric mb-1">
          <Icon size={28} strokeWidth={1.5} />
        </div>
      )}

      {/* ── Animated Number + Suffix ── */}
      <div className="text-4xl md:text-5xl font-heading font-bold text-white text-glow">
        <span ref={displayRef}>0</span>
        <span>{suffix}</span>
      </div>

      {/* ── Label ── */}
      <p className="text-sm text-electric/70 font-body tracking-wide">
        {label}
      </p>
    </motion.div>
  );
}
