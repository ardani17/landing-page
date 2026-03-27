"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Monitor } from "lucide-react";
import { type ThemePreference, useTheme } from "./ThemeProvider";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Fitur", href: "#fitur" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const themeOptions: {
  value: ThemePreference;
  label: string;
  icon: typeof Sun;
}[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md shadow-sm"
        : "bg-transparent"
        }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-32">
              <Image
                src="/assets/Vastara Text Logo No Tagline WHite.png"
                alt="VASTARA"
                fill
                className="object-contain hidden dark:block"
                priority
              />
              <Image
                src="/assets/Vastara Text Logo No Tagline Black.png"
                alt="VASTARA"
                fill
                className="object-contain block dark:hidden"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-neutral-600 hover:text-vastara-red-600 dark:text-neutral-300 dark:hover:text-vastara-red-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <div className="inline-flex items-center gap-1 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-1">
              {themeOptions.map((option) => {
                const Icon = option.icon;
                const isActive = theme === option.value;

                return (
                  <button
                    key={option.value}
                    onClick={() => setTheme(option.value)}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                        : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                    }`}
                    aria-pressed={isActive}
                    aria-label={`Mode ${option.label}`}
                  >
                    <Icon size={14} />
                    <span className="hidden lg:inline">{option.label}</span>
                  </button>
                );
              })}
            </div>
            <Link
              href="https://saham.vastara.id/login"
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link
              href="https://saham.vastara.id/register"
              className="px-4 py-2 bg-vastara-red-600 hover:bg-vastara-red-700 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Gabung Sekarang
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-neutral-600 hover:text-vastara-red-600 dark:text-neutral-300 dark:hover:text-vastara-red-500 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  Mode Tampilan
                </p>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                  {theme === "system"
                    ? `System (${resolvedTheme === "dark" ? "Dark" : "Light"})`
                    : theme === "dark"
                      ? "Dark"
                      : "Light"}
                </p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {themeOptions.map((option) => {
                    const Icon = option.icon;
                    const isActive = theme === option.value;

                    return (
                      <button
                        key={option.value}
                        onClick={() => setTheme(option.value)}
                        className={`inline-flex flex-col items-center justify-center gap-1 rounded-lg border px-2 py-2 text-xs font-medium transition-colors ${
                          isActive
                            ? "border-vastara-red-600 bg-vastara-red-600 text-white"
                            : "border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300"
                        }`}
                        aria-pressed={isActive}
                        aria-label={`Mode ${option.label}`}
                      >
                        <Icon size={14} />
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
              <hr className="border-neutral-200 dark:border-neutral-800" />
              <Link
                href="https://saham.vastara.id/login"
                className="text-base font-medium text-neutral-600 dark:text-neutral-300"
              >
                Login
              </Link>
              <Link
                href="https://saham.vastara.id/register"
                className="w-full text-center px-4 py-2 bg-vastara-red-600 hover:bg-vastara-red-700 text-white font-semibold rounded-lg transition-colors"
              >
                Gabung Sekarang
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
