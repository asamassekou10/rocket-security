'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck, Radio, ShieldCheck, Target } from 'lucide-react';
import { services, getServiceBySlug } from '@/lib/services';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import Image from 'next/image';

export function ServiceDetailClient({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  const t = useTranslations('services');
  const operations = useTranslations('operations');

  if (!service) {
    return null;
  }

  const Icon = service.icon;
  const methodSteps = [
    { icon: Target, key: 'audit' },
    { icon: ShieldCheck, key: 'deployment' },
    { icon: Radio, key: 'supervision' },
    { icon: ClipboardCheck, key: 'reporting' },
  ];
  const currentIndex = services.findIndex((s) => s.slug === slug);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  const advantages: string[] = [];
  for (let i = 0; i < 5; i++) {
    try {
      const adv = t(`${service.translationKey}.advantages.${i}`);
      if (adv) advantages.push(adv);
    } catch {
      break;
    }
  }

  return (
    <>
      {/* Hero with background image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={t(`${service.translationKey}.name`)}
            fill
            className="object-cover"
            style={{ objectPosition: service.imagePosition ?? 'center' }}
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-rocket-gray-300 hover:text-rocket-yellow transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            {t('back_to_services')}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-rocket-yellow text-rocket-black">
              <Icon size={32} />
            </div>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-rocket-white">
              {t(`${service.translationKey}.name`)}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-rocket-dark relative overflow-hidden">
        <div className="gradient-orb gradient-orb-yellow w-[400px] h-[400px] -top-20 -right-20 opacity-30" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Description */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden img-zoom mb-10">
                  <Image
                    src={service.image}
                    alt={t(`${service.translationKey}.name`)}
                    fill
                    className="object-cover"
                    style={{ objectPosition: service.imagePosition ?? 'center' }}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-lg text-rocket-gray-300 leading-relaxed">
                  {t(`${service.translationKey}.description`)}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="mt-12">
                  <p className="font-[family-name:var(--font-accent)] mb-3 text-sm uppercase tracking-[0.3em] text-rocket-yellow">
                    {operations('method_label')}
                  </p>
                  <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold uppercase tracking-tight text-white">
                    {operations('method_heading')}
                  </h2>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {methodSteps.map((step, index) => {
                      const StepIcon = step.icon;
                      return (
                        <div key={step.key} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                          <div className="mb-5 flex items-center justify-between">
                            <StepIcon size={22} className="text-rocket-yellow" />
                            <span className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white/10">
                              0{index + 1}
                            </span>
                          </div>
                          <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold uppercase tracking-wide text-white">
                            {operations(`steps.${step.key}.title`)}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-rocket-gray-400">
                            {operations(`steps.${step.key}.text`)}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Advantages sidebar */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                <div className="sticky top-28 rounded-2xl glass p-6 sm:p-8">
                  <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-rocket-yellow uppercase mb-6">
                    {t('advantages')}
                  </h2>
                  <ul className="space-y-4">
                    {advantages.map((advantage, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 size={20} className="text-rocket-yellow shrink-0 mt-0.5" />
                        <span className="text-rocket-gray-300">{advantage}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="mt-8 block w-full rounded-full bg-rocket-yellow py-3 text-center text-sm font-bold text-rocket-black transition-all duration-300 hover:bg-rocket-gold hover:shadow-lg hover:shadow-rocket-yellow/20"
                  >
                    {t('request_quote')}
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Navigation between services */}
          <div className="mt-20 pt-10 border-t border-rocket-gray-800 flex justify-between">
            {prevService ? (
              <Link
                href={`/services/${prevService.slug}`}
                className="group flex items-center gap-3 text-rocket-gray-400 hover:text-rocket-yellow transition-colors"
              >
                <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-rocket-gray-400">
                    {t('back_to_services')}
                  </div>
                  <div className="font-semibold">
                    {t(`${prevService.translationKey}.name`)}
                  </div>
                </div>
              </Link>
            ) : <div />}
            {nextService && (
              <Link
                href={`/services/${nextService.slug}`}
                className="group flex items-center gap-3 text-right text-rocket-gray-400 hover:text-rocket-yellow transition-colors"
              >
                <div>
                  <div className="text-xs uppercase tracking-wider text-rocket-gray-400">
                    {t('learn_more')}
                  </div>
                  <div className="font-semibold">
                    {t(`${nextService.translationKey}.name`)}
                  </div>
                </div>
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
