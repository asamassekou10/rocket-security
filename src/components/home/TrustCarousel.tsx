'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const partners = [
  { name: 'Partner 1', logo: '/images/partners/partner-1.svg' },
  { name: 'Partner 2', logo: '/images/partners/partner-2.svg' },
  { name: 'Partner 3', logo: '/images/partners/partner-3.svg' },
  { name: 'Partner 4', logo: '/images/partners/partner-4.svg' },
  { name: 'Partner 5', logo: '/images/partners/partner-5.svg' },
  { name: 'Partner 6', logo: '/images/partners/partner-6.svg' },
  { name: 'Partner 7', logo: '/images/partners/partner-7.svg' },
  { name: 'Partner 8', logo: '/images/partners/partner-8.svg' },
];

function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex-shrink-0 mx-6 flex h-20 w-40 items-center justify-center rounded-lg glass px-6 py-4 grayscale opacity-60 transition-all duration-500 hover:grayscale-0 hover:opacity-100 hover:border-rocket-yellow/30 hover:shadow-lg hover:shadow-rocket-yellow/10">
      <Image
        src={logo}
        alt={name}
        width={120}
        height={60}
        className="max-h-12 w-auto object-contain"
      />
    </div>
  );
}

export function TrustCarousel() {
  const t = useTranslations('trust');

  return (
    <section className="py-20 bg-rocket-dark overflow-hidden relative">
      <div className="gradient-orb gradient-orb-gold w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 opacity-20" />

      {/* Centered heading */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-12">
        <p className="font-[family-name:var(--font-accent)] text-sm tracking-[0.3em] uppercase text-rocket-yellow mb-4">
          {t('title')}
        </p>
        <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-semibold uppercase tracking-wide text-rocket-white">
          {t('subtitle')}
        </h2>
        <div className="mt-4 h-1 w-20 bg-rocket-yellow mx-auto" />
      </div>

      {/* Infinite scroll marquee */}
      <div className="relative mt-4 z-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-rocket-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-rocket-dark to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...partners, ...partners].map((partner, i) => (
            <PartnerLogo key={`${partner.name}-${i}`} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
