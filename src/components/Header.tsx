"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import type { Locale } from "@/i18n/dictionaries";
import type { Dictionary } from "@/i18n/types";

type NavLink = { href: string; label: string };
type NavDropdown = { label: string; items: NavLink[] };
type NavItem = NavLink | NavDropdown;

function isDropdown(item: NavItem): item is NavDropdown {
  return "items" in item;
}

export function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const switchLocale = lang === "en" ? "zh-TW" : "en";
  const switchLabel = lang === "en" ? "中文" : "English";
  const switchPath = pathname.replace(/^\/(en|zh-TW)/, `/${switchLocale}`);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const navItems: NavItem[] = [
    { href: `/${lang}`, label: dict.nav.home },
    {
      label: dict.nav.about,
      items: [
        { href: `/${lang}/emi-community`, label: dict.nav.emi_community },
        { href: `/${lang}/about`, label: dict.nav.peer_observation },
      ],
    },
    {
      label: dict.nav.course,
      items: [
        { href: `/${lang}/syllabus`, label: dict.nav.syllabus },
        { href: `/${lang}/teaching-log`, label: dict.nav.teaching_log },
        { href: `/${lang}/student-profile`, label: dict.nav.student_profile },
      ],
    },
    {
      label: dict.nav.emi_teaching,
      items: [
        { href: `/${lang}/teaching-methods`, label: dict.nav.teaching_methods },
        { href: `/${lang}/platforms-tools`, label: dict.nav.platforms_tools },
        { href: `/${lang}/emi-resources`, label: dict.nav.emi_resources },
      ],
    },
    {
      label: dict.nav.observation,
      items: [
        { href: `/${lang}/schedule`, label: dict.nav.schedule },
        { href: `/${lang}/resources`, label: dict.nav.guidelines },
        { href: `/${lang}/feedback`, label: dict.nav.feedback },
      ],
    },
  ];

  const isActive = (href: string) => {
    if (href === `/${lang}`) return pathname === `/${lang}`;
    return pathname.startsWith(href);
  };

  const isDropdownActive = (items: NavLink[]) =>
    items.some((item) => isActive(item.href));

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
          <nav className="hidden md:flex items-center gap-1" ref={navRef}>
            {navItems.map((item, idx) =>
              isDropdown(item) ? (
                <div key={idx} className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === idx ? null : idx)
                    }
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-1 ${
                      isDropdownActive(item.items)
                        ? "bg-slate-700 text-white"
                        : "text-slate-300 hover:bg-slate-700 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform ${openDropdown === idx ? "rotate-180" : ""}`}
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
                  {openDropdown === idx && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-slate-700 rounded-md shadow-lg py-1 z-50">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setOpenDropdown(null)}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive(sub.href)
                              ? "bg-slate-600 text-white"
                              : "text-slate-300 hover:bg-slate-600 hover:text-white"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
              ),
            )}
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
            {navItems.map((item, idx) =>
              isDropdown(item) ? (
                <div key={idx}>
                  <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {item.label}
                  </div>
                  {item.items.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block px-6 py-2 rounded-md text-sm font-medium ${
                        isActive(sub.href)
                          ? "bg-slate-700 text-white"
                          : "text-slate-300 hover:bg-slate-700 hover:text-white"
                      }`}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ) : (
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
              ),
            )}
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
