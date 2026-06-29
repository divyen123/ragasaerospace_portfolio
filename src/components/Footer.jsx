/* ══════════════════════════════════════════════════════
   RAGAS AEROSPACE — Footer Component
   Dark branded footer with logo, tagline, three-column
   navigation, copyright bar, and innovation badge.
   ══════════════════════════════════════════════════════ */

import { Rocket } from 'lucide-react';

/* ── Footer Link Columns ── */
const footerColumns = [
  {
    heading: 'Company',
    links: [
      { label: 'About RAGAS', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press Kit', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    heading: 'Technology',
    links: [
      { label: 'RAIC Engine', href: '#raic' },
      { label: 'Drone Systems', href: '#drone-system' },
      { label: 'Swarm Intelligence', href: '#architecture' },
      { label: 'Documentation', href: '#' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'LinkedIn', href: '#' },
      { label: 'GitHub', href: '#' },
      { label: 'Twitter / X', href: '#' },
      { label: 'YouTube', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 border-t border-electric/10">
      {/* ── Subtle grid background ── */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Main Footer Content ── */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* ── Brand Column (takes 2 cols on lg) ── */}
          <div className="lg:col-span-2 space-y-4">
            {/* Logo */}
            <div className="font-heading text-xl tracking-wider">
              <span className="text-white text-glow">RAGAS</span>{' '}
              <span className="text-electric text-glow">AEROSPACE</span>
            </div>

            {/* Tagline */}
            <p className="text-electric/50 italic font-body text-sm">
              Decisions in the Sky
            </p>

            {/* Description */}
            <p className="text-white/30 text-sm font-body leading-relaxed max-w-sm">
              Pioneering autonomous aerial intelligence with indigenous technology.
              Advancing the future of unmanned systems for defence, agriculture,
              and industry.
            </p>

            {/* Indigenous Innovation Badge */}
            <div className="inline-flex items-center gap-2 glass-light rounded-full px-4 py-2 mt-2">
              <Rocket size={14} className="text-electric" />
              <span className="text-[11px] font-mono text-electric/80 tracking-wider uppercase">
                Indigenous Aerospace Innovation
              </span>
            </div>
          </div>

          {/* ── Link Columns ── */}
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h4 className="font-heading text-xs tracking-[0.2em] text-white/80 uppercase mb-4">
                {column.heading}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-body text-white/40 hover:text-electric transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-mono text-white/25 tracking-wide">
            © 2026 RAGAS AEROSPACE. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono text-white/20">
              CLASSIFIED // LEVEL 5
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-cyber-green/40 animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
}
