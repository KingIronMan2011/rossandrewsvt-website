import { ExternalLink } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { LanguageSelector } from "./LanguageSelector";
import { Link } from "react-router-dom";

const Header = ({
  t,
  handlePanelClick,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: any) => {
  return (
    <motion.nav
      className="sticky top-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-sm border-b border-gray-200 dark:border-gray-700 z-50"
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
            className="text-xl font-bold text-gray-900 dark:text-white transition-all duration-500 ease-in-out tracking-tight"
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.1, duration: 0.5 },
            }}
          >
            <Link
              to="/"
              className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline rounded transition-all duration-300"
              tabIndex={0}
              aria-label={t("title") || "RossAndrewsVT"}
            >
              {t("title") || "RossAndrewsVT"}
            </Link>
          </motion.h1>
          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.2,
                duration: 0.5,
                type: "spring",
                stiffness: 120,
              },
            }}
          >
            <LanguageSelector />
            <ThemeToggle />
            <motion.button
              onClick={handlePanelClick}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 ease-in-out flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 16px rgba(59, 130, 246, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t("panel.buttonText") || "Panel"}
              <ExternalLink size={18} />
            </motion.button>
          </motion.div>
          {/* Mobile Navigation */}
          <motion.div
            className="md:hidden flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.2,
                duration: 0.5,
                type: "spring",
                stiffness: 120,
              },
            }}
          >
            <ThemeToggle />
            <motion.button
              onClick={() => setIsMobileMenuOpen((v: boolean) => !v)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 transition-all duration-300"
              aria-label="Toggle mobile menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="space-y-1.5">
                <motion.div
                  className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 8 : 0,
                  }}
                />
                <motion.div
                  className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300"
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                  }}
                />
                <motion.div
                  className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -8 : 0,
                  }}
                />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
