import { Hero } from '@/components/home/Hero';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { TeamShowcase } from '@/components/home/TeamShowcase';
import { Stats } from '@/components/home/Stats';
import { TrustCarousel } from '@/components/home/TrustCarousel';
import { CTABanner } from '@/components/home/CTABanner';
import { SectorsAndMethod } from '@/components/home/SectorsAndMethod';
import { FAQSection } from '@/components/home/FAQSection';

export default function HomePage() {
  return (
    <>
      {/* LEFT-ALIGNED — hero with RS1 background */}
      <Hero />
      {/* SPLIT — left text, right 2x2 image grid */}
      <ServicesGrid />
      {/* SECTORS + METHOD — explains where and how Rocket Security operates */}
      <SectorsAndMethod />
      {/* SPLIT (reversed) — left images, right text */}
      <TeamShowcase />
      {/* CENTERED — stats with background */}
      <Stats />
      {/* CENTERED — partner marquee */}
      <TrustCarousel />
      {/* FAQ — answers common client questions before the final CTA */}
      <FAQSection />
      {/* SPLIT — left yellow text, right RS4 image */}
      <CTABanner />
    </>
  );
}
