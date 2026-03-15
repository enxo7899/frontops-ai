import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  sq: () => import("./sq.json").then((module) => module.default),
};

export type Locale = "en" | "sq";

export const i18n = {
  defaultLocale: "en" as const,
  locales: ["en", "sq"] as const,
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};
