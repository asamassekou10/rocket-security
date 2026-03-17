'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Background image — RS1 guard with branded vehicle */}
      <div className="absolute inset-0">
        <Image
          src="/images/RS1.jpg"
          alt="Rocket Security guard"
          fill
          className="object-cover object-top animate-ken-burns"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Heavy dark overlay from left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        {/* Bottom gradient for content area */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Subtle yellow orb glow */}
      <div className="gradient-orb gradient-orb-yellow w-[500px] h-[500px] -bottom-40 -left-20 opacity-20" />

      {/* Content — left aligned, well below navbar */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
        <div className="max-w-2xl">
          {/* Yellow accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="h-1 w-16 bg-rocket-yellow mb-6 origin-left"
          />

          {/* Main heading — slogan only */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.95] tracking-wide"
          >
            <span className="text-rocket-white">
              {t('slogan').split(',')[0]},
            </span>
            <br />
            <span className="text-gradient-gold">
              {t('slogan').split(',')[1]}
            </span>
          </motion.h1>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-rocket-yellow px-8 py-4 text-sm font-semibold uppercase tracking-wider text-rocket-black transition-all duration-300 hover:bg-rocket-gold hover:shadow-lg hover:shadow-rocket-yellow/20 font-[family-name:var(--font-accent)]"
            >
              {t('cta_quote')}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 border-2 border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-rocket-gray-300 transition-all duration-300 hover:border-rocket-yellow/60 hover:text-white font-[family-name:var(--font-accent)]"
            >
              {t('cta_services')}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-12 w-7 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-rocket-yellow"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
