import HeroSection from "@/components/sections/HeroSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import { faqItems } from "@/lib/faq";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}${siteConfig.ogImage}`,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "info@vastara.id",
            telephone: "+62-812-3456-7890",
            areaServed: "ID",
            availableLanguage: ["id", "en"],
          },
        ],
      },
      {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        inLanguage: "id-ID",
      },
      {
        "@type": "SoftwareApplication",
        name: "VASTARA Agent Saham",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        url: siteConfig.url,
        description: siteConfig.description,
        offers: [
          {
            "@type": "Offer",
            name: "Agent Basic (Harga Normal)",
            price: "3000000",
            priceCurrency: "IDR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              billingDuration: 1,
              billingIncrement: 1,
              unitText: "MONTH",
              price: "3000000",
              priceCurrency: "IDR",
            },
          },
          {
            "@type": "Offer",
            name: "Agent Basic (Harga Referral Agen)",
            price: "1000000",
            priceCurrency: "IDR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              billingDuration: 1,
              billingIncrement: 1,
              unitText: "MONTH",
              price: "1000000",
              priceCurrency: "IDR",
            },
          },
          {
            "@type": "Offer",
            name: "Agent Pro (Harga Normal)",
            price: "10000000",
            priceCurrency: "IDR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              billingDuration: 1,
              billingIncrement: 1,
              unitText: "MONTH",
              price: "10000000",
              priceCurrency: "IDR",
            },
          },
          {
            "@type": "Offer",
            name: "Agent Pro (Harga Referral Agen)",
            price: "5000000",
            priceCurrency: "IDR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              billingDuration: 1,
              billingIncrement: 1,
              unitText: "MONTH",
              price: "5000000",
              priceCurrency: "IDR",
            },
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <SocialProofSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
