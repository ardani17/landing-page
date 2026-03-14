import Link from "next/link";
import {
  Mail,
  MessageCircle,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

const footerLinks = {
  platform: [
    { name: "Fitur", href: "#fitur" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ],
  company: [
    { name: "Tentang Kami", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Disclaimer", href: "#" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-vastara-red-600 mb-4">
              VASTARA
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Screening Saham Cerdas, Passive Income Pasti
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-neutral-400 hover:text-vastara-red-600 dark:hover:text-vastara-red-500 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">
              Platform
            </h4>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 hover:text-vastara-red-600 dark:text-neutral-400 dark:hover:text-vastara-red-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">
              Perusahaan
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 hover:text-vastara-red-600 dark:text-neutral-400 dark:hover:text-vastara-red-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">
              Hubungi Kami
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@vastara.id"
                  className="flex items-center gap-2 text-sm text-neutral-600 hover:text-vastara-red-600 dark:text-neutral-400 dark:hover:text-vastara-red-500 transition-colors"
                >
                  <Mail size={16} />
                  info@vastara.id
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281234567890"
                  className="flex items-center gap-2 text-sm text-neutral-600 hover:text-vastara-red-600 dark:text-neutral-400 dark:hover:text-vastara-red-500 transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500 dark:text-neutral-500">
              © {new Date().getFullYear()} VASTARA. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-neutral-500 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-300 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
