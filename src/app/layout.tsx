import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "VASTARA - Screening Saham Cerdas, Passive Income Pasti",
  description:
    "Platform screening saham Indonesia paling lengkap dengan AI. Dapatkan sinyal buy/sell akurat, analisis fundamental, dan kesempatan passive income dari network.",
  keywords: [
    "saham indonesia",
    "screening saham",
    "investasi",
    "trading",
    "passive income",
    "AI analyst",
  ],
  authors: [{ name: "VASTARA" }],
  openGraph: {
    title: "VASTARA - Screening Saham Cerdas, Passive Income Pasti",
    description:
      "Platform screening saham Indonesia paling lengkap dengan AI.",
    type: "website",
    locale: "id_ID",
    siteName: "VASTARA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
