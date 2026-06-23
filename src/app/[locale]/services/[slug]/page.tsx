import { routing } from '@/i18n/routing';
import { getServiceBySlug, services } from '@/lib/services';
import { notFound } from 'next/navigation';
import { ServiceDetailClient } from './ServiceDetailClient';

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    services.map((service) => ({
      locale,
      slug: service.slug,
    })),
  );
}

export const dynamicParams = false;

export default async function ServiceDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;

  if (!getServiceBySlug(slug)) {
    notFound();
  }

  return <ServiceDetailClient slug={slug} />;
}
