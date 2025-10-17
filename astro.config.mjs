import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://ciadiazsinger.com',
  integrations: [
    sitemap({
      // Customize priority and changefreq for different pages
      customPages: [
        'https://ciadiazsinger.com/',
        'https://ciadiazsinger.com/shows',
      ],
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Add this to prioritize the shows page
      serialize(item) {
        if (item.url === 'https://ciadiazsinger.com/') {
          item.changefreq = 'monthly';
          item.priority = 1.0;
        }
        if (item.url === 'https://ciadiazsinger.com/shows/') {
          item.changefreq = 'weekly';
          item.priority = 0.9;
        }
        return item;
      },
    }),
  ],
  compressHTML: true,
})