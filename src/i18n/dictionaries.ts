import type { Dictionary } from "./types";

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import("./locales/en.json").then((m) => m.default),
  "zh-TW": () => import("./locales/zh-TW.json").then((m) => m.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  const loader = dictionaries[locale] || dictionaries.en;
  return loader();
};

export const locales = ["en", "zh-TW"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
