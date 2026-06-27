/* ══════════════════════════════════════════════════════
   RAGAS AEROSPACE — Logo Intro Animation
   Cinematic hands-free intro displaying the logo with
   smooth fade-in/out and ease-in/out scales, automatically
   advancing to the website reveal.
   ══════════════════════════════════════════════════════ */

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import logoImg from '../assets/images/logo.png';

export default function LogoIntro({ onIntroComplete }) {
  const [animationStep, setAnimationStep] = useState('enter'); // enter | stay | exit

  useEffect(() => {
    // Step 1: Fade-in and stay for 1.8 seconds
    const stayTimer = setTimeout(() => {
      setAnimationStep('exit');
    }, 2200);

    // Step 2: Trigger reveal once fade-out completes
    const completeTimer = setTimeout(() => {
      onIntroComplete();
    }, 3400); // 2200ms stay + 1200ms fade-out duration

    return () => {
      clearTimeout(stayTimer);
      clearTimeout(completeTimer);
    };
  }, [onIntroComplete]);

  console.log('LogoIntro asset path:', logoImg);

  /* ── Motion Variants for Cinematic Breathe Effect (No filters to ensure 100% crash safety) ── */
  const logoVariants = {
    enter: {
      opacity: 0,
      scale: 0.88,
    },
    stay: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94], // Cubic ease-out
      },
    },
    exit: {
      opacity: 0,
      scale: 1.06,
      transition: {
        duration: 1.0,
        ease: [0.55, 0.085, 0.68, 0.53], // Cubic ease-in
      },
    },
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-navy-950 flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-electric/5 filter blur-[90px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] md:w-[300px] md:h-[300px] rounded-full bg-gold/5 filter blur-[110px] pointer-events-none" />

      {/* Logo container with breathe animations (Fills full page seamlessly) */}
      {logoImg && (
        <motion.div
          variants={logoVariants}
          initial="enter"
          animate={animationStep === 'enter' ? 'stay' : animationStep}
          className="absolute inset-0 w-full h-full z-10"
        >
          <img
            src={logoImg}
            alt="RAGAS Aerospace Logo"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </motion.div>
      )}

      {/* Tactical Loading indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: animationStep === 'exit' ? 0 : 0.6 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-16 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] tracking-[0.4em] text-electric uppercase animate-pulse">
          Initializing RAGAS Autonomic Systems
        </span>
      </motion.div>
    </div>
  );
}
