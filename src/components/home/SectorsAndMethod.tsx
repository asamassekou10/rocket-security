'use client';

import { useTranslations } from 'next-intl';
import {
  Banknote,
  Building2,
  CalendarDays,
  ClipboardCheck,
  Factory,
  MapPinned,
  Radio,
  ShieldCheck,
  Store,
  Target,
  Users,
  Warehouse,
} from 'lucide-react';
import { motion } from 'framer-motion';

const sectors = [
  { icon: Banknote, key: 'banks' },
  { icon: Factory, key: 'mines' },
  { icon: CalendarDays, key: 'events' },
  { icon: Building2, key: 'businesses' },
  { icon: Store, key: 'retail' },
  { icon: Warehouse, key: 'industrial' },
];

const steps = [
  { icon: Target, key: 'audit' },
  { icon: ShieldCheck, key: 'deployment' },
  { icon: Radio, key: 'supervision' },
  { icon: ClipboardCheck, key: 'reporting' },
];

export function SectorsAndMethod() {
  const t = useTranslations('operations');

  return (
    <section className="relative overflow-hidden bg-rocket-darker py-24">
      <div className="absolute inset-0 tactical-grid opacity-30" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="font-[family-name:var(--font-accent)] mb-4 text-sm uppercase tracking-[0.3em] text-rocket-yellow">
              {t('label')}
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-rocket-white sm:text-5xl lg:text-6xl">
              {t('heading')}
            </h2>
            <div className="mt-5 h-1 w-16 bg-rocket-yellow" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-rocket-gray-400">
              {t('description')}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <motion.div
                  key={sector.key}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-rocket-yellow/40 hover:bg-white/[0.07]"
                >
                  <Icon size={24} className="mb-5 text-rocket-yellow" />
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold uppercase tracking-wide text-white">
                    {t(`sectors.${sector.key}`)}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-12">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-[family-name:var(--font-accent)] mb-3 text-sm uppercase tracking-[0.3em] text-rocket-yellow">
                {t('method_label')}
              </p>
              <h3 className="font-[family-name:var(--font-heading)] text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
                {t('method_heading')}
              </h3>
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-rocket-gray-300">
              <MapPinned size={18} className="text-rocket-yellow" />
              {t('coverage')}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.key} className="relative rounded-lg bg-rocket-black p-6 ring-1 ring-white/10">
                  <div className="mb-8 flex items-center justify-between">
                    <Icon size={26} className="text-rocket-yellow" />
                    <span className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white/10">
                      0{index + 1}
                    </span>
                  </div>
                  <h4 className="font-[family-name:var(--font-heading)] text-xl font-semibold uppercase tracking-wide text-white">
                    {t(`steps.${step.key}.title`)}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-rocket-gray-400">
                    {t(`steps.${step.key}.text`)}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-rocket-gray-300">
            <Users size={18} className="text-rocket-yellow" />
            <span>{t('team_note')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
