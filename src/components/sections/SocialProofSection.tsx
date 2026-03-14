import { TrendingUp, Users, BarChart3, Shield } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Active Users",
    description: "Investor yang sudah bergabung",
  },
  {
    icon: TrendingUp,
    value: "900+",
    label: "Saham IDX",
    description: "Semua saham Indonesia",
  },
  {
    icon: BarChart3,
    value: "24/7",
    label: "AI Analysis",
    description: "Analisis real-time",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Aman & Terpercaya",
    description: "Data terlindungi",
  },
];

export default function SocialProofSection() {
  return (
    <section className="py-16 bg-white dark:bg-neutral-950 border-y border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-vastara-red-50 dark:bg-vastara-red-950/50 text-vastara-red-600 dark:text-vastara-red-500 mb-4">
                <stat.icon size={24} />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
