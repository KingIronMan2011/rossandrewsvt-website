import { Globe, ChevronDown, ExternalLink } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";

const Header = ({
  t,
  i18n,
  isLangMenuOpen,
  setIsLangMenuOpen,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  langMenuRef,
  handlePanelClick,
}: any) => {
  if (!t || !i18n) return <div>Header missing props</div>;

  const [, setLang] = useState(i18n.language);
  useEffect(() => {
    const handler = () => setLang(i18n.language);
    i18n.on("languageChanged", handler);
    return () => i18n.off("languageChanged", handler);
  }, [i18n]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
    setIsLangMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Defensive: fallback to empty object if not found
  const languageOptions = t("language.options", { returnObjects: true }) || {};

  return (
    <nav className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-md rounded-b-xl transition-all duration-500 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white transition-all duration-500 ease-in-out tracking-tight">
            {t("title") || "RossAndrewsVT"}
          </h1>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <div
              className="relative"
              ref={langMenuRef}
              onClick={handleDropdownClick}
            >
              <button
                onClick={() => setIsLangMenuOpen((v: boolean) => !v)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out group focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
                aria-label="Select language"
              >
                <Globe className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {t("language.current") || "Language"}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                    isLangMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 p-2 focus:outline-none transform origin-top scale-100 transition-all duration-300 z-[9999]">
                  {Object.entries(languageOptions).map(([code, name]) => (
                    <button
                      key={code}
                      onClick={(e) => {
                        e.stopPropagation();
                        changeLanguage(code);
                      }}
                      className={`flex items-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                        i18n.language === code
                          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                          : "hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {i18n.language === code && <span>✓</span>}
                      <span className="flex-1 text-left">{name as string}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <ThemeToggle />
            <button
              onClick={handlePanelClick}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center gap-2 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
            >
              {t("panel.buttonText") || "Panel"}
              <ExternalLink size={18} />
            </button>
          </div>
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen((v: boolean) => !v)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
              aria-label="Toggle mobile menu"
            >
              <div className="space-y-1.5">
                <div
                  className={`w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></div>
                <div
                  className={`w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></div>
                <div
                  className={`w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></div>
              </div>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="space-y-4">
              <div className="px-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  {t("language.current") || "Language"}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(languageOptions).map(([code, name]) => (
                    <button
                      key={code}
                      onClick={() => changeLanguage(code)}
                      className={`px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                        i18n.language === code
                          ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      {i18n.language === code && <span>✓</span>}
                      <span className="flex-1 text-left">{name as string}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="px-4">
                <button
                  onClick={handlePanelClick}
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
                >
                  {t("panel.buttonText") || "Panel"}
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
