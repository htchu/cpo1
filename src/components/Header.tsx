"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import type { Locale } from "@/i18n/dictionaries";
import type { Dictionary } from "@/i18n/types";

export function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const switchLocale = lang === "en" ? "zh-TW" : "en";
  const switchLabel = lang === "en" ? "中文" : "English";
  const switchPath = pathname.replace(/^\/(en|zh-TW)/, `/${switchLocale}`);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setAboutOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const navItems = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/schedule`, label: dict.nav.schedule },
    { href: `/${lang}/resources`, label: dict.nav.resources },
    { href: `/${lang}/feedback`, label: dict.nav.feedback },
  ];

  const aboutSubItems = [
    { href: `/${lang}/emi-community`, label: dict.nav.emi_community },
    { href: `/${lang}/about`, label: dict.nav.peer_observation },
  ];

  const isActive = (href: string) => {
    if (href === `/${lang}`) return pathname === `/${lang}`;
    return pathname.startsWith(href);
  };

  const isAboutActive =
    pathname.startsWith(`/${lang}/about`) ||
    pathname.startsWith(`/${lang}/emi-community`);

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
            {/* Home */}
            <Link
              href={navItems[0].href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(navItems[0].href)
                  ? "bg-slate-700 text-white"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {navItems[0].label}
            </Link>

            {/* About dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-1 ${
                  isAboutActive
                    ? "bg-slate-700 text-white"
                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {dict.nav.about}
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {aboutOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-slate-700 rounded-md shadow-lg py-1 z-50">
                  {aboutSubItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setAboutOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        isActive(item.href)
                          ? "bg-slate-600 text-white"
                          : "text-slate-300 hover:bg-slate-600 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other nav items */}
            {navItems.slice(1).map((item) => (
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
            <Link
              href={navItems[0].href}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                isActive(navItems[0].href)
                  ? "bg-slate-700 text-white"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {navItems[0].label}
            </Link>

            {/* About section in mobile */}
            <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {dict.nav.about}
            </div>
            {aboutSubItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-6 py-2 rounded-md text-sm font-medium ${
                  isActive(item.href)
                    ? "bg-slate-700 text-white"
                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {navItems.slice(1).map((item) => (
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
