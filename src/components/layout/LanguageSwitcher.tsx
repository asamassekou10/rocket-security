'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-rocket-gray-700 p-1">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
            locale === loc
              ? 'bg-rocket-yellow text-rocket-black'
              : 'text-rocket-gray-400 hover:text-rocket-white'
          }`}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
