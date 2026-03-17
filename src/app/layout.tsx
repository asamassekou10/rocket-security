import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rocket Security',
  description: 'Votre sécurité, notre passion',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
