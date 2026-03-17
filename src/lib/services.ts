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
}

export const services: ServiceInfo[] = [
  {
    slug: 'private-security',
    translationKey: 'private_security',
    icon: Shield,
    image: '/images/RS4.jpg',
  },
  {
    slug: 'event-security',
    translationKey: 'event_security',
    icon: CalendarCheck,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
  },
  {
    slug: 'guarding',
    translationKey: 'guarding',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
  },
  {
    slug: 'patrols',
    translationKey: 'patrols',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=600&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1585241645927-c7a8e5840c42?w=800&h=600&fit=crop',
  },
  {
    slug: 'cash-transport',
    translationKey: 'cash_transport',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?w=800&h=600&fit=crop',
  },
];

export function getServiceBySlug(slug: string): ServiceInfo | undefined {
  return services.find((s) => s.slug === slug);
}
