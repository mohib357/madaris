"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export type Lang = "bn" | "en" | "ar";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "bn",
  setLang: () => {},
  dir: "ltr",
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("bn");

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    // update html dir for Arabic RTL support
    if (typeof document !== "undefined") {
      document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = l;
    }
  }, []);

  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
