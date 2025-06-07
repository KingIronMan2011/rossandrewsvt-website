import { Globe, ChevronDown, ExternalLink } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dropdownVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.98, pointerEvents: "none" as const },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    pointerEvents: "auto" as const,
    transition: { type: "spring", stiffness: 220, damping: 18 },
  },
};

const mobileMenuVariants = {
  closed: { opacity: 0, y: -20, pointerEvents: "none" as const, height: 0 },
  open: {
    opacity: 1,
    y: 0,
    pointerEvents: "auto" as const,
    height: "auto",
    transition: { type: "spring", stiffness: 180, damping: 22 },
  },
};

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

  const languageOptions = t("language.options", { returnObjects: true }) || {};

  return (
    <motion.nav
      className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-md rounded-b-xl transition-all duration-500 z-50"
      initial={{ opacity: 0, y: -30 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 120, damping: 18 },
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.h1
            className="text-xl font-semibold text-gray-800 dark:text-white transition-all duration-500 ease-in-out tracking-tight"
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.1, duration: 0.5 },
            }}
          >
            {t("title") || "RossAndrewsVT"}
          </motion.h1>
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
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    key="lang-dropdown"
                    className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 p-2 focus:outline-none origin-top z-[9999]"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {Object.entries(languageOptions).map(([code, name]) => (
                      <motion.button
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
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 }}
                      >
                        {i18n.language === code && <span>✓</span>}
                        <span className="flex-1 text-left">
                          {name as string}
                        </span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <ThemeToggle />
            <motion.button
              onClick={handlePanelClick}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center gap-2 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
              whileHover={{
                scale: 1.06,
                boxShadow: "0 4px 24px 0 rgba(59,130,246,0.13)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              {t("panel.buttonText") || "Panel"}
              <ExternalLink size={18} />
            </motion.button>
          </div>
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsMobileMenuOpen((v: boolean) => !v)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
              aria-label="Toggle mobile menu"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
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
            </motion.button>
          </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              key="mobile-menu"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="py-4 border-t border-gray-200 dark:border-gray-700">
                <div className="space-y-4">
                  <div className="px-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      {t("language.current") || "Language"}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(languageOptions).map(([code, name]) => (
                        <motion.button
                          key={code}
                          onClick={() => changeLanguage(code)}
                          className={`px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                            i18n.language === code
                              ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 }}
                        >
                          {i18n.language === code && <span>✓</span>}
                          <span className="flex-1 text-left">
                            {name as string}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                  <div className="px-4">
                    <motion.button
                      onClick={handlePanelClick}
                      className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0 4px 24px 0 rgba(59,130,246,0.13)",
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {t("panel.buttonText") || "Panel"}
                      <ExternalLink size={18} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Header;
