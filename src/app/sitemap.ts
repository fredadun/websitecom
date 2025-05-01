import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fredadun.com';
  const currentDate = new Date().toISOString();

  // Static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // In a real implementation, you would fetch blog posts and case studies
  // from your data source and add them to the sitemap
  // Example:
  // const blogPosts = await getBlogPosts();
  // const blogSitemapEntries = blogPosts.map(post => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt || post.createdAt,
  //   changeFrequency: 'monthly',
  //   priority: 0.6,
  // }));
  // routes.push(...blogSitemapEntries);

  return routes;
}
