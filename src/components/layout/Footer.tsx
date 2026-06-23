'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const services = useTranslations('services');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-rocket-darker border-t border-rocket-gray-800 overflow-hidden pb-16 lg:pb-0">
      {/* Gradient orbs */}
      <div className="gradient-orb gradient-orb-yellow w-[400px] h-[400px] -bottom-40 -left-20 opacity-15" />
      <div className="gradient-orb gradient-orb-amber w-[300px] h-[300px] -top-20 -right-20 opacity-10" />

      {/* Main footer */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Rocket Security"
                width={45}
                height={45}
              />
              <div>
                <span className="font-[family-name:var(--font-heading)] text-xl font-semibold text-rocket-yellow tracking-wider">
                  ROCKET
                </span>
                <span className="font-[family-name:var(--font-heading)] text-xl font-semibold text-rocket-white tracking-wider">
                  {' '}SECURITY
                </span>
              </div>
            </Link>
            <p className="text-sm text-rocket-gray-400 leading-relaxed font-[family-name:var(--font-body)]">
              {t('description')}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/MLRocket/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-rocket-gray-800 text-rocket-gray-400 transition-all hover:bg-rocket-yellow hover:text-rocket-black"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-rocket-gray-800 text-rocket-gray-400 transition-all hover:bg-rocket-yellow hover:text-rocket-black"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-rocket-gray-800 text-rocket-gray-400 transition-all hover:bg-rocket-yellow hover:text-rocket-black"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold uppercase tracking-wider text-rocket-yellow mb-6">
              {t('quick_links')}
            </h3>
            <ul className="space-y-3">
              {(['home', 'about', 'services', 'recruitment', 'contact'] as const).map((key) => (
                <li key={key}>
                  <Link
                    href={key === 'home' ? '/' : `/${key}`}
                    className="text-sm text-rocket-gray-400 hover:text-rocket-yellow transition-colors duration-300 font-[family-name:var(--font-accent)]"
                  >
                    {nav(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold uppercase tracking-wider text-rocket-yellow mb-6">
              {t('services')}
            </h3>
            <ul className="space-y-3">
              {[
                { key: 'private_security', slug: 'private-security' },
                { key: 'event_security', slug: 'event-security' },
                { key: 'guarding', slug: 'guarding' },
                { key: 'patrols', slug: 'patrols' },
                { key: 'remote_surveillance', slug: 'remote-surveillance' },
                { key: 'k9_mobile', slug: 'k9-mobile' },
                { key: 'cash_transport', slug: 'cash-transport' },
              ].map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-rocket-gray-400 hover:text-rocket-yellow transition-colors duration-300 font-[family-name:var(--font-accent)]"
                  >
                    {services(`${service.key}.name`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold uppercase tracking-wider text-rocket-yellow mb-6">
              {t('contact_us')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-rocket-yellow mt-0.5 shrink-0" />
                <span className="text-sm text-rocket-gray-400">{t('address')}</span>
              </li>
              <li>
                <a href="tel:+22384404006" className="flex items-center gap-3 text-sm text-rocket-gray-400 hover:text-rocket-yellow transition-colors">
                  <Phone size={18} className="text-rocket-yellow shrink-0" />
                  84 40 40 06
                </a>
              </li>
              <li>
                <a href="tel:+22384404003" className="flex items-center gap-3 text-sm text-rocket-gray-400 hover:text-rocket-yellow transition-colors">
                  <Phone size={18} className="text-rocket-yellow shrink-0" />
                  84 40 40 03
                </a>
              </li>
              <li>
                <a href="tel:+22390959551" className="flex items-center gap-3 text-sm text-rocket-gray-400 hover:text-rocket-yellow transition-colors">
                  <Phone size={18} className="text-rocket-yellow shrink-0" />
                  90 95 95 51
                </a>
              </li>
              <li>
                <a href="mailto:contact@rocketsecurity.net" className="flex items-center gap-3 text-sm text-rocket-gray-400 hover:text-rocket-yellow transition-colors">
                  <Mail size={18} className="text-rocket-yellow shrink-0" />
                  contact@rocketsecurity.net
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-rocket-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-rocket-gray-400">
            &copy; {currentYear} Rocket Security. {t('rights')}
          </p>
          <p className="text-xs text-rocket-gray-400">
            Faladié Extension EST, Bamako, Mali
          </p>
        </div>
      </div>
    </footer>
  );
}
