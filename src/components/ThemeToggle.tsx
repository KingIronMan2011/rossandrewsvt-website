import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const buttonHover = {
    scale: 1.12,
    boxShadow: "0 12px 32px 0 rgba(251,191,36,0.18)",
    transition: { type: "spring", stiffness: 300, damping: 18 },
  };

  const buttonTap = {
    scale: 0.94,
    boxShadow: "0 2px 8px 0 rgba(251,191,36,0.10)",
    transition: { type: "spring", stiffness: 300, damping: 18 },
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center rounded-full border border-transparent bg-gray-800/60 hover:bg-gray-700/80 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Toggle theme"
      whileHover={buttonHover}
      whileFocus={buttonHover}
      whileTap={buttonTap}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: { type: "spring", stiffness: 200, damping: 18 },
      }}
      style={{ willChange: "transform, box-shadow" }}
    >
      <span className="sr-only">Toggle theme</span>
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.span
            key="sun"
            animate={{ rotate: 360, scale: 1, opacity: 1 }}
            initial={{ rotate: 0, scale: 0.7, opacity: 0 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{
              rotate: { repeat: Infinity, duration: 20, ease: "linear" },
              scale: { type: "spring", stiffness: 300, damping: 20 },
              opacity: { duration: 0.18 },
            }}
            className="flex items-center justify-center w-6 h-6"
          >
            <Sun size={20} className="text-yellow-400" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            animate={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.7, opacity: 0 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{
              scale: { type: "spring", stiffness: 300, damping: 20 },
              opacity: { duration: 0.18 },
            }}
            className="flex items-center justify-center w-6 h-6"
          >
            <Moon size={20} className="text-blue-400" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
