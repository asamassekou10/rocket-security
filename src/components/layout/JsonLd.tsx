export function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SecurityGuard',
    name: 'Rocket Security',
    description:
      'Entreprise de sécurité privée et de gardiennage basée à Bamako, Mali.',
    url: 'https://rocketsecurity.net',
    logo: 'https://rocketsecurity.net/images/logo.png',
    telephone: ['+22384404006', '+22384404003', '+22390959551'],
    email: 'contact@rocketsecurity.net',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Faladié Extension EST, Route de l\'Aéroport',
      addressLocality: 'Bamako',
      addressCountry: 'ML',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.6,
      longitude: -7.95,
    },
    sameAs: ['https://www.facebook.com/MLRocket/'],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Mali',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
