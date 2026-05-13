import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      path: "",
      priority: 1,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/explore",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/things-to-do-in-hot-springs-ar",
      priority: 0.95,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/free-things-to-do-hot-springs",
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },

    // Restaurants
    {
      path: "/hot-springs-ar-restaurants",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/restaurants-near-bathhouse-row",
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/lake-hamilton-restaurants",
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },

    // Hotels / Stays
    {
      path: "/hot-springs-ar-hotels",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/hotels-near-bathhouse-row",
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/hotels-near-oaklawn",
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/hot-springs-ar-cabins",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/lake-hamilton-cabins",
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },

    // Area / landmark pages
    {
      path: "/bathhouse-row",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/lake-hamilton",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },

    // Local info
    {
      path: "/history",
      priority: 0.75,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/local-businesses",
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
  ];

  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}