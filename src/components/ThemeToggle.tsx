import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

// ThemeToggle component: toggles between light and dark mode
const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  // Framer Motion hover animation for the toggle button
  const buttonHover = {
    scale: 1.08,
    boxShadow: "0 8px 32px 0 rgba(251,191,36,0.13)",
    transition: {
      type: "tween" as const,
      duration: 0.13,
      ease: [0.4, 0, 0.2, 1],
    },
  };

  // Framer Motion hover/tap animation for the toggle button (mobile and desktop)
  const buttonMotion =
    theme === "light"
      ? {
          whileHover: {
            scale: 1.08,
            boxShadow: "none",
            transition: {
              type: "tween" as const,
              duration: 0.13,
              ease: "easeInOut",
            },
          },
          whileFocus: {
            scale: 1.08,
            boxShadow: "none",
            transition: {
              type: "tween" as const,
              duration: 0.13,
              ease: "easeInOut",
            },
          },
          whileTap: {
            scale: 0.96,
            boxShadow: "none",
            transition: {
              type: "tween" as const,
              duration: 0.13,
              ease: "easeInOut",
            },
          },
        }
      : {
          whileHover: buttonHover,
          whileFocus: buttonHover,
          whileTap: {
            scale: 0.96,
            boxShadow: "0 4px 16px 0 rgba(251,191,36,0.10)",
            transition: {
              type: "tween" as const,
              duration: 0.13,
              ease: "easeInOut",
            },
          },
        };

  return (
    // @ts-expect-error Framer Motion typing limitation
    <motion.button
      onClick={toggleTheme}
      className={`p-2 rounded-xl border border-transparent 
        ${
          theme === "light"
            ? "bg-white hover:bg-white"
            : "bg-gray-800/60 hover:bg-gray-700/80"
        }
        transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
      aria-label="Toggle theme"
      {...buttonMotion}
      type="button"
      style={{ willChange: "transform, box-shadow" } as React.CSSProperties}
    >
      <span className="sr-only">Toggle theme</span>
      {theme === "light" ? (
        <Moon size={20} className="text-blue-400" />
      ) : (
        <Sun size={20} className="text-yellow-400 slow-spin" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
