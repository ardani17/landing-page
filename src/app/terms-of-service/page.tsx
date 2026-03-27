import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Syarat dan ketentuan penggunaan layanan VASTARA untuk seluruh pengguna platform.",
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: `Terms of Service | ${siteConfig.name}`,
    description:
      "Syarat dan ketentuan resmi penggunaan layanan VASTARA.",
    url: `${siteConfig.url}/terms-of-service`,
  },
};

export default function TermsOfServicePage() {
  return (
    <section className="pt-28 pb-20 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
            Terms of Service
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Terakhir diperbarui: 28 Maret 2026
          </p>
        </header>

        <article className="space-y-6 text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <p>
            Dengan mengakses layanan VASTARA, Anda menyetujui syarat penggunaan
            ini. Jika tidak setuju, mohon tidak menggunakan layanan kami.
          </p>

          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
            Penggunaan Layanan
          </h2>
          <p>
            Anda bertanggung jawab atas keamanan akun, kerahasiaan kredensial,
            dan seluruh aktivitas yang dilakukan melalui akun Anda.
          </p>

          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
            Informasi dan Risiko Investasi
          </h2>
          <p>
            Seluruh informasi yang tersedia bersifat edukasi dan referensi.
            Keputusan investasi tetap menjadi tanggung jawab pengguna masing-masing.
          </p>

          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
            Pembayaran dan Berlangganan
          </h2>
          <p>
            Biaya berlangganan mengikuti paket yang dipilih. Detail penagihan,
            pembaruan, dan kebijakan perubahan paket dapat mengikuti kebijakan
            operasional resmi VASTARA.
          </p>

          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
            Perubahan Ketentuan
          </h2>
          <p>
            VASTARA berhak memperbarui ketentuan ini dari waktu ke waktu. Versi
            terbaru akan dipublikasikan pada halaman ini.
          </p>
        </article>
      </div>
    </section>
  );
}

