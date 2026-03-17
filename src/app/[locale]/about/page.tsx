'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Stats } from '@/components/home/Stats';
import { CTABanner } from '@/components/home/CTABanner';
import { Shield, Star, Clock, Award, Target } from 'lucide-react';
import Image from 'next/image';

const valuesIcons = {
  integrity: Shield,
  excellence: Star,
  reliability: Clock,
  professionalism: Award,
};

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-rocket-black overflow-hidden">
        <div className="gradient-orb gradient-orb-yellow w-[500px] h-[500px] -top-40 right-0 opacity-40" />
        <div className="gradient-orb gradient-orb-amber w-[300px] h-[300px] bottom-0 left-10 opacity-30" />
        <div className="absolute inset-0 tactical-grid opacity-30" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-rocket-white"
          >
            {t('title')}
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 h-1 w-20 bg-rocket-yellow mx-auto"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg text-rocket-gray-400 max-w-2xl mx-auto font-[family-name:var(--font-body)]"
          >
            {t('subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Our Story — split layout */}
      <section className="py-24 bg-rocket-dark relative overflow-hidden">
        <div className="gradient-orb gradient-orb-gold w-[400px] h-[400px] -top-20 -right-20 opacity-40" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden img-zoom border border-rocket-gray-700">
                  <Image
                    src="/images/RS2.jpg"
                    alt="Rocket Security team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-rocket-yellow rounded-br-2xl" />
                <div className="absolute -top-3 -left-3 w-16 h-16 border-t-4 border-l-4 border-rocket-yellow/40 rounded-tl-2xl" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-rocket-white uppercase tracking-tight">
                {t('story_title')}
              </h2>
              <div className="mt-4 h-1 w-16 bg-rocket-yellow" />
              <p className="mt-6 text-rocket-gray-300 leading-relaxed text-lg font-[family-name:var(--font-body)]">
                {t('story_text')}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission — split layout reversed */}
      <section className="py-24 bg-rocket-black relative overflow-hidden">
        <div className="gradient-orb gradient-orb-amber w-[400px] h-[400px] bottom-0 -left-20 opacity-30" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="flex items-start gap-4">
                <Target className="h-10 w-10 text-rocket-yellow shrink-0 mt-1" />
                <div>
                  <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-rocket-white uppercase tracking-tight">
                    {t('mission_title')}
                  </h2>
                  <div className="mt-4 h-1 w-16 bg-rocket-yellow" />
                  <p className="mt-6 text-rocket-gray-300 leading-relaxed text-lg font-[family-name:var(--font-body)]">
                    {t('mission_text')}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden img-zoom border border-rocket-gray-700">
                  <Image
                    src="/images/RS4.jpg"
                    alt="Rocket Security tactical agent"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-rocket-yellow rounded-tl-2xl" />
                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-4 border-r-4 border-rocket-yellow/40 rounded-br-2xl" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values — centered grid */}
      <section className="py-24 bg-rocket-dark relative overflow-hidden">
        <div className="gradient-orb gradient-orb-yellow w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('values_title')} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {(Object.keys(valuesIcons) as Array<keyof typeof valuesIcons>).map((key, index) => {
              const Icon = valuesIcons[key];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group rounded-2xl glass glass-hover p-8 text-center"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-rocket-yellow/10 text-rocket-yellow transition-all duration-500 group-hover:bg-rocket-yellow group-hover:text-rocket-black">
                    <Icon size={30} />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-rocket-white uppercase">
                    {t(`values.${key}.title`)}
                  </h3>
                  <p className="mt-3 text-sm text-rocket-gray-400 leading-relaxed font-[family-name:var(--font-body)]">
                    {t(`values.${key}.text`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Stats />
      <CTABanner />
    </>
  );
}
