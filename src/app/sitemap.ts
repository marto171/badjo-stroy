import type { MetadataRoute } from "next";

const SITE_URL = "https://badjostroy.bg";

const lastBuild = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: lastBuild,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          "bg-BG": SITE_URL,
        },
      },
    },
    {
      url: `${SITE_URL}/#services`,
      lastModified: lastBuild,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/#gallery`,
      lastModified: lastBuild,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/#faq`,
      lastModified: lastBuild,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/#contact`,
      lastModified: lastBuild,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: lastBuild,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: lastBuild,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
