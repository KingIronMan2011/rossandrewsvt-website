import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe, ChevronDown, Check } from "lucide-react";

// This is a reusable sub-component for each language option in the dropdown.
const LanguageOption = ({
  name,
  isActive,
  onClick,
}: {
  code: string;
  name: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out ${
      isActive
        ? "bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 shadow-sm"
        : "hover:bg-zinc-50 dark:hover:bg-zinc-700/50 text-zinc-700 dark:text-zinc-300 hover:shadow-sm"
    }`}
  >
    {isActive && <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
    <span className="flex-1 text-left">{name}</span>
  </button>
);

export function LanguageSelector() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  // This effect handles closing the menu when clicking outside of it.
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="flex items-center gap-2 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300 ease-in-out hover:scale-105"
        aria-label="Select language"
      >
        <Globe className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
        <ChevronDown
          className={`w-4 h-4 text-zinc-400 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-zinc-800 rounded-xl shadow-lg ring-1 ring-zinc-200 dark:ring-zinc-700 p-2 focus:outline-none transform origin-top-right transition-all duration-300 ease-out scale-100 opacity-100">
          {Object.entries(t("language.options", { returnObjects: true })).map(
            ([code, name]) => (
              <LanguageOption
                key={code}
                code={code}
                name={name as string}
                isActive={i18n.language === code}
                onClick={() => changeLanguage(code)}
              />
            ),
          )}
        </div>
      )}
    </div>
  );
}
