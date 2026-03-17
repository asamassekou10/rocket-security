'use client';

import { Link } from '@/i18n/navigation';
import { Shield } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-rocket-black">
      <div className="text-center px-4">
        <Shield className="mx-auto h-16 w-16 text-rocket-yellow/30 mb-6" />
        <h1 className="font-[family-name:var(--font-heading)] text-8xl font-extrabold text-rocket-yellow">
          404
        </h1>
        <p className="mt-4 text-xl text-rocket-gray-400">
          Page not found / Page introuvable
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-rocket-yellow px-8 py-3 text-sm font-bold text-rocket-black transition-all hover:bg-rocket-gold"
        >
          Return Home / Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}
