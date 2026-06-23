'use client';

import { useTranslations } from 'next-intl';
import { MessageCircle, Phone } from 'lucide-react';

export function MobileContactBar() {
  const t = useTranslations('mobile_contact');

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-rocket-black/95 px-3 py-2 shadow-2xl shadow-black/60 backdrop-blur-xl lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <a
          href="tel:+22384404006"
          className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-rocket-yellow px-3 text-xs font-bold uppercase tracking-wide text-rocket-black"
        >
          <Phone size={16} />
          {t('call')}
        </a>
        <a
          href="https://wa.me/22384404006"
          className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/15 px-3 text-xs font-bold uppercase tracking-wide text-white"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
