import { UserPlus, Search, TrendingUp, Wallet } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Daftar Akun",
    description: "Buat akun VASTARA dalam hitungan menit. Verifikasi cepat dan aman.",
  },
  {
    step: "02",
    icon: Search,
    title: "Analisa Saham",
    description:
      "Gunakan tools analisa dan pilih Agent Basic atau Agent Pro untuk menemukan saham dengan potensi terbaik.",
  },
  {
    step: "03",
    icon: TrendingUp,
    title: "Analisis & Trading",
    description:
      "Gunakan tools analisa, analisa AI agent, dan data fundamental untuk keputusan trading yang lebih terukur.",
  },
  {
    step: "04",
    icon: Wallet,
    title: "Fee Active & Passive Income",
    description:
      "Aktifkan referral agen untuk mendapatkan fee active income dan passive income hingga 5 level kedalaman.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-vastara-red-600 dark:text-vastara-red-500 uppercase tracking-wide">
            Cara Kerja
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white">
            Mulai dalam{" "}
            <span className="text-vastara-red-600 dark:text-vastara-red-500">
              4 Langkah
            </span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Proses sederhana untuk memulai perjalanan investasi dan passive
            income Anda bersama VASTARA.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-vastara-red-200 dark:via-vastara-red-800 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Card */}
                <div className="relative bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-6 lg:p-8 border border-neutral-200 dark:border-neutral-800 hover:border-vastara-red-200 dark:hover:border-vastara-red-800 transition-colors">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-vastara-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 text-vastara-red-600 dark:text-vastara-red-500 mb-6 mt-2">
                    <step.icon size={28} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
