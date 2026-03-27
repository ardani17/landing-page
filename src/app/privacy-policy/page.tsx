import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Kebijakan privasi VASTARA terkait pengumpulan, penggunaan, dan perlindungan data pengguna.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description:
      "Kebijakan privasi VASTARA untuk melindungi data pengguna platform.",
    url: `${siteConfig.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-28 pb-20 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Terakhir diperbarui: 28 Maret 2026
          </p>
        </header>

        <article className="space-y-6 text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <p>
            VASTARA menghargai privasi pengguna. Kebijakan ini menjelaskan
            bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi
            informasi pribadi saat Anda menggunakan layanan kami.
          </p>

          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
            Data yang Kami Kumpulkan
          </h2>
          <p>
            Kami dapat mengumpulkan data identitas, informasi kontak, aktivitas
            penggunaan platform, serta data teknis perangkat untuk meningkatkan
            kualitas layanan.
          </p>

          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
            Penggunaan Data
          </h2>
          <p>
            Data digunakan untuk menjalankan layanan, meningkatkan akurasi
            rekomendasi, memberikan dukungan pelanggan, dan memenuhi kewajiban
            hukum yang berlaku.
          </p>

          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
            Keamanan
          </h2>
          <p>
            Kami menerapkan kontrol teknis dan operasional yang wajar untuk
            menjaga keamanan data pengguna dari akses tidak sah.
          </p>

          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
            Kontak
          </h2>
          <p>
            Untuk pertanyaan terkait privasi, silakan hubungi{" "}
            <a
              href="mailto:info@vastara.id"
              className="text-vastara-red-600 dark:text-vastara-red-500 hover:underline"
            >
              info@vastara.id
            </a>
            .
          </p>
        </article>
      </div>
    </section>
  );
}

