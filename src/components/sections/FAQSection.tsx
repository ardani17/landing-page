import { faqItems } from "@/lib/faq";

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-vastara-red-600 dark:text-vastara-red-500 uppercase tracking-wide">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
            Pertanyaan yang{" "}
            <span className="text-vastara-red-600 dark:text-vastara-red-500">
              Sering Ditanyakan
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-neutral-900 dark:text-white">
                {faq.question}
                <span className="text-vastara-red-600 dark:text-vastara-red-500 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

