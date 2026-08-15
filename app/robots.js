export default function robots() {
  const baseUrl = 'https://prayagsahu.com'; // Change to your actual domain name

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'], // Folders you don't want Google to scan
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Tells Google exactly where your sitemap is
  };
}
