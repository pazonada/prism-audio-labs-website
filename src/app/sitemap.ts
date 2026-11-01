import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://prismaudiolabs.co";
  const pages = ["", "/instrument", "/patterns", "/listen", "/pricing"];
  return pages.map((p) => ({
    url: `${baseUrl}${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
}
