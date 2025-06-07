import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const buttonHover = {
    scale: 1.08,
    boxShadow: "0 8px 32px 0 rgba(251,191,36,0.13)",
    transition: { type: "tween", duration: 0.13, ease: "easeInOut" },
  };

  const buttonMotion = {
    whileHover: buttonHover,
    whileFocus: buttonHover,
    whileTap: {
      scale: 0.96,
      boxShadow: "0 4px 16px 0 rgba(251,191,36,0.10)",
      transition: { type: "tween", duration: 0.13, ease: "easeInOut" },
    },
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center rounded-full border border-transparent bg-gray-800/60 hover:bg-gray-700/80 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Toggle theme"
      {...buttonMotion}
      type="button"
      style={{ willChange: "transform, box-shadow" }}
    >
      <span className="sr-only">Toggle theme</span>
      {theme === "dark" ? (
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex items-center justify-center w-6 h-6"
        >
          <Sun size={22} className="text-yellow-400" />
        </motion.span>
      ) : (
        <span className="flex items-center justify-center w-6 h-6">
          <Moon size={22} className="text-blue-400" />
        </span>
      )}
    </motion.button>
  );
};

export default ThemeToggle;
