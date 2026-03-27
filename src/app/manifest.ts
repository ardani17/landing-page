import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#DC2626",
    lang: "id-ID",
    categories: ["finance", "business", "productivity"],
    icons: [
      {
        src: "/assets/vastara-icon-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
