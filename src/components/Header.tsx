"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/i18n/dictionaries";
import type { Dictionary } from "@/i18n/types";

export function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const switchLocale = lang === "en" ? "zh-TW" : "en";
  const switchLabel = lang === "en" ? "中文" : "English";

  // Replace current locale prefix in path
  const switchPath = pathname.replace(/^\/(en|zh-TW)/, `/${switchLocale}`);

  const navItems = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/schedule`, label: dict.nav.schedule },
    { href: `/${lang}/resources`, label: dict.nav.resources },
    { href: `/${lang}/feedback`, label: dict.nav.feedback },
  ];

  const isActive = (href: string) => {
    if (href === `/${lang}`) return pathname === `/${lang}`;
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-slate-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <span className="text-xl font-bold">CPO</span>
            <span className="hidden sm:inline text-sm text-slate-300">
              {dict.site.subtitle}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-slate-700 text-white"
                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={switchPath}
              className="ml-3 px-3 py-1.5 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-500 transition-colors"
            >
              {switchLabel}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-slate-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(item.href)
                    ? "bg-slate-700 text-white"
                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={switchPath}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-500"
            >
              {switchLabel}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
