'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users, Award } from 'lucide-react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const highlights = [
  { icon: Shield, key: 'trained' },
  { icon: Users, key: 'team' },
  { icon: Award, key: 'certified' },
];

export function TeamShowcase() {
  const t = useTranslations('team_showcase');

  return (
    <section className="py-24 bg-rocket-black relative overflow-hidden">
      {/* Tactical grid overlay */}
      <div className="absolute inset-0 tactical-grid opacity-50" />
      <div className="gradient-orb gradient-orb-amber w-[400px] h-[400px] -top-20 -right-20 opacity-15" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — image collage */}
          <ScrollReveal direction="left">
            <div className="grid grid-cols-2 gap-4">
              {/* Large image — team photo */}
              <div className="col-span-2 img-zoom rounded-lg overflow-hidden">
                <Image
                  src="/images/RS2.jpg"
                  alt={t('alt_team')}
                  width={800}
                  height={450}
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
              {/* Two smaller images */}
              <div className="img-zoom rounded-lg overflow-hidden">
                <Image
                  src="/images/RS4.jpg"
                  alt={t('alt_guard')}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover object-top"
                />
              </div>
              <div className="img-zoom rounded-lg overflow-hidden">
                <Image
                  src="/images/RS5.jpg"
                  alt={t('alt_meeting')}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right — text content */}
          <ScrollReveal direction="right">
            <p className="font-[family-name:var(--font-accent)] text-sm tracking-[0.3em] uppercase text-rocket-yellow mb-4">
              {t('label')}
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase tracking-tight text-rocket-white leading-[0.95]">
              {t('heading')}
            </h2>
            <div className="mt-4 h-1 w-16 bg-rocket-yellow" />
            <p className="mt-6 text-rocket-gray-400 leading-relaxed text-lg font-[family-name:var(--font-body)]">
              {t('description')}
            </p>

            {/* Highlight points */}
            <div className="mt-8 space-y-4">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-rocket-yellow/20 bg-rocket-yellow/10 text-rocket-yellow">
                      <Icon size={20} />
                    </div>
                    <p className="font-[family-name:var(--font-accent)] text-base font-medium text-rocket-white">
                      {t(item.key)}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-2 border-2 border-rocket-yellow/80 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-rocket-white transition-all duration-300 hover:bg-rocket-yellow hover:text-rocket-black font-[family-name:var(--font-accent)]"
            >
              {t('cta')}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
