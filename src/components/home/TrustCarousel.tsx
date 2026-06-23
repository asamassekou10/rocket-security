'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const partners = [
  { name: 'PMU Mali', logo: '/images/partners/pmu-mali.jpeg' },
  { name: 'ACI-SA', logo: '/images/partners/aci-sa.jpeg' },
  { name: 'Banque Atlantique', logo: '/images/partners/banque-atlantique.jpeg' },
  { name: 'Black Rock Mining', logo: '/images/partners/black-rock-mining.jpeg' },
  { name: 'Comsates', logo: '/images/partners/comsates.jpeg' },
];

function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex-shrink-0 mx-5 flex h-24 w-52 items-center justify-center rounded-lg border border-white/10 bg-white px-6 py-4 opacity-85 shadow-lg shadow-black/20 transition-all duration-500 hover:opacity-100 hover:shadow-rocket-yellow/10">
      <Image
        src={logo}
        alt={name}
        width={160}
        height={80}
        className="max-h-16 w-auto object-contain"
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
