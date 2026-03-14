import { Check, Crown } from "lucide-react";

const mainFeatures = [
  "Akses Screener Saham Lengkap",
  "Sinyal Buy/Sell Real-time",
  "AI Agent Analis",
  "Data Fundamental 900+ Saham",
  "Alert Harga Notifikasi",
  "Watchlist Portfolio",
  "Dashboard Analytics",
  "Support 24/7",
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-20 lg:py-28 bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-vastara-red-600 dark:text-vastara-red-500 uppercase tracking-wide">
            Pricing
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white">
            Investasi{" "}
            <span className="text-vastara-red-600 dark:text-vastara-red-500">
              Satu Harga
            </span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Akses penuh ke semua fitur dengan satu harga.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Main Pricing Card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-vastara-red-600 to-vastara-red-800 rounded-3xl blur opacity-20"></div>
            <div className="relative bg-white dark:bg-neutral-950 rounded-3xl p-8 lg:p-10 border border-neutral-200 dark:border-neutral-800">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vastara-red-600 text-white text-sm font-medium mb-6">
                <Crown size={16} />
                Full Access
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white">
                    Rp 1.000.000
                  </span>
                  <span className="text-neutral-500">/bulan</span>
                </div>
                <p className="mt-2 text-sm text-neutral-500">
                  Semua fitur premium tanpa batasan
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {mainFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mt-0.5">
                      <Check size={12} className="text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://saham.vastara.id/register"
                className="block w-full text-center px-6 py-4 bg-vastara-red-600 hover:bg-vastara-red-700 text-white font-semibold rounded-xl transition-colors"
              >
                Gabung Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
