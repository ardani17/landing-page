import {
  Search,
  TrendingUp,
  Bot,
  FileText,
  Bell,
  FolderKanban,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Screener Saham",
    description:
      "Filter saham berdasarkan kriteria teknikal dan fundamental sesuai strategi trading Anda.",
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/50",
  },
  {
    icon: TrendingUp,
    title: "Fee Active & Passive Income",
    description:
      "Dapatkan peluang fee active income dan passive income melalui sistem referral agen yang terstruktur.",
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-950/50",
  },
  {
    icon: Bot,
    title: "Agent Basic & Pro",
    description:
      "Dua agent untuk menganalisis saham: Agent Basic untuk kebutuhan harian, Agent Pro untuk analisis lebih mendalam.",
    color: "text-vastara-red-500",
    bgColor: "bg-vastara-red-50 dark:bg-vastara-red-950/50",
  },
  {
    icon: FileText,
    title: "Fundamental Data",
    description:
      "Akses lengkap laporan keuangan, rasio, dan data fundamental semua saham IDX.",
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/50",
  },
  {
    icon: Bell,
    title: "Alert Harga",
    description:
      "Notifikasi real-time saat harga saham mencapai target atau kondisi tertentu.",
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/50",
  },
  {
    icon: FolderKanban,
    title: "Watchlist Portfolio",
    description:
      "Pantau dan kelola saham favorit Anda dalam satu dashboard yang terorganisir.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/50",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="fitur"
      className="py-20 lg:py-28 bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-vastara-red-600 dark:text-vastara-red-500 uppercase tracking-wide">
            Fitur
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white">
            Tools Lengkap untuk{" "}
            <span className="text-vastara-red-600 dark:text-vastara-red-500">
              Analisis Saham
            </span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Semua yang Anda butuhkan untuk menganalisis dan memantau saham
            Indonesia dalam satu platform terintegrasi.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 lg:p-8 bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-vastara-red-200 dark:hover:border-vastara-red-800 transition-all duration-300 hover:shadow-lg hover:shadow-vastara-red-500/5"
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${feature.bgColor} ${feature.color} mb-6`}
              >
                <feature.icon size={28} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-vastara-red-600 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Tertarik dengan semua fitur ini?
          </p>
          <a
            href="https://saham.vastara.id/register"
            className="inline-flex items-center gap-2 px-6 py-3 bg-vastara-red-600 hover:bg-vastara-red-700 text-white font-semibold rounded-xl transition-colors"
          >
            Gabung Sekarang Amankan Profitmu !
          </a>
        </div>
      </div>
    </section>
  );
}
