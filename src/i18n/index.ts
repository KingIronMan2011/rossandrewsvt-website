import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { en } from "./locales/en";
import { de } from "./locales/de";
import { es } from "./locales/es";
import { fr } from "./locales/fr";
import { it } from "./locales/it";
import { pt } from "./locales/pt";
import { ro } from "./locales/ro";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en.translation },
      de: { translation: de.translation },
      es: { translation: es.translation },
      fr: { translation: fr.translation },
      it: { translation: it.translation },
      pt: { translation: pt.translation },
      ro: { translation: ro.translation },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "de", "es", "fr", "it", "pt", "ro"],
    detection: {
      order: ["navigator", "localStorage", "htmlTag"],
      lookupLocalStorage: "preferred-language",
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
