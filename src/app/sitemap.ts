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
      path: "/things-to-do-in-hot-springs-ar",
      priority: 0.95,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/hot-springs-ar-restaurants",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/hot-springs-ar-hotels",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/hot-springs-ar-cabins",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/bathhouse-row",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
  
    {
      path: "/explore",
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
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