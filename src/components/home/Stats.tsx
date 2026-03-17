'use client';

import { useTranslations } from 'next-intl';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Calendar, Users, Handshake, MapPin } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { end: 10, suffix: '+', key: 'years', icon: Calendar },
  { end: 500, suffix: '+', key: 'agents', icon: Users },
  { end: 200, suffix: '+', key: 'clients', icon: Handshake },
  { end: 150, suffix: '+', key: 'sites', icon: MapPin },
];

export function Stats() {
  const t = useTranslations('about.stats');

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background image — team meeting */}
      <div className="absolute inset-0">
        <Image
          src="/images/RS5.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      {/* Yellow accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rocket-yellow/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rocket-yellow/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered heading */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="font-[family-name:var(--font-accent)] text-sm tracking-[0.3em] uppercase text-rocket-yellow mb-4">
            {t('label')}
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase tracking-wide text-rocket-white">
            {t('heading')}
          </h2>
          <div className="mt-4 h-1 w-20 bg-rocket-yellow mx-auto" />
        </div>

        {/* 4-column centered stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.key}
                className="glass glass-hover rounded-lg p-8 text-center"
              >
                <Icon className="mx-auto mb-4 h-8 w-8 text-rocket-yellow/60" />
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  label={t(stat.key)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
