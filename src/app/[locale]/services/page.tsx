'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, Banknote, Building2, CalendarDays, ClipboardCheck, Factory, Radio, ShieldCheck, Store, Target, Warehouse } from 'lucide-react';
import { services } from '@/lib/services';
import { CTABanner } from '@/components/home/CTABanner';
import Image from 'next/image';

const sectors = [
  { icon: Banknote, key: 'banks' },
  { icon: Factory, key: 'mines' },
  { icon: CalendarDays, key: 'events' },
  { icon: Building2, key: 'businesses' },
  { icon: Store, key: 'retail' },
  { icon: Warehouse, key: 'industrial' },
];

const methodSteps = [
  { icon: Target, key: 'audit' },
  { icon: ShieldCheck, key: 'deployment' },
  { icon: Radio, key: 'supervision' },
  { icon: ClipboardCheck, key: 'reporting' },
];

export default function ServicesPage() {
  const t = useTranslations('services');
  const operations = useTranslations('operations');

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

      {/* Sectors */}
      <section className="bg-rocket-black py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-[family-name:var(--font-accent)] mb-3 text-sm uppercase tracking-[0.3em] text-rocket-yellow">
                {operations('label')}
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
                {operations('heading')}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-rocket-gray-400 sm:text-right">
              {operations('description')}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div key={sector.key} className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5">
                  <Icon size={22} className="shrink-0 text-rocket-yellow" />
                  <span className="font-[family-name:var(--font-heading)] text-lg font-semibold uppercase tracking-wide text-white">
                    {operations(`sectors.${sector.key}`)}
                  </span>
                </div>
              );
            })}
          </div>
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
                          style={{ objectPosition: service.imagePosition ?? 'center' }}
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

      {/* Method */}
      <section className="bg-rocket-black py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="font-[family-name:var(--font-accent)] mb-3 text-sm uppercase tracking-[0.3em] text-rocket-yellow">
              {operations('method_label')}
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
              {operations('method_heading')}
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {methodSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.key} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
                  <div className="mb-8 flex items-center justify-between">
                    <Icon size={24} className="text-rocket-yellow" />
                    <span className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white/10">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold uppercase tracking-wide text-white">
                    {operations(`steps.${step.key}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-rocket-gray-400">
                    {operations(`steps.${step.key}.text`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
