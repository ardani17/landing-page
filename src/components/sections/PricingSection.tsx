import { Check, Crown, Users, TrendingUp, AlertCircle } from "lucide-react";

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

const levels = [
  {
    level: 1,
    name: "Direct Commission",
    amount: "Rp 250.000",
    status: "Instant",
    description: "Per direct sponsor yang Anda rekrut",
    requirement: "Tidak ada syarat",
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-950/50",
  },
  {
    level: 2,
    name: "Level 2",
    amount: "Rp 50.000",
    status: "Passive",
    description: "Dari Level 2 jaringan Anda",
    requirement: "Min. 3 Direct Sponsor Aktif",
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/50",
  },
  {
    level: 3,
    name: "Level 3",
    amount: "Rp 30.000",
    status: "Passive",
    description: "Dari Level 3 jaringan Anda",
    requirement: "Min. 5 Direct Sponsor Aktif",
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/50",
  },
  {
    level: 4,
    name: "Level 4",
    amount: "Rp 20.000",
    status: "Passive",
    description: "Dari Level 4 jaringan Anda",
    requirement: "Min. 7 Direct Sponsor Aktif",
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/50",
  },
  {
    level: 5,
    name: "Level 5",
    amount: "Rp 10.000",
    status: "Passive",
    description: "Dari Level 5 jaringan Anda",
    requirement: "Min. 10 Direct Sponsor Aktif",
    color: "text-vastara-red-500",
    bgColor: "bg-vastara-red-50 dark:bg-vastara-red-950/50",
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
            Investasi{" "}
            <span className="text-vastara-red-600 dark:text-vastara-red-500">
              Satu Harga
            </span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Akses penuh ke semua fitur dengan satu harga. Plus kesempatan
            menghasilkan passive income dari sistem referral.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
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

          {/* Referral System */}
          <div>
            <div className="bg-white dark:bg-neutral-950 rounded-3xl p-8 lg:p-10 border border-neutral-200 dark:border-neutral-800">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-vastara-red-50 dark:bg-vastara-red-950/50 flex items-center justify-center">
                  <TrendingUp className="text-vastara-red-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    Sistem Referral Berjenjang
                  </h3>
                  <p className="text-sm text-neutral-500">
                    Potential income hingga 5 level
                  </p>
                </div>
              </div>

              {/* Pyramid Visual */}
              <div className="space-y-3 mb-6">
                {levels.map((level, index) => (
                  <div
                    key={index}
                    className={`relative p-4 rounded-xl ${level.bgColor} border border-transparent hover:border-current/20 transition-colors`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg bg-white dark:bg-neutral-900 flex items-center justify-center font-semibold ${level.color}`}
                        >
                          L{level.level}
                        </div>
                        <div>
                          <div className="font-medium text-neutral-900 dark:text-white">
                            {level.name}
                          </div>
                          <div className="text-xs text-neutral-500">
                            {level.requirement}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`font-bold ${level.color}`}
                        >
                          {level.amount}
                        </div>
                        <div className="text-xs text-neutral-500">
                          {level.status}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-neutral-600 dark:text-neutral-400">
                    Total Maksimal Payout
                  </span>
                  <span className="font-bold text-neutral-900 dark:text-white">
                    Rp 360.000
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <AlertCircle size={14} />
                  <span>Level 2-5 dicairkan tanggal 10 setiap bulan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-12 p-6 bg-vastara-red-50 dark:bg-vastara-red-950/30 rounded-2xl border border-vastara-red-100 dark:border-vastara-red-900">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-vastara-red-100 dark:bg-vastara-red-900 flex items-center justify-center">
              <Users className="text-vastara-red-600 dark:text-vastara-red-400" size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 dark:text-white mb-1">
                Sistem Auto-Renewal
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Komisi Level 2-5 disimpan di &quot;Passive Wallet&quot; dan otomatis
                digunakan untuk perpanjangan langganan. Saldo yang kurang akan
                menghasilkan notifikasi untuk top-up atau direct selling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
