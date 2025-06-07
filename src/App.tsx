import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./i18n";
import { siteConfig } from "./config/site";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import SocialLinks from "./components/SocialLinks";
import ArtSections from "./components/ArtSections";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode !== null) {
        return JSON.parse(savedMode);
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  // Force re-render on language change
  const [, setLang] = useState(i18n.language);
  useEffect(() => {
    const handler = () => setLang(i18n.language);
    i18n.on("languageChanged", handler);
    return () => i18n.off("languageChanged", handler);
  }, [i18n]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => setIsVisible(true), []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langMenuRef.current &&
        !langMenuRef.current.contains(event.target as Node)
      ) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handler functions
  const handlePanelClick = () => {
    window.open(siteConfig.panel.url, "_blank", "noopener,noreferrer");
  };

  const toggleDarkMode = () => setDarkMode((prev: any) => !prev);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
    setIsLangMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Data for sections
  const languageCodes = ["en", "de", "es", "fr", "it", "pt"];

  return (
    <ThemeProvider>
      <Router>
        <div
          className={`min-h-screen transition-opacity duration-700 ease-in-out relative overflow-x-hidden ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background overlays */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 transition-all duration-700" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.08),transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.04),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,197,253,0.08),transparent_60%)] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.04),transparent_60%)]" />
            <div className="absolute inset-0 bg-white/40 dark:bg-black/30 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-50">
            <Header
              t={t}
              i18n={i18n}
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              isLangMenuOpen={isLangMenuOpen}
              setIsLangMenuOpen={setIsLangMenuOpen}
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
              langMenuRef={langMenuRef}
              languageCodes={languageCodes}
              changeLanguage={changeLanguage}
              handlePanelClick={handlePanelClick}
            />

            <Routes>
              <Route
                path="/"
                element={
                  <main className="relative z-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
                    <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg rounded-2xl shadow-xl p-6 md:p-10 transition-all duration-500 hover:shadow-2xl border border-gray-100 dark:border-gray-700">
                      <div className="flex flex-col md:flex-row gap-10 items-start">
                        <div className="w-full md:w-1/3 transition-all duration-500">
                          <ProfileCard
                            t={t}
                            handleCopy={handleCopy}
                            copiedField={copiedField}
                            siteConfig={siteConfig}
                          />
                        </div>
                        <div className="w-full md:w-2/3 transition-all duration-500">
                          <SocialLinks t={t} />
                          <ArtSections t={t} />
                        </div>
                      </div>
                    </div>
                  </main>
                }
              />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/terms-of-service" element={<Terms />} />
            </Routes>
            <Footer t={t} />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
