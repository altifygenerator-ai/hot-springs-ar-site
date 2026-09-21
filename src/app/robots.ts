import type { MetadataRoute } from "next";

const siteUrl = "https://www.hotspringsarkansas.org";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/login", "/api/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
