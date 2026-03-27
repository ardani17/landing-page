import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "VASTARA - Platform Analisa Saham Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description:
      "Analisis saham Indonesia dengan Agent Basic dan Agent Pro di VASTARA.",
    images: [siteConfig.ogImage],
  },
  category: "finance",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/assets/vastara-icon-logo.png",
    apple: "/assets/vastara-icon-logo.png",
  },
};

const themeInitializerScript = `
(() => {
  try {
    const preferenceKey = "vastara-theme-preference";
    const legacyThemeKey = "vastara-theme";
    const savedPreference = localStorage.getItem(preferenceKey);
    const legacyTheme = localStorage.getItem(legacyThemeKey);
    const hasSavedPreference =
      savedPreference === "light" ||
      savedPreference === "dark" ||
      savedPreference === "system";
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const preference = hasSavedPreference
      ? savedPreference
      : (legacyTheme === "light" || legacyTheme === "dark")
        ? legacyTheme
        : "system";
    const theme = preference === "system"
      ? (prefersDark ? "dark" : "light")
      : preference;
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    root.style.colorScheme = theme;
    root.dataset.themePreference = preference;
    localStorage.setItem(preferenceKey, preference);
    localStorage.setItem(legacyThemeKey, theme);
  } catch (error) {
    // Ignore theme initialization errors to prevent blocking page render.
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializerScript }} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider initialTheme="system">
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
