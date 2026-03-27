import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Pernyataan penafian terkait penggunaan informasi analisis saham pada platform VASTARA.",
  alternates: {
    canonical: "/disclaimer",
  },
  openGraph: {
    title: `Disclaimer | ${siteConfig.name}`,
    description:
      "Penafian resmi terkait informasi dan analisis pada platform VASTARA.",
    url: `${siteConfig.url}/disclaimer`,
  },
};

export default function DisclaimerPage() {
  return (
    <section className="pt-28 pb-20 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
            Disclaimer
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Terakhir diperbarui: 28 Maret 2026
          </p>
        </header>

        <article className="space-y-6 text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <p>
            Informasi analisa dan analisis yang tersedia pada VASTARA tidak
            dimaksudkan sebagai saran keuangan atau ajakan membeli/menjual
            efek.
          </p>

          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
            Bukan Nasihat Keuangan
          </h2>
          <p>
            VASTARA menyediakan tools analisis untuk membantu pengambilan
            keputusan. Pengguna wajib melakukan riset tambahan sesuai profil
            risiko pribadi.
          </p>

          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
            Risiko Pasar
          </h2>
          <p>
            Investasi saham memiliki risiko. Kinerja masa lalu tidak menjamin
            hasil di masa depan, dan nilai investasi dapat naik maupun turun.
          </p>

          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
            Tanggung Jawab Pengguna
          </h2>
          <p>
            Setiap keputusan transaksi sepenuhnya menjadi tanggung jawab
            pengguna. VASTARA tidak bertanggung jawab atas kerugian yang timbul
            dari keputusan investasi individual.
          </p>
        </article>
      </div>
    </section>
  );
}
