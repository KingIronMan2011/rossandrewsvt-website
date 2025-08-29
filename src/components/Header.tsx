import { ExternalLink } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { LanguageSelector } from "./LanguageSelector";

const Header = ({
  t,
  handlePanelClick,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: any) => {
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
            <a
              href="/"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 rounded"
              tabIndex={0}
              aria-label={t("title") || "RossAndrewsVT"}
            >
              {t("title") || "RossAndrewsVT"}
            </a>
          </motion.h1>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSelector />
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
      </div>
    </motion.nav>
  );
};

export default Header;
