import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-vastara-red-100 via-white to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vastara-red-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
          Screening Saham Indonesia
          <span className="block text-vastara-red-500 mt-2">
            + Passive Income
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 dark:text-neutral-400 max-w-3xl mx-auto mb-8">
          Screening Saham Cerdas, Passive Income Pasti
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-500 max-w-2xl mx-auto mb-10">
          Platform screening saham Indonesia paling lengkap dengan 2 agent
          analis saham: Agent Basic dan Agent Pro. Nikmati tools screening,
          analisa AI agent, fee active income, dan fee passive income dari
          sistem referral berjenjang.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://saham.vastara.id/register"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-vastara-red-600 hover:bg-vastara-red-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-vastara-red-600/25"
          >
            Gabung Sekarang
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Stats Preview */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-1">
              900+
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-500">Saham IDX</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-1">
              2
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-500">Tipe Agent Analis</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-1">
              100%
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-500">All-in-One</div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent" />
    </section>
  );
}
