"use client";

import { useState } from "react";
import { Mail, MessageCircle, MapPin, Send, Phone } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-vastara-red-600 dark:text-vastara-red-500 uppercase tracking-wide">
            Contact
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white">
            Hubungi{" "}
            <span className="text-vastara-red-600 dark:text-vastara-red-500">
              Kami
            </span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Punya pertanyaan? Tim kami siap membantu Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-6">
              {/* Email */}
              <a
                href="mailto:info@vastara.id"
                className="flex items-start gap-4 p-6 bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-vastara-red-200 dark:hover:border-vastara-red-800 transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-vastara-red-50 dark:bg-vastara-red-950/50 flex items-center justify-center text-vastara-red-600 dark:text-vastara-red-500 group-hover:bg-vastara-red-100 dark:group-hover:bg-vastara-red-900/50 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                    Email
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    info@vastara.id
                  </p>
                  <p className="text-sm text-neutral-500 mt-1">
                    Respon dalam 24 jam
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-vastara-red-200 dark:hover:border-vastara-red-800 transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-50 dark:bg-green-950/50 flex items-center justify-center text-green-600 dark:text-green-500 group-hover:bg-green-100 dark:group-hover:bg-green-900/50 transition-colors">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                    WhatsApp
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    +62 812-3456-7890
                  </p>
                  <p className="text-sm text-neutral-500 mt-1">
                    Chat langsung dengan tim kami
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+6281234567890"
                className="flex items-start gap-4 p-6 bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-vastara-red-200 dark:hover:border-vastara-red-800 transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-500 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                    Telepon
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    +62 812-3456-7890
                  </p>
                  <p className="text-sm text-neutral-500 mt-1">
                    Senin - Jumat, 09:00 - 17:00 WIB
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-6 bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-vastara-red-50 dark:bg-vastara-red-950/50 flex items-center justify-center text-vastara-red-600 dark:text-vastara-red-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                    Lokasi
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-neutral-950 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600 dark:text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                  Pesan Terkirim!
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Terima kasih telah menghubungi kami. Tim kami akan segera
                  merespon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-vastara-red-600 dark:text-vastara-red-500 font-medium hover:underline"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-vastara-red-500 focus:border-transparent transition-colors"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-vastara-red-500 focus:border-transparent transition-colors"
                    placeholder="nama@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-vastara-red-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-vastara-red-600 hover:bg-vastara-red-700 disabled:bg-vastara-red-400 text-white font-semibold rounded-xl transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
