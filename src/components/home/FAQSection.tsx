'use client';

import { useTranslations } from 'next-intl';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const faqs = [
  'coverage',
  'quote',
  'availability',
  'events',
  'reports',
  'recruitment',
] as const;

export function FAQSection() {
  const t = useTranslations('faq');

  return (
    <section className="bg-rocket-black py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-9 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-rocket-yellow/25 bg-rocket-yellow/10 text-rocket-yellow sm:mb-5 sm:h-12 sm:w-12">
            <HelpCircle size={22} />
          </div>
          <p className="font-[family-name:var(--font-accent)] mb-4 text-sm uppercase tracking-[0.3em] text-rocket-yellow">
            {t('label')}
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold uppercase leading-[0.95] tracking-tight text-white min-[390px]:text-4xl sm:text-5xl lg:text-6xl">
            {t('heading')}
          </h2>
          <div className="mt-5 h-1 w-16 bg-rocket-yellow" />
          <p className="mt-5 max-w-md text-base leading-relaxed text-rocket-gray-400 sm:mt-6 sm:text-lg">
            {t('description')}
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((key, index) => (
            <motion.details
              key={key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group rounded-lg border border-white/10 bg-white/[0.04] p-4 open:border-rocket-yellow/35 open:bg-white/[0.065] sm:p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5">
                <span className="font-[family-name:var(--font-heading)] text-lg font-semibold uppercase tracking-wide text-white sm:text-xl">
                  {t(`items.${key}.question`)}
                </span>
                <ChevronDown
                  size={22}
                  className="shrink-0 text-rocket-yellow transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-rocket-gray-400 sm:text-base sm:leading-7">
                {t(`items.${key}.answer`)}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
