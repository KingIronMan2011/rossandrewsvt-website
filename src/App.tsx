import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Routes, Route } from "react-router-dom";
import "./i18n";
import { siteConfig } from "./config/site";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import SocialLinks from "./components/SocialLinks";
import ArtSections from "./components/ArtSections";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode !== null
      ? JSON.parse(savedMode)
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handlePanelClick = () => {
    window.open(siteConfig.panel.url, "_blank", "noopener,noreferrer");
  };

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
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
          toggleDarkMode={() => setDarkMode((prev: boolean) => !prev)}
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
  );
}

export default App;
