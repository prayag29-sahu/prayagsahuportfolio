export default function robots() {
  const baseUrl = 'https://www.prayagsahu.tech';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'], // Folders you don't want Google to scan
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Tells Google exactly where your sitemap is
  };
}
