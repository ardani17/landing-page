import { Check, Crown } from "lucide-react";

const plans = [
  {
    name: "Agent Basic",
    badge: "Starter",
    regularPrice: "Rp 3.000.000",
    referralPrice: "Rp 1.000.000",
    description:
      "Paket untuk kebutuhan harian dengan tools analisa dan analisa AI agent.",
    features: [
      "Tools Analisa Saham Lengkap",
      "Analisa AI Agent Basic",
      "Data Fundamental 900+ Saham",
      "Alert Harga & Watchlist",
      "Fee Active Income",
      "Fee Passive Income",
    ],
    ctaLabel: "Pilih Agent Basic",
    highlighted: false,
  },
  {
    name: "Agent Pro",
    badge: "Paling Lengkap",
    regularPrice: "Rp 10.000.000",
    referralPrice: "Rp 5.000.000",
    description:
      "Paket lengkap untuk analisa AI agent lebih dalam dan kebutuhan profesional.",
    features: [
      "Tools Analisa Saham Lengkap",
      "Analisa AI Agent Pro Mendalam",
      "Dashboard Analytics Lanjutan",
      "Skoring saham lebih detail",
      "Fee Active Income Prioritas",
      "Fee Passive Income Berjenjang",
    ],
    ctaLabel: "Pilih Agent Pro",
    highlighted: true,
  },
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
            Pilih{" "}
            <span className="text-vastara-red-600 dark:text-vastara-red-500">
              Agent Anda
            </span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Tersedia dua skema harga untuk Agent Basic dan Agent Pro: harga
            normal dan harga khusus jika menggunakan referral agen.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="relative">
              {plan.highlighted && (
                <div className="absolute -inset-1 bg-gradient-to-r from-vastara-red-600 to-vastara-red-800 rounded-3xl blur opacity-20" />
              )}

              <div
                className={`relative h-full bg-white dark:bg-neutral-950 rounded-3xl p-8 lg:p-10 border ${
                  plan.highlighted
                    ? "border-vastara-red-200 dark:border-vastara-red-900"
                    : "border-neutral-200 dark:border-neutral-800"
                }`}
              >
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-6 ${
                    plan.highlighted
                      ? "bg-vastara-red-600 text-white"
                      : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200"
                  }`}
                >
                  <Crown size={16} />
                  {plan.badge}
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                    {plan.name}
                  </h3>

                  <div className="mt-4 space-y-3">
                    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-4 py-3">
                      <p className="text-xs uppercase tracking-wide text-neutral-500">
                        Harga Normal
                      </p>
                      <p className="mt-1 text-2xl font-bold text-neutral-900 dark:text-white">
                        {plan.regularPrice}
                        <span className="text-sm font-medium text-neutral-500">
                          {" "}
                          /bulan
                        </span>
                      </p>
                    </div>
                    <div className="rounded-xl border border-vastara-red-200 dark:border-vastara-red-900 bg-vastara-red-50/70 dark:bg-vastara-red-950/30 px-4 py-3">
                      <p className="text-xs uppercase tracking-wide text-vastara-red-700 dark:text-vastara-red-400">
                        Harga Referral Agen
                      </p>
                      <p className="mt-1 text-3xl font-bold text-vastara-red-700 dark:text-vastara-red-400">
                        {plan.referralPrice}
                        <span className="text-sm font-medium text-vastara-red-600 dark:text-vastara-red-500">
                          {" "}
                          /bulan
                        </span>
                      </p>
                    </div>
                  </div>

                  <p className="mt-2 text-sm text-neutral-500">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mt-0.5">
                        <Check
                          size={12}
                          className="text-green-600 dark:text-green-400"
                        />
                      </div>
                      <span className="text-neutral-700 dark:text-neutral-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://saham.vastara.id/register"
                  className={`block w-full text-center px-6 py-4 font-semibold rounded-xl transition-colors ${
                    plan.highlighted
                      ? "bg-vastara-red-600 hover:bg-vastara-red-700 text-white"
                      : "bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
                  }`}
                >
                  {plan.ctaLabel}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
          Harga referral agen berlaku untuk member dengan referral agen aktif.
        </p>
      </div>
    </section>
  );
}
