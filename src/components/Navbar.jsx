/* ══════════════════════════════════════════════════════
   RAGAS AEROSPACE — Navbar Component
   Fixed glassmorphism navigation bar with mobile menu,
   scroll-aware opacity, and active section highlighting.
   ══════════════════════════════════════════════════════ */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield } from 'lucide-react';
import { navLinks } from '../data/siteData';

/* ── Animation Variants ── */
const mobileMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

const linkStagger = {
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const linkItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  /* ── Track scroll position for navbar background opacity ── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── IntersectionObserver for active section highlighting ── */
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace('#', ''));
    const observers = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  /* ── Smooth scroll handler ── */
  const handleNavClick = useCallback(
    (e, href) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    },
    []
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-electric/10 shadow-glow-sm'
          : 'bg-navy-950/30 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ── Logo ── */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-1 font-heading text-xl md:text-2xl tracking-wider"
          >
            <span className="text-white text-glow">RAGAS</span>
            <span className="text-electric text-glow">AEROSPACE</span>
          </a>

          {/* ── Desktop Navigation ── */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`animated-underline text-sm font-body tracking-wide transition-colors duration-300 ${
                    isActive
                      ? 'text-electric text-glow'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            {/* ── Defence Simulator Button ── */}
            <a
              href="/defence-simulator.html"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/60 bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400 hover:text-navy-950 font-heading text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-glow-sm hover:shadow-glow-md hover:scale-105"
              title="Launch RAIC Defence Simulator"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Defence simulator</span>
            </a>
          </div>

          {/* ── Mobile Hamburger Button ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 p-2 text-white/80 hover:text-electric transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Full-Screen Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 glass lg:hidden flex items-center justify-center"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Decorative corner brackets */}
            <div className="hud-corner hud-corner-tl" />
            <div className="hud-corner hud-corner-tr" />
            <div className="hud-corner hud-corner-bl" />
            <div className="hud-corner hud-corner-br" />

            <motion.div
              className="flex flex-col items-center gap-6"
              variants={linkStagger}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    variants={linkItem}
                    className={`font-heading text-lg tracking-widest transition-colors duration-300 ${
                      isActive
                        ? 'text-electric text-glow'
                        : 'text-white/70 hover:text-electric'
                    }`}
                  >
                    {link.label}
                  </motion.a>
                );
              })}

              {/* ── Mobile Defence Simulator Button ── */}
              <motion.a
                href="/defence-simulator.html"
                variants={linkItem}
                className="mt-2 flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-cyan-400/70 bg-cyan-400/15 text-cyan-300 font-heading text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-glow-sm hover:bg-cyan-400 hover:text-navy-950"
              >
                <Shield className="w-4 h-4" />
                <span>Defence simulator</span>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
