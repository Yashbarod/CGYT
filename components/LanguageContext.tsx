"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "hi";

interface LanguageContextType {
  lang: Lang;
  toggle: () => void;
  /** Use for JSX content */
  t: (en: ReactNode, hi: ReactNode) => ReactNode;
  /** Use for string attributes (placeholder, aria-label, etc.) */
  ts: (en: string, hi: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggle: () => {},
  t: (en) => en,
  ts: (en) => en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggle = () => setLang((l) => (l === "en" ? "hi" : "en"));
  const t = (en: ReactNode, hi: ReactNode): ReactNode =>
    lang === "en" ? en : hi;
  const ts = (en: string, hi: string): string =>
    lang === "en" ? en : hi;

  return (
    <LanguageContext.Provider value={{ lang, toggle, t, ts }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
