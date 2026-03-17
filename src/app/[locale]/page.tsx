import { Hero } from '@/components/home/Hero';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { TeamShowcase } from '@/components/home/TeamShowcase';
import { Stats } from '@/components/home/Stats';
import { TrustCarousel } from '@/components/home/TrustCarousel';
import { CTABanner } from '@/components/home/CTABanner';

export default function HomePage() {
  return (
    <>
      {/* LEFT-ALIGNED — hero with RS1 background */}
      <Hero />
      {/* SPLIT — left text, right 2x2 image grid */}
      <ServicesGrid />
      {/* SPLIT (reversed) — left images, right text */}
      <TeamShowcase />
      {/* CENTERED — stats with background */}
      <Stats />
      {/* CENTERED — partner marquee */}
      <TrustCarousel />
      {/* SPLIT — left yellow text, right RS4 image */}
      <CTABanner />
    </>
  );
}
