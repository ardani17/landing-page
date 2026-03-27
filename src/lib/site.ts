const DEFAULT_SITE_URL = "https://vastara.id";

function normalizeUrl(url: string): string {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export const siteConfig = {
  name: "VASTARA",
  title: "VASTARA - Screening Saham Cerdas, Passive Income Pasti",
  description:
    "Platform screening saham Indonesia dengan Agent Basic dan Agent Pro untuk analisa AI agent, data fundamental, serta peluang fee active income dan passive income.",
  keywords: [
    "saham indonesia",
    "screening saham",
    "analisis saham",
    "agent saham",
    "analisa ai agent",
    "active income",
    "investasi saham",
    "trading saham",
    "passive income",
  ],
  locale: "id_ID",
  ogImage: "/og/vastara-og.svg",
  url: normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL),
};
