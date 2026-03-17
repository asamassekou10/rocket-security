'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Smoke particles data
const smokeParticles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: (Math.random() - 0.5) * 60,
  delay: i * 0.06,
  size: 6 + Math.random() * 10,
  duration: 0.8 + Math.random() * 0.4,
}));

// Star sparkle dots
const stars = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 1 + Math.random() * 2,
  delay: Math.random() * 2,
}));

export function SplashScreen() {
  const [show, setShow] = useState(false);
  const [phase, setPhase] = useState<'idle' | 'launch' | 'exit'>('idle');

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem('rs-intro-seen')) {
      return;
    }
    setShow(true);
    document.body.style.overflow = 'hidden';

    // Phase 1: idle (logo + rocket visible) — 0.8s
    const launchTimer = setTimeout(() => setPhase('launch'), 800);
    // Phase 2: rocket launches — 1.4s
    const exitTimer = setTimeout(() => setPhase('exit'), 2200);
    // Phase 3: screen exits — 0.6s
    const hideTimer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('rs-intro-seen', '1');
      document.body.style.overflow = '';
    }, 2800);

    return () => {
      clearTimeout(launchTimer);
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-rocket-black"
        >
          {/* Background stars */}
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute rounded-full bg-white/30"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
              }}
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: star.delay,
              }}
            />
          ))}

          {/* Subtle gradient orb */}
          <div className="absolute w-[500px] h-[500px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 70%)' }}
          />

          {/* Company name — appears first */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: phase === 'exit' ? 0 : 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-16 text-center z-10"
          >
            <span className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold tracking-[0.15em] uppercase text-rocket-yellow">
              ROCKET
            </span>
            <span className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold tracking-[0.15em] uppercase text-rocket-white">
              {' '}SECURITY
            </span>
          </motion.div>

          {/* Rocket SVG */}
          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: phase === 'launch' || phase === 'exit' ? '-120vh' : 0,
            }}
            transition={{
              duration: 1.4,
              ease: [0.45, 0, 0.15, 1], // custom cubic-bezier for rocket acceleration
            }}
            className="relative z-20"
          >
            <svg
              width="80"
              height="160"
              viewBox="0 0 80 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_0_20px_rgba(255,215,0,0.4)]"
            >
              {/* Rocket body */}
              <path
                d="M40 8 C40 8, 56 35, 56 70 L56 110 L24 110 L24 70 C24 35, 40 8, 40 8Z"
                fill="#FFD700"
                stroke="#C7A600"
                strokeWidth="1"
              />

              {/* Nose cone highlight */}
              <path
                d="M40 8 C40 8, 48 30, 48 60 L40 55 Z"
                fill="rgba(255,255,255,0.25)"
              />

              {/* Window */}
              <circle cx="40" cy="60" r="8" fill="#0A0A0A" stroke="#C7A600" strokeWidth="1.5" />
              <circle cx="40" cy="60" r="5" fill="#1a1a2e" />
              <circle cx="38" cy="58" r="2" fill="rgba(255,255,255,0.3)" />

              {/* Side fins */}
              <path d="M24 95 L10 120 L24 110 Z" fill="#C7A600" />
              <path d="M56 95 L70 120 L56 110 Z" fill="#C7A600" />

              {/* Bottom fin */}
              <path d="M35 110 L40 125 L45 110 Z" fill="#C7A600" />

              {/* Body stripe */}
              <rect x="24" y="90" width="32" height="4" fill="#0A0A0A" rx="1" />
            </svg>

            {/* Flame — animated */}
            <motion.div
              className="absolute -bottom-10 left-1/2 -translate-x-1/2"
              animate={
                phase === 'launch' || phase === 'exit'
                  ? { scaleY: [1, 1.4, 1, 1.3], scaleX: [1, 0.8, 1.1, 0.9], opacity: 1 }
                  : { scaleY: [0.6, 0.9, 0.6], scaleX: [0.8, 1, 0.8], opacity: [0.6, 1, 0.6] }
              }
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatType: 'mirror',
              }}
              style={{ transformOrigin: 'top center' }}
            >
              <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
                {/* Outer flame */}
                <ellipse cx="20" cy="10" rx="16" ry="30" fill="url(#flameGrad)" />
                {/* Inner flame */}
                <ellipse cx="20" cy="8" rx="8" ry="18" fill="url(#flameInner)" />
                <defs>
                  <radialGradient id="flameGrad" cx="0.5" cy="0" r="0.8">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="50%" stopColor="#FF8C00" />
                    <stop offset="100%" stopColor="#FF4500" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="flameInner" cx="0.5" cy="0" r="0.7">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="40%" stopColor="#FFD700" />
                    <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Smoke particles — appear on launch */}
            {(phase === 'launch' || phase === 'exit') &&
              smokeParticles.map((p) => (
                <motion.div
                  key={p.id}
                  className="absolute rounded-full bg-rocket-gray-400/30"
                  style={{
                    width: p.size,
                    height: p.size,
                    left: `calc(50% + ${p.x}px)`,
                    bottom: -20,
                  }}
                  initial={{ opacity: 0.8, y: 0, scale: 0.5 }}
                  animate={{
                    opacity: 0,
                    y: 80 + Math.random() * 40,
                    x: p.x * 1.5,
                    scale: 2,
                  }}
                  transition={{
                    duration: p.duration,
                    delay: p.delay,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                />
              ))}
          </motion.div>

          {/* Rocket shake on launch */}
          {phase === 'launch' && (
            <motion.div
              className="absolute inset-0 z-0"
              animate={{ x: [0, -1, 1, -1, 0] }}
              transition={{ duration: 0.15, repeat: Infinity }}
            />
          )}

          {/* Bottom glow on launch */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-40"
            initial={{ opacity: 0 }}
            animate={{
              opacity: phase === 'launch' || phase === 'exit' ? 0.6 : 0,
            }}
            transition={{ duration: 0.3 }}
            style={{
              background: 'radial-gradient(ellipse at 50% 100%, rgba(255,215,0,0.3) 0%, transparent 70%)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
