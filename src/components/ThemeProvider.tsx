"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

export type ThemePreference = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

const THEME_PREFERENCE_KEY = "vastara-theme-preference";
const LEGACY_THEME_KEY = "vastara-theme";

interface ThemeContextType {
  theme: ThemePreference;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: ThemePreference) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getStoredThemePreference(): ThemePreference | null {
  try {
    const savedPreference = localStorage.getItem(THEME_PREFERENCE_KEY);
    if (
      savedPreference === "light" ||
      savedPreference === "dark" ||
      savedPreference === "system"
    ) {
      return savedPreference;
    }

    const legacyTheme = localStorage.getItem(LEGACY_THEME_KEY);
    if (legacyTheme === "light" || legacyTheme === "dark") {
      return legacyTheme;
    }
  } catch {
    // Ignore localStorage read errors to keep rendering resilient.
  }

  return null;
}

export function ThemeProvider({
  children,
  initialTheme = "system",
}: {
  children: React.ReactNode;
  initialTheme?: ThemePreference;
}) {
  const [theme, setTheme] = useState<ThemePreference>(initialTheme);
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(getSystemTheme);
  const isFirstThemeSync = useRef(true);
  const isRestoringTheme = useRef(false);

  const resolvedTheme: ResolvedTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? "dark" : "light");
    };

    media.addEventListener("change", handleMediaChange);
    return () => media.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    const storedTheme = getStoredThemePreference();
    if (!storedTheme || storedTheme === initialTheme) {
      return;
    }

    // Defer state update to avoid sync setState-in-effect lint rule.
    isRestoringTheme.current = true;
    queueMicrotask(() => {
      setTheme(storedTheme);
    });
  }, [initialTheme]);

  useEffect(() => {
    if (isRestoringTheme.current) {
      isRestoringTheme.current = false;
      return;
    }

    const root = document.documentElement;
    const shouldAnimate = !isFirstThemeSync.current;

    isFirstThemeSync.current = false;
    if (shouldAnimate) {
      root.classList.add("theme-transition");
    }

    root.classList.remove("light", "dark");
    root.classList.add(resolvedTheme);
    root.style.colorScheme = resolvedTheme;
    root.dataset.themePreference = theme;
    localStorage.setItem(THEME_PREFERENCE_KEY, theme);
    localStorage.setItem(LEGACY_THEME_KEY, resolvedTheme);

    if (!shouldAnimate) {
      return;
    }

    const timeout = window.setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 320);

    return () => window.clearTimeout(timeout);
  }, [resolvedTheme, theme]);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    const noopSetTheme: ThemeContextType["setTheme"] = () => {};

    return {
      theme: "system" as ThemePreference,
      resolvedTheme: "dark" as ResolvedTheme,
      setTheme: noopSetTheme,
    };
  }

  return context;
}
