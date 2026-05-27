import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { supabaseAdmin } from "@/lib/supabase/server";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
      path: "/articles",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/articles/bathhouse-row",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },

    {
      path: "/events",
      priority: 0.95,
      changeFrequency: "daily" as const,
    },
    {
      path: "/this-weekend",
      priority: 0.95,
      changeFrequency: "daily" as const,
    },
    {
      path: "/submit-event",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },

    {
      path: "/community-photos",
      priority: 0.82,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/submit-photo",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },

    {
      path: "/hot-springs-local-spots",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/hot-springs-family-friendly",
      priority: 0.88,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/hot-springs-ouachita-avenue",
      priority: 0.86,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/hot-springs-bathhouse-row-local-finds",
      priority: 0.86,
      changeFrequency: "weekly" as const,
    },

    {
      path: "/hot-springs-antique-thrift-flea-markets",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/hot-springs-antique-stores",
      priority: 0.86,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/hot-springs-thrift-stores",
      priority: 0.86,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/hot-springs-flea-markets",
      priority: 0.86,
      changeFrequency: "weekly" as const,
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
    {
      path: "/history",
      priority: 0.75,
      changeFrequency: "monthly" as const,
    },

    {
      path: "/local-businesses",
      priority: 0.88,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/contact",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
  ];

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const { data: events } = await supabaseAdmin
    .from("events")
    .select("slug, updated_at")
    .eq("status", "approved");

  const eventRoutes: MetadataRoute.Sitemap =
    events?.map((event) => ({
      url: `${site.url}/events/${event.slug}`,
      lastModified: event.updated_at
        ? new Date(event.updated_at)
        : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })) || [];

  return [...staticRoutes, ...eventRoutes];
}