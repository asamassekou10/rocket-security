'use client';

import { ScrollReveal } from './ScrollReveal';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, centered = true, light = false }: SectionHeadingProps) {
  return (
    <ScrollReveal className={`mb-12 lg:mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className={`font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase tracking-wide ${light ? 'text-rocket-black' : 'text-rocket-white'}`}>
        {title}
      </h2>
      <div className={`mt-4 h-1 w-20 bg-rocket-yellow ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`mt-6 text-lg max-w-2xl font-[family-name:var(--font-body)] ${centered ? 'mx-auto' : ''} ${light ? 'text-rocket-gray-700' : 'text-rocket-gray-400'}`}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
