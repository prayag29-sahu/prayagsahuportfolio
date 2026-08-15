export default function sitemap() {
  const baseUrl = 'https://prayagsahu.com'; // Change to your actual domain name

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // If you add a blog or other pages later, you can add them here:
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ];
}
