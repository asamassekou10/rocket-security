'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/services';
import { CTABanner } from '@/components/home/CTABanner';
import Image from 'next/image';

export default function ServicesPage() {
  const t = useTranslations('services');

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-rocket-black overflow-hidden">
        <div className="gradient-orb gradient-orb-yellow w-[400px] h-[400px] -top-40 right-20 opacity-40" />
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
            className="mt-6 text-lg text-rocket-gray-400 max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Services Grid - Detailed */}
      <section className="py-24 bg-rocket-dark relative overflow-hidden">
        <div className="gradient-orb gradient-orb-amber w-[500px] h-[500px] bottom-40 -left-40 opacity-30" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className={`group flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 rounded-2xl glass p-6 md:p-8 transition-all duration-500 hover:border-rocket-yellow/30 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-rocket-yellow/10`}
                  >
                    {/* Image */}
                    <div className="md:w-1/3 shrink-0">
                      <div className="aspect-[4/3] rounded-xl overflow-hidden img-zoom">
                        <Image
                          src={service.image}
                          alt={t(`${service.translationKey}.name`)}
                          width={400}
                          height={300}
                          className="object-cover w-full h-full"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rocket-yellow/10 text-rocket-yellow transition-all group-hover:bg-rocket-yellow group-hover:text-rocket-black">
                          <Icon size={20} />
                        </div>
                        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-rocket-white group-hover:text-rocket-yellow transition-colors">
                          {t(`${service.translationKey}.name`)}
                        </h2>
                      </div>
                      <p className="text-rocket-gray-400 leading-relaxed">
                        {t(`${service.translationKey}.description`)}
                      </p>
                      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-rocket-yellow">
                        {t('learn_more')}
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
