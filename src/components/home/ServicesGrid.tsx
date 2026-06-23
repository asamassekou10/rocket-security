'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/services';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import Image from 'next/image';

export function ServicesGrid() {
  const t = useTranslations('services');

  const gridServices = services.slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-rocket-dark py-16 sm:py-24">
      {/* Subtle gradient orb */}
      <div className="gradient-orb gradient-orb-yellow w-[400px] h-[400px] -bottom-40 -right-20 opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 items-start">
          {/* Left side — intro text + button */}
          <div className="lg:sticky lg:top-32">
            <ScrollReveal direction="left">
              {/* Small label */}
              <p className="font-[family-name:var(--font-accent)] text-sm tracking-[0.3em] uppercase text-rocket-yellow mb-4">
                {t('title')}
              </p>

              {/* Section heading */}
              <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-6xl font-semibold uppercase tracking-tight text-rocket-white leading-[0.95]">
                {t('section_heading')}
              </h2>
              <div className="mt-4 h-1 w-16 bg-rocket-yellow" />

              {/* Description */}
              <p className="mt-5 text-rocket-gray-400 leading-relaxed text-base sm:mt-6 sm:text-lg font-[family-name:var(--font-body)]">
                {t('section_description')}
              </p>

              {/* View all button */}
              <Link
                href="/services"
                className="group mt-8 inline-flex items-center gap-2 border-2 border-rocket-yellow/80 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-rocket-white transition-all duration-300 hover:bg-rocket-yellow hover:text-rocket-black font-[family-name:var(--font-accent)]"
              >
                {t('view_all')}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Right side — 2x2 service grid with images */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
            {gridServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block rounded-lg overflow-hidden relative h-48 sm:h-64 lg:h-72 xl:h-64"
                  >
                    {/* Background image */}
                    <Image
                      src={service.image}
                      alt={t(`${service.translationKey}.name`)}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ objectPosition: service.imagePosition ?? 'center' }}
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent transition-all duration-500 group-hover:from-black/90" />

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                      {/* Icon */}
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-rocket-yellow/30 bg-rocket-black/50 text-rocket-yellow backdrop-blur-sm">
                        <Icon size={20} />
                      </div>
                      {/* Title */}
                      <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-rocket-white group-hover:text-rocket-yellow transition-colors duration-300 uppercase sm:text-xl">
                        {t(`${service.translationKey}.name`)}
                      </h3>
                      {/* Short desc — visible on touch screens, animated on larger hover devices */}
                      <p className="mt-1 line-clamp-2 text-sm leading-snug text-rocket-gray-300 opacity-100 transition-all duration-500 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                        {t(`${service.translationKey}.short`)}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
