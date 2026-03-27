import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Retail Investor",
    content:
      "Tools analisa VASTARA sangat membantu saya menemukan saham dengan potensi bagus. AI Agent-nya juga memberikan analisis yang mudah dipahami.",
    rating: 5,
    avatar: "BS",
  },
  {
    name: "Siti Rahayu",
    role: "Swing Trader",
    content:
      "Tools analisa dan analisa AI agent-nya sangat membantu saya menyaring saham lebih cepat. Workflow trading jadi jauh lebih rapi.",
    rating: 5,
    avatar: "SR",
  },
  {
    name: "Ahmad Wijaya",
    role: "Network Builder",
    content:
      "Sistem referral-nya luar biasa! Dalam 3 bulan, passive income dari network sudah cover biaya langganan dan masih ada surplus.",
    rating: 5,
    avatar: "AW",
  },
  {
    name: "Dewi Kusuma",
    role: "Fundamental Investor",
    content:
      "Data fundamental yang disediakan sangat lengkap. Cocok untuk investor yang suka analisis mendalam sebelum membeli saham.",
    rating: 5,
    avatar: "DK",
  },
  {
    name: "Rizky Pratama",
    role: "Day Trader",
    content:
      "Alert harga real-time sangat membantu untuk eksekusi cepat. Platform yang wajib dimiliki trader Indonesia.",
    rating: 5,
    avatar: "RP",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-vastara-red-600 dark:text-vastara-red-500 uppercase tracking-wide">
            Testimoni
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white">
            Cerita Nyata{" "}
            <span className="text-vastara-red-600 dark:text-vastara-red-500">
              dari Member VASTARA
            </span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Ini pengalaman langsung dari member yang sudah pakai tools VASTARA
            dalam aktivitas analisa harian mereka.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 lg:p-8 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-vastara-red-200 dark:hover:border-vastara-red-800 transition-colors"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-vastara-red-100 dark:text-vastara-red-900">
                <Quote size={40} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-neutral-700 dark:text-neutral-300 mb-6 relative z-10">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-vastara-red-100 dark:bg-vastara-red-900 flex items-center justify-center text-vastara-red-600 dark:text-vastara-red-400 font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-neutral-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
