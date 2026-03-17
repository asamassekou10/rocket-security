'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function CTABanner() {
  const t = useTranslations('cta');

  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Left — yellow content block */}
        <div className="bg-rocket-yellow py-20 lg:py-28 px-8 sm:px-12 lg:px-16 xl:px-24 flex items-center relative">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-rocket-gold/20 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-rocket-gold/15 rounded-full translate-y-1/2 -translate-x-1/2" />

          <ScrollReveal direction="left" className="relative z-10">
            <p className="font-[family-name:var(--font-accent)] text-sm tracking-[0.3em] uppercase text-rocket-black/60 mb-4">
              {t('label')}
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-semibold text-rocket-black uppercase tracking-wide leading-[0.95]">
              {t('title')}
            </h2>
            <p className="mt-4 text-lg text-rocket-black/70 font-[family-name:var(--font-body)]">
              {t('subtitle')}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-rocket-black px-8 py-4 text-sm font-bold uppercase tracking-wider text-rocket-yellow transition-all duration-300 hover:bg-rocket-dark hover:shadow-2xl font-[family-name:var(--font-accent)]"
              >
                {t('button')}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+22384404006"
                className="group inline-flex items-center gap-2 border-2 border-rocket-black/30 px-6 py-4 text-sm font-semibold text-rocket-black transition-all duration-300 hover:border-rocket-black font-[family-name:var(--font-accent)]"
              >
                <Phone size={16} />
                84 40 40 06
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Right — RS4 image */}
        <div className="relative h-80 lg:h-auto">
          <Image
            src="/images/RS4.jpg"
            alt="Rocket Security tactical guard"
            fill
            className="object-cover object-top"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:bg-gradient-to-r lg:from-black/20 lg:to-transparent" />
        </div>
      </div>
    </section>
  );
}
