import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Oswald, Inter, Barlow_Condensed } from 'next/font/google';
import '../globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/layout/JsonLd';
import { SplashScreen } from '@/components/ui/SplashScreen';
import { MobileContactBar } from '@/components/layout/MobileContactBar';

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-accent',
  display: 'swap',
});

type Params = Promise<{ locale: string }>;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: {
      default: t('title'),
      template: `%s | Rocket Security`,
    },
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale === 'fr' ? 'fr_ML' : 'en_US',
      type: 'website',
      siteName: 'Rocket Security',
    },
    alternates: {
      languages: {
        fr: '/fr',
        en: '/en',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'fr' | 'en')) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${oswald.variable} ${inter.variable} ${barlowCondensed.variable}`}>
      <body className="bg-rocket-black text-rocket-white antialiased">
        <JsonLd />
        <NextIntlClientProvider messages={messages}>
          <SplashScreen />
          <Navbar />
          <main className="min-h-screen pb-16 lg:pb-0">{children}</main>
          <Footer />
          <MobileContactBar />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
