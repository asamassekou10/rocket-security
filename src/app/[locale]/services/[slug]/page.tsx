'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { services, getServiceBySlug } from '@/lib/services';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = getServiceBySlug(slug);
  const t = useTranslations('services');

  if (!service) {
    notFound();
  }

  const Icon = service.icon;
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
                <div className="rounded-2xl overflow-hidden img-zoom mb-10">
                  <Image
                    src={service.image}
                    alt={t(`${service.translationKey}.name`)}
                    width={800}
                    height={450}
                    className="object-cover w-full"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-lg text-rocket-gray-300 leading-relaxed">
                  {t(`${service.translationKey}.description`)}
                </p>
              </ScrollReveal>
            </div>

            {/* Advantages sidebar */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                <div className="sticky top-28 rounded-2xl glass p-8">
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
