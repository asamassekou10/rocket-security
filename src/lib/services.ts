import {
  Shield,
  CalendarCheck,
  Building2,
  Car,
  Camera,
  Dog,
  Truck,
  type LucideIcon,
} from 'lucide-react';

export interface ServiceInfo {
  slug: string;
  translationKey: string;
  icon: LucideIcon;
  image: string;
  imagePosition?: string;
}

export const services: ServiceInfo[] = [
  {
    slug: 'private-security',
    translationKey: 'private_security',
    icon: Shield,
    image: '/images/RS4.jpg',
    imagePosition: 'center top',
  },
  {
    slug: 'event-security',
    translationKey: 'event_security',
    icon: CalendarCheck,
    image: '/images/PHOTO-2026-03-17-05-14-08.jpg',
  },
  {
    slug: 'guarding',
    translationKey: 'guarding',
    icon: Building2,
    image: '/images/PHOTO-2026-03-17-05-14-09.jpg',
    imagePosition: 'center top',
  },
  {
    slug: 'patrols',
    translationKey: 'patrols',
    icon: Car,
    image: '/images/PHOTO-2026-03-17-05-13-54.jpg',
    imagePosition: 'center top',
  },
  {
    slug: 'remote-surveillance',
    translationKey: 'remote_surveillance',
    icon: Camera,
    image: '/images/RS3.jpg',
  },
  {
    slug: 'k9-mobile',
    translationKey: 'k9_mobile',
    icon: Dog,
    image: '/images/PHOTO-2026-03-17-05-14-03.jpg',
    imagePosition: 'center top',
  },
  {
    slug: 'cash-transport',
    translationKey: 'cash_transport',
    icon: Truck,
    image: '/images/PHOTO-2026-03-17-05-14-12%202.jpg',
    imagePosition: 'center top',
  },
];

export function getServiceBySlug(slug: string): ServiceInfo | undefined {
  return services.find((s) => s.slug === slug);
}
