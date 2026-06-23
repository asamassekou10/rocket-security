'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Clock3, Phone, ShieldCheck, Users } from 'lucide-react';
import Image from 'next/image';

const proofItems = [
  { icon: Award, key: 'approved' },
  { icon: Users, key: 'agents' },
  { icon: Clock3, key: 'availability' },
  { icon: ShieldCheck, key: 'coverage' },
];

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative flex h-[100svh] min-h-[720px] items-end overflow-hidden sm:h-screen sm:min-h-0">
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
        {/* Balanced dark overlay for centered text readability */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/55" />
        {/* Bottom gradient for content area */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Subtle yellow orb glow */}
      <div className="gradient-orb gradient-orb-yellow w-[500px] h-[500px] -bottom-40 -left-20 opacity-20" />

      {/* Content — centered, well below navbar */}
      <div className="relative z-10 mx-auto w-full max-w-7xl translate-y-2 px-4 pb-20 sm:translate-y-8 sm:px-6 sm:pb-20 lg:translate-y-10 lg:px-8 lg:pb-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Yellow accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-4 h-1 w-14 origin-center bg-rocket-yellow sm:mb-6 sm:w-16"
          />

          {/* Main heading — slogan only */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-[family-name:var(--font-heading)] text-4xl font-bold uppercase leading-[0.95] tracking-wide min-[390px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="text-rocket-white">
              {t('slogan').split(',')[0]},
            </span>
            <br />
            <span className="text-gradient-gold">
              {t('slogan').split(',')[1]}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mx-auto mt-4 max-w-xl text-sm leading-6 text-rocket-gray-300 sm:mt-6 sm:text-lg sm:leading-7"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="order-3 mx-auto mt-6 grid w-full max-w-sm grid-cols-2 gap-2 sm:order-none sm:mt-8 sm:max-w-2xl sm:grid-cols-4 sm:gap-3"
          >
            {proofItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.key}
                  className="flex min-h-20 flex-col items-center justify-between rounded-lg border border-white/10 bg-black/35 p-2.5 text-center backdrop-blur-md sm:min-h-24 sm:p-3"
                >
                  <Icon size={20} className="text-rocket-yellow" />
                  <span className="text-[11px] font-semibold uppercase leading-snug tracking-[0.1em] text-white/85 sm:text-xs sm:tracking-[0.12em]">
                    {t(`proof.${item.key}`)}
                  </span>
                </div>
              );
            })}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="order-2 mt-7 flex w-full flex-wrap justify-center gap-3 sm:order-none sm:mt-10 sm:w-auto sm:gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex min-h-12 flex-1 items-center justify-center gap-2 bg-rocket-yellow px-5 py-3 text-sm font-semibold uppercase tracking-wider text-rocket-black transition-all duration-300 hover:bg-rocket-gold hover:shadow-lg hover:shadow-rocket-yellow/20 sm:flex-none sm:px-8 sm:py-4 font-[family-name:var(--font-accent)]"
            >
              {t('cta_quote')}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="group hidden min-h-12 items-center justify-center gap-2 border-2 border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-rocket-gray-300 transition-all duration-300 hover:border-rocket-yellow/60 hover:text-white sm:inline-flex font-[family-name:var(--font-accent)]"
            >
              {t('cta_services')}
            </Link>
            <a
              href="tel:+22384404006"
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 border-2 border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-rocket-yellow sm:flex-none sm:border-0 sm:px-2 sm:py-4 font-[family-name:var(--font-accent)]"
            >
              <Phone size={16} />
              84 40 40 06
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
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
